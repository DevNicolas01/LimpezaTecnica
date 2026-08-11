import { motion } from 'framer-motion'
import { Sparkles, ShieldCheck, HardHat, ClipboardList } from 'lucide-react'
import SectionBadge from '../ui/SectionBadge'
import ImagePlaceholder from '../ui/ImagePlaceholder'

const REASONS = [
  {
    icon: Sparkles,
    title: '20 Anos de Experiência',
    description:
      'Referência em limpeza pós-obra no Rio Grande do Sul, com centenas de obras entregues.',
    dark: false,
  },
  {
    icon: ShieldCheck,
    title: 'Garantia de Resultado',
    description: 'Se não aprovar na vistoria por falha nossa, voltamos sem custo.',
    dark: true,
  },
  {
    icon: HardHat,
    title: 'Equipe Certificada',
    description:
      'Profissionais treinados com EPI completo e produtos certificados para pós-obra.',
    dark: false,
  },
  {
    icon: ClipboardList,
    title: 'Prazo Garantido',
    description: 'Cumprimos os prazos da construtora. Atendemos chamados emergenciais em todo o RS.',
    dark: true,
  },
]

export default function WhyUs() {
  return (
    <section
      id="por-que-nos"
      className="py-24 bg-navy relative overflow-hidden"
      style={{
        backgroundImage:
          'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
        backgroundSize: '22px 22px',
      }}
    >
      <div className="container-limpa grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionBadge light>✦ Por Que Nós</SectionBadge>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-6">
            Por que escolher a Limpeza Técnica
          </h2>
          <ImagePlaceholder
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
            alt="Profissional da Limpeza Técnica trabalhando"
            height="h-96"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {REASONS.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className={`p-7 rounded-2xl shadow-lg ${
                reason.dark ? 'bg-action' : 'bg-white'
              }`}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                  reason.dark ? 'bg-white/20' : 'bg-blue/10'
                }`}
              >
                <reason.icon className={reason.dark ? 'text-white' : 'text-blue'} size={26} />
              </div>
              <h3 className={`font-bold text-lg mb-2 ${reason.dark ? 'text-white' : 'text-navy'}`}>
                {reason.title}
              </h3>
              <p className={`text-sm leading-relaxed ${reason.dark ? 'text-white/85' : 'text-gray-600'}`}>
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
