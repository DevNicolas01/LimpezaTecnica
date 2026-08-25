import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sparkles, MapPin, ArrowRight } from 'lucide-react'
import SectionBadge from '../ui/SectionBadge'
import { serviceCities } from '../../data/serviceCities'

// O mapa carrega a biblioteca Leaflet (pesada) — separada em chunk próprio
// para não engordar o bundle inicial de páginas que não usam mapa.
const ServiceAreaMap = lazy(() => import('../ui/ServiceAreaMap'))

export default function ServiceArea() {
  return (
    <section id="atendimento" className="py-24 bg-gray-light">
      <div className="container-limpa">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <SectionBadge>✦ Área de Atendimento</SectionBadge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight mb-4">
            Servindo nossa comunidade
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Clique em uma cidade no mapa ou na lista ao lado para ver os serviços que já
            realizamos por lá.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          <Suspense
            fallback={
              <div className="w-full lg:flex-1 min-w-0 h-[450px] rounded-2xl bg-white/50 animate-pulse" />
            }
          >
            <ServiceAreaMap cities={serviceCities} height={450} />
          </Suspense>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[360px] shrink-0 bg-navy rounded-2xl p-8 shadow-lg flex flex-col"
          >
            <Sparkles size={22} className="text-brand mb-4" />
            <h3 className="text-xl font-extrabold text-white leading-tight mb-6">
              Nossas cidades atendidas
            </h3>

            <div className="grid grid-cols-1 gap-3 flex-1">
              {serviceCities.map((city) => (
                <Link
                  key={city.slug}
                  to={`/area/${city.slug}`}
                  className="group flex items-center justify-between gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-4 py-3.5"
                >
                  <span className="flex items-center gap-2 font-bold text-white text-sm">
                    <MapPin size={16} className="text-action shrink-0" />
                    {city.name}
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-white/50 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0"
                  />
                </Link>
              ))}
            </div>

            <div className="flex justify-end mt-6">
              <Sparkles size={16} className="text-brand/70" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
