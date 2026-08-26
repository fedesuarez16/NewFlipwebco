import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const runtime = 'nodejs'
export const alt = 'Automatizá la atención al cliente de tu empresa — Flip'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/* Tema claro, igual que la página. `ACCENT` es el cian legible sobre claro;
   `ACCENT_BRIGHT` solo para elementos gráficos. */
const ACCENT = '#0E7490'
const ACCENT_BRIGHT = '#06B6D4'
const INK = '#0A0A0A'
const BODY = '#6B6055'
const SOFT = '#9A8E83'
const LINE = '#E2D9CC'
const CREAM = '#F5EFE6'

/* Colores de canal oscurecidos para que se lean sobre fondo claro. */
const CHANNELS = [
  { label: 'WhatsApp', color: '#0D7A3E' },
  { label: 'Instagram', color: '#C71E5E' },
  { label: 'Chat web', color: '#0E7490' },
  { label: 'Email', color: '#7A6E64' },
]

/* Tres consultas lado a lado en vez del panel vertical del hero: mismo relato,
   otra UI. La tercera deriva a una persona — la promesa se sostiene también acá. */
const TICKETS = [
  {
    initials: 'MG',
    name: 'Martín G.',
    channel: { label: 'WhatsApp', color: '#0D7A3E' },
    text: '¿Dónde está mi pedido #4821?',
    status: 'Resuelto en 12s',
  },
  {
    initials: 'CP',
    name: 'Carla P.',
    channel: { label: 'Instagram', color: '#C71E5E' },
    text: '¿Hacen envíos a Córdoba?',
    status: 'Resuelto en 8s',
  },
  {
    initials: 'DA',
    name: 'Diego A.',
    channel: { label: 'Chat web', color: '#0E7490' },
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
          background: '#FFFFFF',
          fontFamily: 'Inter, system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Halo cian centrado — refuerza la simetría del layout */}
        <div
          style={{
            position: 'absolute',
            top: '-230px',
            left: '190px',
            width: '820px',
            height: '640px',
            background: 'radial-gradient(ellipse at center, rgba(6,182,212,0.20) 0%, transparent 68%)',
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
          {/* `public/logo.png` es blanco: sobre fondo claro va dentro de una
              píldora oscura, que además ancla la marca en el diseño light. */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '11px 20px',
              borderRadius: '12px',
              background: INK,
              marginBottom: '24px',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo} style={{ height: '26px', objectFit: 'contain' }} alt="Flip" />
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              border: '1px solid rgba(6,182,212,0.4)',
              borderRadius: '999px',
              background: 'rgba(6,182,212,0.09)',
              marginBottom: '22px',
            }}
          >
            <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: ACCENT_BRIGHT, display: 'flex' }} />
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
              color: INK,
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
              color: BODY,
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
                border: `1px solid ${t.escalated ? LINE : 'rgba(6,182,212,0.38)'}`,
                background: t.escalated
                  ? '#FFFFFF'
                  : 'linear-gradient(160deg, rgba(6,182,212,0.10) 0%, #FFFFFF 62%)',
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
                    background: CREAM,
                    color: SOFT,
                    fontSize: '11px',
                    fontWeight: 700,
                  }}
                >
                  {t.initials}
                </div>
                <span style={{ color: INK, fontSize: '14px', fontWeight: 600 }}>{t.name}</span>
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
                  <span style={{ color: t.channel.color, fontSize: '11px', fontWeight: 600 }}>{t.channel.label}</span>
                </div>
              </div>

              {/* Consulta */}
              <div style={{ display: 'flex', color: BODY, fontSize: '14px', marginTop: '14px' }}>
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
                  borderTop: `1px solid ${LINE}`,
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
                    background: t.escalated ? CREAM : ACCENT_BRIGHT,
                  }}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={t.escalated ? '#7A6E5F' : '#FFFFFF'}
                    strokeWidth={t.escalated ? 2.6 : 3.4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={t.escalated ? 'M4 12h15m0 0l-6-6m6 6l-6 6' : 'M4.5 12.75l6 6 9-13.5'} />
                  </svg>
                </div>
                <span
                  style={{
                    color: t.escalated ? '#7A6E5F' : ACCENT,
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
              <span style={{ color: SOFT, fontSize: '14px', fontWeight: 500 }}>{c.label}</span>
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
            height: '3px',
            display: 'flex',
            background: `linear-gradient(to right, transparent 8%, ${ACCENT_BRIGHT} 50%, transparent 92%)`,
          }}
        />
      </div>
    ),
    { ...size }
  )
}
