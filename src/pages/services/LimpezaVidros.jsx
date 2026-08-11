import ServicePageContent from '../../components/sections/ServicePageContent'
import { getServiceBySlug } from '../../data/services'

export default function LimpezaVidros() {
  return <ServicePageContent service={getServiceBySlug('limpeza-vidros')} />
}
