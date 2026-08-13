'use client'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { services } from '@/data/services'

export default function PlataformasDeDatosPage() {
  return <ServicePageTemplate service={services['plataformas-de-datos']} />
}
