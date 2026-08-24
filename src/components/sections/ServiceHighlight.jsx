import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionBadge from '../ui/SectionBadge'
import StackedPhotos from '../ui/StackedPhotos'
import Button from '../ui/Button'
import PhoneButton from '../ui/PhoneButton'
import { WHATSAPP_LINK } from '../../data/constants'

export default function ServiceHighlight({
  badge,
  title,
  subtitle,
  paragraph,
  flip = false,
  photoFlip = flip,
  offset = 'translate-x-4 translate-y-4',
  showWatermark = true,
  watermarkSide = 'left',
  beforeSrc,
  afterSrc,
}) {
  const textOrder = flip ? 'lg:order-2' : 'lg:order-1'
  const photoOrder = flip ? 'lg:order-1' : 'lg:order-2'

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div
        className={`absolute top-1/4 ${
          watermarkSide === 'left' ? '-left-20' : '-right-20'
        } w-72 h-72 rounded-full bg-brand/10 pointer-events-none`}
      />
      {showWatermark && (
        <span
          className={`absolute bottom-8 ${
            watermarkSide === 'left' ? 'left-8' : 'right-8'
          } font-extrabold text-navy/[0.04] text-5xl leading-none select-none pointer-events-none`}
        >
          LIMPEZA TÉCNICA
        </span>
      )}

      <div className="container-limpa grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative">
        <motion.div
          initial={{ opacity: 0, x: flip ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className={textOrder}
        >
          <SectionBadge>{badge}</SectionBadge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight mb-4">
            {title}
          </h2>
          {subtitle && <p className="text-lg font-bold text-brand mb-4">{subtitle}</p>}
          <p className="text-gray-600 leading-relaxed mb-8">{paragraph}</p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <Button href={WHATSAPP_LINK} variant="action" icon={ArrowRight} className="flex-row-reverse">
              Solicitar Orçamento Gratuito
            </Button>
            <PhoneButton />
          </div>
        </motion.div>

        <div className={photoOrder}>
          <StackedPhotos flip={photoFlip} offset={offset} beforeSrc={beforeSrc} afterSrc={afterSrc} />
        </div>
      </div>
    </section>
  )
}
