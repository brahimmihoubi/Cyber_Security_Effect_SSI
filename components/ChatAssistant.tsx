import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles, X } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "I am your CyberAI Analyst. I've analyzed the report on AI in Cybersecurity. Ask me about specific risks, advantages, or ethical concerns."
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const modelMsgId = (Date.now() + 1).toString();
    // Placeholder for streaming
    setMessages(prev => [...prev, { id: modelMsgId, role: 'model', text: '', isStreaming: true }]);

    try {
      await sendMessageToGemini(userMsg.text, (chunkText) => {
        setMessages(prev => prev.map(msg => 
          msg.id === modelMsgId ? { ...msg, text: chunkText } : msg
        ));
      });
    } catch (error) {
      setMessages(prev => prev.map(msg => 
        msg.id === modelMsgId ? { ...msg, text: "Connection error. Please check your API key and try again.", isStreaming: false } : msg
      ));
    } finally {
      setIsLoading(false);
      setMessages(prev => prev.map(msg => 
        msg.id === modelMsgId ? { ...msg, isStreaming: false } : msg
      ));
    }
  };

  return (
    <div className="w-full font-sans flex flex-col items-end">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.button
            key="collapsed"
            initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full shadow-lg border border-indigo-400/30 flex items-center justify-center group cursor-pointer hover:shadow-indigo-500/25 transition-all"
          >
            <Bot className="w-6 h-6 text-white" />
          </motion.button>
        ) : (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, height: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, height: 450, scale: 1, y: 0 }}
            exit={{ opacity: 0, height: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="flex flex-col bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl w-full"
          >
            {/* Header */}
            <div className="bg-slate-800 p-3 border-b border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-indigo-500/20 rounded-full">
                  <Bot className="w-4 h-4 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-100 text-sm">Cyber Analyst AI</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] text-slate-400">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`
                    w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0
                    ${msg.role === 'user' ? 'bg-cyan-600' : 'bg-indigo-600'}
                  `}>
                    {msg.role === 'user' ? <User className="w-3 h-3 text-white" /> : <Sparkles className="w-3 h-3 text-white" />}
                  </div>
                  
                  <div className={`
                    max-w-[85%] p-2.5 rounded-2xl text-xs leading-relaxed
                    ${msg.role === 'user' 
                      ? 'bg-cyan-900/50 text-cyan-50 rounded-tr-none border border-cyan-800' 
                      : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700'}
                  `}>
                     {msg.text || (msg.isStreaming ? <span className="animate-pulse">Analyzing...</span> : "")}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-3 bg-slate-800/50 border-t border-slate-700">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="w-full bg-slate-900 text-slate-200 pl-3 pr-10 py-2.5 rounded-xl border border-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-500 text-sm"
                />
                <button 
                  type="button" 
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-1.5 top-1.5 p-1 bg-indigo-600 rounded-lg text-white hover:bg-indigo-500 disabled:opacity-50 disabled:hover:bg-indigo-600 transition-colors"
                >
                  <Send className="w-3 h-3" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatAssistant;