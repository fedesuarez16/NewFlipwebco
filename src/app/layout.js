import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['400', '500', '700'],
  variable: '--font-display',
})

export const metadata = {
  metadataBase: new URL('https://www.flipwebco.com'),
  title: 'Flipwebco — Consultoría de Software & IA',
  description: 'Resolvemos los problemas más complejos de tu empresa con inteligencia artificial. Consultoría de software, apps, sistemas de gestión, SEO e integraciones IA.',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.flipwebco.com/',
    siteName: 'Flipwebco',
    title: 'Flipwebco — Consultoría de Software & IA',
    description: 'Resolvemos los problemas más complejos de tu empresa con inteligencia artificial. Consultoría de software, apps, sistemas de gestión, SEO e integraciones IA.',
    images: [
      {
        url: '/og-image.jpg',
        width: 2236,
        height: 958,
        alt: 'Flipwebco — Tu socio en transformación tecnológica de principio a fin.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flipwebco — Consultoría de Software & IA',
    description: 'Resolvemos los problemas más complejos de tu empresa con inteligencia artificial.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${playfair.variable}`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
