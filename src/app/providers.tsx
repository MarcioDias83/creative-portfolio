'use client'

import { createContext, useContext, useState, useEffect, useCallback, useMemo, type ReactNode } from 'react'
import { i18n as i18nData, type Lang, type I18n } from '@/lib/i18n'

type Theme = 'light' | 'dark'

interface AppContextType {
  lang: Lang
  t: I18n
  theme: Theme
  toggleLang: () => void
  toggleTheme: () => void
}

const AppContext = createContext<AppContextType | null>(null)

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}

function getStoredLang(): Lang {
  try { return (localStorage.getItem('lang') as Lang) || 'pt' } catch { return 'pt' }
}

function getStoredTheme(): Theme {
  try {
    const stored = localStorage.getItem('theme') as Theme | null
    if (stored) return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  } catch { return 'light' }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const [lang, setLang] = useState<Lang>('pt')
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    setLang(getStoredLang())
    setTheme(getStoredTheme())
    setMounted(true)
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentionally syncing on mount
  }, [])

  useEffect(() => {
    if (!mounted) return
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme, mounted])

  const toggleLang = useCallback(() => {
    setLang(prev => {
      const next: Lang = prev === 'pt' ? 'en' : 'pt'
      try { localStorage.setItem('lang', next) } catch {}
      return next
    })
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(prev => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark'
      try { localStorage.setItem('theme', next) } catch {}
      return next
    })
  }, [])

  const value = useMemo(() => ({ lang, t: i18nData[lang], theme, toggleLang, toggleTheme }), [lang, theme, toggleLang, toggleTheme])

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F9F9F9]">
        <span className="font-serif text-4xl font-bold italic text-[#D44A3A] animate-pulse">MD</span>
      </div>
    )
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
