'use client';

import React from 'react';

interface Heading4Props {
  children: React.ReactNode;
  className?: string;
}

const Heading4: React.FC<Heading4Props> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <h4 className={`text-base font-semibold text-[#0f1419] ${className}`}>
      {children}
    </h4>
  );
};

export default Heading4;
