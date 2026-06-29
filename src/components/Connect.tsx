import Image from 'next/image'

const groups = [
  {
    title: 'CASA Kids',
    desc: 'Espaço seguro e divertido para as crianças.',
    img: 'https://images.unsplash.com/photo-1607453998774-d533f65dac99?w=600&q=80',
  },
  {
    title: 'Jovens',
    desc: 'Uma geração conectada com propósito.',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
  },
  {
    title: 'Louvor',
    desc: 'Banda ao vivo, worship contemporâneo e música moderna.',
    img: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&q=80',
  },
  {
    title: 'Mulheres',
    desc: 'Comunidade que fortalece e inspira.',
    img: 'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=600&q=80',
  },
  {
    title: 'Homens',
    desc: 'Liderança, caráter e propósito.',
    img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80',
  },
  {
    title: 'Pequenos Grupos',
    desc: 'Vida em comunidade e crescimento espiritual.',
    img: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&q=80',
  },
  {
    title: 'Curso de Fundamentos',
    desc: 'Desenvolvimento espiritual para novos convertidos.',
    img: '/images/church-seats.jpg',
  },
  {
    title: 'Sala de Oração',
    desc: 'Momentos de oração espontânea e intercessão.',
    img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80',
  },
  {
    title: 'Recepção',
    desc: 'Equipe pronta para acolher com amor e excelência.',
    img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80',
  },
]

export default function Connect() {
  return (
    <section id="conecte" className="section-padding relative overflow-hidden bg-[var(--bg-elevated-1)] text-center">
      <div className="max-w-7xl mx-auto px-6">
        <span className="section-label mx-auto w-fit">
          Nossos Ministérios
        </span>
        <h2 className="text-4xl sm:text-5xl font-black font-[family-name:var(--font-display)] leading-[1.08] tracking-tight mb-4">
          Conecte-se <span className="text-[var(--accent)]">Conosco</span>
        </h2>
        <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto mb-12">
          Temos grupos e ministérios para todas as idades e fases da vida. Encontre o seu lugar na CASA.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {groups.map((g) => (
            <div key={g.title} className="relative rounded-xl overflow-hidden h-[200px] cursor-pointer group">
              <Image
                src={g.img}
                alt={g.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/85" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h4 className="text-lg font-extrabold text-white mb-1">{g.title}</h4>
                <p className="text-xs text-white/75 leading-relaxed">{g.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
