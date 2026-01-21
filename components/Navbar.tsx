import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Fundamentals', id: 'about' },
    { name: 'Shared Responsibility', id: 'responsibility' },
    { name: 'Threats', id: 'threats' },
    { name: 'Best Practices', id: 'best-practices' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsOpen(false); }} className="text-lg font-bold text-white hover:text-blue-400 transition-colors cursor-pointer z-[60]">
            Cloud Security
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.3 }}
                whileHover={{ scale: 1.05, color: '#fff' }}
                href={`#${item.id}`}
                className="hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center z-[60]">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] md:hidden"
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 left-0 right-0 z-[56] md:hidden bg-slate-900 border-b border-slate-800 shadow-2xl"
            >
              <div className="px-6 py-8 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={`#${item.id}`}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-4 text-xl font-bold text-slate-200 hover:text-white hover:bg-slate-800 rounded-2xl transition-all border border-transparent hover:border-slate-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
