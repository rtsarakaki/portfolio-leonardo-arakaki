'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SubsectionTitleProps {
  icon: LucideIcon;
  title: string;
  className?: string;
}

const SubsectionTitle: React.FC<SubsectionTitleProps> = ({ 
  icon: Icon, 
  title, 
  className = '' 
}) => {
  return (
    <h4 className={`text-lg font-semibold text-[#0f1419] mb-3 flex items-center font-handwriting ${className}`}>
      <Icon size={20} className="mr-2 text-[#e67e22] drop-shadow-sm" />
      {title}
    </h4>
  );
};

export default SubsectionTitle;
