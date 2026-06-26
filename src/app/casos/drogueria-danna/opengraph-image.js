import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const runtime = 'nodejs'
export const alt = 'Droguería Danna × Flip — Caso de éxito'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  const flipLogoBuffer = readFileSync(join(process.cwd(), 'public/logo.png'))
  const dannaLogoBuffer = readFileSync(join(process.cwd(), 'public/images/DANNA.png'))

  const flipLogo = `data:image/png;base64,${flipLogoBuffer.toString('base64')}`
  const dannaLogo = `data:image/png;base64,${dannaLogoBuffer.toString('base64')}`

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
        {/* Sky ambient glow */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '500px',
            background: 'radial-gradient(ellipse at center, rgba(14,165,233,0.10) 0%, transparent 65%)',
            filter: 'blur(60px)',
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
                color: '#0ea5e9',
                fontSize: '22px',
                fontWeight: '300',
                lineHeight: 1,
              }}
            >
              ×
            </div>
            <div style={{ width: '28px', height: '1px', background: '#2A2A2A' }} />
          </div>

          {/* Droguería Danna logo */}
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
            <img src={dannaLogo} style={{ height: '42px', objectFit: 'contain' }} alt="Droguería Danna" />
          </div>
        </div>

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 18px',
            border: '1px solid rgba(14,165,233,0.3)',
            borderRadius: '999px',
            background: 'rgba(14,165,233,0.06)',
            marginBottom: '22px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#0ea5e9' }} />
          <span
            style={{
              color: '#0ea5e9',
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Caso de éxito · Operación interna
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
          Trazabilidad de punta a punta para la logística de Droguería Danna
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
          De la venta a la entrega · Facturación sincronizada · Desarrollado por Flip
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            height: '2px',
            background: 'linear-gradient(to right, transparent 10%, #0ea5e9 50%, transparent 90%)',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
