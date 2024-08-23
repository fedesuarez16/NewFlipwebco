/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ToqOARZZOHP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import Image from 'next/image';


export default function Component() {
  return (
    <header className="flex items-center justify-between bg-background px-4 py-3 shadow-sm">
      <Link href="./" className="flex items-center gap-2" prefetch={false}>
        <Image
        src="/images/logo.png"                 
        width="550"
        height="510" className="h-6 w-6 text-primary" />
        <span className="text-sm font-medium">Flipwebco</span>
      </Link>
      <Link
        href="#"
        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        prefetch={false}
      >
        Contactar
      </Link>
    </header>
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