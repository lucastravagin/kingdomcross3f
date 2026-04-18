import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import FadeIn from '../components/FadeIn'

const FORMSPREE_ID = 'YOUR_FORMSPREE_ID'
const img = (p) => `/uploads/${p}`

const STEPS = ['Your Cross', 'Your Prayer', 'Your Details']

const seriesOptions = [
  { id: 'flame',  name: 'Flame Cross',      price: '$77,777', desc: 'Supporting missions and spiritual leaders.', badge: 'Closed · 77 units' },
  { id: 'faith',  name: 'Cross of Faith',   price: '$777.77', desc: 'Multiplication of seeds and expansion of the Kingdom.', badge: 'Closed · 77,777 units' },
  { id: 'family', name: 'Family Cross',     price: '$77.77',  desc: 'Unity, purpose, and heritage.', badge: 'Open Series' },
  { id: 'grace',  name: 'Grace Cross',      price: '$37.77',  desc: 'Accessible symbol of faith for all.', badge: 'Open Series' },
  { id: 'mission',name: 'Mission Cross',    price: '$17.77',  desc: 'Each one blesses lives in active mission.', badge: 'Open Series' },
]

const W = ({ children, style }) => (
  <div style={{ maxWidth: 860, margin: '0 auto', ...style }}>{children}</div>
)

export default function Formulario() {
  const { t } = useTranslation()
  const [status, setStatus] = useState('idle')
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({
    founding: '', covenant: '', series: '', theme: '',
    focus: '', message: '', firstName: '', lastName: '',
    email: '', emailConfirm: '', address: '', city: '', country: ''
  })

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))
  const setVal = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.email !== form.emailConfirm) return alert('Emails do not match.')
    setStatus('submitting')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') return (
    <main>
      <section className="hero-section" style={{ backgroundImage: `url(${img('2025/11/wooden-cross-3262919_1920-rotated.jpg')})`, minHeight: '70vh' }}>
        <FadeIn>
          <h2 className="gold-title">Your prayer has been received.</h2>
        </FadeIn>
        <p className="italic-hero">The Carpenter will begin crafting your cross.</p>
        <div className="gold-divider" style={{ margin: '1.5em auto' }} />
        <p className="bible-verse" style={{ maxWidth: 500, textAlign: 'center', borderLeft: 'none', color: '#D1A412' }}>
          "For we are God's handiwork, created in Christ Jesus to do good works." — Eph 2:10
        </p>
      </section>
    </main>
  )

  return (
    <main>

      {/* ── HERO ── */}
      <section className="hero-section" style={{ backgroundImage: `url(${img('2025/11/wooden-cross-3262919_1920-rotated.jpg')})`, minHeight: '55vh' }}>
        <FadeIn>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(24px,4vw,48px)', fontWeight: 600, color: '#FFC200', textShadow: '3px 3px 10px #000', marginBottom: '0.5em' }}>
            {t('form.title')}
          </h2>
        </FadeIn>
        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(15px,1.8vw,20px)', color: 'rgba(243,243,243,0.9)', textAlign: 'center', maxWidth: 600, textShadow: '1px 1px 4px #000' }}>
          {t('form.subtitle')}
        </p>
      </section>

      {/* ── CAPACITY ── */}
      <section className="section-gold-glow" style={{ padding: '3em 2em', textAlign: 'center' }}>
        <W>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 'normal', color: '#1a0800', marginBottom: '0.8em' }}>
            {t('form.capacity_title')}
          </h2>
          <p style={{ fontFamily: "'Cinzel', serif", fontSize: 14, color: '#2a1000', letterSpacing: '0.08em', marginBottom: '0.5em' }}>
            {t('form.capacity_text')}
          </p>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, color: '#2a1000', fontStyle: 'italic', maxWidth: 600, margin: '0 auto' }}>
            {t('form.capacity_note')}
          </p>
        </W>
      </section>

      {/* ── CLOSED SERIES INFO ── */}
      <section className="section-wood" style={{ padding: '3em 2em' }}>
        <W>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(18px,2.5vw,30px)', fontWeight: 600, color: '#D1A412', textShadow: '0 0 20px rgba(196,167,9,0.4)', marginBottom: '1em' }}>
            {t('form.closed_title')}
          </h2>
          <p className="playfair-body" style={{ whiteSpace: 'pre-line', fontSize: 16 }}>{t('form.closed_text')}</p>
        </W>
      </section>

      {/* ── FORM ── */}
      <section className="section-wood" style={{ padding: '3em 2em 5em' }}>
        <W>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(18px,2.5vw,30px)', fontWeight: 600, color: '#D1A412', textShadow: '0 0 20px rgba(196,167,9,0.4)', textAlign: 'center', marginBottom: '0.5em' }}>
            {t('form.form_title')}
          </h2>
          <div className="gold-divider" style={{ marginBottom: '2em' }} />

          {/* Progress */}
          <div className="form-progress">
            {STEPS.map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                <div className={`form-step${step >= i ? ' active' : ''}`}>
                  <div className="form-step-num">{i + 1}</div>
                  <span style={{ fontSize: 11 }}>{s}</span>
                </div>
                {i < STEPS.length - 1 && <div className="form-step-line" />}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="kc-form">

            {/* ── STEP 0: Your Cross ── */}
            {step === 0 && (
              <>
                <div className="field">
                  <label style={{ color: 'rgba(212,175,55,0.6)', fontSize: 12 }}>{t('form.founding_label')}</label>
                  <input type="text" value={form.founding} onChange={set('founding')} maxLength={120} />
                  <small>{t('form.founding_desc')}</small>
                </div>

                <div className="field">
                  <label style={{ color: 'rgba(212,175,55,0.6)', fontSize: 12 }}>{t('form.covenant_label')}</label>
                  <input type="text" value={form.covenant} onChange={set('covenant')} />
                  <small>{t('form.covenant_desc')}</small>
                </div>

                <div className="field">
                  <label>{t('form.series_label')} <span className="required">*</span></label>
                  <p className="field-desc" style={{ marginBottom: '1em' }}>{t('form.series_required')}</p>
                  <div className="series-cards">
                    {seriesOptions.map((opt) => (
                      <div
                        key={opt.id}
                        className="series-card"
                        onClick={() => setVal('series', opt.name)}
                        style={form.series === opt.name ? { borderColor: '#D1A412', background: 'rgba(212,163,18,0.12)' } : {}}
                      >
                        {form.series === opt.name && (
                          <div style={{ position: 'absolute', top: 8, right: 10, color: '#D1A412', fontSize: 16 }}>✓</div>
                        )}
                        <div className="series-card-name">{opt.name}</div>
                        <div className="series-card-price">{opt.price}</div>
                        <div style={{ fontSize: 11, color: 'rgba(212,175,55,0.5)', fontFamily: "'Cinzel', serif", letterSpacing: '0.06em', marginBottom: '0.5em' }}>{opt.badge}</div>
                        <div className="series-card-desc">{opt.desc}</div>
                        <input type="radio" name="series" value={opt.name} required onChange={set('series')} checked={form.series === opt.name} style={{ display: 'none' }} />
                      </div>
                    ))}
                  </div>
                  <small style={{ marginTop: '0.5em' }}>{t('form.series_desc')}</small>
                </div>

                <div className="field">
                  <label>{t('form.theme_label')} <span className="required">*</span></label>
                  <div className="themes-grid" style={{ marginTop: '0.5em' }}>
                    {t('form.themes', { returnObjects: true }).map((theme) => (
                      <div
                        key={theme}
                        className="theme-chip"
                        onClick={() => setVal('theme', theme)}
                        style={form.theme === theme ? { background: 'rgba(212,163,18,0.25)', borderColor: '#D1A412', color: '#D1A412' } : {}}
                      >
                        {theme}
                        <input type="radio" name="theme" value={theme} required onChange={set('theme')} checked={form.theme === theme} style={{ display: 'none' }} />
                      </div>
                    ))}
                  </div>
                  <small style={{ marginTop: '0.5em' }}>{t('form.theme_desc')}</small>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <button type="button" className="btn-gold" onClick={() => setStep(1)} disabled={!form.series || !form.theme}>
                    Next →
                  </button>
                </div>
              </>
            )}

            {/* ── STEP 1: Your Prayer ── */}
            {step === 1 && (
              <>
                <div className="field">
                  <label>{t('form.focus_label')} <span className="required">*</span></label>
                  <input type="text" value={form.focus} onChange={set('focus')} maxLength={80} required />
                  <small>{t('form.focus_desc')}</small>
                </div>

                <div className="field">
                  <label>{t('form.message_label')} <span className="required">*</span></label>
                  <textarea value={form.message} onChange={set('message')} maxLength={800} required rows={7} />
                  <small>{t('form.message_desc')}</small>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <button type="button" className="btn-gold" onClick={() => setStep(0)} style={{ opacity: 0.7 }}>← Back</button>
                  <button type="button" className="btn-gold" onClick={() => setStep(2)} disabled={!form.focus || !form.message}>Next →</button>
                </div>
              </>
            )}

            {/* ── STEP 2: Your Details ── */}
            {step === 2 && (
              <>
                <div className="field">
                  <label>{t('form.name_label')} <span className="required">*</span></label>
                  <div className="name-row">
                    <div>
                      <input type="text" value={form.firstName} onChange={set('firstName')} required placeholder={t('form.first_name')} />
                      <small>{t('form.first_name')}</small>
                    </div>
                    <div>
                      <input type="text" value={form.lastName} onChange={set('lastName')} required placeholder={t('form.last_name')} />
                      <small>{t('form.last_name')}</small>
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label>{t('form.email_label')} <span className="required">*</span></label>
                  <div className="name-row">
                    <div>
                      <input type="email" value={form.email} onChange={set('email')} required placeholder="Email" />
                      <small>Email</small>
                    </div>
                    <div>
                      <input type="email" value={form.emailConfirm} onChange={set('emailConfirm')} required placeholder={t('form.email_confirm')} />
                      <small>{t('form.email_confirm')}</small>
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label>{t('form.address_label')} <span className="required">*</span></label>
                  <input type="text" value={form.address} onChange={set('address')} required />
                  <small>{t('form.address_desc')}</small>
                </div>

                <div className="field">
                  <label>{t('form.city_label')} <span className="required">*</span></label>
                  <input type="text" value={form.city} onChange={set('city')} required />
                </div>

                <div className="field">
                  <label>{t('form.country_label')} <span className="required">*</span></label>
                  <input type="text" value={form.country} onChange={set('country')} required />
                  <small>{t('form.address_desc')}</small>
                </div>

                {status === 'error' && <p className="error-msg">{t('form.error')}</p>}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <button type="button" className="btn-gold" onClick={() => setStep(1)} style={{ opacity: 0.7 }}>← Back</button>
                  <button type="submit" className="btn-gold btn-gold-pulse" disabled={status === 'submitting'} style={{ fontSize: 20, padding: '16px 40px' }}>
                    {status === 'submitting' ? t('form.submitting') : `✦ ${t('form.submit')} ✦`}
                  </button>
                </div>
              </>
            )}

          </form>
        </W>
      </section>

    </main>
  )
}
