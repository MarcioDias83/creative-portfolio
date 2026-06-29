'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const values = [
  { icon: '✝️', title: 'Jesus em primeiro lugar', desc: 'Cristo é o centro de tudo que fazemos', img: '/images/hero-worship.jpg' },
  { icon: '❤️', title: 'Amor ao próximo', desc: 'Acolhemos a todos sem distinção', img: '/images/worship-crowd.jpg' },
  { icon: '🤲', title: 'Serviço', desc: 'Servir é a nossa essência', img: '/images/worship-hands.jpg' },
  { icon: '⭐', title: 'Excelência', desc: 'Fazemos tudo com dedicação e qualidade', img: '/images/worship-stage.jpg' },
  { icon: '🛡️', title: 'Integridade', desc: 'Vivemos com honestidade e transparência', img: '/images/church-interior.jpg' },
  { icon: '🤝', title: 'Comunhão', desc: 'A vida é melhor em comunidade', img: '/images/worship-crowd.jpg' },
  { icon: '👨‍👩‍👧‍👦', title: 'Família', desc: 'Família é prioridade', img: '/images/church-seats.jpg' },
  { icon: '📖', title: 'Discipulado', desc: 'Crescimento espiritual contínuo', img: '/images/church-interior.jpg' },
  { icon: '🎁', title: 'Generosidade', desc: 'Abençoamos com alegria', img: '/images/worship-hands.jpg' },
]

export default function About() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', dragFree: true },
    [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
  )

  function scroll(dir: 'left' | 'right') {
    if (!emblaApi) return
    if (dir === 'left') emblaApi.scrollPrev()
    else emblaApi.scrollNext()
  }

  useEffect(() => {
    if (!emblaApi) return
    const unused = () => {}
    emblaApi.on('select', unused)
    return () => { emblaApi.off('select', unused) }
  }, [emblaApi])

  return (
    <section id="sobre" className="section-padding relative overflow-hidden">
      <div className="warm-glow warm-glow-3" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <span className="section-label">
              Quem Somos
            </span>
            <h2 className="text-4xl sm:text-5xl font-black font-[family-name:var(--font-display)] leading-[1.08] tracking-tight mb-6">
              A missão da CASA é a{' '}
              <span className="gradient-text">reconciliação</span>
            </h2>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-5">
              Somos uma igreja cristã contemporânea centrada nas Sagradas Escrituras,
              fundada em 2008. Nosso objetivo é glorificar o Nome de Jesus, trazer
              Sua Presença nas nossas reuniões e levar cada membro da CASA a refletir
              a Imagem e Semelhança de Deus.
            </p>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-8">
              Reconciliar as pessoas com Deus e a igreja por meio da adoração,
              desenvolvendo um discipulado de amor e gratidão.
            </p>

            <div className="card-casa p-6 mb-6 border-l-2 border-[var(--accent)]">
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed italic">
                &ldquo;Conduzir pessoas a um relacionamento genuíno com Jesus Cristo, 
                formando uma comunidade apaixonada por Deus, comprometida em servir 
                e transformar vidas.&rdquo;
              </p>
              <p className="text-xs text-[var(--accent)] mt-2 font-semibold uppercase tracking-wider">— Missão</p>
            </div>

            <div className="card-casa p-6 mb-6 border-l-2 border-[var(--blue)]">
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed italic">
                &ldquo;Ser uma igreja que alcança pessoas, forma discípulos e impacta 
                Porto Alegre através do amor de Cristo.&rdquo;
              </p>
              <p className="text-xs text-[var(--blue)] mt-2 font-semibold uppercase tracking-wider">— Visão</p>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-[var(--radius-xl)] overflow-hidden aspect-[4/5] border border-[var(--glass-border)]">
              <Image
                src="/images/church-interior.jpg"
                alt="Interior da Casa Church"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/5">
                    <svg className="w-4 h-4 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">Cristocêntrica</div>
                    <div className="text-xs text-white/50">Cristo é o centro</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-bold font-[family-name:var(--font-display)] mb-6 text-center">Nossos Valores</h3>

        <div className="relative -mx-6 px-6">
          <div className="overflow-hidden rounded-[var(--radius-lg)]" ref={emblaRef}>
            <div className="flex gap-5">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="relative rounded-[var(--radius-lg)] overflow-hidden shrink-0 w-[300px] sm:w-[340px] h-[280px] sm:h-[320px] border border-[var(--glass-border)]"
                >
                  <Image
                    src={v.img}
                    alt={v.title}
                    fill
                    className="object-cover"
                    sizes="340px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/50 to-[#141414]/20" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h4 className="font-bold text-sm mb-1 text-white">{v.title}</h4>
                    <p className="text-xs text-[var(--text-secondary)]">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => scroll('left')}
            className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[var(--bg-elevated-2)] border border-[var(--glass-border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:border-[var(--accent)]/30 hover:bg-[var(--accent-soft)] transition-all duration-300 cursor-pointer z-10"
            aria-label="Anterior"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[var(--bg-elevated-2)] border border-[var(--glass-border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:border-[var(--accent)]/30 hover:bg-[var(--accent-soft)] transition-all duration-300 cursor-pointer z-10"
            aria-label="Próximo"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
