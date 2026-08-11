import { motion } from 'framer-motion'
import { PhoneCall, CalendarCheck, CheckCircle2 } from 'lucide-react'
import SectionBadge from '../ui/SectionBadge'
import Button from '../ui/Button'
import { WHATSAPP_LINK } from '../../data/constants'

const STEPS = [
  {
    icon: PhoneCall,
    step: '01',
    title: 'Solicite um Orçamento',
    description: 'Entre em contato pelo WhatsApp, telefone ou formulário e conte o que você precisa.',
  },
  {
    icon: CalendarCheck,
    step: '02',
    title: 'Agendamos o Serviço',
    description: 'Avaliamos o local, definimos a técnica ideal e marcamos a melhor data para você.',
  },
  {
    icon: CheckCircle2,
    step: '03',
    title: 'Obra Pronta para Entrega',
    description: 'Nossa equipe finaliza a limpeza e o imóvel fica pronto para vistoria e entrega.',
  },
]

export default function NextSteps() {
  return (
    <section className="py-24 bg-gray-light">
      <div className="container-limpa">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <SectionBadge>✦ O Que Fazer Agora</SectionBadge>
          <h2 className="text-3xl sm:text-4xl font-black text-navy leading-tight">
            Simples, rápido e sem complicação
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {STEPS.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex items-start gap-5 bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="relative w-16 h-16 rounded-full bg-blue/10 border-2 border-blue flex items-center justify-center shrink-0">
                <item.icon size={26} className="text-blue" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-action text-white font-black text-xs flex items-center justify-center">
                  {item.step}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-navy mb-1.5">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button href={WHATSAPP_LINK} variant="action">
            Solicite um Orçamento Agora
          </Button>
        </div>
      </div>
    </section>
  )
}
