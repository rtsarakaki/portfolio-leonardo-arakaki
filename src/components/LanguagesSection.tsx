'use client';

import React from 'react';
import { Globe, BookOpen } from 'lucide-react';
import AnimatedBox from './AnimatedBox';
import SectionTitle from './SectionTitle';
import SubsectionTitle from './SubsectionTitle';
import LanguageCard from './LanguageCard';
import ContentBox from './ContentBox';
import SummarySection from './SummarySection';
import useTranslation from '@/hooks/useTranslation';

interface LanguagesSectionProps {
  isVisible: boolean;
  className?: string;
}

const LanguagesSection: React.FC<LanguagesSectionProps> = ({
  isVisible,
  className = ''
}) => {
  const { t } = useTranslation();
  
  const languages = [
    { name: t('languages.languagesList.0.name'), level: t('languages.levels.avancado'), certificate: t('languages.languagesList.0.certificate'), flagKey: 'english' },
    { name: t('languages.languagesList.1.name'), level: t('languages.levels.basico'), certificate: t('languages.languagesList.1.certificate'), flagKey: 'spanish' },
    { name: t('languages.languagesList.2.name'), level: t('languages.levels.basico'), certificate: t('languages.languagesList.2.certificate'), flagKey: 'italian' },
    { name: t('languages.languagesList.3.name'), level: t('languages.levels.basico'), certificate: t('languages.languagesList.3.certificate'), flagKey: 'japanese' },
  ];


  return (
    <div className={`profile-section ${className}`}>
      <AnimatedBox direction="top" className="p-6">
        <SectionTitle 
          icon={Globe} 
          title={t('languages.title')} 
        />

        <div>
          <div className="space-y-4">
            <div>
              <SubsectionTitle 
                icon={Globe} 
                title={t('languages.languages')} 
              />
              <div className="space-y-3">
                {languages.map((language, index) => (
                  <LanguageCard
                    key={language.name}
                    name={language.name}
                    level={language.level}
                    certificate={language.certificate}
                    flagKey={language.flagKey}
                    index={index}
                  />
                ))}
              </div>
            </div>

            <SummarySection
              icon={BookOpen}
              title={t('languages.internationalExperience')}
              content={t('languages.internationalExperienceContent')}
            />
          </div>
        </div>
      </AnimatedBox>
    </div>
  );
};

export default LanguagesSection;
