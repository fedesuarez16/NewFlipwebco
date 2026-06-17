'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import FooterSection from '@/components/FooterSection'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.4, 0, 0.2, 1] },
  }),
}

const stats = [
  { value: '+8K', label: 'Usuarios registrados' },
  { value: '3', label: 'Continentes activos' },
  { value: '100%', label: 'Desarrollo a medida' },
]

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: 'Perfiles de jugadores',
    desc: 'Sistema completo de perfiles con estadísticas, multimedia, historial de clubes y posicionamiento. Los jugadores construyen su CV deportivo digital.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z" />
      </svg>
    ),
    title: 'Motor de búsqueda avanzado',
    desc: 'Clubes y reclutadores filtran jugadores por posición, edad, nacionalidad, nivel y disponibilidad en tiempo real, desde cualquier dispositivo.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    title: 'Ofertas laborales deportivas',
    desc: 'Sistema de publicación y gestión de vacantes para clubes de todo el mundo. Los jugadores postulan directamente desde su perfil.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    title: 'Mensajería entre usuarios',
    desc: 'Canal directo entre jugadores, agentes y representantes de clubes. Sin intermediarios, sin email frío — negociaciones en la misma plataforma.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Panel para agentes',
    desc: 'Dashboard dedicado para representantes: gestión de múltiples jugadores, seguimiento de postulaciones y red de contactos del sector.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-6 3h.008v.008H9.75V15.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    title: 'Cursos y formación profesional',
    desc: 'Módulo de capacitación integrado con recursos para el desarrollo de carrera deportiva, complementando el mercado laboral dentro de la plataforma.',
  },
]

const techStack = ['Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'Tailwind CSS', 'Stripe', 'Cloudinary', 'JWT Auth']

const challenges = [
  {
    title: 'Tres tipos de usuario, una sola plataforma',
    desc: 'Jugadores, clubes y agentes tienen flujos, permisos y dashboards completamente distintos. La arquitectura debía soportar esta complejidad sin sacrificar la UX de ninguno.',
  },
  {
    title: 'Búsqueda en tiempo real y a escala',
    desc: 'Los reclutadores necesitaban filtrar miles de perfiles con múltiples criterios simultáneos, con resultados instantáneos desde cualquier país del mundo.',
  },
  {
    title: 'Confianza y verificación',
    desc: 'El fútbol profesional exige credenciales verificables. Diseñamos un sistema de validación de perfiles y documentación deportiva para garantizar la autenticidad.',
  },
]

export default function FutbolinkCasePage() {
  return (
    <>
      <Navbar />

      <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>

        {/* ── HERO ── */}
        <section
          className="relative pt-32 pb-24 px-6 overflow-hidden"
          style={{ borderBottom: '1px solid #1E1E1E' }}
        >
          {/* Ambient glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: '-10%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '700px',
              height: '500px',
              background: 'radial-gradient(ellipse at center, rgba(34,197,94,0.07) 0%, rgba(16,185,129,0.04) 40%, transparent 70%)',
              filter: 'blur(60px)',
              zIndex: 0,
            }}
          />

          <div className="relative z-10 max-w-5xl mx-auto">
            {/* Breadcrumb */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="flex items-center gap-2 text-xs mb-10"
              style={{ color: '#555' }}
            >
              <Link href="/" className="hover:text-white transition-colors">Flipwebco</Link>
              <span>/</span>
              <span style={{ color: '#888' }}>Casos de éxito</span>
              <span>/</span>
              <span style={{ color: '#EAE0D5' }}>Futbolink</span>
            </motion.div>

            <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
              {/* Text */}
              <div className="flex-1">
                <motion.span
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.05}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border mb-6"
                  style={{ color: '#22c55e', borderColor: 'rgba(34,197,94,0.25)', background: 'rgba(34,197,94,0.06)' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                  Plataforma activa · Caso de éxito
                </motion.span>

                <motion.h1
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.12}
                  className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-5"
                >
                  Construimos la plataforma que{' '}
                  <span className="font-display font-normal italic" style={{ color: '#EAE0D5' }}>
                    conecta el talento
                  </span>{' '}
                  del fútbol global.
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.2}
                  className="text-base lg:text-lg leading-relaxed max-w-xl"
                  style={{ color: '#7A6E64' }}
                >
                  Futbolink necesitaba una plataforma que conecte miles de jugadores con clubes y reclutadores de todo el mundo. Flip desarrolló la solución completa: arquitectura, diseño y código.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.28}
                  className="mt-8 flex flex-wrap gap-3"
                >
                  <a
                    href="https://www.futbolink.net"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-[#0A0A0A] font-semibold px-5 py-2.5 rounded-lg hover:bg-[#F5EFE6] transition-colors text-sm"
                  >
                    Ver plataforma
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-2 border border-[#2A2A2A] text-[#AAA] font-semibold px-5 py-2.5 rounded-lg hover:border-[#555] hover:text-white transition-colors text-sm"
                  >
                    Quiero algo similar
                  </a>
                </motion.div>
              </div>

              {/* Logo card */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.25}
                className="flex-shrink-0 flex items-center justify-center rounded-2xl border p-10 lg:p-14"
                style={{
                  background: '#111111',
                  borderColor: '#1E1E1E',
                  width: '100%',
                  maxWidth: '340px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/futbolink-logo.png"
                  alt="Futbolink"
                  className="w-full object-contain"
                  style={{ maxHeight: '120px', filter: 'brightness(1)' }}
                />
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.35}
              className="mt-14 pt-10 border-t border-[#1E1E1E] grid grid-cols-3 gap-6"
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

        {/* ── SOBRE FUTBOLINK ── */}
        <section className="py-24 px-6" style={{ borderBottom: '1px solid #1E1E1E' }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#7A6E64' }}>
                  El cliente
                </span>
                <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-white leading-tight">
                  La agencia de fútbol con alcance global
                </h2>
                <p className="mt-5 text-base leading-relaxed" style={{ color: '#7A6E64' }}>
                  Futbolink es una agencia de representación y networking deportivo con sede en Lecce, Italia. Su misión es clara: conectar jugadores con oportunidades reales en clubes de todo el mundo.
                </p>
                <p className="mt-4 text-base leading-relaxed" style={{ color: '#7A6E64' }}>
                  El modelo funciona en tres ejes: jugadores que construyen su perfil profesional, clubes que publican vacantes y buscan talento, y agentes que gestionan representaciones. Una plataforma, tres experiencias distintas.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {['Italia · Europa', 'Latinoamérica', 'Reclutamiento deportivo', 'Plataforma SaaS'].map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full border"
                      style={{ color: '#7A6E64', borderColor: '#2A2A2A' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-2xl border overflow-hidden"
                style={{ background: '#0D0D0D', borderColor: '#1E1E1E' }}
              >
                {/* Browser chrome */}
                <div
                  className="flex items-center gap-1.5 px-4 py-3 border-b"
                  style={{ background: '#111', borderColor: '#1E1E1E' }}
                >
                  <div className="w-3 h-3 rounded-full bg-red-500 opacity-70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-70" />
                  <div className="w-3 h-3 rounded-full bg-green-500 opacity-70" />
                  <div
                    className="ml-3 flex-1 rounded-md px-3 py-1 text-xs flex items-center gap-2"
                    style={{ background: '#1A1A1A', color: '#555' }}
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                    futbolink.net
                  </div>
                </div>

                {/* Mock UI */}
                <div className="p-5 space-y-3">
                  {/* Search bar */}
                  <div
                    className="flex items-center gap-3 rounded-xl px-4 py-3 border"
                    style={{ background: '#161616', borderColor: '#2A2A2A' }}
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="#555" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z" />
                    </svg>
                    <span className="text-xs" style={{ color: '#444' }}>Buscar jugadores por posición, país, edad...</span>
                  </div>

                  {/* Player cards */}
                  {[
                    { name: 'Carlos M.', pos: 'Delantero · Argentina', rating: '★★★★★' },
                    { name: 'Lucas P.', pos: 'Mediocampista · España', rating: '★★★★☆' },
                    { name: 'Andrés V.', pos: 'Defensor · Colombia', rating: '★★★★★' },
                  ].map((p, i) => (
                    <div
                      key={p.name}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 border"
                      style={{
                        background: i === 0 ? 'rgba(34,197,94,0.05)' : '#111111',
                        borderColor: i === 0 ? 'rgba(34,197,94,0.2)' : '#1E1E1E',
                      }}
                    >
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white"
                        style={{ background: '#2A2A2A' }}
                      >
                        {p.name[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold text-white">{p.name}</div>
                        <div className="text-[10px]" style={{ color: '#555' }}>{p.pos}</div>
                      </div>
                      <div className="text-[10px]" style={{ color: '#22c55e' }}>{p.rating}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── EL DESAFÍO ── */}
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
                El desafío
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-white leading-tight">
                Un mercado fragmentado que necesitaba estructura
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: '#7A6E64' }}>
                El reclutamiento en el fútbol profesional seguía siendo opaco, manual y geográficamente limitado. Futbolink llegó con una visión clara: digitalizarlo y hacerlo global.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {challenges.map((c, i) => (
                <motion.div
                  key={c.title}
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
                  <h3 className="font-semibold text-white mb-3 leading-snug">{c.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#7A6E64' }}>{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LO QUE CONSTRUIMOS ── */}
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
                La solución
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-white leading-tight">
                Una plataforma completa,{' '}
                <span className="font-display font-normal italic" style={{ color: '#EAE0D5' }}>
                  de punta a punta
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: '#7A6E64' }}>
                Flip diseñó y desarrolló Futbolink desde cero: arquitectura de base de datos, APIs, interfaces de usuario y la lógica de negocio que sostiene cada interacción entre los tres tipos de usuario.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="rounded-2xl border p-6 group hover:border-[#2A2A2A] transition-colors"
                  style={{ background: '#0D0D0D', borderColor: '#1A1A1A' }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: '#141414', color: '#EAE0D5' }}
                  >
                    {f.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-3 text-sm">{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#555' }}>{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STACK TECNOLÓGICO ── */}
        <section className="py-24 px-6" style={{ borderBottom: '1px solid #1E1E1E' }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#7A6E64' }}>
                  Tecnología
                </span>
                <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Stack moderno para un producto que escala
                </h2>
                <p className="mt-5 text-base leading-relaxed" style={{ color: '#7A6E64' }}>
                  Cada decisión tecnológica estuvo orientada a la escalabilidad, el rendimiento y la experiencia del usuario final. Sin over-engineering, sin tecnologías de moda sin sustento.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-wrap gap-3"
              >
                {techStack.map((tech, i) => (
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── RESULTADO ── */}
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
                Resultados
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-white leading-tight">
                Una plataforma viva que sigue creciendo
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-14">
              {[
                {
                  metric: '+8,000',
                  label: 'usuarios registrados',
                  sub: 'con perfiles activos buscando oportunidades',
                },
                {
                  metric: 'Global',
                  label: 'alcance geográfico',
                  sub: 'Europa, Latinoamérica y el Caribe en un solo hub',
                },
                {
                  metric: '1',
                  label: 'plataforma, 3 usuarios',
                  sub: 'jugadores, clubes y agentes con experiencias diferenciadas',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.metric}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl border p-7"
                  style={{ background: '#0D0D0D', borderColor: '#1E1E1E' }}
                >
                  <div className="text-4xl font-bold text-white mb-2">{item.metric}</div>
                  <div className="text-sm font-semibold mb-1" style={{ color: '#EAE0D5' }}>{item.label}</div>
                  <div className="text-xs leading-relaxed" style={{ color: '#555' }}>{item.sub}</div>
                </motion.div>
              ))}
            </div>

            {/* Testimonial-style quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border p-8 lg:p-10 relative"
              style={{ background: '#0D0D0D', borderColor: '#1E1E1E' }}
            >
              <div
                className="text-6xl font-serif absolute top-6 left-8 leading-none"
                style={{ color: '#1E1E1E' }}
              >
                "
              </div>
              <p className="text-lg lg:text-xl leading-relaxed font-medium relative z-10 pt-4" style={{ color: '#EAE0D5' }}>
                Estamos muy satisfechos con el trabajo realizado. Su equipo entendió nuestra visión y nos ayudó a desarrollar funcionalidades clave para FutboLink de manera eficiente y profesional. Sin duda, una experiencia muy recomendable.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: '#1A1A1A' }}
                >
                  I
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Ismael Ullman</div>
                  <div className="text-xs" style={{ color: '#555' }}>Founder de FutboLink</div>
                </div>
              </div>
            </motion.blockquote>
          </div>
        </section>

        {/* ── CTA ── */}
        <section id="contacto" className="py-28 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#7A6E64' }}>
                ¿Tenés un proyecto similar?
              </span>
              <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                Construimos lo que{' '}
                <span className="font-display font-normal italic" style={{ color: '#EAE0D5' }}>
                  necesitás.
                </span>
              </h2>
              <p className="mt-5 text-base lg:text-lg leading-relaxed" style={{ color: '#7A6E64' }}>
                Si tenés una idea, un problema de negocio o una plataforma que escalar — hablemos. El diagnóstico inicial es gratis.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://api.whatsapp.com/send?phone=5491133370937"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white text-[#0A0A0A] font-semibold px-8 py-4 rounded-xl hover:bg-[#F5EFE6] transition-colors text-sm"
                >
                  Hablar con el equipo →
                </a>
                <Link
                  href="/"
                  className="border border-[#2A2A2A] text-[#AAA] font-semibold px-8 py-4 rounded-xl hover:border-[#555] hover:text-white transition-colors text-sm"
                >
                  Ver más casos
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
