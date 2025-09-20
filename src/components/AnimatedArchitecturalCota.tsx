'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedArchitecturalCotaProps {
  direction: 'left' | 'right' | 'top' | 'bottom';
  className?: string;
}

const AnimatedArchitecturalCota: React.FC<AnimatedArchitecturalCotaProps> = ({
  direction,
  className = ''
}) => {
  const getLine = () => {
    if (direction === 'left' || direction === 'right') {
      // Para direções horizontais (left/right), linha vertical centralizada
      return (
        <>
          {/* Linha principal vertical */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2" style={{ backgroundColor: '#FF8C42' }}></div>
          
          {/* Linha superior - sempre visível */}
          <div className="absolute left-1/2 top-2 w-8 h-1 transform -translate-x-1/2" style={{ backgroundColor: '#FF8C42' }}></div>
          
          {/* Linha inferior - animada para deslizar */}
          <motion.div 
            className="absolute left-1/2 w-8 h-1 transform -translate-x-1/2" 
            style={{ backgroundColor: '#FF8C42' }}
            initial={{ 
              bottom: -10, // Começa fora da área visível
              opacity: 0
            }}
            animate={{ 
              bottom: 2, // Posição final
              opacity: 1,
              transition: {
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.2 // Pequeno delay para sincronizar com a revelação
              }
            }}
            exit={{
              bottom: -10,
              opacity: 0,
              transition: {
                duration: 0.4,
                ease: [0.55, 0.06, 0.68, 0.19]
              }
            }}
          />
        </>
      );
    } else {
      // Para direções verticais (top/bottom), linha horizontal centralizada
      return (
        <>
          {/* Linha principal horizontal */}
          <div className="absolute top-1/2 left-0 right-0 h-1 transform -translate-y-1/2" style={{ backgroundColor: '#FF8C42' }}></div>
          
          {/* Linhas perpendiculares nas extremidades */}
          {/* Linha esquerda */}
          <div className="absolute top-1/2 left-2 w-1 h-8 transform -translate-y-1/2" style={{ backgroundColor: '#FF8C42' }}></div>
          {/* Linha direita */}
          <div className="absolute top-1/2 right-2 w-1 h-8 transform -translate-y-1/2" style={{ backgroundColor: '#FF8C42' }}></div>
        </>
      );
    }
  };

  return (
    <div className={`absolute inset-0 ${className}`} style={{ zIndex: 20, pointerEvents: 'none' }}>
      {getLine()}
    </div>
  );
};

export default AnimatedArchitecturalCota;
