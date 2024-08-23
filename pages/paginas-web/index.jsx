import Link from "next/link";
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Img from "../../public/images/bannerWebsite.jpg";

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

      <div className="flex flex-col min-h-[100dvh]">
        <main className="flex-1">
          <section className="w-full lg:mx-20 py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-24">
              <div className="space-y-4">
                <h1 className="text-3xl font-regular tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">
                  Diseñamos Páginas Web que Impulsan tu Negocio
                </h1>
                <p className="max-w-[600px] font-light text-muted-foreground md:text-xl">
                  Creamos sitios web modernos y funcionales que reflejan la esencia de tu marca y te ayudan a alcanzar tus objetivos comerciales.
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
                alt="Desarrollo de Páginas Web"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
              />
            </div>
          </section>
          <section id="mas" className="w-full bg-gray-100 py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-regular tracking-tighter sm:text-5xl">Features de Nuestras Páginas Web</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Descubre cómo nuestras soluciones web pueden transformar tu presencia en línea, ofreciendo experiencias de usuario excepcionales y optimizando tu visibilidad en la web.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <DesignIcon className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-regular">Diseño Responsivo</h3>
                      <p className="text-muted-foreground text-gray-400 ">
                        Asegúrate de que tu sitio web se vea increíble en todos los dispositivos con un diseño adaptable.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CodeIcon className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-regular">Desarrollo Personalizado</h3>
                      <p className="text-muted-foreground text-gray-400 ">
                        Creamos soluciones web a medida que se alinean con las necesidades específicas de tu negocio.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <SpeedIcon className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-regular">Optimización SEO</h3>
                      <p className="text-muted-foreground text-gray-400 ">
                        Mejora tu posición en los motores de búsqueda y atrae más tráfico con un sitio optimizado para SEO.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <SecurityIcon className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-regular">Seguridad Reforzada</h3>
                      <p className="text-muted-foreground text-gray-400 ">
                        Protege tu sitio y la información de tus usuarios con nuestras medidas avanzadas de seguridad.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <SupportIcon className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-regular">Soporte Continuo</h3>
                      <p className="text-muted-foreground text-gray-400 ">
                        Ofrecemos soporte técnico constante para asegurarnos de que tu sitio web funcione a la perfección.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <IntegrationIcon className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-regular">Integración Completa</h3>
                      <p className="text-muted-foreground text-gray-400 ">
                        Integramos tu sitio con las herramientas y plataformas necesarias para un rendimiento óptimo.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <PerformanceIcon className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-regular">Rendimiento Rápido</h3>
                      <p className="text-muted-foreground text-gray-400 ">
                        Asegura una carga rápida y una experiencia de usuario fluida con nuestras técnicas de optimización de rendimiento.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CMSIcon className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-regular">Gestión Sencilla</h3>
                      <p className="text-muted-foreground text-gray-400">
                        Administra tu contenido de manera fácil y eficiente con nuestros sistemas de gestión de contenido.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <EcommerceIcon className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-regular">Soluciones E-commerce</h3>
                      <p className="text-muted-foreground text-gray-400 ">
                        Vende tus productos y servicios en línea con nuestras soluciones de comercio electrónico robustas y escalables.
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
                <h2 className="text-3xl font-regular tracking-tighter sm:text-4xl">Inicia tu Proyecto Web Hoy</h2>
                <p className="text-muted-foreground  text-gray-400 md:text-xl">
                  No pierdas más tiempo. Crea una página web que destaque y te ayude a alcanzar tus metas comerciales. ¡Contáctanos hoy!
                </p>
                <Link
                href="https://calendar.app.google/uPTo3tZAMWrRbW3Z9"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground  text-gray-400 shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Agenda una llamada
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

function DesignIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a9 9 0 00-9 9 9 9 0 009 9 9 9 0 009-9 9 9 0 00-9-9zm0 2a7 7 0 017 7 7 7 0 01-7 7 7 7 0 01-7-7 7 7 0 017-7zM10 12h4m-2-2v4" />
    </svg>
  );
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7l8 5-8 5V7z" />
    </svg>
  );
}

function SpeedIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a8.25 8.25 0 110 15.292M12 4.354v15.292m0-15.292l4.25 8.292m-8.5 0l4.25-8.292z" />
    </svg>
  );
}

function SecurityIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 00-7.071 17.071A10 10 0 1012 2zm1 10v4a1 1 0 11-2 0v-4a1 1 0 012 0z" />
    </svg>
  );
}

function SupportIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m-6 4l6 6 6-6M6 4v6M18 4v6" />
    </svg>
  );
}

function IntegrationIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m0 4v4m0-12l-4 4m8-4l-4 4" />
    </svg>
  );
}

function PerformanceIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m0 4v4m0-12l-4 4m8-4l-4 4" />
    </svg>
  );
}

function CMSIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m0 4v4m0-12l-4 4m8-4l-4 4" />
    </svg>
  );
}

function EcommerceIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m0 4v4m0-12l-4 4m8-4l-4 4" />
    </svg>
  );
}
