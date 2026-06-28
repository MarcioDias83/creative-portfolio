'use client'

import { useRef, useEffect } from 'react'
import { useApp } from '@/app/providers'

export default function About() {
  const { t, lang } = useApp()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
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
    const targets = el.querySelectorAll('.reveal-section')
    targets.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 md:py-28" id="about">
      <div className="grid grid-cols-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="col-start-2 col-span-4">
          <h2 className="reveal-section opacity-0 translate-y-6 transition-all duration-700 font-sans text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-[var(--text-secondary)]">
            {t.about.label}
          </h2>
        </div>
        <div className="col-span-6">
          <p className="reveal-section opacity-0 translate-y-6 transition-all duration-700 font-sans text-sm md:text-[0.9375rem] leading-[1.7] text-[var(--text)] mb-5">
            <span className="float-left text-[3.5em] leading-[0.8] mr-2 font-serif text-[var(--accent)]">
              {lang === 'pt' ? 'P' : 'I'}
            </span>
            {t.about.p1.slice(1)}
          </p>
          <p className="reveal-section opacity-0 translate-y-6 transition-all duration-700 font-sans text-sm md:text-[0.9375rem] leading-[1.7] text-[var(--text-secondary)] mb-5">
            {t.about.p2}
          </p>
          <p className="reveal-section opacity-0 translate-y-6 transition-all duration-700 font-sans text-sm md:text-[0.9375rem] leading-[1.7] text-[var(--text-secondary)] mb-10">
            {t.about.p3}
          </p>

          <div className="reveal-section opacity-0 translate-y-6 transition-all duration-700 mb-10">
            <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-[var(--text-secondary)] mb-3">
              {t.timeline.label}
            </p>
            {t.timeline.items.map((item, i) => (
              <div key={i} className="flex gap-4 py-2 border-b border-[var(--border-light)] last:border-0">
                <span className="font-sans text-xs font-semibold text-[var(--accent)] w-10 shrink-0 pt-0.5">{item.year}</span>
                <span className="font-sans text-sm text-[var(--text)]">{item.desc}</span>
              </div>
            ))}
          </div>

          <div className="reveal-section opacity-0 translate-y-6 transition-all duration-700 grid grid-cols-4 gap-4">
            {t.stats.map((s, i) => (
              <div key={i}>
                <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text)]">{s.num}</p>
                <p className="font-sans text-xs text-[var(--text-secondary)] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
