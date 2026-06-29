import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-worship.jpg"
          alt="Casa Church worship"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/20 via-[#0A0A0A]/50 to-[#0A0A0A]" />

      <div className="warm-glow warm-glow-1" />
      <div className="warm-glow warm-glow-2" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-24">
        <div
          className="pill mb-6 mx-auto w-fit"
          style={{ animation: 'fadeInUp 0.8s ease-out' }}
        >
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
          Porto Alegre, RS
        </div>

        <p
          className="text-sm uppercase tracking-[0.3em] text-[var(--accent)] mb-4 font-medium"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.05s both' }}
        >
          Servir é a nossa essência. Jesus é a nossa paixão.
        </p>

        <h1
          className="text-5xl sm:text-7xl lg:text-[8.5rem] font-black font-[family-name:var(--font-display)] leading-[0.88] tracking-tighter mb-6"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.1s both' }}
        >
          <span className="block text-white/90">SUA HISTÓRIA</span>
          <span className="block text-white/90">NOSSA</span>
          <span className="block gradient-text mt-1">FAMÍLIA</span>
          <span className="block text-white/80 text-3xl sm:text-4xl lg:text-5xl mt-3 font-light tracking-normal">
            um propósito
          </span>
        </h1>

        <p
          className="text-base sm:text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-10 leading-relaxed font-light"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.15s both' }}
        >
          Na Casa Church, você encontra uma igreja evangélica contemporânea, 
          ambiente familiar e uma comunidade acolhedora. 
          Venha nos visitar e descubra como Jesus pode transformar sua vida.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.3s both' }}
        >
          <a href="#visita" className="btn-primary">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Planeje sua Visita
          </a>
          <a href="#sobre" className="btn-ghost">
            Conheça a CASA
          </a>
        </div>

        <div
          className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.4s both' }}
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-black font-[family-name:var(--font-display)] gradient-text">3</div>
            <div className="text-[10px] text-[var(--text-muted)] mt-2 uppercase tracking-[0.25em] font-medium">Cultos Semana</div>
          </div>
          <div className="text-center border-x border-white/5">
            <div className="text-3xl sm:text-4xl font-black font-[family-name:var(--font-display)] gradient-text">1300+</div>
            <div className="text-[10px] text-[var(--text-muted)] mt-2 uppercase tracking-[0.25em] font-medium">Voluntários</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-black font-[family-name:var(--font-display)] gradient-text">2008</div>
            <div className="text-[10px] text-[var(--text-muted)] mt-2 uppercase tracking-[0.25em] font-medium">Fundada</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#sobre" className="flex flex-col items-center gap-2 text-white/15 hover:text-white/50 transition-colors duration-500">
          <span className="text-[9px] uppercase tracking-[0.35em] font-medium">Saiba mais</span>
          <div className="w-5 h-8 rounded-full border-2 border-current flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-current animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  )
}
