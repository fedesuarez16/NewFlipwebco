/* Next 14 ignora `themeColor` dentro de `metadata` — va en el export `viewport`.
   Blanco porque esta página es la única del sitio con tema claro. */
export const viewport = {
  themeColor: '#FFFFFF',
}

export const metadata = {
  title: 'Automatizá la atención al cliente de tu empresa — Flip',
  description: 'Mapeamos qué preguntan tus clientes y después automatizamos la atención entera con agentes de IA: responden en segundos, consultan tus sistemas, resuelven gestiones y derivan al equipo cuando hace falta. Diagnóstico inicial gratuito.',
  openGraph: {
    title: 'Automatizá la atención al cliente de tu empresa',
    description: 'WhatsApp, Instagram, chat y mail atendidos las 24 horas. El 87% se resuelve sin intervención y el resto llega a tu equipo con el caso armado. Diagnóstico gratuito.',
    url: 'https://www.flipwebco.com/servicios/atencion-al-cliente',
    siteName: 'Flipwebco',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automatizá la atención al cliente de tu empresa',
    description: 'WhatsApp, Instagram, chat y mail atendidos las 24 horas. El 87% se resuelve sin intervención y el resto llega a tu equipo con el caso armado. Diagnóstico gratuito.',
  },
}

export default function AtencionAlClienteLayout({ children }) {
  return children
}
