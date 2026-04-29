import { API_BASE_URL } from './config/urls'

function friendly(err, fallback) {
  const m = (err && err.message) || ''
  if (/failed to fetch|networkerror|abort/i.test(m)) {
    return 'Sunucuya şu anda ulaşılamıyor. Lütfen daha sonra tekrar deneyin.'
  }
  return m || fallback
}

export async function getLandingStats() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/landing/stats`)
    if (!res.ok) throw new Error('İstatistikler yüklenemedi.')
    return res.json()
  } catch (err) {
    throw new Error(friendly(err, 'İstatistikler yüklenemedi.'))
  }
}

export async function submitDemoRequest(data) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/landing/demo-request`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      throw new Error(err.message || err.detail || 'Demo talebi gönderilemedi.')
    }
  } catch (err) {
    throw new Error(friendly(err, 'Demo talebi gönderilemedi.'))
  }
}

export async function subscribeNewsletter(email) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/landing/newsletter`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      throw new Error(err.message || err.detail || 'Abonelik tamamlanamadı.')
    }
  } catch (err) {
    throw new Error(friendly(err, 'Abonelik tamamlanamadı.'))
  }
}
