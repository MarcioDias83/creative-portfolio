import type { Metadata } from 'next'
import './globals.css'
import { AppProvider } from './providers'
import Header from '@/components/Header'
import ScrollProgress from '@/components/ScrollProgress'
import GrainOverlay from '@/components/GrainOverlay'

export const metadata: Metadata = {
  title: 'Marcio Dias — Full-stack & UI Designer',
  description: 'Portfolio de Marcio Dias — Desenvolvedor Full-stack e Designer de Interfaces do Rio Grande do Sul.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;350;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <AppProvider>
          <ScrollProgress />
          <Header />
          <main className="flex-1">{children}</main>
          <GrainOverlay />
        </AppProvider>
      </body>
    </html>
  )
}
