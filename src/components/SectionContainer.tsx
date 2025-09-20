'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ArchitecturalCota from './ArchitecturalCota';

interface SectionContainerProps {
  sectionId: string;
  children: React.ReactNode;
  cotaDirection: 'left' | 'right' | 'top' | 'bottom';
  contentPadding?: string;
  isMobile?: boolean;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  sectionId,
  children,
  cotaDirection,
  contentPadding = 'p-4',
  isMobile = false
}) => {
  // Função para gerar animação baseada no sectionId
  const getSectionAnimation = (sectionId: string) => {
    // Usar o ID da seção como seed para consistência
    const seed = sectionId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const randomIndex = seed % 6;
    
    const animations = [
      // Esquerda para direita
      {
        initial: { 
          height: 0, 
          opacity: 0,
          scaleX: 0.3,
          transformOrigin: "left center"
        },
        exit: { 
          height: 0, 
          opacity: 0,
          scaleX: 0.3,
          transformOrigin: "left center"
        }
      },
      // Direita para esquerda
      {
        initial: { 
          height: 0, 
          opacity: 0,
          scaleX: 0.3,
          transformOrigin: "right center"
        },
        exit: { 
          height: 0, 
          opacity: 0,
          scaleX: 0.3,
          transformOrigin: "right center"
        }
      },
      // Cima para baixo
      {
        initial: { 
          height: 0, 
          opacity: 0,
          scaleY: 0.3,
          transformOrigin: "center top"
        },
        exit: { 
          height: 0, 
          opacity: 0,
          scaleY: 0.3,
          transformOrigin: "center top"
        }
      },
      // Baixo para cima
      {
        initial: { 
          height: 0, 
          opacity: 0,
          scaleY: 0.3,
          transformOrigin: "center bottom"
        },
        exit: { 
          height: 0, 
          opacity: 0,
          scaleY: 0.3,
          transformOrigin: "center bottom"
        }
      },
      // Direita para esquerda (segunda versão)
      {
        initial: { 
          height: 0, 
          opacity: 0,
          scaleX: 0.3,
          transformOrigin: "right center"
        },
        exit: { 
          height: 0, 
          opacity: 0,
          scaleX: 0.3,
          transformOrigin: "right center"
        }
      },
      // Esquerda para direita (segunda versão)
      {
        initial: { 
          height: 0, 
          opacity: 0,
          scaleX: 0.3,
          transformOrigin: "left center"
        },
        exit: { 
          height: 0, 
          opacity: 0,
          scaleX: 0.3,
          transformOrigin: "left center"
        }
      }
    ];
    
    return animations[randomIndex];
  };
  const isVertical = cotaDirection === 'top' || cotaDirection === 'bottom';
  const flexDirection = isVertical ? 'flex-col' : 'flex';
  
  // Remover animação especial para usar padrão como outras seções
  
  const getCotaContainer = () => {
    // Reduzir altura da cota para experiencias, projetos e idiomas
    const isReducedHeight = ['experiencias', 'projetos', 'idiomas'].includes(sectionId);
    const cotaSize = isReducedHeight ? 'h-6' : 'h-20';
    const cotaWidth = isReducedHeight ? 'w-6' : 'w-20';
    
    if (cotaDirection === 'left' || cotaDirection === 'right') {
      return (
        <div className={`${cotaWidth} flex-shrink-0 relative`}>
          <ArchitecturalCota direction={cotaDirection} />
        </div>
      );
    } else {
      return (
        <div className={`${cotaSize} flex-shrink-0 relative`}>
          <ArchitecturalCota direction={cotaDirection} />
        </div>
      );
    }
  };

  const getContentContainer = () => {
    return (
      <div className={`flex-1 ${contentPadding} overflow-y-auto`}>
        {children}
      </div>
    );
  };

  // No mobile, apenas mostrar o conteúdo sem cotas
  if (isMobile) {
    return (
      <motion.div
        key={sectionId}
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94]
          }
        }}
        exit={{
          opacity: 0,
          y: -20,
          transition: {
            duration: 0.3,
            ease: [0.55, 0.06, 0.68, 0.19]
          }
        }}
        className="w-full h-full"
      >
        {getContentContainer()}
      </motion.div>
    );
  }

  return (
    <motion.div
      key={sectionId}
      initial={getSectionAnimation(sectionId).initial}
      animate={{ 
        height: "100%", 
        opacity: 1,
        scaleX: 1,
        scaleY: 1,
        transition: {
          duration: 1.5,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.2
        }
      }}
      exit={{
        ...getSectionAnimation(sectionId).exit,
        transition: {
          duration: 1.0,
          ease: [0.55, 0.06, 0.68, 0.19]
        }
      }}
      className={`w-full flex-1 ${flexDirection} overflow-hidden`}
    >
      {/* Renderizar cota e conteúdo baseado na direção */}
      {cotaDirection === 'left' && (
        <>
          {getCotaContainer()}
          {getContentContainer()}
        </>
      )}
      
      {cotaDirection === 'right' && (
        <>
          {getContentContainer()}
          {getCotaContainer()}
        </>
      )}
      
      {cotaDirection === 'top' && (
        <>
          {getCotaContainer()}
          {getContentContainer()}
        </>
      )}
      
      {cotaDirection === 'bottom' && (
        <>
          {getContentContainer()}
          {getCotaContainer()}
        </>
      )}
    </motion.div>
  );
};

export default SectionContainer;
