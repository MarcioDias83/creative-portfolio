import Image from 'next/image'

export default function About() {
  return (
    <section id="missao" className="section-padding relative overflow-hidden bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="section-label !text-[var(--accent)]">
              Nossa Missão
            </span>
            <h2 className="text-4xl sm:text-5xl font-black font-[family-name:var(--font-display)] leading-[1.1] mb-5">
              Por que existimos
            </h2>
            <p className="text-base text-[#555] leading-relaxed max-w-lg">
              Conduzir pessoas a um relacionamento genuíno com Jesus Cristo, formando uma comunidade apaixonada por Deus, comprometida em servir e transformar vidas.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/images/church-interior.jpg"
              alt="Interior da igreja"
              width={800}
              height={380}
              className="w-full h-[380px] object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-lg overflow-hidden lg:order-1">
            <Image
              src="/images/worship-crowd.jpg"
              alt="Comunidade Casa Church"
              width={800}
              height={380}
              className="w-full h-[380px] object-cover rounded-lg"
            />
          </div>
          <div className="lg:order-2">
            <span className="section-label !text-[var(--accent)]">
              Nossa Visão
            </span>
            <h2 className="text-4xl sm:text-5xl font-black font-[family-name:var(--font-display)] leading-[1.1] mb-5">
              Onde queremos <span className="text-[var(--accent)]">chegar</span>
            </h2>
            <p className="text-base text-[#555] leading-relaxed max-w-lg">
              Ser uma igreja que alcança pessoas, forma discípulos e impacta Porto Alegre através do amor de Cristo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
