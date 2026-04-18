import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import FadeIn from '../components/FadeIn'
import { Link } from 'react-router-dom'

const FORMSPREE_ID = 'YOUR_FORMSPREE_ID'
const img = (p) => `/uploads/${p}`
const I = ({ children }) => <div className="inner-narrow">{children}</div>

const STEPS = ['Your Cross', 'Your Prayer', 'Your Details']

const seriesOptions = [
  { id: 'flame',   name: 'Flame Cross',    price: '$77,777', desc: 'Supporting missions and spiritual leaders.',               badge: 'Closed · 77 units',      closed: true },
  { id: 'faith',   name: 'Cross of Faith', price: '$777.77', desc: 'Multiplication of seeds and expansion of the Kingdom.',   badge: 'Closed · 77,777 units',  closed: true },
  { id: 'family',  name: 'Family Cross',   price: '$77.77',  desc: 'Unity, purpose, and heritage.',                           badge: 'Open Series',            closed: false },
  { id: 'grace',   name: 'Grace Cross',    price: '$37.77',  desc: 'Accessible symbol of faith for all.',                    badge: 'Open Series',            closed: false },
  { id: 'mission', name: 'Mission Cross',  price: '$17.77',  desc: 'Each one blesses lives in active mission.',              badge: 'Open Series',            closed: false },
]

const CharCount = ({ value, max }) => {
  const remaining = max - value.length
  const pct = value.length / max
  const color = pct > 0.9 ? '#c05030' : pct > 0.7 ? '#C8960C' : 'rgba(200,150,12,0.45)'
  return (
    <span style={{ fontFamily: "'Cinzel', serif", fontSize: 11, color, letterSpacing: '0.05em', alignSelf: 'flex-end' }}>
      {remaining} / {max}
    </span>
  )
}

export default function Formulario() {
  const { t } = useTranslation()
  const [status, setStatus] = useState('idle')
  const [step, setStep] = useState(0)
  const [emailError, setEmailError] = useState('')
  const [form, setForm] = useState({
    founding: '', covenant: '', series: '', theme: '',
    focus: '', message: '', firstName: '', lastName: '',
    email: '', emailConfirm: '', address: '', city: '', country: ''
  })

  const set = (k) => (e) => {
    setForm(f => ({ ...f, [k]: e.target.value }))
    if (k === 'emailConfirm' || k === 'email') setEmailError('')
  }
  const setVal = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const validateEmail = () => {
    if (form.email && form.emailConfirm && form.email !== form.emailConfirm) {
      setEmailError('Emails do not match.')
      return false
    }
    setEmailError('')
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateEmail()) return
    setStatus('submitting')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch { setStatus('error') }
  }

  // ── SUCCESS ──
  if (status === 'success') return (
    <main>
      <section className="hero-section"
        style={{ backgroundImage: `url(${img('2025/11/wooden-cross-3262919_1920-rotated.jpg')})`, minHeight: '70vh' }}>
        <FadeIn><h2 className="title-hero">{t('form.success_title')}</h2></FadeIn>
        <p className="hero-sub">{t('form.success_sub')}</p>
        <div className="gold-divider" style={{ margin: '1.5em auto' }} />
        <p className="bible-verse" style={{ maxWidth: 480, textAlign: 'center', borderLeft: 'none', color: 'rgba(200,150,12,0.85)' }}>
          {t('form.success_verse')}
        </p>
        <Link to="/" className="btn-gold" style={{ marginTop: '2em' }}>{t('form.back_home')}</Link>
      </section>
    </main>
  )

  return (
    <main>

      {/* HERO */}
      <section className="hero-section"
        style={{ backgroundImage: `url(${img('2025/11/wooden-cross-3262919_1920-rotated.jpg')})`, minHeight: '50vh' }}>
        <FadeIn>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(22px,4vw,46px)', fontWeight: 600, color: '#FFC200', textShadow: '3px 3px 10px #000', marginBottom: '0.5em' }}>
            {t('form.title')}
          </h2>
        </FadeIn>
        <p className="hero-sub">{t('form.subtitle')}</p>
      </section>

      {/* CAPACITY — cream */}
      <section className="section-cream" style={{ textAlign: 'center' }}>
        <I>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 'normal', color: 'var(--text-cream)', marginBottom: '0.8em' }}>
            {t('form.capacity_title')}
          </h2>
          <p style={{ fontFamily: "'Cinzel', serif", fontSize: 13, color: 'var(--text-cream)', letterSpacing: '0.08em', marginBottom: '0.5em' }}>
            {t('form.capacity_text')}
          </p>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, color: 'var(--text-cream)', fontStyle: 'italic', maxWidth: 560, margin: '0 auto' }}>
            {t('form.capacity_note')}
          </p>
        </I>
      </section>

      {/* CLOSED SERIES INFO — dark */}
      <section className="section-dark">
        <I>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(16px,2.2vw,24px)', fontWeight: 600, color: 'var(--gold)', marginBottom: '1em' }}>
            {t('form.closed_title')}
          </h2>
          <p className="body-text" style={{ whiteSpace: 'pre-line', fontSize: 16 }}>{t('form.closed_text')}</p>
        </I>
      </section>

      {/* FORM — dark */}
      <section className="section-dark" style={{ paddingTop: '2em' }}>
        <I>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(16px,2.2vw,24px)', fontWeight: 600, color: 'var(--gold)', textAlign: 'center', marginBottom: '0.5em' }}>
            {t('form.form_title')}
          </h2>
          <div className="gold-divider" style={{ marginBottom: '2em' }} />

          {/* Progress bar */}
          <div className="form-progress">
            {STEPS.map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                <div className={`form-step${step >= i ? ' active' : ''}`} style={{ cursor: step > i ? 'pointer' : 'default' }} onClick={() => step > i && setStep(i)}>
                  <div className="form-step-num">{step > i ? '✓' : i + 1}</div>
                  <span style={{ fontSize: 10 }}>{s}</span>
                </div>
                {i < STEPS.length - 1 && <div className="form-step-line" />}
              </div>
            ))}
          </div>

          {/* Selection summary (steps 1 and 2) */}
          {step > 0 && (form.series || form.theme) && (
            <div style={{ border: '1px solid rgba(200,150,12,0.2)', borderRadius: 4, padding: '1em 1.2em', marginBottom: '2em', background: 'rgba(200,150,12,0.04)', display: 'flex', gap: '2em', flexWrap: 'wrap' }}>
              {form.series && (
                <div>
                  <div style={{ fontFamily: "'Cinzel', serif", fontSize: 10, color: 'rgba(200,150,12,0.5)', letterSpacing: '0.1em', marginBottom: 4 }}>{t('form.summary_series')}</div>
                  <div style={{ fontFamily: "'Cinzel', serif", fontSize: 14, color: 'var(--gold)' }}>{form.series}</div>
                </div>
              )}
              {form.theme && (
                <div>
                  <div style={{ fontFamily: "'Cinzel', serif", fontSize: 10, color: 'rgba(200,150,12,0.5)', letterSpacing: '0.1em', marginBottom: 4 }}>{t('form.summary_theme')}</div>
                  <div style={{ fontFamily: "'Cinzel', serif", fontSize: 14, color: 'var(--gold)' }}>{form.theme}</div>
                </div>
              )}
              {step > 1 && form.focus && (
                <div>
                  <div style={{ fontFamily: "'Cinzel', serif", fontSize: 10, color: 'rgba(200,150,12,0.5)', letterSpacing: '0.1em', marginBottom: 4 }}>{t('form.summary_focus')}</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 14, color: 'var(--text-light)', fontStyle: 'italic' }}>{form.focus}</div>
                </div>
              )}
            </div>
          )}

          <form onSubmit={handleSubmit} className="kc-form">

            {/* ── STEP 0: Your Cross ── */}
            {step === 0 && (
              <>
                {/* Optional: First Crosses interest */}
                <details style={{ marginBottom: '0.5em' }}>
                  <summary style={{ fontFamily: "'Cinzel', serif", fontSize: 12, color: 'rgba(200,150,12,0.5)', letterSpacing: '0.07em', cursor: 'pointer', listStyle: 'none', display: 'flex', alignItems: 'center', gap: '0.5em' }}>
                    <span style={{ fontSize: 10 }}>▶</span> {t('form.interest_optional')}
                  </summary>
                  <div style={{ marginTop: '1em', display: 'flex', flexDirection: 'column', gap: '1.2em' }}>
                    <div className="field">
                      <label style={{ color: 'rgba(200,150,12,0.55)', fontSize: 11 }}>{t('form.founding_label')}</label>
                      <input type="text" value={form.founding} onChange={set('founding')} maxLength={120} />
                      <small>{t('form.founding_desc')}</small>
                    </div>
                    <div className="field">
                      <label style={{ color: 'rgba(200,150,12,0.55)', fontSize: 11 }}>{t('form.covenant_label')}</label>
                      <input type="text" value={form.covenant} onChange={set('covenant')} />
                      <small>{t('form.covenant_desc')}</small>
                    </div>
                  </div>
                </details>

                {/* Series selection */}
                <div className="field">
                  <label>{t('form.series_label')} <span className="required">*</span></label>
                  <p className="field-note" style={{ marginBottom: '1em' }}>{t('form.series_required')}</p>

                  {/* Closed series */}
                  <p style={{ fontFamily: "'Cinzel', serif", fontSize: 10, color: 'rgba(200,150,12,0.4)', letterSpacing: '0.12em', marginBottom: '0.5em' }}>{t('form.closed_series_label')}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8em', marginBottom: '1.2em' }}>
                    {seriesOptions.filter(o => o.closed).map((opt) => (
                      <SeriesCard key={opt.id} opt={opt} selected={form.series === opt.name} onSelect={() => setVal('series', opt.name)} />
                    ))}
                  </div>

                  {/* Open series */}
                  <p style={{ fontFamily: "'Cinzel', serif", fontSize: 10, color: 'rgba(200,150,12,0.4)', letterSpacing: '0.12em', marginBottom: '0.5em' }}>{t('form.open_series_label')}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.8em' }}>
                    {seriesOptions.filter(o => !o.closed).map((opt) => (
                      <SeriesCard key={opt.id} opt={opt} selected={form.series === opt.name} onSelect={() => setVal('series', opt.name)} />
                    ))}
                  </div>
                  <small style={{ marginTop: '0.8em', display: 'block' }}>{t('form.series_desc')}</small>
                </div>

                {/* Theme selection */}
                <div className="field">
                  <label>{t('form.theme_label')} <span className="required">*</span></label>
                  <p className="field-note" style={{ marginBottom: '0.8em' }}>Select the theme that connects with your prayer.</p>
                  <div className="themes-grid" style={{ marginTop: '0.5em' }}>
                    {t('form.themes', { returnObjects: true }).map((theme) => (
                      <div
                        key={theme}
                        className={`theme-chip${form.theme === theme ? ' selected' : ''}`}
                        style={{ cursor: 'pointer' }}
                        onClick={() => setVal('theme', theme)}
                      >
                        {theme}
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ textAlign: 'right', marginTop: '0.5em' }}>
                  <button
                    type="button"
                    className="btn-gold"
                    onClick={() => setStep(1)}
                    disabled={!form.series || !form.theme}
                    style={{ opacity: (!form.series || !form.theme) ? 0.4 : 1, cursor: (!form.series || !form.theme) ? 'not-allowed' : 'pointer' }}
                  >
                    {t('form.next_prayer')} →
                  </button>
                </div>
              </>
            )}

            {/* ── STEP 1: Your Prayer ── */}
            {step === 1 && (
              <>
                <div className="field">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <label>{t('form.focus_label')} <span className="required">*</span></label>
                    <CharCount value={form.focus} max={80} />
                  </div>
                  <input type="text" value={form.focus} onChange={set('focus')} maxLength={80} required
                    placeholder={t('form.focus_placeholder')} />
                  <small>{t('form.focus_desc')}</small>
                </div>

                <div className="field">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <label>{t('form.message_label')} <span className="required">*</span></label>
                    <CharCount value={form.message} max={800} />
                  </div>
                  <textarea
                    value={form.message}
                    onChange={set('message')}
                    maxLength={800}
                    required
                    rows={8}
                    placeholder={t('form.msg_placeholder')}
                  />
                  <small>{t('form.message_desc')}</small>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <button type="button" className="btn-gold" onClick={() => setStep(0)} style={{ opacity: 0.6 }}>← {t('form.back')}</button>
                  <button
                    type="button"
                    className="btn-gold"
                    onClick={() => setStep(2)}
                    disabled={!form.focus || !form.message}
                    style={{ opacity: (!form.focus || !form.message) ? 0.4 : 1, cursor: (!form.focus || !form.message) ? 'not-allowed' : 'pointer' }}
                  >
                    {t('form.next_details')} →
                  </button>
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
                      <input type="email" value={form.email} onChange={set('email')} onBlur={validateEmail} required placeholder="Email" />
                      <small>Email</small>
                    </div>
                    <div>
                      <input
                        type="email"
                        value={form.emailConfirm}
                        onChange={set('emailConfirm')}
                        onBlur={validateEmail}
                        required
                        placeholder={t('form.email_confirm')}
                        style={emailError ? { borderColor: '#c05030' } : {}}
                      />
                      <small style={emailError ? { color: '#c05030' } : {}}>{emailError || t('form.email_confirm')}</small>
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label>{t('form.address_label')} <span className="required">*</span></label>
                  <input type="text" value={form.address} onChange={set('address')} required placeholder="Street, Number, District, Complement" />
                </div>

                <div className="name-row" style={{ gap: '1em' }}>
                  <div className="field">
                    <label>{t('form.city_label')} <span className="required">*</span></label>
                    <input type="text" value={form.city} onChange={set('city')} required placeholder="City, State" />
                  </div>
                  <div className="field">
                    <label>{t('form.country_label')} <span className="required">*</span></label>
                    <input type="text" value={form.country} onChange={set('country')} required placeholder="Country / ZIP Code" />
                  </div>
                </div>

                <small style={{ color: 'rgba(200,150,12,0.45)', fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 13 }}>{t('form.delivery_note')}</small>

                {status === 'error' && (
                  <p className="error-msg" style={{ textAlign: 'center', padding: '0.8em', border: '1px solid rgba(192,80,48,0.3)', borderRadius: 3 }}>
                    {t('form.error')}
                  </p>
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5em' }}>
                  <button type="button" className="btn-gold" onClick={() => setStep(1)} style={{ opacity: 0.6 }}>← {t('form.back')}</button>
                  <button
                    type="submit"
                    className="btn-gold btn-gold-lg btn-gold-pulse"
                    disabled={status === 'submitting'}
                    style={{ opacity: status === 'submitting' ? 0.6 : 1 }}
                  >
                    {status === 'submitting' ? 'Sending…' : `✦ ${t('form.submit')} ✦`}
                  </button>
                </div>
              </>
            )}

          </form>
        </I>
      </section>

    </main>
  )
}

// ── Series Card component ──
function SeriesCard({ opt, selected, onSelect }) {
  return (
    <div
      onClick={onSelect}
      style={{
        border: `1px solid ${selected ? 'var(--gold)' : 'rgba(200,150,12,0.2)'}`,
        background: selected ? 'rgba(200,150,12,0.1)' : 'rgba(200,150,12,0.03)',
        borderRadius: 4,
        padding: '1.2em',
        cursor: 'pointer',
        position: 'relative',
        transition: 'all 0.2s',
      }}
    >
      {selected && (
        <span style={{ position: 'absolute', top: 8, right: 10, color: 'var(--gold)', fontSize: 14 }}>✓</span>
      )}
      {opt.closed && (
        <div style={{ position: 'absolute', top: 8, left: 10, fontFamily: "'Cinzel', serif", fontSize: 9, color: 'rgba(200,150,12,0.5)', letterSpacing: '0.08em', background: 'rgba(200,150,12,0.08)', padding: '2px 6px', borderRadius: 2 }}>
          CLOSED
        </div>
      )}
      <div style={{ fontFamily: "'Cinzel', serif", fontSize: 14, fontWeight: 600, color: 'var(--gold)', marginTop: opt.closed ? '1.2em' : 0, marginBottom: '0.3em' }}>{opt.name}</div>
      <div style={{ fontFamily: "'Cinzel', serif", fontSize: 20, fontWeight: 600, color: '#fff', marginBottom: '0.4em' }}>{opt.price}</div>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 13, color: '#c8b89a', lineHeight: '1.5em' }}>{opt.desc}</div>
    </div>
  )
}
