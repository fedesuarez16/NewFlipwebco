import Header from '@/components/HeaderPaginas'
import Navbar from '@/components/navbarPaginas'
import Info from '@/components/InfoPaginas'
import Why from '@/components/whyPaginas'
import Cards from '@/components/cardsPaginas'
import Footer from '@/components/footerPaginas'

import Contact from '@/components/Contact'
import styles from './style.module.scss';






import React from 'react'

export default function paginas () {
  return (
    <div className={styles.bg}>
        <Navbar/>
      <Header/>
      <Info/>
      <Why/>
      <Cards/>



    </div>
  )
}
