'use client';

import MainFrame from '@/components/MainFrame'
import RusticNavigation from '@/components/RusticNavigation'
import LeonardoArakakiSVG from '@/components/LeonardoArakakiSVG'

export default function Home() {
  const handleNavigate = (sectionId: string) => {
    console.log(`Navegando para: ${sectionId}`);
    // TODO: Implementar navegação real
  };

  return (
    <div className="min-h-screen px-2 py-0 sm:px-16 sm:py-12 flex justify-center sm:items-center">
      <MainFrame>
        <div className="flex flex-col h-full">
          {/* Navegação Rústica no topo, do centro para a direita */}
          <div className="flex justify-center pt-8 pb-4">
            <div className="w-1/2 flex justify-end pr-8">
              <RusticNavigation
                activeSectionId="perfil"
                onNavigate={handleNavigate}
              />
            </div>
          </div>
          
          {/* Conteúdo principal na parte esquerda do frame azul */}
          <div className="flex-1 flex items-center">
            <div className="w-1/2 flex justify-start pl-8">
              <LeonardoArakakiSVG />
            </div>
          </div>
        </div>
      </MainFrame>
    </div>
  )
}