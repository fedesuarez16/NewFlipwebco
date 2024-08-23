import Link from "next/link";
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Img from "../../public/images/bannerIA.png";

const inter = Inter({ subsets: ['latin'] });

export default function Component() {
  return (
    <div className={inter.className}>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <Navbar/>

      <div className="flex flex-col  min-h-[100dvh]">
        <main className="flex-1">
          <section className="w-full lg:mx-20 py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-24">
              <div className="space-y-4">
                <h1 className="text-3xl font-regular tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">
                  Impulsa tu Negocio con Integraciones de IA Personalizadas
                </h1>
                <p className="max-w-[600px] font-light text-muted-foreground md:text-xl">
                  Aprovecha el poder de la inteligencia artificial para optimizar procesos, mejorar la toma de decisiones y ofrecer experiencias personalizadas a tus clientes.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#mas"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Saber Más
                  </Link>
                </div>
              </div>
              <Image
                src={Img}
                width="550"
                height="550"
                alt="Integraciones de IA"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
              />
            </div>
          </section>
          <section id="mas" className="w-full bg-gray-100 py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-regular tracking-tighter sm:text-5xl">Beneficios de Nuestras Integraciones de IA</h2>
                  <p className="max-w-[900px] text-gray-500 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Descubre cómo nuestras soluciones de inteligencia artificial pueden transformar tu negocio, automatizando procesos y ofreciendo valor agregado a tus clientes.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <CombineIcon className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-regular">Automatización Inteligente</h3>
                      <p className="text-muted-foreground text-gray-500">
                        Optimiza tareas repetitivas y mejora la eficiencia operativa con automatizaciones basadas en IA.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <BotIcon className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-regular">Análisis Predictivo</h3>
                      <p className="text-muted-foreground text-gray-500">
                        Anticipa tendencias y toma decisiones informadas con nuestros modelos predictivos.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <ScaleIcon className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-regular">Personalización Avanzada</h3>
                      <p className="text-muted-foreground text-gray-500">
                        Ofrece experiencias únicas a tus clientes, personalizando interacciones y productos a través de IA.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <InfoIcon className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-regular">Soporte Predictivo</h3>
                      <p className="text-muted-foreground text-gray-500">
                        Mejora la atención al cliente con sistemas que anticipan problemas y brindan soluciones en tiempo real.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <LockIcon className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-regular">Seguridad Avanzada</h3>
                      <p className="text-muted-foreground text-gray-500">
                        Protege tu información con sistemas de seguridad basados en IA que detectan y previenen amenazas.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <ImportIcon className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-regular">Integración Perfecta</h3>
                      <p className="text-muted-foreground text-gray-500">
                        Conecta nuestras soluciones de IA con tus sistemas actuales para una integración fluida y sin interrupciones.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <PowerIcon className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-regular">Consultoría Especializada</h3>
                      <p className="text-muted-foreground text-gray-500">
                        Nuestro equipo de expertos te guía en la implementación de soluciones de IA adaptadas a tu negocio.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <ComponentIcon className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-regular">Escalabilidad Asegurada</h3>
                      <p className="text-muted-foreground text-gray-500">
                        Nuestras soluciones de IA crecen contigo, adaptándose a las necesidades cambiantes de tu negocio.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <ShoppingCartIcon className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-regular">Precios Flexibles</h3>
                      <p className="text-muted-foreground text-gray-500">
                        Ofrecemos planes que se ajustan a cualquier presupuesto, permitiéndote escalar según tus necesidades.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
              <div className="mx-auto max-w-2xl space-y-4 text-center">
                <h2 className="text-3xl font-regular tracking-tighter sm:text-4xl">Comienza con Nuestras Integraciones de IA</h2>
                <p className="text-muted-foreground text-gray-500 text-gray-500 md:text-md mx-20">
                  Lleva tu negocio al siguiente nivel con nuestras soluciones de IA. Conecta con nosotros.
                </p>
                <Link
                href="https://calendar.app.google/uPTo3tZAMWrRbW3Z9"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground text-gray-500 shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Agendar reunion
                </Link>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-muted">
          <div className="container mx-auto max-w-5xl space-y-4 px-4 py-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Flipwebco. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

function CombineIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l-5 5m0 0l5 5m-5-5h12" />
    </svg>
  );
}

function BotIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6h4m-4 8h4m2 2h6m-6-6h6m-6-6h6m-6-6h6m-6-6h6" />
    </svg>
  );
}

function ScaleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6M9 16h6m-6-8h6M4 8h16M4 12h16M4 16h16" />
    </svg>
  );
}

function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8h.01M11 12h2v6h-2v-6zM12 8h.01M12 8h.01M12 8h.01M12 8h.01M12 8h.01" />
    </svg>
  );
}

function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11V7a4 4 0 10-8 0v4a2 2 0 00-2 2v5a2 2 0 002 2h14a2 2 0 002-2v-5a2 2 0 00-2-2h-6z" />
    </svg>
  );
}

function ImportIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4M4 8v8M20 8v8M2 16h20M6 8h12M9 4h6M5 20h14M7 4v12m10-12v12" />
    </svg>
  );
}

function PowerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l-5 5m0 0l5 5m-5-5h12" />
    </svg>
  );
}

function ComponentIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4.5 4.5 0 110 8.292M12 4.354l-4.25 8.292a4.5 4.5 0 118.5 0l-4.25-8.292zm0 0l4.25 8.292" />
    </svg>
  );
}

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18h12M6 12h12m-3-6h3M6 6h3" />
    </svg>
  );
}
