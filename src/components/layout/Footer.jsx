import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, ChevronRight, Waves, ExternalLink } from 'lucide-react'
import { CONTACT, MAPS_EMBED_SRC } from '../../data/constants'
import logo from '../../assets/logo.png'

const FOOTER_SERVICES = [
  { label: 'Limpeza Pós-Obra', slug: 'limpeza-fachadas' },
  { label: 'Limpeza de Coberturas', slug: 'lavagem-coberturas' },
  { label: 'Hidrolavagem de Fachadas', slug: 'hidrolavagem' },
  { label: 'Limpeza de Vidros', slug: 'limpeza-vidros' },
  { label: 'Limpeza de Pisos' },
  { label: 'Limpeza para Vistoria' },
  { label: 'Limpeza de Calhas' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative bg-navy text-white overflow-hidden"
      style={{
        backgroundImage:
          'repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 24px)',
      }}
    >
      <div className="container-limpa py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img src={logo} alt="Limpeza Técnica" className="h-14 w-14 object-contain rounded-lg bg-white p-1.5" />
            <span className="font-extrabold text-xl leading-tight">
              Limpeza
              <br />
              Técnica
            </span>
          </div>
          <p className="text-white/70 leading-relaxed text-base">
            Especialistas em limpeza pós-obra com anos de experiência no Rio Grande do Sul.
            Atendemos construtoras, incorporadoras, engenheiros e arquitetos.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-5">
            <Waves size={20} className="text-brand" />
            <h4 className="font-bold text-lg">SERVIÇOS</h4>
          </div>
          <ul className="space-y-3">
            {FOOTER_SERVICES.map((service) => (
              <li key={service.label}>
                <Link
                  to={service.slug ? `/servicos/${service.slug}` : '/contato'}
                  className="flex items-center gap-2 text-white/70 hover:text-white text-base transition-colors"
                >
                  <ChevronRight size={16} className="text-brand shrink-0" />
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-5">CONTATE-NOS</h4>
          <ul className="space-y-3 text-base text-white/70">
            <li className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-action" />
              <span>{CONTACT.phone}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-action" />
              <span>{CONTACT.email}</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="shrink-0 mt-0.5 text-action" />
              <span>{CONTACT.address}</span>
            </li>
          </ul>

          <div className="h-px bg-white/10 my-5" />

          <h4 className="font-bold text-lg mb-4">HORÁRIO DE ATENDIMENTO</h4>
          <div className="space-y-2 text-base text-white/70">
            <div className="flex items-center gap-3">
              <Clock size={18} className="shrink-0" />
              <span>Seg-Sáb: {CONTACT.hours.weekdays}</span>
            </div>
            <div className="flex items-center gap-3 pl-[30px]">
              <span>Dom: {CONTACT.hours.sunday}</span>
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-lg overflow-hidden h-40 border border-white/10 mb-4">
            <iframe
              title="Mapa - rodapé"
              src={MAPS_EMBED_SRC}
              className="w-full h-full border-0 grayscale opacity-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href="https://www.google.com/maps?q=-29.75,-53.15&z=7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-base font-bold text-brand hover:text-white transition-colors"
          >
            Abrir no Maps <ExternalLink size={16} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 relative">
        <div className="container-limpa py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/50 text-sm">
          <span>Powered by Arrow Shot</span>
          <span>Copyright {year} Limpeza Técnica LTD</span>
        </div>
      </div>
    </footer>
  )
}
