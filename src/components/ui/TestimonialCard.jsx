import { Quote, Star } from 'lucide-react'

const AVATAR_COLORS = ['bg-brand', 'bg-action', 'bg-navy', 'bg-[#B45309]', 'bg-[#7C3AED]', 'bg-[#0F766E]']

const getInitials = (name) =>
  name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

export default function TestimonialCard({ name, city, role, text, rating, daysAgo, index = 0 }) {
  const color = AVATAR_COLORS[index % AVATAR_COLORS.length]

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-md border border-gray-100 flex flex-col h-full">
      <div className="flex items-center justify-between mb-3">
        <Quote size={36} fill="currentColor" className="text-brand/25" />
        <span className="text-lg font-black leading-none">
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#EA4335]">o</span>
          <span className="text-[#FBBC05]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#34A853]">l</span>
          <span className="text-[#EA4335]">e</span>
        </span>
      </div>

      <div className="flex gap-1 mb-3">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-[#F59E0B] text-[#F59E0B]" />
        ))}
      </div>

      <p className="italic text-gray-600 leading-relaxed mb-6 flex-1">"{text}"</p>

      <div className="flex items-center gap-3">
        <div
          className={`w-11 h-11 rounded-full ${color} text-white font-bold flex items-center justify-center text-sm shrink-0`}
        >
          {getInitials(name)}
        </div>
        <div>
          <p className="font-bold text-navy leading-tight text-sm">{name}</p>
          <p className="text-xs text-gray-500 leading-tight">
            {role} — {city} · {daysAgo} dias atrás
          </p>
        </div>
      </div>
    </div>
  )
}
