import { Star } from 'lucide-react'

const AVATAR_COLORS = ['bg-blue', 'bg-action', 'bg-navy', 'bg-[#B45309]', 'bg-[#7C3AED]']

const getInitials = (name) =>
  name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

export default function TestimonialCard({ name, city, role, text, rating, index = 0 }) {
  const color = AVATAR_COLORS[index % AVATAR_COLORS.length]

  return (
    <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 flex flex-col h-full">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={18} className="fill-[#F59E0B] text-[#F59E0B]" />
        ))}
      </div>
      <p className="text-gray-600 leading-relaxed mb-6 flex-1">"{text}"</p>
      <div className="flex items-center gap-3">
        <div
          className={`w-12 h-12 rounded-full ${color} text-white font-bold flex items-center justify-center text-sm shrink-0`}
        >
          {getInitials(name)}
        </div>
        <div>
          <p className="font-bold text-navy leading-tight">{name}</p>
          <p className="text-sm text-gray-500 leading-tight">
            {role} — {city}
          </p>
        </div>
      </div>
    </div>
  )
}
