'use client';

import React from 'react';

interface SpanishFlagProps {
  className?: string;
  size?: number;
}

const SpanishFlag: React.FC<SpanishFlagProps> = ({ 
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
      <rect width="32" height="8" fill="#C60B1E"/>
      <rect y="8" width="32" height="8" fill="#FFC400"/>
      <rect y="16" width="32" height="8" fill="#C60B1E"/>
    </svg>
  );
};

export default SpanishFlag;
