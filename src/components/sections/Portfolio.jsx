import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Building2 } from 'lucide-react'
import SectionBadge from '../ui/SectionBadge'
import { portfolio } from '../../data/portfolio'
import { MAPS_EMBED_SRC } from '../../data/constants'

// lucide-react não inclui ícones de marca (política do projeto) — usamos o glifo do Facebook direto.
const FACEBOOK_PATH =
  'M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z'

export default function Portfolio() {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => {
    setIndex((i) => (i + 2) % portfolio.length)
  }, [])

  const prev = useCallback(() => {
    setIndex((i) => (i - 2 + portfolio.length) % portfolio.length)
  }, [])

  const visible = [0, 1].map((offset) => portfolio[(index + offset) % portfolio.length])

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container-limpa">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <SectionBadge>✦ Portfólio</SectionBadge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight">
            Nossos Projetos no RS
          </h2>
        </motion.div>

        {/* TODO: cluster de ~8 pinos exige a Maps JavaScript API com chave/billing do cliente. */}
        <div className="rounded-2xl overflow-hidden shadow-lg mb-14 max-w-4xl mx-auto">
          <iframe
            title="Mapa de projetos no RS"
            src={MAPS_EMBED_SRC}
            className="w-full h-[350px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prev}
            aria-label="Projeto anterior"
            className="hidden sm:flex w-11 h-11 rounded-full bg-white border border-gray-200 shadow-sm items-center justify-center text-navy hover:bg-brand hover:text-white hover:border-brand transition-colors shrink-0"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="relative flex-1 max-w-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {visible.map((project) => (
                  <div
                    key={project.responsible + project.date}
                    className="rounded-2xl overflow-hidden shadow-md border border-gray-100"
                  >
                    <div className="relative h-[220px] bg-gradient-to-br from-brand/15 to-brand/25 flex flex-col items-center justify-center gap-2">
                      <Building2 className="text-brand/50" size={40} strokeWidth={1.5} />
                      <span className="text-brand/60 font-semibold text-xs">[ Foto: Projeto ]</span>
                      <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between bg-gradient-to-t from-black/60 to-transparent">
                        <span className="font-bold text-white text-sm">{project.responsible}</span>
                        <span className="text-white/80 text-xs">{project.date}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <span className="inline-block bg-badge-bg text-brand text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={next}
            aria-label="Próximo projeto"
            className="hidden sm:flex w-11 h-11 rounded-full bg-white border border-gray-200 shadow-sm items-center justify-center text-navy hover:bg-brand hover:text-white hover:border-brand transition-colors shrink-0"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex sm:hidden justify-center gap-6 mt-6">
          <button
            onClick={prev}
            aria-label="Projeto anterior"
            className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-navy"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            aria-label="Próximo projeto"
            className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-navy"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex justify-end mt-8">
          {/* TODO: substituir pelo link real da página do Facebook do cliente. */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-11 h-11 rounded-full bg-badge-bg hover:bg-brand hover:text-white text-brand flex items-center justify-center transition-colors"
          >
            <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
              <path d={FACEBOOK_PATH} />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
