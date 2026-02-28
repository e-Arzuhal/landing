import { motion } from 'framer-motion'
import AnimatedSection from './ui/AnimatedSection'

const features = [
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
        <rect width="28" height="28" rx="8" fill="#1B2A4A" opacity="0.08"/>
        <path d="M8 10h12M8 14h8M8 18h6" stroke="#1B2A4A" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="20" cy="18" r="4" fill="#C8963E" opacity="0.3"/>
        <path d="M18.5 18l1 1 2-2" stroke="#9a6e28" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Akıllı Sözleşme',
    description: 'Yapay zeka destekli taslak oluşturma ve dinamik onay mekanizmaları ile hata payını sıfıra indirin.',
    badge: 'YZ Destekli',
    color: '#EFF6FF',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
        <rect width="28" height="28" rx="8" fill="#C8963E" opacity="0.12"/>
        <path d="M10 8h8a2 2 0 012 2v10a2 2 0 01-2 2h-8a2 2 0 01-2-2V10a2 2 0 012-2z" stroke="#9a6e28" strokeWidth="1.8"/>
        <path d="M12 13h4M12 17h2" stroke="#9a6e28" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M17 8v3h3" stroke="#9a6e28" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Dijital Arşiv',
    description: 'Tüm belgelerinizi güvenli, KVKK uyumlu ve OCR teknolojisi ile taranabilir tek bir merkezde toplayın.',
    badge: 'KVKK Uyumlu',
    color: '#FFFBEB',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
        <rect width="28" height="28" rx="8" fill="#1B2A4A" opacity="0.08"/>
        <path d="M10 14a4 4 0 014-4v4l3 2a4 4 0 11-7-2z" fill="#1B2A4A" opacity="0.2"/>
        <circle cx="14" cy="14" r="5.5" stroke="#1B2A4A" strokeWidth="1.8"/>
        <path d="M14 8.5V14l3 2" stroke="#1B2A4A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Hukuki Otomasyon',
    description: 'Tekrarlayan düşük katma değerli işleri otomatiğe bağlayarak stratejik karar süreçlerinize odaklanın.',
    badge: 'Zaman Tasarrufu',
    color: '#F0FDF4',
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Features() {
  return (
    <section id="features" style={{ background: 'var(--color-white)', padding: 'var(--section-py) 0' }}>
      <div className="container">
        <AnimatedSection style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: 12 }}>
            ÖZELLİKLER
          </p>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 800,
            color: 'var(--color-navy)',
            letterSpacing: '-0.025em',
            marginBottom: 16,
          }}>
            Her hukuk birimi için profesyonel araçlar.
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 17, maxWidth: 480, margin: '0 auto', lineHeight: 1.65 }}>
            Karmaşık süreçleri basit, güvenli ve ölçeklenebilir bir iş akışına dönüştürüyoruz.
          </p>
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {features.map((feat, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: '0 24px 64px rgba(200,150,62,0.15), 0 4px 12px rgba(0,0,0,0.05)' }}
              style={{
                background: '#fff',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-gray-200)',
                padding: '2rem',
                cursor: 'default',
                boxShadow: 'var(--shadow-sm)',
                transition: 'border-color 0.25s',
              }}
              onHoverStart={e => { e.target.style && (e.target.style.borderColor = 'rgba(200,150,62,0.35)') }}
              onHoverEnd={e => { e.target.style && (e.target.style.borderColor = 'var(--color-gray-200)') }}
            >
              {/* Icon */}
              <div style={{
                width: 56, height: 56,
                borderRadius: 16,
                background: feat.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.25rem',
              }}>
                {feat.icon}
              </div>

              {/* Badge */}
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
                background: 'rgba(200,150,62,0.1)',
                padding: '3px 10px', borderRadius: 100,
                display: 'inline-block', marginBottom: 12,
              }}>
                {feat.badge}
              </span>

              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--color-navy)',
                marginBottom: 10,
                letterSpacing: '-0.01em',
              }}>
                {feat.title}
              </h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.65, fontSize: 15 }}>
                {feat.description}
              </p>

              {/* Arrow link */}
              <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: 6, color: 'var(--color-navy)', fontWeight: 600, fontSize: 14 }}>
                Daha fazla
                <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
