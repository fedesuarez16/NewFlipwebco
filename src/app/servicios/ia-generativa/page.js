'use client'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { services } from '@/data/services'

export default function IaGenerativaPage() {
  return <ServicePageTemplate service={services['ia-generativa']} />
}
