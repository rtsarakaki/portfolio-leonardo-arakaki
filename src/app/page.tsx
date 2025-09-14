'use client';

import Section from '@/components/Section'
import Profile from '@/components/Profile'
import { useNavigation } from '@/hooks/useNavigation'
import Navbar from '@/components/Navbar'
import MainFrame from '@/components/MainFrame'

// Componente de teste temporário para o hook useNavigation
function NavigationTest() {
  const { activeSectionId, navigateToSection } = useNavigation();
  
  return (
    <div className="fixed top-4 left-4 z-50 bg-black/80 text-white p-4 rounded-lg">
      <p className="text-sm mb-2">Teste useNavigation:</p>
      <p className="text-xs mb-2">Ativo: {activeSectionId}</p>
      <div className="flex gap-2">
        <button 
          onClick={() => navigateToSection('perfil')}
          className="px-2 py-1 bg-blue-600 text-xs rounded hover:bg-blue-700"
        >
          Perfil
        </button>
        <button 
          onClick={() => navigateToSection('experiencias')}
          className="px-2 py-1 bg-green-600 text-xs rounded hover:bg-green-700"
        >
          Exp
        </button>
        <button 
          onClick={() => navigateToSection('formacao')}
          className="px-2 py-1 bg-purple-600 text-xs rounded hover:bg-purple-700"
        >
          Form
        </button>
        <button 
          onClick={() => navigateToSection('projetos')}
          className="px-2 py-1 bg-orange-600 text-xs rounded hover:bg-orange-700"
        >
          Proj
        </button>
      </div>
    </div>
  );
}


export default function Home() {
  return (
    <>
      {/* Componente de teste temporário */}
      <NavigationTest />
      
      {/* Navbar com cotas arquitetônicas */}
      <Navbar />
      
      {/* Main Frame com fundo azul escuro */}
      <MainFrame>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-electric opacity-20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-electric-blue/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Leonardo Franco Arakaki
            </h1>
            <p className="text-xl lg:text-2xl text-dark-300 mb-8 font-medium">
              Estudante de Arquitetura e Urbanismo na FAUUSP
            </p>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg lg:text-xl text-dark-200 leading-relaxed mb-8">
                Bem-vindo ao meu portfólio profissional. Sou apaixonado por design, 
                urbanismo e comunicação visual, com experiência em projetos de 
                identidade visual e mobiliário urbano.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary text-lg px-8 py-3">
                  Ver Projetos
                </button>
                <button className="btn-outline text-lg px-8 py-3">
                  Baixar CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfil Section */}
      <Section 
        id="perfil" 
        title="Sobre Mim" 
        subtitle="Conheça um pouco mais sobre minha trajetória e paixões"
        className="bg-dark-900"
      >
        <Profile />
      </Section>

      {/* Experiências Section */}
      <Section 
        id="experiencias" 
        title="Experiência Profissional" 
        subtitle="Minha jornada profissional e projetos realizados"
        className="bg-dark-950"
      >
        <div className="max-w-4xl mx-auto">
          <div className="card-hover">
            <div className="text-center space-y-6">
              <p className="text-lg text-dark-200 leading-relaxed">
                Em 2019, atuei como estagiário na Prefeitura do Campus da USP, responsável 
                por projetos de comunicação visual que impactaram diretamente a vivência 
                dos estudantes e visitantes.
              </p>
              <p className="text-lg text-dark-200 leading-relaxed">
                Projetos realizados: Reforma da escadaria da Av. Prof. Almeida Prado (EP-USP) 
                e readequação das lixeiras do complexo de lanchonetes.
              </p>
              <p className="text-lg text-dark-200 leading-relaxed">
                Projetos participados: Comunicação visual da Poli Engenharia Civil, 
                Colméias e Jardim Japonês.
              </p>
              <p className="text-lg text-dark-200 leading-relaxed">
                Também desenvolvi uma iniciação científica (2019–2020) na FAUUSP sobre 
                representação pictográfica em design, que resultou na criação de um manual 
                de identidade para apoiar pesquisas acadêmicas.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Projetos Section */}
      <Section 
        id="projetos" 
        title="Portfólio de Projetos" 
        subtitle="Alguns dos projetos que desenvolvi e participei"
        className="bg-dark-900"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-hover">
              <h3 className="text-xl font-semibold text-white mb-3">
                Reforma da escadaria – EP-USP
              </h3>
              <p className="text-dark-200">
                Projeto de revitalização para melhorar circulação e estética.
              </p>
            </div>
            <div className="card-hover">
              <h3 className="text-xl font-semibold text-white mb-3">
                Lixeiras do complexo de lanchonetes
              </h3>
              <p className="text-dark-200">
                Readequação para melhor integração urbana.
              </p>
            </div>
            <div className="card-hover">
              <h3 className="text-xl font-semibold text-white mb-3">
                Identidade visual
              </h3>
              <p className="text-dark-200">
                Poli Engenharia Civil, Colméias e Jardim Japonês.
              </p>
            </div>
            <div className="card-hover">
              <h3 className="text-xl font-semibold text-white mb-3">
                Manual de identidade pictográfica
              </h3>
              <p className="text-dark-200">
                Para pesquisa acadêmica.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Formação Section */}
      <Section 
        id="formacao" 
        title="Formação Acadêmica e Certificações" 
        subtitle="Minha trajetória educacional e certificações"
        className="bg-dark-950"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-hover">
              <h3 className="text-xl font-semibold text-white mb-3">
                ETEC Getúlio Vargas (2010–2012)
              </h3>
              <p className="text-dark-200">
                Ensino Médio + Técnico em Design de Interiores
              </p>
            </div>
            <div className="card-hover">
              <h3 className="text-xl font-semibold text-white mb-3">
                FAUUSP (2016–presente)
              </h3>
              <p className="text-dark-200">
                Graduação em Arquitetura e Urbanismo
              </p>
            </div>
            <div className="card-hover">
              <h3 className="text-xl font-semibold text-white mb-3">
                Cursos complementares
              </h3>
              <p className="text-dark-200">
                Edição de imagens e pintura digital (Escola SAGA)
              </p>
            </div>
            <div className="card-hover">
              <h3 className="text-xl font-semibold text-white mb-3">
                Idiomas
              </h3>
              <p className="text-dark-200">
                Inglês avançado (Cambridge CPE 2019), espanhol básico, 
                italiano básico, japonês básico (FFLCH-USP)
              </p>
            </div>
          </div>
        </div>
      </Section>
      </MainFrame>
    </>
  )
}
