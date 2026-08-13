'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const cases = [
  {
    slug: 'futbolink',
    accent: '#22C55E',
    logo: '/images/futbolink-logo.png',
    logoHeight: '38px',
    industry: 'Reclutamiento deportivo · Italia',
    title: 'La plataforma que conecta',
    titleAccent: 'el talento del fútbol global',
    description:
      'Jugadores que construyen su perfil profesional, clubes que publican vacantes y agentes que gestionan representaciones. Una plataforma, tres experiencias distintas, desarrollada de cero.',
    metrics: [
      { value: '+8K', label: 'Usuarios registrados' },
      { value: '3', label: 'Continentes activos' },
      { value: '100%', label: 'Desarrollo a medida' },
    ],
    tags: ['Plataforma SaaS', 'Multi-rol', 'Europa & LATAM'],
  },
  {
    slug: 'drogueria-danna',
    accent: '#0EA5E9',
    logo: '/images/DANNA.png',
    logoHeight: '38px',
    industry: 'Distribución farmacéutica · Argentina',
    title: 'Trazabilidad de punta a punta',
    titleAccent: 'del pedido a la factura',
    description:
      'Reinventamos su logística de envíos y sus estados de facturación de punta a punta: desde que se toma el pedido hasta que llega a la farmacia, con la facturación sincronizada en cada paso.',
    metrics: [
      { value: '+1.200', label: 'Pedidos por mes' },
      { value: '100%', label: 'Trazabilidad' },
      { value: '5', label: 'Estados sincronizados' },
    ],
    tags: ['Logística', 'Facturación', 'Plataforma a medida'],
  },
]

export default function CaseStudiesSection() {
  return (
    <section id="casos" className="py-24 lg:py-32" style={{ background: '#F5EFE6' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#9A8E83' }}>
            Casos de éxito
          </span>
          <h2 className="mt-3 text-4xl lg:text-3xl font-bold text-[#0A0A0A] leading-tight">
            No contamos lo que sabemos hacer.{' '}
            <span className="font-display italic font-normal">Mostramos lo que hicimos.</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: '#6B6055' }}>
            Sistemas que hoy están en producción, sosteniendo la operación diaria de empresas reales.
          </p>
        </motion.div>

        {/* Casos */}
        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              <Link
                href={`/casos/${c.slug}`}
                className="group flex flex-col h-full rounded-2xl border overflow-hidden transition-colors duration-300 hover:border-[#3A3A3A]"
                style={{ background: '#0A0A0A', borderColor: '#1E1E1E' }}
              >
                {/* Cabecera con logo */}
                <div
                  className="flex items-center justify-between gap-4 px-7 lg:px-8 py-6 border-b"
                  style={{ borderColor: '#1A1A1A', background: '#0D0D0D' }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.logo}
                    alt={c.slug}
                    className="object-contain flex-shrink-0"
                    style={{ maxHeight: c.logoHeight, maxWidth: '150px' }}
                  />
                  <span
                    className="text-[10px] font-medium uppercase tracking-widest text-right leading-tight"
                    style={{ color: '#5A5A5A' }}
                  >
                    {c.industry}
                  </span>
                </div>

                {/* Cuerpo */}
                <div className="flex flex-col flex-1 p-7 lg:p-8">
                  <h3 className="text-2xl lg:text-[1.75rem] font-bold text-white leading-snug">
                    {c.title}{' '}
                    <span className="font-display font-normal italic" style={{ color: '#EAE0D5' }}>
                      {c.titleAccent}
                    </span>
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed" style={{ color: '#7A6E64' }}>
                    {c.description}
                  </p>

                  {/* Métricas */}
                  <div
                    className="mt-7 pt-6 grid grid-cols-3 gap-4 border-t"
                    style={{ borderColor: '#1A1A1A' }}
                  >
                    {c.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-xl lg:text-2xl font-bold" style={{ color: c.accent }}>
                          {m.value}
                        </div>
                        <div className="text-[11px] mt-1 leading-tight" style={{ color: '#555' }}>
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {c.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full border"
                        style={{ color: '#7A6E64', borderColor: '#2A2A2A' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <span className="mt-auto pt-8 inline-flex items-center gap-2 text-sm font-semibold text-white">
                    Ver el caso completo
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
