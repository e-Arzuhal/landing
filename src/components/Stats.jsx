import { useEffect, useState } from 'react'
import AnimatedSection from './ui/AnimatedSection'
import useCountUp from '../hooks/useCountUp'
import { getLandingStats } from '../api'

function StatItem({ value, suffix, label, delay }) {
  const { count, ref } = useCountUp(value, 2000)
  return (
    <AnimatedSection delay={delay} style={{ textAlign: 'center', flex: '1 1 180px' }}>
      <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
          fontWeight: 900,
          color: 'var(--color-navy)',
          letterSpacing: '-0.03em',
          lineHeight: 1,
        }}>
          {count.toLocaleString('tr-TR')}{suffix}
        </span>
        <span style={{ fontSize: 15, color: 'var(--color-text-muted)', fontWeight: 500 }}>{label}</span>
      </div>
    </AnimatedSection>
  )
}

export default function Stats() {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    getLandingStats().then(setStats).catch(() => setStats(null))
  }, [])

  if (!stats) return null

  const items = []
  if (typeof stats.totalUsers === 'number') {
    items.push({ value: stats.totalUsers, suffix: '+', label: 'Aktif Kullanıcı', delay: 0 })
  }
  if (typeof stats.totalContracts === 'number') {
    items.push({ value: stats.totalContracts, suffix: '+', label: 'İşlenen Sözleşme', delay: 0.1 })
  }
  if (typeof stats.uptimePercent === 'number') {
    items.push({ value: Math.round(stats.uptimePercent * 10), suffix: '%', label: 'Hizmet Sürekliliği', delay: 0.2 })
  }

  if (items.length === 0) return null

  return (
    <section style={{ background: 'var(--color-navy)', padding: 'clamp(3rem,6vw,5rem) 0' }}>
      <div className="container" style={{ display: 'flex', gap: 'clamp(2rem,5vw,4rem)', flexWrap: 'wrap', justifyContent: 'center' }}>
        {items.map((item, i) => (
          <div key={i} style={{ flex: '1 1 180px', textAlign: 'center', minWidth: 140 }}>
            <AnimatedSection delay={item.delay}>
              <StatsNumber value={item.value} suffix={item.suffix} label={item.label} />
            </AnimatedSection>
          </div>
        ))}
      </div>
    </section>
  )
}

function StatsNumber({ value, suffix, label }) {
  const { count, ref } = useCountUp(value, 2200)
  const display = suffix === '%' && value > 100
    ? (count / 10).toFixed(1)
    : count.toLocaleString('tr-TR')

  return (
    <div ref={ref} style={{ color: '#fff' }}>
      <div style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
        fontWeight: 900,
        letterSpacing: '-0.03em',
        lineHeight: 1,
        color: 'var(--color-gold-light, #E8C882)',
      }}>
        {display}{suffix}
      </div>
      <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', marginTop: 6, fontWeight: 500 }}>{label}</div>
    </div>
  )
}
