import React from 'react';
import LanguageSelector from './LanguageSelector';

interface MainFrameProps {
  children: React.ReactNode;
  className?: string;
  currentLocale?: 'pt' | 'en';
  onLanguageChange?: (locale: 'pt' | 'en') => void;
}

const MainFrame: React.FC<MainFrameProps> = ({ 
  children, 
  className = '',
  currentLocale,
  onLanguageChange
}) => {
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
        h-screen sm:h-[80vh]
        relative
        ${className}
      `}
    >
      {/* Seletor de idioma no frame branco com textura de papel */}
      {currentLocale && onLanguageChange && (
        <div className="absolute top-4 right-4 z-10">
          <LanguageSelector
            currentLocale={currentLocale}
            onLanguageChange={onLanguageChange}
          />
        </div>
      )}
      
      {children}
    </div>
  );
};

export default MainFrame;