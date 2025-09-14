'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Palette } from 'lucide-react';

interface HabilidadesSectionProps {
  isVisible: boolean;
  className?: string;
}

const HabilidadesSection: React.FC<HabilidadesSectionProps> = ({
  isVisible,
  className = ''
}) => {
  const skills = [
    { name: 'Design de Interiores', level: 90, category: 'Design' },
    { name: 'Identidade Visual', level: 85, category: 'Design' },
    { name: 'Mobiliário Urbano', level: 80, category: 'Arquitetura' },
    { name: 'Urbanismo', level: 75, category: 'Arquitetura' },
    { name: 'Comunicação Visual', level: 85, category: 'Design' },
    { name: 'Pesquisa Acadêmica', level: 80, category: 'Acadêmico' },
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
          <Wrench size={24} className="text-[#e67e22] drop-shadow-sm" />
          Habilidades Técnicas
        </h2>

        <div>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-[#0f1419] mb-3 flex items-center font-handwriting">
                <Wrench size={20} className="mr-2 text-[#e67e22] drop-shadow-sm" />
                Nível de Proficiência
              </h4>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.name} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[#0f1419] font-semibold text-sm">{skill.name}</span>
                      <span className="text-[#e67e22] text-sm font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#0f1419] bg-opacity-20 rounded-full h-3 mb-2">
                      <div
                        className="bg-gradient-to-r from-[#e67e22] to-[#c2410c] h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-[#0f1419] font-medium bg-[#e67e22] bg-opacity-10 px-2 py-1 rounded-full">{skill.category}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-[#0f1419] mb-3 flex items-center font-handwriting">
                <Palette size={20} className="mr-2 text-[#e67e22] drop-shadow-sm" />
                Áreas de Interesse
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Design Urbano', 'Identidade Visual', 'Mobiliário', 'Sustentabilidade', 'Pesquisa Acadêmica'].map((area) => (
                  <span
                    key={area}
                    className="px-4 py-2 bg-gradient-to-r from-[#e67e22] to-[#c2410c] text-white rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HabilidadesSection;
