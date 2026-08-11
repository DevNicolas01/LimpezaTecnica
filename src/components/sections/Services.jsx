import { motion } from 'framer-motion'
import SectionBadge from '../ui/SectionBadge'
import ServiceCard from '../ui/ServiceCard'
import { services } from '../../data/services'

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-gray-light">
      <div className="container-limpa">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <SectionBadge>✦ Nossos Serviços</SectionBadge>
          <h2 className="text-3xl sm:text-4xl font-black text-navy leading-tight">
            Soluções completas em limpeza técnica
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
