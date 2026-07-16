import { FileCode2 } from 'lucide-react'
import { projects } from '../data/portfolioData'
import useReveal from '../hooks/useReveal'

function ProjectCard({ project, index }) {
  const ref = useReveal()
  const isKelompok = project.category === 'Proyek Kelompok'
  const accent = isKelompok ? 'var(--cyan)' : 'var(--amber)'
  const accentSoft = isKelompok ? 'var(--cyan-soft)' : 'var(--amber-soft)'

  return (
    <div
      ref={ref}
      className="reveal group rounded-2xl border p-6 sm:p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1.5"
      style={{
        borderColor: 'var(--border-strong)',
        background: 'var(--bg-elevated)',
        transitionDelay: `${index * 80}ms`,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = accent)}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-strong)')}
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className="px-2.5 py-1 rounded-md font-mono text-[10px] uppercase tracking-wide"
          style={{ background: accentSoft, color: accent }}
        >
          {project.category}
        </span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px]" style={{ color: 'var(--text-muted)' }}>
          <FileCode2 className="w-3.5 h-3.5" />
          {project.file}
        </span>
      </div>

      <h3 className="font-display font-semibold text-lg leading-snug" style={{ color: 'var(--text)' }}>
        {project.title}
      </h3>

      <p className="text-[14px] leading-6 flex-1" style={{ color: 'var(--text-muted)' }}>
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 pt-1">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded-md font-mono text-[11px] border"
            style={{ borderColor: 'var(--border-strong)', color: 'var(--text-muted)' }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="proyek" className="px-5 md:px-8 py-24 md:py-32 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-14">
          <p className="font-mono text-xs tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--amber)' }}>
            // Proyek
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: 'var(--text)' }}>
            Dari tugas kelompok sampai eksperimen sendiri.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
