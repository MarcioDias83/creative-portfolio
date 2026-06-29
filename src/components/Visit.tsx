import Image from 'next/image'

export default function Visit() {
  return (
    <section id="visita" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent)]/[0.015] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-[var(--radius-xl)] overflow-hidden aspect-square border border-[var(--glass-border)]">
              <Image
                src="/images/worship-crowd.jpg"
                alt="Casa Church adoração"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/85 via-[#0A0A0A]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/5">
                    <div className="text-xl font-black font-[family-name:var(--font-display)] gradient-text mb-0.5">3x</div>
                    <div className="text-[11px] text-white/50">Cultos por semana</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/5">
                    <svg className="w-5 h-5 mx-auto mb-1 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                    <div className="text-[11px] text-white/50">Louvor ao vivo</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/5">
                    <svg className="w-5 h-5 mx-auto mb-1 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22c4.418 0 8-3.134 8-7 0-3.866-3.582-10-8-10S4 11.134 4 15c0 3.866 3.582 7 8 7zm0 0c-2.21 0-4-1.567-4-3.5S9.79 15 12 15s4 1.567 4 3.5S14.21 22 12 22z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v3" />
                    </svg>
                    <div className="text-[11px] text-white/50">Café grátis</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/5">
                    <svg className="w-5 h-5 mx-auto mb-1 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <div className="text-[11px] text-white/50">CASA Kids</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="section-label">
              Planeje sua Visita
            </span>
            <h2 className="text-4xl sm:text-5xl font-black font-[family-name:var(--font-display)] leading-[1.08] tracking-tight mb-6">
              Ir à igreja pela primeira vez pode ser{' '}
              <span className="gradient-text">intimidador</span>
            </h2>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-8">
              Independentemente da fase, idade ou estação em que você se encontra,
              a Casa Church é um lugar para pertencer! Convidamos você a vir exatamente
              como está.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { title: 'Uma experiência incrível', desc: 'Mensagens que conectam verdades bíblicas a situações cotidianas' },
                { title: 'O melhor café de Porto Alegre', desc: 'Grátis! Chegue mais cedo e aproveite' },
                { title: 'Crianças vão amar estar aqui', desc: 'Igreja pensada para crianças de 0 a 13 anos' },
                { title: 'Equipe pronta para receber você', desc: 'Pessoas preparadas para acolhê-lo com carinho' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 group">
                  <div className="w-7 h-7 rounded-lg bg-[var(--accent-soft)] border border-[var(--accent)]/15 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                    <svg className="w-3.5 h-3.5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-0.5">{item.title}</h4>
                    <p className="text-xs text-[var(--text-secondary)]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://wa.me/5551984607739" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Agendar Visita
              </a>
              <a href="#contato" className="btn-ghost">
                Ver Localização
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
