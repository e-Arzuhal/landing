import { motion, AnimatePresence } from 'framer-motion'

const TITLES = {
  kvkk: 'KVKK Aydınlatma Metni',
  privacy: 'Gizlilik Politikası',
  terms: 'Kullanım Koşulları',
  nda: 'Gizlilik Sözleşmesi',
  security: 'Güvenlik Politikası',
  help: 'Yardım Merkezi',
  api: 'API Dokümantasyonu',
  blog: 'Blog',
  integrations: 'Entegrasyonlar',
}

const CONTENT = {
  kvkk: (
    <>
      <p>e-Arzuhal Teknolojileri A.Ş. olarak 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sorumlusuyuz.</p>
      <p><strong>İşlenen veriler:</strong> ad, soyad, e-posta, kullanıcı adı, telefon, IP, sözleşme içerikleri.</p>
      <p><strong>Amaç:</strong> hizmet sunumu, kullanıcı doğrulama, sözleşme imza süreçleri ve yasal yükümlülüklerin yerine getirilmesi.</p>
      <p><strong>Haklarınız:</strong> verilerinize erişme, düzeltme, silme ve işlemeye itiraz etme haklarına sahipsiniz. Talepleriniz için <strong>kvkk@earzuhal.com</strong> adresine yazabilirsiniz.</p>
    </>
  ),
  privacy: (
    <>
      <p>Bu Gizlilik Politikası, e-Arzuhal platformunu kullanırken topladığımız verileri ve bu verileri nasıl koruduğumuzu açıklar.</p>
      <p>Verileriniz şifreli kanallar üzerinden iletilir, sözleşme içerikleriniz ve TC Kimlik No'nuz AES-256 ile şifrelenerek saklanır.</p>
      <p>Pazarlama amaçlı veri paylaşımı yapılmaz. Veri saklama sürelerimiz yasal mevzuata uygundur.</p>
    </>
  ),
  terms: (
    <>
      <p>Hizmetlerimizi kullanmaya başladığınız andan itibaren bu kullanım koşullarını kabul etmiş sayılırsınız.</p>
      <p>Platform üzerinde oluşturulan sözleşmelerin hukuki bağlayıcılığı kullanıcıların sorumluluğundadır. e-Arzuhal yapay zekâ destekli öneriler sunar; bu öneriler avukatlık hizmeti yerine geçmez.</p>
      <p>Hesabınızın güvenliğinden siz sorumlusunuz. Şüpheli aktivite durumunda derhal destek ekibimize bildirin.</p>
    </>
  ),
  nda: (
    <>
      <p>Platform üzerinden paylaşılan tüm sözleşme verileri tarafların gizli bilgisi sayılır ve üçüncü kişilerle paylaşılmaz.</p>
      <p>İhlal halinde sorumluluk, ihlali gerçekleştiren tarafa aittir.</p>
    </>
  ),
  security: (
    <>
      <p>TC Kimlik numaraları AES-256 ile şifrelenir, şifreler BCrypt ile hash'lenir.</p>
      <p>Tüm trafik HTTPS üzerinden taşınır. Sunucularımız Türkiye sınırları içinde barındırılır.</p>
      <p>Güvenlik açığı bildirimleri için: <strong>security@earzuhal.com</strong></p>
    </>
  ),
  help: (
    <>
      <p>Sorularınız için <strong>destek@earzuhal.com</strong> adresine e-posta gönderebilir veya demo talep formundan bize ulaşabilirsiniz.</p>
      <p>Çalışma saatlerimiz: Pazartesi – Cuma 09:00 – 18:00 (TSİ).</p>
    </>
  ),
  api: (
    <>
      <p>API dokümantasyonu yakında yayınlanacaktır. Erken erişim için <strong>api@earzuhal.com</strong> adresine yazabilirsiniz.</p>
    </>
  ),
  blog: (
    <>
      <p>Blog yazılarımız hazırlık aşamasındadır. Yenilikleri kaçırmamak için bültenimize abone olabilirsiniz.</p>
    </>
  ),
  integrations: (
    <>
      <p>Mevcut entegrasyonlar: KEP, e-Devlet doğrulama, NFC kimlik okuma, e-imza altyapıları.</p>
      <p>Özel entegrasyon talepleri için satış ekibimize ulaşabilirsiniz.</p>
    </>
  ),
}

export default function LegalModal({ open, type, onClose }) {
  const title = TITLES[type] || ''
  const body = CONTENT[type] || null

  return (
    <AnimatePresence>
      {open && body && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed', inset: 0, zIndex: 3000,
              background: 'rgba(15,26,48,0.55)', backdropFilter: 'blur(6px)',
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 3001,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '1rem', pointerEvents: 'none',
            }}
          >
            <div style={{
              background: '#fff',
              borderRadius: 16,
              width: '100%', maxWidth: 560,
              maxHeight: '85vh',
              overflow: 'auto',
              padding: 'clamp(1.5rem, 4vw, 2rem)',
              boxShadow: '0 32px 80px rgba(0,0,0,0.18)',
              pointerEvents: 'auto',
              position: 'relative',
              fontFamily: 'var(--font-body)',
            }}>
              <button
                onClick={onClose}
                aria-label="Kapat"
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

              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.4rem',
                fontWeight: 700,
                color: 'var(--color-navy)',
                marginBottom: 16,
                paddingRight: 36,
              }}>
                {title}
              </h3>

              <div style={{ color: 'var(--color-text-muted)', fontSize: 14, lineHeight: 1.65, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {body}
              </div>

              <div style={{ marginTop: 20, display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={onClose}
                  style={{
                    padding: '10px 22px', borderRadius: 10, background: 'var(--color-navy)',
                    color: '#fff', fontWeight: 600, fontSize: 14, border: 'none', cursor: 'pointer',
                  }}
                >
                  Kapat
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
