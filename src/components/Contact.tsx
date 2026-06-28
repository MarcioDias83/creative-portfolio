'use client'

import { useRef, useEffect, useState, type FormEvent } from 'react'
import { useApp } from '@/app/providers'

export default function Contact() {
  const { t } = useApp()
  const ref = useRef<HTMLElement>(null)
  const [sent, setSent] = useState(false)

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
    el.querySelectorAll('.reveal-section').forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const params = new URLSearchParams()
    fd.forEach((value, key) => params.append(key, value.toString()))
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: params })
      if (res.ok) {
        setSent(true)
        form.reset()
      }
    } catch { /* ignore */ }
  }

  return (
    <section ref={ref} className="py-20 md:py-28" id="contact">
      <div className="grid grid-cols-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="col-start-2 col-span-2">
          <h2 className="reveal-section opacity-0 translate-y-6 transition-all duration-700 font-sans text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-[var(--text-secondary)]">
            {t.contact.label}
          </h2>
        </div>
        <div className="col-span-8">
          <div className="reveal-section opacity-0 translate-y-6 transition-all duration-700 flex items-center gap-4 p-5 border border-[var(--border-light)] rounded-lg mb-10 hover:border-[var(--accent)] transition-colors">
            <span className="flex items-center justify-center w-11 h-11 rounded-lg bg-[var(--accent)] text-white shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </span>
            <a href={`mailto:${t.contact.email}`} className="font-serif text-[clamp(1.1rem,2.5vw,1.75rem)] font-medium text-[var(--text)] no-underline hover:text-[var(--accent)] transition-colors break-all">
              {t.contact.email}
            </a>
          </div>

          <form onSubmit={handleSubmit} className="reveal-section opacity-0 translate-y-6 transition-all duration-700 mb-10 p-5 border border-[var(--border-light)] rounded-lg">
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text" name="name" required placeholder={t.contact.formName}
                className="w-full font-sans text-sm text-[var(--text)] bg-transparent border-b border-[var(--border-light)] pb-2.5 pt-2 outline-none focus:border-[var(--accent)] transition-colors placeholder:text-[var(--text-secondary)] placeholder:opacity-60"
              />
              <input
                type="email" name="email" required placeholder={t.contact.formEmail}
                className="w-full font-sans text-sm text-[var(--text)] bg-transparent border-b border-[var(--border-light)] pb-2.5 pt-2 outline-none focus:border-[var(--accent)] transition-colors placeholder:text-[var(--text-secondary)] placeholder:opacity-60"
              />
            </div>
            <input
              type="text" name="subject" placeholder={t.contact.formSubject}
              className="w-full font-sans text-sm text-[var(--text)] bg-transparent border-b border-[var(--border-light)] pb-2.5 pt-2 mt-1 outline-none focus:border-[var(--accent)] transition-colors placeholder:text-[var(--text-secondary)] placeholder:opacity-60"
            />
            <textarea
              name="message" required placeholder={t.contact.formMsg}
              className="w-full font-sans text-sm text-[var(--text)] bg-transparent border-b border-[var(--border-light)] pb-2.5 pt-2 mt-1 outline-none focus:border-[var(--accent)] transition-colors placeholder:text-[var(--text-secondary)] placeholder:opacity-60 min-h-[100px] resize-y leading-relaxed"
            />
            <button
              type="submit"
              className="font-sans text-xs font-semibold uppercase tracking-[0.1em] text-white bg-[var(--accent)] rounded px-7 py-2.5 mt-4 hover:bg-[var(--accent-hover)] transition-colors"
            >
              {sent ? t.contact.formSent : t.contact.formSend}
            </button>
          </form>

          <div className="reveal-section opacity-0 translate-y-6 transition-all duration-700 grid grid-cols-2 gap-6">
            <div>
              <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-[var(--text-secondary)] mb-2">
                {t.contact.social}
              </p>
              <p className="font-sans text-sm text-[var(--text)]">
                <a href="https://github.com/MarcioDias83" target="_blank" rel="noopener noreferrer" className="underline underline-offset-[3px] decoration-[var(--border-light)] hover:decoration-[var(--accent)] transition-colors">
                  GitHub
                </a>
                <br />
                <a href="https://linkedin.com/in/marciordias" target="_blank" rel="noopener noreferrer" className="underline underline-offset-[3px] decoration-[var(--border-light)] hover:decoration-[var(--accent)] transition-colors">
                  LinkedIn
                </a>
              </p>
            </div>
            <div>
              <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-[var(--text-secondary)] mb-2">
                {t.contact.call}
              </p>
              <p className="font-sans text-sm text-[var(--text)]">
                <a href="https://wa.me/5551992293999" target="_blank" rel="noopener noreferrer" className="underline underline-offset-[3px] decoration-[var(--border-light)] hover:decoration-[var(--accent)] transition-colors">
                  +55 51 99229-3999
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
