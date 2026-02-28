import { motion } from 'framer-motion'
import { useState } from 'react'
import AnimatedSection from './ui/AnimatedSection'
import DemoForm from './DemoForm'
import { subscribeNewsletter } from '../api'

const APP_URL = 'http://localhost:3000'

export default function CTA() {
  const [demoOpen, setDemoOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [subStatus, setSubStatus] = useState('idle')

  const handleNewsletter = async (e) => {
    e.preventDefault()
    if (!email) return
    setSubStatus('loading')
    try {
      await subscribeNewsletter(email)
      setSubStatus('success')
      setEmail('')
    } catch {
      setSubStatus('error')
    }
  }

  return (
    <>
      {/* Main CTA */}
      <section id="demo" style={{ background: 'var(--color-navy-deep)', padding: 'var(--section-py) 0', position: 'relative', overflow: 'hidden' }}>
        {/* Animated gradient blobs */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <motion.div
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute', top: '-20%', right: '-10%',
              width: '50vw', height: '50vw', maxWidth: 600,
              background: 'radial-gradient(circle, rgba(200,150,62,0.15) 0%, transparent 70%)',
              borderRadius: '50%',
            }}
          />
          <motion.div
            animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute', bottom: '-20%', left: '-10%',
              width: '40vw', height: '40vw', maxWidth: 480,
              background: 'radial-gradient(circle, rgba(27,42,74,0.6) 0%, transparent 70%)',
              borderRadius: '50%',
            }}
          />
        </div>

        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <AnimatedSection>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: 16 }}>
              BUGÜN BAŞLAYIN
            </p>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 900,
              color: '#fff',
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
              lineHeight: 1.1,
            }}>
              Dijital dönüşüme bugün başlayın.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 17, maxWidth: 500, margin: '0 auto 2.5rem', lineHeight: 1.65 }}>
              E-Arzuhal ile hukuk departmanınızı bir üst seviyeye taşıyın. Kurumsal çözümlerimiz için ekibimizle görüşün.
            </p>

            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.button
                onClick={() => setDemoOpen(true)}
                whileHover={{ scale: 1.04, boxShadow: '0 12px 40px rgba(200,150,62,0.4)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: '14px 32px',
                  borderRadius: 12,
                  background: 'var(--color-gold)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 16,
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(200,150,62,0.3)',
                }}
              >
                Satış Ekibiyle Görüş
              </motion.button>

              <motion.a
                href={APP_URL}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: '14px 32px',
                  borderRadius: 12,
                  background: 'transparent',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: 16,
                  border: '1.5px solid rgba(255,255,255,0.25)',
                  display: 'inline-block',
                }}
              >
                Ücretsiz Başlayın
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Newsletter strip */}
      <section style={{ background: 'var(--color-gray-50)', padding: 'clamp(2rem,4vw,3rem) 0', borderTop: '1px solid var(--color-gray-200)' }}>
        <div className="container" style={{ display: 'flex', gap: '2rem', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: 4 }}>
              Hukuk teknolojisindeki gelişmeleri takip edin
            </h4>
            <p style={{ fontSize: 14, color: 'var(--color-text-muted)' }}>Aylık bültenimize abone olun, içgörüleri kaçırmayın.</p>
          </div>
          <form onSubmit={handleNewsletter} style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
            <input
              type="email"
              required
              placeholder="e-posta@sirket.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                padding: '10px 16px',
                borderRadius: 10,
                border: '1.5px solid var(--color-gray-200)',
                fontSize: 14,
                width: 220,
                outline: 'none',
                fontFamily: 'var(--font-body)',
              }}
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={subStatus === 'loading'}
              style={{
                padding: '10px 20px',
                borderRadius: 10,
                background: subStatus === 'success' ? '#16a34a' : 'var(--color-navy)',
                color: '#fff',
                fontWeight: 600,
                fontSize: 14,
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              {subStatus === 'success' ? '✓ Abone Olundu' : subStatus === 'loading' ? '...' : 'Abone Ol'}
            </motion.button>
          </form>
          {subStatus === 'error' && <p style={{ fontSize: 13, color: '#C0392B' }}>Bir hata oluştu.</p>}
        </div>
      </section>

      <DemoForm open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  )
}
