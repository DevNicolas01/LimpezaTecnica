import { Building2 } from 'lucide-react'

export default function ImagePlaceholder({ label = '[ Foto ]', height = 'h-80', className = '', src, alt }) {
  if (src) {
    return (
      <div className={`relative w-full ${height} rounded-2xl overflow-hidden shadow-xl ${className}`}>
        <img src={src} alt={alt || label} className="w-full h-full object-cover" loading="lazy" />
      </div>
    )
  }

  return (
    <div
      className={`w-full ${height} rounded-2xl bg-gradient-to-br from-blue/10 to-blue/20 border-2 border-dashed border-blue/30 flex flex-col items-center justify-center gap-3 ${className}`}
    >
      <Building2 className="text-blue/50" size={56} strokeWidth={1.5} />
      <span className="text-blue/60 font-semibold text-sm text-center px-4">{label}</span>
    </div>
  )
}
