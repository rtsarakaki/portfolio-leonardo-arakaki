'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import RusticButton from './RusticButton';
import ProfileSection from './ProfileSection';
import SkillsSection from './SkillsSection';
import ExperiencesSection from './ExperiencesSection';
import ProjectsSection from './ProjectsSection';
import SectionContainer from './SectionContainer';
import useTranslation from '@/hooks/useTranslation';

interface RusticNavigationProps {
  activeSectionId: string;
  onNavigate: (sectionId: string) => void;
  className?: string;
  isMobile?: boolean;
}

const RusticNavigation: React.FC<RusticNavigationProps> = ({
  activeSectionId,
  onNavigate,
  className = '',
  isMobile = false
}) => {
  const { t } = useTranslation();
  
  const sections = [
    { id: 'perfil', label: t('navigation.perfil') },
    { id: 'experiencias', label: t('navigation.experiencias') },
    { id: 'projetos', label: t('navigation.projetos') },
    { id: 'habilidades', label: t('navigation.habilidades') },
  ];


  return (
    <div className={`flex flex-col h-full ${className}`}>
      {/* Navegação - apenas no desktop */}
      {!isMobile && (
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
      )}

      {/* Conteúdo das seções */}
      <div className="flex-1 relative">
        <AnimatePresence mode="wait">
          {activeSectionId === 'perfil' && (
            <SectionContainer
              sectionId="perfil"
              cotaDirection="left"
              contentPadding={isMobile ? "p-4" : "pb-5 pt-1"}
              isMobile={isMobile}
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
              contentPadding={isMobile ? "p-4 pb-8" : "pb-4"}
              isMobile={isMobile}
            >
              <SkillsSection 
                isVisible={true}
                className="w-full h-full"
              />
            </SectionContainer>
          )}
          
          
          {activeSectionId === 'experiencias' && (
            <SectionContainer
              sectionId="experiencias"
              cotaDirection="bottom"
              contentPadding={isMobile ? "p-4 pb-8" : "p-4"}
              isMobile={isMobile}
            >
              <ExperiencesSection 
                isVisible={true}
                className="w-full h-full"
              />
            </SectionContainer>
          )}
          
          
          {activeSectionId === 'projetos' && (
            <SectionContainer
              sectionId="projetos"
              cotaDirection="top"
              contentPadding={isMobile ? "p-4 pb-8" : "p-4"}
              isMobile={isMobile}
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