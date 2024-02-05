import Contact from '@/components/Contact'
import React from 'react'
import Proj from '@/components/Proj'
import Header from '@/components/HeaderApps'
import Service from '@/components/introServiceApp.jsx/index.jsx'
import AppsColumn from '@/components/AppsColumn'
import AppText from '@/components/AppText'


export default function apps () {
  return (
    <div>
     <Header/>
     <Service/>
     <AppsColumn/>
     <AppText/>
      <Proj/>
      <Contact/>



    </div>
  )
}
