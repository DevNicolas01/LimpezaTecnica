import { ArrowRight } from 'lucide-react'
import ServiceCard from '../ui/ServiceCard'
import Button from '../ui/Button'
import PhoneButton from '../ui/PhoneButton'
import { services } from '../../data/services'
import { WHATSAPP_LINK } from '../../data/constants'

const PANEL_IMAGE = 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80'

export default function Services() {
  return (
    <section id="servicos" className="w-full">
      <div className="flex flex-col lg:flex-row items-stretch">
        <div
          className="relative lg:w-[32%] shrink-0 bg-brand px-8 py-14 lg:py-20 flex flex-col justify-center bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${PANEL_IMAGE})` }}
        >
          <div className="absolute inset-0 bg-brand/85" />
          <span className="absolute bottom-6 left-8 font-extrabold text-white/10 text-5xl leading-none select-none pointer-events-none">
            LIMPEZA TÉCNICA
          </span>

          <div className="relative">
            <span className="italic font-extrabold uppercase text-sm tracking-wider text-white/80 mb-4 block">
              ✦ O Que Fazemos
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-8">
              Serviços de Limpeza Pós-Obra
            </h2>
            <div className="flex flex-col gap-5 items-start">
              <Button href={WHATSAPP_LINK} variant="action" icon={ArrowRight} className="flex-row-reverse">
                Solicitar Orçamento Gratuito
              </Button>
              <PhoneButton className="text-white" iconClassName="text-white" />
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-x-auto no-scrollbar">
          <div className="flex gap-5 px-6 py-10 lg:pl-0 lg:-ml-10 lg:pr-10 lg:py-14 relative z-10">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} index={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
