import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Casa Church — Servir é a nossa essência. Jesus é a nossa paixão. | Porto Alegre',
  description: 'Igreja cristã contemporânea em Porto Alegre. Ambiente familiar, comunidade acolhedora. Cultos às quartas, sextas e sábados. Venha para a CASA.',
  keywords: 'igreja, igreja evangélica, Porto Alegre, Restinga, culto, cristã, fé, Casa Church, adoração, família',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  )
}
