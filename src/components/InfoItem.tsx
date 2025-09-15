'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InfoItemProps {
  icon: LucideIcon;
  text: string;
  className?: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ 
  icon: Icon, 
  text, 
  className = '' 
}) => {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <Icon size={14} className="text-[#e67e22] drop-shadow-sm" />
      <span className="text-xs text-[#0f1419]">{text}</span>
    </div>
  );
};

export default InfoItem;
