import { useEffect } from 'react'
import { MapPin, X, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKeyDown = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!project) return null

  const { photo, logo, title, city, state, description, serviceSlug } = project

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-navy/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
      >
        {photo && (
          <div className="relative shrink-0">
            <img src={photo} alt={title} className="w-full h-56 object-cover" />
            <button
              onClick={onClose}
              aria-label="Fechar"
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-navy/80 hover:bg-navy text-white flex items-center justify-center transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        )}

        <div className="p-6 flex flex-col gap-4">
          {!photo && (
            <button
              onClick={onClose}
              aria-label="Fechar"
              className="self-end -mt-2 -mr-2 w-9 h-9 rounded-full bg-gray-light hover:bg-gray-200 text-navy flex items-center justify-center transition-colors"
            >
              <X size={18} />
            </button>
          )}

          <div className="flex items-center gap-3">
            {logo && (
              <img
                src={logo}
                alt={title}
                className="w-12 h-12 object-contain rounded-lg bg-navy p-1.5 shrink-0"
              />
            )}
            <div>
              <p className="font-extrabold text-navy leading-tight">{title}</p>
              {city && (
                <p className="text-brand text-sm font-bold flex items-center gap-1">
                  <MapPin size={14} />
                  {city}
                  {state ? ` - ${state}` : ''}
                </p>
              )}
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>

          {serviceSlug && (
            <Link
              to={`/servicos/${serviceSlug}`}
              onClick={onClose}
              className="text-brand hover:text-brand-dark font-bold text-sm inline-flex items-center gap-1"
            >
              Ver detalhes do serviço <ArrowRight size={14} />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
