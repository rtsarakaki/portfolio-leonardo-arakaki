'use client';

import React from 'react';
import { User } from 'lucide-react';
import SubsectionTitle from './SubsectionTitle';
import ContentBox from './ContentBox';
import useTranslation from '@/hooks/useTranslation';

interface AboutMeSectionProps {
  className?: string;
}

const AboutMeSection: React.FC<AboutMeSectionProps> = ({
  className = ''
}) => {
  const { t } = useTranslation();
  
  return (
    <div className={`sobre-mim-section ${className}`}>
      <ContentBox variant="highlighted">
        <SubsectionTitle 
          icon={User} 
          title={t('profile.aboutMe.title')} 
        />
        <div className="space-y-3 text-[#0f1419] text-sm leading-relaxed">
          <p>
            {t('profile.aboutMe.content')}
          </p>
        </div>
      </ContentBox>
    </div>
  );
};

export default AboutMeSection;
