import { motion } from 'framer-motion'
import { Sparkles, HardHat, ShieldCheck, Smile, ArrowRight, Building2 } from 'lucide-react'
import SectionBadge from '../ui/SectionBadge'
import Button from '../ui/Button'
import PhoneButton from '../ui/PhoneButton'
import { WHATSAPP_LINK } from '../../data/constants'

const PANEL_IMAGE = 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=1200&q=80'

const REASONS = [
  {
    icon: Sparkles,
    title: 'Resultados Impecáveis',
    description: 'Equipamentos profissionais e técnicas específicas para cada superfície pós-obra.',
    dark: false,
  },
  {
    icon: HardHat,
    title: 'Profissional e Dedicado',
    dark: true,
  },
  {
    icon: ShieldCheck,
    title: 'Serviço com Garantia',
    description: 'Se não aprovar na vistoria por falha nossa, voltamos sem custo adicional.',
    dark: false,
  },
  {
    icon: Smile,
    title: 'Satisfação Garantida',
    dark: true,
  },
]

export default function WhyUs() {
  return (
    <section id="por-que-nos" className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] items-stretch">
        <div className="relative min-h-[320px] lg:min-h-0 bg-gradient-to-br from-brand/10 to-brand/20 flex flex-col items-center justify-center gap-3">
          <Building2 className="text-brand/50" size={64} strokeWidth={1.5} />
          <span className="text-brand/60 font-semibold text-sm text-center px-4">
            [ Foto: Obra Entregue ]
          </span>
          <Sparkles size={28} className="absolute bottom-6 right-6 text-brand" />
          <Sparkles size={16} className="absolute bottom-14 right-16 text-brand/70" />
        </div>

        <div
          className="relative bg-navy px-8 py-16 lg:px-14 lg:py-20 bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${PANEL_IMAGE})` }}
        >
          <div className="absolute inset-0 bg-navy/85" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <SectionBadge light>✦ Por Que Nos Escolher?</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-10 max-w-xl">
              O que torna a <span className="text-action">Limpeza Técnica</span> diferente?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {REASONS.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-6 rounded-2xl shadow-lg ${reason.dark ? 'bg-action' : 'bg-white'}`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      reason.dark ? 'bg-white/20' : 'bg-brand/10'
                    }`}
                  >
                    <reason.icon className={reason.dark ? 'text-white' : 'text-brand'} size={24} />
                  </div>
                  <h3 className={`font-extrabold text-lg ${reason.dark ? 'text-white' : 'text-navy'}`}>
                    {reason.title}
                  </h3>
                  {reason.description && (
                    <p className="text-sm leading-relaxed mt-2 text-gray-600">{reason.description}</p>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <Button href={WHATSAPP_LINK} variant="action" icon={ArrowRight} className="flex-row-reverse">
                Solicitar Orçamento Gratuito
              </Button>
              <PhoneButton className="text-white" iconClassName="text-white" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
