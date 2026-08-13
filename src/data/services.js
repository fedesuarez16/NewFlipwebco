/**
 * Fuente única de verdad de los servicios del sitio.
 *
 * Consumido por:
 *  - src/app/servicios/<slug>/page.js  → contenido de cada página
 *  - src/app/servicios/<slug>/layout.js → metadata
 *  - src/components/ServicesGrid        → tarjetas del home (number, title, description, tags)
 *
 * `automatizacion-de-ventas` NO vive acá: es el servicio destacado y tiene
 * página propia con mockups a medida.
 */

export const services = {
  'agentes-de-ia': {
    slug: 'agentes-de-ia',
    accent: '#3B82F6',
    number: '01',
    card: {
      title: 'Agentes de IA Empresarial',
      description:
        'Desarrollamos agentes autónomos con LLMs (GPT-4, Claude) que operan sobre tus datos y sistemas internos: ventas, operaciones, soporte. Automatización real de procesos complejos.',
      tags: ['LLM', 'Copilots', 'Automatización'],
    },
    meta: {
      title: 'Agentes de IA Empresarial — Flip',
      description:
        'Construimos agentes de IA que ejecutan acciones sobre tus sistemas reales: consultan, deciden y operan. No son chatbots que responden preguntas.',
      ogTitle: 'Agentes de IA que no responden: ejecutan.',
      ogDescription:
        'Agentes conectados a tu CRM, tu ERP y tus bases. Consultan, deciden y actúan. Diagnóstico gratuito.',
    },
    eyebrow: 'Agentes de IA',
    title: 'Un chatbot responde preguntas.',
    titleAccent: 'Un agente ejecuta acciones.',
    lead: 'Construimos agentes autónomos conectados a tus sistemas reales — CRM, ERP, bases de datos, APIs internas. No devuelven texto lindo: consultan información, toman decisiones con criterios que definimos juntos y ejecutan operaciones de verdad.',
    stats: [
      { value: '3 capas', label: 'Datos, razonamiento y acción' },
      { value: '6-10 sem', label: 'Del piloto al agente en producción' },
      { value: '100%', label: 'Trazabilidad de cada acción ejecutada' },
    ],
    console: {
      url: 'agentes.tuempresa.com/traza',
      title: 'Agente · Ejecución en curso',
      liveLabel: 'Ejecutando',
      rows: [
        { label: 'Consulta al CRM', detail: 'Cliente #8842 · historial de 14 meses', value: '0,4s' },
        { label: 'Verificación de stock en el ERP', detail: '3 SKU disponibles · 1 en reposición', value: '0,7s' },
        { label: 'Decisión sobre política comercial', detail: 'Descuento dentro del rango autorizado', value: '0,2s' },
        { label: 'Orden creada y notificada', detail: 'Registrada en el ERP · vendedor avisado', value: '1,1s' },
      ],
      footerLeft: 'Cada paso queda auditado',
      footerRight: '4 sistemas · 1 agente',
    },
    problem: {
      title: 'La mayoría de los "agentes de IA"',
      titleAccent: 'son un chat con buena onda',
      intro:
        'Se conectan a un modelo, responden preguntas y no tocan nada. El valor no está en que la IA hable bien: está en que pueda leer tus sistemas, decidir con reglas de tu negocio y ejecutar. Eso es ingeniería, no un prompt.',
      items: [
        {
          title: 'No tienen acceso a datos reales',
          desc: 'Un modelo sin conexión a tus sistemas inventa. Sin acceso al CRM, al ERP y a tus bases, cualquier respuesta es una estadística bien redactada.',
        },
        {
          title: 'No pueden ejecutar nada',
          desc: 'Te dicen qué habría que hacer y alguien lo hace a mano. El trabajo no se elimina: se mueve de lugar y encima suma un paso de copiar y pegar.',
        },
        {
          title: 'Nadie sabe por qué hicieron lo que hicieron',
          desc: 'Sin trazabilidad no hay forma de auditar ni de corregir. Y un sistema que no podés auditar es un sistema que no vas a poder poner en producción.',
        },
      ],
    },
    approach: {
      title: 'Primero los límites.',
      titleAccent: 'Después la autonomía.',
      intro:
        'Un agente que puede hacer todo es un agente que nadie va a autorizar. Definimos primero qué puede tocar, qué decisiones puede tomar solo y dónde tiene que escalar a un humano. Recién ahí construimos.',
      phase1: {
        badge: 'Fase 1 · Diseño',
        title: 'Alcance y reglas',
        desc: 'Mapeamos qué procesos vale la pena delegar, a qué sistemas necesita acceder el agente y bajo qué reglas puede operar sin supervisión. Salimos con un contrato de comportamiento escrito.',
        items: [
          {
            title: 'Inventario de sistemas y datos',
            desc: 'Qué fuentes existen, en qué estado están y cuáles son consultables hoy sin romper nada.',
          },
          {
            title: 'Definición de acciones permitidas',
            desc: 'Qué puede leer, qué puede escribir y qué queda explícitamente fuera de su alcance.',
          },
          {
            title: 'Umbrales de escalamiento',
            desc: 'En qué casos el agente frena y le pasa la decisión a una persona. Esto se define antes, no después del primer incidente.',
          },
          {
            title: 'Criterios de evaluación',
            desc: 'Cómo vamos a medir si el agente está funcionando bien. Sin esto, "anda bien" es una opinión.',
          },
        ],
      },
      phase2: {
        badge: 'Fase 2 · Construcción',
        title: 'Agente en producción',
        desc: 'Desarrollamos el agente con acceso real a tus sistemas, capa de herramientas, memoria de contexto y registro de cada acción. Se despliega con monitoreo desde el día uno.',
        items: [
          'Capa de herramientas conectada a tus APIs',
          'Recuperación de contexto sobre tus datos (RAG)',
          'Registro auditable de cada decisión y acción',
          'Panel de supervisión y control de costos',
        ],
        closing:
          'El agente deja de ser una demo que impresiona en una reunión y pasa a ser una pieza de tu operación.',
      },
    },
    capabilities: {
      title: 'Agentes que trabajan sobre tu operación real',
      intro:
        'Cada agente se construye para un proceso concreto, con acceso acotado y responsabilidades claras. Nada de un asistente genérico que promete todo y no resuelve nada.',
      items: [
        { icon: 'search', title: 'Consulta de sistemas internos', desc: 'Lee tu CRM, tu ERP y tus bases en tiempo real para responder con datos actuales, no con lo que había cuando se entrenó el modelo.' },
        { icon: 'filter', title: 'Decisión con reglas de negocio', desc: 'Aplica los criterios que definimos en la Fase 1: rangos de descuento, políticas de crédito, condiciones de aprobación.' },
        { icon: 'bolt', title: 'Ejecución sobre tus APIs', desc: 'Crea registros, actualiza estados y dispara procesos. La acción ocurre en tus sistemas, no en un resumen que alguien tiene que transcribir.' },
        { icon: 'users', title: 'Escalamiento a humanos', desc: 'Cuando la decisión excede su alcance, frena y deriva con todo el contexto ya armado. El humano decide, no investiga.' },
        { icon: 'doc', title: 'Trazabilidad completa', desc: 'Cada consulta, cada decisión y cada acción quedan registradas. Podés auditar cualquier caso hacia atrás, paso por paso.' },
        { icon: 'chart', title: 'Monitoreo y costos', desc: 'Panel con volumen, tasa de escalamiento, latencia y gasto por operación. La IA deja de ser una factura sin desglose.' },
      ],
    },
    deliverables: [
      'Documento de alcance con acciones permitidas y umbrales de escalamiento',
      'Agente desplegado y conectado a tus sistemas productivos',
      'Capa de herramientas e integraciones con tus APIs',
      'Registro auditable de cada decisión y acción ejecutada',
      'Panel de supervisión, métricas y control de costos',
      'Capacitación al equipo y soporte post-lanzamiento',
    ],
    integrations: ['OpenAI', 'Anthropic Claude', 'HubSpot', 'Salesforce', 'PostgreSQL', 'REST & GraphQL', 'Slack', 'Webhooks'],
    cta: {
      title: 'Veamos qué proceso puede operar',
      titleAccent: 'sin vos.',
      desc: 'En una llamada de 30 minutos identificamos qué procesos de tu operación son candidatos reales a delegarse a un agente, y cuáles todavía no. Sin costo: si no vemos un caso claro, te lo decimos.',
    },
  },

  'ia-generativa': {
    slug: 'ia-generativa',
    accent: '#8B5CF6',
    number: '02',
    card: {
      title: 'IA Generativa para el Negocio',
      description:
        'Integramos modelos de IA generativa en tus flujos de trabajo: procesamiento de documentos, generación de reportes, asistentes internos y análisis de contratos con NLP avanzado.',
      tags: ['GPT-4', 'RAG', 'NLP'],
    },
    meta: {
      title: 'IA Generativa para Empresas — Flip',
      description:
        'Procesamiento de documentos, generación de reportes y análisis de contratos con IA generativa conectada a tu conocimiento interno.',
      ogTitle: 'Tus documentos dejan de ser un archivo muerto.',
      ogDescription:
        'IA generativa sobre tu conocimiento interno: procesa documentos, genera reportes y analiza contratos. Diagnóstico gratuito.',
    },
    eyebrow: 'IA Generativa',
    title: 'Tu empresa ya tiene el conocimiento.',
    titleAccent: 'Está enterrado en PDFs.',
    lead: 'Contratos, manuales, expedientes, mails de años. Todo eso existe y nadie lo puede consultar. Conectamos modelos generativos a tu conocimiento interno para que buscar deje de ser arqueología y redactar deje de ser empezar de cero.',
    stats: [
      { value: '10x', label: 'Más rápido que la búsqueda manual' },
      { value: '4-8 sem', label: 'Del primer corpus al asistente en uso' },
      { value: 'Citas', label: 'Cada respuesta apunta al documento fuente' },
    ],
    console: {
      url: 'conocimiento.tuempresa.com',
      title: 'Procesamiento de documentos',
      liveLabel: 'Procesando',
      rows: [
        { label: 'Contrato de servicios · 34 páginas', detail: '18 cláusulas identificadas · 2 alertas', value: 'OK' },
        { label: 'Factura proveedor #A-2291', detail: '12 campos extraídos · cargada al ERP', value: 'OK' },
        { label: 'Expediente técnico · 112 páginas', detail: 'Indexado y disponible para consulta', value: 'OK' },
        { label: 'Reporte mensual generado', detail: '18 páginas · 6 fuentes citadas', value: 'OK' },
      ],
      footerLeft: 'Cada dato con su documento de origen',
      footerRight: '4 documentos · 0 intervención',
    },
    problem: {
      title: 'Comprar licencias de IA',
      titleAccent: 'no es una estrategia',
      intro:
        'Darle a todo el equipo acceso a un chat genérico no mueve la aguja: ese modelo no conoce tus contratos, tus procesos ni tu historia. El valor aparece cuando la IA trabaja sobre TU información, con citas verificables.',
      items: [
        {
          title: 'El modelo genérico no sabe nada de vos',
          desc: 'Puede redactar bien en abstracto, pero desconoce tus condiciones comerciales, tus proveedores y tus antecedentes. Lo que falta lo completa inventando.',
        },
        {
          title: 'Nadie confía en una respuesta sin fuente',
          desc: 'Si el sistema no puede mostrarte de qué documento salió cada dato, no lo vas a usar para nada que importe. Y con razón.',
        },
        {
          title: 'La información está en formatos que nadie lee',
          desc: 'PDFs escaneados, planillas sueltas, adjuntos en mails de hace tres años. Existe, pero en la práctica es como si no estuviera.',
        },
      ],
    },
    approach: {
      title: 'Primero ordenar.',
      titleAccent: 'Después generar.',
      intro:
        'Conectar un modelo a un depósito desordenado da respuestas desordenadas, solo que más rápido. Ordenamos y estructuramos el corpus antes de poner un modelo encima. Ese trabajo es el que nadie quiere hacer y el que define el resultado.',
      phase1: {
        badge: 'Fase 1 · Corpus',
        title: 'Ordenar el conocimiento',
        desc: 'Identificamos qué información existe, dónde vive, en qué formato está y cuál vale la pena indexar. Definimos permisos y niveles de acceso antes de exponer nada.',
        items: [
          {
            title: 'Relevamiento de fuentes',
            desc: 'Qué documentos hay, dónde están y cuáles son la versión vigente. Suele ser el hallazgo más incómodo del proyecto.',
          },
          {
            title: 'Extracción y normalización',
            desc: 'Convertimos PDFs escaneados, planillas y adjuntos a texto estructurado y consultable.',
          },
          {
            title: 'Permisos y confidencialidad',
            desc: 'Quién puede consultar qué. Un asistente que expone información sensible a quien no corresponde es un problema, no una solución.',
          },
          {
            title: 'Casos de uso priorizados',
            desc: 'Qué preguntas concretas tiene que responder bien. Se mide contra esas preguntas, no contra una sensación general.',
          },
        ],
      },
      phase2: {
        badge: 'Fase 2 · Construcción',
        title: 'Asistentes y generación',
        desc: 'Sobre el corpus ordenado construimos recuperación semántica, asistentes de consulta y generadores de documentos. Cada salida viene con las fuentes citadas.',
        items: [
          'Búsqueda semántica sobre tu conocimiento (RAG)',
          'Extracción estructurada de documentos',
          'Generación de reportes y borradores con fuentes',
          'Control de permisos por usuario y área',
        ],
        closing:
          'Preguntar deja de ser buscar en carpetas compartidas y pasa a ser preguntar, con la fuente al lado de la respuesta.',
      },
    },
    capabilities: {
      title: 'Del documento muerto al conocimiento consultable',
      intro:
        'Todo lo que construimos apunta a lo mismo: que la información que tu empresa ya tiene deje de estar guardada y pase a estar disponible.',
      items: [
        { icon: 'doc', title: 'Procesamiento de documentos', desc: 'Extracción estructurada de contratos, facturas y expedientes, incluso sobre PDFs escaneados con OCR.' },
        { icon: 'search', title: 'Búsqueda semántica interna', desc: 'Preguntás en lenguaje natural y el sistema encuentra el pasaje relevante, aunque no uses las mismas palabras que el documento.' },
        { icon: 'sparkles', title: 'Generación de reportes', desc: 'Informes recurrentes armados a partir de tus datos y documentos, con la fuente citada en cada afirmación.' },
        { icon: 'shield', title: 'Análisis de contratos', desc: 'Identificación de cláusulas de riesgo, vencimientos y condiciones de rescisión sobre lotes grandes de documentos.' },
        { icon: 'chat', title: 'Asistentes internos', desc: 'Consulta sobre procedimientos, políticas y antecedentes, con permisos por área y respuestas trazables.' },
        { icon: 'lock', title: 'Confidencialidad por diseño', desc: 'Control de acceso por documento y por usuario, y opción de despliegue donde tus datos no salen de tu infraestructura.' },
      ],
    },
    deliverables: [
      'Relevamiento de fuentes documentales y estado real de cada una',
      'Corpus indexado, normalizado y consultable',
      'Asistente de consulta con citas a los documentos fuente',
      'Pipelines de extracción estructurada conectados a tus sistemas',
      'Esquema de permisos por usuario y área',
      'Capacitación al equipo y soporte post-lanzamiento',
    ],
    integrations: ['OpenAI', 'Anthropic Claude', 'Azure OpenAI', 'Pinecone', 'Google Drive', 'SharePoint', 'OCR / Tesseract', 'Webhooks'],
    cta: {
      title: 'Veamos qué sabe tu empresa',
      titleAccent: 'y no puede consultar.',
      desc: 'En una llamada de 30 minutos revisamos qué información tenés dispersa y qué preguntas te gustaría poder hacerle. Sin costo: si el volumen no justifica el proyecto, te lo decimos.',
    },
  },

  'plataformas-de-datos': {
    slug: 'plataformas-de-datos',
    accent: '#0EA5E9',
    number: '03',
    card: {
      title: 'Plataformas de Datos & Analytics',
      description:
        'Construimos data warehouses, dashboards BI en tiempo real y modelos predictivos que convierten tus datos en decisiones estratégicas. MLOps incluido para despliegue y monitoreo.',
      tags: ['BI', 'Predictivo', 'MLOps'],
    },
    meta: {
      title: 'Plataformas de Datos & Analytics — Flip',
      description:
        'Data warehouses, dashboards en tiempo real y modelos predictivos con MLOps. Una sola fuente de verdad para tomar decisiones.',
      ogTitle: 'Una sola fuente de verdad. No cinco planillas.',
      ogDescription:
        'Data warehouse, dashboards en tiempo real y modelos predictivos que se monitorean solos. Diagnóstico gratuito.',
    },
    eyebrow: 'Datos & Analytics',
    title: 'Si cada área trae su número,',
    titleAccent: 'la reunión decide por volumen.',
    lead: 'Construimos la capa de datos que tu empresa no tiene: una sola fuente de verdad, con métricas definidas una vez y usadas por todos. Encima van los dashboards y, cuando el dato lo sostiene, los modelos predictivos.',
    stats: [
      { value: '1 verdad', label: 'Métricas definidas una sola vez' },
      { value: '6-12 sem', label: 'Del relevamiento al warehouse productivo' },
      { value: 'Tiempo real', label: 'Dashboards que no se arman a mano' },
    ],
    console: {
      url: 'datos.tuempresa.com/pipeline',
      title: 'Pipeline · Corrida diaria',
      liveLabel: 'Corriendo',
      rows: [
        { label: 'Ingesta desde ERP y CRM', detail: '142.800 registros · 4 fuentes', value: '2m 10s' },
        { label: 'Validación de calidad', detail: '6 reglas aplicadas · 0 rechazos', value: '18s' },
        { label: 'Transformación y modelado', detail: '22 tablas · capa de métricas', value: '1m 04s' },
        { label: 'Modelo de forecast re-entrenado', detail: 'Precisión +3,2% sobre el período previo', value: '3m 41s' },
      ],
      footerLeft: 'Corre sola todos los días a las 04:00',
      footerRight: 'Última corrida OK',
    },
    problem: {
      title: 'El problema no es que falten datos.',
      titleAccent: 'Es que sobran versiones.',
      intro:
        'Casi ninguna empresa sufre por falta de información. Sufre porque la misma pregunta tiene tres respuestas según quién la calcule. Sin una definición única de cada métrica, ningún dashboard resuelve nada.',
      items: [
        {
          title: 'Cada área calcula distinto',
          desc: 'Ventas mide facturación por fecha de emisión, finanzas por fecha de cobro. Los dos tienen razón, y por eso nadie puede decidir.',
        },
        {
          title: 'Los reportes se arman a mano',
          desc: 'Alguien dedica dos días por mes a exportar, pegar y cuadrar. Cuando el reporte llega, la decisión ya se tomó sin él.',
        },
        {
          title: 'Los modelos predictivos no llegan a producción',
          desc: 'Se entrenan en una notebook, se muestran una vez y ahí quedan. Sin pipeline ni monitoreo, un modelo es un experimento, no un sistema.',
        },
      ],
    },
    approach: {
      title: 'Primero las definiciones.',
      titleAccent: 'Después los tableros.',
      intro:
        'Un dashboard sobre métricas mal definidas es un generador de discusiones con buen diseño. Acordamos qué significa cada número antes de graficar uno solo.',
      phase1: {
        badge: 'Fase 1 · Modelado',
        title: 'Definir el negocio en datos',
        desc: 'Relevamos fuentes, acordamos con cada área la definición de las métricas clave y diseñamos el modelo dimensional. Salimos con un diccionario de métricas firmado.',
        items: [
          {
            title: 'Inventario de fuentes',
            desc: 'Qué sistemas generan datos, con qué frecuencia y con qué nivel de confiabilidad real.',
          },
          {
            title: 'Diccionario de métricas',
            desc: 'Cada indicador con su definición exacta y su dueño. Se acuerda una vez y deja de discutirse en cada reunión.',
          },
          {
            title: 'Modelo dimensional',
            desc: 'Cómo se estructura el warehouse para responder las preguntas del negocio sin consultas imposibles.',
          },
          {
            title: 'Reglas de calidad',
            desc: 'Qué validaciones tiene que pasar un dato para entrar. Lo que no cumple se rechaza y se avisa.',
          },
        ],
      },
      phase2: {
        badge: 'Fase 2 · Construcción',
        title: 'Warehouse, tableros y modelos',
        desc: 'Construimos los pipelines de ingesta, el warehouse, la capa de métricas y los dashboards. Si el caso lo justifica, sumamos modelos predictivos con su ciclo de vida completo.',
        items: [
          'Pipelines de ingesta y transformación automatizados',
          'Warehouse con capa de métricas gobernada',
          'Dashboards por área conectados en tiempo real',
          'Modelos predictivos con reentrenamiento y monitoreo',
        ],
        closing:
          'La discusión deja de ser de qué número es el correcto y pasa a ser qué hacemos con el número.',
      },
    },
    capabilities: {
      title: 'De la planilla suelta a la plataforma',
      intro:
        'Todo lo que construimos apunta a que el dato llegue solo, sea confiable y esté disponible cuando hay que decidir.',
      items: [
        { icon: 'database', title: 'Data warehouse', desc: 'Modelo dimensional diseñado para tu negocio, no una copia cruda de las tablas de tus sistemas transaccionales.' },
        { icon: 'refresh', title: 'Pipelines automatizados', desc: 'Ingesta, validación y transformación que corren solas, con alertas cuando algo falla o llega fuera de rango.' },
        { icon: 'chart', title: 'Dashboards en tiempo real', desc: 'Tableros por área conectados al warehouse. Nadie exporta nada a mano nunca más.' },
        { icon: 'sparkles', title: 'Modelos predictivos', desc: 'Forecast de demanda, propensión de compra y detección de anomalías, cuando el volumen y la calidad del dato lo sostienen.' },
        { icon: 'shield', title: 'Calidad y gobierno', desc: 'Reglas de validación, linaje del dato y control de acceso por área. Se sabe de dónde salió cada número.' },
        { icon: 'cog', title: 'MLOps', desc: 'Despliegue, versionado, reentrenamiento y monitoreo de deriva. El modelo vive en producción, no en una notebook.' },
      ],
    },
    deliverables: [
      'Diccionario de métricas acordado con cada área',
      'Data warehouse modelado y en producción',
      'Pipelines de ingesta y transformación automatizados',
      'Dashboards por área conectados en tiempo real',
      'Modelos predictivos desplegados con monitoreo (si aplica)',
      'Capacitación al equipo y soporte post-lanzamiento',
    ],
    integrations: ['BigQuery', 'Snowflake', 'PostgreSQL', 'dbt', 'Airflow', 'Power BI', 'Metabase', 'Looker Studio'],
    cta: {
      title: 'Veamos si tus números',
      titleAccent: 'coinciden entre sí.',
      desc: 'En una llamada de 30 minutos revisamos qué métricas usás hoy, quién las calcula y dónde aparecen las diferencias. Sin costo: si ya tenés una capa de datos sana, te lo decimos.',
    },
  },

  'software-a-medida': {
    slug: 'software-a-medida',
    accent: '#EAE0D5',
    number: '04',
    card: {
      title: 'Software Empresarial a Medida',
      description:
        'ERP y CRM personalizados, modernización de sistemas legacy y plataformas enterprise escalables. Arquitectura robusta diseñada para crecer con tu operación.',
      tags: ['ERP', 'CRM', 'APIs'],
    },
    meta: {
      title: 'Software Empresarial a Medida — Flip',
      description:
        'ERP y CRM a medida, modernización de sistemas legacy y plataformas escalables con arquitectura pensada para durar.',
      ogTitle: 'Software que se adapta a tu operación, no al revés.',
      ogDescription:
        'ERP y CRM a medida, modernización de legacy y plataformas que escalan. Diagnóstico gratuito.',
    },
    eyebrow: 'Software a medida',
    title: 'Cuando el sistema no encaja,',
    titleAccent: 'la gente inventa planillas.',
    lead: 'Ese Excel paralelo que usa todo el mundo no es indisciplina: es la prueba de que el software no acompaña la operación. Construimos sistemas que se adaptan a cómo trabaja tu empresa, con arquitectura pensada para durar y para crecer.',
    stats: [
      { value: '0 licencias', label: 'El sistema es tuyo, sin costo por usuario' },
      { value: '8-16 sem', label: 'Del relevamiento al primer módulo en uso' },
      { value: 'Por módulos', label: 'Entregas parciales, no un big bang' },
    ],
    console: {
      url: 'sistema.tuempresa.com/modulos',
      title: 'Plataforma · Estado de módulos',
      liveLabel: 'En producción',
      rows: [
        { label: 'Gestión de clientes', detail: '2.840 registros · migrados del sistema anterior', value: 'Activo' },
        { label: 'Órdenes y facturación', detail: 'Integrado con AFIP · 412 comprobantes/mes', value: 'Activo' },
        { label: 'Inventario multi-depósito', detail: '3 depósitos sincronizados en tiempo real', value: 'Activo' },
        { label: 'Portal de clientes', detail: 'Autogestión · 61% de las consultas resueltas', value: 'Activo' },
      ],
      footerLeft: 'Entregado por módulos, no de golpe',
      footerRight: '4 módulos productivos',
    },
    problem: {
      title: 'El software enlatado te obliga',
      titleAccent: 'a trabajar como él',
      intro:
        'Un producto genérico resuelve el 70% de tu operación y te pelea el 30% restante para siempre. Ese 30% suele ser justamente lo que te diferencia. Y ahí es donde nacen las planillas paralelas.',
      items: [
        {
          title: 'El proceso real vive fuera del sistema',
          desc: 'El sistema tiene los datos oficiales y las planillas tienen los datos que se usan. Ninguno de los dos cuenta la historia completa.',
        },
        {
          title: 'El legacy funciona pero nadie lo toca',
          desc: 'Anda hace quince años, no está documentado y quien lo escribió ya no está. Cada cambio es una apuesta y por eso no se cambia nada.',
        },
        {
          title: 'Las licencias crecen más rápido que el equipo',
          desc: 'Pagás por usuario, por módulo y por integración. El costo escala con tu crecimiento aunque el valor entregado no se mueva.',
        },
      ],
    },
    approach: {
      title: 'Primero el proceso.',
      titleAccent: 'Después el código.',
      intro:
        'Digitalizar un proceso malo te da un proceso malo con base de datos. Antes de escribir una línea, entendemos cómo trabaja tu empresa y qué conviene cambiar y qué conviene respetar.',
      phase1: {
        badge: 'Fase 1 · Relevamiento',
        title: 'Entender la operación',
        desc: 'Trabajamos con la gente que usa el sistema todos los días, no solo con la gerencia. Salimos con el proceso mapeado, los módulos priorizados y una arquitectura propuesta.',
        items: [
          {
            title: 'Mapeo del proceso real',
            desc: 'Cómo se trabaja de verdad, incluidas las planillas paralelas. Ahí está la información más valiosa del relevamiento.',
          },
          {
            title: 'Priorización por módulos',
            desc: 'Qué se construye primero para que haya valor en uso a las pocas semanas, no recién al final del proyecto.',
          },
          {
            title: 'Arquitectura y estrategia de datos',
            desc: 'Cómo se estructura el sistema para soportar el crecimiento y qué pasa con la información del sistema anterior.',
          },
          {
            title: 'Plan de migración y convivencia',
            desc: 'Cómo se pasa del sistema viejo al nuevo sin apagar la operación un lunes a la mañana.',
          },
        ],
      },
      phase2: {
        badge: 'Fase 2 · Desarrollo',
        title: 'Construcción por módulos',
        desc: 'Desarrollamos y entregamos módulo por módulo, con el equipo usándolo desde temprano. Cada entrega es funcional y ajustable con feedback real.',
        items: [
          'Módulos funcionales entregados de forma incremental',
          'Migración de datos del sistema anterior',
          'APIs para integrar con lo que ya usás',
          'Código documentado y transferido a tu equipo',
        ],
        closing:
          'El sistema queda siendo tuyo: sin licencias por usuario y sin depender de nosotros para seguir evolucionándolo.',
      },
    },
    capabilities: {
      title: 'Sistemas construidos para tu operación',
      intro:
        'Desde un módulo puntual que resuelve un cuello de botella hasta la plataforma completa que reemplaza al legacy.',
      items: [
        { icon: 'layers', title: 'ERP y CRM a medida', desc: 'Sistemas de gestión que siguen tu proceso real, con los campos, estados y reglas que tu operación necesita.' },
        { icon: 'refresh', title: 'Modernización de legacy', desc: 'Migración progresiva de sistemas antiguos, sin apagones y con convivencia entre lo viejo y lo nuevo mientras dure la transición.' },
        { icon: 'code', title: 'APIs e integraciones', desc: 'Conexión con AFIP, pasarelas de pago, logística, bancos y cualquier sistema que ya forme parte de tu operación.' },
        { icon: 'users', title: 'Portales de autogestión', desc: 'Clientes y proveedores resuelven solos lo que hoy resuelve tu equipo por teléfono, mail o WhatsApp.' },
        { icon: 'database', title: 'Migración de datos', desc: 'Traemos la información histórica del sistema anterior, validada y consistente. Arrancar de cero casi nunca es una opción.' },
        { icon: 'doc', title: 'Documentación y traspaso', desc: 'Código documentado, arquitectura explicada y capacitación al equipo. Sin dependencia obligatoria del proveedor.' },
      ],
    },
    deliverables: [
      'Mapa del proceso real y módulos priorizados',
      'Arquitectura del sistema y estrategia de datos',
      'Módulos funcionales entregados de forma incremental',
      'Migración de datos del sistema anterior',
      'APIs e integraciones con tus sistemas actuales',
      'Documentación técnica, capacitación y traspaso al equipo',
    ],
    integrations: ['Next.js', 'Node.js', 'PostgreSQL', 'AFIP', 'Mercado Pago', 'Stripe', 'REST & GraphQL', 'AWS'],
    cta: {
      title: 'Contanos qué resuelve',
      titleAccent: 'la planilla paralela.',
      desc: 'En una llamada de 30 minutos revisamos qué hace tu equipo por fuera del sistema y por qué. Sin costo: si con configurar mejor lo que ya tenés alcanza, te lo decimos.',
    },
  },

  'automatizacion-inteligente': {
    slug: 'automatizacion-inteligente',
    accent: '#F59E0B',
    number: '05',
    card: {
      title: 'Automatización Inteligente (RPA + IA)',
      description:
        'Combinamos RPA con inteligencia artificial para automatizar procesos de alta complejidad: extracción de datos, aprobaciones, validaciones y flujos multi-sistema sin intervención humana.',
      tags: ['RPA', 'OCR', 'Workflows'],
    },
    meta: {
      title: 'Automatización Inteligente RPA + IA — Flip',
      description:
        'Automatizamos procesos administrativos de alta complejidad combinando RPA con IA: extracción, validación, aprobaciones y flujos multi-sistema.',
      ogTitle: 'El trabajo que nadie quiere hacer, hecho solo.',
      ogDescription:
        'RPA + IA para procesos administrativos: extracción, validación y aprobaciones sin intervención. Diagnóstico gratuito.',
    },
    eyebrow: 'Automatización inteligente',
    title: 'Copiar de un sistema a otro',
    titleAccent: 'no es un trabajo.',
    lead: 'Cargar facturas, cruzar planillas, validar datos, pasar información de un sistema a otro. Es trabajo repetitivo, propenso al error y carísimo cuando lo hace gente calificada. Combinamos RPA con IA para que ocurra solo, incluso cuando el proceso requiere criterio.',
    stats: [
      { value: '70-90%', label: 'Del volumen resuelto sin intervención' },
      { value: '4-8 sem', label: 'Del relevamiento al flujo en producción' },
      { value: '24/7', label: 'Corre de noche, fines de semana y feriados' },
    ],
    console: {
      url: 'flujos.tuempresa.com/ejecucion',
      title: 'Flujo · Conciliación de facturas',
      liveLabel: 'Procesando',
      rows: [
        { label: 'Lectura de 48 facturas recibidas', detail: 'PDF y escaneadas · OCR aplicado', value: '48/48' },
        { label: 'Extracción de campos', detail: 'CUIT, importe, fecha, ítems y alícuotas', value: '576' },
        { label: 'Cruce contra órdenes de compra', detail: '44 coinciden · 4 con diferencia', value: '92%' },
        { label: 'Excepciones derivadas', detail: '4 casos enviados a revisión con contexto', value: '4' },
      ],
      footerLeft: 'Las excepciones llegan explicadas',
      footerRight: '44 resueltas solas',
    },
    problem: {
      title: 'La RPA tradicional se rompe',
      titleAccent: 'con el primer caso raro',
      intro:
        'Un robot que sigue pasos fijos funciona hasta que el proveedor cambia el formato de la factura o aparece una excepción que nadie previó. Ahí se cae y alguien tiene que resolver a mano. La IA es lo que le da criterio para no caerse.',
      items: [
        {
          title: 'Los formatos nunca son estables',
          desc: 'Cada proveedor factura distinto y cambia el diseño sin avisar. Una automatización basada en posiciones fijas dura hasta el próximo rediseño.',
        },
        {
          title: 'Las excepciones consumen todo el tiempo',
          desc: 'El 80% de los casos son simples y el 20% raro se lleva la mayor parte de las horas del equipo. Automatizar solo lo simple mueve poco la aguja.',
        },
        {
          title: 'Nadie sabe cuánto cuesta el proceso hoy',
          desc: 'El costo está diluido en sueldos y horas extra. Sin medirlo antes, después no hay forma de demostrar que la automatización sirvió.',
        },
      ],
    },
    approach: {
      title: 'Primero medir.',
      titleAccent: 'Después automatizar.',
      intro:
        'Automatizar sin la línea de base es quedarse sin argumentos cuando alguien pregunte si valió la pena. Medimos volumen, tiempo y tasa de error antes de tocar nada.',
      phase1: {
        badge: 'Fase 1 · Relevamiento',
        title: 'Mapear y medir el proceso',
        desc: 'Observamos el proceso como se ejecuta hoy, medimos su costo real y clasificamos los casos entre los que se pueden resolver por reglas y los que necesitan criterio.',
        items: [
          {
            title: 'Línea de base medida',
            desc: 'Volumen mensual, tiempo por caso y tasa de error actual. Sin este número, el ROI después es una opinión.',
          },
          {
            title: 'Clasificación de casos',
            desc: 'Qué porcentaje es mecánico, qué porcentaje necesita criterio y qué porcentaje debería seguir siendo humano.',
          },
          {
            title: 'Mapa de sistemas involucrados',
            desc: 'Qué aplicaciones toca el proceso, cuáles tienen API y en cuáles hay que operar sobre la interfaz.',
          },
          {
            title: 'Reglas de excepción',
            desc: 'Qué hace el flujo cuando algo no cuadra. Definirlo antes evita que la automatización frene todo al primer caso raro.',
          },
        ],
      },
      phase2: {
        badge: 'Fase 2 · Construcción',
        title: 'Flujos con criterio',
        desc: 'Construimos el flujo combinando automatización determinística para lo mecánico e IA para lo que requiere interpretación. Las excepciones se derivan con el contexto ya armado.',
        items: [
          'Extracción con OCR e interpretación por IA',
          'Validaciones y cruces contra tus sistemas',
          'Derivación de excepciones con contexto',
          'Panel de volumen, ahorro y tasa de excepción',
        ],
        closing:
          'Tu equipo deja de cargar datos y pasa a resolver solamente los casos que de verdad necesitan una persona.',
      },
    },
    capabilities: {
      title: 'Procesos administrativos que se ejecutan solos',
      intro:
        'Los candidatos típicos son los procesos de alto volumen, muchos pasos y bajo valor agregado por persona. Casi toda empresa tiene tres o cuatro.',
      items: [
        { icon: 'doc', title: 'Extracción documental', desc: 'Facturas, remitos y órdenes leídos con OCR e interpretados por IA, sin importar el formato de cada proveedor.' },
        { icon: 'filter', title: 'Validaciones y cruces', desc: 'Conciliación automática contra órdenes de compra, contratos y registros de tus sistemas.' },
        { icon: 'refresh', title: 'Flujos multi-sistema', desc: 'Procesos que atraviesan varias aplicaciones, por API cuando existe y sobre la interfaz cuando no queda otra.' },
        { icon: 'users', title: 'Aprobaciones con criterio', desc: 'Circuitos que aplican tus políticas y escalan solo lo que excede los umbrales definidos.' },
        { icon: 'bolt', title: 'Manejo de excepciones', desc: 'Cuando algo no cuadra, el caso se deriva explicado: qué se esperaba, qué se encontró y qué falta decidir.' },
        { icon: 'chart', title: 'Medición de ahorro', desc: 'Panel con volumen procesado, tasa de excepción y horas liberadas contra la línea de base de la Fase 1.' },
      ],
    },
    deliverables: [
      'Línea de base medida del proceso actual',
      'Mapa de sistemas y clasificación de casos',
      'Flujos automatizados en producción',
      'Circuito de excepciones con derivación contextualizada',
      'Panel de volumen, ahorro y tasa de excepción',
      'Capacitación al equipo y soporte post-lanzamiento',
    ],
    integrations: ['UiPath', 'Power Automate', 'OCR / Tesseract', 'OpenAI', 'SAP', 'AFIP', 'Google Workspace', 'Webhooks'],
    cta: {
      title: 'Contanos qué proceso',
      titleAccent: 'nadie quiere hacer.',
      desc: 'En una llamada de 30 minutos identificamos el proceso con mejor relación entre volumen y esfuerzo para automatizar primero. Sin costo: si el volumen no lo justifica, te lo decimos.',
    },
  },

  'cloud-devsecops': {
    slug: 'cloud-devsecops',
    accent: '#14B8A6',
    number: '06',
    card: {
      title: 'Arquitectura Cloud & DevSecOps',
      description:
        'Migraciones cloud, diseño de microservicios, pipelines CI/CD y seguridad integrada desde el día uno. Infraestructura escalable en AWS, Azure o GCP lista para producción.',
      tags: ['Cloud', 'Microservicios', 'CI/CD'],
    },
    meta: {
      title: 'Arquitectura Cloud & DevSecOps — Flip',
      description:
        'Migraciones cloud, microservicios, pipelines CI/CD y seguridad integrada desde el diseño. Infraestructura lista para producción en AWS, Azure o GCP.',
      ogTitle: 'Deployar no debería dar miedo.',
      ogDescription:
        'Migraciones cloud, CI/CD y seguridad desde el diseño. Infraestructura que escala sin sorpresas. Diagnóstico gratuito.',
    },
    eyebrow: 'Cloud & DevSecOps',
    title: 'Si deployar da miedo,',
    titleAccent: 'el problema no es el deploy.',
    lead: 'Es la infraestructura. Diseñamos y migramos arquitecturas cloud con pipelines automatizados, seguridad integrada desde el diseño y observabilidad real. El objetivo es simple: que subir a producción sea un trámite y no un evento.',
    stats: [
      { value: '0 downtime', label: 'Migraciones sin cortar la operación' },
      { value: '6-12 sem', label: 'Del assessment a la infra productiva' },
      { value: 'IaC', label: 'Toda la infraestructura versionada en código' },
    ],
    console: {
      url: 'ci.tuempresa.com/pipeline/842',
      title: 'Pipeline · Deploy a producción',
      liveLabel: 'Corriendo',
      rows: [
        { label: 'Tests y análisis estático', detail: '318 tests · cobertura 84%', value: 'OK' },
        { label: 'Escaneo de seguridad', detail: 'Dependencias e imagen · 0 críticas', value: 'OK' },
        { label: 'Build y push de imagen', detail: 'Firmada y versionada en el registry', value: 'OK' },
        { label: 'Despliegue progresivo', detail: 'us-east-1 · 2/2 healthy · 0 downtime', value: 'OK' },
      ],
      footerLeft: 'Rollback automático ante fallo',
      footerRight: 'Deploy #842 · 6m 12s',
    },
    problem: {
      title: 'Levantar servidores en la nube',
      titleAccent: 'no es migrar a la nube',
      intro:
        'Mover las máquinas tal cual estaban te deja los mismos problemas, ahora con factura en dólares. La ganancia aparece cuando cambia la arquitectura: despliegues automatizados, escalado real y seguridad desde el diseño.',
      items: [
        {
          title: 'El deploy es un ritual con miedo',
          desc: 'Se hace de noche, con varias personas conectadas y un plan de rollback en un documento. Si desplegar asusta, se despliega poco y cada entrega acumula más riesgo.',
        },
        {
          title: 'La factura cloud crece sin explicación',
          desc: 'Recursos sobredimensionados, ambientes olvidados prendidos y sin nadie que pueda decir qué servicio genera cada peso del gasto.',
        },
        {
          title: 'La seguridad llega al final',
          desc: 'Se audita cuando ya está todo construido y entonces cada hallazgo es carísimo de corregir. Integrada al pipeline, cuesta una fracción.',
        },
      ],
    },
    approach: {
      title: 'Primero el diseño.',
      titleAccent: 'Después la migración.',
      intro:
        'Migrar sin rediseñar es mudar el problema de lugar. Hacemos un assessment de lo que hay, definimos la arquitectura destino y recién ahí movemos, por etapas y sin cortar la operación.',
      phase1: {
        badge: 'Fase 1 · Assessment',
        title: 'Diagnóstico y arquitectura',
        desc: 'Relevamos la infraestructura actual, sus dependencias y sus costos. Definimos la arquitectura destino y el plan de migración por etapas, con criterios de reversión en cada una.',
        items: [
          {
            title: 'Inventario y dependencias',
            desc: 'Qué corre hoy, sobre qué y de qué depende. Las dependencias ocultas son las que hacen fallar las migraciones.',
          },
          {
            title: 'Análisis de costos actual',
            desc: 'Cuánto cuesta hoy la operación y dónde se está gastando de más. Es la línea de base para medir después.',
          },
          {
            title: 'Arquitectura destino',
            desc: 'Qué se mueve tal cual, qué se rediseña y qué conviene reemplazar por un servicio administrado.',
          },
          {
            title: 'Plan por etapas',
            desc: 'Orden de migración, ventanas y criterio de reversión de cada paso. Nadie migra todo un fin de semana.',
          },
        ],
      },
      phase2: {
        badge: 'Fase 2 · Implementación',
        title: 'Infra, pipelines y seguridad',
        desc: 'Implementamos la infraestructura como código, los pipelines de CI/CD con controles de seguridad integrados y la capa de observabilidad. Migramos por etapas, con reversión disponible en cada una.',
        items: [
          'Infraestructura como código versionada',
          'Pipelines de CI/CD con escaneo de seguridad',
          'Observabilidad: métricas, logs y alertas',
          'Optimización de costos y escalado automático',
        ],
        closing:
          'Desplegar pasa a ser una operación de rutina que cualquiera del equipo puede ejecutar un martes a las tres de la tarde.',
      },
    },
    capabilities: {
      title: 'Infraestructura que se opera sola',
      intro:
        'El objetivo no es tener la arquitectura más moderna: es que la infraestructura deje de ser un cuello de botella para entregar.',
      items: [
        { icon: 'cloud', title: 'Migraciones cloud', desc: 'De on-premise o de otro proveedor a AWS, Azure o GCP, por etapas y sin cortar la operación.' },
        { icon: 'layers', title: 'Arquitectura de microservicios', desc: 'Descomposición de monolitos cuando el caso lo justifica. Si no lo justifica, te lo decimos: no todo tiene que ser microservicios.' },
        { icon: 'refresh', title: 'Pipelines CI/CD', desc: 'Build, test, escaneo y despliegue automatizados, con rollback automático ante fallo.' },
        { icon: 'shield', title: 'Seguridad integrada', desc: 'Escaneo de dependencias e imágenes, gestión de secretos y control de accesos dentro del pipeline, no como auditoría posterior.' },
        { icon: 'chart', title: 'Observabilidad', desc: 'Métricas, logs y trazas centralizadas con alertas que avisan antes de que el usuario se dé cuenta.' },
        { icon: 'cog', title: 'Optimización de costos', desc: 'Dimensionamiento correcto, escalado automático y visibilidad del gasto por servicio y por ambiente.' },
      ],
    },
    deliverables: [
      'Assessment de infraestructura, dependencias y costos actuales',
      'Arquitectura destino documentada y plan de migración por etapas',
      'Infraestructura como código versionada en tu repositorio',
      'Pipelines de CI/CD con controles de seguridad integrados',
      'Stack de observabilidad con alertas configuradas',
      'Capacitación al equipo y soporte post-migración',
    ],
    integrations: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker', 'GitHub Actions', 'Grafana'],
    cta: {
      title: 'Veamos por qué deployar',
      titleAccent: 'todavía da miedo.',
      desc: 'En una llamada de 30 minutos revisamos tu infraestructura actual, tu proceso de despliegue y tu factura cloud. Sin costo: si tu setup ya está sano, te lo decimos.',
    },
  },
}

/** Orden en el que se muestran las tarjetas del home. */
export const serviceOrder = [
  'agentes-de-ia',
  'ia-generativa',
  'plataformas-de-datos',
  'software-a-medida',
  'automatizacion-inteligente',
  'cloud-devsecops',
]

export const serviceList = serviceOrder.map((slug) => services[slug])
