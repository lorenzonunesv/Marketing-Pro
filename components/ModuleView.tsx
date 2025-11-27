
import React, { useState, useRef, useEffect } from 'react';
import { Module, Task } from '../types';
import ChatAssistant from './ChatAssistant';
import { generateAudioFromText } from '../services/geminiService';

interface ModuleViewProps {
  module: Module;
  onUpdateModule: (updatedModule: Module) => void;
}

// Helper to decode Base64
function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

// Helper to decode PCM Data (Gemini API returns raw PCM 24kHz)
async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number = 24000,
  numChannels: number = 1,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

const ModuleView: React.FC<ModuleViewProps> = ({ module, onUpdateModule }) => {
  const [activeTab, setActiveTab] = useState<'content' | 'tasks' | 'chat'>('content');
  const [pendingChatMessage, setPendingChatMessage] = useState<string | undefined>(undefined);
  
  // Audio State
  const [audioState, setAudioState] = useState<'idle' | 'loading' | 'playing' | 'paused' | 'ended'>('idle');
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null);
  const startTimeRef = useRef<number>(0);
  const pauseTimeRef = useRef<number>(0);

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      stopAudio();
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [module.id]); // Reset when module changes

  const stopAudio = () => {
    if (sourceNodeRef.current) {
      try {
        sourceNodeRef.current.stop();
      } catch (e) {
        // Ignore errors if already stopped
      }
      sourceNodeRef.current = null;
    }
    setAudioState('idle');
    pauseTimeRef.current = 0;
    startTimeRef.current = 0;
  };

  const handlePlayPause = async () => {
    if (audioState === 'playing') {
      // Pause
      if (sourceNodeRef.current && audioContextRef.current) {
        sourceNodeRef.current.stop();
        sourceNodeRef.current = null;
        pauseTimeRef.current = audioContextRef.current.currentTime - startTimeRef.current;
        setAudioState('paused');
      }
    } else if (audioState === 'paused' || audioState === 'ended' || (audioState === 'idle' && audioBuffer)) {
      // Resume or Start existing buffer
      playBuffer(pauseTimeRef.current);
    } else {
      // Generate New Audio
      generateAndPlay();
    }
  };

  const playBuffer = (offset: number = 0) => {
    if (!audioBuffer || !audioContextRef.current) return;

    const source = audioContextRef.current.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContextRef.current.destination);
    
    source.onended = () => {
       // Only set to ended if we didn't manually stop/pause it (which nulls the ref first)
       if (sourceNodeRef.current === source) {
         setAudioState('ended');
         pauseTimeRef.current = 0;
       }
    };

    source.start(0, offset);
    startTimeRef.current = audioContextRef.current.currentTime - offset;
    sourceNodeRef.current = source;
    setAudioState('playing');
  };

  const generateAndPlay = async () => {
    setAudioState('loading');
    
    try {
      // Strip HTML tags to get clean text
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = module.content;
      const cleanText = tempDiv.innerText || tempDiv.textContent || "";
      
      const base64Audio = await generateAudioFromText(cleanText);
      
      if (!base64Audio) {
        alert("Não foi possível gerar o áudio neste momento.");
        setAudioState('idle');
        return;
      }

      // Initialize Audio Context
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      }

      const decodedBuffer = await decodeAudioData(
        decode(base64Audio),
        audioContextRef.current,
        24000
      );

      setAudioBuffer(decodedBuffer);
      // Slight delay to ensure state updates before playing
      setTimeout(() => {
          // Play logic needs to access the updated ref/state context, so we call it directly here with the new buffer
          if (audioContextRef.current) {
            const source = audioContextRef.current.createBufferSource();
            source.buffer = decodedBuffer;
            source.connect(audioContextRef.current.destination);
            source.onended = () => {
                if (sourceNodeRef.current === source) {
                    setAudioState('ended');
                    pauseTimeRef.current = 0;
                }
            };
            source.start(0);
            startTimeRef.current = audioContextRef.current.currentTime;
            sourceNodeRef.current = source;
            setAudioState('playing');
          }
      }, 100);

    } catch (e) {
      console.error(e);
      alert("Erro ao processar o áudio.");
      setAudioState('idle');
    }
  };

  const handleTaskToggle = (taskId: string) => {
    const updatedTasks = module.tasks.map(t => 
      t.id === taskId ? { ...t, completed: !t.completed } : t
    );
    onUpdateModule({ ...module, tasks: updatedTasks });
  };

  const handleTaskAnswerChange = (taskId: string, answer: string) => {
    const updatedTasks = module.tasks.map(t => 
      t.id === taskId ? { ...t, userAnswer: answer } : t
    );
    onUpdateModule({ ...module, tasks: updatedTasks });
  };

  const handleCompleteModule = () => {
    const allTasksDone = module.tasks.every(t => t.completed);
    if (!allTasksDone && !window.confirm("Nem todas as tarefas estão marcadas. Deseja concluir mesmo assim?")) {
      return;
    }
    onUpdateModule({ ...module, isCompleted: !module.isCompleted });
  };

  const handleAnalyzeTask = (task: Task) => {
    if (!task.userAnswer || task.userAnswer.trim().length === 0) {
        alert("Por favor, escreva sua resposta antes de pedir análise.");
        return;
    }
    
    const prompt = `Estou realizando a tarefa prática: "${task.description}".
Minha resposta/estratégia foi:
"${task.userAnswer}"

Por favor, analise minha resposta. Aponte se cometi algum erro, o que posso melhorar e me dê uma sugestão para aprimorar essa tarefa.`;

    setPendingChatMessage(prompt);
    setActiveTab('chat');
  };

  const completedTasksCount = module.tasks.filter(t => t.completed).length;
  const progressPercent = (completedTasksCount / module.tasks.length) * 100;

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Módulo {module.id}: {module.title}</h2>
          <p className="text-gray-600 mt-1">{module.description}</p>
        </div>
        <div className="flex items-center gap-4">
            <div className="text-right">
                <p className="text-sm text-gray-500">Progresso do Módulo</p>
                <p className="font-bold text-indigo-600">{Math.round(progressPercent)}%</p>
            </div>
            {module.isCompleted ? (
                 <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-medium text-sm flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Concluído
                 </span>
            ) : (
                <button 
                    onClick={handleCompleteModule}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors shadow-sm ${
                        progressPercent === 100 
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                        : 'bg-white border border-gray-300 text-gray-400 cursor-not-allowed'
                    }`}
                    disabled={progressPercent < 100}
                >
                    Concluir Módulo (+10%)
                </button>
            )}
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('content')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'content'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Conteúdo
          </button>
          <button
            onClick={() => setActiveTab('tasks')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'tasks'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Tarefas Práticas
          </button>
          <button
            onClick={() => setActiveTab('chat')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'chat'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Assistente IA
          </button>
        </nav>
      </div>

      {/* Content Area */}
      <div className="min-h-[400px]">
        
        {/* Module Content Tab */}
        <div style={{ display: activeTab === 'content' ? 'block' : 'none' }}>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 prose max-w-none text-gray-700">
            <div dangerouslySetInnerHTML={{ __html: module.content }} />
            
            {/* Audiobook Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="bg-indigo-50 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-indigo-600 p-3 rounded-full text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-indigo-900">Audiobook do Módulo</h3>
                            <p className="text-sm text-indigo-700">Prefere ouvir? Escute todo o conteúdo deste módulo narrado por IA.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        {audioState === 'loading' ? (
                            <button disabled className="flex items-center gap-2 px-6 py-3 bg-indigo-300 text-white rounded-lg font-semibold cursor-not-allowed">
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Gerando Áudio...
                            </button>
                        ) : (
                            <>
                                {audioState !== 'idle' && (
                                    <button 
                                        onClick={stopAudio}
                                        className="px-4 py-3 bg-white border border-red-200 text-red-600 rounded-lg font-medium hover:bg-red-50 transition-colors"
                                    >
                                        Parar
                                    </button>
                                )}
                                
                                <button 
                                    onClick={handlePlayPause}
                                    className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-sm"
                                >
                                    {audioState === 'playing' ? (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            Pausar
                                        </>
                                    ) : (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                            </svg>
                                            {audioState === 'paused' ? 'Continuar' : 'Ouvir Agora'}
                                        </>
                                    )}
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>

          </div>
        </div>

        {/* Tasks Tab */}
        <div style={{ display: activeTab === 'tasks' ? 'block' : 'none' }}>
          <div className="space-y-6">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-2">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="ml-3">
                        <p className="text-sm text-yellow-700">
                            Responda as tarefas abaixo. Você pode pedir para a IA analisar sua resposta clicando no botão "Analisar com IA".
                        </p>
                    </div>
                </div>
            </div>
            
            {module.tasks.map((task) => (
              <div
                key={task.id}
                className={`p-6 rounded-lg border-2 transition-all ${
                  task.completed
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 bg-white hover:border-indigo-200'
                }`}
              >
                <div 
                    className="flex items-start gap-4 cursor-pointer mb-4" 
                    onClick={() => handleTaskToggle(task.id)}
                >
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 ${
                        task.completed ? 'bg-green-500 border-green-500' : 'border-gray-300'
                    }`}>
                        {task.completed && (
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                        )}
                    </div>
                    <div>
                        <span className={`text-lg font-medium ${task.completed ? 'text-green-800' : 'text-gray-800'}`}>
                        {task.description}
                        </span>
                        <p className="text-xs text-gray-500 mt-1">
                            {task.completed ? 'Concluída!' : 'Clique no círculo para concluir.'}
                        </p>
                    </div>
                </div>
                
                <div className="ml-10">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Sua Resposta / Anotações:
                    </label>
                    <textarea
                        value={task.userAnswer || ''}
                        onChange={(e) => handleTaskAnswerChange(task.id, e.target.value)}
                        placeholder="Digite sua resposta aqui..."
                        className="w-full h-32 p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white text-sm mb-2"
                    />
                    <div className="flex justify-end">
                        <button
                            onClick={() => handleAnalyzeTask(task)}
                            className="flex items-center gap-2 px-3 py-1.5 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-md hover:bg-indigo-200 transition-colors"
                        >
                            <span>🤖</span> Analisar com IA
                        </button>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Tab */}
        <div style={{ display: activeTab === 'chat' ? 'block' : 'none' }}>
          <ChatAssistant 
            moduleTitle={module.title} 
            moduleDescription={module.description}
            externalMessage={pendingChatMessage}
            onMessageSent={() => setPendingChatMessage(undefined)}
          />
        </div>

      </div>
    </div>
  );
};

export default ModuleView;
