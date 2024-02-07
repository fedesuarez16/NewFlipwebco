import React from 'react'
import styles from './style.module.scss';
import Header from '@/components/HeaderSist';
import IntroSist from '@/components/IntroSist';
import SistColumn from '@/components/SistColumn';
import Contact from '@/components/Contact'





export default function Sistemas () {
  return (
    <div className={styles.mainn}>
        <Header/>
        <IntroSist/>
        <SistColumn/>
        <Contact/>
        

    

    </div>
  )
}
