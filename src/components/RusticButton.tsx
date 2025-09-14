'use client';

import React from 'react';

interface RusticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
  className?: string;
  disabled?: boolean;
}

const RusticButton: React.FC<RusticButtonProps> = ({
  children,
  onClick,
  isActive = false,
  className = '',
  disabled = false
}) => {
  const baseStyles = `
    relative
    px-6 py-3
    bg-orange-100
    border-2 border-orange-400
    rounded-lg
    font-medium
    text-orange-800
    cursor-pointer
    transition-all duration-300 ease-in-out
    transform
    hover:scale-105
    hover:bg-orange-200
    hover:border-orange-500
    hover:shadow-lg
    focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-75
    active:scale-95
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    ${isActive ? 'bg-orange-200 border-orange-600 text-orange-900 shadow-md' : ''}
    ${className}
  `;

  // Efeito de linha desenhada à mão
  const handDrawnStyles = `
    before:absolute before:inset-0 before:rounded-lg
    before:border-2 before:border-orange-300
    before:transform before:rotate-1 before:scale-105
    before:opacity-30 before:pointer-events-none
    after:absolute after:inset-0 after:rounded-lg
    after:border-2 after:border-orange-500
    after:transform after:-rotate-0.5 after:scale-98
    after:opacity-20 after:pointer-events-none
  `;

  return (
    <button
      className={`${baseStyles} ${handDrawnStyles}`}
      onClick={onClick}
      disabled={disabled}
      type="button"
      aria-label={`Botão ${children}`}
    >
      <span className="relative z-10">
        {children}
      </span>
    </button>
  );
};

export default RusticButton;
