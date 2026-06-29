'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Sobre', href: '#missao' },
    { label: 'Cultos', href: '#cultos' },
    { label: 'Batismo', href: '#batismo' },
    { label: 'Grupos', href: '#conecte' },
    { label: 'Como Chegar', href: '#chegar' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'glass-strong py-3 shadow-2xl shadow-black/30'
          : 'bg-transparent py-[18px]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <img src="/casa-church-logo.svg" alt="Casa Church" className="h-10 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-[0.5px] text-white/85 hover:text-[var(--accent)] transition-colors no-underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#"
          className="hidden lg:inline-flex btn-primary !py-2.5 !px-5 !text-xs font-bold rounded-full"
        >
          Seja membro
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl hover:bg-white/[0.03] transition-colors"
          aria-label="Menu"
        >
          <span className={`w-5 h-[1.5px] bg-[var(--text-primary)] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
          <span className={`w-5 h-[1.5px] bg-[var(--text-primary)] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-[1.5px] bg-[var(--text-primary)] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[4px]' : ''}`} />
        </button>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-500 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="glass-strong mx-4 mt-3 rounded-2xl p-6 border border-white/5">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-white/65 hover:text-white hover:bg-white/[0.03] px-4 py-3 rounded-xl transition-all"
              >
                {link.label}
              </a>
            ))}
            <a href="#" className="btn-primary text-center mt-3 justify-center">
              Seja membro
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
