'use client';

import React from 'react';
import RusticButton from './RusticButton';

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
    { id: 'experiencias', label: 'Experiências' },
    { id: 'formacao', label: 'Formação' },
    { id: 'projetos', label: 'Projetos' },
  ];

  return (
    <nav className={`flex flex-wrap gap-3 justify-center ${className}`}>
      {sections.map((section) => (
        <RusticButton
          key={section.id}
          onClick={() => onNavigate(section.id)}
          isActive={activeSectionId === section.id}
          className="text-sm sm:text-base"
        >
          {section.label}
        </RusticButton>
      ))}
    </nav>
  );
};

export default RusticNavigation;
