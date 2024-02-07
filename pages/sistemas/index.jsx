import React from 'react'
import styles from './style.module.scss';
import Headersist from '@/components/Headersist';
import IntroSist from '@/components/IntroSist';
import SistColumn from '@/components/SistColumn';
import Contact from '@/components/Contact'





export default function Sistemas () {
  return (
    <div className={styles.mainn}>
        <Headersist/>
        <IntroSist/>
        <SistColumn/>
        <Contact/>
        

    

    </div>
  )
}
