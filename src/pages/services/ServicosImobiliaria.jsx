import ServicePageContent from '../../components/sections/ServicePageContent'
import { getServiceBySlug } from '../../data/services'

export default function ServicosImobiliaria() {
  return <ServicePageContent service={getServiceBySlug('servicos-imobiliaria')} />
}
