export default function WaveDivider({ className = '' }) {
  return (
    <div className={`relative w-full h-[120px] overflow-hidden ${className}`}>
      <svg
        className="absolute inset-0 w-[200%] h-full animate-wave-slow"
        viewBox="0 0 2880 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,70 C400,30 1040,110 1440,70 C1840,30 2480,110 2880,70 L2880,120 L0,120 Z"
          fill="#1B4FC4"
          opacity="0.5"
        />
      </svg>
      <svg
        className="absolute inset-0 w-[200%] h-full animate-wave-fast"
        viewBox="0 0 2880 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C420,100 1020,20 1440,60 C1860,100 2460,20 2880,60 L2880,120 L0,120 Z"
          fill="#1B4FC4"
          opacity="0.75"
        />
      </svg>
      {/* Camada final sólida: fecha a transição sem deixar espaço branco aparecendo. */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="#ffffff" />
      </svg>
    </div>
  )
}
