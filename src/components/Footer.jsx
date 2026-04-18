import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  const links = [
    { to: '/',                 label: t('footer.nav_carpenter') },
    { to: '/series',           label: t('footer.nav_series') },
    { to: '/kingdom-cross-3f', label: t('footer.nav_kc3f') },
    { to: '/testimony',        label: t('footer.nav_testimony') },
    { to: '/request',          label: t('footer.nav_request') },
  ]

  return (
    <footer className="footer">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.2em' }}>
          <img src="/uploads/2025/11/cropped-KC-49x39.png" alt="KC" style={{ width: 36, opacity: 0.45, filter: 'sepia(1) saturate(1.5) hue-rotate(5deg)' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2em', flexWrap: 'wrap', marginBottom: '1.2em' }}>
          {links.map(({ to, label }) => (
            <Link key={to} to={to} style={{ fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: '0.08em', color: 'rgba(200,150,12,0.45)', textDecoration: 'none' }}>
              {label}
            </Link>
          ))}
        </div>
        <div style={{ width: 50, height: 1, background: 'linear-gradient(90deg,transparent,rgba(200,150,12,0.35),transparent)', margin: '0 auto 1.2em' }} />
        <p>{t('footer.text')}</p>
      </div>
    </footer>
  )
}
