import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, ChevronRight, Waves, ExternalLink } from 'lucide-react'
import { CONTACT, MAPS_EMBED_SRC } from '../../data/constants'
import logo from '../../assets/logo.png'

// lucide-react não inclui ícones de marca (política do projeto) — usamos os glifos direto.
const FACEBOOK_PATH =
  'M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z'
const INSTAGRAM_PATH =
  'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56a5.89 5.89 0 0 0-2.13 1.38A5.89 5.89 0 0 0 .63 4.14C.33 4.9.13 5.77.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.63.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56a5.89 5.89 0 0 0 2.13-1.38 5.89 5.89 0 0 0 1.38-2.13c.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.89 5.89 0 0 0-1.38-2.13A5.89 5.89 0 0 0 19.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z'

const FOOTER_SERVICES = [
  { label: 'Limpeza Pós-Obra', slug: 'limpeza-fachadas' },
  { label: 'Serviços para Imobiliárias', slug: 'servicos-imobiliaria' },
  { label: 'Limpeza de Coberturas', slug: 'lavagem-coberturas' },
  { label: 'Hidrolavagem de Fachadas', slug: 'hidrolavagem' },
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

          <div className="flex items-center gap-3 mt-6">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand text-white flex items-center justify-center transition-colors"
            >
              <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor">
                <path d={INSTAGRAM_PATH} />
              </svg>
            </a>
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand text-white flex items-center justify-center transition-colors"
            >
              <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor">
                <path d={FACEBOOK_PATH} />
              </svg>
            </a>
          </div>
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
          <span>
            Copyright {year} Limpeza Técnica — CNPJ {CONTACT.cnpj}
          </span>
        </div>
      </div>
    </footer>
  )
}
