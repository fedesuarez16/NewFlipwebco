'use client'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesGrid from '@/components/ServicesGrid'
import HowWeWork from '@/components/HowWeWork'
import ContactSection from '@/components/ContactSection'
import FooterSection from '@/components/FooterSection'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesGrid />
        <HowWeWork />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  )
}
