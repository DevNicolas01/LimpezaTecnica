import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/layout/WhatsAppButton'
import Home from './pages/Home'
import Contato from './pages/Contato'
import LimpezaFachadas from './pages/services/LimpezaFachadas'
import LavagemCoberturas from './pages/services/LavagemCoberturas'
import LimpezaVidros from './pages/services/LimpezaVidros'
import Hidrolavagem from './pages/services/Hidrolavagem'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos/limpeza-fachadas" element={<LimpezaFachadas />} />
          <Route path="/servicos/lavagem-coberturas" element={<LavagemCoberturas />} />
          <Route path="/servicos/limpeza-vidros" element={<LimpezaVidros />} />
          <Route path="/servicos/hidrolavagem" element={<Hidrolavagem />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
