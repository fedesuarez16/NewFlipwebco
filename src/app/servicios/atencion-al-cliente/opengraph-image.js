import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const runtime = 'nodejs'
export const alt = 'Automatizá la atención al cliente de tu empresa — Flip'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const ACCENT = '#06B6D4'
const MUTED = '#9A8E83'

const CHANNELS = [
  { label: 'WhatsApp', color: '#25D366' },
  { label: 'Instagram', color: '#E1306C' },
  { label: 'Chat web', color: '#06B6D4' },
  { label: 'Email', color: '#9A8E83' },
]

/* Tres consultas lado a lado en vez del panel vertical del hero: mismo relato,
   otra UI. La tercera deriva a una persona — la promesa se sostiene también acá. */
const TICKETS = [
  {
    initials: 'MG',
    name: 'Martín G.',
    channel: { label: 'WhatsApp', color: '#25D366' },
    text: '¿Dónde está mi pedido #4821?',
    status: 'Resuelto en 12s',
  },
  {
    initials: 'CP',
    name: 'Carla P.',
    channel: { label: 'Instagram', color: '#E1306C' },
    text: '¿Hacen envíos a Córdoba?',
    status: 'Resuelto en 8s',
  },
  {
    initials: 'DA',
    name: 'Diego A.',
    channel: { label: 'Chat web', color: '#06B6D4' },
    text: 'Llegó roto, quiero reclamar',
    status: 'Derivado a Valeria',
    escalated: true,
  },
]

export default function Image() {
  const logoBuffer = readFileSync(join(process.cwd(), 'public/logo.png'))
  const logo = `data:image/png;base64,${logoBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0A0A0A',
          fontFamily: 'Inter, system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Glow centrado — refuerza la simetría del layout */}
        <div
          style={{
            position: 'absolute',
            top: '-220px',
            left: '190px',
            width: '820px',
            height: '620px',
            background: 'radial-gradient(ellipse at center, rgba(6,182,212,0.16) 0%, transparent 66%)',
            filter: 'blur(70px)',
            display: 'flex',
          }}
        />

        {/* ── Bloque de texto centrado ── */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            padding: '0 70px',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} style={{ height: '28px', objectFit: 'contain', marginBottom: '24px' }} alt="Flip" />

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              border: '1px solid rgba(6,182,212,0.3)',
              borderRadius: '999px',
              background: 'rgba(6,182,212,0.07)',
              marginBottom: '22px',
            }}
          >
            <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: ACCENT, display: 'flex' }} />
            <span
              style={{
                color: ACCENT,
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Atención al cliente y soporte
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: '#FFFFFF',
              fontSize: '48px',
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: '-0.028em',
              textAlign: 'center',
              marginBottom: '18px',
            }}
          >
            <span>Automatizá la atención al cliente</span>
            <span>de tu empresa.</span>
          </div>

          <div
            style={{
              display: 'flex',
              color: '#8A7E74',
              fontSize: '20px',
              lineHeight: 1.45,
              textAlign: 'center',
              maxWidth: '760px',
              marginBottom: '38px',
            }}
          >
            Agentes de IA que responden en segundos, consultan tus sistemas y resuelven la gestión completa.
          </div>
        </div>

        {/* ── Tres consultas resueltas, en fila ── */}
        <div style={{ display: 'flex', gap: '20px', position: 'relative' }}>
          {TICKETS.map((t) => (
            <div
              key={t.initials}
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '336px',
                padding: '18px',
                borderRadius: '14px',
                border: `1px solid ${t.escalated ? '#1E1E1E' : 'rgba(6,182,212,0.22)'}`,
                background: t.escalated
                  ? '#0C0C0C'
                  : 'linear-gradient(160deg, rgba(6,182,212,0.07) 0%, #0C0C0C 62%)',
              }}
            >
              {/* Cliente y canal */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    background: '#1E1E1E',
                    color: MUTED,
                    fontSize: '11px',
                    fontWeight: 700,
                  }}
                >
                  {t.initials}
                </div>
                <span style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: 600 }}>{t.name}</span>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '3px 8px',
                    borderRadius: '5px',
                    background: `${t.channel.color}14`,
                  }}
                >
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: t.channel.color, display: 'flex' }} />
                  <span style={{ color: t.channel.color, fontSize: '11px', fontWeight: 500 }}>{t.channel.label}</span>
                </div>
              </div>

              {/* Consulta */}
              <div style={{ display: 'flex', color: '#8A8A8A', fontSize: '14px', marginTop: '14px' }}>
                {t.text}
              </div>

              {/* Resultado */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '7px',
                  marginTop: '16px',
                  paddingTop: '14px',
                  borderTop: '1px solid #1A1A1A',
                }}
              >
                {/* Los glifos ✓ y → no existen en la fuente de Satori: van como SVG. */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '17px',
                    height: '17px',
                    borderRadius: '50%',
                    background: t.escalated ? 'rgba(154,142,131,0.18)' : ACCENT,
                  }}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={t.escalated ? MUTED : '#0A0A0A'}
                    strokeWidth={t.escalated ? 2.6 : 3.4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={t.escalated ? 'M4 12h15m0 0l-6-6m6 6l-6 6' : 'M4.5 12.75l6 6 9-13.5'} />
                  </svg>
                </div>
                <span
                  style={{
                    color: t.escalated ? MUTED : ACCENT,
                    fontSize: '13px',
                    fontWeight: 600,
                  }}
                >
                  {t.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Canales atendidos ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '22px', marginTop: '34px', position: 'relative' }}>
          {CHANNELS.map((c) => (
            <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: c.color, display: 'flex' }} />
              <span style={{ color: '#5F564F', fontSize: '14px', fontWeight: 500 }}>{c.label}</span>
            </div>
          ))}
        </div>

        {/* Línea de acento inferior — firma compartida con el resto del sitio */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '2px',
            display: 'flex',
            background: `linear-gradient(to right, transparent 8%, ${ACCENT} 50%, transparent 92%)`,
          }}
        />
      </div>
    ),
    { ...size }
  )
}
