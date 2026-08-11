import { motion } from 'framer-motion'
import { Phone, Star, ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import WaveDivider from '../ui/WaveDivider'
import { CONTACT, WHATSAPP_LINK } from '../../data/constants'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80'

export default function Hero() {
  return (
    <section className="relative">
      <div
        className="relative bg-cover bg-center pt-40 pb-28 lg:pt-48 lg:pb-36"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(100deg, rgba(10,20,50,0.92) 0%, rgba(10,20,50,0.82) 45%, rgba(10,20,50,0.55) 75%, rgba(10,20,50,0.35) 100%)',
          }}
        />

        <div className="container-limpa relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-[4.2rem] font-black text-white leading-[1.05] tracking-tight max-w-2xl"
            >
              Especialistas em Limpeza Pós-Obra no Rio Grande do Sul
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-lg sm:text-xl text-white/90 max-w-xl font-medium"
            >
              Deixamos o espaço pronto para entrega ou vistoria. Equipe treinada, produtos
              especializados e 20 anos de experiência.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button href={WHATSAPP_LINK} variant="action" className="uppercase">
                Solicitar Orçamento
              </Button>
              <a
                href={`tel:${CONTACT.phone.replace(/\D/g, '')}`}
                className="inline-flex items-center justify-center gap-3 bg-navy-light/80 border border-white/15 hover:bg-navy-light text-white font-bold px-7 py-3.5 rounded-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <span className="w-9 h-9 rounded-full bg-blue-light flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-white" />
                </span>
                {CONTACT.phone}
              </a>
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
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-navy">5.0 — Avaliação Google</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex lg:col-span-2 justify-end"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-action hover:bg-action-dark text-white font-extrabold uppercase text-sm tracking-wider px-8 py-5 rounded-lg shadow-2xl transition-all duration-200 hover:-translate-y-1"
            >
              Orçamento Rápido <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>

      <WaveDivider className="relative -mt-1" />
    </section>
  )
}
