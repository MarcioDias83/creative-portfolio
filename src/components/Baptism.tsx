import Image from 'next/image'

export default function Baptism() {
  return (
    <section id="batismo" className="relative overflow-hidden">
      <div className="relative h-[60vh] min-h-[450px] flex items-center justify-center">
        <Image
          src="/images/worship-hands.jpg"
          alt="Batismo na Casa Church"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/60 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/50 via-transparent to-[#0A0A0A]/50" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-[family-name:var(--font-display)] leading-[0.92] tracking-tighter mb-6">
            <span className="block text-white/90">BATISMO</span>
            <span className="block gradient-text text-3xl sm:text-4xl lg:text-5xl mt-2 font-light tracking-normal">
              Novo início em Cristo
            </span>
          </h2>
          <p className="text-base text-[var(--text-secondary)] max-w-lg mx-auto mb-10 leading-relaxed">
            O batismo é o passo de fé que marca o início da sua jornada com Jesus.
            Se você aceitou Cristo como seu Salvador, é hora de dar esse passo.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/5551984607739" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Quero ser Batizado
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
