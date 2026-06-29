export default function Services() {
  const services = [
    { day: 'Quarta-Feira', time: '20h → 22h', label: 'Culto de Quarta' },
    { day: 'Sábado', time: '20h → 22h', label: 'Culto Jovem' },
    { day: 'Domingo', time: '20h → 22h', label: 'Culto de Domingo' },
  ]

  return (
    <section id="cultos" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <span className="section-label">
          Programação
        </span>
        <h2 className="text-4xl sm:text-5xl font-black font-[family-name:var(--font-display)] leading-[1.08] tracking-tight mb-0">
          Nossos <span className="text-[var(--accent)]">Cultos</span>
        </h2>

        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          {services.map((s) => (
            <div key={s.day} className="card-casa p-8 flex flex-col gap-3.5">
              <span className="text-[10px] uppercase tracking-[2px] text-[var(--text-secondary)] font-semibold">{s.day}</span>
              <div className="font-[family-name:var(--font-display)] text-3xl font-black text-[var(--accent)] leading-none">{s.time}</div>
              <span className="text-sm text-[var(--text-secondary)]">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
