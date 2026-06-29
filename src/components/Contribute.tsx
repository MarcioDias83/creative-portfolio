import Image from 'next/image'

export default function Contribute() {
  return (
    <section id="contribua" className="relative overflow-hidden text-center py-[120px]">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1600&q=80"
          alt="Contribua"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 to-[#0A0A0A]/85" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <span className="section-label mx-auto w-fit">
          De Coração
        </span>
        <h2 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-black font-[family-name:var(--font-display)] leading-[0.92] tracking-tighter mb-2">
          CONTRIBUA
        </h2>
        <p className="text-xl sm:text-2xl font-bold mb-5">
          <span className="text-[var(--accent)]">Seja parte</span> da obra
        </p>
        <p className="text-sm text-white/70 max-w-md mx-auto mb-8 leading-relaxed">
          Sua contribuição transforma vidas e expande o alcance do evangelho. Juntos fazemos muito mais.
        </p>
        <div className="flex flex-wrap gap-3.5 justify-center">
          <a href="#" className="btn-primary">Pix</a>
          <a href="#" className="btn-ghost">Saiba Mais</a>
        </div>
      </div>
    </section>
  )
}
