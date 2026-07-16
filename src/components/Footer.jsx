import { Mail, ArrowUp } from 'lucide-react'
import { WhatsAppIcon, GithubIcon, InstagramIcon } from './icons'
import { profile, social } from '../data/portfolioData'

const links = [
  { label: 'Email', href: social.email, Icon: Mail },
  { label: 'WhatsApp', href: social.whatsapp, Icon: WhatsAppIcon },
  { label: 'Instagram', href: social.instagram, Icon: InstagramIcon },
  { label: 'GitHub', href: social.github, Icon: GithubIcon },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="px-5 md:px-8 py-10 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <span
            className="w-8 h-8 rounded-lg grid place-items-center font-display font-bold text-xs border"
            style={{ background: 'var(--bg-elevated)', color: 'var(--cyan)', borderColor: 'var(--border-strong)' }}
          >
            MA
          </span>
          <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
            &copy; {new Date().getFullYear()} {profile.name}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {links.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-lg border grid place-items-center transition-colors"
              style={{ borderColor: 'var(--border-strong)', color: 'var(--text-muted)' }}
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide cursor-pointer"
          style={{ color: 'var(--text-muted)' }}
        >
          Kembali ke atas <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  )
}
