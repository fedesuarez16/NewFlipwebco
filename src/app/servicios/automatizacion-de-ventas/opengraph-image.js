import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const runtime = 'nodejs'
export const alt = 'Automatizá tu proceso de ventas de punta a punta — Flip'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const ACCENT = '#10B981'

/* Ancho útil dentro del mockup: 470 de card - 18 de padding a cada lado */
const BAR_TRACK = 434

const STAGES = [
  { n: '01', name: 'Captación',    count: '1.240', pct: '100%',  width: 100 },
  { n: '02', name: 'Calificación', count: '486',   pct: '39%',   width: 78 },
  { n: '03', name: 'Contacto',     count: '312',   pct: '25%',   width: 62 },
  { n: '04', name: 'Reunión',      count: '148',   pct: '11,9%', width: 44 },
  { n: '05', name: 'Propuesta',    count: '74',    pct: '6%',    width: 30 },
  { n: '06', name: 'Cierre',       count: '31',    pct: '2,5%',  width: 18 },
]

const STATS = [
  { value: '2 fases', label: 'Diseño y automatización' },
  { value: '4-6 sem', label: 'Al sistema funcionando' },
  { value: '24/7', label: 'No duerme ni se olvida' },
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
          background: '#0A0A0A',
          fontFamily: 'Inter, system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Glow verde de ambiente */}
        <div
          style={{
            position: 'absolute',
            top: '-140px',
            left: '-100px',
            width: '820px',
            height: '560px',
            background: 'radial-gradient(ellipse at center, rgba(16,185,129,0.13) 0%, transparent 65%)',
            filter: 'blur(60px)',
            display: 'flex',
          }}
        />

        {/* ── Columna de texto ── */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '660px',
            padding: '56px 0 56px 60px',
            position: 'relative',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} style={{ height: '30px', objectFit: 'contain', marginBottom: '30px' }} alt="Flip" />

          {/* Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              border: '1px solid rgba(16,185,129,0.3)',
              borderRadius: '999px',
              background: 'rgba(16,185,129,0.07)',
              alignSelf: 'flex-start',
              marginBottom: '24px',
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
              Automatización de ventas
            </span>
          </div>

          {/* Titular */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              color: '#FFFFFF',
              fontSize: '42px',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              marginBottom: '22px',
            }}
          >
            <span>Automatizá tu proceso</span>
            <span>de ventas de punta a punta.</span>
          </div>

          {/* Bajada */}
          <div
            style={{
              display: 'flex',
              color: '#8A7E74',
              fontSize: '19px',
              lineHeight: 1.5,
              maxWidth: '540px',
              marginBottom: '34px',
            }}
          >
            Agentes de IA que captan, califican, contactan y agendan reuniones solos.
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', alignItems: 'stretch', gap: '26px' }}>
            {STATS.map((s, i) => (
              <div key={s.value} style={{ display: 'flex', alignItems: 'stretch', gap: '26px' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ color: '#FFFFFF', fontSize: '22px', fontWeight: 700 }}>{s.value}</span>
                  <span style={{ color: '#4A4A4A', fontSize: '13px', marginTop: '3px' }}>{s.label}</span>
                </div>
                {i < STATS.length - 1 && (
                  <div style={{ width: '1px', background: '#1E1E1E', display: 'flex' }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Mockup del embudo ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0 50px 0 0',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '470px',
              borderRadius: '16px',
              border: '1px solid #1E1E1E',
              background: '#0D0D0D',
              overflow: 'hidden',
            }}
          >
            {/* Chrome del navegador */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
                padding: '12px 16px',
                background: '#111111',
                borderBottom: '1px solid #1E1E1E',
              }}
            >
              <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#FF5F57', display: 'flex' }} />
              <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#FEBC2E', display: 'flex' }} />
              <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#28C840', display: 'flex' }} />
              <div
                style={{
                  display: 'flex',
                  marginLeft: '10px',
                  padding: '4px 12px',
                  borderRadius: '6px',
                  background: '#1A1A1A',
                  color: '#555555',
                  fontSize: '12px',
                }}
              >
                crm.tuempresa.com/embudo
              </div>
            </div>

            {/* Toolbar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '11px 18px',
                background: '#0F0F0F',
                borderBottom: '1px solid #1A1A1A',
              }}
            >
              <span style={{ color: '#FFFFFF', fontSize: '13px', fontWeight: 600 }}>Embudo principal</span>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  background: 'rgba(16,185,129,0.10)',
                }}
              >
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: ACCENT, display: 'flex' }} />
                <span style={{ color: ACCENT, fontSize: '11px', fontWeight: 500 }}>Automatización activa</span>
              </div>
            </div>

            {/* Filas del embudo */}
            <div style={{ display: 'flex', flexDirection: 'column', padding: '10px 18px' }}>
              {STAGES.map((s) => (
                <div
                  key={s.n}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    paddingTop: '9px',
                    paddingBottom: '9px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                      <span style={{ color: ACCENT, fontSize: '11px', fontWeight: 700 }}>{s.n}</span>
                      <span style={{ color: '#FFFFFF', fontSize: '13px', fontWeight: 600 }}>{s.name}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                      <span style={{ color: '#FFFFFF', fontSize: '13px', fontWeight: 700 }}>{s.count}</span>
                      <span style={{ color: 'rgba(16,185,129,0.75)', fontSize: '11px' }}>{s.pct}</span>
                    </div>
                  </div>

                  {/* Barra proporcional */}
                  <div
                    style={{
                      display: 'flex',
                      marginTop: '7px',
                      width: `${BAR_TRACK}px`,
                      height: '6px',
                      borderRadius: '999px',
                      background: '#161616',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        width: `${Math.round((BAR_TRACK * s.width) / 100)}px`,
                        height: '6px',
                        borderRadius: '999px',
                        background: `linear-gradient(90deg, ${ACCENT} 0%, rgba(16,185,129,0.4) 100%)`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '11px 18px',
                borderTop: '1px solid #1A1A1A',
                background: '#0B0B0B',
              }}
            >
              <span style={{ color: '#4A4A4A', fontSize: '11px' }}>6 etapas · sin carga manual</span>
              <span style={{ color: ACCENT, fontSize: '11px', fontWeight: 600 }}>Conversión 2,5%</span>
            </div>
          </div>
        </div>

        {/* Línea de acento inferior */}
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
