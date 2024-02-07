import React from 'react'
import { Inter } from 'next/font/google';
import styles from './style.module.scss';
import Logo from '../Header/logo';

const inter = Inter({ subsets: ['latin'] });

export default function Index() {
  return (
    <section className={inter.className}>
      <Logo />
      <div className={styles.main}>
        <div className={styles.sliderContainer}>
          
            <p className={styles.slider}>SEO</p>
          <p className={styles.subtitle}>Optimización del motor de búsqueda</p> {/* Separate subtitle element */}
        </div>
      </div>
    </section>
  )
}
