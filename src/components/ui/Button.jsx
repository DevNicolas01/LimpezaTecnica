import { Link } from 'react-router-dom'

const VARIANTS = {
  action: 'bg-action hover:bg-action-dark text-white',
  primary: 'bg-brand hover:bg-brand-dark text-white',
  outline: 'bg-transparent border-2 border-white hover:bg-white hover:text-navy text-white',
  whatsapp: 'bg-whatsapp hover:bg-[#1DA851] text-white',
}

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'action',
  className = '',
  type = 'button',
  icon: Icon,
}) {
  const classes = `inline-flex items-center justify-center gap-2 font-extrabold px-7 py-3.5 rounded-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${VARIANTS[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {Icon && <Icon size={20} />}
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={classes}
      >
        {Icon && <Icon size={20} />}
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {Icon && <Icon size={20} />}
      {children}
    </button>
  )
}
