'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import FooterSection from '@/components/FooterSection'
import ServiceConsole from '@/components/ServiceConsole'
import ServiceIcon from './icons'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.4, 0, 0.2, 1] },
  }),
}

/**
 * Template compartido por todas las páginas de /servicios.
 * Recibe un objeto de src/data/services.js y arma la página entera.
 * La página de automatización de ventas NO usa este template: tiene
 * mockups propios (FunnelBlueprint y SalesAgentChat) y una narrativa
 * de dos fases que le es exclusiva.
 */
export default function ServicePageTemplate({ service }) {
  const {
    accent,
    eyebrow,
    title,
    titleAccent,
    lead,
    stats,
    console: consoleData,
    problem,
    approach,
    capabilities,
    deliverables,
    integrations,
    cta,
  } = service

  return (
    <>
      <Navbar />

      <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>

        {/* ── HERO ── */}
        <section className="relative pt-32 pb-24 px-6 overflow-hidden" style={{ borderBottom: '1px solid #1E1E1E' }}>
          {/* Glow de acento */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: '-10%',
              left: '15%',
              transform: 'translateX(-50%)',
              width: '720px',
              height: '560px',
              background: `radial-gradient(ellipse at center, ${accent}1F 0%, transparent 70%)`,
              filter: 'blur(60px)',
              zIndex: 0,
            }}
          />

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
              <div>
                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
                  <Link
                    href="/#servicios"
                    className="inline-flex items-center gap-2 text-xs font-medium mb-6 transition-colors hover:text-white"
                    style={{ color: '#555' }}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Todos los servicios
                  </Link>
                </motion.div>

                <motion.span
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.06}
                  className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border"
                  style={{ color: accent, borderColor: `${accent}40`, background: `${accent}0F` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: accent }} />
                  {eyebrow}
                </motion.span>

                <motion.h1
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.12}
                  className="mt-6 text-[2rem] sm:text-4xl md:text-5xl font-bold text-white leading-[1.12] sm:leading-tight tracking-tight mb-5"
                >
                  {title}{' '}
                  <span className="font-display font-normal italic" style={{ color: '#EAE0D5' }}>
                    {titleAccent}
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.2}
                  className="text-[15px] sm:text-base lg:text-lg leading-relaxed max-w-xl"
                  style={{ color: '#7A6E64' }}
                >
                  {lead}
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.28}
                  className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3"
                >
                  <a
                    href="#contacto"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#0A0A0A] font-semibold px-5 py-3 rounded-lg hover:bg-[#F5EFE6] transition-colors text-sm"
                  >
                    Agendar diagnóstico gratuito →
                  </a>
                  <a
                    href="#como-funciona"
                    className="inline-flex items-center justify-center gap-2 border border-[#2A2A2A] text-[#AAA] font-semibold px-5 py-3 rounded-lg hover:border-[#555] hover:text-white transition-colors text-sm"
                  >
                    Ver cómo trabajamos
                  </a>
                </motion.div>
              </div>

              {/* Consola animada */}
              <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.3}>
                <ServiceConsole {...consoleData} accent={accent} />
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="mt-14 pt-10 border-t border-[#1E1E1E] grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl lg:text-4xl font-bold text-white">{s.value}</div>
                  <div className="text-xs mt-1 font-medium" style={{ color: '#555' }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── EL PROBLEMA ── */}
        <section className="py-24 px-6" style={{ borderBottom: '1px solid #1E1E1E' }}>
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mb-14"
            >
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#7A6E64' }}>
                El problema
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-white leading-tight">
                {problem.title}{' '}
                <span className="font-display font-normal italic" style={{ color: '#EAE0D5' }}>
                  {problem.titleAccent}
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: '#7A6E64' }}>
                {problem.intro}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {problem.items.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl border p-6"
                  style={{ background: '#0D0D0D', borderColor: '#1E1E1E' }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-4"
                    style={{ background: '#1A1A1A', color: '#EAE0D5' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-semibold text-white mb-3 leading-snug">{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#7A6E64' }}>{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CÓMO TRABAJAMOS ── */}
        <section id="como-funciona" className="py-24 px-6" style={{ borderBottom: '1px solid #1E1E1E' }}>
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mb-14"
            >
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#7A6E64' }}>
                Cómo trabajamos
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-white leading-tight">
                {approach.title}{' '}
                <span className="font-display font-normal italic" style={{ color: '#EAE0D5' }}>
                  {approach.titleAccent}
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: '#7A6E64' }}>
                {approach.intro}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Fase de diseño */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border p-8"
                style={{ background: '#0D0D0D', borderColor: '#1E1E1E' }}
              >
                <span
                  className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full border mb-5"
                  style={{ color: '#9A8E83', borderColor: '#2A2A2A' }}
                >
                  {approach.phase1.badge}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 leading-tight">{approach.phase1.title}</h3>
                <p className="text-sm leading-relaxed mb-7" style={{ color: '#7A6E64' }}>
                  {approach.phase1.desc}
                </p>
                <div className="space-y-4">
                  {approach.phase1.items.map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="#9A8E83" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <div>
                        <div className="text-sm font-semibold text-white mb-1">{item.title}</div>
                        <div className="text-xs leading-relaxed" style={{ color: '#555' }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Fase de construcción */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl border p-8"
                style={{
                  background: `linear-gradient(160deg, ${accent}0D 0%, #0D0D0D 55%)`,
                  borderColor: `${accent}33`,
                }}
              >
                <span
                  className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full border mb-5"
                  style={{ color: accent, borderColor: `${accent}40`, background: `${accent}0F` }}
                >
                  {approach.phase2.badge}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 leading-tight">{approach.phase2.title}</h3>
                <p className="text-sm leading-relaxed mb-7" style={{ color: '#7A6E64' }}>
                  {approach.phase2.desc}
                </p>
                <div className="space-y-3">
                  {approach.phase2.items.map((item) => (
                    <div key={item} className="flex gap-3 items-start">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke={accent} strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-sm" style={{ color: '#AAA' }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-7 pt-6 border-t" style={{ borderColor: `${accent}26` }}>
                  <p className="text-sm font-medium leading-relaxed" style={{ color: '#EAE0D5' }}>
                    {approach.phase2.closing}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── QUÉ CONSTRUIMOS ── */}
        <section className="py-24 px-6" style={{ borderBottom: '1px solid #1E1E1E' }}>
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mb-14"
            >
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#7A6E64' }}>
                Qué construimos
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-white leading-tight">
                {capabilities.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: '#7A6E64' }}>
                {capabilities.intro}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {capabilities.items.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="rounded-2xl border p-6 hover:border-[#2A2A2A] transition-colors"
                  style={{ background: '#0D0D0D', borderColor: '#1A1A1A' }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${accent}14`, color: accent }}
                  >
                    <ServiceIcon name={f.icon} />
                  </div>
                  <h3 className="font-semibold text-white mb-3 text-sm">{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#555' }}>{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── QUÉ RECIBÍS + INTEGRACIONES ── */}
        <section className="py-24 px-6" style={{ borderBottom: '1px solid #1E1E1E' }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#7A6E64' }}>
                  Qué recibís
                </span>
                <h2 className="mt-3 text-3xl font-bold text-white leading-tight mb-7">
                  Entregables concretos, no diapositivas
                </h2>
                <div className="space-y-3">
                  {deliverables.map((d) => (
                    <div key={d} className="flex gap-3 items-start">
                      <svg className="w-4 h-4 flex-shrink-0 mt-1" fill="none" stroke={accent} strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-sm leading-relaxed" style={{ color: '#AAA' }}>{d}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#7A6E64' }}>
                  Stack e integraciones
                </span>
                <h2 className="mt-3 text-3xl font-bold text-white leading-tight mb-7">
                  Se conecta a lo que ya usás
                </h2>
                <p className="text-sm leading-relaxed mb-7" style={{ color: '#7A6E64' }}>
                  No te pedimos migrar de herramientas. Trabajamos sobre tu stack actual, y si hace falta algo que no existe, lo construimos.
                </p>
                <div className="flex flex-wrap gap-3">
                  {integrations.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                      className="text-sm font-medium px-4 py-2 rounded-full border"
                      style={{ color: '#EAE0D5', borderColor: '#2A2A2A', background: '#111' }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section id="contacto" className="py-28 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#7A6E64' }}>
                Empecemos por el diagnóstico
              </span>
              <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                {cta.title}{' '}
                <span className="font-display font-normal italic" style={{ color: '#EAE0D5' }}>
                  {cta.titleAccent}
                </span>
              </h2>
              <p className="mt-5 text-base lg:text-lg leading-relaxed" style={{ color: '#7A6E64' }}>
                {cta.desc}
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://api.whatsapp.com/send?phone=5491133370937"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white text-[#0A0A0A] font-semibold px-8 py-4 rounded-xl hover:bg-[#F5EFE6] transition-colors text-sm"
                >
                  Agendar diagnóstico gratuito →
                </a>
                <Link
                  href="/#servicios"
                  className="border border-[#2A2A2A] text-[#AAA] font-semibold px-8 py-4 rounded-xl hover:border-[#555] hover:text-white transition-colors text-sm"
                >
                  Ver todos los servicios
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <FooterSection />
    </>
  )
}
