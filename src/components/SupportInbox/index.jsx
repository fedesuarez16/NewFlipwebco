'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ACCENT = '#0E7490'
const ACCENT_BRIGHT = '#06B6D4'
const INK = '#0A0A0A'
const BODY = '#6B6055'
const SOFT = '#9A8E83'
const LINE = '#E2D9CC'
const CREAM = '#F5EFE6'

/* Cada canal con su color de marca oscurecido: sobre fondo claro el tono
   original (ej. #25D366) queda ilegible en texto de 9px. */
const CHANNELS = {
  whatsapp: { label: 'WhatsApp', color: '#0D7A3E' },
  instagram: { label: 'Instagram', color: '#C71E5E' },
  web: { label: 'Chat web', color: '#0E7490' },
  email: { label: 'Email', color: '#7A6E64' },
}

/* El caso derivado no es un relleno: sostiene la promesa de que hay
   consultas que siempre terminan en una persona. */
const TICKETS = [
  { id: 't1', initials: 'MG', name: 'Martín G.', channel: 'whatsapp', text: '¿Dónde está mi pedido #4821?', outcome: 'solved', time: '12s' },
  { id: 't2', initials: 'CP', name: 'Carla P.', channel: 'instagram', text: '¿Hacen envíos a Córdoba capital?', outcome: 'solved', time: '8s' },
  { id: 't3', initials: 'JR', name: 'Julián R.', channel: 'email', text: 'Necesito la factura de septiembre', outcome: 'solved', time: '21s' },
  { id: 't4', initials: 'DA', name: 'Diego A.', channel: 'whatsapp', text: 'El producto llegó roto, quiero reclamar', outcome: 'escalated', to: 'Valeria' },
  { id: 't5', initials: 'SL', name: 'Sofía L.', channel: 'web', text: 'Quiero cambiar el talle de una remera', outcome: 'solved', time: '34s' },
  { id: 't6', initials: 'FN', name: 'Flor N.', channel: 'whatsapp', text: '¿Puedo reprogramar el turno del jueves?', outcome: 'solved', time: '16s' },
]

const VISIBLE = 4
const TICK_MS = 1500
const TAIL_TICKS = 3

/* Edad del ticket en ticks → qué muestra la columna de estado. */
function stateFor(age) {
  if (age <= 0) return 'new'
  if (age === 1) return 'working'
  return 'done'
}

function ChannelDot({ channel }) {
  const c = CHANNELS[channel]
  return (
    <span
      className="inline-flex items-center gap-1 text-[9px] font-semibold px-1.5 py-0.5 rounded"
      style={{ color: c.color, background: `${c.color}14` }}
    >
      <span className="w-1 h-1 rounded-full" style={{ background: c.color }} />
      {c.label}
    </span>
  )
}

function Status({ state, ticket }) {
  if (state === 'new') {
    return (
      <span className="text-[9px] font-medium px-2 py-1 rounded-full" style={{ background: CREAM, color: SOFT }}>
        nuevo
      </span>
    )
  }

  if (state === 'working') {
    return (
      <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold" style={{ color: ACCENT }}>
        <motion.span
          className="w-2.5 h-2.5 rounded-full border-[1.5px] border-transparent"
          style={{ borderTopColor: ACCENT, borderRightColor: ACCENT }}
          animate={{ rotate: 360 }}
          transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }}
        />
        resolviendo
      </span>
    )
  }

  if (ticket.outcome === 'escalated') {
    return (
      <span className="inline-flex items-center gap-1 text-[9px] font-semibold" style={{ color: '#7A6E5F' }}>
        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
        {ticket.to}
      </span>
    )
  }

  return (
    <span className="inline-flex items-center gap-1 text-[9px] font-bold" style={{ color: ACCENT }}>
      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
      {ticket.time}
    </span>
  )
}

function Row({ ticket, age }) {
  const state = stateFor(age)
  const done = state === 'done'
  const escalated = done && ticket.outcome === 'escalated'

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -14, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, height: 0, marginBottom: 0, transition: { duration: 0.3 } }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      className="rounded-xl border p-2.5 mb-2 last:mb-0"
      style={{
        background: done ? '#FBF9F6' : '#FFFFFF',
        borderColor: state === 'working' ? 'rgba(6,182,212,0.45)' : LINE,
        boxShadow: state === 'working' ? '0 1px 8px rgba(6,182,212,0.10)' : 'none',
      }}
    >
      <div className="flex items-center gap-2.5">
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold flex-shrink-0"
          style={{ background: CREAM, color: SOFT }}
        >
          {ticket.initials}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-semibold truncate" style={{ color: INK }}>{ticket.name}</span>
            <ChannelDot channel={ticket.channel} />
          </div>
          <div
            className="text-[10px] leading-tight truncate mt-0.5"
            style={{ color: done && !escalated ? SOFT : BODY }}
          >
            {ticket.text}
          </div>
        </div>

        <div className="flex-shrink-0">
          <Status state={state} ticket={ticket} />
        </div>
      </div>
    </motion.div>
  )
}

export default function SupportInbox() {
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const timer = setTimeout(
      () => setTick((t) => (t > TICKETS.length + TAIL_TICKS ? 0 : t + 1)),
      TICK_MS
    )
    return () => clearTimeout(timer)
  }, [tick])

  /* Entra uno por tick y solo se muestran los últimos VISIBLE, más nuevo arriba. */
  const arrived = TICKETS.slice(0, Math.min(tick, TICKETS.length))
  const shown = arrived.slice(-VISIBLE).reverse()

  return (
    <div
      className="rounded-2xl border overflow-hidden w-full"
      style={{ background: '#FFFFFF', borderColor: LINE, boxShadow: '0 12px 40px -18px rgba(10,10,10,0.18)' }}
    >
      {/* Header de app, no de navegador */}
      <div
        className="flex items-center justify-between gap-3 px-4 py-3 border-b"
        style={{ background: CREAM, borderColor: LINE }}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <div
            className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(6,182,212,0.14)' }}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke={ACCENT} strokeWidth={1.8} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
            </svg>
          </div>
          <div className="min-w-0">
            <div className="text-[11px] font-semibold leading-tight truncate" style={{ color: INK }}>Bandeja de atención</div>
            <div className="text-[9px] leading-tight" style={{ color: SOFT }}>4 canales conectados</div>
          </div>
        </div>

        <span
          className="inline-flex items-center gap-1.5 text-[9px] font-semibold px-2 py-1 rounded-full flex-shrink-0"
          style={{ background: '#FFFFFF', color: ACCENT, border: '1px solid rgba(6,182,212,0.3)' }}
        >
          <motion.span
            className="w-1.5 h-1.5 rounded-full inline-block"
            style={{ background: ACCENT_BRIGHT }}
            animate={{ opacity: [1, 0.25, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
          En vivo
        </span>
      </div>

      {/* Cola */}
      <div className="px-3 py-3" style={{ minHeight: '272px' }}>
        <AnimatePresence initial={false} mode="popLayout">
          {shown.map((ticket) => {
            const index = TICKETS.indexOf(ticket)
            return <Row key={ticket.id} ticket={ticket} age={tick - index - 1} />
          })}
        </AnimatePresence>

        {shown.length === 0 && (
          <div className="flex items-center justify-center h-[248px] text-[10px]" style={{ color: '#C4B9AA' }}>
            Esperando consultas…
          </div>
        )}
      </div>

      {/* Footer */}
      <div
        className="px-4 py-3 border-t flex items-center justify-between gap-3"
        style={{ borderColor: LINE, background: '#FBF9F6' }}
      >
        <span className="text-[10px]" style={{ color: SOFT }}>
          Tiempo de espera en cola
        </span>
        <span className="text-[10px] font-bold tabular-nums" style={{ color: ACCENT }}>
          0 min · 0 personas
        </span>
      </div>
    </div>
  )
}
