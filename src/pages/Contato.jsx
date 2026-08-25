import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react'
import SectionBadge from '../components/ui/SectionBadge'
import Button from '../components/ui/Button'
import { services } from '../data/services'
import { CONTACT, WHATSAPP_LINK } from '../data/constants'

// lucide-react não inclui ícones de marca (política do projeto) — usamos os glifos direto.
const FACEBOOK_PATH =
  'M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z'
const INSTAGRAM_PATH =
  'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56a5.89 5.89 0 0 0-2.13 1.38A5.89 5.89 0 0 0 .63 4.14C.33 4.9.13 5.77.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.63.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56a5.89 5.89 0 0 0 2.13-1.38 5.89 5.89 0 0 0 1.38-2.13c.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.89 5.89 0 0 0-1.38-2.13A5.89 5.89 0 0 0 19.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z'

const EMPTY_FORM = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
}

export default function Contato() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Sem backend próprio: a mensagem é entregue via WhatsApp, já o canal
    // principal de atendimento do site, com os dados do formulário prontos.
    const lines = [
      `*Novo contato pelo site*`,
      `Nome: ${form.name}`,
      `Telefone: ${form.phone}`,
      `E-mail: ${form.email}`,
      `Serviço: ${form.service}`,
      '',
      form.message,
    ]
    const text = encodeURIComponent(lines.join('\n'))
    window.open(`${WHATSAPP_LINK}?text=${text}`, '_blank', 'noopener,noreferrer')

    setSent(true)
    setForm(EMPTY_FORM)
  }

  return (
    <section className="pt-32 pb-24 md:pt-44 bg-white min-h-screen">
      <div className="container-limpa">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <SectionBadge>Contato</SectionBadge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight mb-4">
            Vamos conversar sobre o seu projeto
          </h1>
          <p className="text-gray-600">
            Preencha o formulário ou utilize um dos nossos canais de atendimento. Responderemos o
            mais breve possível.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-gray-light rounded-2xl p-8 space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                Nome
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Seu nome completo"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand bg-white"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                  Telefone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(XX) XXXXX-XXXX"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand bg-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand bg-white"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-navy mb-2">
                Serviço
              </label>
              <select
                id="service"
                name="service"
                required
                value={form.service}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand bg-white"
              >
                <option value="" disabled>
                  Selecione um serviço
                </option>
                {services.map((service) => (
                  <option key={service.slug} value={service.title}>
                    {service.title}
                  </option>
                ))}
                <option value="Outro">Outro</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Conte um pouco sobre o que você precisa..."
                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand bg-white resize-none"
              />
            </div>

            <Button type="submit" icon={Send} className="w-full sm:w-auto">
              Enviar Mensagem
            </Button>

            <AnimatePresence>
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="flex items-start gap-3 bg-whatsapp/10 border border-whatsapp/30 rounded-lg px-4 py-3"
                >
                  <CheckCircle2 size={20} className="text-whatsapp shrink-0 mt-0.5" />
                  <p className="text-sm text-navy">
                    Sua mensagem foi preparada e o WhatsApp abriu em uma nova aba — é só confirmar
                    o envio por lá para falar direto com a nossa equipe.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-navy text-white rounded-2xl p-8 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={22} className="shrink-0 mt-1" />
                <div>
                  <p className="font-bold">Endereço</p>
                  <p className="text-white/75 text-sm">{CONTACT.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={22} className="shrink-0 mt-1" />
                <div>
                  <p className="font-bold">Telefone</p>
                  <p className="text-white/75 text-sm">{CONTACT.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={22} className="shrink-0 mt-1" />
                <div>
                  <p className="font-bold">E-mail</p>
                  <p className="text-white/75 text-sm">{CONTACT.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={22} className="shrink-0 mt-1" />
                <div>
                  <p className="font-bold">Horário de Atendimento</p>
                  <p className="text-white/75 text-sm">Seg-Sáb: {CONTACT.hours.weekdays}</p>
                  <p className="text-white/75 text-sm">Dom: {CONTACT.hours.sunday}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand flex items-center justify-center transition-colors"
                >
                  <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor">
                    <path d={INSTAGRAM_PATH} />
                  </svg>
                </a>
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand flex items-center justify-center transition-colors"
                >
                  <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor">
                    <path d={FACEBOOK_PATH} />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
