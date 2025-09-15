'use client';

import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageSelectorProps {
  currentLocale: 'pt' | 'en';
  onLanguageChange: (locale: 'pt' | 'en') => void;
  className?: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLocale,
  onLanguageChange,
  className = ''
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as 'pt' | 'en';
    console.log('LanguageSelector: Changing language to:', newLocale);
    onLanguageChange(newLocale);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center gap-2">
        <Globe size={16} className="text-[#FF8C42]" />
        <select
          value={currentLocale}
          onChange={handleChange}
          className="bg-transparent border border-[#FF8C42] text-[#FF8C42] px-2 py-1 rounded text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#FF8C42] focus:ring-opacity-50"
        >
          <option value="pt">PT</option>
          <option value="en">EN</option>
        </select>
      </div>
    </div>
  );
};

export default LanguageSelector;
