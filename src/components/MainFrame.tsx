import React from 'react';

interface MainFrameProps {
  children: React.ReactNode;
  className?: string;
}

const MainFrame: React.FC<MainFrameProps> = ({ children, className = '' }) => {
  return (
    <div 
      className={`
        bg-portfolio-blue 
        rounded-xl 
        shadow-2xl 
        p-8 
        md:p-10 
        lg:p-12
        mx-auto 
        max-w-screen-lg 
        w-full
        min-h-[calc(100vh-4rem)]
        relative
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default MainFrame;
