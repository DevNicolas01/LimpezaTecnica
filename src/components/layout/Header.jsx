import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight, Phone } from 'lucide-react'
import { services } from '../../data/services'
import { CONTACT, WHATSAPP_LINK } from '../../data/constants'
import logo from '../../assets/logo2.png'

const LOGO_ZONE_WIDTH = 250

const NAV_LINKS = [
  { label: 'Por Que Nós', href: '/#por-que-nos' },
  { label: 'Como Funciona', href: '/#como-funciona' },
  { label: 'Portfólio', href: '/#portfolio' },
  { label: 'Área de Atendimento', href: '/#atendimento' },
  { label: 'Contato', href: '/contato' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 shadow-md">
        {/* Faixa 1 — branca, 56px */}
        <div className="hidden lg:block bg-white w-full" style={{ height: '56px' }}>
          <div className="flex items-stretch h-full w-full">
            <Link
              to="/"
              className="relative z-20 flex items-center justify-start pl-20 flex-shrink-0"
              style={{ width: `${LOGO_ZONE_WIDTH}px` }}
            >
              <img src={logo} alt="Limpeza Técnica" style={{ height: '150px', width: '200px', transform: 'translateY(28px)' }} />
            </Link>

            <div className="flex items-center ml-auto">
              <p className="italic font-bold text-[#0D1B3E] text-lg tracking-wide whitespace-nowrap mr-6">
                Limpeza Pós-Obra Especializada
              </p>

              <div className="flex items-center gap-3 px-6 flex-shrink-0">
                <div
                  className="flex items-center justify-center flex-shrink-0"
                  style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: '#1B4FC4' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                  </svg>
                </div>
                <div className="flex flex-col leading-none">
                  <span style={{ fontSize: '10px', color: '#888', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Fale Conosco Hoje
                  </span>
                  <a
                    href={`tel:${CONTACT.phone.replace(/\D/g, '')}`}
                    style={{ fontSize: '17px', fontWeight: 900, color: '#0D1B3E', whiteSpace: 'nowrap', lineHeight: 1.2 }}
                    className="hover:text-[#1B4FC4] transition"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E8321A] hover:bg-red-700 transition flex items-center gap-2 text-white font-extrabold uppercase tracking-widest whitespace-nowrap flex-shrink-0 h-full"
                style={{
                  fontSize: '13px',
                  paddingLeft: '36px',
                  paddingRight: '28px',
                  borderRadius: 0,
                  clipPath: 'polygon(16px 0%, 100% 0%, 100% 100%, 0% 100%)',
                }}
              >
                SOLICITAR ORÇAMENTO
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Faixa 2 — branca à esquerda (sob a logo) + azul escuro com corte diagonal a partir do menu */}
        <div className="hidden lg:block relative bg-white w-full" style={{ height: '40px' }}>
          <div
            className="absolute top-0 h-full flex items-center gap-8"
            style={{
              left: `${LOGO_ZONE_WIDTH}px`,
              right: 0,
              backgroundColor: '#355db3',
              clipPath: 'polygon(44px 0%, 1000% 0%, 100% 100%, 0% 100%)',
              paddingLeft: '44px',
            }}
          >
            <div
              className="relative flex items-center h-full"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="text-white hover:text-blue-300 transition flex items-center gap-1"
                style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}
              >
                Serviços
                <ChevronDown size={12} />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 pt-3 w-64"
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
                className="text-white hover:text-blue-300 transition flex items-center gap-1"
                style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex lg:hidden items-center justify-between bg-[#1B2A4A] px-4" style={{ height: '64px' }}>
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Limpeza Técnica" className="h-15 w-15 object-contain rounded-lg bg-white p-5" />
            <span className="font-extrabold text-white text-sm">Limpeza Técnica</span>
          </Link>
          <button className="text-white" onClick={() => setMobileOpen((o) => !o)} aria-label="Abrir menu">
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden bg-[#1B2A4A] border-t border-white/10"
            >
              <div className="px-6 py-4 flex flex-col gap-1">
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
                  className="mt-3 inline-flex items-center justify-center gap-2 bg-[#E8321A] hover:bg-red-700 text-white font-extrabold uppercase text-xs tracking-wider px-6 py-3.5"
                >
                  Solicitar Orçamento <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        
      </header>

      {/* Espaçador — empurra o conteúdo da página para baixo do header fixo (94px = 56+38 no desktop, 64px no mobile) */}
      <div className="hidden lg:block" style={{ height: '94px' }} />
      <div className="lg:hidden" style={{ height: '64px' }} />
    </>
  )
}
