
import React from 'react';

import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-lg font-bold text-white hover:text-blue-400 transition-colors cursor-pointer">
            Cloud Security
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            {[
              { name: 'Fundamentals', id: 'about' },
              { name: 'Shared Responsibility', id: 'responsibility' },
              { name: 'Threats', id: 'threats' },
              { name: 'Best Practices', id: 'best-practices' }
            ].map((item, i) => (
              <motion.a
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.3 }}
                whileHover={{ scale: 1.05, color: '#fff' }}
                href={`#${item.id}`}
                className="hover:text-white transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
