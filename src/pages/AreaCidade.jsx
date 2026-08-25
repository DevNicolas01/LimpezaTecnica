import { useParams, Link } from 'react-router-dom'
import { MapPin, ArrowLeft, ArrowRight } from 'lucide-react'
import Button from '../components/ui/Button'
import { WHATSAPP_LINK } from '../data/constants'
import { getServiceCityBySlug } from '../data/serviceCities'
import { portfolio } from '../data/portfolio'
import { portfolioPins } from '../data/portfolioPins'

export default function AreaCidade() {
  const { cidade } = useParams()
  const city = getServiceCityBySlug(cidade)
  const cityName = city?.name ?? cidade

  const normalized = cityName.toLowerCase()
  const matchedPins = portfolioPins.filter((pin) => pin.city.toLowerCase() === normalized)
  const matchedProjects = portfolio.filter((item) => item.city?.toLowerCase() === normalized)
  const hasResults = matchedPins.length > 0 || matchedProjects.length > 0

  return (
    <section className="pt-32 pb-24 md:pt-44 bg-white min-h-screen">
      <div className="container-limpa">
        <Link
          to="/#atendimento"
          className="inline-flex items-center gap-2 text-brand hover:text-brand-dark text-sm font-semibold mb-8 transition-colors"
        >
          <ArrowLeft size={16} /> Voltar para área de atendimento
        </Link>

        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="w-16 h-16 rounded-2xl bg-badge-bg flex items-center justify-center mx-auto mb-6">
            <MapPin size={28} className="text-brand" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight mb-4">
            Limpeza Pós-Obra em {cityName}
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            {hasResults
              ? `Confira alguns dos serviços de limpeza pós-obra que já realizamos em ${cityName}.`
              : `Ainda não publicamos fotos de projetos em ${cityName}, mas atendemos toda a região. Fale com a gente e solicite um orçamento sem compromisso.`}
          </p>

          <Button href={WHATSAPP_LINK} variant="action">
            Solicitar Orçamento
          </Button>
        </div>

        {hasResults && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {matchedPins.map((pin) => (
              <div
                key={pin.id}
                className="rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col"
              >
                <img src={pin.photo} alt={pin.client} className="w-full h-48 object-cover" />
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <img
                      src={pin.logo}
                      alt={pin.client}
                      className="w-8 h-8 object-contain rounded bg-navy p-1 shrink-0"
                    />
                    <span className="font-bold text-navy text-sm">{pin.client}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                    {pin.description}
                  </p>
                  {pin.serviceSlug && (
                    <Link
                      to={`/servicos/${pin.serviceSlug}`}
                      className="text-brand hover:text-brand-dark font-bold text-sm inline-flex items-center gap-1"
                    >
                      Ver serviço <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            ))}

            {matchedProjects.map((item) => (
              <div
                key={item.responsible + item.date}
                className="rounded-2xl overflow-hidden shadow-md border border-gray-100 p-5 flex flex-col"
              >
                <span className="inline-block bg-badge-bg text-brand text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full mb-3 self-start">
                  {item.category}
                </span>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                  {item.description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                  <span>{item.responsible}</span>
                  <span>{item.date}</span>
                </div>
                {item.serviceSlug && (
                  <Link
                    to={`/servicos/${item.serviceSlug}`}
                    className="text-brand hover:text-brand-dark font-bold text-sm inline-flex items-center gap-1"
                  >
                    Ver serviço <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
