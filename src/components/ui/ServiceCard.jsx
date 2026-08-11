import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ServiceCard({ icon: Icon, title, shortDescription, slug, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col"
    >
      <div className="w-20 h-20 rounded-full bg-badge-bg flex items-center justify-center mb-6">
        <Icon className="text-action" size={48} strokeWidth={1.75} />
      </div>
      <h3 className="text-xl font-bold text-navy mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-6 flex-1">{shortDescription}</p>
      <Link
        to={`/servicos/${slug}`}
        className="inline-flex items-center gap-2 font-bold text-action hover:text-action-dark hover:gap-3 transition-all duration-200"
      >
        Saiba mais <ArrowRight size={18} />
      </Link>
    </motion.div>
  )
}
