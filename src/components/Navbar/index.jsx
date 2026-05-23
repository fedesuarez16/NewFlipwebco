'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] border-b border-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/icon.png"
              alt="Flipwebco"
              width={48}
              height={48}
              className="object-contain"
            />
            <span className="font-bold text-lg text-white tracking-tight">Flipwebco</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#servicios" className="text-sm text-[#888] hover:text-white transition-colors font-medium">
              Servicios
            </a>
            <a href="#como-trabajamos" className="text-sm text-[#888] hover:text-white transition-colors font-medium">
              Proceso
            </a>
            <a href="#contacto" className="text-sm text-[#888] hover:text-white transition-colors font-medium">
              Contacto
            </a>
            <a
              href="#contacto"
              className="bg-white text-[#0A0A0A] text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#F5EFE6] transition-colors"
            >
              Hablemos →
            </a>
          </div>

          <button
            className="md:hidden p-2 flex flex-col gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`w-6 h-0.5 bg-white block transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-white block transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-white block transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-[#1E1E1E] px-6 py-5 flex flex-col gap-4">
          <a href="#servicios" onClick={close} className="text-[#888] hover:text-white font-medium py-1 transition-colors">Servicios</a>
          <a href="#como-trabajamos" onClick={close} className="text-[#888] hover:text-white font-medium py-1 transition-colors">Proceso</a>
          <a href="#contacto" onClick={close} className="text-[#888] hover:text-white font-medium py-1 transition-colors">Contacto</a>
          <a href="#contacto" onClick={close} className="bg-white text-[#0A0A0A] text-center py-3 rounded-lg font-semibold mt-1">
            Hablemos →
          </a>
        </div>
      )}
    </nav>
  )
}
