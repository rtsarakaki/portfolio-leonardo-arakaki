'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building, Calendar, MapPin } from 'lucide-react';

interface ExperienciasSectionProps {
  isVisible: boolean;
  className?: string;
}

const ExperienciasSection: React.FC<ExperienciasSectionProps> = ({
  isVisible,
  className = ''
}) => {
  const experiences = [
    {
      title: 'Estagiário de Arquitetura',
      company: 'Prefeitura do Campus USP',
      location: 'São Paulo, SP',
      period: '2022 - 2023',
      description: 'Desenvolvimento de projetos de mobiliário urbano e espaços públicos. Participação em estudos de viabilidade e projetos de comunicação visual para o campus.',
      projects: ['Mobiliário Urbano', 'Sinalização Campus', 'Estudos de Viabilidade']
    },
    {
      title: 'Projetista de Comunicação Visual',
      company: 'Projetos Acadêmicos',
      location: 'FAUUSP',
      period: '2021 - 2022',
      description: 'Criação de identidade visual para eventos acadêmicos e projetos de extensão. Desenvolvimento de materiais gráficos e sinalização.',
      projects: ['Identidade Visual', 'Materiais Gráficos', 'Sinalização']
    },
    {
      title: 'Iniciação Científica',
      company: 'FAUUSP - Laboratório de Urbanismo',
      location: 'São Paulo, SP',
      period: '2020 - 2021',
      description: 'Pesquisa sobre sustentabilidade urbana e design de espaços públicos. Desenvolvimento de metodologias de análise urbana.',
      projects: ['Pesquisa Urbana', 'Sustentabilidade', 'Metodologias']
    }
  ];

  return (
    <div className={`profile-section ${className}`}>
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        animate={{ 
          y: 0, 
          opacity: 1,
          transition: {
            delay: 0.8,
            duration: 0.7,
            ease: "easeOut"
          }
        }}
        exit={{ 
          y: -20, 
          opacity: 0,
          transition: {
            duration: 0.3,
            ease: "easeIn"
          }
        }}
        className="p-6"
      >
        <h2 className="text-xl font-bold text-[#0f1419] mb-6 font-handwriting text-center flex items-center justify-center gap-2">
          <Briefcase size={24} className="text-[#e67e22] drop-shadow-sm" />
          Experiências Profissionais
        </h2>

        <div>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 border-l-4 border-l-[#e67e22]">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#0f1419] mb-1 flex items-center gap-2">
                      <Briefcase size={18} className="text-[#e67e22] drop-shadow-sm" />
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-[#0f1419] mb-2">
                      <div className="flex items-center gap-1.5">
                        <Building size={16} className="text-[#e67e22] drop-shadow-sm" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={16} className="text-[#e67e22] drop-shadow-sm" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={16} className="text-[#e67e22] drop-shadow-sm" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-[#0f1419] text-sm leading-relaxed mb-3">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.projects.map((project, projectIndex) => (
                        <span
                          key={projectIndex}
                          className="px-3 py-1.5 bg-gradient-to-r from-[#e67e22] to-[#c2410c] text-white rounded-full text-xs font-semibold shadow-sm"
                        >
                          {project}
                        </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
            <h4 className="text-lg font-semibold text-[#0f1419] mb-3 flex items-center font-handwriting">
              <Briefcase size={20} className="mr-2 text-[#e67e22] drop-shadow-sm" />
              Resumo Profissional
            </h4>
            <div className="space-y-2 text-[#0f1419] text-sm leading-relaxed">
              <p>
                Com experiência em projetos de arquitetura e urbanismo, tenho desenvolvido 
                competências em design de mobiliário urbano, comunicação visual e pesquisa acadêmica.
              </p>
              <p>
                Minha trajetória combina prática profissional na Prefeitura do Campus USP 
                com desenvolvimento acadêmico em projetos de extensão e iniciação científica.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienciasSection;
