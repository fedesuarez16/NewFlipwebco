'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const steps = [
  {
    number: '01',
    title: 'Diagnóstico',
    description: 'Analizamos tu stack tecnológico, procesos críticos y datos disponibles. Identificamos dónde la IA genera el mayor retorno.',
  },
  {
    number: '02',
    title: 'Arquitectura',
    description: 'Diseñamos la solución técnica: modelos, integraciones, infraestructura y roadmap de implementación. Sin promesas vacías.',
  },
  {
    number: '03',
    title: 'Desarrollo',
    description: 'Implementamos en sprints cortos con entregables tangibles. Prototipo funcional en las primeras dos semanas.',
  },
  {
    number: '04',
    title: 'Escala & Soporte',
    description: 'Monitoreamos, iteramos y optimizamos. Tus modelos mejoran con el tiempo y tu equipo queda capacitado.',
  },
]

export default function HowWeWork() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % steps.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const progress = active / (steps.length - 1)

  return (
    <section id="como-trabajamos" className="py-24 lg:py-32" style={{ background: '#0A0A0A' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="max-w-2xl mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#7A6E64' }}>
            Proceso
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-white leading-tight">
            Cómo trabajamos
          </h2>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: '#9A8E83' }}>
            Un proceso claro y sin burocracia, orientado a <span className="font-display italic" style={{ color: '#EAE0D5' }}>resultados medibles</span> desde el día uno.
          </p>
        </div>

        {/* ── Desktop: Horizontal Pipeline ── */}
        <div className="hidden lg:block relative">
          {/* Track line — spans from center of first node to center of last node */}
          <div
            className="absolute h-px"
            style={{ background: '#1E1E1E', top: '20px', left: '12.5%', right: '12.5%' }}
          >
            <motion.div
              className="absolute top-0 left-0 h-full"
              style={{ background: 'linear-gradient(90deg, #EAE0D5, #9A8478)' }}
              animate={{ width: `${progress * 100}%` }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            />
          </div>

          <div className="grid grid-cols-4">
            {steps.map((step, i) => {
              const isActive = i === active
              const isDone = i < active
              return (
                <button
                  key={step.number}
                  onClick={() => setActive(i)}
                  className="flex flex-col items-center text-center focus:outline-none"
                >
                  {/* Node */}
                  <div className="relative z-10 mb-8">
                    <motion.div
                      className="w-10 h-10 rounded-full flex items-center justify-center border-2"
                      animate={{
                        borderColor: isActive || isDone ? '#EAE0D5' : '#2A2A2A',
                        backgroundColor: isDone ? '#EAE0D5' : isActive ? 'rgba(234,224,213,0.07)' : 'transparent',
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {isDone ? (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        <motion.span
                          className="text-[11px] font-bold font-mono"
                          animate={{ color: isActive ? '#EAE0D5' : '#3A3A3A' }}
                          transition={{ duration: 0.4 }}
                        >
                          {step.number}
                        </motion.span>
                      )}
                    </motion.div>

                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full pointer-events-none"
                        style={{ border: '1px solid #EAE0D5' }}
                        initial={{ scale: 1, opacity: 0.8 }}
                        animate={{ scale: 2.4, opacity: 0 }}
                        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut' }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="px-4">
                    <motion.h3
                      className="text-sm font-semibold mb-3"
                      animate={{ color: isActive ? '#FFFFFF' : isDone ? '#6A6462' : '#333333' }}
                      transition={{ duration: 0.4 }}
                    >
                      {step.title}
                    </motion.h3>
                    <motion.p
                      className="text-xs leading-relaxed"
                      animate={{ color: isActive ? '#7A6E64' : '#2A2A2A' }}
                      transition={{ duration: 0.4 }}
                    >
                      {step.description}
                    </motion.p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* ── Mobile: Vertical Pipeline ── */}
        <div className="lg:hidden">
          {steps.map((step, i) => {
            const isActive = i === active
            const isDone = i < active
            const isLast = i === steps.length - 1
            return (
              <button
                key={step.number}
                onClick={() => setActive(i)}
                className="flex gap-5 w-full text-left focus:outline-none"
              >
                {/* Left: node + connector */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="relative z-10">
                    <motion.div
                      className="w-10 h-10 rounded-full flex items-center justify-center border-2"
                      animate={{
                        borderColor: isActive || isDone ? '#EAE0D5' : '#2A2A2A',
                        backgroundColor: isDone ? '#EAE0D5' : isActive ? 'rgba(234,224,213,0.07)' : 'transparent',
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {isDone ? (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        <motion.span
                          className="text-[11px] font-bold font-mono"
                          animate={{ color: isActive ? '#EAE0D5' : '#3A3A3A' }}
                          transition={{ duration: 0.4 }}
                        >
                          {step.number}
                        </motion.span>
                      )}
                    </motion.div>

                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full pointer-events-none"
                        style={{ border: '1px solid #EAE0D5' }}
                        initial={{ scale: 1, opacity: 0.8 }}
                        animate={{ scale: 2.4, opacity: 0 }}
                        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut' }}
                      />
                    )}
                  </div>

                  {!isLast && (
                    <div className="flex-1 w-px mt-2" style={{ background: '#1E1E1E', minHeight: '64px' }}>
                      <motion.div
                        className="w-full"
                        style={{ background: 'linear-gradient(180deg, #EAE0D5, #9A8478)' }}
                        animate={{ height: isDone ? '100%' : '0%' }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                      />
                    </div>
                  )}
                </div>

                {/* Right: content */}
                <div className="pb-10">
                  <motion.h3
                    className="text-base font-semibold mb-2 mt-2"
                    animate={{ color: isActive ? '#FFFFFF' : isDone ? '#6A6462' : '#333333' }}
                    transition={{ duration: 0.4 }}
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p
                    className="text-sm leading-relaxed"
                    animate={{ color: isActive ? '#7A6E64' : '#2A2A2A' }}
                    transition={{ duration: 0.4 }}
                  >
                    {step.description}
                  </motion.p>
                </div>
              </button>
            )
          })}
        </div>

        {/* Value props */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 pt-16 border-t border-[#2A2A2A] grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {[
            { title: 'Sin burocracia', desc: 'Comunicación directa con los ingenieros que construyen tu solución, no con project managers intermediarios.' },
            { title: 'ROI medible', desc: 'Definimos KPIs de negocio desde el inicio. Medimos reducción de costos, tiempo y errores en cada entrega.' },
            { title: 'Stack actual', desc: 'Usamos las herramientas enterprise más probadas del mercado: OpenAI, AWS, Databricks, Kubernetes y más.' },
          ].map((item) => (
            <div key={item.title}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#EAE0D5]" />
                <h4 className="text-white font-semibold">{item.title}</h4>
              </div>
              <p className="text-sm leading-relaxed pl-4" style={{ color: '#7A6E64' }}>{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
