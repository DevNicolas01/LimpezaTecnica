import { motion } from 'framer-motion'
import { Waves } from 'lucide-react'
import ImagePlaceholder from './ImagePlaceholder'

export default function StackedPhotos({
  flip = false,
  beforeLabel = '[ Foto: ANTES ]',
  afterLabel = '[ Foto: DEPOIS ]',
  offset = 'translate-x-3 translate-y-3',
  showOrange = true,
}) {
  const side = flip ? 'right' : 'left'

  return (
    <motion.div
      initial={{ opacity: 0, x: flip ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {showOrange && (
        <div
          className={`hidden sm:block absolute -bottom-5 ${
            flip ? '-right-5' : '-left-5'
          } w-24 h-16 bg-action/85 rounded-xl -z-10`}
        />
      )}

      <div className="space-y-5">
        <div className="relative">
          <ImagePlaceholder label={beforeLabel} height="h-52 sm:h-60" />
          <span
            className={`absolute -bottom-3 ${
              flip ? '-left-3' : '-right-3'
            } w-10 h-10 rounded-full bg-brand flex items-center justify-center shadow-lg`}
          >
            <Waves size={18} className="text-white" />
          </span>
          <div
            className={`hidden sm:block absolute -top-4 ${
              side === 'left' ? '-right-4' : '-left-4'
            } w-20 h-20 bg-dot-pattern bg-dots opacity-70`}
          />
        </div>

        <div className="relative">
          <div className={`hidden sm:block absolute inset-0 -z-10 rounded-2xl bg-brand/40 ${offset}`} />
          <ImagePlaceholder label={afterLabel} height="h-52 sm:h-60" />
        </div>
      </div>
    </motion.div>
  )
}
