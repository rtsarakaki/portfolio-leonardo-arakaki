'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import RusticButton from './RusticButton';
import ProfileSection from './ProfileSection';
import SkillsSection from './SkillsSection';
import LanguagesSection from './LanguagesSection';
import ExperiencesSection from './ExperiencesSection';
import EducationSection from './EducationSection';
import ProjectsSection from './ProjectsSection';
import SectionContainer from './SectionContainer';

interface RusticNavigationProps {
  activeSectionId: string;
  onNavigate: (sectionId: string) => void;
  className?: string;
}

const RusticNavigation: React.FC<RusticNavigationProps> = ({
  activeSectionId,
  onNavigate,
  className = ''
}) => {
  const sections = [
    { id: 'perfil', label: 'Perfil' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'idiomas', label: 'Idiomas' },
    { id: 'experiencias', label: 'Experiências' },
    { id: 'formacao', label: 'Formação' },
    { id: 'projetos', label: 'Projetos' },
  ];


  return (
    <div className={`flex flex-col h-full ${className}`}>
      {/* Navegação */}
      <div className="flex flex-wrap gap-2 mb-4">
        {sections.map((section) => (
          <RusticButton
            key={section.id}
            onClick={() => onNavigate(section.id)}
            isActive={activeSectionId === section.id}
            className="text-sm"
          >
            {section.label}
          </RusticButton>
        ))}
      </div>

      {/* Conteúdo das seções */}
      <div className="flex-1 relative">
        <AnimatePresence mode="wait">
          {activeSectionId === 'perfil' && (
            <SectionContainer
              sectionId="perfil"
              cotaDirection="left"
              contentPadding="pb-5 pt-1"
            >
              <ProfileSection 
                isVisible={true}
                className="w-full h-full"
              />
            </SectionContainer>
          )}
          
          {activeSectionId === 'habilidades' && (
            <SectionContainer
              sectionId="habilidades"
              cotaDirection="right"
              contentPadding="pb-4"
            >
              <SkillsSection 
                isVisible={true}
                className="w-full h-full"
              />
            </SectionContainer>
          )}
          
          {activeSectionId === 'idiomas' && (
            <SectionContainer
              sectionId="idiomas"
              cotaDirection="top"
              contentPadding="p-4"
            >
              <LanguagesSection 
                isVisible={true}
                className="w-full h-full"
              />
            </SectionContainer>
          )}
          
          {activeSectionId === 'experiencias' && (
            <SectionContainer
              sectionId="experiencias"
              cotaDirection="bottom"
              contentPadding="p-4"
            >
              <ExperiencesSection 
                isVisible={true}
                className="w-full h-full"
              />
            </SectionContainer>
          )}
          
          {activeSectionId === 'formacao' && (
            <SectionContainer
              sectionId="formacao"
              cotaDirection="left"
              contentPadding="pb-4"
            >
              <EducationSection 
                isVisible={true}
                className="w-full h-full"
              />
            </SectionContainer>
          )}
          
          {activeSectionId === 'projetos' && (
            <SectionContainer
              sectionId="projetos"
              cotaDirection="top"
              contentPadding="p-4"
            >
              <ProjectsSection 
                isVisible={true}
                className="w-full h-full"
              />
            </SectionContainer>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RusticNavigation;