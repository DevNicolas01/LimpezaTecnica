import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ServiceCard({ title, slug, image, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative w-full h-[340px] sm:h-[380px] rounded-2xl overflow-hidden shadow-xl"
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

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
