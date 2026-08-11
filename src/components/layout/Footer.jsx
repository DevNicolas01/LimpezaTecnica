import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { services } from '../../data/services'
import { CONTACT, MAPS_EMBED_SRC } from '../../data/constants'
import logo from '../../assets/logo.png'

const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: '#',
    path: 'M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z',
  },
  {
    label: 'Instagram',
    href: '#',
    path: 'M12 2c2.7 0 3.1 0 4.1.1 1.1 0 1.8.2 2.5.5.7.3 1.2.6 1.8 1.2.6.6.9 1.1 1.2 1.8.3.7.5 1.4.5 2.5.1 1 .1 1.4.1 4.1s0 3.1-.1 4.1c0 1.1-.2 1.8-.5 2.5-.3.7-.6 1.2-1.2 1.8-.6.6-1.1.9-1.8 1.2-.7.3-1.4.5-2.5.5-1 .1-1.4.1-4.1.1s-3.1 0-4.1-.1c-1.1 0-1.8-.2-2.5-.5-.7-.3-1.2-.6-1.8-1.2-.6-.6-.9-1.1-1.2-1.8-.3-.7-.5-1.4-.5-2.5C2 15.1 2 14.7 2 12s0-3.1.1-4.1c0-1.1.2-1.8.5-2.5.3-.7.6-1.2 1.2-1.8.6-.6 1.1-.9 1.8-1.2.7-.3 1.4-.5 2.5-.5C8.9 2 9.3 2 12 2Zm0 1.8c-2.6 0-3 0-4 .1-.9 0-1.4.2-1.7.3-.4.2-.7.3-1 .6-.3.3-.5.6-.6 1-.1.3-.3.8-.3 1.7-.1 1-.1 1.4-.1 4s0 3 .1 4c0 .9.2 1.4.3 1.7.2.4.3.7.6 1 .3.3.6.5 1 .6.3.1.8.3 1.7.3 1 .1 1.4.1 4 .1s3 0 4-.1c.9 0 1.4-.2 1.7-.3.4-.2.7-.3 1-.6.3-.3.5-.6.6-1 .1-.3.3-.8.3-1.7.1-1 .1-1.4.1-4s0-3-.1-4c0-.9-.2-1.4-.3-1.7-.2-.4-.3-.7-.6-1-.3-.3-.6-.5-1-.6-.3-.1-.8-.3-1.7-.3-1-.1-1.4-.1-4-.1Zm0 3.5a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4Zm0 1.8a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Zm4.9-2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z',
  },
  {
    label: 'LinkedIn',
    href: '#',
    path: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.9-2 3.9-2 4.1 0 4.9 2.7 4.9 6.3V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9-1.8 0-2.1 1.4-2.1 2.8V21h-4V9Z',
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white">
      <div className="container-limpa py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Limpeza Técnica" className="h-11 w-11 object-contain rounded-lg bg-white p-1" />
            <span className="font-extrabold text-lg leading-tight">
              Limpeza
              <br />
              Técnica
            </span>
          </div>
          <p className="text-white/70 leading-relaxed text-sm mb-6">
            Especialistas em limpeza pós-obra com 20 anos de experiência no Rio Grande do Sul.
            Atendemos construtoras, incorporadoras, engenheiros e arquitetos.
          </p>
          <div className="flex gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-action flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4">Serviços</h4>
          <ul className="space-y-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  to={`/servicos/${service.slug}`}
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4">Contato</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="shrink-0 mt-0.5" />
              <span>{CONTACT.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="shrink-0" />
              <span>{CONTACT.phone}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0" />
              <span>{CONTACT.email}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4">Horário de Atendimento</h4>
          <div className="flex items-start gap-3 text-sm text-white/70 mb-4">
            <Clock size={18} className="shrink-0 mt-0.5" />
            <span>{CONTACT.hours}</span>
          </div>
          {/* TODO: Substituir pelo embed real do Google Maps (src/data/constants.js -> MAPS_EMBED_SRC) */}
          <div className="rounded-lg overflow-hidden h-32 border border-white/10">
            <iframe
              title="Mapa - rodapé"
              src={MAPS_EMBED_SRC}
              className="w-full h-full border-0 grayscale opacity-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-limpa py-6 text-center text-white/50 text-sm">
          © {year} Limpeza Técnica. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
