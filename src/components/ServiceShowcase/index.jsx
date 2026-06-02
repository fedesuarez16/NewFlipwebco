'use client'
import { useState, useEffect, useRef, Fragment } from 'react'
import { motion, AnimatePresence, useMotionValue } from 'framer-motion'

function BrowserFrame({ url, children, dark = false }) {
  return (
    <div className={`rounded-xl overflow-hidden shadow-xl border ${dark ? 'border-[#333]' : 'border-[#E2D9CC]'}`}>
      <div className={`flex items-center gap-2 px-4 py-3 ${dark ? 'bg-[#1A1A1A]' : 'bg-[#F0EAE0]'}`}>
        <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <span className="w-3 h-3 rounded-full bg-[#28C840]" />
        <span className={`ml-4 text-xs px-3 py-1 rounded-full font-mono truncate ${dark ? 'bg-[#2A2A2A] text-[#888]' : 'bg-white text-[#9A8E83]'}`}>
          {url}
        </span>
      </div>
      <div>{children}</div>
    </div>
  )
}

function useCountUp(target, started, duration = 1400) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) { setCount(0); return }
    let startTime = null
    const step = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    const raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [started, target, duration])
  return count
}

// ─── Mockup 01: Chat con agente IA ───────────────────────────────────────────
function MockupChat() {
  const msgVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.45 } } }
  const msg = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.35 } } }
  return (
    <BrowserFrame url="agente.empresa.com" dark>
      <div className="bg-[#111] p-5 h-80 flex flex-col">
        <div className="flex items-center gap-3 pb-3 mb-4 border-b border-[#2A2A2A]">
          <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#0A0A0A] text-xs font-bold flex-shrink-0">AI</div>
          <div>
            <p className="text-sm font-semibold text-white">Agente de Ventas</p>
            <p className="text-xs text-[#28C840]">● En línea</p>
          </div>
        </div>
        <motion.div variants={msgVariants} initial="hidden" animate="visible" className="flex-1 flex flex-col gap-3 overflow-hidden">
          <motion.div variants={msg} className="self-end bg-white text-[#0A0A0A] text-xs px-3 py-2 rounded-xl rounded-br-sm max-w-[70%]">
            Necesito un resumen de ventas Q1
          </motion.div>
          <motion.div variants={msg} className="self-start bg-[#1A1A1A] px-3 py-2 rounded-xl rounded-bl-sm flex gap-1.5 items-center">
            <span className="w-2 h-2 rounded-full bg-[#555] animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-2 h-2 rounded-full bg-[#555] animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-2 h-2 rounded-full bg-[#555] animate-bounce" style={{ animationDelay: '300ms' }} />
          </motion.div>
          <motion.div variants={msg} className="self-start bg-[#1A1A1A] text-white text-xs px-3 py-2.5 rounded-xl rounded-bl-sm max-w-[80%] space-y-1.5">
            <p>Ventas Q1: <span className="font-bold">$2.4M</span> <span className="text-[#4ADE80]">↑18%</span> vs Q4. Top: LATAM.</p>
            <span className="inline-block bg-white text-[#0A0A0A] px-2.5 py-0.5 rounded-full text-xs">Reporte generado ✓</span>
          </motion.div>
        </motion.div>
        <div className="mt-4 flex items-center gap-2 border border-[#2A2A2A] rounded-xl px-3 py-2.5 bg-[#1A1A1A]">
          <span className="flex-1 text-xs text-[#444]">Escribí tu consulta...</span>
          <div className="w-6 h-6 bg-white rounded-lg flex-shrink-0" />
        </div>
      </div>
    </BrowserFrame>
  )
}

// ─── Mockup 02: Análisis de documento ────────────────────────────────────────
function MockupDoc() {
  const c = { hidden: {}, visible: { transition: { staggerChildren: 0.35 } } }
  const fi = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.4 } } }
  return (
    <BrowserFrame url="ia.empresa.com/docs" dark>
      <div className="bg-[#111] p-5 h-80 flex gap-3">
        <div className="w-[42%] flex flex-col border border-[#2A2A2A] rounded-xl p-3 gap-2 bg-[#0F0F0F]">
          <div className="flex items-center gap-2 pb-2 border-b border-[#2A2A2A]">
            <span className="text-lg">📄</span>
            <span className="text-xs font-semibold text-white truncate">contrato_2024.pdf</span>
          </div>
          {[100, 85, 95, 70, 90, 60].map((w, i) => (
            <div key={i} className="h-1.5 rounded-full bg-[#2A2A2A]" style={{ width: `${w}%` }} />
          ))}
        </div>
        <div className="flex-1 flex flex-col border border-[#2A2A2A] rounded-xl p-3 gap-2 bg-[#0F0F0F]">
          <div className="flex items-center gap-2 pb-2 border-b border-[#2A2A2A]">
            <span>✨</span>
            <span className="text-xs font-semibold text-white">Análisis IA</span>
          </div>
          <motion.div variants={c} initial="hidden" animate="visible" className="flex flex-col gap-2 mt-1">
            {[
              { text: 'Partes: Empresa A y Empresa B', cls: 'text-[#888]' },
              { text: 'Vigencia: 24 meses desde la firma', cls: 'text-[#888]' },
              { text: 'Penalidad: 15% sobre el contrato', cls: 'text-[#888]' },
              { text: '⚠️ Riesgo: Cláusula 7.3 ambigua', cls: 'text-amber-400 font-medium' },
            ].map((item, i) => (
              <motion.p key={i} variants={fi} className={`text-xs ${item.cls}`}>{item.text}</motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </BrowserFrame>
  )
}

// ─── Mockup 03: Dashboard BI ──────────────────────────────────────────────────
function MockupDashboard() {
  const [started, setStarted] = useState(false)
  const revenue = useCountUp(284500, started)
  const users = useCountUp(12400, started)
  const conversion = useCountUp(68, started)

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 300)
    return () => clearTimeout(t)
  }, [])

  return (
    <BrowserFrame url="dashboard.empresa.com" dark>
      <div className="bg-[#111] p-5 h-80 flex gap-3">
        <div className="w-1/5 bg-[#0D0D0D] rounded-xl p-2 flex flex-col gap-1">
          {['Dashboard', 'Ventas', 'KPIs', 'Alertas'].map((item, i) => (
            <div key={item} className={`text-xs px-2 py-1.5 rounded-lg ${i === 0 ? 'bg-[#1E1E1E] text-white' : 'text-[#555]'}`}>{item}</div>
          ))}
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'Ingresos', value: `$${(revenue / 1000).toFixed(0)}K`, badge: '+18% vs Q4' },
              { label: 'Usuarios', value: users.toLocaleString('es'), badge: 'activos hoy' },
              { label: 'Conversión', value: `${conversion}%`, badge: 'del total' },
            ].map(kpi => (
              <div key={kpi.label} className="bg-[#1A1A1A] rounded-xl p-2.5">
                <p className="text-xs text-[#555]">{kpi.label}</p>
                <p className="text-base font-bold text-white mt-0.5">{kpi.value}</p>
                <p className="text-xs text-[#4ADE80] mt-0.5">{kpi.badge}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2.5">
            {[{ label: 'LATAM', pct: 84 }, { label: 'NA', pct: 57 }, { label: 'Europa', pct: 43 }].map(bar => (
              <div key={bar.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-[#555]">{bar.label}</span>
                  <span className="text-white">{bar.pct}%</span>
                </div>
                <div className="h-1.5 bg-[#1E1E1E] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.9, ease: 'easeOut', delay: 0.4 }}
                    style={{ transformOrigin: 'left', width: `${bar.pct}%` }}
                    className="h-full bg-[#4ADE80] rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

// ─── Mockup 04: CRM Table ─────────────────────────────────────────────────────
function MockupCRM() {
  const c = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
  const fu = { hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } }
  const rows = [
    { name: 'Sofía Martínez', company: 'LogisTech SA', value: '$42.000', status: 'Activo', dot: 'bg-green-500' },
    { name: 'Carlos Ruiz', company: 'InnovateCo', value: '$18.500', status: 'Pendiente', dot: 'bg-yellow-500' },
    { name: 'Ana López', company: 'DataCorp', value: '$95.000', status: 'Activo', dot: 'bg-green-500' },
    { name: 'Marcos Silva', company: 'RetailMax', value: '$7.200', status: 'Inactivo', dot: 'bg-red-400' },
  ]
  return (
    <BrowserFrame url="crm.empresa.com" dark>
      <div className="bg-[#111] p-5 h-80 flex gap-3">
        <div className="w-1/5 border border-[#2A2A2A] rounded-xl p-2 flex flex-col gap-1 bg-[#0F0F0F]">
          {['Clientes', 'Pipeline', 'Reportes', 'Config'].map((item, i) => (
            <div key={item} className={`text-xs px-2 py-1.5 rounded-lg ${i === 0 ? 'bg-[#1A1A1A] text-white font-medium' : 'text-[#555]'}`}>{item}</div>
          ))}
        </div>
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="grid grid-cols-4 text-xs font-medium text-[#444] pb-2 border-b border-[#2A2A2A] mb-1">
            {['Nombre', 'Empresa', 'Valor', 'Estado'].map(h => <span key={h}>{h}</span>)}
          </div>
          <motion.div variants={c} initial="hidden" animate="visible" className="flex flex-col gap-0.5">
            {rows.map(row => (
              <motion.div key={row.name} variants={fu} className="grid grid-cols-4 text-xs py-2 border-b border-[#1A1A1A] items-center">
                <span className="text-white font-medium truncate">{row.name}</span>
                <span className="text-[#555] truncate">{row.company}</span>
                <span className="text-[#888] font-medium">{row.value}</span>
                <span className="flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${row.dot}`} />
                  <span className="text-[#555] truncate">{row.status}</span>
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </BrowserFrame>
  )
}

// ─── Mockup 05: Workflow RPA ──────────────────────────────────────────────────
function MockupWorkflow() {
  const c = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }
  const fu = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } }
  const tasks = [
    { icon: '📥', label: 'Recepción de documento', sub: 'Factura #4821 · PDF', status: 'done' },
    { icon: '🔍', label: 'Extracción con IA', sub: 'OCR + NLP · 12 campos', status: 'done' },
    { icon: '⚙️', label: 'Validación de reglas', sub: 'Motor de reglas · En proceso', status: 'running' },
    { icon: '🤖', label: 'Ejecución en ERP', sub: 'SAP · Pendiente', status: 'pending' },
  ]
  return (
    <BrowserFrame url="workflow.empresa.com" dark>
      <div className="bg-[#111] p-5 h-80 flex flex-col gap-2">
        <p className="text-xs font-semibold text-white pb-2 border-b border-[#2A2A2A]">Proceso activo: Factura #4821</p>
        <motion.div variants={c} initial="hidden" animate="visible" className="flex flex-col gap-2 pt-1">
          {tasks.map(task => (
            <motion.div key={task.label} variants={fu} className="flex items-center gap-3 p-3 rounded-xl border border-[#2A2A2A] bg-[#1A1A1A]">
              <span className="text-xl flex-shrink-0">{task.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-white truncate">{task.label}</p>
                <p className="text-xs text-[#555] truncate">{task.sub}</p>
              </div>
              {task.status === 'done' && <span className="text-sm text-[#4ADE80] font-bold flex-shrink-0">✓</span>}
              {task.status === 'running' && (
                <svg className="w-4 h-4 animate-spin text-white flex-shrink-0" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              )}
              {task.status === 'pending' && <span className="w-4 h-4 rounded-full border-2 border-[#2A2A2A] flex-shrink-0" />}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </BrowserFrame>
  )
}

// ─── Mockup 06: CI/CD Pipeline ────────────────────────────────────────────────
function MockupCICD() {
  const fi = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.4 } } }
  const stages = [
    { label: 'Build', status: 'done' },
    { label: 'Tests', status: 'done' },
    { label: 'Security', status: 'done' },
    { label: 'Deploy', status: 'deploying' },
  ]
  return (
    <BrowserFrame url="ci.empresa.com/pipeline" dark>
      <div className="bg-[#0F172A] p-5 h-80 flex flex-col justify-between">
        <div>
          <p className="text-xs text-[#475569] mb-5 font-mono">main → prod · commit a3f92bc</p>
          <div className="flex items-start justify-between gap-1">
            {stages.map((stage, i) => (
              <Fragment key={stage.label}>
                <motion.div
                  variants={fi}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: i * 0.55 }}
                  className="flex flex-col items-center gap-1.5 flex-1"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${stage.status === 'done' ? 'bg-[#052e16]' : 'bg-[#1E293B]'}`}>
                    {stage.status === 'done' ? (
                      <span className="text-[#4ADE80] font-bold">✓</span>
                    ) : (
                      <svg className="w-5 h-5 animate-spin text-blue-400" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                    )}
                  </div>
                  <p className="text-xs text-[#94A3B8]">{stage.label}</p>
                  {stage.status === 'deploying' && (
                    <div className="w-full h-1 bg-[#1E293B] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.4, ease: 'easeOut', delay: 1.8 }}
                        style={{ transformOrigin: 'left' }}
                        className="h-full w-full bg-blue-400 rounded-full"
                      />
                    </div>
                  )}
                </motion.div>
                {i < stages.length - 1 && (
                  <motion.div
                    variants={fi}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: i * 0.55 + 0.35 }}
                    className="h-px flex-[0.3] bg-[#334155] mt-5"
                  />
                )}
              </Fragment>
            ))}
          </div>
        </div>
        <div className="bg-[#0D1117] rounded-xl p-3 font-mono">
          <p className="text-xs text-[#4ADE80]">▶ Deploying to prod.empresa.com...</p>
          <p className="text-xs text-[#475569] mt-1">us-east-1 · ECS Fargate · 2/2 healthy</p>
        </div>
      </div>
    </BrowserFrame>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    number: '01',
    title: 'Agentes de IA Empresarial',
    description: 'Diseñamos e implementamos agentes autónomos sobre GPT-4, Claude y modelos open-source que operan directamente sobre tus datos y sistemas. Capaces de razonar, planificar y ejecutar tareas complejas en ventas, soporte y operaciones — sin intervención humana. ROI medible desde el primer mes.',
    tags: ['LLM', 'Copilots', 'Automatización'],
    Mockup: MockupChat,
  },
  {
    number: '02',
    title: 'IA Generativa para el Negocio',
    description: 'Integramos modelos de IA generativa en tus flujos de trabajo sin reemplazar tus sistemas actuales. Procesamiento inteligente de documentos, generación automática de reportes ejecutivos, asistentes internos con conocimiento de tu empresa y análisis jurídico-contractual con NLP de alta precisión.',
    tags: ['GPT-4', 'RAG', 'NLP'],
    Mockup: MockupDoc,
  },
  {
    number: '03',
    title: 'Plataformas de Datos & Analytics',
    description: 'Diseñamos tu arquitectura de datos de punta a punta: ingestión, transformación, almacenamiento y visualización. Dashboards BI en tiempo real, modelos predictivos para forecasting y detección de anomalías, y pipelines MLOps para desplegar modelos en producción con monitoreo continuo.',
    tags: ['BI', 'Predictivo', 'MLOps'],
    Mockup: MockupDashboard,
  },
  {
    number: '04',
    title: 'Software Empresarial a Medida',
    description: 'Construimos plataformas enterprise diseñadas para tu operación: ERP a medida, CRM con lógica de negocio propia y modernización de sistemas legacy sin downtime. APIs robustas, arquitectura escalable y código de producción con cobertura de tests. Sin vendor lock-in.',
    tags: ['ERP', 'CRM', 'APIs'],
    Mockup: MockupCRM,
  },
  {
    number: '05',
    title: 'Automatización Inteligente (RPA + IA)',
    description: 'Combinamos bots RPA con motores de IA para automatizar procesos de alta complejidad que los sistemas tradicionales no resuelven. Extracción inteligente de datos desde cualquier documento, validaciones automáticas, flujos de aprobación multi-sistema y orquestación de procesos de extremo a extremo.',
    tags: ['RPA', 'OCR', 'Workflows'],
    Mockup: MockupWorkflow,
  },
  {
    number: '06',
    title: 'Arquitectura Cloud & DevSecOps',
    description: 'Planificamos y ejecutamos migraciones cloud con cero downtime, diseñamos microservicios y arquitecturas event-driven, e implementamos pipelines CI/CD con seguridad integrada desde el diseño. Infraestructura como código en AWS, Azure y GCP con observabilidad completa y SLAs de producción.',
    tags: ['Cloud', 'Microservicios', 'CI/CD'],
    Mockup: MockupCICD,
  },
]

const INTERVAL = 4000

// ─── Componente principal ──────────────────────────────────────────────────────
export default function ServiceShowcase() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const progress = useMotionValue(0)

  const goTo = (i) => {
    progress.set(0)
    setActive(i)
  }

  useEffect(() => {
    progress.set(0)

    if (paused) return

    let startTime = null
    let rafId

    const tick = (ts) => {
      if (!startTime) startTime = ts
      const elapsed = ts - startTime
      const p = Math.min(elapsed / INTERVAL, 1)
      progress.set(p)
      if (p < 1) {
        rafId = requestAnimationFrame(tick)
      } else {
        setActive(prev => (prev + 1) % SERVICES.length)
      }
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [active, paused])

  const { number, title, description, tags, Mockup } = SERVICES[active]

  return (
    <section
      className="py-20 lg:py-28 overflow-hidden bg-[#0A0A0A]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Texto del servicio ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${active}`}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <span className="text-xs font-bold tracking-widest text-[#444]">{number}</span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-white leading-tight">
                {title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#888]">
                {description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map(tag => (
                  <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full border border-[#2A2A2A] text-[#666]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ── Mockup animado ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`mockup-${active}`}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <Mockup />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Navegación ── */}
        <div className="mt-12 flex items-center gap-4">
          {SERVICES.map((s, i) => (
            <button
              key={s.number}
              onClick={() => goTo(i)}
              className="flex flex-col gap-1.5 group focus:outline-none"
              aria-label={`Ver ${s.title}`}
            >
              <span className={`text-xs font-bold tracking-widest transition-colors duration-200 ${i === active ? 'text-white' : 'text-[#333] group-hover:text-[#666]'}`}>
                {s.number}
              </span>
              <div className="h-px w-10 bg-[#1A1A1A] overflow-hidden rounded-full">
                {i === active && (
                  <motion.div
                    className="h-full bg-white rounded-full"
                    style={{ scaleX: progress, transformOrigin: 'left' }}
                  />
                )}
                {i < active && <div className="h-full bg-white rounded-full w-full" />}
              </div>
            </button>
          ))}

          <div className="ml-auto flex gap-2">
            <button
              onClick={() => goTo((active - 1 + SERVICES.length) % SERVICES.length)}
              className="w-9 h-9 rounded-full border border-[#2A2A2A] flex items-center justify-center text-[#555] hover:border-white hover:text-white transition-colors"
              aria-label="Anterior"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => goTo((active + 1) % SERVICES.length)}
              className="w-9 h-9 rounded-full border border-[#2A2A2A] flex items-center justify-center text-[#555] hover:border-white hover:text-white transition-colors"
              aria-label="Siguiente"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
