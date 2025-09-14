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
    focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-75
    cursor-pointer
    z-50
  `;

  // Estilos específicos por posição com responsividade
  const getPositionStyles = () => {
    switch (position) {
      case 'left':
        return `
          fixed left-0 top-1/2 -translate-y-1/2
          w-24 sm:w-28 md:w-32 h-0.5 border-l-2
          flex items-center justify-start
          hidden sm:flex
        `;
      case 'right':
        return `
          fixed right-0 top-1/2 -translate-y-1/2
          w-24 sm:w-28 md:w-32 h-0.5 border-r-2
          flex items-center justify-end
          hidden sm:flex
        `;
      case 'top':
        return `
          fixed top-0 left-1/2 -translate-x-1/2
          w-0.5 h-24 sm:h-28 md:h-32 border-t-2
          flex flex-col items-center justify-start
          hidden sm:flex
        `;
      case 'bottom':
        return `
          fixed bottom-0 left-1/2 -translate-x-1/2
          w-0.5 h-24 sm:h-28 md:h-32 border-b-2
          flex flex-col items-center justify-end
          hidden sm:flex
        `;
      default:
        return '';
    }
  };

  // Estilos para o rótulo com responsividade
  const getLabelStyles = () => {
    const baseLabelStyles = `
      text-xs sm:text-sm font-medium uppercase tracking-wider
      transition-all duration-300 ease-in-out
      ${isActive ? 'text-amber-600' : 'text-amber-400'}
      hover:text-amber-500
      select-none
    `;

    switch (position) {
      case 'left':
        return `${baseLabelStyles} ml-1 sm:ml-2`;
      case 'right':
        return `${baseLabelStyles} mr-1 sm:mr-2`;
      case 'top':
        return `${baseLabelStyles} mt-1 sm:mt-2`;
      case 'bottom':
        return `${baseLabelStyles} mb-1 sm:mb-2`;
      default:
        return baseLabelStyles;
    }
  };

  const handleClick = () => {
    onClick(targetSectionId);
  };

  return (
    <button
      className={`${baseLineStyles} ${getPositionStyles()}`}
      onClick={handleClick}
      type="button"
      aria-label={`Navegar para seção ${label}`}
      aria-describedby={`cota-${targetSectionId}-description`}
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
      <span id={`cota-${targetSectionId}-description`} className="sr-only">
        Clique para navegar para a seção {label} do portfólio
      </span>
    </button>
  );
};

export default CotaArquitetonica;
