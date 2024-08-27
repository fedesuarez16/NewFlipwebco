/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PGeVvg0gclq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 * 
 */
import Link from "next/link"
import Head from 'next/head';
import Image from "next/image";
import banner from "../../public/images/works.png"
import Navbar from "@/components/Navbar";
import Lionseg from "../../public/images/lionseglogo.png"


export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
          <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
    <Navbar/>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-14 xl:py-48">
          <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl mb-8 font-regular tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Como esta empresa de seguridad y monitoreo reinvento su gestion y redujo gastos en comisiones de sus usuarios
              </h1>
              <p className="max-w-[700px] py-6 font-regular text-gray-500 text-muted-foreground md:text-xl">
              En el competitivo mundo de la seguridad, donde la eficiencia y la precisión son fundamentales, una empresa de cámaras y monitoreo de seguridad se enfrentaba a un desafío significativo: las comisiones elevadas que su sistema anterior cobraba a los clientes por realizar pagos. Estas comisiones no solo afectaban la rentabilidad, sino que también generaban insatisfacción entre los clientes. Ante esta problemática, nuestra empresa de soluciones software fue contratada para liderar un proyecto de transformación digital que no solo mejoraría su eficiencia operativa, sino que también reduciría costos innecesarios.
              </p>
            </div>
            <Image
              src={banner}
              width="700"
              height="500"
              alt="Success Case"
              className="rounded-xl max-w-[400px] aspect-[4/2] object-cover"
            />
          </div>
        </section>

        <div className=" mx-auto container py-4 ">
        <div className=" space-y-4">
          <div className="flex items-center gap-4">
            <Image
              src={Lionseg}
              alt="Author Avatar"
              className="h-12 border-2 border-gray-300 w-12 p-1 rounded-full"
              width="40"
              height="40"
              style={{ aspectRatio: "40/40", objectFit: "contain" }}
            />
            <div>
              <p className="font-medium">Lionseg</p>
              <a href="https://lionseg.com/" className="text-sm text-muted-foreground">lionseg.com</a>
            </div>
          </div>
          <h1 className="font-regular text-3xl">El Desafío</h1>
        </div>
        <p className="mt-10 lg:text-xl text-gray-600">
        El principal problema que enfrentaba la empresa de seguridad era la pérdida de ingresos debido a las comisiones que su sistema de pagos cobraba a los clientes. Cada transacción realizada a través de su plataforma antigua implicaba un costo adicional que se transfería a sus clientes, lo que afectaba tanto la satisfacción del cliente como las finanzas de la empresa.
        </p>
       
        <h2 className="text-3xl font-regular py-8">La solucion</h2>
        <p className="pb-4 text-xl text-gray-600">
        Para abordar estos desafíos, implementamos una serie de soluciones integradas:
        </p>
        <p className="py-4 text-xl text-gray-600">
         <b> 1. Desarrollo de un Sistema de Facturación Personalizado: </b> Diseñamos e implementamos un sistema de facturación a medida que eliminaba las comisiones de transacción. En lugar de utilizar plataformas de pago con tarifas elevadas, nuestro sistema instruía a los usuarios a realizar pagos mediante transferencias bancarias directas. Este enfoque no solo eliminó las comisiones, sino que también simplificó el proceso de pago para los clientes.
        </p>
        <p className="py-4 text-xl text-gray-600">
       <b> 2. Sistema de Gestión de Ingresos y Datos: </b> Desarrollamos una plataforma robusta para la gestión de ingresos y datos, permitiendo a la empresa tener una visión clara y en tiempo real de sus operaciones financieras. Esta herramienta facilitó la toma de decisiones basadas en datos, optimizando la asignación de recursos y mejorando la eficiencia operativa. 
        </p>
        <p className="py-4 text-xl text-gray-600">
       <b>3. Rediseño de la Imagen Corporativa y Página Web: </b>  Además de los sistemas de backend, rediseñamos la imagen corporativa de la empresa y actualizamos su página web, dándole un aspecto moderno y profesional que reflejara su compromiso con la innovación y la seguridad. La nueva página web no solo mejoró la experiencia del usuario, sino que también integró las nuevas funcionalidades de pago y gestión de datos.        </p>
        <p className="py-4 text-xl text-gray-600">
      <b>  4. Automatización de Recordatorios de Pago:</b>  Implementamos un sistema de recordatorios de pago automatizados que envía facturas mensuales y avisos de vencimiento a través de email y WhatsApp. Esta funcionalidad mejoró la tasa de cobranza, redujo el retraso en los pagos, y mejoró la satisfacción del cliente al ofrecer una comunicación clara y oportuna.        </p>
        
        <h2 className="text-3xl font-regular py-8">Los Resultados</h2>
        <p className="py-4 text-xl text-gray-600" >
        Gracias a nuestra intervención, Lionseg, esta empresa de cámaras y monitoreo de seguridad logragra eliminar completamente las comisiones por transacción, aumentando así su margen de beneficios. Además, la eficiencia operativa se incrementó significativamente gracias al nuevo sistema de gestión de ingresos y datos. La nueva imagen corporativa y página web revitalizaron la presencia en línea de la empresas y mejorando su reputación en el mercado.
        </p>
        <p className="py-4 text-xl text-gray-600 pb-20">
        Este caso de éxito demuestra cómo una estrategia de transformación digital bien ejecutada puede resolver problemas críticos de negocio, optimizar operaciones y generar valor tanto para la empresa como para sus clientes.
        </p>
      </div>

        {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-2">
              <h3 className="text-2xl font-bold">200%</h3>
              <p className="text-muted-foreground">Growth in Revenue</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <h3 className="text-2xl font-bold">150%</h3>
              <p className="text-muted-foreground">Increase in User Base</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <h3 className="text-2xl font-bold">95%</h3>
              <p className="text-muted-foreground">Customer Satisfaction</p>
            </div>
          </div>
        </section> */}

<section className="w-full border-t border-gray-400 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-2xl space-y-4 text-center">
              <h2 className="text-3xl font-regular tracking-tighter sm:text-4xl">Comienza la reinvencion de tu negocio</h2>
              <p className="text-muted-foreground md:text-xl text-gray-600">
                Da el primer paso hacia la optimización de tu negocio. Regístrate hoy y descubre el poder de nuestros sistemas de gestión.
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
      <footer className="flex flex-col gap-2  sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Flipwebco. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
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