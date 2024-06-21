import Header from '@/components/HeaderPaginas'
import Navbar from '@/components/navbarPaginas'
import Info from '@/components/InfoPaginas'
import Why from '@/components/whyPaginas'
import Cards from '@/components/cardsPaginas'
import Contact from '@/components/Contact'





import React from 'react'

export default function paginas () {
  return (
    <div>
        <Navbar/>
      <Header/>
      <Info/>
      <Why/>
      <Cards/>



    </div>
  )
}
