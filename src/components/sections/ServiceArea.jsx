import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sparkles, MapPin } from 'lucide-react'
import SectionBadge from '../ui/SectionBadge'
import { SERVICE_CITIES, MAPS_EMBED_SRC } from '../../data/constants'

const slugify = (city) =>
  city
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/\s+/g, '-')

export default function ServiceArea() {
  return (
    <section id="atendimento" className="relative w-full">
      {/* TODO: pinos personalizados por cidade exigem a Maps JavaScript API com chave/billing do
          cliente — o embed gratuito só permite um marcador central único. */}
      <iframe
        title="Mapa da área de atendimento"
        src={MAPS_EMBED_SRC}
        className="w-full h-[450px] border-0 block"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="absolute top-6 right-6 md:top-10 md:right-10 lg:right-16 w-[calc(100%-3rem)] sm:w-96 bg-navy/95 rounded-2xl p-8 shadow-2xl"
      >
        <Sparkles size={22} className="text-brand mb-4" />
        <SectionBadge light>✦ Área de Atendimento</SectionBadge>
        <h3 className="text-2xl font-extrabold text-white leading-tight mb-6">
          Servindo nossa comunidade
        </h3>

        <div className="grid grid-cols-2 gap-3">
          {SERVICE_CITIES.map((city) => (
            <Link
              key={city}
              to={`/area/${slugify(city)}`}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-3 py-3 text-sm"
            >
              <MapPin size={16} className="text-action shrink-0" />
              <span className="font-bold text-white">{city}</span>
            </Link>
          ))}
        </div>

        <div className="flex justify-end mt-6">
          <Sparkles size={16} className="text-brand/70" />
        </div>
      </motion.div>
    </section>
  )
}
