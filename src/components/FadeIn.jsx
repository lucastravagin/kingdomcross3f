import { useEffect, useRef } from 'react'
import './FadeIn.css'

export default function FadeIn({ children, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return <div ref={ref} className={`fade-in ${className}`}>{children}</div>
}
