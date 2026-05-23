import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://www.flipwebco.com'),
  title: 'Flipwebco — Consultoría de Software & IA',
  description: 'Resolvemos los problemas más complejos de tu empresa con inteligencia artificial. Consultoría de software, apps, sistemas de gestión, SEO e integraciones IA.',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.flipwebco.com/',
    siteName: 'Flipwebco',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
