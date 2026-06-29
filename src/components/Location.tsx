'use client'

import { useState, FormEvent } from 'react'

export default function Location() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const params = new URLSearchParams(formData)
      const res = await fetch('/api/contact', { method: 'POST', body: params.toString(), headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
      if (!res.ok) throw new Error()
      setStatus('sent')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contato" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label mx-auto w-fit">
            Localização
          </span>
          <h2 className="text-4xl sm:text-5xl font-black font-[family-name:var(--font-display)] leading-[1.08] tracking-tight mb-5">
            Como <span className="gradient-text">Chegar</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
          <div className="card-casa p-3">
            <h3 className="font-semibold text-xs mb-2 flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-[var(--accent-soft)] border border-[var(--accent)]/15 flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              Endereço
            </h3>
            <span className="text-[11px] text-[var(--text-secondary)] leading-relaxed block">
              Av. Ignês e Fagundes, 1191<br />
              Restinga, Porto Alegre - RS<br />
              CEP 91793-490
            </span>
          </div>

          <div className="card-casa p-3">
            <h3 className="font-semibold text-xs mb-2 flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-[var(--blue-soft)] border border-[var(--blue)]/15 flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 text-[var(--blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              Horários
            </h3>
            <div className="text-[11px]">
              <div className="flex justify-between py-0.5 border-b border-white/5">
                <span className="text-[var(--text-secondary)]">Quarta</span>
                <span className="font-semibold">20h</span>
              </div>
              <div className="flex justify-between py-0.5 border-b border-white/5">
                <span className="text-[var(--text-secondary)]">Sábado</span>
                <span className="font-semibold">20h</span>
              </div>
              <div className="flex justify-between py-0.5">
                <span className="text-[var(--text-secondary)]">Domingo</span>
                <span className="font-semibold">20h</span>
              </div>
            </div>
          </div>

          <div className="card-casa p-3">
            <h3 className="font-semibold text-xs mb-2 flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-[var(--accent-soft)] border border-[var(--accent)]/15 flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              Contato
            </h3>
            <a href="https://wa.me/5551984607739" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[11px] text-[var(--text-secondary)] hover:text-white transition-colors">
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              WhatsApp
            </a>
            <div className="flex flex-wrap gap-1.5 mt-2">
              <a href="https://www.instagram.com/igrejacasa/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-7 h-7 rounded-lg bg-[#E4405F]/10 border border-[#E4405F]/20 flex items-center justify-center text-[#E4405F] hover:text-white hover:bg-[#E4405F] transition-all duration-300">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/igrejacasa" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-7 h-7 rounded-lg bg-[#1877F2]/10 border border-[#1877F2]/20 flex items-center justify-center text-[#1877F2] hover:text-white hover:bg-[#1877F2] transition-all duration-300">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@CasaChurch_Ch" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-7 h-7 rounded-lg bg-[#FF0000]/10 border border-[#FF0000]/20 flex items-center justify-center text-[#FF0000] hover:text-white hover:bg-[#FF0000] transition-all duration-300">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="card-casa p-3">
            <h3 className="font-semibold text-xs mb-2 flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-[var(--accent-soft)] border border-[var(--accent)]/15 flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              Email
            </h3>
            <form onSubmit={handleSubmit} className="space-y-1.5">
              <input type="text" placeholder="Nome" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-2.5 py-1.5 rounded-lg bg-[var(--bg-elevated-1)] border border-[var(--glass-border)] text-[11px] text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)]/50 transition-all" />
              <input type="email" placeholder="Email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-2.5 py-1.5 rounded-lg bg-[var(--bg-elevated-1)] border border-[var(--glass-border)] text-[11px] text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)]/50 transition-all" />
              <textarea placeholder="Mensagem" required rows={2} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-2.5 py-1.5 rounded-lg bg-[var(--bg-elevated-1)] border border-[var(--glass-border)] text-[11px] text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)]/50 transition-all resize-none" />
              <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center !py-1.5 !text-[11px] disabled:opacity-50">
                {status === 'sending' ? 'Enviando...' : status === 'sent' ? 'Enviada!' : status === 'error' ? 'Erro' : 'Enviar'}
              </button>
            </form>
          </div>
        </div>

        <div className="h-[300px] relative rounded-[var(--radius-lg)] overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=Av.+Ign%C3%AAs+e+Fagundes,+1191+-+Restinga,+Porto+Alegre+-+RS&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, position: 'absolute', inset: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Casa Church"
          />
        </div>
      </div>
    </section>
  )
}
