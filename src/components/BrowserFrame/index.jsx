'use client'

/**
 * Marco de navegador compartido por los mockups del sitio.
 * Antes estaba duplicado inline en las páginas de caso, en ServiceShowcase
 * y en FunnelBlueprint. Si necesitás variar el estilo del chrome, es acá.
 */
export default function BrowserFrame({ url, children, className = '' }) {
  return (
    <div
      className={`rounded-2xl border overflow-hidden w-full ${className}`}
      style={{ background: '#0D0D0D', borderColor: '#1E1E1E' }}
    >
      <div
        className="flex items-center gap-1.5 px-3.5 sm:px-4 py-3 border-b"
        style={{ background: '#111', borderColor: '#1E1E1E' }}
      >
        <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: '#FF5F57' }} />
        <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: '#FEBC2E' }} />
        <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: '#28C840' }} />
        <div
          className="ml-2.5 sm:ml-3 flex-1 min-w-0 rounded-md px-3 py-1 text-[11px] flex items-center gap-2"
          style={{ background: '#1A1A1A', color: '#555' }}
        >
          <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
          <span className="truncate">{url}</span>
        </div>
      </div>
      {children}
    </div>
  )
}
