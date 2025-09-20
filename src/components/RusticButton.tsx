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
    rustic-button-new
    relative
    font-handwriting
    text-[#0f1419]
    text-sm
    font-bold
    cursor-pointer
    transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-75
    disabled:opacity-50 disabled:cursor-not-allowed
    ${isActive ? 'active' : ''}
    ${className}
  `;

  return (
    <div className="flex flex-col items-center">
      {/* Texto acima do botão */}
      <span className="text-xs font-medium text-[#0f1419] mb-2 font-handwriting">
        {children}
      </span>
      
      {/* Botão elipse alongada */}
      <button
        className={baseStyles}
        onClick={onClick}
        disabled={disabled}
        type="button"
        aria-label={`Botão ${children}`}
      >
      </button>
    </div>
  );
};

export default RusticButton;
