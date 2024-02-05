import Contact from '@/components/Contact'
import React from 'react'
import Proj from '@/components/Proj'
import Header from '@/components/HeaderApps'
import Service from '@/components/introServiceApp.jsx/index.jsx'
import AppsColumn from '@/components/AppsColumn'
import AppText from '@/components/AppText'
import styles from './style.module.scss';


export default function apps () {
  return (
    <div className={styles.main}>
     <Header/>
     <Service/>
     <AppsColumn/>
     <AppText/>
      <Proj/>
      <Contact/>



    </div>
  )
}
