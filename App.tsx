import React from 'react';
import Navbar from './components/Navbar';
import { SERVICE_MODELS, THREATS, BEST_PRACTICES } from './constants';
import { ScrollReveal } from './components/ScrollReveal';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/10 blur-[120px] -z-10 rounded-full"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="down">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
              Cloud Security
            </span>
          </ScrollReveal>
          
            <div className="mb-12">
              <ScrollReveal delay={0.4}>
                 <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 leading-tight">
                  Cyber Security with Cloud
                </h1>
              </ScrollReveal>
            </div>
          
          <ScrollReveal delay={0.6}>
            <p className="max-w-2xl mx-auto text-xl text-slate-300 mb-12 leading-relaxed">
              Cloud computing uses remote servers via the internet instead of local servers. 
              Understand the risks, principles, and protections of modern digital infrastructure.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.8} direction="up">
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-colors"
              >
                Get Started
              </motion.button>
              <motion.button 
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 onClick={() => document.getElementById('threats')?.scrollIntoView()}
                 className="bg-slate-800 border border-slate-700 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-700 transition-colors"
              >
                View Threats
              </motion.button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Models */}
      <section id="about" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Main Service Models</h2>
              <p className="text-slate-400">Different levels of abstraction for cloud resources.</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICE_MODELS.map((model, index) => (
              <ScrollReveal key={model.name} delay={index * 0.2}>
                <div className="group p-8 rounded-3xl bg-slate-800/50 border border-slate-800 hover:border-blue-500/50 transition-all hover:-translate-y-2 h-full">
                  <div className="text-blue-400 font-mono text-sm mb-2">{model.name}</div>
                  <h3 className="text-xl font-bold mb-4">{model.fullName}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">{model.description}</p>
                  <div className="pt-4 border-t border-slate-700">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">Examples</span>
                    <p className="text-sm font-medium">{model.examples}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Shared Responsibility */}
      <section id="responsibility" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal width="100%">
            <div className="bg-slate-800 rounded-[3rem] p-8 md:p-16 border border-slate-700 overflow-hidden relative">
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                 className="absolute top-0 right-0 p-8 text-8xl opacity-10 select-none origin-center"
               >
                 ⚖️
               </motion.div>
               <div className="grid lg:grid-cols-2 gap-16 items-start">
                  <div>
                    <h2 className="text-4xl font-bold mb-6">Shared Responsibility Model</h2>
                    <p className="text-slate-400 mb-8 leading-relaxed">
                      Cloud security is not automatic. It is a partnership between the provider and the customer.
                      One mistake in configuration can expose millions of records.
                    </p>
                    <div className="space-y-6">
                      <ScrollReveal delay={0.2} direction="left">
                        <motion.div 
                          whileHover={{ scale: 1.02, x: 10 }}
                          className="flex items-start gap-4 p-6 rounded-2xl bg-slate-900/50 border border-slate-700 hover:border-indigo-500/50 transition-colors"
                        >
                          <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-xl text-indigo-400 shrink-0">🏢</div>
                          <div>
                            <h4 className="font-bold text-slate-200 mb-1">Provider Secures</h4>
                            <p className="text-sm text-slate-400">Physical data centers, hardware, and core infrastructure.</p>
                          </div>
                        </motion.div>
                      </ScrollReveal>
                      <ScrollReveal delay={0.4} direction="left">
                        <motion.div 
                          whileHover={{ scale: 1.02, x: 10 }}
                          className="flex items-start gap-4 p-6 rounded-2xl bg-blue-500/10 border border-blue-500/20 hover:border-blue-400/50 transition-colors"
                        >
                          <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-xl text-blue-400 shrink-0">👤</div>
                          <div>
                            <h4 className="font-bold text-blue-400 mb-1">Customer Secures</h4>
                            <p className="text-sm text-slate-400">Access control (IAM), applications, data (at rest/transit), and configuration.</p>
                          </div>
                        </motion.div>
                      </ScrollReveal>
                    </div>
                  </div>
                  <ScrollReveal direction="right" delay={0.3}>
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                      <div className="relative bg-slate-900 rounded-2xl p-8 border border-slate-700">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                          Identity: The New Perimeter
                        </h3>
                        <div className="space-y-4">
                          {[
                            { color: 'blue', title: 'Zero Trust Model', desc: 'Never trust by default. Always verify identity. Every request must be authenticated and authorized.' },
                            { color: 'indigo', title: 'IAM Controls', desc: 'Least privilege, role-based access, and multi-factor authentication.' },
                            { color: 'slate', title: 'Encryption', desc: 'Protects data from unauthorized access. Keys must be protected and rotated regularly.' }
                          ].map((item, i) => (
                            <motion.div 
                              key={item.title}
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + (i * 0.1) }}
                              whileHover={{ scale: 1.02, translateX: 5 }}
                              className={`p-4 rounded-xl bg-slate-800 border-l-4 border-${item.color}-500 hover:bg-slate-700/50 transition-colors cursor-default`}
                            >
                              <span className="block font-bold text-sm mb-1">{item.title}</span>
                              <p className="text-xs text-slate-400">{item.desc}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
               </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Threats */}
      <section id="threats" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Main Cloud Security Threats</h2>
              <p className="text-slate-400">Most incidents are caused by human errors, not sophisticated hacking.</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {THREATS.map((threat, index) => (
              <ScrollReveal key={threat.title} delay={index * 0.1}>
                <motion.div 
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`h-full p-8 rounded-3xl border transition-all hover:shadow-2xl hover:shadow-blue-500/10 ${
                  threat.isMostCommon 
                    ? 'bg-blue-600/10 border-blue-500/50 ring-1 ring-blue-500/20 shadow-lg shadow-blue-500/5' 
                    : 'bg-slate-800/50 border-slate-800 hover:border-slate-600'
                }`}>
                  {threat.isMostCommon && (
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-blue-500 text-white mb-4 animate-pulse">
                      Most Common
                    </span>
                  )}
                  <h3 className="text-xl font-bold mb-3">{threat.title}</h3>
                  <p className="text-sm text-slate-400 mb-6">{threat.description}</p>
                  <ul className="space-y-2">
                    {threat.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section id="best-practices" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-16">Best Practices Summary</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {BEST_PRACTICES.map((practice, index) => (
              <ScrollReveal key={practice.title} delay={index * 0.15}>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center text-3xl mb-4 border border-slate-700 group-hover:bg-blue-600 transition-colors">
                    {practice.icon}
                  </div>
                  <h4 className="font-bold mb-2">{practice.title}</h4>
                  <p className="text-xs text-slate-400 max-w-[200px]">{practice.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        </div>
      </footer>
    </div>
  );
};

export default App;

