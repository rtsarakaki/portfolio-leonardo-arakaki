'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import RusticButton from './RusticButton';
import ProfileSection from './ProfileSection';
import HabilidadesSection from './HabilidadesSection';
import IdiomasSection from './IdiomasSection';
import ExperienciasSection from './ExperienciasSection';
import FormacaoSection from './FormacaoSection';
import ProjetosSection from './ProjetosSection';

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
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'idiomas', label: 'Idiomas' },
    { id: 'experiencias', label: 'Experiências' },
    { id: 'formacao', label: 'Formação' },
    { id: 'projetos', label: 'Projetos' },
  ];

  // Função para gerar animação aleatória
  const getRandomAnimation = () => {
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
      // Diagonal esquerda-cima para direita-baixo
      {
        initial: { 
          height: 0, 
          opacity: 0,
          scaleX: 0.3,
          scaleY: 0.3,
          transformOrigin: "left top"
        },
        exit: { 
          height: 0, 
          opacity: 0,
          scaleX: 0.3,
          scaleY: 0.3,
          transformOrigin: "left top"
        }
      },
      // Diagonal direita-cima para esquerda-baixo
      {
        initial: { 
          height: 0, 
          opacity: 0,
          scaleX: 0.3,
          scaleY: 0.3,
          transformOrigin: "right top"
        },
        exit: { 
          height: 0, 
          opacity: 0,
          scaleX: 0.3,
          scaleY: 0.3,
          transformOrigin: "right top"
        }
      }
    ];
    
    return animations[Math.floor(Math.random() * animations.length)];
  };

  // Gerar animação aleatória para cada seção
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

  return (
    <div className={`flex flex-col h-full ${className}`}>
      {/* Navegação */}
      <div className="flex flex-wrap gap-2 mb-4">
        {sections.map((section) => (
          <RusticButton
            key={section.id}
            onClick={() => onNavigate(section.id)}
            isActive={activeSectionId === section.id}
            className="text-sm"
          >
            {section.label}
          </RusticButton>
        ))}
      </div>

      {/* Conteúdo das seções */}
      <div className="flex-1 relative">
        <AnimatePresence mode="wait">
          {activeSectionId === 'perfil' && (
            <motion.div
              key="perfil"
              initial={getSectionAnimation('perfil').initial}
              animate={{ 
                height: "auto", 
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
                ...getSectionAnimation('perfil').exit,
                transition: {
                  duration: 1.0,
                  ease: [0.55, 0.06, 0.68, 0.19]
                }
              }}
              className="w-full flex-1"
            >
              <ProfileSection 
                isVisible={true}
                className="w-full h-full"
              />
            </motion.div>
          )}
          
          {activeSectionId === 'habilidades' && (
            <motion.div
              key="habilidades"
              initial={getSectionAnimation('habilidades').initial}
              animate={{ 
                height: "auto", 
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
                ...getSectionAnimation('habilidades').exit,
                transition: {
                  duration: 1.0,
                  ease: [0.55, 0.06, 0.68, 0.19]
                }
              }}
              className="w-full flex-1"
            >
              <HabilidadesSection 
                isVisible={true}
                className="w-full h-full"
              />
            </motion.div>
          )}
          
          {activeSectionId === 'idiomas' && (
            <motion.div
              key="idiomas"
              initial={getSectionAnimation('idiomas').initial}
              animate={{ 
                height: "auto", 
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
                ...getSectionAnimation('idiomas').exit,
                transition: {
                  duration: 1.0,
                  ease: [0.55, 0.06, 0.68, 0.19]
                }
              }}
              className="w-full flex-1"
            >
              <IdiomasSection 
                isVisible={true}
                className="w-full h-full"
              />
            </motion.div>
          )}
          
          {activeSectionId === 'experiencias' && (
            <motion.div
              key="experiencias"
              initial={getSectionAnimation('experiencias').initial}
              animate={{ 
                height: "auto", 
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
                ...getSectionAnimation('experiencias').exit,
                transition: {
                  duration: 1.0,
                  ease: [0.55, 0.06, 0.68, 0.19]
                }
              }}
              className="w-full flex-1"
            >
              <ExperienciasSection 
                isVisible={true}
                className="w-full h-full"
              />
            </motion.div>
          )}
          
          {activeSectionId === 'formacao' && (
            <motion.div
              key="formacao"
              initial={getSectionAnimation('formacao').initial}
              animate={{ 
                height: "auto", 
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
                ...getSectionAnimation('formacao').exit,
                transition: {
                  duration: 1.0,
                  ease: [0.55, 0.06, 0.68, 0.19]
                }
              }}
              className="w-full flex-1"
            >
              <FormacaoSection 
                isVisible={true}
                className="w-full h-full"
              />
            </motion.div>
          )}
          
          {activeSectionId === 'projetos' && (
            <motion.div
              key="projetos"
              initial={getSectionAnimation('projetos').initial}
              animate={{ 
                height: "auto", 
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
                ...getSectionAnimation('projetos').exit,
                transition: {
                  duration: 1.0,
                  ease: [0.55, 0.06, 0.68, 0.19]
                }
              }}
              className="w-full flex-1"
            >
              <ProjetosSection 
                isVisible={true}
                className="w-full h-full"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RusticNavigation;