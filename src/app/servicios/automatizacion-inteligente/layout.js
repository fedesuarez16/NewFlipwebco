import { services } from '@/data/services'

const service = services['automatizacion-inteligente']

export const viewport = { themeColor: service.accent }

export const metadata = {
  title: service.meta.title,
  description: service.meta.description,
  alternates: { canonical: `/servicios/${service.slug}` },
  openGraph: {
    title: service.meta.ogTitle,
    description: service.meta.ogDescription,
    url: `https://www.flipwebco.com/servicios/${service.slug}`,
    siteName: 'Flipwebco',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: service.meta.ogTitle,
    description: service.meta.ogDescription,
  },
}

export default function AutomatizacionInteligenteLayout({ children }) {
  return children
}
