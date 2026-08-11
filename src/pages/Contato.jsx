import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import SectionBadge from '../components/ui/SectionBadge'
import Button from '../components/ui/Button'
import { services } from '../data/services'
import { CONTACT } from '../data/constants'

const EMPTY_FORM = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
}

export default function Contato() {
  const [form, setForm] = useState(EMPTY_FORM)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Formulário apenas front-end — sem integração com backend.
    alert('Mensagem enviada! Em breve nossa equipe entrará em contato.')
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
