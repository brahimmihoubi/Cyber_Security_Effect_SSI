import React from 'react';
import { motion } from 'framer-motion';
import { Point } from '../types';
import { Cpu, AlertOctagon, Ban } from 'lucide-react';

interface CyberCardProps {
  point: Point;
  type: 'advantages' | 'risks' | 'disadvantages';
  index: number;
}

const CyberCard: React.FC<CyberCardProps> = ({ point, type, index }) => {
  const getIcon = () => {
    switch (type) {
      case 'advantages': return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'risks': return <AlertOctagon className="w-5 h-5 text-red-400" />;
      case 'disadvantages': return <Ban className="w-5 h-5 text-amber-400" />;
    }
  };

  const getBorderColor = () => {
    switch (type) {
      case 'advantages': return 'hover:border-emerald-500/50 border-emerald-900/30';
      case 'risks': return 'hover:border-red-500/50 border-red-900/30';
      case 'disadvantages': return 'hover:border-amber-500/50 border-amber-900/30';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className={`
        relative p-4 rounded-xl border bg-slate-800/50 backdrop-blur-sm 
        transition-all duration-300 group ${getBorderColor()}
      `}
    >
      <div className="flex items-start gap-4">
        <div className="mt-1 p-2 rounded-lg bg-slate-900 shadow-inner group-hover:scale-110 transition-transform">
          {getIcon()}
        </div>
        <div>
          <h3 className="font-semibold text-slate-100 text-lg mb-1 group-hover:text-white transition-colors">
            {point.text}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            {point.detail}
          </p>
        </div>
      </div>
      
      {/* Decorative corner accent */}
      <div className={`absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-white/5 to-transparent rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
    </motion.div>
  );
};

export default CyberCard;