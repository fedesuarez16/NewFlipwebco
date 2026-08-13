'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const featured = {
  href: '/servicios/automatizacion-de-ventas',
  eyebrow: 'Servicio destacado',
  title: 'Automatización Integral de Ventas',
  description:
    'Primero diseñamos el embudo de ventas que tu empresa no tiene por escrito: etapas, criterios de avance y perfil de cliente ideal. Después construimos los agentes de IA que lo ejecutan solos — captación, calificación, contacto, agendamiento y seguimiento.',
  tags: ['Embudo de ventas', 'Agentes de IA', 'CRM', 'WhatsApp'],
  stages: ['Captación', 'Calificación', 'Contacto', 'Reunión', 'Propuesta', 'Cierre'],
}

const services = [
  {
    number: '01',
    title: 'Agentes de IA Empresarial',
    description: 'Desarrollamos agentes autónomos con LLMs (GPT-4, Claude) que operan sobre tus datos y sistemas internos: ventas, operaciones, soporte. Automatización real de procesos complejos.',
    tags: ['LLM', 'Copilots', 'Automatización'],
  },
  {
    number: '02',
    title: 'IA Generativa para el Negocio',
    description: 'Integramos modelos de IA generativa en tus flujos de trabajo: procesamiento de documentos, generación de reportes, asistentes internos y análisis de contratos con NLP avanzado.',
    tags: ['GPT-4', 'RAG', 'NLP'],
  },
  {
    number: '03',
    title: 'Plataformas de Datos & Analytics',
    description: 'Construimos data warehouses, dashboards BI en tiempo real y modelos predictivos que convierten tus datos en decisiones estratégicas. MLOps incluido para despliegue y monitoreo.',
    tags: ['BI', 'Predictivo', 'MLOps'],
  },
  {
    number: '04',
    title: 'Software Empresarial a Medida',
    description: 'ERP y CRM personalizados, modernización de sistemas legacy y plataformas enterprise escalables. Arquitectura robusta diseñada para crecer con tu operación.',
    tags: ['ERP', 'CRM', 'APIs'],
  },
  {
    number: '05',
    title: 'Automatización Inteligente (RPA + IA)',
    description: 'Combinamos RPA con inteligencia artificial para automatizar procesos de alta complejidad: extracción de datos, aprobaciones, validaciones y flujos multi-sistema sin intervención humana.',
    tags: ['RPA', 'OCR', 'Workflows'],
  },
  {
    number: '06',
    title: 'Arquitectura Cloud & DevSecOps',
    description: 'Migraciones cloud, diseño de microservicios, pipelines CI/CD y seguridad integrada desde el día uno. Infraestructura escalable en AWS, Azure o GCP lista para producción.',
    tags: ['Cloud', 'Microservicios', 'CI/CD'],
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

        {/* Servicio destacado */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          className="mb-12"
        >
          <Link
            href={featured.href}
            className="group block rounded-2xl overflow-hidden border transition-colors duration-300"
            style={{ background: '#0A0A0A', borderColor: '#1E1E1E' }}
          >
            <div className="grid lg:grid-cols-[1.35fr_1fr]">
              {/* Texto */}
              <div className="p-8 lg:p-11">
                <span
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border"
                  style={{ color: '#10B981', borderColor: 'rgba(16,185,129,0.25)', background: 'rgba(16,185,129,0.06)' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#10B981' }} />
                  {featured.eyebrow}
                </span>

                <h3 className="mt-6 text-2xl lg:text-3xl font-bold text-white leading-snug">
                  {featured.title}
                </h3>
                <p className="mt-4 text-sm lg:text-base leading-relaxed" style={{ color: '#7A6E64' }}>
                  {featured.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
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

              {/* Mini embudo */}
              <div
                className="hidden lg:flex flex-col justify-center gap-2 p-11 border-l"
                style={{ borderColor: '#1A1A1A', background: '#0D0D0D' }}
              >
                {featured.stages.map((stage, i) => (
                  <motion.div
                    key={stage}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                    className="rounded-lg px-3 py-2 flex items-center gap-2.5 mx-auto w-full"
                    style={{
                      maxWidth: `${100 - i * 11}%`,
                      border: '1px solid rgba(16,185,129,0.22)',
                      background: 'linear-gradient(90deg, rgba(16,185,129,0.12) 0%, rgba(16,185,129,0.03) 100%)',
                    }}
                  >
                    <span className="text-[10px] font-bold" style={{ color: '#10B981' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-xs font-medium text-white truncate">{stage}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E2D9CC]">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group p-8 lg:p-10 bg-white hover:bg-[#F5EFE6] transition-colors duration-300 cursor-default"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs font-bold tracking-widest" style={{ color: '#C4B9AA' }}>
                  {service.number}
                </span>
                <svg
                  className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-1 group-hover:translate-x-0 transition-transform"
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
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#6B6055' }}>
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-full border border-[#D4C9BB] text-[#6B6055] group-hover:border-[#0A0A0A] group-hover:text-[#0A0A0A] transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
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
