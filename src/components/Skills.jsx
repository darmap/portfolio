import { Terminal, Database, Palette } from 'lucide-react'
import { skillGroups } from '../data/portfolioData'
import useReveal from '../hooks/useReveal'

const ICONS = { lang: Terminal, stack: Database, creative: Palette }

function SkillCard({ group, index }) {
  const ref = useReveal()
  const Icon = ICONS[group.tag] ?? Terminal
  const accent = group.tag === 'creative' ? 'var(--amber)' : 'var(--cyan)'

  return (
    <div
      ref={ref}
      className="reveal rounded-2xl border p-6 sm:p-7"
      style={{
        borderColor: 'var(--border-strong)',
        background: 'var(--bg-elevated)',
        transitionDelay: `${index * 90}ms`,
      }}
    >
      <div className="flex items-center gap-3 mb-5">
        <span
          className="w-10 h-10 rounded-xl grid place-items-center border shrink-0"
          style={{ borderColor: 'var(--border-strong)', color: accent }}
        >
          <Icon className="w-4 h-4" />
        </span>
        <h3 className="font-display font-semibold text-[15px]" style={{ color: 'var(--text)' }}>
          {group.label}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="px-3.5 py-1.5 rounded-full border font-mono text-xs transition-all duration-300 hover:-translate-y-0.5 cursor-default"
            style={{ borderColor: 'var(--border-strong)', color: 'var(--text-muted)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = accent
              e.currentTarget.style.borderColor = accent
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-muted)'
              e.currentTarget.style.borderColor = 'var(--border-strong)'
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="keahlian" className="px-5 md:px-8 py-24 md:py-32 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-14">
          <p className="font-mono text-xs tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--cyan)' }}>
            // Keahlian
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: 'var(--text)' }}>
            Stack yang dipakai sehari-hari.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.label} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
