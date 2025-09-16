'use client';

import React from 'react';

interface Heading5Props {
  children: React.ReactNode;
  className?: string;
}

const Heading5: React.FC<Heading5Props> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <h5 className={`text-sm font-semibold text-[#0f1419] ${className}`}>
      {children}
    </h5>
  );
};

export default Heading5;
