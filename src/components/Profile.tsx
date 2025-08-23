'use client'

import { useState } from 'react'

const Profile = () => {
  const [activeTab, setActiveTab] = useState('about')

  const tabs = [
    { id: 'about', label: 'Sobre Mim', icon: '👨‍🎓' },
    { id: 'skills', label: 'Habilidades', icon: '🛠️' },
    { id: 'languages', label: 'Idiomas', icon: '🌍' },
  ]

  const skills = [
    { name: 'Design de Interiores', level: 90, category: 'Design' },
    { name: 'Identidade Visual', level: 85, category: 'Design' },
    { name: 'Mobiliário Urbano', level: 80, category: 'Arquitetura' },
    { name: 'Urbanismo', level: 75, category: 'Arquitetura' },
    { name: 'Comunicação Visual', level: 85, category: 'Design' },
    { name: 'Pesquisa Acadêmica', level: 80, category: 'Acadêmico' },
  ]

  const languages = [
    { name: 'Inglês', level: 'Avançado', certificate: 'Cambridge CPE 2019', flag: '🇺🇸' },
    { name: 'Espanhol', level: 'Básico', certificate: null, flag: '🇪🇸' },
    { name: 'Italiano', level: 'Básico', certificate: null, flag: '🇮🇹' },
    { name: 'Japonês', level: 'Básico', certificate: 'FFLCH-USP', flag: '🇯🇵' },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      {/* Profile Header */}
      <div className="text-center mb-12">
        <div className="relative inline-block mb-6">
          <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-electric flex items-center justify-center text-4xl lg:text-6xl font-bold text-white shadow-2xl shadow-electric-blue/25">
            LA
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-electric-blue rounded-full flex items-center justify-center">
            <span className="text-white text-sm">✓</span>
          </div>
        </div>
        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
          Leonardo Franco Arakaki
        </h3>
        <p className="text-lg text-electric-blue font-medium">
          Estudante de Arquitetura e Urbanismo
        </p>
        <p className="text-dark-300 mt-2">
          FAUUSP • São Paulo, SP
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="glass rounded-xl p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-electric text-white shadow-lg'
                  : 'text-dark-300 hover:text-white hover:bg-dark-700'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {activeTab === 'about' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card-hover">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="mr-2">🎯</span>
                Sobre Mim
              </h4>
              <div className="space-y-4 text-dark-200 leading-relaxed">
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

            <div className="card-hover">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="mr-2">🎓</span>
                Formação
              </h4>
              <div className="space-y-4">
                <div className="border-l-4 border-electric-blue pl-4">
                  <h5 className="font-semibold text-white">FAUUSP</h5>
                  <p className="text-dark-300">Arquitetura e Urbanismo</p>
                  <p className="text-sm text-dark-400">2016 - Presente</p>
                </div>
                <div className="border-l-4 border-electric-purple pl-4">
                  <h5 className="font-semibold text-white">ETEC Getúlio Vargas</h5>
                  <p className="text-dark-300">Técnico em Design de Interiores</p>
                  <p className="text-sm text-dark-400">2010 - 2012</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="space-y-6">
            <div className="card-hover">
              <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
                <span className="mr-2">🛠️</span>
                Habilidades Técnicas
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-electric-blue text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <div
                        className="bg-gradient-electric h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-dark-400">{skill.category}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-hover">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="mr-2">🎨</span>
                Áreas de Interesse
              </h4>
              <div className="flex flex-wrap gap-3">
                {['Design Urbano', 'Identidade Visual', 'Mobiliário', 'Sustentabilidade', 'Pesquisa Acadêmica'].map((area) => (
                  <span
                    key={area}
                    className="px-4 py-2 bg-dark-700 border border-electric-blue/30 text-electric-blue rounded-full text-sm font-medium hover:bg-electric-blue hover:text-white transition-colors duration-300"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'languages' && (
          <div className="space-y-6">
            <div className="card-hover">
              <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
                <span className="mr-2">🌍</span>
                Competências em Idiomas
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {languages.map((language) => (
                  <div key={language.name} className="card-hover">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{language.flag}</span>
                        <div>
                          <h5 className="font-semibold text-white">{language.name}</h5>
                          <p className="text-electric-blue text-sm">{language.level}</p>
                        </div>
                      </div>
                      {language.certificate && (
                        <span className="text-xs bg-electric-blue/20 text-electric-blue px-2 py-1 rounded-full">
                          Certificado
                        </span>
                      )}
                    </div>
                    {language.certificate && (
                      <p className="text-xs text-dark-400">
                        {language.certificate}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="card-hover">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="mr-2">📚</span>
                Experiência Internacional
              </h4>
              <div className="space-y-3 text-dark-200">
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
        )}
      </div>
    </div>
  )
}

export default Profile
