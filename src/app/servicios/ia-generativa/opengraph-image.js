import { services } from '@/data/services'
import { renderServiceOgImage, ogSize } from '@/lib/serviceOgImage'

const service = services['ia-generativa']

export const runtime = 'nodejs'
export const alt = service.meta.ogTitle
export const size = ogSize
export const contentType = 'image/png'

export default function Image() {
  return renderServiceOgImage(service)
}
