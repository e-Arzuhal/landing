import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import AnimatedSection from './ui/AnimatedSection'

export default function ProductPreview() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section ref={ref} style={{ background: 'var(--color-white)', padding: 'var(--section-py) 0', overflow: 'hidden' }}>
      <div className="container">
        <AnimatedSection style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: 12 }}>
            PLATFORM
          </p>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 800,
            color: 'var(--color-navy)',
            letterSpacing: '-0.025em',
            maxWidth: 500,
            margin: '0 auto',
          }}>
            Tüm hukuki süreçleriniz tek bir yerde
          </h2>
        </AnimatedSection>

        <motion.div style={{ y }}>
          <AnimatedSection delay={0.1}>
            {/* Browser chrome */}
            <div style={{
              maxWidth: 880,
              margin: '0 auto',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: '0 32px 80px rgba(15,26,48,0.14), 0 2px 8px rgba(0,0,0,0.06)',
              border: '1px solid var(--color-gray-200)',
            }}>
              {/* Title bar */}
              <div style={{
                background: 'var(--color-gray-50)',
                padding: '12px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                borderBottom: '1px solid var(--color-gray-200)',
              }}>
                <div style={{ display: 'flex', gap: 6 }}>
                  {['#FF5F57','#FFBD2E','#28CA41'].map(c => (
                    <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
                  ))}
                </div>
                <div style={{
                  flex: 1, maxWidth: 320, margin: '0 auto',
                  background: 'var(--color-gray-200)',
                  borderRadius: 8, height: 26,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12, color: 'var(--color-gray-500)',
                }}>
                  app.earzuhal.com
                </div>
              </div>

              {/* Mockup content */}
              <div style={{ background: '#F8FAFC', padding: '2rem', minHeight: 400 }}>
                <div style={{ display: 'flex', gap: '1.5rem', height: 360 }}>
                  {/* Sidebar */}
                  <div style={{
                    width: 200, background: 'var(--color-navy)', borderRadius: 'var(--radius-md)',
                    padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: 8, flexShrink: 0,
                  }}>
                    <div style={{ width: 80, height: 24, background: 'rgba(255,255,255,0.15)', borderRadius: 6, marginBottom: 12 }} />
                    {['Gösterge Paneli','Sözleşmeler','Dilekçeler','Onaylar','Arşiv','Ayarlar'].map((item, i) => (
                      <div key={item} style={{
                        padding: '8px 12px', borderRadius: 8,
                        background: i === 1 ? 'rgba(200,150,62,0.2)' : 'transparent',
                        display: 'flex', alignItems: 'center', gap: 10,
                      }}>
                        <div style={{ width: 16, height: 16, borderRadius: 4, background: i === 1 ? 'var(--color-gold)' : 'rgba(255,255,255,0.2)' }} />
                        <span style={{ fontSize: 13, color: i === 1 ? 'var(--color-gold-light, #E8C882)' : 'rgba(255,255,255,0.6)', fontWeight: i === 1 ? 600 : 400 }}>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Main content area */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {/* Header row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ width: 160, height: 28, background: 'var(--color-gray-200)', borderRadius: 8 }} />
                      <div style={{ width: 100, height: 28, background: 'var(--color-navy)', borderRadius: 8 }} />
                    </div>
                    {/* Stat cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                      {['Özet 1', 'Özet 2', 'Özet 3'].map((label, i) => (
                        <div key={label} style={{ background: '#fff', borderRadius: 12, padding: '1rem', border: '1px solid var(--color-gray-200)' }}>
                          <div style={{ fontSize: 11, color: 'var(--color-gray-500)', marginBottom: 8 }}>{label}</div>
                          <div style={{ height: 24, width: `${50 + i * 10}%`, borderRadius: 6, background: 'var(--color-gray-100)' }} />
                          <div style={{ height: 4, borderRadius: 2, background: 'var(--color-gray-100)', marginTop: 10 }} />
                        </div>
                      ))}
                    </div>
                    {/* Table skeleton */}
                    <div style={{ flex: 1, background: '#fff', borderRadius: 12, border: '1px solid var(--color-gray-200)', overflow: 'hidden' }}>
                      <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--color-gray-100)', display: 'flex', gap: '1rem' }}>
                        {['Başlık', 'Tür', 'Durum', 'Tarih'].map(h => (
                          <div key={h} style={{ flex: 1, height: 14, background: 'var(--color-gray-100)', borderRadius: 4 }} />
                        ))}
                      </div>
                      {[1,2,3,4].map(r => (
                        <div key={r} style={{ padding: '0.7rem 1rem', borderBottom: '1px solid var(--color-gray-50)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                          {[1,1,0.6,0.8].map((w, i) => (
                            <div key={i} style={{ flex: w, height: 12, background: r % 2 === 0 ? 'var(--color-gray-100)' : 'var(--color-gray-50)', borderRadius: 4 }} />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </motion.div>
      </div>
    </section>
  )
}
