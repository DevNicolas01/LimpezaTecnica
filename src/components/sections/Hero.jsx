import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Button from '../ui/Button'
import PhoneButton from '../ui/PhoneButton'
import WaveDivider from '../ui/WaveDivider'
import { WHATSAPP_LINK } from '../../data/constants'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80'

export default function Hero() {
  return (
    <section className="relative">
      <div
        className="relative bg-cover bg-center pt-28 md:pt-[170px] pb-28 lg:pb-36"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(10,20,50,0.72)' }} />

        <div className="container-limpa relative z-10">
          <div className="max-w-2xl lg:w-1/2">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight"
            >
              Especialistas Nº1 em Limpeza Pós-Obra no RS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-lg sm:text-xl text-white/90 max-w-xl"
            >
              Sua equipe profissional para cada desafio de limpeza pós-obra.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6"
            >
              <Button href={WHATSAPP_LINK} variant="action" className="uppercase">
                Solicitar Orçamento
              </Button>
              <PhoneButton className="text-white" iconClassName="text-white" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 inline-flex items-center gap-3 bg-white/95 rounded-xl px-5 py-3 shadow-lg"
            >
              <span className="text-2xl font-black">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </span>
              <div className="w-px h-8 bg-gray-200" />
              <div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <span className="text-xs font-bold text-navy">5.0 — Avaliação Google</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <WaveDivider className="relative -mt-1" />
    </section>
  )
}
