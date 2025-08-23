import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Leonardo Franco Arakaki - Portfólio',
  description: 'Portfólio profissional de Leonardo Franco Arakaki, estudante de Arquitetura e Urbanismo na FAUUSP. Apresentando projetos de design, arquitetura e experiência em idiomas.',
  keywords: ['arquitetura', 'design', 'urbanismo', 'portfólio', 'FAUUSP', 'Leonardo Arakaki'],
  authors: [{ name: 'Leonardo Franco Arakaki' }],
  openGraph: {
    title: 'Leonardo Franco Arakaki - Portfólio',
    description: 'Portfólio profissional de Leonardo Franco Arakaki, estudante de Arquitetura e Urbanismo na FAUUSP.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
