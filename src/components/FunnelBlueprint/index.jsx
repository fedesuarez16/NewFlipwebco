'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ACCENT = '#10B981'

const STAGES = [
  { name: 'Captación',    rule: 'Entra desde ads, web u outbound',    ai: 'Enriquecimiento automático', count: 1240, pct: '100%',  width: 100 },
  { name: 'Calificación', rule: 'Cumple ICP y presupuesto declarado', ai: 'Scoring con IA',             count: 486,  pct: '39%',   width: 85 },
  { name: 'Contacto',     rule: 'Respondió el primer mensaje',        ai: 'Mensajes personalizados',    count: 312,  pct: '25%',   width: 71 },
  { name: 'Reunión',      rule: 'Agenda confirmada con el vendedor',  ai: 'Agendamiento autónomo',      count: 148,  pct: '11,9%', width: 57 },
  { name: 'Propuesta',    rule: 'Propuesta enviada y abierta',        ai: 'Generación y seguimiento',   count: 74,   pct: '6%',    width: 44 },
  { name: 'Cierre',       rule: 'Contrato firmado',                   ai: 'Alertas de oportunidad',     count: 31,   pct: '2,5%',  width: 32 },
]

const DESIGN_MS = 4200
const LIVE_MS = 5600

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

function StageRow({ stage, index, live }) {
  const count = useCountUp(stage.count, live)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: live ? index * 0.07 : index * 0.42, ease: [0.4, 0, 0.2, 1] }}
      className="flex flex-col items-center"
    >
      <motion.div
        animate={{ width: `${stage.width}%` }}
        transition={{ duration: 0.5, delay: live ? index * 0.07 : index * 0.42, ease: [0.4, 0, 0.2, 1] }}
        className="rounded-lg px-3 py-2.5 flex items-center gap-2.5"
        style={{
          width: `${stage.width}%`,
          border: live ? `1px solid rgba(16,185,129,0.28)` : '1px dashed #2E2E2E',
          background: live
            ? `linear-gradient(90deg, rgba(16,185,129,0.14) 0%, rgba(16,185,129,0.04) 100%)`
            : 'transparent',
        }}
      >
        <span
          className="text-[10px] font-bold w-4 flex-shrink-0"
          style={{ color: live ? ACCENT : '#3E3E3E' }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className="flex-1 min-w-0">
          <div className="text-[11px] font-semibold text-white leading-tight truncate">
            {stage.name}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={live ? 'ai' : 'rule'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="text-[9px] leading-tight truncate mt-0.5"
              style={{ color: live ? 'rgba(16,185,129,0.75)' : '#4A4A4A' }}
            >
              {live ? `⚡ ${stage.ai}` : stage.rule}
            </motion.div>
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {live && (
            <motion.div
              initial={{ opacity: 0, x: 6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: index * 0.07 }}
              className="flex-shrink-0 text-right"
            >
              <div className="text-[11px] font-bold text-white tabular-nums leading-none">
                {count.toLocaleString('es')}
              </div>
              <div className="text-[8px] mt-0.5" style={{ color: '#4A4A4A' }}>
                {stage.pct}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Conector con partícula en vivo */}
      {index < STAGES.length - 1 && (
        <div className="relative h-2.5 w-px" style={{ background: live ? 'rgba(16,185,129,0.2)' : '#242424' }}>
          {live && (
            <motion.span
              className="absolute left-1/2 w-1 h-1 rounded-full"
              style={{ background: ACCENT, x: '-50%' }}
              initial={{ top: -2, opacity: 0 }}
              animate={{ top: 10, opacity: [0, 1, 0] }}
              transition={{ duration: 0.7, repeat: Infinity, delay: index * 0.16, ease: 'linear' }}
            />
          )}
        </div>
      )}
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
    <div
      className="rounded-2xl border overflow-hidden w-full"
      style={{ background: '#0D0D0D', borderColor: '#1E1E1E' }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3 border-b"
        style={{ background: '#111', borderColor: '#1E1E1E' }}
      >
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-md flex items-center justify-center"
            style={{ background: 'rgba(16,185,129,0.14)' }}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke={ACCENT} strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h18l-7 8.25v6l-4 2.25v-8.25L3 4.5z" />
            </svg>
          </div>
          <span className="text-xs font-semibold text-white">Embudo de ventas</span>
        </div>

        <AnimatePresence mode="wait">
          <motion.span
            key={live ? 'live' : 'design'}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.25 }}
            className="inline-flex items-center gap-1.5 text-[10px] font-medium px-2 py-1 rounded-full"
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

      {/* Funnel */}
      <div className="px-5 py-6 flex flex-col items-center">
        {STAGES.map((stage, i) => (
          <StageRow key={stage.name} stage={stage} index={i} live={live} />
        ))}
      </div>

      {/* Footer */}
      <div
        className="px-4 py-3 border-t flex items-center justify-between"
        style={{ borderColor: '#1A1A1A', background: '#0B0B0B' }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={live ? 'f-live' : 'f-design'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="text-[10px]"
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
            className="text-[10px] font-semibold"
            style={{ color: live ? ACCENT : '#9A8E83' }}
          >
            {live ? 'Conversión 2,5%' : 'Mapa del proceso'}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  )
}
