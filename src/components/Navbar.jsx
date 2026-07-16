import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import useActiveSection from '../hooks/useActiveSection'

const NAV_LINKS = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'tentang', label: 'Tentang' },
  { id: 'keahlian', label: 'Keahlian' },
  { id: 'proyek', label: 'Proyek' },
  { id: 'linimasa', label: 'Linimasa' },
  { id: 'kontak', label: 'Kontak' },
]

export default function Navbar({ isLight, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(NAV_LINKS.map((link) => link.id))

  useEffect(() => {
    setOpen(false)
  }, [active])

  const handleClick = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b"
      style={{ backgroundColor: 'var(--bg-translucent)', borderColor: 'var(--border)' }}
    >
      <nav className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="#beranda" onClick={handleClick('beranda')} className="flex items-center gap-2.5">
          <span
            className="w-9 h-9 rounded-lg grid place-items-center font-display font-bold text-sm border"
            style={{ background: 'var(--bg-elevated)', color: 'var(--cyan)', borderColor: 'var(--border-strong)' }}
          >
            MA
          </span>
          <span className="hidden sm:block font-display font-semibold text-[15px] tracking-tight" style={{ color: 'var(--text)' }}>
            Artha Darma Putra
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={handleClick(link.id)}
              className="relative px-3.5 py-2 text-[13px] font-mono uppercase tracking-wide rounded-md transition-colors"
              style={{ color: active === link.id ? 'var(--cyan)' : 'var(--text-muted)' }}
            >
              {link.label}
              {active === link.id && (
                <span
                  className="absolute left-3.5 right-3.5 -bottom-[1px] h-[2px] rounded-full"
                  style={{ background: 'var(--cyan)' }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            aria-label={isLight ? 'Aktifkan mode gelap' : 'Aktifkan mode terang'}
            className="w-9 h-9 rounded-lg grid place-items-center border transition-colors cursor-pointer"
            style={{ color: 'var(--text-muted)', borderColor: 'var(--border-strong)' }}
          >
            {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Buka menu navigasi"
            aria-expanded={open}
            className="md:hidden w-9 h-9 rounded-lg grid place-items-center border cursor-pointer"
            style={{ color: 'var(--text-muted)', borderColor: 'var(--border-strong)' }}
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="md:hidden border-t px-5 py-3 flex flex-col gap-1"
          style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg)' }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={handleClick(link.id)}
              className="px-3 py-2.5 rounded-md text-sm font-mono uppercase tracking-wide transition-colors"
              style={{
                color: active === link.id ? 'var(--cyan)' : 'var(--text-muted)',
                background: active === link.id ? 'var(--cyan-soft)' : 'transparent',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
