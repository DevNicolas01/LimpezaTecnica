import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import PhoneButton from '../ui/PhoneButton'
import { WHATSAPP_LINK } from '../../data/constants'
import logo from '../../assets/logo.png'

const BANNER_IMAGE = 'https://images.unsplash.com/photo-1521790797524-b2497295b8a0?w=1400&q=80'

export default function CTABanner() {
  return (
    <section
      className="relative w-full min-h-[180px] bg-cover bg-center flex items-center overflow-visible"
      style={{ backgroundImage: `url(${BANNER_IMAGE})` }}
    >
      <div className="absolute inset-0" style={{ background: 'rgba(13,27,62,0.80)' }} />

      {/* Logo pequena saindo do banner */}
      <div className="hidden md:flex absolute -top-8 left-10 lg:left-20 z-10 w-32 h-32 rounded-2xl border-4 border-white shadow-2xl overflow-hidden bg-white items-center justify-center p-4">
        <img src={logo} alt="Limpeza Técnica" className="w-full h-full object-contain" />
      </div>

      <div className="relative container-limpa py-10 flex flex-col items-center text-center">
        <span className="text-white/80 font-semibold text-sm mb-2">
          Oferecemos serviços de limpeza profissional
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-6 max-w-2xl">
          Confie apenas nos especialistas!
        </h2>
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <Button href={WHATSAPP_LINK} variant="action" icon={ArrowRight} className="flex-row-reverse">
            Solicitar Orçamento Gratuito
          </Button>
          <PhoneButton className="text-white" iconClassName="text-white" />
        </div>
      </div>
    </section>
  )
}
