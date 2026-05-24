'use client'

const logos = [
  '/images/yecyoc.png',
  '/images/lionseglogogris.png',
  '/images/DANNA.png',
  '/images/opting.png',
  '/images/praset.png',
  '/images/nunez.png',
  '/images/jmotors.png',
  '/images/aserraderogris.png',
  '/images/tecxio.png',
  '/images/landsBroker.png',
  '/images/sinai.png',
  '/images/delsur.png',
  '/images/bj.png',
]

const allLogos = [...logos, ...logos]

export default function ClientsSection() {
  return (
    <section className="py-10 border-y border-[#E2D9CC] overflow-hidden" style={{ background: '#ffffff' }}>

      {/* Marquee strip */}
      <div className="relative">
        <div
          className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #ffffff, transparent)' }}
        />
        <div
          className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #ffffff, transparent)' }}
        />

        <div className="flex carousel-track gap-10 items-center px-10">
          {allLogos.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ width: '160px', height: '80px' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo}
                alt={`Cliente ${(i % logos.length) + 1}`}
                className="max-w-full max-h-full object-contain transition-all duration-300"
                style={{ filter: 'grayscale(100%) opacity(0.55)' }}
                onMouseEnter={e => { e.currentTarget.style.filter = 'grayscale(0%) opacity(1)' }}
                onMouseLeave={e => { e.currentTarget.style.filter = 'grayscale(100%) opacity(0.55)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
