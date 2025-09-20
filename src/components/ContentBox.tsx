'use client';

import React from 'react';

interface ContentBoxProps {
  children: React.ReactNode;
  variant?: 'default' | 'highlighted' | 'simple';
  className?: string;
}

const ContentBox: React.FC<ContentBoxProps> = ({ 
  children, 
  variant = 'default',
  className = '' 
}) => {
  const baseClasses = 'bg-white rounded-lg shadow-sm border border-gray-200';
  
  const variantClasses = {
    default: 'p-4',
    highlighted: 'p-4 border-l-4 border-l-[#e67e22]',
    simple: 'p-3'
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default ContentBox;
