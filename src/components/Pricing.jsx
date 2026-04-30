import { motion } from 'framer-motion'
import AnimatedSection from './ui/AnimatedSection'

const tiers = [
  {
    name: 'Bireysel',
    price: 'Ücretsiz',
    priceNote: 'Başlangıç paketi',
    features: [
      'Aylık 3 sözleşme oluşturma',
      'NLP destekli madde önerileri',
      'PDF dışa aktarma',
      'E-posta desteği',
    ],
    cta: 'Hemen Başla',
    accent: false,
  },
  {
    name: 'Profesyonel',
    price: '₺499',
    priceNote: 'aylık / kullanıcı',
    features: [
      'Sınırsız sözleşme',
      'Karşı taraf onay akışı',
      'NFC kimlik doğrulama',
      'İki faktörlü doğrulama',
      'Öncelikli destek',
    ],
    cta: 'Demo Talep Et',
    accent: true,
  },
  {
    name: 'Kurumsal',
    price: 'Özel',
    priceNote: 'Hacme göre fiyatlandırma',
    features: [
      'Tüm Profesyonel özellikleri',
      'SSO / SCIM entegrasyonu',
      'Özel sözleşme şablonları',
      'SLA ve adanmış hesap yöneticisi',
      'Türkiye içi barındırma',
    ],
    cta: 'Satışla Görüşün',
    accent: false,
  },
]

export default function Pricing() {
  const scrollToDemo = () => {
    const el = document.getElementById('demo')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="pricing" style={{ background: 'var(--color-white)', padding: 'var(--section-py) 0' }}>
      <div className="container">
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: 10 }}>
              FİYATLANDIRMA
            </p>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight: 800,
              color: 'var(--color-navy)',
              letterSpacing: '-0.02em',
              marginBottom: '0.75rem',
              lineHeight: 1.15,
            }}>
              İhtiyacınıza uygun bir plan seçin
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: 16, maxWidth: 560, margin: '0 auto', lineHeight: 1.6 }}>
              Bireysel kullanıcıdan kurumsal ekiplere kadar tüm ihtiyaçlara uygun şeffaf fiyatlandırma.
            </p>
          </div>
        </AnimatedSection>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.25rem',
          maxWidth: 1100,
          margin: '0 auto',
        }}>
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              style={{
                background: tier.accent ? 'var(--color-navy)' : '#fff',
                color: tier.accent ? '#fff' : 'var(--color-navy)',
                borderRadius: 18,
                padding: '2rem 1.75rem',
                border: tier.accent ? 'none' : '1px solid var(--color-gray-200)',
                boxShadow: tier.accent ? '0 18px 50px rgba(15,26,48,0.28)' : '0 4px 16px rgba(15,26,48,0.06)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {tier.accent && (
                <span style={{
                  position: 'absolute', top: 16, right: 16,
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
                  textTransform: 'uppercase', color: 'var(--color-gold)',
                  background: 'rgba(200,150,62,0.15)',
                  padding: '4px 10px', borderRadius: 999,
                }}>
                  Popüler
                </span>
              )}
              <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', opacity: 0.8, marginBottom: 12 }}>
                {tier.name}
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 800 }}>{tier.price}</span>
              </div>
              <div style={{ fontSize: 13, opacity: 0.75, marginBottom: 18 }}>{tier.priceNote}</div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 22px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {tier.features.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, lineHeight: 1.5 }}>
                    <span style={{ color: tier.accent ? 'var(--color-gold)' : 'var(--color-navy)', flexShrink: 0, marginTop: 2 }}>✓</span>
                    <span style={{ opacity: tier.accent ? 0.92 : 0.8 }}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToDemo}
                style={{
                  marginTop: 'auto',
                  padding: '11px 18px',
                  borderRadius: 10,
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: tier.accent ? 'none' : '1.5px solid var(--color-navy)',
                  background: tier.accent ? 'var(--color-gold)' : 'transparent',
                  color: tier.accent ? '#fff' : 'var(--color-navy)',
                }}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
