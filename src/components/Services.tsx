'use client'

import { useRef, useEffect } from 'react'
import { useApp } from '@/app/providers'

export default function Services() {
  const { t } = useApp()
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
    <section ref={ref} className="py-20 md:py-28" id="services">
      <div className="grid grid-cols-12 px-4 md:px-8 max-w-7xl mx-auto mb-12">
        <div className="col-start-2 col-span-2">
          <h2 className="font-sans text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-[var(--text-secondary)]">
            {t.services.label}
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-12 px-4 md:px-8 max-w-7xl mx-auto gap-4 md:gap-6">
        {t.services.items.map((s, i) => (
          <div
            key={i}
            className="reveal-card col-span-12 md:col-span-4 opacity-0 translate-y-6 transition-all duration-700 rounded-lg overflow-hidden group cursor-pointer"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div
              className="relative h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(/imagens/bento/${s.img}.jpg)` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.15)] flex flex-col justify-end p-6">
                <span className="font-sans text-xs font-semibold text-[var(--accent)] mb-1">{s.num}</span>
                <h3 className="font-serif text-lg font-bold text-white mb-1">{s.title}</h3>
                <p className="font-sans text-sm text-white/80">{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
