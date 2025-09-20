'use client';

import { useState } from 'react';
import MainFrame from '@/components/MainFrame'
import RusticNavigation from '@/components/RusticNavigation'
import LeonardoArakakiSVG from '@/components/LeonardoArakakiSVG'
import MobileToolbar from '@/components/MobileToolbar'
import LanguageSelector from '@/components/LanguageSelector'
import useTranslation from '@/hooks/useTranslation'
import { TranslationProvider } from '@/contexts/TranslationContext'

function HomeContent() {
  const [activeSectionId, setActiveSectionId] = useState('perfil');
  const { locale, changeLanguage } = useTranslation();

  const handleNavigate = (sectionId: string) => {
    console.log(`Navegando para: ${sectionId}`);
    setActiveSectionId(sectionId);
    console.log(`Estado ativo atualizado para: ${sectionId}`);
    // TODO: Implementar navegação real
  };

  return (
    <div className="min-h-screen">
      {/* Desktop Layout */}
      <div className="hidden sm:flex px-8 py-8 justify-center items-center h-screen max-h-[1080px]">
        <MainFrame
          currentLocale={locale}
          onLanguageChange={changeLanguage}
        >
          <div className="flex h-full">
            {/* Conteúdo principal na parte esquerda do frame azul */}
            <div className="w-[30%] flex items-center justify-start pl-8">
              <LeonardoArakakiSVG />
            </div>
            
            {/* Navegação Rústica na parte direita */}
            <div className="w-[70%] flex flex-col justify-start pt-2 pr-8">
              <RusticNavigation
                activeSectionId={activeSectionId}
                onNavigate={handleNavigate}
              />
            </div>
          </div>
        </MainFrame>
      </div>

      {/* Mobile Layout */}
      <div className="sm:hidden flex flex-col h-screen">
        {/* Header com nome */}
        <div className="bg-frame-dark-blue px-4 py-3 flex justify-between items-center">
          <div className="w-full max-w-[200px]">
            <svg 
              viewBox="0 0 200 30" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto -skew-x-8"
            >
              <text 
                x="100" 
                y="20" 
                textAnchor="middle" 
                fontSize="16" 
                fontFamily="serif" 
                fontWeight="bold"
                fill="#FF8C42"
                stroke="#FF8C42"
                strokeWidth="0.5"
              >
                LEONARDO ARAKAKI
              </text>
            </svg>
          </div>
          
          {/* Seletor de idioma mobile */}
          <LanguageSelector
            currentLocale={locale}
            onLanguageChange={changeLanguage}
            className="flex-shrink-0"
          />
        </div>
        
        {/* Conteúdo principal com scroll e padding para o toolbar fixo */}
        <div className="flex-1 bg-white overflow-y-auto pb-24">
          <RusticNavigation
            activeSectionId={activeSectionId}
            onNavigate={handleNavigate}
            isMobile={true}
          />
        </div>
        
        {/* Toolbar fixo na parte inferior - apenas no mobile */}
        <MobileToolbar
          activeSectionId={activeSectionId}
          onNavigate={handleNavigate}
        />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <TranslationProvider>
      <HomeContent />
    </TranslationProvider>
  );
}