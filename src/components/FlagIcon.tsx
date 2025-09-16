'use client';

import React from 'react';
import EnglishFlag from './flags/EnglishFlag';
import SpanishFlag from './flags/SpanishFlag';
import ItalianFlag from './flags/ItalianFlag';
import JapaneseFlag from './flags/JapaneseFlag';

interface FlagIconProps {
  flagKey: string;
  className?: string;
  size?: number;
}

const FlagIcon: React.FC<FlagIconProps> = ({ 
  flagKey, 
  className = "rounded-sm shadow-sm",
  size = 24 
}) => {
  switch (flagKey) {
    case 'english':
      return <EnglishFlag className={className} size={size} />;
    case 'spanish':
      return <SpanishFlag className={className} size={size} />;
    case 'italian':
      return <ItalianFlag className={className} size={size} />;
    case 'japanese':
      return <JapaneseFlag className={className} size={size} />;
    default:
      return <span className="text-2xl">🏳️</span>;
  }
};

export default FlagIcon;
