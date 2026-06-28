'use client'

import { useState, useRef, useEffect } from 'react'
import { useApp } from '@/app/providers'

const images = ['/projetos/igreja-app.jpg', '/projetos/locadora-react.jpg', '/projetos/app-fullstack.jpg']

export default function Projects() {
  const { t } = useApp()
  const [filter, setFilter] = useState('all')
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100')
            entry.target.classList.remove('opacity-0', 'translate-y-6')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    el.querySelectorAll('.reveal-card').forEach(c => observer.observe(c))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-28" id="work">
      <div className="grid grid-cols-12 px-4 md:px-8 max-w-7xl mx-auto mb-8">
        <div className="col-start-2 col-span-2">
          <h2 className="font-sans text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-[var(--text-secondary)]">
            {t.projects.label}
          </h2>
        </div>
        <div className="col-span-8 flex gap-4">
          {t.projects.filters.map((f, i) => (
            <button
              key={i}
              onClick={() => setFilter(i === 0 ? 'all' : t.projects.filters[i].toLowerCase())}
              className={`font-sans text-xs font-semibold uppercase tracking-[0.1em] transition-colors relative pb-1 ${
                filter === (i === 0 ? 'all' : t.projects.filters[i].toLowerCase())
                  ? 'text-[var(--text)] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[var(--accent)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text)]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-12 px-4 md:px-8 max-w-7xl mx-auto gap-4 md:gap-6">
        {t.projects.items.map((p, i) => (
          <div
            key={i}
            className={`reveal-card col-span-12 md:col-span-4 opacity-0 translate-y-6 transition-all duration-700 ${
              filter !== 'all' && p.tag.toLowerCase() !== filter ? 'hidden' : ''
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {p.url ? (
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="block group">
                <CardContent p={p} img={images[i]} />
              </a>
            ) : (
              <div className="block group cursor-default">
                <CardContent p={p} img={images[i]} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

function CardContent({ p, img }: { p: { tag: string; title: string; desc: string; tech: string; color: string }; img: string }) {
  return (
    <>
      <div
        className="h-48 md:h-56 bg-cover bg-center rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className="mt-4">
        <span className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-[var(--accent)]">
          {p.tag}
        </span>
        <h3 className="font-serif text-lg font-semibold text-[var(--text)] mt-1">{p.title}</h3>
        <p className="font-sans text-sm text-[var(--text-secondary)] mt-1 leading-relaxed">{p.desc}</p>
        <p className="font-sans text-xs text-[var(--text-secondary)] mt-2 opacity-70">{p.tech}</p>
      </div>
    </>
  )
}
