import Navbar from "@/components/Navbar";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/7K6vTbxKigf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Graphic from "./idk.png"


export default function Component() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <section className="relative h-[500px] w-full overflow-hidden rounded-b-xl">
        <div className="absolute inset-0 bg-gradient-to-t from-muted to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-primary-foreground">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Reinventando la Atención al Cliente con IA Generativa
          </h1>
          <p className="mt-3 max-w-3xl text-lg sm:mt-5 sm:text-xl">
            Descubre cómo las empresas están transformando la atención al cliente mediante la IA generativa y cómo el 65% ya la implementa.
          </p>
        </div>
      </section>
      <article className="prose prose-gray mx-auto px-6 my-12 max-w-3xl dark:prose-invert">
        <div className="space-y-2 not-prose">
          <h1 className="text-4xl mb-8 font-semibold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
            Cómo el 65% de las corporaciones implementaron la IA generativa a su atencion al cliente 
          </h1>
        
        </div>
        <p className="my-4">
          La IA está transformando la manera en que las empresas interactúan con sus clientes, permitiendo una atención más eficiente, rápida y personalizada. Hoy en día, el 65% de las organizaciones han adoptado IA generativa para mejorar sus procesos de soporte al cliente.
        </p>

        <h2 className="font-bold">La IA Generativa y su Impacto en el Soporte</h2>
        <p className="my-4">
          La IA generativa crea respuestas automáticas basadas en datos previos, lo que permite a las empresas automatizar interacciones comunes, mejorar tiempos de respuesta y personalizar la experiencia del cliente.
        </p>

        <Image
          src={Graphic}
          alt="IA Generativa en Acción"
          width={1200}
          height={675}
          className="mx-auto my-8 rounded-xl"
          style={{ aspectRatio: "1200/675", objectFit: "cover" }}
        />

        <h2 className="font-bold my-4">Casos Reales de Éxito</h2>
        <p className="my-4">
          <strong>Bank of America:</strong> Con su asistente virtual Erica, Bank of America maneja más de un millón de interacciones diarias, resolviendo consultas de clientes de manera automatizada y eficiente.
        </p>
        <p  className="my-4">
          <strong>Sephora:</strong> A través de su IA, Sephora ofrece recomendaciones de productos personalizadas, basadas en el historial de compras de los usuarios.
        </p>
        <p  className="my-4">
          <strong>Microsoft:</strong> Microsoft ha implementado IA en su soporte técnico, logrando automatizar la resolución de problemas básicos y reducir tiempos de espera.
        </p>

        <blockquote className="my-4">
          <p>
            "La revolución digital es más significativa que la invención de la escritura o incluso de la imprenta."
          </p>
          <cite>- Douglas Engelbart, Científico Computacional</cite>
        </blockquote>

        <h2 className="font-bold my-4">El Futuro de la Atención al Cliente</h2>
        <p className="my-4">
El uso de IA generativa en la atención al cliente sigue evolucionando. Con el tiempo, veremos mejoras en la capacidad de estos sistemas para manejar interacciones más complejas, con un mayor grado de comprensión emocional y una capacidad mejorada para anticipar las necesidades de los clientes antes de que se expresen.
        </p>
        <p className="my-4">
        Empresas de todos los sectores, desde las finanzas hasta el retail, están adoptando la IA para reinventar su atención al cliente. Lo que alguna vez fue un servicio básico se está convirtiendo en una experiencia dinámica, impulsada por tecnología de vanguardia, y la IA generativa está en el corazón de esta revolución.
         </p>
         <p className="my-4">
         En conclusión, a medida que más empresas implementan estas tecnologías, los clientes seguirán disfrutando de experiencias de atención más rápidas, eficientes y personalizadas. Sin duda, la IA generativa no es solo una tendencia pasajera, sino un pilar clave del futuro de la atención al cliente.         </p>

                
      </article>

      <section className="w-full border-t border-gray-400 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-2xl space-y-4 text-center">
              <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl">Comienza la reinvencion de tu negocio</h2>
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

      {/* <section className="mx-auto px-6 my-12 max-w-3xl space-y-8">
        <h2 className="text-2xl font-bold">Artículos Relacionados</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="#" className="group" prefetch={false}>
            <div className="relative h-48 overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg"
                alt="Artículo Relacionado"
                width={400}
                height={300}
                className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
            </div>
            <div className="mt-4 space-y-2">
              <h3 className="text-lg font-medium group-hover:underline">
                Explorando el Futuro de la Inteligencia Artificial
              </h3>
              <p className="text-muted-foreground line-clamp-2">
                Descubre los últimos avances en IA y cómo están transformando industrias y nuestras vidas.
              </p>
            </div>
          </Link>

          <Link href="#" className="group" prefetch={false}>
            <div className="relative h-48 overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg"
                alt="Artículo Relacionado"
                width={400}
                height={300}
                className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
            </div>
            <div className="mt-4 space-y-2">
              <h3 className="text-lg font-medium group-hover:underline">
                El Auge del Internet de las Cosas
              </h3>
              <p className="text-muted-foreground line-clamp-2">
                Explora cómo la interconexión de dispositivos está revolucionando la manera en que vivimos y trabajamos.
              </p>
            </div>
          </Link>

          <Link href="#" className="group" prefetch={false}>
            <div className="relative h-48 overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg"
                alt="Artículo Relacionado"
                width={400}
                height={300}
                className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
            </div>
            <div className="mt-4 space-y-2">
              <h3 className="text-lg font-medium group-hover:underline">
                El Futuro del Trabajo Remoto
              </h3>
              <p className="text-muted-foreground line-clamp-2">
                Descubre cómo la pandemia ha acelerado la transición hacia el trabajo remoto y las herramientas que lo habilitan.
              </p>
            </div>
          </Link>
        </div>
      </section> */}

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
  );
}
