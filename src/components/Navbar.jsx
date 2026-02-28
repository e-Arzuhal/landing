import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const APP_URL = 'http://localhost:3000'

const navLinks = [
  { label: 'Ürünler',      href: '#features' },
  { label: 'Çözümler',     href: '#how-it-works' },
  { label: 'Fiyatlandırma', href: '#demo' },
  { label: 'Kurumsal',     href: '#demo' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: 'background 0.35s ease, box-shadow 0.35s ease, backdrop-filter 0.35s ease',
    background: scrolled ? 'rgba(255,255,255,0.88)' : 'transparent',
    backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
    boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.08)' : 'none',
  }

  return (
    <nav style={navStyle}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'var(--color-navy)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18 }}>E</span>
          </div>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18, color: 'var(--color-navy)', letterSpacing: '-0.01em' }}>
            E-ARZUHAL
          </span>
        </a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: 8, listStyle: 'none', alignItems: 'center' }} className="nav-links-desktop">
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                style={{
                  padding: '6px 14px',
                  borderRadius: 8,
                  fontSize: 15,
                  fontWeight: 500,
                  color: 'var(--color-gray-700)',
                  transition: 'color 0.15s, background 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-navy)'; e.currentTarget.style.background = 'var(--color-gray-100)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-gray-700)'; e.currentTarget.style.background = 'transparent' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }} className="nav-ctas-desktop">
          <a
            href={`${APP_URL}/login`}
            style={{
              padding: '8px 18px',
              borderRadius: 10,
              fontSize: 14,
              fontWeight: 600,
              color: 'var(--color-navy)',
              border: '1.5px solid var(--color-gray-200)',
              transition: 'border-color 0.15s, background 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-navy)'; e.currentTarget.style.background = 'var(--color-gray-50)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-gray-200)'; e.currentTarget.style.background = 'transparent' }}
          >
            Giriş Yap
          </a>
          <motion.a
            href={APP_URL}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '8px 20px',
              borderRadius: 10,
              fontSize: 14,
              fontWeight: 600,
              color: '#fff',
              background: 'var(--color-navy)',
              display: 'inline-block',
              boxShadow: '0 2px 8px rgba(15,26,48,0.2)',
            }}
          >
            Hemen Başlayın
          </motion.a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-hamburger"
          aria-label="Menü"
          style={{ display: 'none', flexDirection: 'column', gap: 5, padding: 8 }}
        >
          <span style={{ width: 22, height: 2, background: 'var(--color-navy)', borderRadius: 2, display: 'block', transition: 'transform 0.2s' }} />
          <span style={{ width: 22, height: 2, background: 'var(--color-navy)', borderRadius: 2, display: 'block' }} />
          <span style={{ width: 22, height: 2, background: 'var(--color-navy)', borderRadius: 2, display: 'block' }} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: '#fff', borderTop: '1px solid var(--color-gray-100)', overflow: 'hidden' }}
          >
            <div className="container" style={{ paddingTop: '1rem', paddingBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {navLinks.map(link => (
                <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} style={{ padding: '10px 4px', fontSize: 16, fontWeight: 500, color: 'var(--color-navy)', borderBottom: '1px solid var(--color-gray-100)' }}>
                  {link.label}
                </a>
              ))}
              <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
                <a href={`${APP_URL}/login`} style={{ flex: 1, textAlign: 'center', padding: '10px', borderRadius: 10, border: '1.5px solid var(--color-navy)', fontWeight: 600, color: 'var(--color-navy)', fontSize: 14 }}>Giriş Yap</a>
                <a href={APP_URL} style={{ flex: 1, textAlign: 'center', padding: '10px', borderRadius: 10, background: 'var(--color-navy)', fontWeight: 600, color: '#fff', fontSize: 14 }}>Başlayın</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-ctas-desktop  { display: none !important; }
          .nav-hamburger     { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
