import Image from 'next/image'

export default function Adorar() {
  return (
    <section id="adorar" className="section-padding relative overflow-hidden bg-[var(--dark)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label">
              A Nossa Cultura
            </span>
            <h2 className="text-4xl sm:text-5xl font-black font-[family-name:var(--font-display)] leading-[1.1] mb-5">
              Venha <span className="text-[var(--accent)]">Adorar</span> Conosco
            </h2>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-lg">
              Nossos momentos de adoração são experiências que transformam. Com louvor contemporâneo, mensagens práticas e um ambiente acolhedor, cada culto é uma oportunidade de encontro com Deus.
            </p>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-lg mt-4">
              Seja você quem for, de onde vier — você é bem-vindo aqui.
            </p>
            <a href="#cultos" className="btn-primary inline-flex mt-7">
              Ver horários
            </a>
          </div>
          <div className="rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&q=80"
              alt="Adoração"
              width={800}
              height={420}
              className="w-full h-[420px] object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
