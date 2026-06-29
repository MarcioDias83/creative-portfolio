'use client'

import { useState } from 'react'
import Image from 'next/image'

const services = [
  { day: 3, label: 'quarta', artigo: 'nesta' },
  { day: 6, label: 'sábado', artigo: 'neste' },
  { day: 0, label: 'domingo', artigo: 'neste' },
]

function getNextService() {
  const now = new Date()
  const currentDay = now.getDay()
  const currentHour = now.getHours()

  let best = services[0]
  let minDays = Infinity

  for (const s of services) {
    let daysUntil = (s.day - currentDay + 7) % 7
    if (daysUntil === 0 && currentHour >= 20) {
      daysUntil = 7
    }
    if (daysUntil < minDays) {
      minDays = daysUntil
      best = s
    }
  }

  return best
}

export default function CTA() {
  const [next] = useState(getNextService)

  return (
    <section id="cta-final" className="relative overflow-hidden">
      <div className="relative h-[65vh] min-h-[500px] flex items-center justify-center">
        <Image
          src="/images/worship-stage.jpg"
          alt="Casa Church"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/55 via-[#0A0A0A]/70 to-[#0A0A0A]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="section-label mx-auto w-fit mb-6">
            Te Esperamos
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-black font-[family-name:var(--font-display)] leading-[0.92] tracking-tighter uppercase mb-2">
            VENHA À<br />CASA
          </h2>
          <p className="text-xl sm:text-2xl text-[var(--text-secondary)] font-light mb-6">
            {next.artigo} {next.label}
          </p>
          <p className="text-sm text-white/70 max-w-md mx-auto mb-8 leading-relaxed">
            Não importa onde você está na vida. Aqui você encontra família, propósito e presença de Deus.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a href="#cultos" className="btn-primary">Planejar Visita</a>
            <a href="#missao" className="btn-ghost">Saiba Mais</a>
          </div>
        </div>
      </div>
    </section>
  )
}
