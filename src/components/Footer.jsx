import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="footer">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5em' }}>
          <img src="/uploads/2025/11/cropped-KC-49x39.png" alt="KC" style={{ width: 40, opacity: 0.6, filter: 'sepia(1) saturate(2) hue-rotate(5deg)' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2em', flexWrap: 'wrap', marginBottom: '1.5em' }}>
          {[
            { to: '/', label: 'The Carpenter' },
            { to: '/series', label: 'Series' },
            { to: '/kingdom-cross-3f', label: 'Kingdom Cross 3F' },
            { to: '/testimony', label: 'Testimony' },
            { to: '/formulario', label: 'Request a Cross' },
          ].map(({ to, label }) => (
            <Link key={to} to={to} style={{ fontFamily: "'Cinzel', serif", fontSize: 12, letterSpacing: '0.08em', color: 'rgba(212,175,55,0.5)', textDecoration: 'none' }}>
              {label}
            </Link>
          ))}
        </div>
        <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg,transparent,rgba(212,175,55,0.4),transparent)', margin: '0 auto 1.5em' }} />
        <p>{t('footer.text')}</p>
      </div>
    </footer>
  )
}
