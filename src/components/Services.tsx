import Image from 'next/image'

export default function Services() {
  const schedules = [
    { day: 'Quarta', time: '20h — 22h30', label: 'Culto de Quarta', desc: 'Noite de oração e palavra' },
    { day: 'Sábado', time: '20h — 22h30', label: 'Culto Jovem', desc: 'Para adolescentes e jovens' },
    { day: 'Domingo', time: '20h — 22h30', label: 'Culto de Domingo', desc: 'Celebração para toda a família' },
  ]

  return (
    <section id="cultos" className="relative overflow-hidden">
      <div className="relative h-[55vh] min-h-[450px] flex items-center">
        <Image
          src="/images/worship-stage.jpg"
          alt="Palco de adoração"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <span className="section-label">
              Nossos Cultos
            </span>
            <h2 className="text-4xl sm:text-5xl font-black font-[family-name:var(--font-display)] leading-[1.08] tracking-tight mb-5">
              Venha <span className="gradient-text">Adorar</span><br />Conosco
            </h2>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-lg">
              Cultos com louvor contemporâneo, banda ao vivo, letras em telão, 
              momentos de oração e uma mensagem prática que conecta a Bíblia 
              ao seu dia a dia.
            </p>
          </div>
        </div>
      </div>

      <div className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-3 mb-12">
            {schedules.map((s) => (
              <div
                key={s.day}
                className="card-casa p-6 text-center group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent-soft)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] font-semibold mb-2">
                    {s.day}
                  </div>
                  <div className="text-2xl font-black font-[family-name:var(--font-display)] gradient-text mb-2 group-hover:scale-105 transition-transform duration-300">
                    {s.time}
                  </div>
                  <div className="font-semibold text-sm mb-1">{s.label}</div>
                  <div className="text-xs text-[var(--text-muted)]">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card-casa overflow-hidden">
              <div className="grid md:grid-cols-[1fr,auto] items-center gap-6 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--accent)]/15 to-[var(--purple)]/10 flex items-center justify-center shrink-0 border border-[var(--accent)]/10">
                    <svg className="w-7 h-7 text-[var(--accent)]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-0.5">Igreja Online</h3>
                    <p className="text-sm text-[var(--text-secondary)]">Acompanhe a CASA nas redes sociais</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/5551984607739"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary whitespace-nowrap"
                >
                  Fale Conosco
                </a>
              </div>
            </div>

            <div className="card-casa overflow-hidden">
              <div className="grid md:grid-cols-[1fr,auto] items-center gap-6 p-6">
                <div className="flex items-center gap-4">
                  <div>
                    <h3 className="font-semibold text-base mb-0.5">Sala de Oração</h3>
                    <p className="text-sm text-[var(--text-secondary)]">Envie seu pedido de oração</p>
                  </div>
                </div>
                <a href="#contato" className="btn-ghost whitespace-nowrap">
                  Pedir Oração
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
