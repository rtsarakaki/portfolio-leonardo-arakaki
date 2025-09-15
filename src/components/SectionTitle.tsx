'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionTitleProps {
  icon: LucideIcon;
  title: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  icon: Icon, 
  title, 
  className = '' 
}) => {
  return (
    <h2 className={`text-xl font-bold text-[#0f1419] mb-6 font-handwriting text-center flex items-center justify-center gap-2 ${className}`}>
      <Icon size={24} className="text-[#e67e22] drop-shadow-sm" />
      {title}
    </h2>
  );
};

export default SectionTitle;
