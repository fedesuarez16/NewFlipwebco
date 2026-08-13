'use client'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ClientsSection from '@/components/ClientsSection'
import ServicesGrid from '@/components/ServicesGrid'
import CaseStudiesSection from '@/components/CaseStudiesSection'
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
        <CaseStudiesSection />
        <ServiceShowcase />
        <HowWeWork />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  )
}
