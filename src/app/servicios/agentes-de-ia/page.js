'use client'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { services } from '@/data/services'

export default function AgentesDeIaPage() {
  return <ServicePageTemplate service={services['agentes-de-ia']} />
}
