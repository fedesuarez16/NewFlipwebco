/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OGW4f9ZRMhZ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Img from "../../public/images/managementBanner.png"


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
                Optimiza tu Negocio con Sistemas de Gestión Personalizados
              </h1>
              <p className="max-w-[600px] font-light text-muted-foreground md:text-xl">
                Mejora la eficiencia de tu empresa con nuestros sistemas ERP y CRM a medida. Centraliza tu operación, automatiza procesos, y lleva tu negocio al siguiente nivel.
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
              alt="Sistema de Gestión"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
            />
          </div>
        </section>
        <section id="mas" className="w-full  py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-regular tracking-tighter sm:text-5xl">Beneficios de Nuestros Sistemas de Gestión</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubre cómo nuestros sistemas a medida pueden transformar la operación de tu negocio y maximizar la eficiencia.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <CombineIcon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-regular">Gestión Centralizada</h3>
                    <p className="text-muted-foreground">
                      Integra todas las áreas de tu negocio en un solo sistema, facilitando la toma de decisiones informadas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BotIcon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-regular">Automatización de Procesos</h3>
                    <p className="text-muted-foreground">
                      Reduce tareas manuales y errores con nuestros flujos de trabajo automatizados, mejorando la eficiencia operativa.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ScaleIcon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-regular">Soluciones Escalables</h3>
                    <p className="text-muted-foreground">
                      Adaptamos nuestros sistemas al crecimiento de tu empresa, garantizando que se mantenga eficiente a medida que escalas.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <InfoIcon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-regular">Análisis Avanzados</h3>
                    <p className="text-muted-foreground">
                      Obtén información valiosa sobre el rendimiento de tu negocio con nuestras herramientas de análisis avanzadas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <LockIcon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-regular">Seguridad Robusta</h3>
                    <p className="text-muted-foreground">
                      Protege tus datos con nuestros estrictos estándares de seguridad, asegurando la confidencialidad de la información.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ImportIcon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-regular">Integración Perfecta</h3>
                    <p className="text-muted-foreground">
                      Conecta fácilmente nuestros sistemas con tus herramientas actuales para una experiencia unificada.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <PowerIcon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-regular">Soporte Dedicado</h3>
                    <p className="text-muted-foreground">
                      Nuestro equipo de soporte está siempre disponible para ayudarte, asegurando una experiencia sin problemas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ComponentIcon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-regular">Soluciones Personalizadas</h3>
                    <p className="text-muted-foreground">
                      Personaliza nuestros sistemas para satisfacer tus necesidades específicas y maximizar la eficiencia.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ShoppingCartIcon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-regular">Precios Flexibles</h3>
                    <p className="text-muted-foreground">
                      Escoge entre nuestros planes de precios para encontrar la mejor opción que se ajuste a tu empresa.
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
              <h2 className="text-3xl font-regular tracking-tighter sm:text-4xl">Comienza con Nuestros Sistemas de Gestión</h2>
              <p className="text-muted-foreground md:text-xl">
                Da el primer paso hacia la optimización de tu negocio. Regístrate hoy y descubre el poder de nuestros sistemas de gestión.
              </p>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Regístrate Ahora
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted">
        <div className="container mx-auto max-w-5xl space-y-4 px-4 py-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Acme Systems. Todos los derechos reservados.
          </p>
          
        </div>
      </footer>
    </div>
  </div>
  
  )
}

function BotIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  )
}


function CombineIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="8" x="2" y="2" rx="2" />
      <path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M10 18H5c-1.7 0-3-1.3-3-3v-1" />
      <polyline points="7 21 10 18 7 15" />
      <rect width="8" height="8" x="14" y="14" rx="2" />
    </svg>
  )
}


function ComponentIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
      <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
      <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
      <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
    </svg>
  )
}


function ImportIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v12" />
      <path d="m8 11 4 4 4-4" />
      <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
    </svg>
  )
}


function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function PowerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>
  )
}


function ScaleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  )
}


function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}