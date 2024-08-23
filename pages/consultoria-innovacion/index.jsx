import Link from "next/link"
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Img from "../../public/images/bannerheroold.png"  // Puedes cambiar la imagen si es necesario

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
                Impulsa tu Empresa con Consultoría IT Especializada
              </h1>
              <p className="max-w-[600px] font-light text-muted-foreground md:text-xl">
                Transformamos tu negocio con soluciones tecnológicas personalizadas. Optimiza tus procesos, mejora la seguridad y aumenta la productividad con nuestros servicios de consultoría IT.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#beneficios"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Descubre Más
                </Link>
              </div>
            </div>
            <Image
              src={Img}
              width="550"
              height="550"
              alt="Consultoría IT"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
            />
          </div>
        </section>
        <section id="beneficios" className="w-full bg-gray-100 py-12 md:py-24 lg:py-10 bg-muted">
          <div className="container p-20 mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-regular tracking-tighter sm:text-5xl">Beneficios de Nuestras Soluciones IT</h2>
                <p className="max-w-[900px] text-gray-600 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nuestras soluciones IT te ofrecen una ventaja competitiva. Desde la implementación hasta el soporte continuo, estamos contigo en cada paso.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl  gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid mx-auto gap-4">
                <div className="flex items-start gap-4">
                  <h3 className="text-md font-regular">Consultoría Estratégica</h3>
                  <p className="text-muted-foreground text-gray-600">
                    Te ayudamos a definir y ejecutar estrategias tecnológicas alineadas con los objetivos de tu negocio.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <h3 className="text-md font-regular">Seguridad Informática</h3>
                  <p className="text-muted-foreground text-gray-600">
                    Protege tus datos críticos con soluciones avanzadas de ciberseguridad que mitigan riesgos.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <h3 className="text-md font-regular">Optimización de Infraestructura</h3>
                  <p className="text-muted-foreground text-gray-600">
                    Mejora la eficiencia operativa con una infraestructura IT escalable y optimizada.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <h3 className="text-md font-regular">Migración a la Nube</h3>
                  <p className="text-muted-foreground text-gray-600">
                    Lleva tus operaciones a la nube con una migración segura y sin interrupciones.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <h3 className="text-md font-regular">Soporte Continuo</h3>
                  <p className="text-muted-foreground text-gray-600">
                    Ofrecemos soporte técnico continuo para mantener tus sistemas funcionando al máximo rendimiento.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <h3 className="text-md font-regular">Innovación Tecnológica</h3>
                  <p className="text-muted-foreground text-gray-600">
                    Te ayudamos a adoptar nuevas tecnologías para mantenerte a la vanguardia de tu industria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-2xl space-y-4 text-center">
              <h2 className="text-3xl font-regular tracking-tighter sm:text-4xl">Empieza tu Transformación Digital</h2>
              <p className="text-muted-foreground text-gray-600 md:text-xl">
                Únete a nuestros clientes satisfechos y lleva tu empresa al siguiente nivel con nuestras soluciones IT personalizadas.
              </p>
              <Link
                href="https://calendar.app.google/uPTo3tZAMWrRbW3Z9"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
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
  
  )
}
