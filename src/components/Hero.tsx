'use client'

import { useEffect, useRef } from 'react'
import { useApp } from '@/app/providers'

export default function Hero() {
  const { t, lang } = useApp()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const items = el.querySelectorAll('.reveal-item')
    items.forEach((item, i) => {
      setTimeout(() => (item as HTMLElement).style.opacity = '1', 200 + i * 80)
    })
  }, [])

  return (
    <section ref={sectionRef} className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <img
          src="/imagens/hero/tech-gradient.jpg"
          alt=""
          className="w-full h-full object-cover opacity-[var(--hero-bg-opacity,0.15)]"
        />
      </div>
      <div className="relative z-10 grid grid-cols-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="col-start-2 col-span-2">
          <p className="reveal-item opacity-0 transition-opacity duration-700 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-secondary)]">
            {t.hero.label}
          </p>
        </div>
        <div className="col-span-5">
          <h1
            className="reveal-item opacity-0 transition-opacity duration-700 font-serif text-[clamp(3.5rem,8vw,7rem)] leading-[0.92] font-normal text-[var(--text)]"
            dangerouslySetInnerHTML={{ __html: t.hero.title }}
          />
          <p className="reveal-item opacity-0 transition-opacity duration-700 font-sans text-[clamp(0.9rem,1.5vw,1.15rem)] text-[var(--text-secondary)] mt-3 tracking-wide font-light">
            {t.hero.subtitle}
          </p>
          <p className="reveal-item opacity-0 transition-opacity duration-700 font-sans text-sm text-[var(--text-secondary)] mt-2 leading-relaxed max-w-md">
            {t.hero.tagline}
          </p>
        </div>
        <div className="col-span-3 flex items-end justify-end">
          <div className="reveal-item opacity-0 transition-all duration-700 w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden border-2 border-[var(--border-light)]">
            <img
              src="/profile.jpg"
              alt="Marcio Dias"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="relative z-10 grid grid-cols-12 px-4 md:px-8 max-w-7xl mx-auto mt-12">
        <div className="col-start-2 col-span-2">
          <p className="reveal-item opacity-0 transition-opacity duration-700 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-[var(--text-secondary)]">
            {lang === 'pt' ? 'localizado em' : 'based in'}
          </p>
          <p className="reveal-item opacity-0 transition-opacity duration-700 font-sans text-sm font-medium text-[var(--text)] mt-1">
            {t.hero.based}
          </p>
        </div>
        <div className="col-span-4">
          <p className="reveal-item opacity-0 transition-opacity duration-700 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-[var(--text-secondary)]">
            {lang === 'pt' ? 'foco' : 'focus'}
          </p>
          <p className="reveal-item opacity-0 transition-opacity duration-700 font-sans text-sm font-medium text-[var(--text)] mt-1">
            {t.hero.focus}
          </p>
        </div>
        <div className="col-span-4">
          <p className="reveal-item opacity-0 transition-opacity duration-700 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-[var(--text-secondary)]">
            {lang === 'pt' ? 'disponibilidade' : 'availability'}
          </p>
          <p className="reveal-item opacity-0 transition-opacity duration-700 font-sans text-sm font-medium text-[var(--accent)] mt-1">
            {t.hero.availability}
          </p>
        </div>
      </div>
    </section>
  )
}
