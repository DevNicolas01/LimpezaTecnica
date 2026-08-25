import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import SectionBadge from '../ui/SectionBadge'
import { portfolioPins } from '../../data/portfolioPins'
import { CONTACT } from '../../data/constants'

// O mapa carrega a biblioteca Leaflet (pesada) — separada em chunk próprio
// para não engordar o bundle inicial de páginas que não usam mapa.
const PortfolioMap = lazy(() => import('../ui/PortfolioMap'))

// lucide-react não inclui ícones de marca (política do projeto) — usamos o glifo do Facebook direto.
const FACEBOOK_PATH =
  'M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z'

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container-limpa">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <SectionBadge>✦ Portfólio</SectionBadge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight mb-4">
            Nossos Projetos no RS
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Clique em um pino no mapa para ver fotos reais, o cliente e o serviço realizado em
            cada obra entregue.
          </p>
        </motion.div>

        <Suspense fallback={<div className="w-full h-[560px] rounded-2xl bg-gray-light animate-pulse" />}>
          <PortfolioMap pins={portfolioPins} height={560} />
        </Suspense>

        <div className="flex justify-end mt-8">
          <a
            href={CONTACT.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-11 h-11 rounded-full bg-badge-bg hover:bg-brand hover:text-white text-brand flex items-center justify-center transition-colors"
          >
            <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
              <path d={FACEBOOK_PATH} />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
