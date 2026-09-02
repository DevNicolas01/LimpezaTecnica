import { Routes, Route, useLocation } from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/layout/WhatsAppButton'
import Home from './pages/Home'

const Contato = lazy(() => import('./pages/Contato'))
const AreaCidade = lazy(() => import('./pages/AreaCidade'))
const LimpezaFachadas = lazy(() => import('./pages/services/LimpezaFachadas'))
const LavagemCoberturas = lazy(() => import('./pages/services/LavagemCoberturas'))
const ServicosImobiliaria = lazy(() => import('./pages/services/ServicosImobiliaria'))
const Hidrolavagem = lazy(() => import('./pages/services/Hidrolavagem'))

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    // Ao navegar de outra página para um link com #hash, o elemento alvo pode
    // ainda não existir no primeiro frame (a rota acabou de trocar) — tenta
    // por alguns frames antes de desistir.
    const id = hash.slice(1)
    let raf
    let attempts = 0

    const tryScroll = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      } else if (attempts < 30) {
        attempts += 1
        raf = requestAnimationFrame(tryScroll)
      }
    }

    raf = requestAnimationFrame(tryScroll)
    return () => cancelAnimationFrame(raf)
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos/limpeza-fachadas" element={<LimpezaFachadas />} />
            <Route path="/servicos/lavagem-coberturas" element={<LavagemCoberturas />} />
            <Route path="/servicos/servicos-imobiliaria" element={<ServicosImobiliaria />} />
            <Route path="/servicos/hidrolavagem" element={<Hidrolavagem />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/area/:cidade" element={<AreaCidade />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
