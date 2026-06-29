import Image from 'next/image'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen min-h-[700px] flex flex-col items-center justify-center text-center overflow-hidden px-5">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-worship.jpg"
          alt="Louvor na Casa Church"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/45 via-[#0A0A0A]/75 to-[#0A0A0A]" />

      <div className="relative z-10 max-w-6xl mx-auto pt-10">
        <p
          className="text-[11px] uppercase tracking-[3px] text-[var(--accent)] mb-4 font-semibold"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.05s both' }}
        >
          Bem-vindo à Casa Church
        </p>

        <h1
          className="text-5xl sm:text-7xl lg:text-[8.5rem] font-black font-[family-name:var(--font-display)] leading-[0.95] tracking-tighter uppercase mb-4"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.1s both' }}
        >
          <span className="block text-white/90">Sua História</span>
          <span className="block text-white/90">Nossa</span>
          <span className="block text-[var(--accent)]">Família</span>
        </h1>

        <p
          className="text-base sm:text-lg text-[var(--text-secondary)] italic font-light mb-2"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.15s both' }}
        >
          um lugar para pertencer, crescer e servir
        </p>

        <p
          className="text-sm text-white/65 max-w-md mx-auto mb-8 leading-relaxed"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}
        >
          Uma comunidade cristã contemporânea, acolhedora e focada em Jesus. Aqui você encontra família, propósito e transformação.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.3s both' }}
        >
          <a href="#cultos" className="btn-primary">
            Planejar minha visita
          </a>
          <a href="#missao" className="btn-ghost">
            Conheça a CASA
          </a>
        </div>

        <div
          className="flex items-center justify-center gap-12 sm:gap-16"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.4s both' }}
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-black font-[family-name:var(--font-display)] text-white leading-none">7+</div>
            <div className="text-[10px] text-[var(--text-muted)] mt-1 uppercase tracking-[1px]">anos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-black font-[family-name:var(--font-display)] text-white leading-none">100+</div>
            <div className="text-[10px] text-[var(--text-muted)] mt-1 uppercase tracking-[1px]">membros</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-black font-[family-name:var(--font-display)] text-white leading-none">2019</div>
            <div className="text-[10px] text-[var(--text-muted)] mt-1 uppercase tracking-[1px]">fundação</div>
          </div>
        </div>
      </div>
    </section>
  )
}
