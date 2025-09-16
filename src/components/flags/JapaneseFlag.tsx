'use client';

import React from 'react';

interface JapaneseFlagProps {
  className?: string;
  size?: number;
}

const JapaneseFlag: React.FC<JapaneseFlagProps> = ({ 
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
      <rect width="32" height="24" fill="#fff"/>
      <circle cx="16" cy="12" r="6" fill="#BC002D"/>
    </svg>
  );
};

export default JapaneseFlag;
