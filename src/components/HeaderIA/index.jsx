import React from 'react'
import { Inter } from 'next/font/google';
import styles from './style.module.scss';
import Logo from '../Header/logo';

const inter = Inter({ subsets: ['latin'] });


export default function  index ()  {
  return (

    <section className={inter.className}>
    <div className={styles.main}>
    <Logo />
    
      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          <p>IA <br /> Inteligencia Artificial  </p>
        </div>
      </div>
    </div>
    </section>
  )
}

