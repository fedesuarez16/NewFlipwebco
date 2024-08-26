/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PGeVvg0gclq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 * 
 */
import Link from "next/link"
import Head from 'next/head';


export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
          <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Como esta empresa de seguridad y monitoreo reinvento su gestion y redujo gastos en comisiones de sus usuarios
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
              En el competitivo mundo de la seguridad, donde la eficiencia y la precisión son fundamentales, una empresa de cámaras y monitoreo de seguridad se enfrentaba a un desafío significativo: las comisiones elevadas que su sistema anterior cobraba a los clientes por realizar pagos. Estas comisiones no solo afectaban la rentabilidad, sino que también generaban insatisfacción entre los clientes. Ante esta problemática, nuestra empresa de soluciones software fue contratada para liderar un proyecto de transformación digital que no solo mejoraría su eficiencia operativa, sino que también reduciría costos innecesarios.
              </p>
            </div>
            <img
              src="/placeholder.svg"
              width="800"
              height="400"
              alt="Success Case"
              className="rounded-xl w-full max-w-[800px] aspect-[2/1] object-cover"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
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
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Acme Inc. All rights reserved.</p>
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