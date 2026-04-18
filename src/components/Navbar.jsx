import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import logo from '../assets/logo.png'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  const toggleLang = () => {
    const next = i18n.language === 'en' ? 'pt' : 'en'
    i18n.changeLanguage(next)
    localStorage.setItem('kc_lang', next)
  }

  const linkStyle = ({ isActive }) => ({
    color: isActive ? '#E6B61D' : 'rgba(232,220,200,0.75)',
    textDecoration: 'none',
    fontFamily: "'Cinzel', serif",
    fontSize: '0.8rem',
    letterSpacing: '0.08em',
    borderBottom: isActive ? '1px solid #C8960C' : '1px solid transparent',
    paddingBottom: 2,
    transition: 'color 0.2s',
  })

  return (
    <header className="navbar">
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 20px', height: 80, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        <Link to="/" onClick={close} style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', color: '#C8960C', fontFamily: "'Cinzel', serif", fontSize: '1rem', fontWeight: 600, letterSpacing: '0.05em' }}>
          <img src={logo} alt="KC" style={{ width: 44, height: 'auto', filter: 'drop-shadow(0 0 5px rgba(200,150,12,0.35))' }} />
          <span>Kingdom Cross 3F</span>
        </Link>

        <button onClick={() => setOpen(o => !o)} aria-label="Menu" className="nav-toggle">
          {open ? '✕' : '☰'}
        </button>

        <nav className={`nav-links${open ? ' open' : ''}`}>
          <NavLink to="/"               end onClick={close} style={linkStyle}>{t('nav.carpenter')}</NavLink>
          <NavLink to="/series"             onClick={close} style={linkStyle}>{t('nav.series')}</NavLink>
          <NavLink to="/kingdom-cross-3f"   onClick={close} style={linkStyle}>{t('nav.kc3f')}</NavLink>
          <NavLink to="/testimony"          onClick={close} style={linkStyle}>{t('nav.testimony')}</NavLink>
          <button onClick={toggleLang} style={{ background: 'transparent', border: '1px solid rgba(200,150,12,0.3)', color: 'rgba(200,150,12,0.75)', padding: '4px 10px', borderRadius: 4, cursor: 'pointer', fontSize: '0.75rem', fontFamily: "'Cinzel', serif", letterSpacing: '0.05em' }}>
            {i18n.language === 'en' ? '🇧🇷 PT' : '🇺🇸 EN'}
          </button>
        </nav>
      </div>

      <style>{`
        .nav-links { display: flex; align-items: center; gap: 26px; }
        .nav-toggle { display: none; background: transparent; border: none; color: #C8960C; font-size: 1.4rem; cursor: pointer; }
        @media (max-width: 921px) {
          .nav-toggle { display: block; }
          .nav-links {
            display: none; flex-direction: column; align-items: flex-start; gap: 0;
            position: absolute; top: 80px; left: 0; right: 0;
            background: rgba(13,10,7,0.98);
            border-bottom: 1px solid rgba(200,150,12,0.18);
            padding: 16px 20px;
          }
          .nav-links.open { display: flex; }
          .nav-links a { padding: 13px 0; width: 100%; border-bottom: 1px solid rgba(200,150,12,0.08) !important; font-size: 0.9rem !important; }
        }
      `}</style>
    </header>
  )
}
