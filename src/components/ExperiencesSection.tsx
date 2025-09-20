'use client';

import React from 'react';
import { Briefcase, Building, Calendar, MapPin } from 'lucide-react';
import SectionTitle from './SectionTitle';
import ContentBox from './ContentBox';
import SummarySection from './SummarySection';
import Badge from './Badge';
import InfoItem from './InfoItem';
import SubsectionTitle from './SubsectionTitle';
import useTranslation from '@/hooks/useTranslation';

interface ExperiencesSectionProps {
  isVisible: boolean;
  className?: string;
}

const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({
  isVisible,
  className = ''
}) => {
  const { t } = useTranslation();
  
  const experiences = [
    {
      title: t('experiences.experiencesList.0.title'),
      company: t('experiences.experiencesList.0.company'),
      location: 'São Paulo, SP',
      period: t('experiences.experiencesList.0.period'),
      description: t('experiences.experiencesList.0.description'),
      projects: t('experiences.experiencesList.0.skills')
    },
    {
      title: t('experiences.experiencesList.1.title'),
      company: t('experiences.experiencesList.1.company'),
      location: 'FAUUSP',
      period: t('experiences.experiencesList.1.period'),
      description: t('experiences.experiencesList.1.description'),
      projects: t('experiences.experiencesList.1.skills')
    }
  ];

  return (
    <div className={`profile-section ${className} `}>
      <div className="p-6">
        <SectionTitle 
          icon={Briefcase} 
          title={t('experiences.title')} 
        />

        <div>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <ContentBox key={index} variant="highlighted">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <SubsectionTitle 
                      icon={Briefcase} 
                      title={exp.title}
                      className="mb-1"
                    />
                    <div className="flex items-center gap-4 text-sm text-[#0f1419] mb-2">
                      <InfoItem icon={Building} text={exp.company} className="font-medium" />
                      <InfoItem icon={MapPin} text={exp.location} />
                      <InfoItem icon={Calendar} text={exp.period} />
                    </div>
                  </div>
                </div>
                
                <p className="text-[#0f1419] text-sm leading-relaxed mb-3">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.projects.map((project: string, projectIndex: number) => (
                    <Badge key={projectIndex} size="sm">
                      {project}
                    </Badge>
                  ))}
                </div>
              </ContentBox>
            ))}
          </div>

          <SummarySection
            icon={Briefcase}
            title={t('experiences.professionalSummary')}
            content={t('experiences.professionalSummaryContent')}
            className="mt-6"
          />
        </div>
      </div>
    </div>
  );
};

export default ExperiencesSection;
