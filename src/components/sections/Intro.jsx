import { motion } from 'framer-motion'
import SectionBadge from '../ui/SectionBadge'
import ImagePlaceholder from '../ui/ImagePlaceholder'

export default function Intro() {
  return (
    <section className="py-24 bg-white">
      <div className="container-limpa grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionBadge>✦ #1 EM LIMPEZA PÓS-OBRA NO RS</SectionBadge>
          <h2 className="text-3xl sm:text-4xl font-black text-navy leading-tight mb-6">
            Entregamos o espaço limpo, pronto para vistoria
          </h2>
          <p className="text-gray-600 leading-relaxed">
            A Limpeza Técnica LTD atende construtoras, incorporadoras, engenheiros e arquitetos
            que precisam de resultado impecável na entrega da obra. Com 20 anos de experiência,
            utilizamos metodologia profissional, produtos especializados e equipe certificada
            para remover respingos de tinta, manchas de cimento, resíduos de construção e deixar
            o imóvel pronto para entrega ou vistoria.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <ImagePlaceholder
            label="[ Foto: Equipe em Ação ]"
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
            alt="Equipe da Limpeza Técnica em ação"
            height="h-[26rem]"
          />
        </motion.div>
      </div>
    </section>
  )
}
