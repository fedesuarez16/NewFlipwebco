'use client'
import { motion } from 'framer-motion'
import LiveOpsPanel from '@/components/LiveOpsPanel'

const capabilities = ['Agentes de IA', 'Plataformas de datos', 'Software a medida', 'Cloud & DevSecOps']

export default function HeroSection() {
  return (
    <section
      className="relative flex items-center overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 px-5 sm:px-6 min-h-[100svh]"
      style={{ background: '#0A0A0A' }}
    >
      {/* ── Textura de grilla ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(234,224,213,0.030) 1px, transparent 1px), linear-gradient(90deg, rgba(234,224,213,0.030) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, #000 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, #000 0%, transparent 100%)',
          zIndex: 0,
        }}
      />

      {/* ── Glow beige ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-5%',
          left: '20%',
          transform: 'translateX(-50%)',
          width: '760px',
          height: '620px',
          background:
            'radial-gradient(ellipse at center, rgba(230,210,180,0.14) 0%, rgba(210,185,145,0.06) 45%, transparent 70%)',
          filter: 'blur(50px)',
          zIndex: 0,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 sm:gap-14 lg:gap-16 items-center">

          {/* ── Columna de texto ── */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border"
              style={{ color: '#9A8E83', borderColor: '#2A2A2A', background: 'rgba(234,224,213,0.03)' }}
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full inline-block"
                style={{ background: '#EAE0D5' }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
              Consultoría Enterprise · IA &amp; Software
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-6 sm:mt-7 text-[2rem] sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-white leading-[1.12] sm:leading-[1.1] tracking-tight"
            >
              <span className="font-display font-normal">Re-inventamos</span> procesos y operaciones con Inteligencia Artificial.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 sm:mt-6 text-[15px] sm:text-base lg:text-lg leading-relaxed max-w-lg"
              style={{ color: '#7A6E64' }}
            >
              No entregamos pruebas de concepto. Diseñamos el proceso, construimos el
              sistema que lo ejecuta y lo dejamos corriendo en producción.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#contacto"
                className="bg-white text-[#0A0A0A] font-semibold px-7 py-3.5 rounded-xl hover:bg-[#F5EFE6] transition-colors text-sm text-center"
              >
                Agendar diagnóstico →
              </a>
              <a
                href="#servicios"
                className="border border-[#2A2A2A] text-[#AAA] font-semibold px-7 py-3.5 rounded-xl hover:border-[#555] hover:text-white transition-colors text-sm text-center"
              >
                Ver servicios
              </a>
            </motion.div>

            {/* Capacidades */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.36 }}
              className="mt-8 pt-6 sm:mt-10 sm:pt-7 border-t flex flex-wrap items-center gap-x-3 gap-y-2"
              style={{ borderColor: '#1A1A1A' }}
            >
              {capabilities.map((cap, i) => (
                <span key={cap} className="flex items-center gap-3">
                  <span className="text-xs font-medium" style={{ color: '#5A5A5A' }}>
                    {cap}
                  </span>
                  {i < capabilities.length - 1 && (
                    <span className="w-1 h-1 rounded-full inline-block" style={{ background: '#2A2A2A' }} />
                  )}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Panel de operación en vivo ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <LiveOpsPanel />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
