import Image from 'next/image'

export default function Baptism() {
  return (
    <section id="batismo" className="relative overflow-hidden text-center py-[120px]">
      <div className="absolute inset-0">
        <Image
          src="/images/worship-hands.jpg"
          alt="Batismo"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--purple)]/75 via-[#0A0A0A]/88 to-[#0A0A0A]/88" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <span className="section-label mx-auto w-fit">
          Próximo Passo
        </span>
        <h2 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-black font-[family-name:var(--font-display)] leading-[0.92] tracking-tighter mb-2">
          BATISMO
        </h2>
        <p className="text-xl sm:text-2xl text-[var(--accent)] font-bold italic mb-6">
          Novo início em Cristo
        </p>
        <p className="text-sm text-white/75 max-w-md mx-auto mb-8 leading-relaxed">
          O batismo é a declaração pública da sua fé. É o momento em que você diz ao mundo que sua vida foi transformada. Dê esse passo conosco.
        </p>
        <a href="#" className="btn-primary">Tome o Batismo</a>
      </div>
    </section>
  )
}
