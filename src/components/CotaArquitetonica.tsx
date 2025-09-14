'use client';

import React from 'react';

interface CotaArquitetonicaProps {
  label: string;
  position: 'left' | 'bottom' | 'right' | 'top';
  targetSectionId: string;
  isActive: boolean;
  onClick: (id: string) => void;
}

const CotaArquitetonica: React.FC<CotaArquitetonicaProps> = ({
  label,
  position,
  targetSectionId,
  isActive,
  onClick
}) => {
  // Estilos base para a linha tracejada
  const baseLineStyles = `
    transition-all duration-300 ease-in-out
    ${isActive 
      ? 'border-solid border-amber-600 text-amber-600' 
      : 'border-dashed border-amber-400 text-amber-400'
    }
    hover:border-amber-500 hover:text-amber-500 hover:scale-105
    cursor-pointer
  `;

  // Estilos específicos por posição
  const getPositionStyles = () => {
    switch (position) {
      case 'left':
        return `
          fixed left-0 top-1/2 -translate-y-1/2
          w-32 h-0.5 border-l-2
          flex items-center justify-start
        `;
      case 'right':
        return `
          fixed right-0 top-1/2 -translate-y-1/2
          w-32 h-0.5 border-r-2
          flex items-center justify-end
        `;
      case 'top':
        return `
          fixed top-0 left-1/2 -translate-x-1/2
          w-0.5 h-32 border-t-2
          flex flex-col items-center justify-start
        `;
      case 'bottom':
        return `
          fixed bottom-0 left-1/2 -translate-x-1/2
          w-0.5 h-32 border-b-2
          flex flex-col items-center justify-end
        `;
      default:
        return '';
    }
  };

  // Estilos para o rótulo
  const getLabelStyles = () => {
    const baseLabelStyles = `
      text-xs font-medium uppercase tracking-wider
      transition-all duration-300 ease-in-out
      ${isActive ? 'text-amber-600' : 'text-amber-400'}
      hover:text-amber-500
    `;

    switch (position) {
      case 'left':
        return `${baseLabelStyles} ml-2`;
      case 'right':
        return `${baseLabelStyles} mr-2`;
      case 'top':
        return `${baseLabelStyles} mt-2`;
      case 'bottom':
        return `${baseLabelStyles} mb-2`;
      default:
        return baseLabelStyles;
    }
  };

  const handleClick = () => {
    onClick(targetSectionId);
  };

  return (
    <div
      className={`${baseLineStyles} ${getPositionStyles()}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`Navegar para seção ${label}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <span className={getLabelStyles()}>
        {label}
      </span>
    </div>
  );
};

export default CotaArquitetonica;
