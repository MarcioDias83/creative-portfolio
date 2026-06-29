export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#070707]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-4">
              <img src="/casa-church-logo.svg" alt="Casa Church" className="h-14 w-auto" />
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
              Uma comunidade de fé, esperança e amor em Porto Alegre.
            </p>
            <div className="flex gap-3.5">
              <a
                href="https://www.instagram.com/igrejacasa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center text-white hover:bg-[var(--accent)] transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/igrejacasa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center text-white hover:bg-[var(--accent)] transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://open.spotify.com/intl-pt/artist/..."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Spotify"
                className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center text-white hover:bg-[var(--accent)] transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@CasaChurch_Ch"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center text-white hover:bg-[var(--accent)] transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-xs uppercase tracking-[0.15em] text-[var(--cinza)] mb-5 font-semibold">Navegação</h5>
            <ul className="space-y-2.5">
              {[
                { label: 'Sobre', href: '#missao' },
                { label: 'Nossos Valores', href: '#valores' },
                { label: 'Cultos', href: '#cultos' },
                { label: 'Batismo', href: '#batismo' },
                { label: 'Ministérios', href: '#conecte' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-white/65 hover:text-[var(--accent)] transition-colors inline-block">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs uppercase tracking-[0.15em] text-[var(--cinza)] mb-5 font-semibold">Cultos</h5>
            <ul className="space-y-2.5">
              {['Quarta – 20h', 'Sábado – 20h', 'Domingo – 20h'].map((item) => (
                <li key={item}>
                  <a href="#cultos" className="text-sm text-white/65 hover:text-[var(--accent)] transition-colors inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs uppercase tracking-[0.15em] text-[var(--cinza)] mb-5 font-semibold">Contato</h5>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:contato@casachurch.com.br" className="text-sm text-white/65 hover:text-[var(--accent)] transition-colors inline-block">
                  contato@casachurch.com.br
                </a>
              </li>
              <li>
                <a href="https://wa.me/5551984607739" target="_blank" rel="noopener noreferrer" className="text-sm text-white/65 hover:text-[var(--accent)] transition-colors inline-block">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#chegar" className="text-sm text-white/65 hover:text-[var(--accent)] transition-colors inline-block">
                  Como Chegar
                </a>
              </li>
              <li>
                <a href="#contribua" className="text-sm text-white/65 hover:text-[var(--accent)] transition-colors inline-block">
                  Contribua
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/6 text-center">
          <p className="text-sm text-white/30">
            &copy; 2026 Casa Church · Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
