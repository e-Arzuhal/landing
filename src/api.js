import { API_BASE_URL } from './config/urls'

const SERVER_UNAVAILABLE = 'Sunucuya şu anda ulaşılamıyor. Lütfen daha sonra tekrar deneyin.'

export async function getLandingStats() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/landing/stats`)
    if (!res.ok) throw new Error(SERVER_UNAVAILABLE)
    return res.json()
  } catch (err) {
    throw new Error(SERVER_UNAVAILABLE)
  }
}

export async function submitDemoRequest(data) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/landing/demo-request`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error(SERVER_UNAVAILABLE)
  } catch (err) {
    throw new Error(SERVER_UNAVAILABLE)
  }
}

export async function subscribeNewsletter(email) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/landing/newsletter`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
    if (!res.ok) throw new Error(SERVER_UNAVAILABLE)
  } catch (err) {
    throw new Error(SERVER_UNAVAILABLE)
  }
}
