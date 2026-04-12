import AnimatedSection from './ui/AnimatedSection'

const logos = [
  'Kurumsal Müşteri',
  'Hukuk Bürosu',
  'Finans Kuruluşu',
  'Sigorta Şirketi',
  'Lojistik Firması',
  'Perakende Şirketi',
  'Teknoloji Firması',
  'Üretim Şirketi',
  'Danışmanlık Firması',
  'E-Ticaret Şirketi',
]

export default function TrustedBy() {
  return (
    <section style={{ background: 'var(--color-gray-50)', padding: 'clamp(2.5rem,5vw,4rem) 0', overflow: 'hidden' }}>
      <div className="container">
        <AnimatedSection>
          <p style={{
            textAlign: 'center',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-gray-500)',
            marginBottom: '2rem',
          }}>
            GÜVENEN KURUMLAR
          </p>
        </AnimatedSection>
      </div>

      {/* Infinite marquee */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{
          display: 'flex',
          width: 'max-content',
          animation: 'marquee 28s linear infinite',
          gap: '3rem',
        }}>
          {[...logos, ...logos].map((name, i) => (
            <div
              key={i}
              style={{
                display: 'flex', alignItems: 'center',
                padding: '10px 28px',
                background: '#fff',
                borderRadius: 10,
                border: '1px solid var(--color-gray-200)',
                whiteSpace: 'nowrap',
                boxShadow: 'var(--shadow-sm)',
                flexShrink: 0,
              }}
            >
              <span style={{
                fontSize: 14,
                fontWeight: 700,
                color: 'var(--color-gray-500)',
                letterSpacing: '-0.01em',
              }}>
                {name}
              </span>
            </div>
          ))}
        </div>
        {/* Fade edges */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 80,
          background: 'linear-gradient(to right, var(--color-gray-50), transparent)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: 80,
          background: 'linear-gradient(to left, var(--color-gray-50), transparent)',
          pointerEvents: 'none',
        }} />
      </div>
    </section>
  )
}
