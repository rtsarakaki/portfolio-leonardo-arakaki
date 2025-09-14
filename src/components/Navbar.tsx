'use client';

import React from 'react';
import { useNavigation } from '@/hooks/useNavigation';
import CotaArquitetonica from './CotaArquitetonica';

const Navbar: React.FC = () => {
  const { activeSectionId, navigateToSection } = useNavigation();

  return (
    <nav className="fixed inset-0 pointer-events-none z-50">
      {/* Cota Perfil - Esquerda */}
      <CotaArquitetonica
        label="Perfil"
        position="left"
        targetSectionId="perfil"
        isActive={activeSectionId === 'perfil'}
        onClick={navigateToSection}
      />

      {/* Cota Experiências - Baixo */}
      <CotaArquitetonica
        label="Experiências"
        position="bottom"
        targetSectionId="experiencias"
        isActive={activeSectionId === 'experiencias'}
        onClick={navigateToSection}
      />

      {/* Cota Formação - Direita */}
      <CotaArquitetonica
        label="Formação"
        position="right"
        targetSectionId="formacao"
        isActive={activeSectionId === 'formacao'}
        onClick={navigateToSection}
      />

      {/* Cota Projetos - Cima */}
      <CotaArquitetonica
        label="Projetos"
        position="top"
        targetSectionId="projetos"
        isActive={activeSectionId === 'projetos'}
        onClick={navigateToSection}
      />
    </nav>
  );
};

export default Navbar;