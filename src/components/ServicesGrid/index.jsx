'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { serviceList } from '@/data/services'

/**
 * Servicios destacados: tienen página propia con mockups a medida y no viven
 * en `src/data/services.js`. `mini.kind` define la visualización de la columna
 * derecha: 'funnel' se angosta etapa a etapa, 'list' mantiene el ancho. Un item
 * con `muted: true` es el caso que NO se resuelve solo y va en tono neutro.
 *
 * `accentRgb` es el canal del acento sin alfa, para componer las variantes
 * translúcidas en un solo lugar (ver `alpha`).
 */
const alpha = (rgb, a) => `rgba(${rgb},${a})`

const featuredServices = [
  {
    href: '/servicios/automatizacion-de-ventas',
    accent: '#10B981',
    accentRgb: '16,185,129',
    eyebrow: 'Servicio destacado',
    title: 'Automatización Integral de Ventas',
    description:
      'Primero diseñamos el embudo de ventas que tu empresa no tiene por escrito: etapas, criterios de avance y perfil de cliente ideal. Después construimos los agentes de IA que lo ejecutan solos — captación, calificación, contacto, agendamiento y seguimiento.',
    tags: ['Embudo de ventas', 'Agentes de IA', 'CRM', 'WhatsApp'],
    mini: {
      kind: 'funnel',
      items: [
        { label: 'Captación' },
        { label: 'Calificación' },
        { label: 'Contacto' },
        { label: 'Reunión' },
        { label: 'Propuesta' },
        { label: 'Cierre' },
      ],
    },
  },
  {
    href: '/servicios/atencion-al-cliente',
    accent: '#06B6D4',
    accentRgb: '6,182,212',
    eyebrow: 'Servicio destacado',
    title: 'Automatización de Atención al Cliente',
    description:
      'Primero mapeamos qué te preguntan de verdad tus clientes y cuál es la respuesta correcta a cada cosa. Después construimos los agentes de IA que atienden solos — responden en segundos, consultan tus sistemas, resuelven la gestión y derivan a tu equipo cuando de verdad hace falta.',
    tags: ['Soporte 24/7', 'Agentes de IA', 'WhatsApp', 'Mesa de ayuda'],
    mini: {
      kind: 'list',
      items: [
        { label: '¿Dónde está mi pedido?', value: '12s' },
        { label: '¿Hacen envíos a Córdoba?', value: '8s' },
        { label: 'Necesito mi factura', value: '21s' },
        { label: 'Quiero cambiar el talle', value: '34s' },
        { label: '¿Reprogramo el turno?', value: '16s' },
        { label: 'Llegó roto, quiero reclamar', value: '→ Valeria', muted: true },
      ],
    },
  },
]

export default function ServicesGrid() {
  return (
    <section id="servicios" className="py-24 lg:py-32" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#9A8E83' }}>
            Servicios Enterprise
          </span>
          <h2 className="mt-3 text-4xl lg:text-3xl font-bold text-[#0A0A0A] leading-tight">
            Impulsamos organizaciones a través de la <span className="font-display italic font-normal">inteligencia artificial</span> y el software
          </h2>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: '#6B6055' }}>
            Especializados en las tecnologías que las organizaciones líderes adoptan hoy para escalar su operación.
          </p>
        </div>

        {/* Servicios destacados */}
        <div className="mb-12 space-y-6">
          {featuredServices.map((service) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
            >
              <Link
                href={service.href}
                className="group block rounded-2xl overflow-hidden border transition-colors duration-300"
                style={{ background: '#0A0A0A', borderColor: '#1E1E1E' }}
              >
                <div className="grid lg:grid-cols-[1.35fr_1fr]">
                  {/* Texto */}
                  <div className="p-8 lg:p-11">
                    <span
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border"
                      style={{
                        color: service.accent,
                        borderColor: alpha(service.accentRgb, 0.25),
                        background: alpha(service.accentRgb, 0.06),
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: service.accent }} />
                      {service.eyebrow}
                    </span>

                    <h3 className="mt-6 text-2xl lg:text-3xl font-bold text-white leading-snug">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm lg:text-base leading-relaxed" style={{ color: '#7A6E64' }}>
                      {service.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-2.5 py-1 rounded-full border"
                          style={{ color: '#9A8E83', borderColor: '#2A2A2A' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white">
                      Ver el servicio
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

                  {/* Mini visualización: embudo que se angosta o lista de consultas */}
                  <div
                    className="hidden lg:flex flex-col justify-center gap-2 p-11 border-l"
                    style={{ borderColor: '#1A1A1A', background: '#0D0D0D' }}
                  >
                    {service.mini.items.map((item, i) => {
                      const isFunnel = service.mini.kind === 'funnel'
                      /* `muted` marca el caso que NO se resuelve solo: va en tono neutro. */
                      const isNeutral = Boolean(item.muted)

                      return (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: 12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                          className="rounded-lg px-3 py-2 flex items-center gap-2.5 mx-auto w-full"
                          style={{
                            maxWidth: isFunnel ? `${100 - i * 11}%` : '100%',
                            border: `1px solid ${isNeutral ? 'rgba(154,142,131,0.22)' : alpha(service.accentRgb, 0.22)}`,
                            background: isNeutral
                              ? 'linear-gradient(90deg, rgba(154,142,131,0.10) 0%, rgba(154,142,131,0.02) 100%)'
                              : `linear-gradient(90deg, ${alpha(service.accentRgb, 0.12)} 0%, ${alpha(service.accentRgb, 0.03)} 100%)`,
                          }}
                        >
                          <span
                            className="text-[10px] font-bold flex-shrink-0"
                            style={{ color: isNeutral ? '#9A8E83' : service.accent }}
                          >
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span className="text-xs font-medium text-white truncate">{item.label}</span>
                          {item.value && (
                            <span
                              className="ml-auto text-[10px] font-semibold tabular-nums flex-shrink-0"
                              style={{ color: isNeutral ? '#9A8E83' : service.accent }}
                            >
                              {item.value}
                            </span>
                          )}
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E2D9CC]">
          {serviceList.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <Link
                href={`/servicios/${service.slug}`}
                className="group flex flex-col h-full p-8 lg:p-10 bg-white hover:bg-[#F5EFE6] transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-xs font-bold tracking-widest" style={{ color: '#C4B9AA' }}>
                    {service.number}
                  </span>
                  <svg
                    className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    style={{ color: '#0A0A0A' }}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10M17 7H7m10 0v10" />
                  </svg>
                </div>

                <h3 className="text-xl font-semibold text-[#0A0A0A] mb-3 leading-snug">
                  {service.card.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#6B6055' }}>
                  {service.card.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-full border border-[#D4C9BB] text-[#6B6055] group-hover:border-[#0A0A0A] group-hover:text-[#0A0A0A] transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 p-8 lg:p-10 border border-[#E2D9CC] rounded-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
          style={{ background: '#F5EFE6' }}
        >
          <div>
            <p className="font-semibold text-[#0A0A0A] text-lg">¿No encontrás tu caso de uso?</p>
            <p className="text-sm mt-1" style={{ color: '#6B6055' }}>
              Trabajamos con industrias muy diversas. Contanos tu desafío y lo analizamos sin costo.
            </p>
          </div>
          <a
            href="#contacto"
            className="flex-shrink-0 bg-[#0A0A0A] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#2A2A2A] transition-colors text-sm whitespace-nowrap"
          >
            Agendar diagnóstico →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
