import { motion } from 'framer-motion'
import AnimatedSection from './ui/AnimatedSection'

const steps = [
  {
    number: '01',
    title: 'Hesap Oluşturun',
    description: 'Birkaç dakika içinde kurumsal hesabınızı açın. Kredi kartı gerekmez.',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Belge Yükleyin veya Oluşturun',
    description: 'Mevcut sözleşmelerinizi yükleyin ya da YZ destekli editörümüzde sıfırdan oluşturun.',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="12" y1="18" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="9" y1="15" x2="15" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Analiz Edin',
    description: 'Yapay zeka motorumuz belgenizi tarar, risk noktalarını ve yasal uyumsuzlukları raporlar.',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
        <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 11h6M11 8v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Onaylayın ve İmzalayın',
    description: 'Dijital onay akışı ile karşı tarafı davet edin, belgeyi elektronik olarak imzalayın.',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

const lineVariants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 1, ease: 'easeOut', delay: 0.4 } },
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ background: 'var(--color-gray-50)', padding: 'var(--section-py) 0' }}>
      <div className="container">
        <AnimatedSection style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: 12 }}>
            NASIL ÇALIŞIR
          </p>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 800,
            color: 'var(--color-navy)',
            letterSpacing: '-0.025em',
          }}>
            4 adımda dijital dönüşüm
          </h2>
        </AnimatedSection>

        {/* Steps */}
        <div style={{ position: 'relative' }}>
          {/* Connecting line (desktop) */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{
              position: 'absolute',
              top: 28,
              left: '12.5%',
              right: '12.5%',
              height: 2,
              background: 'linear-gradient(to right, var(--color-navy), var(--color-gold))',
              transformOrigin: 'left',
              borderRadius: 1,
            }}
            className="steps-line"
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            position: 'relative',
          }}>
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <div style={{ textAlign: 'center' }}>
                  {/* Circle */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    style={{
                      width: 56, height: 56,
                      borderRadius: '50%',
                      background: i === steps.length - 1 ? 'var(--color-gold)' : 'var(--color-navy)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      margin: '0 auto 1.25rem',
                      color: '#fff',
                      boxShadow: i === steps.length - 1
                        ? '0 8px 24px rgba(200,150,62,0.4)'
                        : '0 4px 16px rgba(15,26,48,0.25)',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {step.icon}
                  </motion.div>

                  <span style={{
                    display: 'block',
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    color: 'var(--color-gold)',
                    marginBottom: 8,
                  }}>
                    ADIM {step.number}
                  </span>

                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--color-navy)',
                    marginBottom: 8,
                    letterSpacing: '-0.01em',
                  }}>
                    {step.title}
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: 14, lineHeight: 1.65 }}>
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 640px) { .steps-line { display: none; } }
        `}</style>
      </div>
    </section>
  )
}
