import React from 'react'
import styles from './style.module.scss';
import Contact from '@/components/Contact'
import Header from '@/components/HeaderSEO'
import Intro from '@/components/IntroSEO'
import Columns from '@/components/ColumnSEO'








export default function Sistemas () {
  return (
    <div className={styles.mainn}>
        <Header/>
        <Intro/>
        <Columns/>
        <Contact/>
        

    

    </div>
  )
}
