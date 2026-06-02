'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.523 5.853L0 24l6.335-1.508C8.066 23.447 10.013 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.862 0-3.62-.487-5.15-1.342l-.37-.215-3.761.895.957-3.67-.24-.385C2.453 15.603 2 13.856 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
)

const inputClass =
  'border border-[#E2D9CC] rounded-xl px-4 py-3 text-sm text-[#0A0A0A] placeholder-[#B0A699] bg-white focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] focus:border-transparent transition-shadow w-full'

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', query: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await axios.post('/api/submitForm', formData)
      setStatus('success')
      setFormData({ name: '', email: '', company: '', query: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="py-24 lg:py-32" style={{ background: '#F5EFE6' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left col */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#9A8E83' }}>
              Contacto
            </span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-[#0A0A0A] leading-tight">
              Contanos tu<br /><span className="font-display italic font-normal">desafío</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed" style={{ color: '#6B6055' }}>
              Sin compromisos. En menos de 48 horas te respondemos con un diagnóstico técnico inicial gratuito.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=5491133370937"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-[#0A0A0A] hover:bg-[#2A2A2A] text-white font-semibold px-6 py-4 rounded-xl transition-colors w-fit"
              >
                <WhatsAppIcon />
                Escribinos por WhatsApp
              </a>
              <span className="text-sm pl-1" style={{ color: '#9A8E83' }}>o completá el formulario →</span>
            </div>

            <div className="mt-12 flex flex-col gap-3">
              {[
                'Diagnóstico técnico sin costo',
                'Respuesta en menos de 48 horas',
                'Sin compromiso de contratación',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm" style={{ color: '#6B6055' }}>
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 border border-[#C4B9AA]"
                    style={{ background: 'rgba(255,255,255,0.6)' }}
                  >
                    <svg className="w-3 h-3 text-[#0A0A0A]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right col - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 border border-[#E2D9CC] shadow-sm"
          >
            {status === 'success' ? (
              <div className="py-16 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 border border-[#D4C9BB]"
                  style={{ background: '#F5EFE6' }}
                >
                  <svg className="w-8 h-8 text-[#0A0A0A]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#0A0A0A]">Mensaje recibido</h3>
                <p className="mt-2" style={{ color: '#6B6055' }}>Te contactamos en menos de 48 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-[#0A0A0A]">Nombre *</label>
                    <input
                      type="text" name="name" required
                      value={formData.name} onChange={handleChange}
                      className={inputClass} placeholder="Tu nombre"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-[#0A0A0A]">Empresa</label>
                    <input
                      type="text" name="company"
                      value={formData.company} onChange={handleChange}
                      className={inputClass} placeholder="Nombre de empresa"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#0A0A0A]">Email *</label>
                  <input
                    type="email" name="email" required
                    value={formData.email} onChange={handleChange}
                    className={inputClass} placeholder="tu@empresa.com"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#0A0A0A]">¿Cuál es tu desafío? *</label>
                  <textarea
                    name="query" required rows={4}
                    value={formData.query} onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    placeholder="Describí el problema o proyecto que querés resolver..."
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm border border-[#E2D9CC] rounded-lg px-4 py-3" style={{ color: '#6B6055', background: '#F5EFE6' }}>
                    Hubo un error. Intentá de nuevo o contactanos por WhatsApp.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-[#0A0A0A] hover:bg-[#2A2A2A] text-white font-semibold py-4 rounded-xl transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-1"
                >
                  {status === 'loading' ? 'Enviando...' : 'Enviar mensaje →'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
