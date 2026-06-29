import Image from 'next/image'

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[65vh] min-h-[500px] flex items-center justify-center">
        <Image
          src="/images/worship-stage.jpg"
          alt="Casa Church adoração"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/70 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/40 via-transparent to-[#0A0A0A]/40" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black font-[family-name:var(--font-display)] leading-[0.92] tracking-tighter mb-6">
            <span className="block text-white/90">VENHA A</span>
            <span className="block gradient-text">CASA</span>
            <span className="block text-white/80 text-2xl sm:text-3xl lg:text-4xl mt-4 font-light tracking-normal">
              neste sábado
            </span>
          </h2>
          <p className="text-base text-[var(--text-secondary)] max-w-lg mx-auto mb-10 leading-relaxed">
            Se conecte conosco e descubra o que Deus tem preparado para a sua vida.
            Você é bem-vindo exatamente como está.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#visita" className="btn-primary">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Planeje sua Visita
            </a>
            <a href="https://linktr.ee/igrejacasa" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              Linktree
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
