

import Image from 'next/image';
import styles from './style.module.scss';
import Logo from '../src/components/Header/logo'
import { useRef, useEffect } from 'react';
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })


export default function paginas() {



  return (
      <section className={inter.className}>
        <Logo/>
        <div  className={styles.main}>
      <Image 
        src="/images/bg-paginas.jpg"
        fill={true}
        alt=""
      />
      <div className={styles.sliderContainer}>
        <div  className={styles.slider}>
          <p >Paginas Web -</p>
          <p >Paginas Web -</p>
        </div>
      </div>
      </div>
    </section>
  );
}
