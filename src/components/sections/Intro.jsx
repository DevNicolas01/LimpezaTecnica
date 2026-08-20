import { motion } from 'framer-motion'
import { HardHat } from 'lucide-react'
import SectionBadge from '../ui/SectionBadge'
import StackedPhotos from '../ui/StackedPhotos'
import Button from '../ui/Button'
import PhoneButton from '../ui/PhoneButton'
import { WHATSAPP_LINK } from '../../data/constants'

export default function Intro() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand/10 pointer-events-none" />
      <div className="absolute top-1/3 -left-16 w-56 h-56 rounded-full bg-brand/10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-40 h-40 rounded-full bg-brand/10 pointer-events-none" />
      {/* TODO: substituir pela silhueta real (PNG) do profissional fornecida pelo cliente */}
      <HardHat
        className="hidden lg:block absolute bottom-6 right-10 text-brand/10 pointer-events-none"
        size={130}
        strokeWidth={1}
      />

      <div className="container-limpa grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative">
        <StackedPhotos
          beforeLabel="[ Foto: ANTES ]"
          afterLabel="[ Foto: DEPOIS ]"
          offset="-translate-x-3 translate-y-3"
        />

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionBadge>✦ #1 Especialistas em Limpeza Pós-Obra</SectionBadge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight mb-6">
            Veja a diferença da Limpeza Técnica
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A Limpeza Técnica LTD nasceu para atender construtoras, incorporadoras, engenheiros e
            arquitetos que precisam de resultado impecável na entrega da obra. Removemos respingos
            de tinta, manchas de cimento e resíduos de construção em todas as superfícies.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Cada obra é avaliada antes do início do serviço: identificamos o tipo de sujidade e o
            material a ser tratado para definir a técnica ideal, garantindo segurança e um
            resultado aprovado em qualquer vistoria.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <Button href={WHATSAPP_LINK} variant="action" className="uppercase">
              Orçamento Grátis
            </Button>
            <PhoneButton />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
