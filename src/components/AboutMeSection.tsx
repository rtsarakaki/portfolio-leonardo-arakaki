'use client';

import React from 'react';
import { User } from 'lucide-react';

interface AboutMeSectionProps {
  className?: string;
}

const AboutMeSection: React.FC<AboutMeSectionProps> = ({
  className = ''
}) => {
  return (
    <div className={`sobre-mim-section ${className}`}>
      <div>
        <h4 className="text-lg font-semibold text-[#0f1419] mb-3 flex items-center font-handwriting">
          <User size={18} className="mr-2 text-[#e67e22]" />
          Sobre Mim
        </h4>
        <div className="space-y-3 text-[#0f1419] text-sm leading-relaxed">
          <p>
            Sou Leonardo Franco Arakaki, estudante de Arquitetura e Urbanismo na FAUUSP, 
            apaixonado por design, urbanismo e comunicação visual.
          </p>
          <p>
            Tenho experiência acadêmica e prática em projetos de identidade visual, 
            mobiliário urbano e espaços arquitetônicos, além de formação sólida em design de interiores.
          </p>
          <p>
            Estou sempre em busca de novos desafios e oportunidades para aplicar 
            meus conhecimentos em projetos inovadores e sustentáveis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
