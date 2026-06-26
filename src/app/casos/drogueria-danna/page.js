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
  { value: '+1.200', label: 'Pedidos gestionados por mes' }, // TODO: confirmar con cliente
  { value: '100%', label: 'Trazabilidad de punta a punta' },
  { value: '5', label: 'Estados de logística sincronizados' },
]

const orders = [
  { id: '#DN-1048', client: 'Farmacia San Andrés', state: 'Entregado',   stateColor: '#22c55e', stateBg: 'rgba(34,197,94,0.10)',   invoice: 'Facturado', invColor: '#22c55e', invBorder: 'rgba(34,197,94,0.25)',   invBg: 'rgba(34,197,94,0.06)',  highlight: false },
  { id: '#DN-1047', client: 'Farmacia del Pueblo', state: 'En tránsito', stateColor: '#0ea5e9', stateBg: 'rgba(14,165,233,0.10)',  invoice: 'Facturado', invColor: '#22c55e', invBorder: 'rgba(34,197,94,0.25)',   invBg: 'rgba(34,197,94,0.06)',  highlight: true },
  { id: '#DN-1046', client: 'Farmacia Central',    state: 'Despachado',  stateColor: '#3b82f6', stateBg: 'rgba(59,130,246,0.10)',  invoice: 'Pendiente', invColor: '#7A6E64', invBorder: '#2A2A2A',               invBg: 'transparent',           highlight: false },
  { id: '#DN-1045', client: 'Farmacia Norte',      state: 'Preparado',   stateColor: '#f59e0b', stateBg: 'rgba(245,158,11,0.10)',  invoice: 'Pendiente', invColor: '#7A6E64', invBorder: '#2A2A2A',               invBg: 'transparent',           highlight: false },
  { id: '#DN-1044', client: 'Farmacia La Salud',   state: 'Pendiente',   stateColor: '#8A8A8A', stateBg: '#1A1A1A',               invoice: 'Pendiente', invColor: '#7A6E64', invBorder: '#2A2A2A',               invBg: 'transparent',           highlight: false },
]

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
    title: 'Toma de pedidos centralizada',
    desc: 'Cada venta entra al sistema en un solo lugar. Sin planillas paralelas ni llamados: el pedido nace digital y queda asociado a su farmacia desde el primer minuto.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
    title: 'Preparación y picking',
    desc: 'El depósito ve qué preparar y en qué orden. Cada pedido pasa a "preparado" cuando está armado, dejando registro de quién y cuándo.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: 'Despacho y ruteo',
    desc: 'Al salir del depósito el pedido pasa a "despachado" y se asigna a su recorrido. El equipo sabe exactamente qué cargó cada vehículo.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: 'Seguimiento en tránsito',
    desc: 'Mientras el pedido viaja, su estado se actualiza en tiempo real. Nadie tiene que llamar para saber dónde está: el panel lo muestra.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: 'Confirmación de entrega',
    desc: 'La entrega cierra el ciclo logístico y dispara el estado final. Queda registro de cuándo y dónde se entregó cada pedido.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: 'Facturación sincronizada',
    desc: 'El estado de facturación viaja junto al pedido. Logística y administración dejan de vivir en mundos separados: una sola verdad, siempre conciliada.',
  },
]

const techStack = ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'AWS', 'Tailwind CSS', 'WebSockets', 'Docker']

const challenges = [
  {
    title: 'Operación manual y opaca',
    desc: 'Los pedidos se gestionaban con planillas y llamados. Nadie sabía con certeza en qué etapa estaba cada envío ni si ya se había facturado.',
  },
  {
    title: 'Logística y facturación desconectadas',
    desc: 'El estado del despacho vivía en un lado y la facturación en otro. Conciliar ambos mundos era lento, propenso a errores y difícil de auditar.',
  },
  {
    title: 'Sin visibilidad en tiempo real',
    desc: 'Ni el equipo interno ni las farmacias podían seguir un pedido de punta a punta. Cada consulta era un llamado y una demora.',
  },
]

export default function DrogueriaDannaCasePage() {
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
              background: 'radial-gradient(ellipse at center, rgba(14,165,233,0.07) 0%, rgba(2,132,199,0.04) 40%, transparent 70%)',
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
              <span style={{ color: '#EAE0D5' }}>Droguería Danna</span>
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
                  style={{ color: '#0ea5e9', borderColor: 'rgba(14,165,233,0.25)', background: 'rgba(14,165,233,0.06)' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 inline-block" />
                  Plataforma interna · Caso de éxito
                </motion.span>

                <motion.h1
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.12}
                  className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-5"
                >
                  Le dimos a Droguería Danna{' '}
                  <span className="font-display font-normal italic" style={{ color: '#EAE0D5' }}>
                    trazabilidad de punta a punta
                  </span>{' '}
                  en cada pedido.
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.2}
                  className="text-base lg:text-lg leading-relaxed max-w-xl"
                  style={{ color: '#7A6E64' }}
                >
                  Droguería Danna distribuye a farmacias de toda la región, pero su operación vivía en planillas y llamados. Flip desarrolló una plataforma que sigue cada pedido desde la venta hasta la entrega, con los estados de logística y facturación sincronizados en tiempo real.
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
                    Quiero algo similar
                  </a>
                  <a
                    href="#solucion"
                    className="inline-flex items-center gap-2 border border-[#2A2A2A] text-[#AAA] font-semibold px-5 py-2.5 rounded-lg hover:border-[#555] hover:text-white transition-colors text-sm"
                  >
                    Ver el proceso
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
                  src="/images/DANNA.png"
                  alt="Droguería Danna"
                  className="w-full object-contain"
                  style={{ maxHeight: '100px', filter: 'brightness(1)' }}
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

        {/* ── EL CLIENTE ── */}
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
                  La droguería que abastece a las farmacias de la región
                </h2>
                <p className="mt-5 text-base leading-relaxed" style={{ color: '#7A6E64' }}>
                  Droguería Danna es una distribuidora farmacéutica que abastece a decenas de farmacias. Su negocio depende de algo fácil de decir y difícil de lograr: que cada pedido llegue completo, a tiempo y correctamente facturado.
                </p>
                <p className="mt-4 text-base leading-relaxed" style={{ color: '#7A6E64' }}>
                  El proceso tenía cinco etapas —venta, preparación, despacho, tránsito y entrega— pero ninguna estaba conectada con las demás ni con la facturación. Flip las unificó en una sola plataforma.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {['Distribución farmacéutica', 'Logística', 'Operación interna', 'Facturación'].map(tag => (
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

              {/* Internal ops dashboard mockup */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-2xl border overflow-hidden"
                style={{ background: '#0D0D0D', borderColor: '#1E1E1E' }}
              >
                {/* App header (replaces browser chrome) */}
                <div
                  className="flex items-center justify-between px-4 py-3 border-b"
                  style={{ background: '#111', borderColor: '#1E1E1E' }}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold"
                      style={{ background: 'rgba(14,165,233,0.15)', color: '#0ea5e9' }}
                    >
                      D
                    </div>
                    <span className="text-xs font-semibold text-white">Panel de operaciones</span>
                  </div>
                  <span
                    className="inline-flex items-center gap-1.5 text-[10px] px-2 py-1 rounded-full"
                    style={{ background: 'rgba(14,165,233,0.08)', color: '#0ea5e9' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 inline-block" />
                    En vivo
                  </span>
                </div>

                {/* Column header strip */}
                <div
                  className="flex items-center px-5 py-2.5 border-b text-[10px] uppercase tracking-wider"
                  style={{ borderColor: '#1A1A1A', color: '#444' }}
                >
                  <span className="flex-1">Pedido</span>
                  <span className="w-24 text-center">Estado</span>
                  <span className="w-20 text-right">Facturación</span>
                </div>

                {/* Order rows */}
                <div className="p-3 space-y-2">
                  {orders.map((o) => (
                    <div
                      key={o.id}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 border"
                      style={{
                        background: o.highlight ? 'rgba(14,165,233,0.05)' : '#111111',
                        borderColor: o.highlight ? 'rgba(14,165,233,0.2)' : '#1E1E1E',
                      }}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold text-white">{o.id}</div>
                        <div className="text-[10px]" style={{ color: '#555' }}>{o.client}</div>
                      </div>
                      <span
                        className="w-24 text-center text-[10px] font-medium px-2 py-1 rounded-full"
                        style={{ color: o.stateColor, background: o.stateBg }}
                      >
                        {o.state}
                      </span>
                      <span
                        className="w-20 text-center text-[10px] font-medium px-2 py-1 rounded-full border"
                        style={{ color: o.invColor, borderColor: o.invBorder, background: o.invBg }}
                      >
                        {o.invoice}
                      </span>
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
                Una operación que crecía más rápido que sus procesos
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: '#7A6E64' }}>
                A medida que Danna sumaba farmacias, la gestión manual dejó de dar abasto. Faltaba una fuente única de verdad sobre el estado de cada pedido y su facturación.
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

        {/* ── LA SOLUCIÓN ── */}
        <section id="solucion" className="py-24 px-6" style={{ borderBottom: '1px solid #1E1E1E' }}>
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
                Una plataforma{' '}
                <span className="font-display font-normal italic" style={{ color: '#EAE0D5' }}>
                  de punta a punta
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: '#7A6E64' }}>
                Flip diseñó y desarrolló el sistema completo: el modelo de datos, la máquina de estados de cada pedido, las APIs y el panel interno desde donde el equipo opera el día a día. Cada etapa de la logística queda registrada y sincronizada con la facturación.
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
                  Stack pensado para una operación que no puede frenar
                </h2>
                <p className="mt-5 text-base leading-relaxed" style={{ color: '#7A6E64' }}>
                  Elegimos herramientas probadas y confiables. Tiempo real donde importa, datos consistentes siempre, y una base lista para escalar a más farmacias y más volumen.
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
                Una operación bajo control, de la venta a la entrega
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-14">
              {[
                {
                  metric: '-70%', // TODO: confirmar con cliente
                  label: 'tiempo de despacho',
                  sub: 'desde la toma del pedido hasta la salida del depósito',
                },
                {
                  metric: '100%',
                  label: 'trazabilidad end-to-end',
                  sub: 'cada pedido seguido de la venta a la entrega y facturación',
                },
                {
                  metric: 'Real-time', // TODO: confirmar con cliente
                  label: 'estado de cada envío',
                  sub: 'visibilidad instantánea para el equipo y las farmacias',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
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
                Si tu operación interna vive en planillas, llamados y archivos sueltos — hablemos. Diseñamos plataformas a medida que ordenan el caos. El diagnóstico inicial es gratis.
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
