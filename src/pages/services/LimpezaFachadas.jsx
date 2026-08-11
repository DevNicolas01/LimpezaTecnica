import ServicePageContent from '../../components/sections/ServicePageContent'
import { getServiceBySlug } from '../../data/services'

export default function LimpezaFachadas() {
  return <ServicePageContent service={getServiceBySlug('limpeza-fachadas')} />
}
