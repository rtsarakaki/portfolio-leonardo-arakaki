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
    rustic-button
    px-6 py-3
    font-handwriting
    text-white
    text-sm
    font-medium
    cursor-pointer
    transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-75
    disabled:opacity-50 disabled:cursor-not-allowed
    ${isActive ? 'opacity-90' : ''}
    ${className}
  `;

  return (
    <button
      className={baseStyles}
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
