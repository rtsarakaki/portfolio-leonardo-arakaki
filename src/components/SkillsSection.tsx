'use client';

import React from 'react';
import { Wrench, Palette, Globe, BookOpen } from 'lucide-react';
import AnimatedBox from './AnimatedBox';
import SectionTitle from './SectionTitle';
import SubsectionTitle from './SubsectionTitle';
import SkillCard from './SkillCard';
import LanguageCard from './LanguageCard';
import Badge from './Badge';
import SummarySection from './SummarySection';
import LoadingState from './LoadingState';
import useTranslation from '@/hooks/useTranslation';

interface SkillsSectionProps {
  isVisible: boolean;
  className?: string;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({
  isVisible,
  className = ''
}) => {
  const { t, isLoading } = useTranslation();
  
  
  // Se ainda está carregando, mostrar loading
  if (isLoading) {
    return <LoadingState className={className} />;
  }
  
  const skills = [
    { name: t('skills.skillsList.design.0.name'), level: 90, category: t('skills.categories.design') },
    { name: t('skills.skillsList.design.1.name'), level: 85, category: t('skills.categories.design') },
    { name: t('skills.skillsList.design.2.name'), level: 80, category: t('skills.categories.design') },
    { name: t('skills.skillsList.design.3.name'), level: 75, category: t('skills.categories.design') },
    { name: t('skills.skillsList.communication.0.name'), level: 85, category: t('skills.categories.communication') },
    { name: t('skills.skillsList.communication.1.name'), level: 80, category: t('skills.categories.communication') },
  ];

  const languages = [
    { name: t('languages.languagesList.0.name'), level: t('languages.levels.avancado'), certificate: t('languages.languagesList.0.certificate'), flagKey: 'english' },
    { name: t('languages.languagesList.1.name'), level: t('languages.levels.basico'), certificate: t('languages.languagesList.1.certificate'), flagKey: 'spanish' },
    { name: t('languages.languagesList.2.name'), level: t('languages.levels.basico'), certificate: t('languages.languagesList.2.certificate'), flagKey: 'italian' },
    { name: t('languages.languagesList.3.name'), level: t('languages.levels.basico'), certificate: t('languages.languagesList.3.certificate'), flagKey: 'japanese' },
  ];


  return (
    <div className={`profile-section ${className}`}>
      <AnimatedBox direction="right" className="p-6 h-full overflow-y-auto">
        <SectionTitle 
          icon={Wrench} 
          title={t('skills.title')} 
        />

        <div>
          <div className="space-y-4">
            <div>
              <SubsectionTitle 
                icon={Wrench} 
                title={t('skills.proficiencyLevel')} 
              />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {skills.map((skill, index) => (
                          <SkillCard
                            key={`skill-${index}`}
                            name={skill.name}
                            level={skill.level}
                            category={skill.category}
                            index={index}
                          />
                        ))}
                      </div>
            </div>

            <div>
              <SubsectionTitle 
                icon={Palette} 
                title={t('skills.areasOfInterest')} 
              />
              <div className="flex flex-wrap gap-2">
                {t('skills.interestAreas').map((area: string) => (
                  <Badge 
                    key={area}
                    size="lg"
                    className="hover:shadow-md transition-all duration-300"
                  >
                    {area}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Seção de Idiomas */}
            <div>
              <SubsectionTitle 
                icon={Globe} 
                title={t('languages.languages')} 
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {languages.map((language, index) => (
                  <LanguageCard
                    key={`language-${index}`}
                    name={language.name}
                    level={language.level}
                    certificate={language.certificate}
                    flagKey={language.flagKey}
                    index={index}
                  />
                ))}
              </div>
            </div>

            {/* Experiência Internacional */}
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

export default SkillsSection;
