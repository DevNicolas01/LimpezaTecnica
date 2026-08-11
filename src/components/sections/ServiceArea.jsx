import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import SectionBadge from '../ui/SectionBadge'
import { SERVICE_CITIES, MAPS_EMBED_SRC } from '../../data/constants'

export default function ServiceArea() {
  return (
    <section id="atendimento" className="py-24 bg-white">
      <div className="container-limpa">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <SectionBadge>✦ Área de Atendimento</SectionBadge>
          <h2 className="text-3xl sm:text-4xl font-black text-navy leading-tight">
            Cidades atendidas
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-lg min-h-[320px]"
          >
            {/* TODO: Substituir pelo embed real do Google Maps da região atendida (src/data/constants.js -> MAPS_EMBED_SRC) */}
            <iframe
              title="Mapa da área de atendimento"
              src={MAPS_EMBED_SRC}
              className="w-full h-full min-h-[320px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 content-start"
          >
            {SERVICE_CITIES.map((city) => (
              <div
                key={city}
                className="flex items-center gap-2 bg-action hover:bg-action-dark transition-colors rounded-lg px-4 py-3.5 shadow-sm"
              >
                <MapPin size={18} className="text-white shrink-0" />
                <span className="font-bold text-white text-sm">{city}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-10 max-w-xl mx-auto">
          Não encontrou sua cidade? Entre em contato — atendemos também outras localidades da
          região mediante consulta.
        </p>
      </div>
    </section>
  )
}
