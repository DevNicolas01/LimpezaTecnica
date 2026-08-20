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
    <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-md border border-gray-100 flex flex-col h-full">
      <div className="flex items-center justify-between mb-2">
        <Quote size={26} fill="currentColor" className="text-brand/25" />
        <span className="text-sm font-black leading-none">
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#EA4335]">o</span>
          <span className="text-[#FBBC05]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#34A853]">l</span>
          <span className="text-[#EA4335]">e</span>
        </span>
      </div>

      <div className="flex gap-1 mb-2">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={13} className="fill-[#F59E0B] text-[#F59E0B]" />
        ))}
      </div>

      <p className="italic text-gray-600 text-sm leading-relaxed mb-4 flex-1">"{text}"</p>

      <div className="flex items-center gap-2.5">
        <div
          className={`w-9 h-9 rounded-full ${color} text-white font-bold flex items-center justify-center text-xs shrink-0`}
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
