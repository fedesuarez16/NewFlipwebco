'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ACCENT = '#10B981'

const STAGES = [
  { name: 'Captación',    rule: 'Entra desde ads, web u outbound',    ai: 'Enriquecimiento automático', count: 1240, pct: '100%',  width: 100 },
  { name: 'Calificación', rule: 'Cumple ICP y presupuesto declarado', ai: 'Scoring con IA',             count: 486,  pct: '39%',   width: 78 },
  { name: 'Contacto',     rule: 'Respondió el primer mensaje',        ai: 'Mensajes personalizados',    count: 312,  pct: '25%',   width: 62 },
  { name: 'Reunión',      rule: 'Agenda confirmada con el vendedor',  ai: 'Agendamiento autónomo',      count: 148,  pct: '11,9%', width: 44 },
  { name: 'Propuesta',    rule: 'Propuesta enviada y abierta',        ai: 'Generación y seguimiento',   count: 74,   pct: '6%',    width: 30 },
  { name: 'Cierre',       rule: 'Contrato firmado',                   ai: 'Alertas de oportunidad',     count: 31,   pct: '2,5%',  width: 18 },
]

const DESIGN_MS = 4200
const LIVE_MS = 5600

/* Marco de navegador — mismo lenguaje visual que los mockups de los casos de éxito */
function BrowserFrame({ url, children }) {
  return (
    <div
      className="rounded-2xl border overflow-hidden w-full"
      style={{ background: '#0D0D0D', borderColor: '#1E1E1E' }}
    >
      <div
        className="flex items-center gap-1.5 px-3.5 sm:px-4 py-3 border-b"
        style={{ background: '#111', borderColor: '#1E1E1E' }}
      >
        <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: '#FF5F57' }} />
        <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: '#FEBC2E' }} />
        <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: '#28C840' }} />
        <div
          className="ml-2.5 sm:ml-3 flex-1 min-w-0 rounded-md px-3 py-1 text-[11px] flex items-center gap-2"
          style={{ background: '#1A1A1A', color: '#555' }}
        >
          <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
          <span className="truncate">{url}</span>
        </div>
      </div>
      {children}
    </div>
  )
}

function useCountUp(target, active, duration = 1300) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) {
      setValue(0)
      return
    }
    let raf
    let start = null
    const tick = (ts) => {
      if (start === null) start = ts
      const p = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, active, duration])

  return value
}

/* Fila de reporte de embudo: etiqueta + métricas arriba, barra proporcional abajo */
function StageRow({ stage, index, live }) {
  const count = useCountUp(stage.count, live)

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: live ? index * 0.07 : index * 0.32, ease: [0.4, 0, 0.2, 1] }}
      className="py-2 border-b last:border-b-0"
      style={{ borderColor: '#151515' }}
    >
      {/* Línea de etiqueta y métricas */}
      <div className="flex items-baseline gap-2">
        <span
          className="text-[9px] font-bold tabular-nums flex-shrink-0"
          style={{ color: live ? ACCENT : '#3E3E3E' }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="text-[11px] font-semibold text-white leading-tight truncate flex-1 min-w-0">
          {stage.name}
        </span>
        <span className="text-[11px] font-bold text-white tabular-nums leading-none flex-shrink-0">
          {live ? count.toLocaleString('es') : '—'}
        </span>
        <span
          className="text-[9px] tabular-nums w-9 text-right flex-shrink-0"
          style={{ color: live ? 'rgba(16,185,129,0.75)' : '#3E3E3E' }}
        >
          {live ? stage.pct : '··'}
        </span>
      </div>

      {/* Barra proporcional */}
      <div className="mt-1.5 ml-[18px] h-1.5 rounded-full overflow-hidden" style={{ background: '#141414' }}>
        <motion.div
          className="h-full rounded-full relative overflow-hidden"
          initial={false}
          animate={{ width: live ? `${stage.width}%` : `${Math.max(stage.width * 0.12, 6)}%` }}
          transition={{ duration: 0.6, delay: live ? index * 0.07 : index * 0.32, ease: [0.4, 0, 0.2, 1] }}
          style={{
            background: live
              ? `linear-gradient(90deg, ${ACCENT} 0%, rgba(16,185,129,0.45) 100%)`
              : '#2A2A2A',
          }}
        >
          {live && (
            <motion.span
              className="absolute inset-y-0 w-8"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)' }}
              /* left en % se resuelve contra la barra, así el brillo la cruza entera a cualquier ancho */
              animate={{ left: ['-20%', '110%'] }}
              transition={{ duration: 1.6, repeat: Infinity, delay: index * 0.18, ease: 'linear' }}
            />
          )}
        </motion.div>
      </div>

      {/* Criterio de avance (diseño) ↔ automatización aplicada (vivo) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={live ? 'ai' : 'rule'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="mt-1 ml-[18px] text-[9px] leading-tight truncate"
          style={{ color: live ? 'rgba(16,185,129,0.7)' : '#4A4A4A' }}
        >
          {live ? `⚡ ${stage.ai}` : stage.rule}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}

export default function FunnelBlueprint() {
  const [live, setLive] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLive((prev) => !prev), live ? LIVE_MS : DESIGN_MS)
    return () => clearTimeout(timer)
  }, [live])

  return (
    <BrowserFrame url="crm.tuempresa.com/embudo">
      {/* Barra de herramientas de la app */}
      <div
        className="flex items-center justify-between gap-3 px-3.5 sm:px-4 py-2.5 border-b"
        style={{ background: '#0F0F0F', borderColor: '#1A1A1A' }}
      >
        <div className="flex items-center gap-2 min-w-0">
          <div
            className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(16,185,129,0.14)' }}
          >
            <svg className="w-3 h-3" fill="none" stroke={ACCENT} strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h18l-7 8.25v6l-4 2.25v-8.25L3 4.5z" />
            </svg>
          </div>
          <span className="text-[11px] font-semibold text-white truncate">Embudo principal</span>
        </div>

        <AnimatePresence mode="wait">
          <motion.span
            key={live ? 'live' : 'design'}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.25 }}
            className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-medium px-2 py-1 rounded-full flex-shrink-0"
            style={{
              background: live ? 'rgba(16,185,129,0.10)' : 'rgba(234,224,213,0.06)',
              color: live ? ACCENT : '#9A8E83',
            }}
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ background: live ? ACCENT : '#9A8E83' }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
            {live ? 'Automatización activa' : 'Fase 1 · Diseñando'}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Filtros — refuerzan la lectura de "pantalla real de producto" */}
      <div
        className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 border-b overflow-hidden"
        style={{ borderColor: '#151515' }}
      >
        {['Últimos 30 días', 'Todos los vendedores', 'Argentina'].map((chip, i) => (
          <span
            key={chip}
            className={`text-[9px] px-2 py-0.5 rounded-md border whitespace-nowrap ${i === 2 ? 'hidden sm:inline-block' : ''}`}
            style={{ borderColor: '#222', color: '#4A4A4A' }}
          >
            {chip}
          </span>
        ))}
        <span className="ml-auto text-[9px] tabular-nums flex-shrink-0" style={{ color: '#3E3E3E' }}>
          6 etapas
        </span>
      </div>

      {/* Reporte de embudo */}
      <div className="px-3.5 sm:px-4 py-2">
        {STAGES.map((stage, i) => (
          <StageRow key={stage.name} stage={stage} index={i} live={live} />
        ))}
      </div>

      {/* Footer */}
      <div
        className="px-3.5 sm:px-4 py-2.5 sm:py-3 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-3"
        style={{ borderColor: '#1A1A1A', background: '#0B0B0B' }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={live ? 'f-live' : 'f-design'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="text-[10px] leading-tight"
            style={{ color: '#4A4A4A' }}
          >
            {live
              ? '6 etapas automatizadas · sin carga manual'
              : '6 etapas · criterios de avance definidos'}
          </motion.span>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.span
            key={live ? 'm-live' : 'm-design'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="text-[10px] font-semibold leading-tight flex-shrink-0"
            style={{ color: live ? ACCENT : '#9A8E83' }}
          >
            {live ? 'Conversión 2,5%' : 'Mapa del proceso'}
          </motion.span>
        </AnimatePresence>
      </div>
    </BrowserFrame>
  )
}
