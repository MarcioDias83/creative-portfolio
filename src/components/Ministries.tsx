import Image from 'next/image'

const ministries = [
  {
    title: 'CASA Kids',
    desc: '[DESCRIÇÃO PENDENTE] — Programação infantil durante os cultos.',
    img: '/images/church-seats.jpg',
    gradient: 'from-[var(--accent)]/15 to-[var(--purple)]/10',
    border: 'border-[var(--accent)]/15',
  },
  {
    title: 'Jovens',
    desc: '[DESCRIÇÃO PENDENTE] — Encontros e atividades para juventude.',
    img: '/images/worship-stage.jpg',
    gradient: 'from-[var(--purple)]/15 to-[var(--accent)]/10',
    border: 'border-[var(--purple)]/15',
  },
  {
    title: 'Casais',
    desc: '[DESCRIÇÃO PENDENTE] — Ministério dedicado a casais.',
    img: '/images/church-interior.jpg',
    gradient: 'from-[var(--blue)]/15 to-[var(--accent)]/10',
    border: 'border-[var(--blue)]/15',
  },
  {
    title: 'Mulheres',
    desc: '[DESCRIÇÃO PENDENTE] — Encontros e comunhão feminina.',
    img: '/images/worship-hands.jpg',
    gradient: 'from-[var(--purple)]/15 to-[var(--accent)]/10',
    border: 'border-[var(--purple)]/15',
  },
  {
    title: 'Homens',
    desc: '[DESCRIÇÃO PENDENTE] — Formando homens de propósito e fé.',
    img: '/images/hero-worship.jpg',
    gradient: 'from-[var(--accent)]/10 to-[var(--purple)]/10',
    border: 'border-[var(--accent)]/15',
  },
  {
    title: 'Louvor',
    desc: '[DESCRIÇÃO PENDENTE] — Equipe de música e adoração.',
    img: '/images/worship-stage.jpg',
    gradient: 'from-[var(--accent)]/15 to-[var(--purple)]/10',
    border: 'border-[var(--accent)]/15',
  },
]

export default function Ministries() {
  return (
    <section id="ministerios" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent)]/[0.015] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="section-label mx-auto w-fit">
            Ministérios
          </span>
          <h2 className="text-4xl sm:text-5xl font-black font-[family-name:var(--font-display)] leading-[1.08] tracking-tight mb-5">
            Conecte-se <span className="gradient-text">Conosco</span>
          </h2>
          <p className="text-base text-[var(--text-secondary)] max-w-lg mx-auto">
            Temos ministérios para todas as idades e fases da vida.
            Encontre o seu lugar na CASA e comece a servir.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ministries.map((m) => (
            <div
              key={m.title}
              className="card-casa overflow-hidden group cursor-pointer relative"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={m.img}
                  alt={m.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent" />
                <div className={`absolute inset-0 bg-gradient-to-br ${m.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
              </div>
              <div className="p-5 relative">
                <h3 className="text-lg font-bold mb-2">{m.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
