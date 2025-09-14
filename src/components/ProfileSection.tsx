'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Check } from 'lucide-react';

interface ProfileSectionProps {
  isVisible: boolean;
  className?: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  isVisible,
  className = ''
}) => {
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
        {/* Profile Header */}
        <div className="text-center mb-6">
          <div className="relative inline-block mb-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#e67e22] to-[#c2410c] flex items-center justify-center text-2xl font-bold text-white shadow-lg">
              <User size={32} />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#c2410c] rounded-full flex items-center justify-center">
              <Check size={12} className="text-white" />
            </div>
          </div>
          <h2 className="text-xl font-bold text-[#0f1419] mb-2 font-handwriting">
            Leonardo Franco Arakaki
          </h2>
          <p className="text-sm text-[#0f1419] font-medium">
            Estudante de Arquitetura e Urbanismo
          </p>
          <div className="flex items-center justify-center gap-1 text-xs text-[#0f1419] mt-1">
            <MapPin size={12} />
            <span>FAUUSP • São Paulo, SP</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="space-y-4">
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
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileSection;
