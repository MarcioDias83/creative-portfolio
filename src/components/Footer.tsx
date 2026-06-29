import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="mb-5">
              <div className="w-[120px] h-[120px] relative mb-3">
                <Image
                  src="/images/casa.png"
                  alt="Casa Church"
                  fill
                  className="object-contain"
                  sizes="120px"
                />
              </div>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
              Servir é a nossa essência. Jesus é a nossa paixão.
            </p>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6">
              Igreja cristã contemporânea. Ambiente familiar. Comunidade acolhedora.
            </p>
            <div className="flex items-center gap-2">
              {[
                { label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z', href: 'https://www.instagram.com/igrejacasa/' },
                { label: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', href: 'https://www.facebook.com/igrejacasa' },

              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:bg-[var(--accent-soft)] hover:border-[var(--accent)]/30 transition-all duration-300"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-xs uppercase tracking-[0.15em] text-white/60">Navegação</h4>
            <ul className="space-y-2.5 text-sm text-[var(--text-secondary)]">
              {[
                { label: 'Quem Somos', href: '#sobre' },
                { label: 'Cultos', href: '#cultos' },
                { label: 'Ministérios', href: '#ministerios' },
                { label: 'Planeje sua Visita', href: '#visita' },
                { label: 'Contato', href: '#contato' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-white hover:translate-x-0.5 transition-all duration-300 inline-block text-xs">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-xs uppercase tracking-[0.15em] text-white/60">Ministérios</h4>
            <ul className="space-y-2.5 text-sm text-[var(--text-secondary)]">
              {['CASA Kids', 'Jovens', 'Casais', 'Mulheres', 'Homens', 'Pequenos Grupos', 'Louvor', 'Recepção', 'Oração', 'Fundamentos', 'Voluntariado'].map((item) => (
                <li key={item}>
                  <a href="#ministerios" className="hover:text-white hover:translate-x-0.5 transition-all duration-300 inline-block text-xs">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-xs uppercase tracking-[0.15em] text-white/60">Próximos Passos</h4>
            <ul className="space-y-2.5 text-sm text-[var(--text-secondary)]">
              {['Curso de Fundamentos', 'Seja Voluntário', 'Pedido de Oração', 'Batismo', 'Contribua'].map((item) => (
                <li key={item}>
                  <a href={item === 'Pedido de Oração' ? '#contato' : item === 'Seja Voluntário' ? 'https://linktr.ee/igrejacasa' : item === 'Curso de Fundamentos' ? 'https://linktr.ee/igrejacasa' : '#'} target={item === 'Seja Voluntário' || item === 'Curso de Fundamentos' ? '_blank' : undefined} rel={item === 'Seja Voluntário' || item === 'Curso de Fundamentos' ? 'noopener noreferrer' : undefined} className="hover:text-white hover:translate-x-0.5 transition-all duration-300 inline-block text-xs">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-muted)]">
            &copy; 2026 <a href="https://wa.me/5551992293999" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Márcio Dias</a>. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://linktr.ee/igrejacasa" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--text-muted)] hover:text-white transition-colors">
              Linktree
            </a>
            <a href="https://wa.me/5551984607739" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--text-muted)] hover:text-white transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
