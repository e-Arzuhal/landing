import { motion } from 'framer-motion'
import { useState } from 'react'
import DemoForm from './DemoForm'
import { APP_LOGIN_URL, APP_REGISTER_URL } from '../config/urls'

const words = ['Geleceğin', 'Hukuk', 'Dünyasını', 'Bugün', 'Yönetin.']

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
}
const wordVariants = {
  hidden: { opacity: 0, y: 32, skewX: 4 },
  show: { opacity: 1, y: 0, skewX: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Hero() {
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: 80 }}>
      {/* Background blobs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%',
          width: '55vw', height: '55vw', maxWidth: 700, maxHeight: 700,
          background: 'radial-gradient(circle, rgba(200,150,62,0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float-slow 10s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', bottom: '5%', left: '-8%',
          width: '45vw', height: '45vw', maxWidth: 550, maxHeight: 550,
          background: 'radial-gradient(circle, rgba(27,42,74,0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float-mid 14s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', top: '40%', left: '40%',
          width: '30vw', height: '30vw', maxWidth: 400, maxHeight: 400,
          background: 'radial-gradient(circle, rgba(200,150,62,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float-slow 18s ease-in-out infinite reverse',
        }} />
      </div>

      {/* Dot grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(27,42,74,0.06) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: '1.5rem' }}
        >
          <span style={{
            padding: '6px 16px',
            borderRadius: 100,
            background: 'rgba(200,150,62,0.1)',
            border: '1px solid rgba(200,150,62,0.3)',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.08em',
            color: '#9a6e28',
            textTransform: 'uppercase',
          }}>
            HUKUK SÜREÇLERİ İÇİN DİJİTAL PLATFORM
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="show"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.6rem, 7vw, 5.5rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: 'var(--color-navy)',
            marginBottom: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0 0.3em',
          }}
        >
          {words.map((w, i) => (
            <motion.span key={i} variants={wordVariants} style={{ display: 'inline-block' }}>
              {w}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'var(--color-text-muted)',
            maxWidth: 540,
            margin: '0 auto 2.5rem',
            lineHeight: 1.7,
          }}
        >
          Sözleşme ve dilekçe süreçlerini tek bir noktadan yönetin.
          İhtiyacınıza göre oluşturma, takip ve onay adımlarını kullanın.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.a
            href={APP_LOGIN_URL}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(15,26,48,0.28)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '14px 32px',
              borderRadius: 12,
              background: 'var(--color-navy)',
              color: '#fff',
              fontWeight: 700,
              fontSize: 16,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              boxShadow: '0 4px 16px rgba(15,26,48,0.18)',
            }}
          >
            Giriş Yap
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </motion.a>

          <motion.a
            href={APP_REGISTER_URL}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '14px 28px',
              borderRadius: 12,
              background: 'transparent',
              color: 'var(--color-navy)',
              fontWeight: 600,
              fontSize: 16,
              border: '1.5px solid var(--color-gray-200)',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            Kaydolun
          </motion.a>

          <motion.button
            onClick={() => setDemoOpen(true)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '14px 28px',
              borderRadius: 12,
              background: 'transparent',
              color: 'var(--color-navy)',
              fontWeight: 600,
              fontSize: 16,
              border: '1.5px solid var(--color-gray-200)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <span style={{
              width: 28, height: 28,
              borderRadius: '50%',
              background: 'var(--color-navy)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="12" height="12" fill="white" viewBox="0 0 12 12"><polygon points="3,1 11,6 3,11"/></svg>
            </span>
            Demoyu İzle
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center' }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
          >
            <div style={{
              width: 22, height: 36, borderRadius: 11,
              border: '2px solid var(--color-gray-200)',
              display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 6,
            }}>
              <div style={{ width: 4, height: 8, borderRadius: 2, background: 'var(--color-navy)', opacity: 0.5 }} />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <DemoForm open={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  )
}
