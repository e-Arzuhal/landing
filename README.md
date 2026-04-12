# e-Arzuhal – Landing Page

e-Arzuhal tanıtım ve pazarlama sayfası.

---

## Tech Stack

| Katman | Teknoloji |
|--------|-----------|
| Framework | React 18 |
| Build Tool | Vite |
| Animasyon | Framer Motion |
| Stil | Inline styles + design tokens |

---

## Kurulum

```bash
cd landing
npm install
cp .env.example .env
npm run dev
```

Uygulama `http://localhost:5173` adresinde çalışır.

## Build

```bash
npm run build   # dist/ klasörüne çıktı üretir
npm run preview # build önizlemesi
```

---

## Backend Bağlantısı

Landing sayfası yalnızca `main-server`'ın public endpoint'lerini kullanır:

```
POST /api/landing/demo-request    Demo talebi gönder
POST /api/landing/newsletter      Bülten aboneliği
GET  /api/landing/stats           Platform istatistikleri (kullanıcı sayısı vb.)
```

Bu endpoint'ler auth gerektirmez.

Landing URL ayarları `.env` üzerinden yapılır:

```env
VITE_API_BASE_URL=http://localhost:8080
VITE_APP_BASE_URL=http://localhost:3000
```

- `VITE_API_BASE_URL`: landing form ve istatistik endpoint'lerinin gideceği main-server adresi
- `VITE_APP_BASE_URL`: landing üzerindeki `Giriş Yap` ve `Kayıt Ol` butonlarının yönleneceği frontend-web adresi

---

## Proje Yapısı

```
landing/
├── src/
│   ├── components/       # Hero, Features, Pricing, FAQ, Footer vb.
│   ├── config/           # urls.js (env tabanli URL ayarlari)
│   ├── api.js            # main-server /api/landing/* cagrilari
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
├── vite.config.js
└── package.json
```

---

## Takım

- **Deniz Eren ARICI** — Frontend & UI
- **Enes Burak ATAY** — Lead
