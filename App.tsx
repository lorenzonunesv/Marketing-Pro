import React, { useState, useEffect } from 'react';
import { INITIAL_MODULES } from './constants';
import { Module, User, AppView } from './types';
import AuthView from './components/AuthView';
import ModuleView from './components/ModuleView';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [view, setView] = useState<AppView>(AppView.LOGIN);
  const [modules, setModules] = useState<Module[]>(INITIAL_MODULES);
  const [currentModuleId, setCurrentModuleId] = useState<number>(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Load state from local storage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('mk_user');
    const savedModulesJSON = localStorage.getItem('mk_modules');
    
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setView(AppView.DASHBOARD);
    }
    
    if (savedModulesJSON) {
      try {
        const savedModules: Module[] = JSON.parse(savedModulesJSON);
        
        // Merge saved progress (completed states and user answers) with fresh content from INITIAL_MODULES
        // This ensures updates to constants.ts (content updates) appear even for existing users
        const mergedModules = INITIAL_MODULES.map(initialMod => {
            const savedMod = savedModules.find(s => s.id === initialMod.id);
            if (!savedMod) return initialMod;

            return {
                ...initialMod, // Use fresh content/title/description
                isCompleted: savedMod.isCompleted, // Keep completed status
                tasks: initialMod.tasks.map(initialTask => {
                    const savedTask = savedMod.tasks.find(t => t.id === initialTask.id);
                    return {
                        ...initialTask,
                        completed: savedTask ? savedTask.completed : false,
                        userAnswer: savedTask ? savedTask.userAnswer : ''
                    };
                })
            };
        });
        
        setModules(mergedModules);
      } catch (e) {
        console.error("Error parsing saved modules", e);
        // If error, fallback to initial
        setModules(INITIAL_MODULES);
      }
    }
  }, []);

  // Save modules whenever they change
  useEffect(() => {
    localStorage.setItem('mk_modules', JSON.stringify(modules));
  }, [modules]);

  const handleLogin = (newUser: User) => {
    setUser(newUser);
    localStorage.setItem('mk_user', JSON.stringify(newUser));
    setView(AppView.DASHBOARD);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('mk_user');
    setView(AppView.LOGIN);
  };

  const handleModuleUpdate = (updatedModule: Module) => {
    setModules(prev => prev.map(m => m.id === updatedModule.id ? updatedModule : m));
  };

  const totalPoints = modules.filter(m => m.isCompleted).length * 10;
  const currentModule = modules.find(m => m.id === currentModuleId);

  // Render Logic
  if (view === AppView.LOGIN || !user) {
    return <AuthView onLogin={handleLogin} />;
  }

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar Navigation */}
      <aside className={`fixed inset-y-0 left-0 z-30 w-64 bg-indigo-900 text-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-indigo-800">
            <h1 className="text-2xl font-bold tracking-tight">Marketing Pro</h1>
            <p className="text-indigo-300 text-sm mt-1">Sua jornada digital</p>
          </div>

          <div className="p-4 bg-indigo-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-lg font-bold">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="overflow-hidden">
                <p className="font-medium truncate">{user.name}</p>
                <p className="text-xs text-indigo-300 truncate">{user.email}</p>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs text-indigo-200 mb-1">
                <span>Progresso Total</span>
                <span>{totalPoints}%</span>
              </div>
              <div className="w-full bg-indigo-900 rounded-full h-2">
                <div 
                  className="bg-green-400 h-2 rounded-full transition-all duration-500" 
                  style={{ width: `${totalPoints}%` }}
                ></div>
              </div>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-1">
            <button
                onClick={() => { setView(AppView.DASHBOARD); setSidebarOpen(false); }}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${view === AppView.DASHBOARD ? 'bg-indigo-700' : 'hover:bg-indigo-800'}`}
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                Dashboard
            </button>
            <div className="pt-4 pb-2 px-4 text-xs font-semibold text-indigo-400 uppercase tracking-wider">Módulos</div>
            {modules.map((mod) => (
              <button
                key={mod.id}
                onClick={() => { 
                    setCurrentModuleId(mod.id); 
                    setView(AppView.MODULE); 
                    setSidebarOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                  view === AppView.MODULE && currentModuleId === mod.id 
                  ? 'bg-indigo-700 text-white shadow-md' 
                  : 'text-indigo-100 hover:bg-indigo-800'
                }`}
              >
                <span className={`w-6 h-6 flex items-center justify-center rounded text-xs font-bold ${mod.isCompleted ? 'bg-green-500 text-white' : 'bg-indigo-900 text-indigo-300'}`}>
                    {mod.isCompleted ? '✓' : mod.id}
                </span>
                <span className="truncate">{mod.title}</span>
              </button>
            ))}
          </nav>

          <div className="p-4 border-t border-indigo-800">
            <button 
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm text-indigo-200 hover:text-white hover:bg-indigo-800 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
              Sair da conta
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Mobile Header */}
        <header className="lg:hidden bg-white shadow-sm p-4 flex items-center justify-between z-10">
          <button onClick={() => setSidebarOpen(true)} className="text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <span className="font-bold text-gray-800">Marketing Pro</span>
          <div className="w-6"></div> 
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-8">
            {view === AppView.DASHBOARD && (
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Olá, {user.name}!</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <h3 className="text-gray-500 text-sm font-medium">Pontuação Total</h3>
                            <p className="text-4xl font-bold text-indigo-600 mt-2">{totalPoints}/100</p>
                            <p className="text-sm text-gray-400 mt-1">Continue assim!</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <h3 className="text-gray-500 text-sm font-medium">Módulos Completos</h3>
                            <p className="text-4xl font-bold text-green-600 mt-2">
                                {modules.filter(m => m.isCompleted).length}/{modules.length}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <h3 className="text-gray-500 text-sm font-medium">Próxima Lição</h3>
                            <p className="text-lg font-semibold text-gray-800 mt-2 truncate">
                                {modules.find(m => !m.isCompleted)?.title || "Curso Completo! 🎉"}
                            </p>
                            <button 
                                onClick={() => {
                                    const next = modules.find(m => !m.isCompleted);
                                    if(next) {
                                        setCurrentModuleId(next.id);
                                        setView(AppView.MODULE);
                                    }
                                }}
                                disabled={totalPoints === 100}
                                className="mt-3 text-sm text-indigo-600 hover:text-indigo-800 font-medium"
                            >
                                {totalPoints === 100 ? 'Ver Certificado' : 'Continuar Estudando →'}
                            </button>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">Seus Módulos</h3>
                    <div className="grid grid-cols-1 gap-4">
                        {modules.map(mod => (
                            <div 
                                key={mod.id}
                                onClick={() => { setCurrentModuleId(mod.id); setView(AppView.MODULE); }}
                                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer flex items-center justify-between"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg ${mod.isCompleted ? 'bg-green-100 text-green-700' : 'bg-indigo-50 text-indigo-700'}`}>
                                        {mod.id}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{mod.title}</h4>
                                        <p className="text-sm text-gray-500 hidden md:block">{mod.description}</p>
                                    </div>
                                </div>
                                <div>
                                    {mod.isCompleted ? (
                                        <span className="text-green-600 font-medium text-sm">Concluído</span>
                                    ) : (
                                        <span className="text-gray-400 text-sm">Pendente</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {view === AppView.MODULE && currentModule && (
                <div className="max-w-5xl mx-auto">
                    <ModuleView 
                        module={currentModule} 
                        onUpdateModule={handleModuleUpdate} 
                    />
                </div>
            )}
        </div>
      </main>
    </div>
  );
}

export default App;