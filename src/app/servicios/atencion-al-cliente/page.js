'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import FooterSection from '@/components/FooterSection'
import SupportInbox from '@/components/SupportInbox'
import SupportAgentConsole from '@/components/SupportAgentConsole'
import SupportPulse from '@/components/SupportPulse'

/* Tema claro. `ACCENT` es el cian legible sobre fondo claro (contraste AA);
   `ACCENT_BRIGHT` es el cian pleno y va SOLO en elementos gráficos —como texto
   sobre blanco da 2,4:1 y es ilegible. */
const ACCENT = '#0E7490'
const ACCENT_BRIGHT = '#06B6D4'
const INK = '#0A0A0A'
const BODY = '#6B6055'
const SOFT = '#9A8E83'
const LINE = '#E2D9CC'
const CREAM = '#F5EFE6'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.4, 0, 0.2, 1] },
  }),
}

/* Colores de canal oscurecidos para que se lean sobre fondo claro. */
const channels = [
  { name: 'WhatsApp', color: '#0D7A3E' },
  { name: 'Instagram', color: '#C71E5E' },
  { name: 'Chat web', color: '#0E7490' },
  { name: 'Email', color: '#7A6E64' },
  { name: 'Messenger', color: '#0068CC' },
]

/* La comparación es el corazón de la sección del problema: misma consulta,
   dos operaciones distintas. */
const comparison = [
  {
    moment: 'Entra una consulta un sábado a las 21:40',
    before: 'Queda sin leer hasta el lunes a la mañana.',
    after: 'Se responde a los 40 segundos, con el dato real del sistema.',
  },
  {
    moment: 'El cliente pregunta dónde está su pedido',
    before: 'Alguien abre el ERP, busca, copia y pega. Diez minutos.',
    after: 'El agente consulta el ERP y responde con la fecha de entrega.',
  },
  {
    moment: 'Pide cambiar la dirección de envío',
    before: 'Se abre un ticket y se resuelve al día siguiente, si se acuerdan.',
    after: 'Se verifica con el transportista y se ejecuta el cambio ahí mismo.',
  },
  {
    moment: 'Dos clientes hacen la misma pregunta',
    before: 'Reciben dos respuestas distintas según a quién le tocó.',
    after: 'Reciben la misma respuesta aprobada, en cualquier canal.',
  },
  {
    moment: 'Llega un reclamo por un producto roto',
    before: 'Se mezcla con las otras cuarenta consultas de la cola.',
    after: 'Se deriva a una persona en el acto, con el caso ya armado.',
  },
]

const timeline = [
  {
    step: '01',
    duration: 'Semana 1-2',
    title: 'Escuchamos tu operación real',
    desc: 'Leemos los tickets, chats y mails de los últimos meses y los agrupamos por tipo. No arrancamos con lo que tu equipo cree que pregunta la gente: arrancamos con lo que la gente pregunta. Casi siempre hay una sorpresa acá.',
  },
  {
    step: '02',
    duration: 'Semana 2-3',
    title: 'Escribimos la respuesta correcta',
    desc: 'Una sola respuesta aprobada por consulta, y las reglas de derivación: qué resuelve el sistema y qué tiene que ver una persona sí o sí. Sin esta fuente única, la IA no tiene de dónde sacar la verdad y completa inventando.',
  },
  {
    step: '03',
    duration: 'Semana 3-5',
    title: 'Construimos y conectamos',
    desc: 'Los agentes se despliegan en tus canales y se enchufan a tus sistemas: pedidos, facturación, agenda, mesa de ayuda. Recién acá se escribe código, y se escribe sabiendo exactamente qué tiene que hacer.',
  },
  {
    step: '04',
    duration: 'Continuo',
    title: 'Medimos y ajustamos',
    desc: 'Con conversaciones reales, no con casos de prueba. Cada semana revisamos qué se derivó de más, qué se respondió mal y qué consulta nueva apareció. Un sistema de atención que no se ajusta se degrada solo.',
  },
]

const solvesAlone = [
  'Estado de pedidos, envíos y turnos',
  'Reenvío de facturas y comprobantes',
  'Cambios de dirección y reprogramaciones',
  'Datos de producto, stock y precios',
  'Inicio de devoluciones dentro de la política',
  'Seguimiento de un reclamo ya abierto',
]

const alwaysHuman = [
  'Reclamos por daño, fraude o mala experiencia',
  'Excepciones a la política comercial',
  'Negociaciones y pedidos de descuento',
  'Cualquier caso con implicancia legal',
  'Un cliente que pide hablar con una persona',
  'Todo lo que el agente no entiende con certeza',
]

const integrations = ['WhatsApp Business API', 'Zendesk', 'Freshdesk', 'HubSpot Service', 'Instagram & Messenger', 'Gmail / Outlook', 'Shopify / Tiendanube', 'Webhooks & APIs']

const deliverables = [
  'Mapa de consultas con volumen y prioridad por tipo',
  'Base de conocimiento única, escrita y aprobada',
  'Reglas de derivación y protocolo de escalamiento',
  'Agentes de IA desplegados en tus canales de atención',
  'Integración con tus sistemas y tu mesa de ayuda',
  'Panel de resolución, tiempos y satisfacción del cliente',
]

const faqs = [
  {
    q: '¿Qué pasa si el agente no sabe algo?',
    a: 'Deriva. Nunca inventa. Esa es la diferencia entre un sistema que se puede poner en producción y una demo que impresiona en una reunión. Si la consulta no está cubierta por la base de conocimiento o el agente no tiene certeza, el caso pasa a una persona con todo el contexto ya armado.',
  },
  {
    q: '¿Tengo que cambiar mi mesa de ayuda o mis canales?',
    a: 'No. El sistema se conecta a lo que ya usás: tu Zendesk, tu WhatsApp Business, tu casilla de mail. Pedirte que migres de herramientas al mismo tiempo que automatizás es sumar un riesgo que no hace falta correr.',
  },
  {
    q: '¿Cuánto tarda en estar funcionando?',
    a: 'Entre 4 y 6 semanas desde el arranque, según cuántos canales y sistemas haya que conectar. Las primeras dos son de análisis y no se escribe código: es la parte que define si el resto funciona.',
  },
  {
    q: 'Recibo pocas consultas por mes. ¿Me sirve igual?',
    a: 'Puede que no, y te lo vamos a decir en la primera llamada. Por debajo de cierto volumen el proyecto no se paga solo y te conviene ordenar el proceso antes de automatizarlo. Preferimos perder el proyecto antes que venderte algo que no te sirve.',
  },
]

function Faq({ item, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="border-b"
      style={{ borderColor: LINE }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-start justify-between gap-6 text-left py-6 group"
      >
        <span
          className="text-base lg:text-lg font-semibold leading-snug transition-colors"
          style={{ color: open ? ACCENT : INK }}
        >
          {item.q}
        </span>
        <span
          className="w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors"
          style={{ borderColor: open ? 'rgba(6,182,212,0.5)' : LINE }}
        >
          <motion.svg
            className="w-3 h-3"
            fill="none"
            stroke={open ? ACCENT : SOFT}
            strokeWidth={2.5}
            viewBox="0 0 24 24"
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </motion.svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-12 text-sm lg:text-base leading-relaxed" style={{ color: BODY }}>
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function AtencionAlClientePage() {
  return (
    <>
      <Navbar />

      <main style={{ background: '#FFFFFF', minHeight: '100vh' }}>

        {/* ── HERO — centrado, con la bandeja en vivo debajo a todo el ancho ── */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden" style={{ borderBottom: `1px solid ${LINE}` }}>
          <div
            className="absolute pointer-events-none"
            style={{
              top: '-15%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '900px',
              height: '560px',
              background: 'radial-gradient(ellipse at center, rgba(6,182,212,0.14) 0%, rgba(6,182,212,0.05) 42%, transparent 70%)',
              filter: 'blur(70px)',
              zIndex: 0,
            }}
          />

          <div className="relative z-10 max-w-5xl mx-auto">
            {/* Breadcrumb */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="flex items-center gap-2 text-xs mb-12"
              style={{ color: '#B4A896' }}
            >
              <Link href="/" className="transition-colors hover:text-[#0A0A0A]">Flipwebco</Link>
              <span>/</span>
              <span style={{ color: SOFT }}>Servicios</span>
              <span>/</span>
              <span style={{ color: BODY }}>Atención al cliente</span>
            </motion.div>

            <div className="text-center max-w-3xl mx-auto">
              <motion.span
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.05}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border mb-7"
                style={{ color: ACCENT, borderColor: 'rgba(6,182,212,0.35)', background: 'rgba(6,182,212,0.07)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: ACCENT_BRIGHT }} />
                Atención al cliente y soporte
              </motion.span>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.12}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mb-6"
                style={{ color: INK }}
              >
                Automatizá la atención al cliente de tu empresa.{' '}
                <span className="font-display font-normal italic" style={{ color: SOFT }}>
                  Que responda sola, no cualquier cosa.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.2}
                className="text-base lg:text-lg leading-relaxed mx-auto max-w-2xl"
                style={{ color: BODY }}
              >
                Agentes de IA que atienden tus canales las 24 horas: responden en segundos, consultan tus sistemas para dar el dato real, resuelven la gestión completa y derivan a tu equipo cuando de verdad hace falta.
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.28}
                className="mt-9 flex flex-wrap gap-3 justify-center"
              >
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm hover:bg-[#2A2A2A]"
                  style={{ background: INK }}
                >
                  Agendar diagnóstico gratuito →
                </a>
                <a
                  href="#como-funciona"
                  className="inline-flex items-center gap-2 border font-semibold px-6 py-3 rounded-lg transition-colors text-sm hover:border-[#0A0A0A] hover:text-[#0A0A0A]"
                  style={{ borderColor: LINE, color: BODY }}
                >
                  Ver cómo funciona
                </a>
              </motion.div>

              {/* Canales atendidos */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.34}
                className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5"
              >
                {channels.map((c) => (
                  <span key={c.name} className="inline-flex items-center gap-1.5 text-xs font-medium" style={{ color: SOFT }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: c.color }} />
                    {c.name}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Bandeja en vivo */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.42}
              className="mt-14 max-w-2xl mx-auto"
            >
              <SupportInbox />
            </motion.div>
          </div>
        </section>

        {/* ── EL PROBLEMA — comparación fila por fila ── */}
        <section className="py-24 px-6" style={{ borderBottom: `1px solid ${LINE}` }}>
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mb-14"
            >
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: SOFT }}>
                El problema
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-bold leading-tight" style={{ color: INK }}>
                No es que tu equipo atienda mal.{' '}
                <span className="font-display font-normal italic" style={{ color: SOFT }}>
                  Es que atiende de a uno.
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: BODY }}>
                Cinco personas contestando en serie no escalan, y peor: cada una contesta con su criterio y con lo que se acuerda. Mirá la misma situación de los dos lados.
              </p>
            </motion.div>

            {/* Encabezados de columna */}
            <div className="hidden md:grid md:grid-cols-[1.1fr_1fr_1fr] gap-6 pb-4 mb-2">
              <span />
              <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: SOFT }}>
                Cómo se resuelve hoy
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: ACCENT }}>
                Con el sistema andando
              </span>
            </div>

            <div className="space-y-px" style={{ background: LINE }}>
              {comparison.map((row, i) => (
                <motion.div
                  key={row.moment}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="grid md:grid-cols-[1.1fr_1fr_1fr] gap-3 md:gap-6 p-5 md:px-2 md:py-6"
                  style={{ background: '#FFFFFF' }}
                >
                  <div className="text-sm font-semibold leading-snug" style={{ color: INK }}>{row.moment}</div>

                  <div className="flex gap-2.5 items-start">
                    <span className="md:hidden text-[10px] font-semibold uppercase tracking-widest pt-0.5 flex-shrink-0" style={{ color: SOFT }}>
                      Hoy
                    </span>
                    <p className="text-sm leading-relaxed" style={{ color: '#A0958A' }}>
                      {row.before}
                    </p>
                  </div>

                  <div className="flex gap-2.5 items-start">
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke={ACCENT} strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <p className="text-sm leading-relaxed" style={{ color: BODY }}>
                      {row.after}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CÓMO FUNCIONA — recorrido de 4 pasos ── */}
        <section id="como-funciona" className="py-24 px-6" style={{ background: CREAM, borderBottom: `1px solid ${LINE}` }}>
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mb-16"
            >
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: SOFT }}>
                Cómo funciona
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-bold leading-tight" style={{ color: INK }}>
                El bot es la última parte del trabajo.{' '}
                <span className="font-display font-normal italic" style={{ color: '#7A6E5F' }}>
                  Y también la más fácil.
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: BODY }}>
                Las dos primeras semanas no se escribe código: se ordena qué contesta tu empresa y con qué criterio. Automatizar una atención que nadie ordenó antes te da respuestas equivocadas, solo que más rápido y a más gente.
              </p>
            </motion.div>

            <div className="relative">
              {/* Línea del recorrido */}
              <div
                className="absolute left-[19px] top-3 bottom-3 w-px hidden sm:block"
                style={{ background: 'linear-gradient(180deg, rgba(6,182,212,0.55) 0%, rgba(6,182,212,0.12) 100%)' }}
              />

              <div className="space-y-10">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="relative sm:pl-16"
                  >
                    {/* Marcador */}
                    <div
                      className="hidden sm:flex absolute left-0 top-0 w-10 h-10 rounded-full items-center justify-center text-xs font-bold"
                      style={{
                        background: '#FFFFFF',
                        border: `1px solid ${i === 0 ? 'rgba(6,182,212,0.5)' : LINE}`,
                        color: i === 0 ? ACCENT : SOFT,
                      }}
                    >
                      {item.step}
                    </div>

                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2.5">
                      <span className="sm:hidden text-xs font-bold" style={{ color: ACCENT }}>{item.step}</span>
                      <h3 className="text-xl lg:text-2xl font-bold leading-tight" style={{ color: INK }}>{item.title}</h3>
                      <span
                        className="text-[10px] font-semibold uppercase tracking-widest px-2 py-1 rounded-full border"
                        style={{ color: SOFT, borderColor: '#DCCFBE', background: '#FFFFFF' }}
                      >
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-sm lg:text-base leading-relaxed max-w-2xl" style={{ color: BODY }}>
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── EL AGENTE EN ACCIÓN ── */}
        <section className="py-24 px-6" style={{ borderBottom: `1px solid ${LINE}` }}>
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mb-12"
            >
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: SOFT }}>
                El agente en acción
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-bold leading-tight" style={{ color: INK }}>
                Un bot responde.{' '}
                <span className="font-display font-normal italic" style={{ color: SOFT }}>
                  Un agente resuelve.
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: BODY }}>
                A la izquierda, lo que ve el cliente. A la derecha, lo que el agente consulta y ejecuta mientras conversa. Esa columna derecha es todo el servicio: sin acceso a tus sistemas, la conversación es humo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              <SupportAgentConsole />
            </motion.div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Responde en segundos', 'Consulta sistemas reales', 'Ejecuta la gestión completa', 'Deriva cuando corresponde'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full border"
                  style={{ color: BODY, borderColor: LINE }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── QUÉ SÍ Y QUÉ NO ── */}
        <section className="py-24 px-6" style={{ background: CREAM, borderBottom: `1px solid ${LINE}` }}>
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mb-14"
            >
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: SOFT }}>
                Los límites
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-bold leading-tight" style={{ color: INK }}>
                Nadie automatiza el 100%.{' '}
                <span className="font-display font-normal italic" style={{ color: '#7A6E5F' }}>
                  Y el que te lo promete, miente.
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: BODY }}>
                Definir qué NO va a tocar el agente es tan importante como definir qué sí. Esta lista se acuerda en la Fase 1 y queda escrita, para que no se descubra con el primer cliente enojado.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border p-8"
                style={{
                  background: 'linear-gradient(160deg, rgba(6,182,212,0.09) 0%, #FFFFFF 58%)',
                  borderColor: 'rgba(6,182,212,0.35)',
                }}
              >
                <div className="flex items-baseline justify-between gap-3 mb-6">
                  <h3 className="text-lg font-bold leading-tight" style={{ color: INK }}>El agente resuelve solo</h3>
                  <span className="text-2xl font-bold tabular-nums flex-shrink-0" style={{ color: ACCENT }}>87%</span>
                </div>
                <div className="space-y-3.5">
                  {solvesAlone.map((item) => (
                    <div key={item} className="flex gap-3 items-start">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke={ACCENT} strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-sm leading-relaxed" style={{ color: BODY }}>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl border p-8"
                style={{ background: '#FFFFFF', borderColor: LINE }}
              >
                <div className="flex items-baseline justify-between gap-3 mb-6">
                  <h3 className="text-lg font-bold leading-tight" style={{ color: INK }}>Siempre va a una persona</h3>
                  <span className="text-2xl font-bold tabular-nums flex-shrink-0" style={{ color: '#7A6E5F' }}>13%</span>
                </div>
                <div className="space-y-3.5">
                  {alwaysHuman.map((item) => (
                    <div key={item} className="flex gap-3 items-start">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="#7A6E5F" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                      <span className="text-sm leading-relaxed" style={{ color: BODY }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-7 pt-6 border-t" style={{ borderColor: LINE }}>
                  <p className="text-sm font-semibold leading-relaxed" style={{ color: INK }}>
                    Ese 13% llega con el historial completo y la gestión explicada. Tu equipo decide, no investiga.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── EL PULSO — mockup de métricas ── */}
        <section className="py-24 px-6" style={{ borderBottom: `1px solid ${LINE}` }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_1.15fr] gap-14 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: SOFT }}>
                  El resultado
                </span>
                <h2 className="mt-3 text-3xl lg:text-4xl font-bold leading-tight" style={{ color: INK }}>
                  Tus clientes escriben a las tres de la mañana.{' '}
                  <span className="font-display font-normal italic" style={{ color: SOFT }}>
                    Ahora vas a saber cuántos.
                  </span>
                </h2>
                <p className="mt-5 text-base leading-relaxed" style={{ color: BODY }}>
                  Mirá las barras de la madrugada. Esa es gente que consulta cuando puede, no cuando tu equipo está disponible. Hoy espera hasta la mañana siguiente y llega fría; con el sistema andando se atiende en el momento.
                </p>
                <p className="mt-4 text-base leading-relaxed" style={{ color: BODY }}>
                  Y todo lo demás también se mide: cuánto se tarda en responder, qué porcentaje se resuelve sin intervención, qué tipo de consulta se deriva más y qué tan conforme queda el cliente. Todo contra la línea de base que medimos antes de tocar nada.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <SupportPulse />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── QUÉ RECIBÍS + INTEGRACIONES ── */}
        <section className="py-24 px-6" style={{ borderBottom: `1px solid ${LINE}` }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: SOFT }}>
                  Qué recibís
                </span>
                <h2 className="mt-3 text-3xl font-bold leading-tight mb-7" style={{ color: INK }}>
                  Entregables concretos, no diapositivas
                </h2>
                <div className="space-y-3">
                  {deliverables.map((d) => (
                    <div key={d} className="flex gap-3 items-start">
                      <svg className="w-4 h-4 flex-shrink-0 mt-1" fill="none" stroke={ACCENT} strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-sm leading-relaxed" style={{ color: BODY }}>{d}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: SOFT }}>
                  Integraciones
                </span>
                <h2 className="mt-3 text-3xl font-bold leading-tight mb-7" style={{ color: INK }}>
                  Se conecta a lo que ya usás
                </h2>
                <p className="text-sm leading-relaxed mb-7" style={{ color: BODY }}>
                  No te pedimos cambiar de mesa de ayuda ni migrar tus canales. Pedirte que migres de herramientas al mismo tiempo que automatizás es sumar un riesgo que no hace falta correr.
                </p>
                <div className="flex flex-wrap gap-3">
                  {integrations.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                      className="text-sm font-medium px-4 py-2 rounded-full border"
                      style={{ color: BODY, borderColor: LINE, background: '#FFFFFF' }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── PREGUNTAS FRECUENTES ── */}
        <section className="py-24 px-6" style={{ borderBottom: `1px solid ${LINE}` }}>
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: SOFT }}>
                Lo que siempre nos preguntan
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-bold leading-tight" style={{ color: INK }}>
                Las dudas razonables{' '}
                <span className="font-display font-normal italic" style={{ color: SOFT }}>
                  antes de firmar
                </span>
              </h2>
            </motion.div>

            <div style={{ borderTop: `1px solid ${LINE}` }}>
              {faqs.map((item, i) => (
                <Faq key={item.q} item={item} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section id="contacto" className="py-28 px-6" style={{ background: CREAM }}>
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: SOFT }}>
                Empecemos por el diagnóstico
              </span>
              <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight tracking-tight" style={{ color: INK }}>
                Veamos qué te preguntan tus clientes{' '}
                <span className="font-display font-normal italic" style={{ color: '#7A6E5F' }}>
                  hoy.
                </span>
              </h2>
              <p className="mt-5 text-base lg:text-lg leading-relaxed" style={{ color: BODY }}>
                En una llamada de 30 minutos revisamos el volumen y los tipos de consulta que recibe tu equipo, y te decimos qué porcentaje se puede resolver solo. Sin costo y sin compromiso: si no vemos una oportunidad clara, te lo decimos.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://api.whatsapp.com/send?phone=5491133370937"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm hover:bg-[#2A2A2A]"
                  style={{ background: INK }}
                >
                  Agendar diagnóstico gratuito →
                </a>
                <Link
                  href="/#servicios"
                  className="border font-semibold px-8 py-4 rounded-xl transition-colors text-sm hover:border-[#0A0A0A] hover:text-[#0A0A0A]"
                  style={{ borderColor: '#DCCFBE', color: BODY, background: '#FFFFFF' }}
                >
                  Ver todos los servicios
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <FooterSection />
    </>
  )
}
