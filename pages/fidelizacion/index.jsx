/**
 * v0 by Vercel.
 * @see https://v0.dev/t/w9AZEZq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import Link from "next/link"
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Navbar from "@/components/Navbar";



const inter = Inter({ subsets: ['latin'] });

export default function Component() {
  return (
    <section className={inter.className} >
           <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <Navbar/>

        <div className="w-full h-screen py-40 md:py-24 lg:py-32 xl:py-48 ">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-4 ">

            <h1 className="text-xl  mx-auto font-regular tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-black ">
              Convierte tus compradores ocasionales <br />
              en <span className=" decoration-black font-semibold decoration-1">clientes de por vida</span>.
            </h1>

              <p className="max-w-[600px] text-sm space-y-8 text-gray-500 md:text-md dark:text-zinc-100 mx-auto lg:mx-40">
              la herramienta definitiva para marcas de comercio electrónico y provedores de servicios que buscan aumentar sus ventas recurrentes.
              </p>
            </div>
            <div className="w-full max-w-md space-y-2 mx-auto">
              <form className="flex space-x-2">
              <input
                  className="max-w-lg text-sm flex-1 h-14 w-52 p-4 bg-gray-500 bg-opacity-30 backdrop-blur-md rounded-lg text-white border-gray-900"
                  placeholder="Ingresa tu email para recibir actualizaciones"
                  type="email"
                />
                <button className="text-white p-4 rounded-lg bg-black text-black" type="submit">
                  Unirse
                </button>
              </form>
              <p className="text-xs text-gray-500 dark:text-zinc-100">
                Unite para recibir actualizaciones del lanzamiento 
                <Link className="underline underline-offset-2 ml-2 text-black" href="#" prefetch={false}>
                    Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
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
    </section>
  )
}