import Image from 'next/image'

export default function Visit() {
  const items = [
    'Uma experiência normal e acolhedora',
    'Crianças têm espaço especial',
    'Não precisa trazer nada',
    'Fácil de entender e participar',
  ]

  return (
    <section id="primeiravez" className="section-padding relative overflow-hidden bg-[var(--bg-elevated-1)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80"
              alt="Mãos levantadas em adoração"
              width={800}
              height={400}
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </div>
          <div>
            <span className="section-label">
              É o certo pra ti?
            </span>
            <h2 className="text-4xl sm:text-5xl font-black font-[family-name:var(--font-display)] leading-[1.08] tracking-tight mb-6">
              Ir à igreja pela primeira vez pode ser <span className="text-[var(--accent)]">intimidador</span>
            </h2>
            <ul className="space-y-3 mb-8">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/85">
                  <span className="w-5.5 h-5.5 rounded-full bg-[var(--accent)] flex items-center justify-center text-[10px] font-bold shrink-0">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3.5">
              <a href="#" className="btn-primary">Saiba Mais</a>
              <a href="#" className="btn-ghost">Sem Tradições</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
