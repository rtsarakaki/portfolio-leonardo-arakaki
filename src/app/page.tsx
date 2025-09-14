'use client';

import { useState } from 'react';
import MainFrame from '@/components/MainFrame'
import RusticNavigation from '@/components/RusticNavigation'
import LeonardoArakakiSVG from '@/components/LeonardoArakakiSVG'

export default function Home() {
  const [activeSectionId, setActiveSectionId] = useState('perfil');

  const handleNavigate = (sectionId: string) => {
    console.log(`Navegando para: ${sectionId}`);
    setActiveSectionId(sectionId);
    console.log(`Estado ativo atualizado para: ${sectionId}`);
    // TODO: Implementar navegação real
  };

  return (
    <div className="min-h-screen px-2 py-0 sm:px-16 sm:py-12 flex justify-center sm:items-center">
      <MainFrame>
        <div className="flex h-full">
          {/* Conteúdo principal na parte esquerda do frame azul */}
          <div className="w-2/5 flex items-center justify-start pl-8">
            <LeonardoArakakiSVG />
          </div>
          
          {/* Navegação Rústica na parte direita */}
          <div className="w-3/5 flex flex-col justify-start pt-8 pr-8">
            <RusticNavigation
              activeSectionId={activeSectionId}
              onNavigate={handleNavigate}
            />
          </div>
        </div>
      </MainFrame>
    </div>
  )
}