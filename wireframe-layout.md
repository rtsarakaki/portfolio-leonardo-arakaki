# 🏗️ WIREFRAME - PORTFÓLIO LEONARDO ARAKAKI
*Esboço Arquitetural - Sistema de Navegação com Cotas*

---

## 🎯 CONCEITO GERAL
Sistema de layout dinâmico onde cada seção do menu possui:
- **Cota arquitetural** posicionada estrategicamente
- **Animação de expansão** que segue a direção da cota
- **Frames que se alternam** com efeitos de abertura/fechamento
- **Estilo rustico** reminiscente de croquis arquiteturais

---

## 📐 LAYOUTS POR SEÇÃO

### 🧑‍💼 **MENU 1: PERFIL** (Layout Option 1)
```
┌─────────────────────────────────────────────────────────────────┐
│  ┌─────────────────┐  [●] [○] [○] [○] [○]                     │
│  │                 │                                           │
│  │   LEONARDO      │  ┌─────────────────────────────────────┐  │
│  │   ARAKAKI       │  │                                     │  │
│  │                 │  │                                     │  │
│  │                 │  │        PERFIL CONTENT               │  │
│  │                 │  │        (Horizontal Layout)          │  │
│  │                 │  │                                     │  │
│  │                 │  │                                     │  │
│  │                 │  │                                     │  │
│  └─────────────────┘  └─────────────────────────────────────┘  │
│  │←─ COTA LATERAL ─│                                           │
└─────────────────────────────────────────────────────────────────┘
```

**Especificações:**
- **Cota**: Lateral esquerda (vertical)
- **Animação**: Expansão da esquerda para direita
- **Conteúdo**: Informações pessoais, foto, bio
- **Efeito**: Frame se abre como uma cortina lateral

---

### 💼 **MENU 2: EXPERIÊNCIAS** (Layout Option 1)
```
┌─────────────────────────────────────────────────────────────────┐
│  ┌─────────────────┐  [○] [●] [○] [○] [○]                     │
│  │                 │                                           │
│  │   LEONARDO      │  ┌─────────────────────────────────────┐  │
│  │   ARAKAKI       │  │                                     │  │
│  │                 │  │                                     │  │
│  │                 │  │        EXPERIÊNCIAS CONTENT         │  │
│  │                 │  │        (Horizontal Layout)          │  │
│  │                 │  │                                     │  │
│  │                 │  │                                     │  │
│  │                 │  │                                     │  │
│  └─────────────────┘  └─────────────────────────────────────┘  │
│                           │←─ COTA INFERIOR ─│                │
└─────────────────────────────────────────────────────────────────┘
```

**Especificações:**
- **Cota**: Inferior horizontal
- **Animação**: Expansão de baixo para cima
- **Conteúdo**: Timeline de experiências, empresas, cargos
- **Efeito**: Frame se abre como uma gaveta que sobe

---

### 🎓 **MENU 3: FORMAÇÃO** (Layout Option 1)
```
┌─────────────────────────────────────────────────────────────────┐
│  ┌─────────────────┐  [○] [○] [●] [○] [○]                     │
│  │                 │                                           │
│  │   LEONARDO      │  ┌─────────────────────────────────────┐  │
│  │   ARAKAKI       │  │                                     │  │
│  │                 │  │                                     │  │
│  │                 │  │        FORMAÇÃO CONTENT             │  │
│  │                 │  │        (Horizontal Layout)          │  │
│  │                 │  │                                     │  │
│  │                 │  │                                     │  │
│  │                 │  │                                     │  │
│  └─────────────────┘  └─────────────────────────────────────┘  │
│                                           │←─ COTA DIREITA ─│  │
└─────────────────────────────────────────────────────────────────┘
```

**Especificações:**
- **Cota**: Lateral direita (vertical)
- **Animação**: Expansão da direita para esquerda
- **Conteúdo**: Cursos, certificações, educação
- **Efeito**: Frame se abre como uma cortina lateral (direita→esquerda)

---

### 🚀 **MENU 4: PROJETOS** (Layout Option 2)
```
┌─────────────────────────────────────────────────────────────────┐
│  ┌─────────────────┐  [○] [○] [○] [●] [○]                     │
│  │                 │  ┌─ COTA ─┐ ┌─ COTA ─┐ ┌─ COTA ─┐        │
│  │   LEONARDO      │  │ PROJ 1 │ │ PROJ 2 │ │ PROJ 3 │        │
│  │   ARAKAKI       │  │        │ │        │ │        │        │
│  │                 │  │        │ │        │ │        │        │
│  │                 │  │        │ │        │ │        │        │
│  │                 │  │        │ │        │ │        │        │
│  │                 │  │        │ │        │ │        │        │
│  │                 │  │        │ │        │ │        │        │
│  │                 │  │        │ │        │ │        │        │
│  └─────────────────┘  └────────┘ └────────┘ └────────┘        │
└─────────────────────────────────────────────────────────────────┘
```

**Especificações:**
- **Cota**: Superior de cada frame de projeto
- **Animação**: Expansão de cima para baixo
- **Conteúdo**: Grid de projetos com detalhes expandidos
- **Efeito**: Frame selecionado expande, outros se recolhem

---

## 🎬 SISTEMA DE ANIMAÇÕES

### 📏 **COTAS ARQUITETURAIS**
```
┌─ ESTILO RUSTICO ─┐
│ • Linhas tracejadas │
│ • Números de cota   │
│ • Símbolos de medida│
│ • Textura de papel  │
│ • Cor: #8B4513      │
└────────────────────┘
```

### 🎭 **EFEITOS DE EXPANSÃO**

#### **1. COTA LATERAL ESQUERDA** (Perfil)
```
Estado Inicial:    Estado Expandido:
┌─┐                ┌─────────────────┐
│ │                │                 │
│ │                │                 │
│ │                │                 │
│ │                │                 │
└─┘                └─────────────────┘
│←─ COTA ─│        │←─ COTA ─│
```

**Animação:**
- **Direção**: Esquerda → Direita
- **Duração**: 800ms
- **Easing**: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- **Efeito**: Cortina lateral deslizando

#### **2. COTA INFERIOR** (Experiências)
```
Estado Inicial:    Estado Expandido:
┌─────────────┐    ┌─────────────┐
│             │    │             │
│             │    │             │
│             │    │             │
└─────────────┘    └─────────────┘
│←─ COTA ─│        │←─ COTA ─│
```

**Animação:**
- **Direção**: Baixo → Cima
- **Duração**: 800ms
- **Easing**: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- **Efeito**: Gaveta subindo

#### **3. COTA LATERAL DIREITA** (Formação)
```
Estado Inicial:    Estado Expandido:
┌─┐                ┌─────────────────┐
│ │                │                 │
│ │                │                 │
│ │                │                 │
│ │                │                 │
└─┘                └─────────────────┘
        │←─ COTA ─│        │←─ COTA ─│
```

**Animação:**
- **Direção**: Direita → Esquerda
- **Duração**: 800ms
- **Easing**: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- **Efeito**: Cortina lateral deslizando (invertida)

#### **4. COTA SUPERIOR** (Projetos)
```
Estado Inicial:    Estado Expandido:
┌─ COTA ─┐         ┌─ COTA ─┐
│ PROJ 1 │         │ PROJ 1 │
│        │         │        │
│        │         │        │
│        │         │        │
└────────┘         └────────┘
```

**Animação:**
- **Direção**: Cima → Baixo
- **Duração**: 600ms
- **Easing**: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- **Efeito**: Acordeão expandindo

---

## 🎨 SISTEMA VISUAL

### 🖌️ **ESTILO RUSTICO/CROQUI**
```css
/* Cotas Arquiteturais */
.cota {
  stroke: #8B4513;
  stroke-width: 2;
  stroke-dasharray: 5, 5;
  fill: none;
}

/* Linhas de Construção */
.construction-line {
  stroke: #D3D3D3;
  stroke-width: 1;
  stroke-dasharray: 2, 2;
  opacity: 0.6;
}

/* Textura de Papel */
.paper-texture {
  background-image: 
    radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0);
  background-size: 20px 20px;
}

/* Sombra de Croqui */
.sketch-shadow {
  box-shadow: 
    0 0 0 1px #8B4513,
    0 2px 4px rgba(0,0,0,0.1);
}
```

### 🎭 **ESTADOS DE ANIMAÇÃO**
```css
/* Estado Inicial */
.frame-initial {
  transform: scaleX(0);
  transform-origin: left;
  opacity: 0;
}

/* Estado Expandido */
.frame-expanded {
  transform: scaleX(1);
  transform-origin: left;
  opacity: 1;
}

/* Transição */
.frame-transition {
  transition: 
    transform 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
    opacity 800ms ease-in-out;
}
```

---

## 🏛️ ESPECIFICAÇÕES ARQUITETURAIS

### 📏 DIMENSÕES E PROPORÇÕES
```
Desktop (1200px+):
├── Sidebar: 240px (20%)
├── Content: 960px (80%)
└── Grid Gaps: 24px

Tablet (768px-1199px):
├── Sidebar: 200px (25%)
├── Content: 568px (75%)
└── Grid Gaps: 16px

Mobile (<768px):
├── Sidebar: 100% (stacked)
├── Content: 100% (stacked)
└── Grid Gaps: 12px
```

### 🎨 HIERARQUIA VISUAL
```
┌─ Z-INDEX LAYERS ─┐
│ 3. Navigation    │ ← Fixed top
│ 2. Main Content  │ ← Scrollable
│ 1. Sidebar       │ ← Fixed left
│ 0. Background    │ ← Base layer
└──────────────────┘
```

### 🔧 COMPONENTES IDENTIFICADOS
```
┌─ SIDEBAR ─┐
│ • Logo/Nome     │
│ • Navigation    │
│ • Social Links  │
│ • Contact Info  │
└───────────┘

┌─ NAVIGATION ─┐
│ • Perfil       │
│ • Experiências │
│ • Formação     │
│ • Projetos     │
│ • Contato      │
└──────────────┘

┌─ MAIN CONTENT ─┐
│ • Perfil Section    │
│ • Experiências Grid │
│ • Formação Timeline │
│ • Projetos Grid     │
└─────────────────────┘
```

---

## 🔧 IMPLEMENTAÇÃO TÉCNICA

### 📱 **ESTRUTURA DE COMPONENTES**
```
src/
├── components/
│   ├── Layout/
│   │   ├── MainLayout.tsx
│   │   ├── Sidebar.tsx
│   │   └── Navigation.tsx
│   ├── Sections/
│   │   ├── ProfileSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── EducationSection.tsx
│   │   └── ProjectsSection.tsx
│   ├── Animations/
│   │   ├── FrameAnimation.tsx
│   │   ├── CotaAnimation.tsx
│   │   └── ExpansionEffect.tsx
│   └── UI/
│       ├── Cota.tsx
│       ├── ConstructionLine.tsx
│       └── SketchFrame.tsx
```

### 🎬 **SISTEMA DE ANIMAÇÕES**
```typescript
// Tipos de Animação
type AnimationDirection = 
  | 'left-to-right'    // Perfil
  | 'bottom-to-top'    // Experiências
  | 'right-to-left'    // Formação
  | 'top-to-bottom';   // Projetos

// Configuração de Animação
interface AnimationConfig {
  direction: AnimationDirection;
  duration: number;
  easing: string;
  cotaPosition: 'left' | 'right' | 'top' | 'bottom';
}
```

### 🎯 **ESTADOS DE NAVEGAÇÃO**
```typescript
// Estado Global
interface NavigationState {
  activeSection: 'profile' | 'experience' | 'education' | 'projects';
  isAnimating: boolean;
  previousSection: string | null;
}

// Transições
interface SectionTransition {
  from: NavigationState['activeSection'];
  to: NavigationState['activeSection'];
  animation: AnimationConfig;
}
```

---

## 🚀 PRÓXIMOS PASSOS

### **FASE 1: ESTRUTURA BASE**
1. ✅ Criar componentes de layout
2. ✅ Implementar sistema de navegação
3. ✅ Configurar estados de animação

### **FASE 2: ANIMAÇÕES**
1. ✅ Implementar efeitos de expansão
2. ✅ Criar sistema de cotas
3. ✅ Adicionar estilo rustico

### **FASE 3: CONTEÚDO**
1. ✅ Desenvolver seções de conteúdo
2. ✅ Implementar grid de projetos
3. ✅ Adicionar interatividade

### **FASE 4: REFINAMENTO**
1. ✅ Otimizar performance
2. ✅ Testar responsividade
3. ✅ Polir animações

---

*Wireframe criado em: $(date)*
*Status: Ready for Implementation*
*Próximo: Criar protótipo HTML/CSS*
