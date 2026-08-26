import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const runtime = 'nodejs'
export const alt = 'Automatizá la atención al cliente de tu empresa — Flip'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const ACCENT = '#06B6D4'
const MUTED = '#9A8E83'

const CHANNELS = {
  whatsapp: { label: 'WhatsApp', color: '#25D366' },
  instagram: { label: 'Instagram', color: '#E1306C' },
  web: { label: 'Chat web', color: '#06B6D4' },
  email: { label: 'Email', color: '#9A8E83' },
}

/* Misma bandeja que el hero: el ticket derivado sostiene la promesa de que
   hay consultas que siempre terminan en una persona. */
const TICKETS = [
  { initials: 'MG', name: 'Martín G.', channel: 'whatsapp', text: '¿Dónde está mi pedido #4821?', status: '12s' },
  { initials: 'CP', name: 'Carla P.', channel: 'instagram', text: '¿Hacen envíos a Córdoba capital?', status: '8s' },
  { initials: 'JR', name: 'Julián R.', channel: 'email', text: 'Necesito la factura de septiembre', status: '21s' },
  { initials: 'DA', name: 'Diego A.', channel: 'whatsapp', text: 'El producto llegó roto, quiero reclamar', status: 'Valeria', escalated: true },
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
        {/* Glow cian de ambiente */}
        <div
          style={{
            position: 'absolute',
            top: '-140px',
            left: '-100px',
            width: '820px',
            height: '560px',
            background: 'radial-gradient(ellipse at center, rgba(6,182,212,0.13) 0%, transparent 65%)',
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
            width: '640px',
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
              border: '1px solid rgba(6,182,212,0.3)',
              borderRadius: '999px',
              background: 'rgba(6,182,212,0.07)',
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
              Atención al cliente
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
              marginBottom: '20px',
            }}
          >
            <span>Automatizá la atención al</span>
            <span>cliente de tu empresa.</span>
          </div>

          {/* Bajada */}
          <div
            style={{
              display: 'flex',
              color: '#8A7E74',
              fontSize: '19px',
              lineHeight: 1.5,
              maxWidth: '520px',
              marginBottom: '32px',
            }}
          >
            Agentes de IA que atienden 24/7, consultan tus sistemas y resuelven la gestión completa.
          </div>

          {/* Canales atendidos */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {Object.values(CHANNELS).map((c) => (
              <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: c.color, display: 'flex' }} />
                <span style={{ color: '#6A6058', fontSize: '14px', fontWeight: 500 }}>{c.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Mockup de la bandeja ── */}
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
              width: '450px',
              borderRadius: '16px',
              border: '1px solid #1E1E1E',
              background: '#0D0D0D',
              overflow: 'hidden',
            }}
          >
            {/* Header de app */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 18px',
                background: '#111111',
                borderBottom: '1px solid #1E1E1E',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: 600 }}>Bandeja de atención</span>
                <span style={{ color: '#4A4A4A', fontSize: '11px', marginTop: '2px' }}>4 canales conectados</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  background: 'rgba(6,182,212,0.10)',
                }}
              >
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: ACCENT, display: 'flex' }} />
                <span style={{ color: ACCENT, fontSize: '11px', fontWeight: 500 }}>En vivo</span>
              </div>
            </div>

            {/* Tickets */}
            <div style={{ display: 'flex', flexDirection: 'column', padding: '12px', gap: '8px' }}>
              {TICKETS.map((t) => {
                const channel = CHANNELS[t.channel]
                return (
                  <div
                    key={t.initials}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '11px 12px',
                      borderRadius: '12px',
                      border: '1px solid #1A1A1A',
                      background: '#0B0B0B',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: '#1E1E1E',
                        color: MUTED,
                        fontSize: '11px',
                        fontWeight: 700,
                      }}
                    >
                      {t.initials}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                        <span style={{ color: '#FFFFFF', fontSize: '12px', fontWeight: 600 }}>{t.name}</span>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            padding: '2px 6px',
                            borderRadius: '4px',
                            background: `${channel.color}14`,
                          }}
                        >
                          <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: channel.color, display: 'flex' }} />
                          <span style={{ color: channel.color, fontSize: '10px', fontWeight: 500 }}>{channel.label}</span>
                        </div>
                      </div>
                      <span style={{ color: '#4A4A4A', fontSize: '11px', marginTop: '3px' }}>{t.text}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span
                        style={{
                          color: t.escalated ? MUTED : ACCENT,
                          fontSize: '11px',
                          fontWeight: 700,
                        }}
                      >
                        {t.escalated ? `→ ${t.status}` : `✓ ${t.status}`}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Footer */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 18px',
                borderTop: '1px solid #1A1A1A',
                background: '#0B0B0B',
              }}
            >
              <span style={{ color: '#4A4A4A', fontSize: '11px' }}>Tiempo de espera en cola</span>
              <span style={{ color: ACCENT, fontSize: '11px', fontWeight: 600 }}>0 min · 0 personas</span>
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
