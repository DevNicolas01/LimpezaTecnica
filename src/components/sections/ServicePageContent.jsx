import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import SectionBadge from '../ui/SectionBadge'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import Button from '../ui/Button'
import { WHATSAPP_LINK } from '../../data/constants'

export default function ServicePageContent({ service }) {
  const { icon: Icon, title, shortDescription, description, benefits, imageLabel, image } = service

  return (
    <>
      <section className="bg-gradient-to-br from-navy via-brand to-navy text-white pt-32 pb-20 md:pt-44">
        <div className="container-limpa">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-semibold mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Voltar para Home
          </Link>

          <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mb-6">
            <Icon size={30} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight max-w-3xl mb-4">{title}</h1>
          <p className="text-lg text-white/85 max-w-2xl">{shortDescription}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-limpa grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <SectionBadge>✦ Sobre o Serviço</SectionBadge>
            {description.map((paragraph, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ImagePlaceholder label={imageLabel} src={image} alt={title} height="h-96" className="mb-8" />

            <h3 className="font-bold text-xl text-navy mb-4">Benefícios</h3>
            <ul className="space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-whatsapp shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-navy text-white text-center">
        <div className="container-limpa flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight max-w-2xl mb-4">
            Pronto para transformar o seu espaço?
          </h2>
          <p className="text-white/80 max-w-xl mb-8">
            Fale agora com nossa equipe e solicite um orçamento sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href={WHATSAPP_LINK} variant="action">
              Solicitar Orçamento
            </Button>
            <Button to="/contato" variant="outline">
              Ir para Contato
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
