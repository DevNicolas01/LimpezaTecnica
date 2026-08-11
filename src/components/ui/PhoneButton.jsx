import { Phone } from 'lucide-react'
import { CONTACT } from '../../data/constants'

export default function PhoneButton({ className = '', iconClassName = 'text-brand' }) {
  return (
    <a
      href={`tel:${CONTACT.phone.replace(/\D/g, '')}`}
      className={`inline-flex items-center gap-2.5 font-extrabold hover:opacity-80 transition-opacity ${className}`}
    >
      <Phone size={20} className={iconClassName} />
      {CONTACT.phone}
    </a>
  )
}
