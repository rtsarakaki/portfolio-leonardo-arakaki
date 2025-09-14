'use client';

import { useState } from 'react';

export const useNavigation = () => {
  // Estado interno para controlar a seção ativa
  const [activeSectionId, setActiveSectionId] = useState<string>('perfil');
  
  // Estado para controlar se está navegando (evita conflitos com IntersectionObserver)
  const [isNavigating, setIsNavigating] = useState<boolean>(false);

  /**
   * Função para navegar suavemente para uma seção específica
   * @param id - ID da seção para navegar
   */
  const navigateToSection = (id: string) => {
    // Marcar como navegando para evitar conflitos com IntersectionObserver
    setIsNavigating(true);
    
    // Atualizar a seção ativa imediatamente
    setActiveSectionId(id);
    
    // Encontrar o elemento da seção e rolar suavemente para ele
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    // Resetar o estado de navegação após a animação de scroll
    // 800ms é um tempo seguro para a maioria das animações de scroll suave
    setTimeout(() => {
      setIsNavigating(false);
    }, 800);
  };

  return {
    activeSectionId,
    navigateToSection,
    isNavigating
  };
};
