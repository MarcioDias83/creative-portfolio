const values = [
  {
    title: 'Jesus em primeiro lugar',
    desc: 'Cristo é o centro de tudo o que fazemos e o motivo da nossa fé.',
  },
  {
    title: 'Amor ao próximo',
    desc: 'Servimos e cuidamos das pessoas com o amor que recebemos de Deus.',
  },
  {
    title: 'Serviço',
    desc: 'Somos mãos e pés de Jesus, prontos para servir com excelência.',
  },
  {
    title: 'Família',
    desc: 'Valorizamos cada família como base da sociedade e da igreja.',
  },
  {
    title: 'Comunhão',
    desc: 'Construímos relacionamentos genuínos e duradouros.',
  },
  {
    title: 'Discipulado',
    desc: 'Crescemos juntos através do ensino bíblico aplicado ao dia a dia.',
  },
  {
    title: 'Integridade',
    desc: 'Vivemos o que pregamos, dentro e fora da igreja.',
  },
  {
    title: 'Generosidade',
    desc: 'Contribuímos com alegria para transformar vidas e expandir o Reino.',
  },
]

export default function Valores() {
  return (
    <section id="valores" className="section-padding bg-[var(--bg-elevated-1)]">
      <div className="max-w-7xl mx-auto px-6">
        <span className="section-label">
          Nossos Valores
        </span>
        <h2 className="text-4xl sm:text-5xl font-black font-[family-name:var(--font-display)] leading-[1.08] tracking-tight mb-12">
          O que nos <span className="text-[var(--accent)]">define</span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v) => (
            <div key={v.title} className="card-casa p-6 text-center">
              <h4 className="text-sm font-extrabold text-white mb-2">{v.title}</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
