'use client'
import { motion } from 'framer-motion'

const ACCENT = '#06B6D4'

/* Volumen por hora. Las horas nocturnas bajan pero nunca llegan a cero:
   ese es el argumento visual del 24/7, no el número grande del KPI. */
const HOURS = [
  { h: 0, v: 22 }, { h: 1, v: 16 }, { h: 2, v: 12 }, { h: 3, v: 14 },
  { h: 4, v: 9 }, { h: 5, v: 11 }, { h: 6, v: 19 }, { h: 7, v: 34 },
  { h: 8, v: 56 }, { h: 9, v: 78 }, { h: 10, v: 92 }, { h: 11, v: 88 },
  { h: 12, v: 71 }, { h: 13, v: 64 }, { h: 14, v: 83 }, { h: 15, v: 95 },
  { h: 16, v: 90 }, { h: 17, v: 74 }, { h: 18, v: 61 }, { h: 19, v: 52 },
  { h: 20, v: 44 }, { h: 21, v: 38 }, { h: 22, v: 31 }, { h: 23, v: 26 },
]

const NIGHT_START = 22
const NIGHT_END = 7
const MAX = Math.max(...HOURS.map((x) => x.v))

const KPIS = [
  { value: '40s', label: 'Primera respuesta', hint: 'antes: 4 h 20 m' },
  { value: '87%', label: 'Resuelto sin intervención', hint: 'sobre 3.175 consultas' },
  { value: '4,7', label: 'Satisfacción /5', hint: 'antes: 3,9' },
]

const isNight = (h) => h >= NIGHT_START || h < NIGHT_END

export default function SupportPulse() {
  return (
    <div
      className="rounded-2xl border overflow-hidden w-full"
      style={{ background: '#0D0D0D', borderColor: '#1E1E1E' }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between gap-3 px-5 py-4 border-b"
        style={{ background: '#111', borderColor: '#1E1E1E' }}
      >
        <div>
          <div className="text-[11px] font-semibold text-white leading-tight">Pulso de atención</div>
          <div className="text-[9px] leading-tight mt-0.5" style={{ color: '#4A4A4A' }}>Últimos 30 días</div>
        </div>
        <span
          className="text-[9px] font-medium px-2 py-1 rounded-full flex-shrink-0"
          style={{ background: 'rgba(6,182,212,0.10)', color: ACCENT }}
        >
          Todos los canales
        </span>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-3 divide-x" style={{ borderColor: '#1A1A1A' }}>
        {KPIS.map((k, i) => (
          <motion.div
            key={k.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="px-4 py-5"
            style={{ borderColor: '#1A1A1A' }}
          >
            <div className="text-2xl font-bold text-white leading-none tabular-nums">{k.value}</div>
            <div className="text-[9px] font-medium mt-2 leading-tight" style={{ color: '#7A6E64' }}>
              {k.label}
            </div>
            <div className="text-[9px] mt-1 leading-tight" style={{ color: '#3E3E3E' }}>
              {k.hint}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Volumen por hora */}
      <div className="px-5 pt-5 pb-4 border-t" style={{ borderColor: '#1A1A1A' }}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[9px] font-semibold uppercase tracking-widest" style={{ color: '#4A4A4A' }}>
            Consultas por hora
          </span>
          <span className="inline-flex items-center gap-1.5 text-[9px]" style={{ color: '#4A4A4A' }}>
            <span className="w-2 h-2 rounded-sm" style={{ background: 'rgba(6,182,212,0.32)' }} />
            madrugada
          </span>
        </div>

        <div className="flex items-end gap-[3px] h-20">
          {HOURS.map((hour, i) => (
            <motion.div
              key={hour.h}
              initial={{ height: 0 }}
              whileInView={{ height: `${Math.max((hour.v / MAX) * 100, 7)}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.022, ease: [0.4, 0, 0.2, 1] }}
              className="flex-1 rounded-[2px] min-w-0"
              style={{
                background: isNight(hour.h)
                  ? 'rgba(6,182,212,0.32)'
                  : `linear-gradient(180deg, ${ACCENT} 0%, rgba(6,182,212,0.55) 100%)`,
              }}
            />
          ))}
        </div>

        <div className="flex justify-between mt-2 text-[9px] tabular-nums" style={{ color: '#3E3E3E' }}>
          {['00', '06', '12', '18', '23'].map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        className="px-5 py-3 border-t flex items-center justify-between gap-3"
        style={{ borderColor: '#1A1A1A', background: '#0B0B0B' }}
      >
        <span className="text-[10px]" style={{ color: '#4A4A4A' }}>
          Entre las 22 y las 7 entraron 130 consultas
        </span>
        <span className="text-[10px] font-semibold flex-shrink-0" style={{ color: ACCENT }}>
          Todas atendidas
        </span>
      </div>
    </div>
  )
}
