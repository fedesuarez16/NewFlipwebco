import Image from "next/image"
import Img from "./bannerheroold.png"
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Component() {
  return (
    <section>
      <div className={inter.className} >
      <div className="container mt-20 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Aplicaciones</div>
            <h2 className="text-3xl font-semibold tracking-tighter sm:text-5xl">Por que Tener una App Web o Móvil?</h2>
            <p className="max-w-[900px]  text-gray-600 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Descubre cómo una aplicación puede transformar tu negocio y fidelizar a tus clientes.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-semibold">Mayor Alcance de Clientes</h3>
                  <p className="text-muted-foreground text-gray-600">Una app te permite estar al alcance de tus clientes en cualquier momento y lugar.</p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-semibold">Experiencia de Usuario Personalizada</h3>
                  <p className="text-muted-foreground text-gray-600">Ofrece una experiencia única adaptada a las preferencias de cada usuario, mejorando la satisfacción y lealtad.</p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-semibold">Aumento de Ventas</h3>
                  <p className="text-muted-foreground text-gray-600">Facilita el proceso de compra y aumenta la conversión con funcionalidades como pagos integrados y notificaciones personalizadas.</p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-semibold">Optimización de Procesos Internos</h3>
                  <p className="text-muted-foreground text-gray-600">Una app puede automatizar tareas y procesos, mejorando la eficiencia operativa de tu negocio.</p>
                </div>
              </li>
            </ul>
          </div>
          <Image
            src={Img}
            width="550"
            height="510"
            alt="Image"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-fit object-center sm:w-full lg:order-last"
          />
        </div>
      </div>
      </div>
    </section>
  )
}
