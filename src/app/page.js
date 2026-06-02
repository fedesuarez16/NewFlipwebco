'use client'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ClientsSection from '@/components/ClientsSection'
import ServicesGrid from '@/components/ServicesGrid'
import ServiceShowcase from '@/components/ServiceShowcase'
import HowWeWork from '@/components/HowWeWork'
import ContactSection from '@/components/ContactSection'
import FooterSection from '@/components/FooterSection'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ClientsSection />
        <ServicesGrid />
        <ServiceShowcase />
        <HowWeWork />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  )
}
