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
      <article className="prose prose-gray mx-auto my-12 max-w-3xl dark:prose-invert">
        <div className="space-y-2 not-prose">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
            Cómo las Empresas están Revolucionando el Soporte al Cliente
          </h1>
          <div className="flex items-center space-x-4">
            <Image
              src={Graphic}
              alt="Autor Avatar"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full"
              style={{ aspectRatio: "48/48", objectFit: "cover" }}
            />
            <div>
              <p className="text-sm font-medium">Juan Pérez</p>
              <p className="text-sm text-muted-foreground">Experto en Tecnología</p>
            </div>
          </div>
        </div>
        <p>
          La IA está transformando la manera en que las empresas interactúan con sus clientes, permitiendo una atención más eficiente, rápida y personalizada. Hoy en día, el 65% de las organizaciones han adoptado IA generativa para mejorar sus procesos de soporte al cliente.
        </p>

        <h2>La IA Generativa y su Impacto en el Soporte</h2>
        <p>
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

        <h2>Casos Reales de Éxito</h2>
        <p>
          <strong>Bank of America:</strong> Con su asistente virtual Erica, Bank of America maneja más de un millón de interacciones diarias, resolviendo consultas de clientes de manera automatizada y eficiente.
        </p>
        <p>
          <strong>Sephora:</strong> A través de su IA, Sephora ofrece recomendaciones de productos personalizadas, basadas en el historial de compras de los usuarios.
        </p>
        <p>
          <strong>Microsoft:</strong> Microsoft ha implementado IA en su soporte técnico, logrando automatizar la resolución de problemas básicos y reducir tiempos de espera.
        </p>

        <blockquote>
          <p>
            "La revolución digital es más significativa que la invención de la escritura o incluso de la imprenta."
          </p>
          <cite>- Douglas Engelbart, Científico Computacional</cite>
        </blockquote>

        <h2>El Futuro de la Atención al Cliente</h2>
        <p>
          Con el avance continuo de la IA generativa, las empresas seguirán mejorando sus servicios de soporte, ofreciendo respuestas más rápidas y precisas, mientras optimizan sus recursos internos.
        </p>
      </article>

      <section className="mx-auto my-12 max-w-3xl space-y-8">
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
      </section>
    </div>
  );
}
