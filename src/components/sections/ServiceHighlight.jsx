import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import SectionBadge from '../ui/SectionBadge'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import Button from '../ui/Button'
import { WHATSAPP_LINK } from '../../data/constants'

export default function ServiceHighlight({
  badge,
  title,
  description,
  bullets = [],
  imagePosition = 'right',
  imageLabel,
  image,
  ctaTo,
}) {
  const imageOrderClass = imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2'
  const textOrderClass = imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1'
  const dotPosition = imagePosition === 'left' ? '-right-6 -bottom-6' : '-left-6 -bottom-6'

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-limpa grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: imagePosition === 'left' ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className={textOrderClass}
        >
          <SectionBadge>{badge}</SectionBadge>
          <h2 className="text-3xl sm:text-4xl font-black text-navy leading-tight mb-6">
            {title}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

          {bullets.length > 0 && (
            <ul className="space-y-3 mb-8">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-check shrink-0 mt-0.5" />
                  <span className="text-gray-700">{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <Button href={WHATSAPP_LINK} variant="action" icon={ArrowRight} className="flex-row-reverse">
              Solicitar Orçamento
            </Button>
            {ctaTo && (
              <Button to={ctaTo} variant="primary">
                Saiba Mais
              </Button>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: imagePosition === 'left' ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className={`relative ${imageOrderClass}`}
        >
          <div
            className={`hidden sm:block absolute w-40 h-40 bg-dot-pattern bg-dots ${dotPosition} -z-10`}
          />
          <ImagePlaceholder label={imageLabel} src={image} alt={title} height="h-[24rem]" />
        </motion.div>
      </div>
    </section>
  )
}
