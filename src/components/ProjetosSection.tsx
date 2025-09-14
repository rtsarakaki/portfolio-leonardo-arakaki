'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FolderOpen, ExternalLink, Calendar, MapPin, Users } from 'lucide-react';

interface ProjetosSectionProps {
  isVisible: boolean;
  className?: string;
}

const ProjetosSection: React.FC<ProjetosSectionProps> = ({
  isVisible,
  className = ''
}) => {
  const projects = [
    {
      title: 'Escadaria EP-USP',
      category: 'Arquitetura',
      year: '2023',
      location: 'Campus USP',
      team: 'Individual',
      description: 'Projeto de revitalização da escadaria principal do prédio da Engenharia de Produção da USP, focando em acessibilidade e identidade visual.',
      technologies: ['AutoCAD', 'SketchUp', 'Photoshop'],
      highlights: ['Acessibilidade Universal', 'Identidade Visual', 'Sustentabilidade'],
      status: 'Concluído'
    },
    {
      title: 'Sistema de Lixeiras Inteligentes',
      category: 'Mobiliário Urbano',
      year: '2022',
      location: 'Campus USP',
      team: 'Equipe de 3 pessoas',
      description: 'Desenvolvimento de sistema de lixeiras urbanas com design sustentável e funcional, integrando-se harmoniosamente ao ambiente do campus.',
      technologies: ['AutoCAD', 'Rhinoceros', 'Renderização'],
      highlights: ['Design Sustentável', 'Funcionalidade', 'Integração Urbana'],
      status: 'Implementado'
    },
    {
      title: 'Identidade Visual - Evento Acadêmico',
      category: 'Comunicação Visual',
      year: '2021',
      location: 'FAUUSP',
      team: 'Individual',
      description: 'Criação completa da identidade visual para evento acadêmico, incluindo logotipo, materiais gráficos e sinalização.',
      technologies: ['Illustrator', 'Photoshop', 'InDesign'],
      highlights: ['Branding', 'Materiais Gráficos', 'Sinalização'],
      status: 'Concluído'
    },
    {
      title: 'Projeto de Habitação Social',
      category: 'Urbanismo',
      year: '2020',
      location: 'São Paulo, SP',
      team: 'Equipe de 4 pessoas',
      description: 'Estudo de viabilidade e projeto conceitual para complexo habitacional social, considerando sustentabilidade e qualidade de vida.',
      technologies: ['AutoCAD', 'SketchUp', 'Análise Urbana'],
      highlights: ['Habitabilidade', 'Sustentabilidade', 'Análise Social'],
      status: 'Conceitual'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Concluído':
      case 'Implementado':
        return 'bg-green-100 text-green-800';
      case 'Em andamento':
        return 'bg-blue-100 text-blue-800';
      case 'Conceitual':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

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
          <FolderOpen size={24} className="text-[#e67e22] drop-shadow-sm" />
          Portfólio de Projetos
        </h2>

        <div>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 border-l-4 border-l-[#e67e22]">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-[#0f1419]">
                        {project.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-[#e67e22] font-medium text-sm mb-2">
                      {project.category}
                    </p>
                      <div className="flex items-center gap-4 text-xs text-[#0f1419] mb-3">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} className="text-[#e67e22] drop-shadow-sm" />
                          <span>{project.year}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin size={14} className="text-[#e67e22] drop-shadow-sm" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Users size={14} className="text-[#e67e22] drop-shadow-sm" />
                          <span>{project.team}</span>
                        </div>
                      </div>
                  </div>
                </div>
                
                <p className="text-[#0f1419] text-sm leading-relaxed mb-3">
                  {project.description}
                </p>
                
                <div className="mb-3">
                  <h6 className="text-xs font-semibold text-[#0f1419] mb-2">Tecnologias:</h6>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 bg-gradient-to-r from-[#e67e22] to-[#c2410c] text-white rounded-full text-xs font-semibold shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h6 className="text-xs font-semibold text-[#0f1419] mb-2">Destaques:</h6>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <span
                        key={highlightIndex}
                        className="px-3 py-1.5 bg-gradient-to-r from-[#e67e22] to-[#c2410c] text-white rounded-full text-xs font-semibold shadow-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
            <h4 className="text-lg font-semibold text-[#0f1419] mb-3 flex items-center font-handwriting">
              <FolderOpen size={20} className="mr-2 text-[#e67e22] drop-shadow-sm" />
              Metodologia de Projeto
            </h4>
            <div className="space-y-2 text-[#0f1419] text-sm leading-relaxed">
              <p>
                Meus projetos seguem uma metodologia centrada no usuário, sempre considerando 
                aspectos de sustentabilidade, acessibilidade e integração com o contexto urbano.
              </p>
              <p>
                Cada projeto é desenvolvido através de pesquisa, análise do contexto, 
                desenvolvimento conceitual e detalhamento técnico, garantindo soluções 
                inovadoras e funcionalmente adequadas.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjetosSection;
