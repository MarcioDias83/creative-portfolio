'use client'

export default function Location() {
  return (
    <section id="chegar" className="section-padding relative overflow-hidden bg-white text-black text-center">
      <div className="max-w-7xl mx-auto px-6">
        <span className="section-label mx-auto w-fit !text-[var(--accent)]">
          Nos Visite
        </span>
        <h2 className="text-4xl sm:text-5xl font-black font-[family-name:var(--font-display)] leading-[1.08] tracking-tight mb-0 text-black">
          Como <span className="text-[var(--accent)]">Chegar</span>
        </h2>

        <div className="grid lg:grid-cols-3 gap-10 mt-12 text-left">
          <div>
            <h4 className="text-xs uppercase tracking-[2px] text-[var(--accent)] font-bold mb-4">
              Endereço
            </h4>
            <address className="text-sm text-[#555] leading-relaxed not-italic">
              Av. Ignês e Fagundes, 1191<br />
              Restinga<br />
              Porto Alegre – RS<br />
              CEP 91793-490
            </address>

            <h4 className="text-xs uppercase tracking-[2px] text-[var(--accent)] font-bold mb-4 mt-6">
              Contato
            </h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/5551984607739"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#555] hover:text-[var(--accent)] transition-colors no-underline"
              >
                <svg className="w-4 h-4 text-[var(--accent)] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                (51) 98460-7739
              </a>
              <a
                href="mailto:contato@casachurch.com.br"
                className="flex items-center gap-3 text-sm text-[#555] hover:text-[var(--accent)] transition-colors no-underline"
              >
                <svg className="w-4 h-4 text-[var(--accent)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contato@casachurch.com.br
              </a>
            </div>

            <h4 className="text-xs uppercase tracking-[2px] text-[var(--accent)] font-bold mb-4 mt-6">
              Redes Sociais
            </h4>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/igrejacasa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#E4405F]/10 border border-[#E4405F]/20 flex items-center justify-center text-[#E4405F] hover:text-white hover:bg-[#E4405F] transition-all"
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
                className="w-9 h-9 rounded-full bg-[#1877F2]/10 border border-[#1877F2]/20 flex items-center justify-center text-[#1877F2] hover:text-white hover:bg-[#1877F2] transition-all"
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
                className="w-9 h-9 rounded-full bg-[#1DB954]/10 border border-[#1DB954]/20 flex items-center justify-center text-[#1DB954] hover:text-white hover:bg-[#1DB954] transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[2px] text-[var(--accent)] font-bold mb-4">
              Mapa
            </h4>
            <div className="w-full h-[220px] rounded-xl overflow-hidden bg-[#e8e8e8]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.1!2d-51.1683!3d-30.0623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95199a0a0a0a0a0a%3A0x0!2zMzDCsDAzJzQ0LjMiUyA1McKwMTAnMDUuOCJX!5e0!3m2!1spt-BR!2sbr!4v1000000000000"
                className="w-full h-full border-none"
                allowFullScreen
                loading="lazy"
                title="Mapa Casa Church"
              />
            </div>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4">
              <img src="/casa-church-logo.svg" alt="Casa Church" className="h-20 w-auto mx-auto" />
            </div>
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-black text-black">Casa Church</h3>
            <p className="text-xs text-[#555] mt-1 mb-4">Porto Alegre – RS</p>
            <div className="flex gap-3.5 justify-center">
              <span className="bg-black text-white text-xs font-bold px-[18px] py-2 rounded-full"><span className="text-[var(--accent)]">7+</span> anos</span>
              <span className="bg-black text-white text-xs font-bold px-[18px] py-2 rounded-full"><span className="text-[var(--accent)]">100+</span> membros</span>
            </div>
            <a
              href="https://www.google.com/maps/dir//Av.+Ign%C3%AAs+e+Fagundes,+1191+-+Restinga,+Porto+Alegre+-+RS"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-center mt-6 w-full !text-xs"
            >
              Abrir no Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
