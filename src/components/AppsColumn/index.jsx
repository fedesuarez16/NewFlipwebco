/**
 * v0 by Vercel.
 * @see https://v0.dev/t/w3g3iUDCwo4
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import Image from "next/image"
import Img from "./bannerHeroold.png"

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Information</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Important Facts at a Glance</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get a quick overview of the most crucial details and highlights.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Key Fact 1</h3>
                  <p className="text-muted-foreground">This is an important detail that you should know.</p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Key Fact 2</h3>
                  <p className="text-muted-foreground">This is another crucial piece of information.</p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Key Fact 3</h3>
                  <p className="text-muted-foreground">This is a third important fact to be aware of.</p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Key Fact 4</h3>
                  <p className="text-muted-foreground">This is a fourth key detail that you should know.</p>
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
    </section>
  )
}