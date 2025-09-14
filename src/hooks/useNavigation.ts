'use client';

import { useState, useEffect, useRef } from 'react';

export const useNavigation = () => {
  // Estado interno para controlar a seção ativa
  const [activeSectionId, setActiveSectionId] = useState<string>('perfil');
  
  // Estado para controlar se está navegando (evita conflitos com IntersectionObserver)
  const [isNavigating, setIsNavigating] = useState<boolean>(false);
  
  // Ref para o IntersectionObserver
  const observerRef = useRef<IntersectionObserver | null>(null);

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

  // Configurar IntersectionObserver para detectar seções visíveis
  useEffect(() => {
    // IDs das seções a serem observadas
    const sectionIds = ['perfil', 'experiencias', 'formacao', 'projetos'];
    
    // Criar o IntersectionObserver
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Só atualizar se não estiver navegando manualmente
        if (!isNavigating) {
          // Encontrar a entrada com maior interseção
          let maxIntersection = 0;
          let mostVisibleSection = '';
          
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > maxIntersection) {
              maxIntersection = entry.intersectionRatio;
              mostVisibleSection = entry.target.id;
            }
          });
          
          // Atualizar a seção ativa se encontrou uma seção visível
          if (mostVisibleSection && maxIntersection > 0.6) {
            setActiveSectionId(mostVisibleSection);
          }
        }
      },
      {
        threshold: [0.1, 0.3, 0.5, 0.7, 0.9], // Múltiplos thresholds para melhor detecção
        rootMargin: '-10% 0px -10% 0px' // Margem para evitar mudanças muito frequentes
      }
    );

    // Observar todas as seções
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    // Cleanup: desconectar o observer quando o componente for desmontado
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isNavigating]); // Dependência do isNavigating para recriar o observer quando necessário

  return {
    activeSectionId,
    navigateToSection,
    isNavigating
  };
};
