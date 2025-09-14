'use client';

import React, { useState } from 'react';
import { useNavigation } from '@/hooks/useNavigation';

const MobileNavigation: React.FC = () => {
  const { activeSectionId, navigateToSection } = useNavigation();
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: 'perfil', label: 'Perfil' },
    { id: 'experiencias', label: 'Experiências' },
    { id: 'formacao', label: 'Formação' },
    { id: 'projetos', label: 'Projetos' }
  ];

  const handleSectionClick = (sectionId: string) => {
    navigateToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 sm:hidden">
      {/* Botão de toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          bg-amber-600 text-white p-3 rounded-full shadow-lg
          transition-all duration-300 ease-in-out
          hover:bg-amber-700 hover:scale-105
          focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-75
          ${isOpen ? 'rotate-45' : ''}
        `}
        aria-label={isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
        aria-expanded={isOpen}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>

      {/* Menu de navegação */}
      {isOpen && (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-xl border border-amber-200 p-2 min-w-[200px]">
          <div className="flex flex-col space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className={`
                  px-4 py-2 text-sm font-medium rounded-md
                  transition-all duration-200 ease-in-out
                  text-left
                  ${
                    activeSectionId === section.id
                      ? 'bg-amber-100 text-amber-800 border-l-4 border-amber-600'
                      : 'text-gray-700 hover:bg-amber-50 hover:text-amber-700'
                  }
                  focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-75
                `}
                aria-label={`Navegar para seção ${section.label}`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavigation;
