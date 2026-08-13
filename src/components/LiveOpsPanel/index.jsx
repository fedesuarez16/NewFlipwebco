'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EVENTS = [
  { title: 'Lead calificado · 87/100',        sub: 'Reunión agendada para el jueves 15:00', tag: 'Ventas',          color: '#10B981' },
  { title: 'Factura #4821 procesada',          sub: '12 campos extraídos · cargada en el ERP', tag: 'Automatización', color: '#F59E0B' },
  { title: 'Pedido #DN-1047 despachado',       sub: 'Facturación sincronizada · en tránsito', tag: 'Logística',      color: '#0EA5E9' },
  { title: 'Reporte semanal generado',         sub: 'Enviado a 4 destinatarios · 18 páginas', tag: 'IA Generativa',  color: '#8B5CF6' },
  { title: 'Deploy a producción',              sub: 'us-east-1 · 2/2 healthy · 0 downtime',   tag: 'Cloud',          color: '#3B82F6' },
  { title: 'Modelo de forecast re-entrenado',  sub: 'Precisión +3,2% sobre el período previo', tag: 'Data',          color: '#EAE0D5' },
  { title: 'Contrato analizado · 3 alertas',   sub: 'Cláusulas de rescisión marcadas',        tag: 'IA Generativa',  color: '#8B5CF6' },
  { title: 'Stock crítico detectado',          sub: 'Orden de reposición sugerida al proveedor', tag: 'Automatización', color: '#F59E0B' },
]

const VISIBLE = 4
const TICK_MS = 2000
const BASE_COUNT = 2847

export default function LiveOpsPanel() {
  const [feed, setFeed] = useState(() =>
    EVENTS.slice(0, VISIBLE).map((e, i) => ({ ...e, uid: VISIBLE - i }))
  )
  const [ticks, setTicks] = useState(0)
  const cursor = useRef(VISIBLE)

  useEffect(() => {
    const id = setInterval(() => {
      cursor.current += 1
      const next = EVENTS[cursor.current % EVENTS.length]
      setFeed((prev) => [{ ...next, uid: cursor.current + VISIBLE }, ...prev].slice(0, VISIBLE))
      setTicks((t) => t + 1)
    }, TICK_MS)
    return () => clearInterval(id)
  }, [])

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
        <div className="flex items-center gap-2.5">
          <div
            className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold"
            style={{ background: 'rgba(234,224,213,0.10)', color: '#EAE0D5' }}
          >
            F
          </div>
          <span className="text-xs font-semibold text-white">Operación automatizada</span>
        </div>
        <span
          className="inline-flex items-center gap-1.5 text-[10px] font-medium px-2 py-1 rounded-full"
          style={{ background: 'rgba(16,185,129,0.10)', color: '#10B981' }}
        >
          <motion.span
            className="w-1.5 h-1.5 rounded-full inline-block"
            style={{ background: '#10B981' }}
            animate={{ opacity: [1, 0.25, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          />
          En vivo
        </span>
      </div>

      {/* Feed de eventos */}
      <div className="px-3 py-3" style={{ minHeight: '272px' }}>
        <AnimatePresence initial={false} mode="popLayout">
          {feed.map((event, i) => (
            <motion.div
              key={event.uid}
              layout
              initial={{ opacity: 0, y: -18, scale: 0.97 }}
              animate={{ opacity: 1 - i * 0.16, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.25 } }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="flex items-center gap-3 rounded-xl px-3.5 py-3 border mb-2"
              style={{ background: '#111111', borderColor: '#1C1C1C' }}
            >
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: `${event.color}14` }}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke={event.color} strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>

              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-semibold text-white truncate leading-tight">
                  {event.title}
                </div>
                <div className="text-[9px] truncate leading-tight mt-0.5" style={{ color: '#4A4A4A' }}>
                  {event.sub}
                </div>
              </div>

              <span
                className="flex-shrink-0 text-[9px] font-medium px-2 py-0.5 rounded-full"
                style={{ color: event.color, background: `${event.color}12` }}
              >
                {event.tag}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div
        className="px-4 py-3 border-t flex items-center justify-between"
        style={{ borderColor: '#1A1A1A', background: '#0B0B0B' }}
      >
        <span className="text-[10px]" style={{ color: '#4A4A4A' }}>
          Ejecutado sin intervención humana
        </span>
        <span className="text-[10px] font-semibold tabular-nums" style={{ color: '#EAE0D5' }}>
          {(BASE_COUNT + ticks).toLocaleString('es')} procesos hoy
        </span>
      </div>
    </div>
  )
}
