'use client'

import { useApp } from '@/app/providers'

export default function Header() {
  const { t, lang, theme, toggleLang, toggleTheme } = useApp()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)]/80 backdrop-blur-sm">
      <div className="grid grid-cols-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="col-start-2 col-span-3 flex items-center h-16">
          <span className="text-[var(--accent)] font-serif font-bold italic text-lg">{t.header.label}</span>
        </div>
        <div className="col-span-7 flex items-center justify-end gap-3 h-16">
          <button
            onClick={toggleLang}
            className="font-sans text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors px-3 py-1.5 rounded border border-[var(--border-light)]"
            aria-label="Switch language"
          >
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
          <button
            onClick={toggleTheme}
            className="font-sans text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors px-3 py-1.5 rounded border border-[var(--border-light)]"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  )
}
