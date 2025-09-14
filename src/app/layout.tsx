import type { Metadata } from 'next'
import { Inter, Kalam } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const kalam = Kalam({ 
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-handwriting'
})

export const metadata: Metadata = {
  title: 'Leonardo Franco Arakaki - Portfólio',
  description: 'Portfólio profissional de Leonardo Franco Arakaki, estudante de Arquitetura e Urbanismo na FAUUSP.',
  keywords: ['arquitetura', 'design', 'urbanismo', 'portfólio', 'FAUUSP', 'Leonardo Arakaki'],
  authors: [{ name: 'Leonardo Franco Arakaki' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} ${kalam.variable}`}>
        {/* Fundo arquitetônico fixo */}
        <div className="fixed inset-0 -z-10 architectural-background"></div>
        {children}
      </body>
    </html>
  )
}
