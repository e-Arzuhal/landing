import { API_BASE_URL } from './config/urls'

export async function getLandingStats() {
  const res = await fetch(`${API_BASE_URL}/api/landing/stats`)
  if (!res.ok) throw new Error('Stats yüklenemedi')
  return res.json()
}

export async function submitDemoRequest(data) {
  const res = await fetch(`${API_BASE_URL}/api/landing/demo-request`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.message || 'Demo talebi gönderilemedi')
  }
}

export async function subscribeNewsletter(email) {
  const res = await fetch(`${API_BASE_URL}/api/landing/newsletter`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  })
  if (!res.ok) throw new Error('Abonelik tamamlanamadı')
}
