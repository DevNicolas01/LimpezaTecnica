export default function WaveDivider({ className = '' }) {
  return (
    <svg
      viewBox="0 0 1440 80"
      xmlns="http://www.w3.org/2000/svg"
      className={`block w-full ${className}`}
      preserveAspectRatio="none"
    >
      <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#0288D1" />
      <path d="M0,55 C400,20 1000,70 1440,35 L1440,80 L0,80 Z" fill="#0D1B3E" opacity="0.5" />
    </svg>
  )
}
