'use client';

import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
import Description from '../components/Description';
import SlidingImages from '../components/SlidingImages';
import Contact from '../components/Contact';
import Head from 'next/head';
import Proj from '@/components/Proj';
import Clients from '@/components/Clients';
import { NextSeo } from 'next-seo';


export default function Page() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])

  return (

    
    <main className={styles.main}>
       <NextSeo
        title="Desarrollo Software - Flipwebco"
        description="Somos la reinvención"
        openGraph={{
          title: 'Desarrollo de Software ',
          description: 'Diseño y desarrollo de productos digitales para empresas',
          images: [
            {
              url: 'URL de la imagen Open Graph',
              width: 1200,
              height: 630,
              alt: 'Descripción de la imagen',
            },
          ],
          type: 'website',
          url: 'https://www.flipwebco.com/',
          site_name: 'Flipwebco',
        }}
      />
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </Head>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <Projects />
      <Clients/>
      <SlidingImages />
      <Proj/>
      <Contact />
    </main>
  )
}
