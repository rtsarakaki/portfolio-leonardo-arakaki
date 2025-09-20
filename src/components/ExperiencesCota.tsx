'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ExperiencesCotaProps {
  direction: 'left' | 'right' | 'top' | 'bottom';
  className?: string;
}

const ExperiencesCota: React.FC<ExperiencesCotaProps> = ({
  direction,
  className = ''
}) => {
  return (
    <div className={`absolute inset-0 ${className}`} style={{ zIndex: 20, pointerEvents: 'none' }}>
      {/* Linha principal vertical - sempre visível */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2" style={{ backgroundColor: '#FF8C42' }}></div>
      
      {/* Linha superior - sempre visível */}
      <div className="absolute left-1/2 top-2 w-8 h-1 transform -translate-x-1/2" style={{ backgroundColor: '#FF8C42' }}></div>
      
      {/* Linha inferior - animada para deslizar para baixo */}
      <motion.div 
        className="absolute left-1/2 w-8 h-1 transform -translate-x-1/2" 
        style={{ backgroundColor: '#FF8C42' }}
        initial={{ 
          bottom: 2,
          opacity: 1
        }}
        animate={{ 
          bottom: 2,
          opacity: 1,
          transition: {
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94]
          }
        }}
        exit={{
          bottom: 2,
          opacity: 0,
          transition: {
            duration: 0.4,
            ease: [0.55, 0.06, 0.68, 0.19]
          }
        }}
      />
    </div>
  );
};

export default ExperiencesCota;
