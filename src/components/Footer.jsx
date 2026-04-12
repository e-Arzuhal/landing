const sections = [
  {
    title: 'Ürün',
    links: [
      { label: 'Özellikler', href: '#features' },
      { label: 'Entegrasyonlar', href: '#' },
      { label: 'Güvenlik', href: '#' },
      { label: 'Fiyatlandırma', href: '#demo' },
    ],
  },
  {
    title: 'Destek',
    links: [
      { label: 'Yardım Merkezi', href: '#' },
      { label: 'İletişim', href: '#demo' },
      { label: 'API Dokümantasyonu', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Yasal',
    links: [
      { label: 'KVKK Aydınlatma', href: '#' },
      { label: 'Gizlilik Politikası', href: '#' },
      { label: 'Kullanım Koşulları', href: '#' },
      { label: 'Gizlilik Sözleşmesi', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-white)', borderTop: '1px solid var(--color-gray-200)' }}>
      <div className="container" style={{ padding: 'clamp(2.5rem, 5vw, 4rem) var(--section-px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px,1fr) repeat(3, minmax(120px,1fr))', gap: '3rem', flexWrap: 'wrap' }}>
          {/* Brand */}
          <div>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: '1rem', textDecoration: 'none' }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8,
                background: 'var(--color-navy)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16 }}>E</span>
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, color: 'var(--color-navy)' }}>E-ARZUHAL</span>
            </a>
            <p style={{ fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.65, maxWidth: 220, marginBottom: '1.25rem' }}>
              Sözleşme ve dilekçe süreçlerini dijital ortamda yönetmek için geliştirilmiş platform.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {/* Social icons */}
              {[
                { label: 'Twitter/X', svg: <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
                { label: 'LinkedIn', svg: <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
              ].map(social => (
                <a key={social.label} href="#" aria-label={social.label} style={{
                  width: 34, height: 34, borderRadius: 8,
                  border: '1px solid var(--color-gray-200)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--color-gray-500)',
                  transition: 'color 0.15s, border-color 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-navy)'; e.currentTarget.style.borderColor = 'var(--color-navy)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-gray-500)'; e.currentTarget.style.borderColor = 'var(--color-gray-200)' }}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {sections.map(section => (
            <div key={section.title}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-navy)', letterSpacing: '0.02em', marginBottom: '1rem' }}>
                {section.title}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {section.links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{ fontSize: 14, color: 'var(--color-text-muted)', transition: 'color 0.15s' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--color-navy)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          marginTop: '3rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--color-gray-100)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>
            © {new Date().getFullYear()} E-Arzuhal Teknolojileri A.Ş. Tüm hakları saklıdır.
          </p>
          <a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            style={{ fontSize: 13, color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 6, transition: 'color 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-navy)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
          >
            ↑ Yukarı
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer .container > div:first-child { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          footer .container > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
