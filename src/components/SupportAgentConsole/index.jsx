'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ACCENT = '#06B6D4'

/* Los pasos `context` no van al chat: alimentan el panel derecho.
   Mientras uno está pendiente, el chat muestra el typing — el agente
   "piensa" consultando sistemas, que es exactamente lo que queremos mostrar. */
const SCRIPT = [
  { kind: 'client', text: 'Hola, hice un pedido hace 5 días y todavía no me llegó nada', ms: 1700 },
  { kind: 'context', label: 'Cliente identificado', value: 'Lucía M. · compra desde 2023', ms: 900 },
  { kind: 'context', label: 'ERP · Pedido #4821', value: 'En tránsito · llega mañana', ms: 900 },
  { kind: 'agent', text: 'Hola Lucía 👋 Tu pedido #4821 salió del depósito el martes y llega mañana entre las 9 y las 14.', ms: 1900 },
  { kind: 'client', text: '¿Puedo cambiar la dirección? Me mudé la semana pasada', ms: 1700 },
  { kind: 'context', label: 'Transportista', value: 'Envío todavía modificable', ms: 950 },
  { kind: 'agent', text: 'Sí, todavía se puede. Pasame la dirección nueva y la actualizo ahora mismo.', ms: 1600 },
  { kind: 'client', text: 'Av. Rivadavia 4200, CABA', ms: 1400 },
  { kind: 'context', label: 'Acción ejecutada', value: 'Dirección actualizada', action: true, ms: 1000 },
  { kind: 'agent', text: 'Listo. Queda para mañana en la dirección nueva y te mandé el comprobante por mail.', ms: 1900 },
]

const RESTART_MS = 3400

function Bubble({ kind, text }) {
  const isAgent = kind === 'agent'
  return (
    <div className={`flex ${isAgent ? 'justify-start' : 'justify-end'}`}>
      <div
        className="max-w-[82%] px-3 py-2 text-[11px] leading-relaxed"
        style={
          isAgent
            ? { background: '#1A1A1A', color: '#E4E4E4', borderRadius: '12px 12px 12px 3px' }
            : { background: 'rgba(6,182,212,0.16)', color: '#CFF3FA', borderRadius: '12px 12px 3px 12px' }
        }
      >
        {text}
      </div>
    </div>
  )
}

function TypingDots() {
  return (
    <div className="flex justify-start">
      <div className="px-3 py-2.5 flex items-center gap-1" style={{ background: '#1A1A1A', borderRadius: '12px 12px 12px 3px' }}>
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-1 h-1 rounded-full"
            style={{ background: '#666' }}
            animate={{ opacity: [0.25, 1, 0.25] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.18 }}
          />
        ))}
      </div>
    </div>
  )
}

function ContextRow({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      className="flex gap-2 pb-3 relative"
    >
      {/* Línea conectora del recorrido */}
      {index > 0 && (
        <span
          className="absolute left-[6px] -top-3 h-3 w-px"
          style={{ background: 'rgba(6,182,212,0.25)' }}
        />
      )}

      <span
        className="w-3 h-3 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
        style={{ background: item.action ? ACCENT : 'rgba(6,182,212,0.18)' }}
      >
        <svg
          className="w-2 h-2"
          fill="none"
          stroke={item.action ? '#0A0A0A' : ACCENT}
          strokeWidth={3.5}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </span>

      <div className="min-w-0">
        <div className="text-[9px] font-semibold leading-tight" style={{ color: item.action ? ACCENT : '#8A8A8A' }}>
          {item.label}
        </div>
        <div className="text-[9px] leading-tight mt-0.5" style={{ color: '#5A5A5A' }}>
          {item.value}
        </div>
      </div>
    </motion.div>
  )
}

export default function SupportAgentConsole() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (step >= SCRIPT.length) {
      const restart = setTimeout(() => setStep(0), RESTART_MS)
      return () => clearTimeout(restart)
    }
    const timer = setTimeout(() => setStep((s) => s + 1), SCRIPT[step].ms)
    return () => clearTimeout(timer)
  }, [step])

  const played = SCRIPT.slice(0, step)
  const messages = played.filter((s) => s.kind !== 'context')
  const context = played.filter((s) => s.kind === 'context')

  const upcoming = SCRIPT[step]
  const thinking = upcoming?.kind === 'agent' || upcoming?.kind === 'context'
  const finished = step >= SCRIPT.length

  return (
    <div
      className="rounded-2xl border overflow-hidden w-full"
      style={{ background: '#0D0D0D', borderColor: '#1E1E1E' }}
    >
      <div className="grid md:grid-cols-[1.45fr_1fr]">

        {/* ── Panel izquierdo: la conversación ── */}
        <div className="flex flex-col border-b md:border-b-0 md:border-r" style={{ borderColor: '#1A1A1A' }}>
          <div
            className="flex items-center justify-between px-4 py-3 border-b flex-shrink-0"
            style={{ background: '#111', borderColor: '#1E1E1E' }}
          >
            <div className="flex items-center gap-2.5">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold"
                style={{ background: 'rgba(6,182,212,0.14)', color: ACCENT }}
              >
                IA
              </div>
              <div>
                <div className="text-[11px] font-semibold text-white leading-tight">Agente de soporte</div>
                <div className="text-[9px] leading-tight" style={{ color: ACCENT }}>en línea · responde en 8s</div>
              </div>
            </div>
            <span className="text-[9px] px-2 py-1 rounded-full" style={{ background: '#1A1A1A', color: '#555' }}>
              WhatsApp
            </span>
          </div>

          <div className="px-4 py-4 flex flex-col justify-end gap-2 overflow-hidden" style={{ height: '316px' }}>
            <AnimatePresence initial={false}>
              {messages.map((msg, i) => (
                <motion.div
                  key={`${i}-${msg.text}`}
                  initial={{ opacity: 0, y: 12, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
                >
                  <Bubble kind={msg.kind} text={msg.text} />
                </motion.div>
              ))}
            </AnimatePresence>

            {thinking && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
                <TypingDots />
              </motion.div>
            )}
          </div>
        </div>

        {/* ── Panel derecho: lo que el agente consulta y ejecuta ── */}
        <div className="flex flex-col" style={{ background: '#0B0B0B' }}>
          <div
            className="px-4 py-3 border-b flex items-center justify-between flex-shrink-0"
            style={{ background: '#0F0F0F', borderColor: '#1A1A1A' }}
          >
            <span className="text-[10px] font-semibold" style={{ color: '#8A8A8A' }}>
              Lo que hace el agente
            </span>
            <span className="text-[9px] tabular-nums" style={{ color: '#3E3E3E' }}>
              {context.length}/4
            </span>
          </div>

          <div className="px-4 py-4 flex-1 overflow-hidden">
            {context.length === 0 && (
              <div className="text-[9px] leading-relaxed" style={{ color: '#333' }}>
                Esperando la primera consulta…
              </div>
            )}
            {context.map((item, i) => (
              <ContextRow key={item.label} item={item} index={i} />
            ))}
          </div>

          <div
            className="px-4 py-3 border-t flex-shrink-0"
            style={{ borderColor: '#1A1A1A' }}
          >
            <AnimatePresence mode="wait">
              {finished ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-[10px] font-semibold" style={{ color: ACCENT }}>
                    Resuelto en 1:12 ✓
                  </div>
                  <div className="text-[9px] mt-0.5" style={{ color: '#4A4A4A' }}>
                    Sin intervención humana
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="running"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[10px]"
                  style={{ color: '#4A4A4A' }}
                >
                  Atendiendo…
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
