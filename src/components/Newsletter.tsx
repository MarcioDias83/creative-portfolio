'use client'

import { useState, FormEvent } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="newsletter" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="card-casa p-8 sm:p-10">
            <span className="section-label">
              Fique por dentro
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-[family-name:var(--font-display)] leading-[1.1] mb-3">
              Novidades da <span className="text-[var(--accent)]">CASA</span>
            </h2>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-8 max-w-md">
              Receba novidades sobre cultos, eventos e projetos diretamente no seu email.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Seu melhor email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[var(--accent)] transition-colors"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary !rounded-xl shrink-0 disabled:opacity-50"
              >
                {status === 'loading' ? 'Enviando...' : 'Inscrever'}
              </button>
            </form>

            {status === 'success' && (
              <p className="text-xs text-green-400 mt-3">Obrigado! Em breve você receberá novidades.</p>
            )}
            {status === 'error' && (
              <p className="text-xs text-red-400 mt-3">Erro ao inscrever. Tente novamente.</p>
            )}
          </div>

          <div className="card-casa p-8 sm:p-10 flex flex-col justify-center">
            <h3 className="text-2xl font-black font-[family-name:var(--font-display)] mb-3">
              Nosso Endereço
            </h3>
            <address className="text-sm text-[var(--text-secondary)] leading-relaxed not-italic mb-6">
              Av. Ignês e Fagundes, 1191<br />
              Restinga — Porto Alegre, RS<br />
              CEP 91793-490
            </address>

            <div className="space-y-2 mb-6">
              <p className="text-sm text-[var(--text-secondary)]">
                <strong className="text-white">Telefone:</strong>{' '}
                <a href="https://wa.me/5551984607739" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors no-underline text-[var(--text-secondary)]">
                  (51) 98460-7739
                </a>
              </p>
              <p className="text-sm text-[var(--text-secondary)]">
                <strong className="text-white">Email:</strong>{' '}
                <a href="mailto:contato@casachurch.com.br" className="hover:text-[var(--accent)] transition-colors no-underline text-[var(--text-secondary)]">
                  contato@casachurch.com.br
                </a>
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/igrejacasa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center text-white hover:bg-[var(--accent)] transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/igrejacasa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center text-white hover:bg-[var(--accent)] transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.4-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@CasaChurch_Ch"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center text-white hover:bg-[var(--accent)] transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
