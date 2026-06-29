export default function Location() {
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

        <div className="grid lg:grid-cols-5 gap-4">
          <div className="lg:col-span-3">
            <div className="h-full relative rounded-[var(--radius-lg)] overflow-hidden">
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

          <div className="lg:col-span-2 space-y-2">
            <div className="card-casa p-3">
              <h3 className="font-semibold text-base mb-2 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[var(--accent-soft)] border border-[var(--accent)]/15 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                Endereço
              </h3>
              <div className="space-y-1 text-sm">
                <div className="p-2 rounded-lg bg-white/[0.015] border border-white/5">
                  <strong className="text-white block mb-0.5 text-sm">Sede — Restinga</strong>
                  <span className="text-[var(--text-secondary)] leading-relaxed block text-sm">
                    Av. Ignês e Fagundes, 1191<br />
                    Restinga, Porto Alegre - RS<br />
                    CEP 91793-490
                  </span>
                </div>
              </div>
            </div>

            <div className="card-casa p-3">
              <h3 className="font-semibold text-base mb-2 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[var(--blue-soft)] border border-[var(--blue)]/15 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[var(--blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Horários
              </h3>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-[var(--text-secondary)] text-sm">Quarta</span>
                  <span className="font-semibold text-sm">20h — 22h30</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-[var(--text-secondary)] text-sm">Sábado</span>
                  <span className="font-semibold text-sm">20h — 22h30</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-[var(--text-secondary)] text-sm">Domingo</span>
                  <span className="font-semibold text-sm">20h — 22h30</span>
                </div>
              </div>
            </div>

            <div className="card-casa p-3">
              <h3 className="font-semibold text-base mb-2 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[var(--accent-soft)] border border-[var(--accent)]/15 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Contato
              </h3>
              <div className="space-y-1 text-sm">
                <a href="https://wa.me/5551984607739" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/[0.02]">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (51) 98460-7739
                </a>
                <a href="https://linktr.ee/igrejacasa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/[0.02]">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  linktr.ee/igrejacasa
                </a>
              </div>
            </div>

            <div className="card-casa p-3">
              <h3 className="font-semibold text-base mb-2 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[var(--purple-soft)] border border-[var(--purple)]/15 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[var(--purple)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                Redes Sociais
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-2">
                Acompanhe a CASA nas redes sociais:
              </p>
              <div className="flex flex-wrap gap-1.5">
                <a href="https://www.instagram.com/igrejacasa/" target="_blank" rel="noopener noreferrer" className="px-2.5 py-1.5 rounded-md bg-white/[0.03] border border-white/5 text-sm text-[var(--text-secondary)] hover:text-white hover:border-[var(--accent)]/30 transition-all">
                  Instagram
                </a>
                <a href="https://www.facebook.com/igrejacasa" target="_blank" rel="noopener noreferrer" className="px-2.5 py-1.5 rounded-md bg-white/[0.03] border border-white/5 text-sm text-[var(--text-secondary)] hover:text-white hover:border-[var(--accent)]/30 transition-all">
                  Facebook
                </a>
                <a href="https://linktr.ee/igrejacasa" target="_blank" rel="noopener noreferrer" className="px-2.5 py-1.5 rounded-md bg-[var(--accent-soft)] border border-[var(--accent)]/10 text-sm text-[var(--accent)] hover:text-white hover:bg-[var(--accent-soft-hover)] transition-all">
                  Linktree
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
