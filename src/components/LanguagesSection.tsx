'use client';

import React from 'react';
import { Globe, BookOpen, Award } from 'lucide-react';
import AnimatedBox from './AnimatedBox';

interface LanguagesSectionProps {
  isVisible: boolean;
  className?: string;
}

const LanguagesSection: React.FC<LanguagesSectionProps> = ({
  isVisible,
  className = ''
}) => {
  const languages = [
    { name: 'Inglês', level: 'Avançado', certificate: 'Cambridge CPE 2019', flag: '🇺🇸' },
    { name: 'Espanhol', level: 'Básico', certificate: null, flag: '🇪🇸' },
    { name: 'Italiano', level: 'Básico', certificate: null, flag: '🇮🇹' },
    { name: 'Japonês', level: 'Básico', certificate: 'FFLCH-USP', flag: '🇯🇵' },
  ];

  return (
    <div className={`profile-section ${className}`}>
      <AnimatedBox direction="top" className="p-6">
        <h2 className="text-xl font-bold text-[#0f1419] mb-6 font-handwriting text-center flex items-center justify-center gap-2">
          <Globe size={24} className="text-[#e67e22] drop-shadow-sm" />
          Competências em Idiomas
        </h2>

        <div>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-[#0f1419] mb-3 flex items-center font-handwriting">
                <Globe size={20} className="mr-2 text-[#e67e22] drop-shadow-sm" />
                Idiomas
              </h4>
              <div className="space-y-3">
                {languages.map((language) => (
                  <div key={language.name} className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl drop-shadow-sm">{language.flag}</span>
                        <div>
                          <h5 className="font-semibold text-[#0f1419] text-sm">{language.name}</h5>
                          <p className="text-[#e67e22] text-xs">{language.level}</p>
                        </div>
                      </div>
                      {language.certificate && (
                        <span className="text-xs bg-gradient-to-r from-[#e67e22] to-[#c2410c] text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 font-semibold shadow-md border border-[#c2410c]">
                          <Award size={12} className="text-yellow-200" />
                          Certificado
                        </span>
                      )}
                    </div>
                    {language.certificate && (
                      <p className="text-xs text-[#0f1419] font-medium bg-[#e67e22] bg-opacity-10 px-2 py-1 rounded border-l-2 border-[#e67e22]">
                        {language.certificate}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <h4 className="text-lg font-semibold text-[#0f1419] mb-3 flex items-center font-handwriting">
                <BookOpen size={20} className="mr-2 text-[#e67e22] drop-shadow-sm" />
                Experiência Internacional
              </h4>
              <div className="space-y-2 text-[#0f1419] text-sm">
                <p>
                  Com domínio avançado do inglês (Cambridge Proficiency), 
                  estou preparado para colaborações internacionais e 
                  oportunidades acadêmicas no exterior.
                </p>
                <p>
                  Minha experiência com múltiplos idiomas me permite 
                  trabalhar em projetos diversos e comunicar efetivamente 
                  com equipes internacionais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedBox>
    </div>
  );
};

export default LanguagesSection;
