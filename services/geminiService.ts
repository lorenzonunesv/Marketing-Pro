
import { GoogleGenAI, ChatSession, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const createChatSession = (modelName: string = "gemini-2.5-flash", context: string): ChatSession => {
  return ai.chats.create({
    model: modelName,
    config: {
      systemInstruction: `Você é um tutor especialista em Marketing Digital. 
      O aluno está estudando o seguinte módulo: "${context}".
      Responda de forma didática, encorajadora e prática. 
      Dê exemplos reais de campanhas ou estratégias quando possível.
      Mantenha as respostas concisas, focadas em ajudar o aluno a resolver as tarefas do módulo.`,
    },
  });
};

export const sendMessageToChat = async (chat: ChatSession, message: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "Desculpe, não consegui processar sua resposta agora.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "Ocorreu um erro ao conectar com o assistente. Verifique sua chave de API ou tente novamente mais tarde.";
  }
};

export const generateAudioFromText = async (text: string): Promise<string | null> => {
  try {
    // We use a simplified text version to ensure it fits within reasonable limits and reads naturally
    // Truncate if too long to avoid timeouts (approx 4000 chars is a safe chunk for a quick demo)
    const safeText = text.slice(0, 4000); 

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: safeText }] }],
      config: {
        responseModalities: ["AUDIO" as any], // Cast to any to accept string literal if Enum is strictly typed
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' },
          },
        },
      },
    });
    
    return response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data || null;
  } catch (error) {
    console.error("TTS Error:", error);
    return null;
  }
};
