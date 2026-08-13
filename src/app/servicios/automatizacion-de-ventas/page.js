'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import FooterSection from '@/components/FooterSection'
import FunnelBlueprint from '@/components/FunnelBlueprint'
import SalesAgentChat from '@/components/SalesAgentChat'

const ACCENT = '#10B981'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.4, 0, 0.2, 1] },
  }),
}

const stats = [
  { value: '2 fases', label: 'Diseño del embudo y automatización' },
  { value: '4-6 sem', label: 'Del diagnóstico al sistema funcionando' },
  { value: '24/7', label: 'El embudo no duerme ni se olvida' },
]

const problems = [
  {
    title: 'El proceso vive en la cabeza de los vendedores',
    desc: 'Cada uno vende a su manera. No hay criterios comunes, no hay etapas definidas y nadie puede decir con certeza por qué se ganó o se perdió una venta.',
  },
  {
    title: 'Los leads se enfrían esperando respuesta',
    desc: 'Un lead que responde en 5 minutos convierte muchísimo más que uno contactado al día siguiente. Cuando el seguimiento es manual, siempre llega tarde.',
  },
  {
    title: 'El seguimiento depende de que alguien se acuerde',
    desc: 'La mayoría de las oportunidades no se pierden por precio: se pierden por abandono. Nadie volvió a escribir, y la venta se apagó sola.',
  },
]

const phase1 = [
  {
    title: 'Auditoría del proceso real',
    desc: 'Mapeamos cómo venden hoy de verdad, no cómo dicen que venden. Entrevistas con el equipo comercial y análisis de los datos que ya existen.',
  },
  {
    title: 'Definición de etapas y criterios',
    desc: 'Cada etapa del embudo con una regla objetiva de avance. Se acabó el "creo que está caliente": un lead avanza cuando cumple el criterio.',
  },
  {
    title: 'Perfil de cliente ideal (ICP)',
    desc: 'Definimos a quién vale la pena venderle y a quién no. La mayor ganancia de eficiencia no es cerrar más rápido: es descartar antes.',
  },
  {
    title: 'Métricas y puntos de fuga',
    desc: 'Qué se mide en cada etapa y dónde se está perdiendo plata hoy. Este mapa es el que después define exactamente qué automatizar.',
  },
]

const phase2 = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: 'Captación y enriquecimiento',
    desc: 'Los leads entran solos desde ads, formularios y outbound. La IA los completa con datos de la empresa, el rubro y el tamaño antes de que nadie los mire.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3.75 3.75L3 13.5m6-1.5h12M9 6h12M9 18h12M3.75 18h.008v.008H3.75V18z" />
      </svg>
    ),
    title: 'Calificación automática',
    desc: 'Cada lead se puntúa contra el ICP definido en la Fase 1. Los que no califican se descartan sin consumir una hora del equipo comercial.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm3.75 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm3.75 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    title: 'Contacto conversacional',
    desc: 'Un agente que escribe según el contexto real del lead, no plantillas con el nombre reemplazado. Conversa por WhatsApp y email, y responde en segundos.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    title: 'Agendamiento autónomo',
    desc: 'Cuando el lead califica, el agente ofrece horarios reales del vendedor y agenda la reunión. Sin ida y vuelta, sin coordinación manual.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Seguimiento que nunca falla',
    desc: 'Acá se pierde la mayor parte de las ventas. El sistema retoma cada oportunidad en el momento correcto, todas las veces, sin depender de la memoria de nadie.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'Panel del embudo en vivo',
    desc: 'Cuántos entran, dónde se caen, cuánto tarda cada etapa y qué se cerró. La conversión deja de ser una intuición y pasa a ser un número.',
  },
]

const integrations = ['WhatsApp Business API', 'HubSpot', 'Pipedrive', 'Salesforce', 'Google Calendar', 'Meta Ads', 'Gmail / Outlook', 'Webhooks & APIs']

const deliverables = [
  'Documento del embudo con etapas, criterios y métricas',
  'Perfil de cliente ideal y reglas de descarte',
  'Agentes de IA desplegados y conectados a tus sistemas',
  'Integración con tu CRM y canales actuales',
  'Panel de control con la conversión en tiempo real',
  'Capacitación al equipo comercial y soporte post-lanzamiento',
]

export default function AutomatizacionDeVentasPage() {
  return (
    <>
      <Navbar />

      <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>

        {/* ── HERO ── */}
        <section className="relative pt-32 pb-24 px-6 overflow-hidden" style={{ borderBottom: '1px solid #1E1E1E' }}>
          <div
            className="absolute pointer-events-none"
            style={{
              top: '-10%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '760px',
              height: '520px',
              background: 'radial-gradient(ellipse at center, rgba(16,185,129,0.08) 0%, rgba(5,150,105,0.04) 40%, transparent 70%)',
              filter: 'blur(60px)',
              zIndex: 0,
            }}
          />

          <div className="relative z-10 max-w-6xl mx-auto">
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
              <span style={{ color: '#888' }}>Servicios</span>
              <span>/</span>
              <span style={{ color: '#EAE0D5' }}>Automatización de ventas</span>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Texto */}
              <div>
                <motion.span
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.05}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border mb-6"
                  style={{ color: ACCENT, borderColor: 'rgba(16,185,129,0.25)', background: 'rgba(16,185,129,0.06)' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: ACCENT }} />
                  Servicio destacado
                </motion.span>

                <motion.h1
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.12}
                  className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-5"
                >
                  Diseñamos tu embudo de ventas.{' '}
                  <span className="font-display font-normal italic" style={{ color: '#EAE0D5' }}>
                    Después lo automatizamos entero.
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.2}
                  className="text-base lg:text-lg leading-relaxed max-w-xl"
                  style={{ color: '#7A6E64' }}
                >
                  No vendemos automatizaciones sueltas. Primero diseñamos el sistema de ventas que tu empresa no tiene por escrito, y recién después construimos los agentes de IA que lo ejecutan solos: captación, calificación, contacto, agenda y seguimiento.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.28}
                  className="mt-8 flex flex-wrap gap-3"
                >
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-2 bg-white text-[#0A0A0A] font-semibold px-5 py-2.5 rounded-lg hover:bg-[#F5EFE6] transition-colors text-sm"
                  >
                    Agendar diagnóstico gratuito →
                  </a>
                  <a
                    href="#como-funciona"
                    className="inline-flex items-center gap-2 border border-[#2A2A2A] text-[#AAA] font-semibold px-5 py-2.5 rounded-lg hover:border-[#555] hover:text-white transition-colors text-sm"
                  >
                    Ver cómo funciona
                  </a>
                </motion.div>
              </div>

              {/* Mockup animado del embudo */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.3}
              >
                <FunnelBlueprint />
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
                Automatizar un proceso que no existe{' '}
                <span className="font-display font-normal italic" style={{ color: '#EAE0D5' }}>
                  te da caos más rápido
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: '#7A6E64' }}>
                Casi todas las empresas que fracasan automatizando ventas cometen el mismo error: compran herramientas antes de definir el proceso. Instalan un CRM, arman secuencias de emails, le meten un bot al WhatsApp — y nada cambia, porque abajo no había un sistema.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {problems.map((p, i) => (
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

        {/* ── CÓMO FUNCIONA: LAS DOS FASES ── */}
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
                Cómo funciona
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-white leading-tight">
                Primero el sistema.{' '}
                <span className="font-display font-normal italic" style={{ color: '#EAE0D5' }}>
                  Después la máquina.
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: '#7A6E64' }}>
                El servicio tiene dos fases y el orden no es negociable. La primera define qué construir; la segunda lo construye. Sin la primera, la segunda es tirar plata con estilo.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Fase 1 */}
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
                  Fase 1 · Consultoría
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 leading-tight">Diseño del embudo</h3>
                <p className="text-sm leading-relaxed mb-7" style={{ color: '#7A6E64' }}>
                  Entramos como arquitectos del proceso comercial, no como developers. Salimos con un embudo escrito: etapas, criterios objetivos de avance, perfil de cliente ideal y métricas por etapa. No se escribe una línea de código antes de esto.
                </p>
                <div className="space-y-4">
                  {phase1.map((item) => (
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

              {/* Fase 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl border p-8"
                style={{ background: 'linear-gradient(160deg, rgba(16,185,129,0.05) 0%, #0D0D0D 55%)', borderColor: 'rgba(16,185,129,0.20)' }}
              >
                <span
                  className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full border mb-5"
                  style={{ color: ACCENT, borderColor: 'rgba(16,185,129,0.25)', background: 'rgba(16,185,129,0.06)' }}
                >
                  Fase 2 · Desarrollo
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 leading-tight">Automatización con IA</h3>
                <p className="text-sm leading-relaxed mb-7" style={{ color: '#7A6E64' }}>
                  Recién ahora sabemos exactamente qué construir, porque el mapa de la Fase 1 lo dice. Desarrollamos los agentes y las integraciones que ejecutan cada etapa del embudo sin intervención humana, conectados a tus sistemas reales.
                </p>
                <div className="space-y-3">
                  {['Agentes de IA por etapa del embudo', 'Integración con tu CRM y canales', 'Panel de conversión en tiempo real', 'Iteración con datos reales de uso'].map((item) => (
                    <div key={item} className="flex gap-3 items-start">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke={ACCENT} strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-sm" style={{ color: '#AAA' }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-7 pt-6 border-t" style={{ borderColor: 'rgba(16,185,129,0.15)' }}>
                  <p className="text-sm font-medium leading-relaxed" style={{ color: '#EAE0D5' }}>
                    Tu empresa deja de depender de que el vendedor se acuerde. El sistema se acuerda.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── QUÉ AUTOMATIZAMOS ── */}
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
                Qué automatizamos
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-white leading-tight">
                Cada etapa del embudo, con su propio agente
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: '#7A6E64' }}>
                No es un bot que responde preguntas. Son agentes que ejecutan acciones sobre tus sistemas: consultan, califican, escriben, agendan y hacen seguimiento.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {phase2.map((f, i) => (
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
                    style={{ background: 'rgba(16,185,129,0.08)', color: ACCENT }}
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

        {/* ── EL AGENTE EN ACCIÓN ── */}
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
                  El agente en acción
                </span>
                <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-white leading-tight">
                  De lead frío a reunión agendada,{' '}
                  <span className="font-display font-normal italic" style={{ color: '#EAE0D5' }}>
                    sin tocar nada
                  </span>
                </h2>
                <p className="mt-5 text-base leading-relaxed" style={{ color: '#7A6E64' }}>
                  Así se ve una calificación real. El agente conversa con el lead, consulta tu CRM mientras habla, lo puntúa contra los criterios que definimos en la Fase 1 y —si califica— agenda la reunión en el calendario del vendedor.
                </p>
                <p className="mt-4 text-base leading-relaxed" style={{ color: '#7A6E64' }}>
                  El vendedor no pierde una hora filtrando. Recibe la reunión ya confirmada, con el contexto del lead resumido y listo para leer.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {['Responde en segundos', 'Consulta sistemas reales', 'Escala al humano cuando corresponde'].map((tag) => (
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
              >
                <SalesAgentChat />
              </motion.div>
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
                      <svg className="w-4 h-4 flex-shrink-0 mt-1" fill="none" stroke={ACCENT} strokeWidth={2} viewBox="0 0 24 24">
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
                  Integraciones
                </span>
                <h2 className="mt-3 text-3xl font-bold text-white leading-tight mb-7">
                  Se conecta a lo que ya usás
                </h2>
                <p className="text-sm leading-relaxed mb-7" style={{ color: '#7A6E64' }}>
                  No te pedimos migrar de herramientas. El sistema se enchufa a tu CRM, tus canales y tu calendario actuales — y si hace falta algo que no existe, lo construimos.
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
                Veamos cómo vende tu empresa{' '}
                <span className="font-display font-normal italic" style={{ color: '#EAE0D5' }}>
                  hoy.
                </span>
              </h2>
              <p className="mt-5 text-base lg:text-lg leading-relaxed" style={{ color: '#7A6E64' }}>
                En una llamada de 30 minutos mapeamos tu proceso comercial actual y te mostramos dónde se está yendo la plata. Sin costo y sin compromiso: si no vemos una oportunidad clara, te lo decimos.
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
