import ServicePageContent from '../../components/sections/ServicePageContent'
import { getServiceBySlug } from '../../data/services'

export default function LavagemCoberturas() {
  return <ServicePageContent service={getServiceBySlug('lavagem-coberturas')} />
}
