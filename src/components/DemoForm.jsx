import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { submitDemoRequest } from '../api'

const inputStyle = {
  width: '100%',
  padding: '11px 14px',
  borderRadius: 10,
  border: '1.5px solid var(--color-gray-200)',
  fontSize: 15,
  color: 'var(--color-text)',
  outline: 'none',
  transition: 'border-color 0.15s',
  fontFamily: 'var(--font-body)',
  background: '#fff',
}

function Input({ label, ...props }) {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-gray-700)' }}>{label}</label>
      <input
        {...props}
        style={{ ...inputStyle, borderColor: focused ? 'var(--color-navy)' : 'var(--color-gray-200)' }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  )
}

export default function DemoForm({ open, onClose }) {
  const [form, setForm] = useState({ fullName: '', email: '', company: '', phone: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await submitDemoRequest(form)
      setStatus('success')
      setForm({ fullName: '', email: '', company: '', phone: '' })
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed', inset: 0, zIndex: 2000,
              background: 'rgba(15,26,48,0.55)',
              backdropFilter: 'blur(6px)',
            }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: 'fixed', inset: 0, zIndex: 2001,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '1rem',
              pointerEvents: 'none',
            }}
          >
            <div style={{
              background: '#fff',
              borderRadius: 'var(--radius-xl)',
              width: '100%', maxWidth: 480,
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              boxShadow: '0 32px 80px rgba(0,0,0,0.18)',
              pointerEvents: 'auto',
              position: 'relative',
            }}>
              {/* Close */}
              <button
                onClick={onClose}
                style={{
                  position: 'absolute', top: 16, right: 16,
                  width: 32, height: 32, borderRadius: '50%',
                  background: 'var(--color-gray-100)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', border: 'none',
                }}
              >
                <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path d="M1 1l12 12M13 1L1 13" stroke="var(--color-gray-500)" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>

              {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                  <div style={{ fontSize: 48, marginBottom: '1rem' }}>✅</div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: 10 }}>
                    Talebiniz Alındı!
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                    Satış ekibimiz en kısa sürede sizinle iletişime geçecek.
                  </p>
                  <button
                    onClick={() => { setStatus('idle'); onClose() }}
                    style={{ marginTop: '1.5rem', padding: '10px 28px', borderRadius: 10, background: 'var(--color-navy)', color: '#fff', fontWeight: 600, fontSize: 15, cursor: 'pointer', border: 'none' }}
                  >
                    Tamam
                  </button>
                </div>
              ) : (
                <>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: 6 }}>
                    Demo Talep Edin
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: 14, marginBottom: '1.5rem', lineHeight: 1.6 }}>
                    Satış ekibimiz size özel bir demo sunumu ayarlayacak.
                  </p>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Input label="Ad Soyad *" name="fullName" type="text" required placeholder="Ahmet Yılmaz" value={form.fullName} onChange={handleChange} />
                    <Input label="E-posta *" name="email" type="email" required placeholder="ahmet@sirket.com" value={form.email} onChange={handleChange} />
                    <Input label="Şirket" name="company" type="text" placeholder="Şirket Adı" value={form.company} onChange={handleChange} />
                    <Input label="Telefon" name="phone" type="tel" placeholder="+90 555 123 4567" value={form.phone} onChange={handleChange} />

                    {status === 'error' && (
                      <p style={{ color: '#C0392B', fontSize: 13, background: '#FEF2F2', padding: '10px 14px', borderRadius: 8, border: '1px solid #FECACA' }}>
                        {errorMsg || 'Bir hata oluştu. Lütfen tekrar deneyin.'}
                      </p>
                    )}

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={status === 'loading'}
                      style={{
                        marginTop: 4,
                        padding: '13px',
                        borderRadius: 12,
                        background: status === 'loading' ? 'var(--color-gray-300)' : 'var(--color-navy)',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: 15,
                        cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                        border: 'none',
                        transition: 'background 0.2s',
                      }}
                    >
                      {status === 'loading' ? 'Gönderiliyor...' : 'Demo Talep Et'}
                    </motion.button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
