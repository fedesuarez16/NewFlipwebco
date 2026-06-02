'use client'
import { motion } from 'framer-motion'

const images = [
  {
    // Person using AI chat/agent interface on laptop
    url: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=960&h=640&fit=crop&q=85',
    label: 'Agentes de IA empresarial',
  },
  {
    // Code / LLM prompt on dark screen
    url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=960&h=640&fit=crop&q=85',
    label: 'IA generativa para el negocio',
  },
  {
    // BI dashboard with charts on monitor
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=960&h=640&fit=crop&q=85',
    label: 'Plataformas de datos & analytics',
  },
  {
    // Developer building custom software
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=960&h=640&fit=crop&q=85',
    label: 'Software empresarial a medida',
  },
  {
    // Automated robotic process / industrial automation
    url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=960&h=640&fit=crop&q=85',
    label: 'Automatización inteligente RPA + IA',
  },
  {
    // Server room / cloud data center
    url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=960&h=640&fit=crop&q=85',
    label: 'Arquitectura cloud & DevSecOps',
  },
]

const allImages = [...images, ...images]

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col pt-20 overflow-hidden"
      style={{ height: '100vh', background: '#0A0A0A' }}
    >
      {/* ── Beige ambient glow ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '640px',
          height: '480px',
          background: 'radial-gradient(ellipse at center, rgba(230,210,180,0.13) 0%, rgba(210,185,145,0.06) 45%, transparent 70%)',
          filter: 'blur(40px)',
          zIndex: 0,
        }}
      />

      {/* ── Text block ── */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-10 lg:py-12 flex-shrink-0">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-xs font-semibold uppercase tracking-widest mb-5"
          style={{ color: '#555' }}
        >
          Consultoría Enterprise &nbsp;·&nbsp; IA &amp; Software
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-4xl md:text-5xl lg:text-5xl font-semibold text-white leading-[1.1] tracking-tight max-w-3xl"
        >
         <span className="font-display font-normal">Re-inventamos</span>  procesos y operaciones con Inteligencia Artificial.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mt-5 text-base lg:text-lg leading-relaxed max-w-xl"
          style={{ color: '#777' }}
        >
          Construimos agentes de IA, plataformas de datos y software enterprise
          para que tu equipo haga más, decida mejor y crezca sin fricción.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="mt-7 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href="#contacto"
            className="bg-white text-[#0A0A0A] font-semibold px-7 py-3.5 rounded-xl hover:bg-[#F5EFE6] transition-colors text-sm"
          >
            Agendar diagnóstico →
          </a>
          <a
            href="#servicios"
            className="border border-[#2A2A2A] text-[#AAA] font-semibold px-7 py-3.5 rounded-xl hover:border-[#555] hover:text-white transition-colors text-sm"
          >
            Ver servicios
          </a>
        </motion.div>
      </div>

      {/* ── Image carousel — fills remaining height, images clipped ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="relative flex-1 overflow-hidden min-h-0"
      >
        {/* Edge fades */}
        <div
          className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #0A0A0A, transparent)' }}
        />
        <div
          className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #0A0A0A, transparent)' }}
        />

        <div className="flex carousel-track gap-3 px-3 h-full">
          {allImages.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 relative overflow-hidden rounded-2xl"
              style={{ width: '36vw', minWidth: '280px', height: '100%' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.url}
                alt={img.label}
                className="w-full h-full object-cover"
                loading={i < 4 ? 'eager' : 'lazy'}
              />
              <div
                className="absolute bottom-0 left-0 right-0 px-4 py-3 rounded-b-2xl"
                style={{
                  background: 'linear-gradient(to top, rgba(10,10,10,0.5) 0%, transparent 100%)',
                }}
              >
                <span className="text-white text-xs font-medium">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
