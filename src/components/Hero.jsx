import { useEffect, useState } from 'react'
import { Mail, Download, ArrowRight, Code2, Clapperboard } from 'lucide-react'
import { WhatsAppIcon, GithubIcon, InstagramIcon } from './icons'
import { profile, social } from '../data/portfolioData'
import profileImage from '../assets/profile.jpeg'

const socialLinks = [
  { href: social.email, label: 'Email', Icon: Mail },
  { href: social.whatsapp, label: 'WhatsApp', Icon: WhatsAppIcon },
  { href: social.instagram, label: 'Instagram', Icon: InstagramIcon },
  { href: social.github, label: 'GitHub', Icon: GithubIcon },
]

function useTypedRoles(roles) {
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    let pauseTimeout
    const current = roles[roleIndex]
    const speed = deleting ? 35 : 70

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1))
        } else {
          pauseTimeout = setTimeout(() => setDeleting(true), 1500)
        }
      } else if (text.length > 0) {
        setText(current.slice(0, text.length - 1))
      } else {
        setDeleting(false)
        setRoleIndex((i) => (i + 1) % roles.length)
      }
    }, speed)

    return () => {
      clearTimeout(timeout)
      clearTimeout(pauseTimeout)
    }
  }, [text, deleting, roleIndex, roles])

  return text
}

export default function Hero() {
  const typedText = useTypedRoles(profile.roles)

  const scrollTo = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="beranda" className="relative pt-32 pb-28 md:pt-40 md:pb-36 px-5 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-16 md:gap-10 items-center relative z-10">
        {/* Left column */}
        <div>
          <p className="font-mono text-[12px] tracking-[0.2em] uppercase mb-5" style={{ color: 'var(--cyan)' }}>
            // Profil — Mahasiswa Informatika
          </p>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight" style={{ color: 'var(--text)' }}>
            {profile.name}
          </h1>

          <p className="font-mono text-base sm:text-lg mt-5" style={{ color: 'var(--amber)' }}>
            <span style={{ color: 'var(--text-muted)' }}>&gt;</span> {typedText}
            <span className="animate-blink" aria-hidden="true">_</span>
          </p>

          <p className="mt-6 max-w-xl text-[15px] sm:text-base leading-7" style={{ color: 'var(--text-muted)' }}>
            {profile.bio}
          </p>

          <div className="flex flex-wrap gap-3 pt-8">
            <button
              onClick={scrollTo('kontak')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-transform hover:-translate-y-0.5 cursor-pointer"
              style={{ background: 'var(--cyan)', color: '#04140F' }}
            >
              Hubungi Saya <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={profile.cvFile}
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border transition-transform hover:-translate-y-0.5"
              style={{ borderColor: 'var(--border-strong)', color: 'var(--text)' }}
            >
              <Download className="w-4 h-4" /> Unduh CV
            </a>
          </div>

          <div className="flex items-center gap-3 pt-8">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-lg border grid place-items-center transition-colors"
                style={{ borderColor: 'var(--border-strong)', color: 'var(--text-muted)' }}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Right column: editor window mock */}
        <div className="relative">
          <div
            className="rounded-2xl overflow-hidden border"
            style={{ borderColor: 'var(--border-strong)', background: 'var(--bg-elevated)', boxShadow: '0 40px 80px -30px var(--shadow)' }}
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: 'var(--border)' }}>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#EB5757' }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--amber)' }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--cyan)' }} />
              <span className="ml-3 font-mono text-[11px]" style={{ color: 'var(--text-muted)' }}>
                profil.json
              </span>
            </div>

            <div className="p-6 sm:p-7 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <img
                  src={profileImage}
                  alt={`Foto ${profile.name}`}
                  className="w-16 h-16 rounded-xl object-cover border"
                  style={{ borderColor: 'var(--border-strong)' }}
                />
                <div>
                  <p className="font-display font-semibold text-sm" style={{ color: 'var(--text)' }}>
                    {profile.name}
                  </p>
                  <p className="font-mono text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                    {profile.location}
                  </p>
                </div>
              </div>

              <dl className="font-mono text-[12.5px] sm:text-[13px] leading-7">
                <div>
                  <span style={{ color: 'var(--text-muted)' }}>&quot;fokus&quot;</span>:{' '}
                  <span style={{ color: 'var(--amber)' }}>&quot;Software Development&quot;</span>,
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)' }}>&quot;status&quot;</span>:{' '}
                  <span style={{ color: 'var(--cyan)' }}>&quot;Terbuka untuk kolaborasi&quot;</span>,
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)' }}>&quot;kuliah&quot;</span>:{' '}
                  <span style={{ color: 'var(--amber)' }}>&quot;S1 Informatika, INSTIKI&quot;</span>,
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)' }}>&quot;tools&quot;</span>:{' '}
                  <span style={{ color: 'var(--cyan)' }}>&quot;PHP · Laravel · React · Firebase&quot;</span>
                </div>
              </dl>
            </div>
          </div>

          <div
            className="hidden sm:flex absolute -left-6 top-8 items-center gap-2 px-3 py-2 rounded-xl border animate-float"
            style={{ background: 'var(--bg-elevated)', borderColor: 'var(--border-strong)', boxShadow: '0 16px 30px -12px var(--shadow)' }}
          >
            <Code2 className="w-4 h-4" style={{ color: 'var(--cyan)' }} />
            <span className="font-mono text-[11px]" style={{ color: 'var(--text)' }}>
              Fullstack Dev
            </span>
          </div>

          <div
            className="hidden sm:flex absolute -right-4 -bottom-6 items-center gap-2 px-3 py-2 rounded-xl border animate-float"
            style={{
              background: 'var(--bg-elevated)',
              borderColor: 'var(--border-strong)',
              boxShadow: '0 16px 30px -12px var(--shadow)',
              animationDelay: '1.4s',
            }}
          >
            <Clapperboard className="w-4 h-4" style={{ color: 'var(--amber)' }} />
            <span className="font-mono text-[11px]" style={{ color: 'var(--text)' }}>
              Video Editor
            </span>
          </div>
        </div>
      </div>

      {/* Decorative ruler strip — foreshadows the timeline section below */}
      <div
        className="absolute left-0 right-0 bottom-0 h-7 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, var(--border-strong) 0px, var(--border-strong) 1px, transparent 1px, transparent 26px)',
        }}
        aria-hidden="true"
      />
    </section>
  )
}
