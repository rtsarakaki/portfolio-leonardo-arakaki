import React from 'react';

interface MainFrameProps {
  children: React.ReactNode;
  className?: string;
}

const MainFrame: React.FC<MainFrameProps> = ({ children, className = '' }) => {
  return (
    <div 
      className={`
        bg-frame-dark-blue 
        rounded-xl 
        shadow-2xl 
        p-8
        md:p-10 
        lg:p-12
        w-full
        min-h-screen sm:min-h-[80vh]
        relative
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default MainFrame;