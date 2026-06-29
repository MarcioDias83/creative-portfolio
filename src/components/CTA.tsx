'use client'

import { useState, useEffect } from 'react'
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
  const [next, setNext] = useState(services[1])

  useEffect(() => {
    setNext(getNextService())
  }, [])

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[65vh] min-h-[500px] flex items-center justify-center">
        <Image
          src="/images/worship-stage.jpg"
          alt="Casa Church adoração"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/70 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/40 via-transparent to-[#0A0A0A]/40" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black font-[family-name:var(--font-display)] leading-[0.92] tracking-tighter mb-6">
            <span className="block text-white/90">VENHA A</span>
            <span className="block gradient-text">CASA</span>
            <span className="block text-white/80 text-2xl sm:text-3xl lg:text-4xl mt-4 font-light tracking-normal">
              {next.artigo} {next.label}
            </span>
          </h2>
          <p className="text-base text-[var(--text-secondary)] max-w-lg mx-auto mb-10 leading-relaxed">
            Se conecte conosco e descubra o que Deus tem preparado para a sua vida.
            Você é bem-vindo exatamente como está.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#visita" className="btn-primary">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Planeje sua Visita
            </a>
            <a href="https://wa.me/5551984607739" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
