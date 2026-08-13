'use client'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { services } from '@/data/services'

export default function CloudDevSecOpsPage() {
  return <ServicePageTemplate service={services['cloud-devsecops']} />
}
