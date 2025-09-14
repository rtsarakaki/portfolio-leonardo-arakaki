'use client';

import React from 'react';

interface ArchitecturalCotaProps {
  direction: 'left' | 'right' | 'top' | 'bottom';
  className?: string;
}

const ArchitecturalCota: React.FC<ArchitecturalCotaProps> = ({
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
          
          {/* Linhas perpendiculares nas extremidades */}
          {/* Linha superior */}
          <div className="absolute left-1/2 top-2 w-8 h-1 transform -translate-x-1/2" style={{ backgroundColor: '#FF8C42' }}></div>
          {/* Linha inferior */}
          <div className="absolute left-1/2 bottom-2 w-8 h-1 transform -translate-x-1/2" style={{ backgroundColor: '#FF8C42' }}></div>
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

export default ArchitecturalCota;
