import React from 'react'
import styles from './style.module.scss';
import Contact from '@/components/Contact'
import Header from '@/components/HeaderIA'
import Intro from '@/components/IntroIA'
import Columns from '@/components/ColumnIA'

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
