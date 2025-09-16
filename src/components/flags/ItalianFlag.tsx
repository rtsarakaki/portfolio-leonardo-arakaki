'use client';

import React from 'react';

interface ItalianFlagProps {
  className?: string;
  size?: number;
}

const ItalianFlag: React.FC<ItalianFlagProps> = ({ 
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
      <rect width="10.67" height="24" fill="#009246"/>
      <rect x="10.67" width="10.67" height="24" fill="#fff"/>
      <rect x="21.33" width="10.67" height="24" fill="#CE2B37"/>
    </svg>
  );
};

export default ItalianFlag;
