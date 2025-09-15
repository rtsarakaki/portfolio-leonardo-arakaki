'use client';

import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';
import AnimatedBox from './AnimatedBox';
import useTranslation from '@/hooks/useTranslation';

interface EducationSectionProps {
  isVisible: boolean;
  className?: string;
}

const EducationSection: React.FC<EducationSectionProps> = ({
  isVisible,
  className = ''
}) => {
  const { t, isLoading } = useTranslation();
  
  
  // Se ainda está carregando, mostrar loading
  if (isLoading) {
    return (
      <div className={`profile-section ${className}`}>
        <div className="p-6">
          <div className="text-center text-[#0f1419]">Carregando...</div>
        </div>
      </div>
    );
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
    <div className={`profile-section ${className}`}>
      <AnimatedBox direction="right" className="p-6">
        <h2 className="text-xl font-bold text-[#0f1419] mb-6 font-handwriting text-center flex items-center justify-center gap-2">
          <GraduationCap size={24} className="text-[#e67e22] drop-shadow-sm" />
          {t('education.title')}
        </h2>

        <div>
          <div className="space-y-6">
            {/* Formação Principal */}
            <div>
              <h4 className="text-lg font-semibold text-[#0f1419] mb-4 flex items-center font-handwriting">
                <GraduationCap size={20} className="mr-2 text-[#e67e22] drop-shadow-sm" />
                {t('education.higherEducation')}
              </h4>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 border-l-4 border-l-[#e67e22]">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h5 className="text-lg font-semibold text-[#0f1419] mb-1">
                          {edu.title}
                        </h5>
                        <p className="text-[#e67e22] font-medium text-sm mb-2">
                          {edu.institution}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-[#0f1419] mb-2">
                          <div className="flex items-center gap-1.5">
                            <Calendar size={14} className="text-[#e67e22] drop-shadow-sm" />
                            <span>{edu.period}</span>
                          </div>
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
                        <span
                          key={highlightIndex}
                          className="px-3 py-1.5 bg-gradient-to-r from-[#e67e22] to-[#c2410c] text-white rounded-full text-xs font-semibold shadow-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificações */}
            <div>
              <h4 className="text-lg font-semibold text-[#0f1419] mb-4 flex items-center font-handwriting">
                <Award size={20} className="mr-2 text-[#e67e22] drop-shadow-sm" />
                {t('education.certifications')}
              </h4>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h6 className="font-semibold text-[#0f1419] text-sm">{cert.name}</h6>
                        <p className="text-[#e67e22] text-xs">{cert.institution}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[#0f1419] text-xs font-medium">{cert.year}</span>
                        <p className="text-[#e67e22] text-xs">{cert.level}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resumo Acadêmico */}
            <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
            <h4 className="text-lg font-semibold text-[#0f1419] mb-3 flex items-center font-handwriting">
              <BookOpen size={20} className="mr-2 text-[#e67e22] drop-shadow-sm" />
              {t('education.academicTrajectory')}
            </h4>
              <div className="space-y-2 text-[#0f1419] text-sm leading-relaxed">
                <p>
                  {t('education.academicTrajectoryContent')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedBox>
    </div>
  );
};

export default EducationSection;
