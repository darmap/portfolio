import { useState } from 'react'
import { Mail, Send, ArrowUpRight } from 'lucide-react'
import { WhatsAppIcon, GithubIcon, InstagramIcon } from './icons'
import { profile, social } from '../data/portfolioData'
import useReveal from '../hooks/useReveal'

const contactCards = [
  { label: 'Email', value: profile.email, href: social.email, Icon: Mail },
  { label: 'WhatsApp', value: profile.phoneDisplay, href: social.whatsapp, Icon: WhatsAppIcon },
  { label: 'Instagram', value: 'Kunjungi profil', href: social.instagram, Icon: InstagramIcon },
  { label: 'GitHub', value: 'Lihat proyek', href: social.github, Icon: GithubIcon },
]

export default function Contact() {
  const revealRef = useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Pesan dari ${form.name || 'pengunjung portofolio'}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name || 'Tanpa nama'}${form.email ? ` (${form.email})` : ''}`
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="kontak" className="px-5 md:px-8 py-24 md:py-32 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto">
        <div ref={revealRef} className="reveal max-w-2xl mb-14">
          <p className="font-mono text-xs tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--amber)' }}>
            // Kontak
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4" style={{ color: 'var(--text)' }}>
            Ada proyek atau ide untuk didiskusikan?
          </h2>
          <p className="text-[15px] leading-7" style={{ color: 'var(--text-muted)' }}>
            Silakan sapa lewat email, WhatsApp, atau kanal di bawah — atau kirim pesan langsung lewat form ini.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-10">
          {/* Direct contact cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 content-start">
            {contactCards.map(({ label, value, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-0.5"
                style={{ borderColor: 'var(--border-strong)', background: 'var(--bg-elevated)' }}
              >
                <span
                  className="w-11 h-11 rounded-xl grid place-items-center border shrink-0"
                  style={{ borderColor: 'var(--border-strong)', color: 'var(--cyan)' }}
                >
                  <Icon className="w-5 h-5" />
                </span>
                <span className="flex-1 min-w-0">
                  <span
                    className="block font-mono text-[10px] uppercase tracking-wide"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {label}
                  </span>
                  <span className="block text-sm font-medium truncate" style={{ color: 'var(--text)' }}>
                    {value}
                  </span>
                </span>
                <ArrowUpRight
                  className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: 'var(--text-muted)' }}
                />
              </a>
            ))}
          </div>

          {/* Message form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border p-6 sm:p-8 flex flex-col gap-5"
            style={{ borderColor: 'var(--border-strong)', background: 'var(--bg-elevated)' }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[11px] uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
                  Nama
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="rounded-lg border px-3.5 py-2.5 text-sm outline-none transition-colors focus:ring-2 focus:ring-[var(--cyan)] focus:border-[var(--cyan)]"
                  style={{ borderColor: 'var(--border-strong)', background: 'var(--bg)', color: 'var(--text)' }}
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[11px] uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
                  Email kamu
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="rounded-lg border px-3.5 py-2.5 text-sm outline-none transition-colors focus:ring-2 focus:ring-[var(--cyan)] focus:border-[var(--cyan)]"
                  style={{ borderColor: 'var(--border-strong)', background: 'var(--bg)', color: 'var(--text)' }}
                />
              </label>
            </div>

            <label className="flex flex-col gap-2">
              <span className="font-mono text-[11px] uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
                Pesan
              </span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="rounded-lg border px-3.5 py-2.5 text-sm outline-none resize-y transition-colors focus:ring-2 focus:ring-[var(--cyan)] focus:border-[var(--cyan)]"
                style={{ borderColor: 'var(--border-strong)', background: 'var(--bg)', color: 'var(--text)' }}
              />
            </label>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm transition-transform hover:-translate-y-0.5 cursor-pointer"
              style={{ background: 'var(--cyan)', color: '#04140F' }}
            >
              Kirim via Email <Send className="w-4 h-4" />
            </button>
            <p className="text-[11.5px] text-center" style={{ color: 'var(--text-muted)' }}>
              Tombol ini membuka aplikasi email kamu dengan pesan yang sudah terisi otomatis.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
