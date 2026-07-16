import { WhatsAppIcon } from './icons'
import { social } from '../data/portfolioData'

export default function FloatingWhatsApp() {
  return (
    <a
      href={social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full grid place-items-center shadow-xl transition-transform hover:scale-105"
      style={{ background: '#25D366', color: '#04140F', boxShadow: '0 20px 40px -14px var(--shadow)' }}
    >
      <span className="absolute inset-0 rounded-full animate-ping" style={{ background: '#25D366', opacity: 0.35 }} />
      <WhatsAppIcon className="w-6 h-6 relative" strokeWidth={2.2} />
    </a>
  )
}
