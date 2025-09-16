'use client';

import React from 'react';

interface EnglishFlagProps {
  className?: string;
  size?: number;
}

const EnglishFlag: React.FC<EnglishFlagProps> = ({ 
  className = "rounded-sm shadow-sm",
  size = 24 
}) => {
  const width = size;
  const height = Math.round(size * 0.75);

  return (
    <svg 
      width={width} 
      height={height} 
      className={className} 
      viewBox="0 0 32 24"
    >
      <rect width="32" height="24" fill="#012169"/>
      <path d="M0 0l32 24M32 0L0 24" stroke="#fff" strokeWidth="2.4"/>
      <path d="M0 0l32 24M32 0L0 24" stroke="#C8102E" strokeWidth="1.6"/>
      <path d="M16 0v24M0 12h32" stroke="#fff" strokeWidth="3.2"/>
      <path d="M16 0v24M0 12h32" stroke="#C8102E" strokeWidth="2.4"/>
    </svg>
  );
};

export default EnglishFlag;
