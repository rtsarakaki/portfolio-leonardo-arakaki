'use client';

import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';
import SubsectionTitle from './SubsectionTitle';
import ContentBox from './ContentBox';
import SummarySection from './SummarySection';
import Badge from './Badge';
import InfoItem from './InfoItem';
import Heading5 from './Heading5';
import Heading6 from './Heading6';
import LoadingState from './LoadingState';
import useTranslation from '@/hooks/useTranslation';

interface EducationContentProps {
  className?: string;
}

const EducationContent: React.FC<EducationContentProps> = ({
  className = ''
}) => {
  const { t, isLoading } = useTranslation();
  
  // Se ainda está carregando, mostrar loading
  if (isLoading) {
    return <LoadingState className={className} />;
  }
  
  const education = [
    {
      title: t('education.educationList.0.degree'),
      institution: t('education.educationList.0.institution'),
      location: t('education.locations.saoPauloSP'),
      period: t('education.educationList.0.period'),
      status: t('education.educationList.0.status'),
      description: t('education.educationList.0.description'),
      highlights: [
        t('education.highlights.urbanDesign'),
        t('education.highlights.sustainability'),
        t('education.highlights.visualCommunication'),
        t('education.highlights.academicResearch')
      ]
    },
    {
      title: t('education.educationList.1.degree'),
      institution: t('education.institutions.colegioSaoPaulo'),
      location: t('education.locations.saoPauloSP'),
      period: t('education.educationList.1.period'),
      status: t('education.educationList.1.status'),
      description: t('education.educationList.1.description'),
      highlights: [
        t('education.highlights.exactSciences'),
        t('education.highlights.humanSciences'),
        t('education.highlights.basicTraining')
      ]
    }
  ];

  const certifications = t('education.certificationsList');

  return (
    <div className={`${className}`}>
      <div>
        <div className="space-y-6">
          {/* Formação Principal */}
          <div>
            <SubsectionTitle 
              icon={GraduationCap} 
              title={t('education.higherEducation')} 
            />
            <div className="space-y-4">
              {education.map((edu, index) => (
                <ContentBox key={index} variant="highlighted">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <Heading5 className="mb-1">
                        {edu.title}
                      </Heading5>
                      <p className="text-[#e67e22] font-medium text-sm mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-[#0f1419] mb-2">
                        <InfoItem icon={Calendar} text={edu.period} />
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          edu.status === t('education.educationList.1.status') 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-[#0f1419] text-sm leading-relaxed mb-3">
                    {edu.description}
                  </p>
                  
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <Badge key={highlightIndex} size="sm">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                </ContentBox>
              ))}
            </div>
          </div>

          {/* Certificações */}
          <div>
            <SubsectionTitle 
              icon={Award} 
              title={t('education.certifications')} 
            />
            <div className="space-y-3">
              {certifications.map((cert: any, index: number) => (
                <ContentBox key={index} variant="simple">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <Heading6>{cert.name}</Heading6>
                      <p className="text-[#e67e22] text-xs">{cert.institution}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[#0f1419] text-xs font-medium">{cert.year}</span>
                      <p className="text-[#e67e22] text-xs">{cert.level}</p>
                    </div>
                  </div>
                </ContentBox>
              ))}
            </div>
          </div>

          {/* Resumo Acadêmico */}
          <SummarySection
            icon={BookOpen}
            title={t('education.academicTrajectory')}
            content={t('education.academicTrajectoryContent')}
          />
        </div>
      </div>
    </div>
  );
};

export default EducationContent;
