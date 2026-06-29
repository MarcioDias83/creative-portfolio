import Image from 'next/image'

const moments = [
  {
    title: 'Cultos',
    desc: 'Celebração e Adoração',
    img: '/images/hero-worship.jpg',
  },
  {
    title: 'Batismos',
    desc: 'Novas histórias',
    img: '/images/church-interior.jpg',
  },
  {
    title: 'Jovens',
    desc: 'Uma geração que faz a diferença',
    img: '/images/worship-stage.jpg',
  },
  {
    title: 'Kids',
    desc: 'Plantando o futuro',
    img: '/images/church-seats.jpg',
  },
  {
    title: 'Eventos',
    desc: 'Momentos inesquecíveis',
    img: '/images/worship-crowd.jpg',
  },
]

export default function Ministries() {
  return (
    <section id="eventos" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="section-label mx-auto w-fit">
            Nossos Momentos
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {moments.map((m) => (
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
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent" />
              </div>
              <div className="p-4 relative">
                <h3 className="text-sm font-bold mb-1">{m.title}</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
