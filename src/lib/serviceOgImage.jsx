import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const ogSize = { width: 1200, height: 630 }

/**
 * Genera la OG image de una página de servicio a partir de su objeto en
 * src/data/services.js. Reutiliza la consola del hero como mockup estático.
 *
 * Restricciones de Satori a tener en cuenta si se edita:
 *  - TODO div con más de un hijo necesita `display: 'flex'` explícito.
 *  - No clipea texto: si no entra, envuelve y agrega una línea.
 */
export function renderServiceOgImage(service) {
  const { accent, eyebrow, meta, console: consoleData } = service

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
        {/* Glow de acento */}
        <div
          style={{
            position: 'absolute',
            top: '-140px',
            left: '-100px',
            width: '820px',
            height: '560px',
            background: `radial-gradient(ellipse at center, ${accent}24 0%, transparent 65%)`,
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
              border: `1px solid ${accent}4D`,
              borderRadius: '999px',
              background: `${accent}12`,
              alignSelf: 'flex-start',
              marginBottom: '24px',
            }}
          >
            <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: accent, display: 'flex' }} />
            <span
              style={{
                color: accent,
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              {eyebrow}
            </span>
          </div>

          {/* Titular */}
          <div
            style={{
              display: 'flex',
              color: '#FFFFFF',
              fontSize: '44px',
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: '-0.025em',
              maxWidth: '580px',
              marginBottom: '22px',
            }}
          >
            {meta.ogTitle}
          </div>

          {/* Bajada */}
          <div
            style={{
              display: 'flex',
              color: '#8A7E74',
              fontSize: '19px',
              lineHeight: 1.5,
              maxWidth: '540px',
            }}
          >
            {meta.ogDescription}
          </div>
        </div>

        {/* ── Consola ── */}
        <div style={{ display: 'flex', alignItems: 'center', padding: '0 50px 0 0', position: 'relative' }}>
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
            {/* Chrome */}
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
                {consoleData.url}
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
              <span style={{ color: '#FFFFFF', fontSize: '13px', fontWeight: 600 }}>{consoleData.title}</span>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  background: `${accent}1A`,
                }}
              >
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: accent, display: 'flex' }} />
                <span style={{ color: accent, fontSize: '11px', fontWeight: 500 }}>{consoleData.liveLabel}</span>
              </div>
            </div>

            {/* Filas */}
            <div style={{ display: 'flex', flexDirection: 'column', padding: '10px 12px' }}>
              {consoleData.rows.map((row) => (
                <div
                  key={row.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '11px',
                    padding: '9px 12px',
                    marginBottom: '6px',
                    borderRadius: '10px',
                    border: '1px solid #1C1C1C',
                    background: '#111111',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '22px',
                      height: '22px',
                      borderRadius: '7px',
                      background: `${accent}1F`,
                    }}
                  >
                    <svg width="12" height="12" fill="none" stroke={accent} strokeWidth={3} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <span style={{ color: '#FFFFFF', fontSize: '12px', fontWeight: 600 }}>{row.label}</span>
                    <span style={{ color: '#4A4A4A', fontSize: '10px', marginTop: '2px' }}>{row.detail}</span>
                  </div>

                  <span style={{ color: accent, fontSize: '11px', fontWeight: 600 }}>{row.value}</span>
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
              <span style={{ color: '#4A4A4A', fontSize: '11px' }}>{consoleData.footerLeft}</span>
              <span style={{ color: accent, fontSize: '11px', fontWeight: 600 }}>{consoleData.footerRight}</span>
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
            background: `linear-gradient(to right, transparent 8%, ${accent} 50%, transparent 92%)`,
          }}
        />
      </div>
    ),
    { ...ogSize }
  )
}
