import React from 'react'
import { Inter } from 'next/font/google';
import styles from './style.module.scss';
import Logo from '../Header/logo';

const inter = Inter({ subsets: ['latin'] });


export default function  Index ()  {
  return (

    <section className={inter.className}>
    <Logo />
    <div className={styles.main}>
    
      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          <p>Aplicaciones web <br /> y móviles  </p>
        </div>
      </div>
    </div>
    </section>
  )
}

