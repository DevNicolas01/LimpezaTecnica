import { motion } from 'framer-motion'
import { Phone, Star } from 'lucide-react'
import { CONTACT, WHATSAPP_LINK } from '../../data/constants'
import teamPhoto from '../../assets/DSC_4830.png'
import heroBackground from '../../assets/fundo1.jpg'

const HERO_IMAGE = heroBackground

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="relative bg-cover bg-center pt-28 md:pt-[170px] pb-80 sm:pb-96 lg:pb-72"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(10,20,50,0.72)' }} />

        <div className="container-limpa relative z-10">
          <div className="max-w-2xl lg:w-[640px]">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-black text-white leading-tight"
            >
              Especialistas Nº1 em
              <br />
              Limpeza Pós-Obra no RS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg text-white/90 max-w-[500px]"
            >
              Sua equipe profissional para cada desafio de limpeza pós-obra.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-whatsapp hover:bg-[#1DA851] text-white font-bold uppercase px-7 py-4 text-sm transition-colors"
              >
                Solicitar Orçamento
              </a>
              <a
                href={`tel:${CONTACT.phone.replace(/\D/g, '')}`}
                className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity"
              >
                <div className="w-11 h-11 rounded-full bg-white/20 border border-white/30 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-white" />
                </div>
                <span className="font-semibold text-lg whitespace-nowrap">{CONTACT.phone}</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 flex flex-col gap-1"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </span>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <span className="text-white text-sm">5.0 — Avaliação Google</span>
            </motion.div>
          </div>
        </div>

        <motion.img
          src={teamPhoto}
          alt="Equipe Limpeza Técnica"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="block absolute bottom-20 right-2 h-48 sm:h-56 sm:right-4 sm:bottom-24 md:h-64 lg:h-[620px] lg:bottom-10 lg:-right-28 xl:h-[740px] xl:-right-16 w-auto object-contain object-bottom pointer-events-none select-none"
        />

        <div className="absolute left-0 w-full overflow-hidden leading-none" style={{ height: '190px', bottom: '0' }}>
          <svg
            viewBox="0 0 2880 220"
            preserveAspectRatio="none"
            className="absolute inset-0 w-[200%] h-full animate-wave-slow"
          >
            <path
              d="M0,70 C200,140 400,0 600,80 C800,160 1000,20 1200,90 C1320,130 1380,60 1440,80 C1640,140 1840,0 2040,80 C2240,160 2440,20 2640,90 C2760,130 2820,60 2880,80 L2880,215 C2640,224 2400,206 2160,215 C1920,224 1680,206 1440,215 C1200,224 960,206 720,215 C480,224 240,206 0,215 Z"
              fill="#15399B"
              opacity="0.55"
            />
          </svg>
          <svg
            viewBox="0 0 2880 220"
            preserveAspectRatio="none"
            className="absolute inset-0 w-[200%] h-full animate-wave-medium"
          >
            <path
              d="M0,100 C360,150 1080,50 1440,100 C1800,150 2520,50 2880,100 L2880,216 C2380,207 1940,225 1440,216 C940,207 500,225 0,216 Z"
              fill="#6D93E8"
              opacity="0.7"
            />
          </svg>
          <svg
            viewBox="0 0 2880 220"
            preserveAspectRatio="none"
            className="absolute inset-0 w-[200%] h-full animate-wave-fast"
          >
            <path
              d="M0,90 C250,30 500,120 750,60 C1000,0 1200,100 1440,70 C1690,30 1940,120 2190,60 C2440,0 2640,100 2880,70 L2880,214 C2660,207 2420,223 2160,214 C1900,205 1660,225 1440,214 C1220,207 980,223 720,214 C460,205 220,225 0,214 Z"
              fill="#1B4FC4"
              opacity="0.9"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-white" style={{ height: '14px' }} />
      </div>
    </section>
  )
}
