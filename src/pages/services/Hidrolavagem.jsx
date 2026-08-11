import ServicePageContent from '../../components/sections/ServicePageContent'
import { getServiceBySlug } from '../../data/services'

export default function Hidrolavagem() {
  return <ServicePageContent service={getServiceBySlug('hidrolavagem')} />
}
