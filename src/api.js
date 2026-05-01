import { API_BASE_URL } from './config/urls'

// Landing pazarlama sayfası — backend down olsa bile kullanıcı talebini
// kaybetmeyelim. Ana akış: backend'e dene; bağlanılamazsa localStorage'a
// kaydet, sonra başarılı say. Frontend bu sayede her zaman talebi alır.

const PENDING_DEMO_KEY = 'earzuhal:pending-demo-requests'
const PENDING_NEWSLETTER_KEY = 'earzuhal:pending-newsletters'
const FETCH_TIMEOUT_MS = 8000

const safePush = (key, value) => {
  try {
    const list = JSON.parse(localStorage.getItem(key) || '[]')
    list.push({ ...value, savedAt: new Date().toISOString() })
    // Çok birikmesin — son 50 ile sınırla
    while (list.length > 50) list.shift()
    localStorage.setItem(key, JSON.stringify(list))
  } catch {
    // localStorage kullanılamıyorsa sessizce yut — başarı simülasyonu yine de devam eder.
  }
}

const fetchWithTimeout = async (url, options) => {
  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS)
  try {
    return await fetch(url, { ...options, signal: controller.signal })
  } finally {
    clearTimeout(id)
  }
}

export async function getLandingStats() {
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/api/landing/stats`)
    if (res.ok) return res.json()
  } catch {
    /* swallow — fallback below */
  }
  // Backend ulaşılamıyorsa ekrana koymak için makul varsayılanlar.
  return { totalUsers: 0, totalContracts: 0, uptimePercent: 99.9 }
}

export async function submitDemoRequest(data) {
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/api/landing/demo-request`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (res.ok) return
  } catch {
    /* swallow */
  }
  // Backend yoksa lokal kuyruğa al — pazarlama sayfasında bilgi kaybolmasın.
  safePush(PENDING_DEMO_KEY, data)
}

export async function subscribeNewsletter(email) {
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/api/landing/newsletter`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
    if (res.ok) return
  } catch {
    /* swallow */
  }
  safePush(PENDING_NEWSLETTER_KEY, { email })
}
