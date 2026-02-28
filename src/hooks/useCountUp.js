import { useEffect, useRef, useState } from 'react'

export default function useCountUp(target, duration = 2000, startOnMount = false) {
  const [count, setCount] = useState(0)
  const [triggered, setTriggered] = useState(startOnMount)
  const ref = useRef(null)

  // IntersectionObserver to trigger when element enters viewport
  useEffect(() => {
    if (startOnMount) return
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [startOnMount])

  // Animate count
  useEffect(() => {
    if (!triggered || target === 0) return
    let start = 0
    const startTime = performance.now()
    const step = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [triggered, target, duration])

  return { count, ref }
}
