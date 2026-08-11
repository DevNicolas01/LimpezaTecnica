export default function SectionBadge({ children, light = false }) {
  return (
    <span
      className={`inline-block italic text-xs md:text-sm font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4 ${
        light ? 'bg-white/15 text-white' : 'bg-badge-bg text-action'
      }`}
    >
      {children}
    </span>
  )
}
