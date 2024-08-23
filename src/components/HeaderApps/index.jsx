import '../../../styles/tailwind.css';
import Link from "next/link";
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Img from "../../../public/images/bannerApps.png"

const inter = Inter({ subsets: ['latin'] });

export default function Component() {
  return (
    <section className={inter.className}>
      <div className="w-full h-screen py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            {/* Contenido textual */}
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <p className="text-lg text-gray-800 text-muted-foreground">
                  Aplicaciones Web y moviles{" "}
                </p>
                <h1 className="text-4xl font-regular tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Fideliza tus usuarios y aumenta tu eficiencia. {" "} Creamos un producto que tus usuarios aman usar.

                </h1>
                <p className="max-w-[700px] text-gray-400 text-muted-foreground md:text-xl">
                  Nuestra plataforma te ofrece todo lo necesario para crear y desplegar aplicaciones web y móviles impactantes. 
                  Enfócate en innovar, nosotros nos encargamos de lo técnico.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  {/* Puedes agregar aquí un formulario de contacto si lo deseas */}
                </form>
              </div>
            </div>
            
            {/* Imagen a la derecha */}
            <div className="lg:hidden flex justify-center items-center">
              <Image 
                src={Img}
                alt="Descripción de la imagen"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
