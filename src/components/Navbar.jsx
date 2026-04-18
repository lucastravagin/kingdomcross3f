import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import logo from '../assets/logo.png'

const navStyle = {
  backgroundImage: "url('/uploads/2025/10/lumber-84678_1920-1-rotated.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundBlendMode: 'multiply',
  backgroundColor: 'rgba(5,2,0,0.95)',
  borderBottom: '1px solid rgba(212,175,55,0.2)',
  position: 'sticky',
  top: 0,
  zIndex: 100,
}

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)

  const toggleLang = () => {
    const next = i18n.language === 'en' ? 'pt' : 'en'
    i18n.changeLanguage(next)
    localStorage.setItem('kc_lang', next)
  }

  const close = () => setOpen(false)

  return (
    <header style={navStyle}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 20px', height: 80, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        <Link to="/" onClick={close} style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', color: '#D1A412', fontFamily: "'Cinzel', serif", fontSize: '1.05rem', fontWeight: 600, letterSpacing: '0.05em' }}>
          <img src={logo} alt="Kingdom Cross 3F" style={{ width: 49, height: 'auto', filter: 'drop-shadow(0 0 6px rgba(212,175,55,0.4))' }} />
          <span>Kingdom Cross 3F</span>
        </Link>

        <button
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
          style={{ display: 'none', background: 'transparent', border: 'none', color: '#D1A412', fontSize: '1.5rem', cursor: 'pointer' }}
          className="nav-toggle"
        >
          {open ? '✕' : '☰'}
        </button>

        <nav className={`nav-links${open ? ' open' : ''}`}>
          {[
            { to: '/', label: t('nav.carpenter'), end: true },
            { to: '/series', label: t('nav.series') },
            { to: '/kingdom-cross-3f', label: t('nav.kc3f') },
            { to: '/testimony', label: t('nav.testimony') },
          ].map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={close}
              style={({ isActive }) => ({
                color: isActive ? '#E6B61D' : 'rgba(232,220,200,0.8)',
                textDecoration: 'none',
                fontFamily: "'Cinzel', serif",
                fontSize: '0.82rem',
                letterSpacing: '0.08em',
                borderBottom: isActive ? '1px solid #D1A412' : '1px solid transparent',
                paddingBottom: 2,
                transition: 'color 0.2s',
              })}
            >
              {label}
            </NavLink>
          ))}
          <button
            onClick={toggleLang}
            style={{ background: 'transparent', border: '1px solid rgba(212,175,55,0.35)', color: 'rgba(212,175,55,0.8)', padding: '4px 10px', borderRadius: 4, cursor: 'pointer', fontSize: '0.78rem', fontFamily: "'Cinzel', serif", letterSpacing: '0.05em' }}
          >
            {i18n.language === 'en' ? '🇧🇷 PT' : '🇺🇸 EN'}
          </button>
        </nav>
      </div>

      <style>{`
        .nav-links { display: flex; align-items: center; gap: 28px; }
        .nav-toggle { display: none !important; }
        @media (max-width: 921px) {
          .nav-toggle { display: block !important; }
          .nav-links {
            display: none;
            flex-direction: column;
            align-items: flex-start;
            gap: 0;
            position: absolute;
            top: 80px; left: 0; right: 0;
            background-image: url('/uploads/2025/10/lumber-84678_1920-1-rotated.jpg');
            background-size: cover;
            background-blend-mode: multiply;
            background-color: rgba(5,2,0,0.97);
            padding: 16px 20px;
            border-bottom: 1px solid rgba(212,175,55,0.2);
          }
          .nav-links.open { display: flex; }
          .nav-links a { padding: 14px 0; width: 100%; border-bottom: 1px solid rgba(212,175,55,0.1) !important; font-size: 0.9rem !important; }
        }
      `}</style>
    </header>
  )
}
