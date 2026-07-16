import { education, experience } from '../data/portfolioData'
import useReveal from '../hooks/useReveal'

function TrackRow({ label, items, accent, accentSoft }) {
  return (
    <div className="mb-12 last:mb-0">
      <p className="font-mono text-[11px] uppercase tracking-wide mb-5" style={{ color: 'var(--text-muted)' }}>
        {label}
      </p>

      <div className="relative flex items-start gap-4 pb-1">
        <div
          className="absolute left-0 right-0 top-[7px] h-px"
          style={{ background: 'var(--border-strong)' }}
          aria-hidden="true"
        />

        {items.map((item) => (
          <div key={item.title} className="relative w-[210px] sm:w-[230px] shrink-0">
            <div className="flex items-center gap-2 mb-3 relative z-10">
              <span
                className="w-3 h-3 rounded-full border-2"
                style={{
                  borderColor: accent,
                  background: item.current ? accent : 'var(--bg)',
                }}
              />
              {item.current && (
                <span
                  className="font-mono text-[10px] uppercase tracking-wide animate-rec"
                  style={{ color: accent }}
                >
                  ● Rec
                </span>
              )}
            </div>

            <div
              className="rounded-xl border p-4 h-full"
              style={{ borderColor: 'var(--border-strong)', background: 'var(--bg-elevated)' }}
            >
              {item.period && (
                <p className="font-mono text-[11px] mb-1.5" style={{ color: accent }}>
                  {item.period}
                </p>
              )}
              <p className="font-display font-semibold text-[13.5px] leading-snug" style={{ color: 'var(--text)' }}>
                {item.title}
              </p>
              {(item.level || item.tag) && (
                <p
                  className="font-mono text-[10px] mt-2 uppercase tracking-wide px-2 py-0.5 rounded inline-block"
                  style={{ color: accent, background: accentSoft }}
                >
                  {item.level || item.tag}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Timeline() {
  const revealRef = useReveal()

  return (
    <section id="linimasa" className="px-5 md:px-8 py-24 md:py-32 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto">
        <div ref={revealRef} className="reveal max-w-2xl mb-12">
          <p className="font-mono text-xs tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--cyan)' }}>
            // Linimasa
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4" style={{ color: 'var(--text)' }}>
            Diputar seperti timeline editing.
          </h2>
          <p className="text-[15px] leading-7" style={{ color: 'var(--text-muted)' }}>
            Dua jalur - pendidikan dan pengalaman non-akademik - disusun berdampingan, dari 2012 sampai sekarang.
          </p>
        </div>

        {/* Ruler bridging first year of education to the present */}
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-[11px] uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
            2012
          </span>
          <div
            className="flex-1 h-px"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, var(--border-strong) 0px, var(--border-strong) 1px, transparent 1px, transparent 16px)',
            }}
          />
          <span
            className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide px-2.5 py-1 rounded-md shrink-0"
            style={{ color: 'var(--cyan)', background: 'var(--cyan-soft)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-rec" style={{ background: 'var(--cyan)' }} />
            Sekarang
          </span>
        </div>

        <div className="overflow-x-auto no-scrollbar pb-2 -mx-5 px-5 md:mx-0 md:px-0">
          <div className="min-w-[900px] md:min-w-full">
            <TrackRow
              label="Track 01 · Pendidikan"
              items={education}
              accent="var(--cyan)"
              accentSoft="var(--cyan-soft)"
            />
            <TrackRow
              label="Track 02 · Pengalaman & Organisasi"
              items={experience}
              accent="var(--amber)"
              accentSoft="var(--amber-soft)"
            />
          </div>
        </div>

        <p className="mt-2 text-[11px] font-mono text-center md:hidden" style={{ color: 'var(--text-muted)' }}>
          ← geser untuk melihat selengkapnya →
        </p>
      </div>
    </section>
  )
}
