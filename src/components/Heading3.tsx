'use client';

import React from 'react';

interface Heading3Props {
  children: React.ReactNode;
  className?: string;
}

const Heading3: React.FC<Heading3Props> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <h3 className={`text-lg font-semibold text-[#0f1419] ${className}`}>
      {children}
    </h3>
  );
};

export default Heading3;
