import { useState } from 'react';
import axios from 'axios';
import Link from "next/link";
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ['latin'] });

export default function Component() {
  const [showNotification, setShowNotification] = useState(false); // Controla la visibilidad de la notificación
  const [notificationMessage, setNotificationMessage] = useState(''); // Mensaje de notificación

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    try {
      const res = await axios.post('/api/sendEmail', { email });
      if (res.data.message === 'Correo enviado con éxito') {
        setNotificationMessage('Te has suscrito exitosamente');
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000); // Oculta la notificación después de 3 segundos
      } else {
        setNotificationMessage('Hubo un error al suscribirte');
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
      }
    } catch (error) {
      console.error(error);
      setNotificationMessage('Hubo un error al enviar el correo');
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }
  };

  return (
    <section className={inter.className}>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <Navbar />

      <div className="w-full h-screen py-40 md:py-24 lg:py-32 xl:py-48 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 items-center">
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-xl mx-auto font-regular tracking-tighter sm:text-5xl xl:text-6xl text-black">
                  Convierte tus compradores ocasionales <br />
                  en <span className="font-semibold">clientes de por vida</span>.
                </h1>

                <p className="max-w-[600px] font-extralight lg:font-regular  text-sm text-gray-500 md:text-md dark:text-zinc-100 mx-auto lg:mx-40">
                  La herramienta definitiva para marcas de comercio electrónico y proveedores de servicios 
                </p>
              </div>
              <div className="w-full max-w-lg space-y-2 mx-auto">
                <form className="flex space-x-2" onSubmit={handleSubmit}>
                  <input
                    className="max-w-lg text-sm flex-1 h-14 w-52 p-4 bg-gray-500 bg-opacity-30 backdrop-blur-md rounded-lg text-white border-gray-900"
                    placeholder="Ingresa tu email para recibir actualizaciones"
                    type="email"
                    name="email"
                    required
                  />
                  <button className="text-white p-4 rounded-lg bg-black" type="submit">
                    Unirse
                  </button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  Únete para recibir actualizaciones del lanzamiento
                  <Link className="underline underline-offset-2 ml-2 text-black" href="#" prefetch={false}>
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Notificación */}
        {showNotification && (
          <div className="fixed top-20 w-48 left-1/2 transform -translate-x-1/2 bg-white-500 text-black p-4 rounded-lg shadow-lg">
            {notificationMessage}
          </div>
        )}
      </div>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
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
    </section>
  );
}
