'use client';
/* eslint-disable */



import Image from 'next/image';
import styles from './style.module.scss';
import { useRef, useEffect } from 'react';
import Header from '../src/components/Header'

export default function Websites() {



  return (
    <main className={styles.main}>
      <Image 
        src="/images/background.jpg"
        fill={true}
        alt="background"
      />
      <div className={styles.sliderContainer}>
        <div  className={styles.slider}>
          <p >Paginas Web -</p>
          <p >Paginas Web -</p>
        </div>
      </div>
    </main>
  );
}
