'use client';

import React from 'react';

interface FlagIconProps {
  flagKey: string;
  className?: string;
  size?: number;
}

const FlagIcon: React.FC<FlagIconProps> = ({ 
  flagKey, 
  className = "rounded-sm shadow-sm",
  size = 24 
}) => {
  const width = size;
  const height = Math.round(size * 0.75); // Proporção 4:3 das bandeiras

  const flagProps = {
    width,
    height,
    className
  };

  switch (flagKey) {
    case 'english':
      return (
        <svg {...flagProps} viewBox="0 0 32 24">
          <rect width="32" height="24" fill="#012169"/>
          <path d="M0 0l32 24M32 0L0 24" stroke="#fff" strokeWidth="2.4"/>
          <path d="M0 0l32 24M32 0L0 24" stroke="#C8102E" strokeWidth="1.6"/>
          <path d="M16 0v24M0 12h32" stroke="#fff" strokeWidth="3.2"/>
          <path d="M16 0v24M0 12h32" stroke="#C8102E" strokeWidth="2.4"/>
        </svg>
      );
    case 'spanish':
      return (
        <svg {...flagProps} viewBox="0 0 32 24">
          <rect width="32" height="8" fill="#C60B1E"/>
          <rect y="8" width="32" height="8" fill="#FFC400"/>
          <rect y="16" width="32" height="8" fill="#C60B1E"/>
        </svg>
      );
    case 'italian':
      return (
        <svg {...flagProps} viewBox="0 0 32 24">
          <rect width="10.67" height="24" fill="#009246"/>
          <rect x="10.67" width="10.67" height="24" fill="#fff"/>
          <rect x="21.33" width="10.67" height="24" fill="#CE2B37"/>
        </svg>
      );
    case 'japanese':
      return (
        <svg {...flagProps} viewBox="0 0 32 24">
          <rect width="32" height="24" fill="#fff"/>
          <circle cx="16" cy="12" r="6" fill="#BC002D"/>
        </svg>
      );
    default:
      return <span className="text-2xl">🏳️</span>;
  }
};

export default FlagIcon;
