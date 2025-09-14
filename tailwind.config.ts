import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Framer-inspired dark theme
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        // Electric blue and purple accents
        electric: {
          blue: '#00d4ff',
          purple: '#7c3aed',
          cyan: '#06b6d4',
          indigo: '#6366f1',
        },
        // Gradient colors
        gradient: {
          start: '#00d4ff',
          end: '#7c3aed',
        },
        // Architectural colors
        'architectural-gray': '#D3D3D3',
        'portfolio-blue': '#1e3a8a',
        'frame-dark-blue': '#0f1419',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        handwriting: ['var(--font-handwriting)', 'Noto Sans JP', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-electric': 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 212, 255, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
