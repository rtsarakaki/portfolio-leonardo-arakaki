'use client';

import React from 'react';

interface Heading6Props {
  children: React.ReactNode;
  className?: string;
}

const Heading6: React.FC<Heading6Props> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <h6 className={`text-xs font-semibold text-[#0f1419] ${className}`}>
      {children}
    </h6>
  );
};

export default Heading6;
