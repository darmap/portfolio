import { useEffect, useRef, useState } from 'react'
import { MapPin, GraduationCap, Sparkles } from 'lucide-react'
import { profile, stats } from '../data/portfolioData'
import useReveal from '../hooks/useReveal'

function CountUp({ value, suffix = '', duration = 1200 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        const start = performance.now()

        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          setCount(Math.floor(progress * value))
          if (progress < 1) {
            requestAnimationFrame(step)
          } else {
            setCount(value)
          }
        }

        requestAnimationFrame(step)
        observer.unobserve(node)
      },
      { threshold: 0.4 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [value, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function About() {
  const revealRef = useReveal()

  return (
    <section id="tentang" className="px-5 md:px-8 py-24 md:py-32 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_0.85fr] gap-14 items-start">
        <div ref={revealRef} className="reveal">
          <p className="font-mono text-xs tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--amber)' }}>
            // Tentang
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6 leading-tight" style={{ color: 'var(--text)' }}>
            Dua sisi kerja: baris kode &amp; garis waktu video.
          </h2>

          <div className="space-y-4 text-[15px] leading-7" style={{ color: 'var(--text-muted)' }}>
            <p>{profile.bio}</p>
            <p>
              Di luar kelas, Made Artha aktif menjadi{' '}
              <strong style={{ color: 'var(--text)' }}>panitia KEBUS UKM Tabuh</strong> dan{' '}
              <strong style={{ color: 'var(--text)' }}>Konser &amp; Acara STT</strong>, sekaligus membangun jam
              terbang sebagai <strong style={{ color: 'var(--text)' }}>freelance video editor</strong> menggunakan
              Premiere Pro, After Effects, dan CapCut.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <span
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border font-mono text-xs"
              style={{ borderColor: 'var(--border-strong)', color: 'var(--text-muted)' }}
            >
              <MapPin className="w-3.5 h-3.5" style={{ color: 'var(--cyan)' }} /> {profile.fullAddress}
            </span>
            <span
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border font-mono text-xs"
              style={{ borderColor: 'var(--border-strong)', color: 'var(--text-muted)' }}
            >
              <GraduationCap className="w-3.5 h-3.5" style={{ color: 'var(--amber)' }} /> S1 Informatika · INSTIKI
            </span>
            <span
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border font-mono text-xs"
              style={{ borderColor: 'var(--border-strong)', color: 'var(--text-muted)' }}
            >
              <Sparkles className="w-3.5 h-3.5" style={{ color: 'var(--cyan)' }} /> Terbuka untuk magang &amp; kolaborasi
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border p-4 sm:p-6 text-center"
              style={{ borderColor: 'var(--border-strong)', background: 'var(--bg-elevated)' }}
            >
              <p className="font-display font-bold text-2xl sm:text-3xl md:text-4xl" style={{ color: 'var(--cyan)' }}>
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p
                className="font-mono text-[10px] sm:text-[11px] mt-2 uppercase tracking-wide leading-snug"
                style={{ color: 'var(--text-muted)' }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
