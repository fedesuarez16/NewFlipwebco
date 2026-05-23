'use client'
import { motion } from 'framer-motion'

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
  return (
    <section id="como-trabajamos" className="py-24 lg:py-32" style={{ background: '#0A0A0A' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#7A6E64' }}>
            Proceso
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-white leading-tight">
            Cómo trabajamos
          </h2>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: '#9A8E83' }}>
            Un proceso claro y sin burocracia, orientado a resultados medibles desde el día uno.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#2A2A2A]">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-8 lg:p-10 ${i < steps.length - 1 ? 'border-b md:border-b-0 md:border-r border-[#2A2A2A] lg:border-b-0 lg:border-r' : ''}`}
            >
              <div
                className="text-5xl font-bold mb-6 leading-none"
                style={{ color: '#2A2A2A' }}
              >
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#7A6E64' }}>{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Value props */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-16 border-t border-[#2A2A2A] grid grid-cols-1 md:grid-cols-3 gap-10"
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
