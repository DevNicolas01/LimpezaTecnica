import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone, Headset, ArrowRight } from 'lucide-react'
import { services } from '../../data/services'
import { CONTACT, WHATSAPP_LINK } from '../../data/constants'
import logo from '../../assets/logo.png'

const NAV_LINKS = [
  { label: 'Por Que Nós', href: '/#por-que-nos' },
  { label: 'Como Funciona', href: '/#como-funciona' },
  { label: 'Portfólio', href: '/#portfolio' },
  { label: 'Área de Atendimento', href: '/#atendimento' },
  { label: 'Contato', href: '/contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-none'
      }`}
    >
      {/* Faixa superior branca */}
      <div className="hidden md:block bg-white">
        <div className="container-limpa h-[70px] grid grid-cols-3 items-center">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Limpeza Técnica" className="h-[60px] w-[60px] object-contain rounded-lg" />
            <span className="font-extrabold text-lg text-navy leading-tight">
              Limpeza
              <br />
              Técnica
            </span>
          </Link>

          <span className="justify-self-center italic font-bold text-navy text-sm lg:text-base text-center">
            Limpeza Pós-Obra Especializada
          </span>

          <div className="justify-self-end flex items-center gap-6">
            <a
              href={`tel:${CONTACT.phone.replace(/\D/g, '')}`}
              className="hidden lg:flex items-center gap-2 text-navy hover:text-brand transition-colors"
            >
              <Headset size={20} className="text-action" />
              <span className="font-medium text-sm">Fale Conosco</span>
              <span className="font-extrabold">{CONTACT.phone}</span>
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-action hover:bg-action-dark text-white font-extrabold uppercase text-xs tracking-wider px-6 py-3 rounded-md transition-colors"
            >
              Solicitar Orçamento <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Faixa inferior azul */}
      <div className="bg-brand">
        <div className="container-limpa flex items-center justify-between lg:justify-center h-16 relative">
          <Link to="/" className="md:hidden flex items-center gap-2">
            <img src={logo} alt="Limpeza Técnica" className="h-10 w-10 object-contain rounded-lg bg-white p-1" />
            <span className="font-extrabold text-white text-sm">Limpeza Técnica</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 font-bold uppercase text-xs tracking-wider text-white hover:text-white/80 transition-colors">
                Serviços <ChevronDown size={14} />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64"
                  >
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          to={`/servicos/${service.slug}`}
                          className="flex items-center gap-3 px-5 py-3 hover:bg-gray-light transition-colors"
                        >
                          <service.icon size={18} className="text-brand shrink-0" />
                          <span className="font-medium text-text-dark text-sm">{service.title}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-bold uppercase text-xs tracking-wider text-white hover:text-white/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            className="lg:hidden text-white"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Abrir menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-navy-light border-t border-white/10"
          >
            <div className="container-limpa py-4 flex flex-col gap-1">
              <p className="font-bold text-xs uppercase text-white/50 px-2 pt-2 pb-1">Serviços</p>
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={`/servicos/${service.slug}`}
                  className="flex items-center gap-3 px-2 py-2.5 rounded-lg hover:bg-white/10"
                >
                  <service.icon size={18} className="text-white" />
                  <span className="font-medium text-white text-sm">{service.title}</span>
                </Link>
              ))}
              <div className="h-px bg-white/10 my-2" />
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-2 py-2.5 rounded-lg hover:bg-white/10 font-bold uppercase text-xs tracking-wider text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`tel:${CONTACT.phone.replace(/\D/g, '')}`}
                className="flex items-center gap-2 px-2 py-2.5 text-white/80 text-sm"
              >
                <Phone size={16} /> {CONTACT.phone}
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center justify-center gap-2 bg-action hover:bg-action-dark text-white font-extrabold uppercase text-xs tracking-wider px-6 py-3.5 rounded-md"
              >
                Solicitar Orçamento <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
