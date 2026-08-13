'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ACCENT = '#10B981'

const SCRIPT = [
  { type: 'agent', text: 'Hola Martín 👋 Vi que descargaste la guía de logística. ¿Hay algo puntual que estén buscando resolver?', delay: 1000 },
  { type: 'lead',  text: 'Sí, se nos van los tiempos de despacho', delay: 1500 },
  { type: 'tool',  text: 'Consultando CRM · empresa identificada', delay: 850 },
  { type: 'agent', text: '¿Cuántos pedidos mensuales manejan hoy?', delay: 1200 },
  { type: 'lead',  text: 'Arriba de 1.000', delay: 1300 },
  { type: 'tool',  text: 'Scoring IA · 87/100 · lead calificado', delay: 900 },
  { type: 'agent', text: 'Encaja con lo que hacemos. Tengo jueves 15:00 o viernes 11:00 con el equipo, ¿cuál te sirve?', delay: 1500 },
  { type: 'lead',  text: 'Jueves 15:00', delay: 1300 },
  { type: 'tool',  text: 'Reunión agendada · vendedor notificado', delay: 900 },
]

const RESTART_MS = 3200

function ToolStep({ text }) {
  return (
    <div className="flex justify-center my-1">
      <span
        className="inline-flex items-center gap-1.5 text-[9px] font-medium px-2.5 py-1 rounded-full border"
        style={{
          color: ACCENT,
          borderColor: 'rgba(16,185,129,0.22)',
          background: 'rgba(16,185,129,0.06)',
        }}
      >
        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
        {text}
      </span>
    </div>
  )
}

function Bubble({ type, text }) {
  const isAgent = type === 'agent'
  return (
    <div className={`flex ${isAgent ? 'justify-start' : 'justify-end'}`}>
      <div
        className="max-w-[78%] px-3 py-2 text-[11px] leading-relaxed"
        style={
          isAgent
            ? {
                background: '#1A1A1A',
                color: '#E4E4E4',
                borderRadius: '12px 12px 12px 3px',
              }
            : {
                background: 'rgba(16,185,129,0.16)',
                color: '#D7F5E8',
                borderRadius: '12px 12px 3px 12px',
              }
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
      <div
        className="px-3 py-2.5 flex items-center gap-1"
        style={{ background: '#1A1A1A', borderRadius: '12px 12px 12px 3px' }}
      >
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

export default function SalesAgentChat() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (step >= SCRIPT.length) {
      const restart = setTimeout(() => setStep(0), RESTART_MS)
      return () => clearTimeout(restart)
    }
    const timer = setTimeout(() => setStep((s) => s + 1), SCRIPT[step].delay)
    return () => clearTimeout(timer)
  }, [step])

  const visible = SCRIPT.slice(0, step)
  const next = SCRIPT[step]
  const showTyping = next?.type === 'agent'

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
            className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold"
            style={{ background: 'rgba(16,185,129,0.14)', color: ACCENT }}
          >
            IA
          </div>
          <div>
            <div className="text-xs font-semibold text-white leading-tight">Agente de ventas</div>
            <div className="text-[9px] leading-tight" style={{ color: ACCENT }}>en línea · responde en 4s</div>
          </div>
        </div>
        <span className="text-[9px] px-2 py-1 rounded-full" style={{ background: '#1A1A1A', color: '#555' }}>
          WhatsApp
        </span>
      </div>

      {/* Conversación */}
      <div
        className="px-4 py-4 flex flex-col justify-end gap-2 overflow-hidden"
        style={{ height: '340px' }}
      >
        <AnimatePresence initial={false}>
          {visible.map((msg, i) => (
            <motion.div
              key={`${i}-${msg.text}`}
              initial={{ opacity: 0, y: 12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
            >
              {msg.type === 'tool' ? <ToolStep text={msg.text} /> : <Bubble type={msg.type} text={msg.text} />}
            </motion.div>
          ))}
        </AnimatePresence>

        {showTyping && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
            <TypingDots />
          </motion.div>
        )}
      </div>

      {/* Footer resultado */}
      <div
        className="px-4 py-3 border-t flex items-center justify-between"
        style={{ borderColor: '#1A1A1A', background: '#0B0B0B' }}
      >
        <span className="text-[10px]" style={{ color: '#4A4A4A' }}>
          Sin intervención humana
        </span>
        <AnimatePresence>
          {step >= SCRIPT.length && (
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-[10px] font-semibold"
              style={{ color: ACCENT }}
            >
              Reunión agendada ✓
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
