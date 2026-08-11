import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import PhoneButton from '../ui/PhoneButton'
import TestimonialCard from '../ui/TestimonialCard'
import SectionBadge from '../ui/SectionBadge'
import logo from '../../assets/logo.png'
import { testimonials } from '../../data/testimonials'
import { WHATSAPP_LINK } from '../../data/constants'

const PANEL_IMAGE = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80'

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const visible = [0, 1, 2].map((offset) => {
    const i = (index + offset) % testimonials.length
    return { ...testimonials[i], i }
  })

  return (
    <section id="depoimentos" className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] items-stretch">
        <div className="relative bg-gray-light px-6 py-16 lg:py-20 overflow-hidden">
          <div>
            <SectionBadge>✦ Depoimentos de Nossos Clientes</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight mb-10">
              O que eles dizem
            </h2>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  {visible.map((testimonial) => (
                    <TestimonialCard key={testimonial.name} index={testimonial.i} {...testimonial} />
                  ))}
                </motion.div>
              </AnimatePresence>

              <button
                onClick={next}
                aria-label="Próximo depoimento"
                className="mt-8 mx-auto flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-md border border-gray-200 text-brand hover:bg-brand hover:text-white transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div
          className="relative px-8 py-16 flex items-center bg-cover bg-center"
          style={{ backgroundImage: `url(${PANEL_IMAGE})` }}
        >
          <div className="absolute inset-0 bg-brand/90" />

          <div className="relative z-10 flex flex-col items-start">
            <SectionBadge light>✦ Depoimentos de Nossos Clientes</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-8">
              O que eles dizem
            </h2>
            <div className="flex flex-col gap-5 items-start mb-10">
              <Button href={WHATSAPP_LINK} variant="action" icon={ArrowRight} className="flex-row-reverse">
                Solicitar Orçamento Gratuito
              </Button>
              <PhoneButton className="text-white" iconClassName="text-white" />
            </div>
            <img src={logo} alt="Limpeza Técnica" className="h-14 w-14 object-contain rounded-lg bg-white p-1.5" />
          </div>
        </div>
      </div>
    </section>
  )
}
