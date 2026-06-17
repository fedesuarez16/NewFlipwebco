import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const runtime = 'nodejs'
export const alt = 'Futbolink × Flipwebco — Caso de éxito'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  const flipLogoBuffer = readFileSync(join(process.cwd(), 'public/images/logosoloblanco.png'))
  const futbolinkLogoBuffer = readFileSync(join(process.cwd(), 'public/images/futbolink-logo.png'))

  const flipLogo = `data:image/png;base64,${flipLogoBuffer.toString('base64')}`
  const futbolinkLogo = `data:image/png;base64,${futbolinkLogoBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0A0A',
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Inter, system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Green ambient glow */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '500px',
            background: 'radial-gradient(ellipse at center, rgba(34,197,94,0.10) 0%, transparent 65%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Subtle grid lines */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Logos row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            marginBottom: '44px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Flip logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#111111',
              border: '1px solid #1E1E1E',
              borderRadius: '16px',
              padding: '16px 28px',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={flipLogo} style={{ height: '42px', objectFit: 'contain' }} alt="Flipwebco" />
          </div>

          {/* Connector */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <div style={{ width: '28px', height: '1px', background: '#2A2A2A' }} />
            <div
              style={{
                color: '#22c55e',
                fontSize: '22px',
                fontWeight: '300',
                lineHeight: 1,
              }}
            >
              ×
            </div>
            <div style={{ width: '28px', height: '1px', background: '#2A2A2A' }} />
          </div>

          {/* Futbolink logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#111111',
              border: '1px solid #1E1E1E',
              borderRadius: '16px',
              padding: '16px 28px',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={futbolinkLogo} style={{ height: '42px', objectFit: 'contain' }} alt="Futbolink" />
          </div>
        </div>

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 18px',
            border: '1px solid rgba(34,197,94,0.3)',
            borderRadius: '999px',
            background: 'rgba(34,197,94,0.06)',
            marginBottom: '22px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e' }} />
          <span
            style={{
              color: '#22c55e',
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Caso de éxito · Plataforma activa
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            color: '#FFFFFF',
            fontSize: '50px',
            fontWeight: '700',
            textAlign: 'center',
            lineHeight: '1.1',
            maxWidth: '880px',
            marginBottom: '18px',
            position: 'relative',
            zIndex: 1,
            letterSpacing: '-0.02em',
          }}
        >
          La plataforma que conecta el talento del fútbol global
        </div>

        {/* Subtitle */}
        <div
          style={{
            color: '#7A6E64',
            fontSize: '18px',
            textAlign: 'center',
            maxWidth: '680px',
            position: 'relative',
            zIndex: 1,
            lineHeight: '1.5',
          }}
        >
          +8.000 usuarios · Europa & Latinoamérica · Desarrollado por Flipwebco
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            height: '2px',
            background: 'linear-gradient(to right, transparent 10%, #22c55e 50%, transparent 90%)',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
