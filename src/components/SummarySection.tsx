'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';
import SubsectionTitle from './SubsectionTitle';
import ContentBox from './ContentBox';

interface SummarySectionProps {
  icon: LucideIcon;
  title: string;
  content: string;
  className?: string;
}

const SummarySection: React.FC<SummarySectionProps> = ({ 
  icon, 
  title, 
  content,
  className = '' 
}) => {
  return (
    <ContentBox className={className}>
      <SubsectionTitle 
        icon={icon} 
        title={title} 
      />
      <div className="space-y-2 text-[#0f1419] text-sm leading-relaxed">
        <p>{content}</p>
      </div>
    </ContentBox>
  );
};

export default SummarySection;
