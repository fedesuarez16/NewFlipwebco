import Contact from '@/components/Contact'
import React from 'react'
import Proj from '@/components/Proj'
import Header from '@/components/HeaderApps'
import Service from '@/components/introServiceApp.jsx/index.jsx'
import AppsColumn from '@/components/AppsColumn'
import Navbar from '@/components/Navbar'

import AppText from '@/components/AppText'
import Head from 'next/head';


import styles from './style.module.scss';


export default function apps () {
  return (
    
    <div className={styles.mainn}>
        <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
    <Navbar/>
     <Header/>
     <Service/>
     <AppsColumn/>
     <AppText/>
      <Proj/>
      <Contact/>



    </div>
  )
}
