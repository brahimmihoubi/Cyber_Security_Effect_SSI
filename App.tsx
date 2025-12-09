import React, { useState } from 'react';
import { DATA } from './constants';
import { SectionType } from './types';
import CyberCard from './components/CyberCard';
import ChatAssistant from './components/ChatAssistant';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, AlertTriangle, Zap, Terminal } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SectionType>('advantages');

  const tabs: { id: SectionType; label: string; icon: React.ReactNode }[] = [
    { id: 'advantages', label: 'Advantages', icon: <Shield className="w-4 h-4" /> },
    { id: 'risks', label: 'Risks', icon: <AlertTriangle className="w-4 h-4" /> },
    { id: 'disadvantages', label: 'Disadvantages', icon: <Zap className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 pb-20 overflow-x-hidden selection:bg-cyan-500/30">
      
      {/* Background Grid Animation */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>

      <header className="relative z-10 pt-12 pb-8 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-800 text-cyan-400 text-xs font-mono mb-4">
            <Terminal className="w-3 h-3" />
            <span>SYSTEM_REPORT: AI_IMPACT_ANALYSIS_V1.0</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 mb-4">
            AI in Cybersecurity
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg">
            Exploring the dual-edged sword of Artificial Intelligence in digital defense ecosystems.
          </p>
        </motion.div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-12 gap-8">
        
        {/* Main Content Area (Full Width) */}
        <div className="lg:col-span-12 space-y-6">
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-slate-900/80 backdrop-blur border border-slate-700 rounded-xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all
                  ${activeTab === tab.id 
                    ? 'bg-slate-700 text-white shadow-lg' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'}
                `}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dynamic Content Area */}
          <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                   <h2 className={`text-2xl font-bold mb-2 ${DATA[activeTab].color}`}>
                    {DATA[activeTab].title}
                  </h2>
                  <p className="text-slate-400">
                    {DATA[activeTab].description}
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {DATA[activeTab].points.map((point, index) => (
                    <CyberCard 
                      key={point.id} 
                      point={point} 
                      type={activeTab} 
                      index={index} 
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Analysis Summary (Moved from sidebar) */}
          <div className="mt-8 p-4 rounded-xl border border-slate-800 bg-slate-900/50 max-w-md mx-auto">
            <h4 className="text-sm font-semibold text-slate-300 mb-2 text-center">Analysis Summary</h4>
            <div className="flex justify-between items-center text-xs text-slate-500 font-mono mb-2">
               <span>THREAT LEVEL: VARIABLE</span>
               <span>AI DEPENDENCY: HIGH</span>
            </div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
               <div className="h-full bg-gradient-to-r from-emerald-500 via-amber-500 to-red-500 w-full opacity-70"></div>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-10 mt-20 border-t border-slate-800 pt-8 pb-12 text-center">

      </footer>

      {/* Floating Chatbot */}
      <div className="fixed bottom-6 right-6 z-50 w-full max-w-[320px]">
        <ChatAssistant />
      </div>
    </div>
  );
};

export default App;