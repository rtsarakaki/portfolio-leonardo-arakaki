'use client';

import React from 'react';

interface LoadingStateProps {
  message?: string;
  className?: string;
}

const LoadingState: React.FC<LoadingStateProps> = ({ 
  message = 'Carregando...',
  className = '' 
}) => {
  return (
    <div className={`profile-section ${className}`}>
      <div className="p-6">
        <div className="text-center text-[#0f1419]">{message}</div>
      </div>
    </div>
  );
};

export default LoadingState;
