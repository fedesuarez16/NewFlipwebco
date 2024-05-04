import React from 'react'
import { Inter } from 'next/font/google';
import styles from './style.module.scss';
import Logo from '../Header/logo';

const inter = Inter({ subsets: ['latin'] });


export default function  index ()  {
  return (

    <header className={inter.className}>
      <div  className={styles.header}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="Logo" />
      </div>
    <h1 className={styles.title}>Inteligencia Artificial</h1>
    </div>
  </header>
  )
}

