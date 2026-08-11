import { useParams, Link } from 'react-router-dom'
import { MapPin, ArrowLeft } from 'lucide-react'
import Button from '../components/ui/Button'
import { WHATSAPP_LINK } from '../data/constants'

const cityName = (slug = '') =>
  slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

export default function AreaCidade() {
  const { cidade } = useParams()

  return (
    <section className="pt-32 pb-24 md:pt-44 bg-white min-h-screen">
      <div className="container-limpa text-center max-w-2xl mx-auto">
        <Link
          to="/#atendimento"
          className="inline-flex items-center gap-2 text-brand hover:text-brand-dark text-sm font-semibold mb-8 transition-colors"
        >
          <ArrowLeft size={16} /> Voltar para área de atendimento
        </Link>

        <div className="w-16 h-16 rounded-2xl bg-badge-bg flex items-center justify-center mx-auto mb-6">
          <MapPin size={28} className="text-brand" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight mb-4">
          Limpeza Pós-Obra em {cityName(cidade)}
        </h1>
        <p className="text-gray-600 leading-relaxed mb-10">
          Página em construção. Em breve você vai encontrar aqui detalhes do nosso atendimento em{' '}
          {cityName(cidade)}. Enquanto isso, fale com a gente pelo WhatsApp para solicitar um
          orçamento.
        </p>

        <Button href={WHATSAPP_LINK} variant="action">
          Solicitar Orçamento
        </Button>
      </div>
    </section>
  )
}
