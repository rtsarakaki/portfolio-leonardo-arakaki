'use client';

import React from 'react';
import { User, Wrench, Briefcase, FolderOpen } from 'lucide-react';
import useTranslation from '@/hooks/useTranslation';

interface MobileToolbarProps {
  activeSectionId: string;
  onNavigate: (sectionId: string) => void;
}

const MobileToolbar: React.FC<MobileToolbarProps> = ({
  activeSectionId,
  onNavigate
}) => {
  const { t } = useTranslation();
  
  const sections = [
    { id: 'perfil', label: t('navigation.perfil'), icon: User },
    { id: 'experiencias', label: t('navigation.experiencias'), icon: Briefcase },
    { id: 'projetos', label: t('navigation.projetos'), icon: FolderOpen },
    { id: 'habilidades', label: t('navigation.habilidades'), icon: Wrench },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-frame-dark-blue py-3 z-50">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex px-4 min-w-max">
          {sections.map((section) => {
            const IconComponent = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => onNavigate(section.id)}
                className={`flex flex-col items-center px-3 py-2 text-xs font-medium rounded transition-colors flex-shrink-0 ${
                  activeSectionId === section.id
                    ? 'text-white bg-orange-500'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <IconComponent size={16} className="mb-1" />
                <span className="text-[10px] leading-tight whitespace-nowrap">{section.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileToolbar;
