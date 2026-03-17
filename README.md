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

---

## Proje Yapısı

```
landing/
├── src/
│   ├── components/       # Hero, Features, Pricing, FAQ, Footer vb.
│   ├── styles/           # Design tokens
│   ├── services/         # api.service.js (main-server /api/landing/*)
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
