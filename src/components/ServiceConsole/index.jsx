'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BrowserFrame from '@/components/BrowserFrame'

const STEP_MS = 1100
const HOLD_MS = 2600

/**
 * Consola animada genérica para el hero de las páginas de servicio.
 * Recorre las filas marcándolas como completadas una a una, sostiene el
 * estado final y vuelve a empezar. Todo el contenido llega por props para
 * no tener que escribir un mockup a medida por servicio.
 */
export default function ServiceConsole({
  url,
  title,
  liveLabel,
  rows,
  footerLeft,
  footerRight,
  accent = '#10B981',
}) {
  const [done, setDone] = useState(0)

  useEffect(() => {
    const isComplete = done >= rows.length
    const timer = setTimeout(
      () => setDone((d) => (d >= rows.length ? 0 : d + 1)),
      isComplete ? HOLD_MS : STEP_MS
    )
    return () => clearTimeout(timer)
  }, [done, rows.length])

  return (
    <BrowserFrame url={url}>
      {/* Toolbar */}
      <div
        className="flex items-center justify-between gap-3 px-3.5 sm:px-4 py-2.5 border-b"
        style={{ background: '#0F0F0F', borderColor: '#1A1A1A' }}
      >
        <span className="text-[11px] font-semibold text-white truncate">{title}</span>
        <span
          className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-medium px-2 py-1 rounded-full flex-shrink-0"
          style={{ background: `${accent}1A`, color: accent }}
        >
          <motion.span
            className="w-1.5 h-1.5 rounded-full inline-block"
            style={{ background: accent }}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
          {liveLabel}
        </span>
      </div>

      {/* Filas */}
      <div className="px-2.5 sm:px-3 py-2.5 sm:py-3">
        {rows.map((row, i) => {
          const isDone = i < done
          const isActive = i === done

          return (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center gap-2.5 sm:gap-3 rounded-xl px-3 sm:px-3.5 py-2.5 border mb-2 last:mb-0"
              style={{
                background: isActive ? `${accent}0A` : '#111111',
                borderColor: isActive ? `${accent}33` : '#1C1C1C',
              }}
            >
              {/* Indicador de estado */}
              <div
                className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: isDone || isActive ? `${accent}1F` : '#181818' }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isDone ? (
                    <motion.svg
                      key="check"
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-3 h-3"
                      fill="none"
                      stroke={accent}
                      strokeWidth={3}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </motion.svg>
                  ) : isActive ? (
                    <motion.span
                      key="spin"
                      className="w-3 h-3 rounded-full border-2"
                      style={{ borderColor: `${accent}40`, borderTopColor: accent }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
                    />
                  ) : (
                    <motion.span
                      key="idle"
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: '#333' }}
                    />
                  )}
                </AnimatePresence>
              </div>

              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-semibold text-white truncate leading-tight">
                  {row.label}
                </div>
                <div className="text-[9px] truncate leading-tight mt-0.5" style={{ color: '#4A4A4A' }}>
                  {row.detail}
                </div>
              </div>

              <span
                className="flex-shrink-0 text-[9px] font-medium tabular-nums"
                style={{ color: isDone ? accent : '#3A3A3A' }}
              >
                {isDone ? row.value : '··'}
              </span>
            </motion.div>
          )
        })}
      </div>

      {/* Footer */}
      <div
        className="px-3.5 sm:px-4 py-2.5 sm:py-3 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-3"
        style={{ borderColor: '#1A1A1A', background: '#0B0B0B' }}
      >
        <span className="text-[10px] leading-tight" style={{ color: '#4A4A4A' }}>
          {footerLeft}
        </span>
        <span
          className="text-[10px] font-semibold leading-tight flex-shrink-0"
          style={{ color: accent }}
        >
          {footerRight}
        </span>
      </div>
    </BrowserFrame>
  )
}
