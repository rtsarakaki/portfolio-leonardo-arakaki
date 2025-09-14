'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

interface FormacaoSectionProps {
  isVisible: boolean;
  className?: string;
}

const FormacaoSection: React.FC<FormacaoSectionProps> = ({
  isVisible,
  className = ''
}) => {
  const education = [
    {
      title: 'Arquitetura e Urbanismo',
      institution: 'FAUUSP - Faculdade de Arquitetura e Urbanismo da USP',
      location: 'São Paulo, SP',
      period: '2016 - Presente',
      status: 'Em andamento',
      description: 'Formação em arquitetura e urbanismo com foco em design sustentável, urbanismo e comunicação visual.',
      highlights: ['Design Urbano', 'Sustentabilidade', 'Comunicação Visual', 'Pesquisa Acadêmica']
    },
    {
      title: 'Técnico em Design de Interiores',
      institution: 'ETEC Getúlio Vargas',
      location: 'São Paulo, SP',
      period: '2010 - 2012',
      status: 'Concluído',
      description: 'Formação técnica em design de interiores com ênfase em projetos residenciais e comerciais.',
      highlights: ['Projetos Residenciais', 'Projetos Comerciais', 'Materiais e Acabamentos', 'Desenho Técnico']
    }
  ];

  const certifications = [
    {
      name: 'Cambridge Proficiency in English (CPE)',
      institution: 'Cambridge Assessment English',
      year: '2019',
      level: 'Avançado'
    },
    {
      name: 'Japonês Básico',
      institution: 'FFLCH-USP',
      year: '2020',
      level: 'Básico'
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
          <GraduationCap size={24} className="text-[#e67e22] drop-shadow-sm" />
          Formação Acadêmica
        </h2>

        <div>
          <div className="space-y-6">
            {/* Formação Principal */}
            <div>
              <h4 className="text-lg font-semibold text-[#0f1419] mb-4 flex items-center font-handwriting">
                <GraduationCap size={20} className="mr-2 text-[#e67e22] drop-shadow-sm" />
                Formação Superior
              </h4>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 border-l-4 border-l-[#e67e22]">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h5 className="text-lg font-semibold text-[#0f1419] mb-1">
                          {edu.title}
                        </h5>
                        <p className="text-[#e67e22] font-medium text-sm mb-2">
                          {edu.institution}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-[#0f1419] mb-2">
                          <div className="flex items-center gap-1.5">
                            <Calendar size={14} className="text-[#e67e22] drop-shadow-sm" />
                            <span>{edu.period}</span>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            edu.status === 'Concluído' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-[#0f1419] text-sm leading-relaxed mb-3">
                      {edu.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <span
                          key={highlightIndex}
                          className="px-3 py-1.5 bg-gradient-to-r from-[#e67e22] to-[#c2410c] text-white rounded-full text-xs font-semibold shadow-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificações */}
            <div>
              <h4 className="text-lg font-semibold text-[#0f1419] mb-4 flex items-center font-handwriting">
                <Award size={20} className="mr-2 text-[#e67e22] drop-shadow-sm" />
                Certificações e Idiomas
              </h4>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h6 className="font-semibold text-[#0f1419] text-sm">{cert.name}</h6>
                        <p className="text-[#e67e22] text-xs">{cert.institution}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[#0f1419] text-xs font-medium">{cert.year}</span>
                        <p className="text-[#e67e22] text-xs">{cert.level}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resumo Acadêmico */}
            <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
            <h4 className="text-lg font-semibold text-[#0f1419] mb-3 flex items-center font-handwriting">
              <BookOpen size={20} className="mr-2 text-[#e67e22] drop-shadow-sm" />
              Trajetória Acadêmica
            </h4>
              <div className="space-y-2 text-[#0f1419] text-sm leading-relaxed">
                <p>
                  Minha formação combina educação técnica em design de interiores com 
                  graduação em arquitetura e urbanismo, proporcionando uma base sólida 
                  tanto em aspectos práticos quanto teóricos do design.
                </p>
                <p>
                  A experiência na FAUUSP tem me permitido desenvolver competências em 
                  pesquisa acadêmica, sustentabilidade urbana e comunicação visual, 
                  sempre com foco em projetos inovadores e socialmente responsáveis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FormacaoSection;
