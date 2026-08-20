import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ServiceCard({ title, slug, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative w-full h-[340px] sm:h-[380px] rounded-2xl overflow-hidden shadow-xl"
    >
      {/* Estado normal: foto ANTES (placeholder) */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy-light flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
        <span className="text-white/40 font-bold text-xs uppercase tracking-widest">
          [ Foto: Antes ]
        </span>
      </div>

      {/* Estado hover: fade para foto DEPOIS (placeholder) */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <span className="text-white/50 font-bold text-xs uppercase tracking-widest">
          [ Foto: Depois ]
        </span>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col items-start gap-3">
        <h3 className="text-lg font-extrabold text-white leading-tight">{title}</h3>
        <Link
          to={`/servicos/${slug}`}
          className="inline-flex items-center gap-1.5 bg-brand hover:bg-brand-dark text-white text-sm font-bold px-4 py-2 rounded-md transition-colors"
        >
          Saber Mais <ArrowRight size={15} />
        </Link>
      </div>
    </motion.div>
  )
}
