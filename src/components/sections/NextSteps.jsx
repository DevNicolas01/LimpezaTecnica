import { motion } from 'framer-motion'
import { PhoneCall, CalendarCheck, Coffee } from 'lucide-react'
import logo from '../../assets/logo.png'
import { CONTACT, WHATSAPP_LINK } from '../../data/constants'

const STEPS = [
  {
    icon: PhoneCall,
    step: '01',
    title: 'Solicite seu orçamento',
    href: WHATSAPP_LINK,
  },
  {
    icon: CalendarCheck,
    step: '02',
    title: 'Agende agora mesmo',
    href: WHATSAPP_LINK,
  },
  {
    icon: Coffee,
    step: '03',
    title: 'Relaxe e aproveite',
    href: CONTACT.instagram,
  },
]

export default function NextSteps() {
  return (
    <section id="como-funciona" className="relative py-24 bg-gray-light overflow-hidden">
      <div className="absolute -right-24 top-1/4 w-96 h-96 rounded-full bg-brand/10 pointer-events-none" />

      <div className="container-limpa relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14"
        >
          <img src={logo} alt="Limpeza Técnica" className="h-14 w-14 object-contain mb-5" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight">
            O que vem a seguir?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((item, index) => (
            <motion.a
              key={item.step}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className={`relative rounded-[24px] py-14 px-8 flex flex-col items-center text-center gap-5 shadow-lg transition-colors ${
                index === 1 ? 'bg-brand hover:bg-brand-dark' : 'bg-navy hover:bg-navy-light'
              }`}
            >
              <div className="relative w-16 h-16 rounded-full bg-gray-light flex items-center justify-center">
                <item.icon size={28} className="text-navy" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-action text-white font-extrabold text-xs flex items-center justify-center">
                  {item.step}
                </span>
              </div>
              <h3 className="font-extrabold text-xl text-white leading-tight">{item.title}</h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
