import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import FadeIn from '../components/FadeIn'

const img = (p) => `/uploads/${p}`
const I = ({ children, style }) => <div className="inner" style={style}>{children}</div>

const doors = [
  { anchor: '#carpinteiro', key: 'door_message', bg: img('2025/10/hammer-3987553_1920.jpg') },
  { anchor: '#Proposito',   key: 'door_purpose', bg: img('2025/10/Kingdom-Cross-8.png') },
  { anchor: '#fé',          key: 'door_faith',   bg: img('2025/10/lumber-84678_1920-1-rotated.jpg') },
  { anchor: '#Davi',        key: 'door_history', bg: img('2025/11/old-door-193147_1920.jpg') },
  { anchor: '#Cruz',        key: 'door_cross',   bg: img('2025/11/wooden-cross-3262919_1920-rotated.jpg') },
]

export default function TheCarpenter() {
  const { t } = useTranslation()

  return (
    <main>

      {/* HERO */}
      <section id="principio" className="hero-section"
        style={{ backgroundImage: `url(${img('2025/10/ai-generated-8968417_1920.jpg')})` }}>
        <FadeIn><h2 className="title-hero">{t('carpenter.hero_title')}</h2></FadeIn>
        <p className="hero-sub">{t('carpenter.hero_text')}</p>
        <div className="gold-divider" style={{ margin: '1.5em auto' }} />
        <p style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(13px,1.4vw,17px)', fontStyle: 'italic', color: 'rgba(200,150,12,0.9)', letterSpacing: '0.04em' }}>
          {t('carpenter.hero_verse')}
        </p>
        <div className="hero-scroll">▼</div>
      </section>

      {/* DOORS TITLE */}
      <section id="Portas" className="section-dark" style={{ textAlign: 'center' }}>
        <FadeIn><h2 className="title-section">{t('carpenter.doors_title')}</h2></FadeIn>
        <div className="gold-divider" />
      </section>

      <div className="doors-row">
        {doors.map((d, i) => (
          <a key={i} href={d.anchor} className="door-card" style={{ backgroundImage: `url(${d.bg})` }}>
            <h2>{t(`carpenter.${d.key}`)}</h2>
          </a>
        ))}
      </div>

      {/* MESSAGE */}
      <section id="carpinteiro" className="section-dark" style={{ textAlign: 'center' }}>
        <FadeIn><h2 className="title-section">{t('carpenter.message_title')}</h2></FadeIn>
        <div className="gold-divider" />
      </section>

      <section className="section-dark" style={{ paddingTop: 0 }}>
        <I>
          <div className="two-col">
            <div>
              <h3 className="subtitle">{t('carpenter.about_title')}</h3>
              <p className="body-text">{t('carpenter.about_text')}</p>
              <p className="body-text">{t('carpenter.about_text2')}</p>
            </div>
            <div>
              <p className="body-text">{t('carpenter.about_text3')}</p>
              <img src={img('2025/10/ai-generated-8176159-1024x640.png')} alt="The Carpenter" />
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontStyle: 'italic', color: 'rgba(200,150,12,0.75)', textAlign: 'center', marginTop: '0.5em' }}>
                {t('carpenter.true_carpenter')}
              </p>
            </div>
          </div>
        </I>
      </section>

      {/* PURPOSE */}
      <div className="btn-row section-mid"><a href="#Portas" className="btn-gold">{t('carpenter.to_doors')}</a></div>

      <section id="Proposito" className="section-mid" style={{ textAlign: 'center', paddingBottom: '1em' }}>
        <FadeIn><h2 className="title-section">{t('carpenter.purpose_title')}</h2></FadeIn>
        <div className="gold-divider" />
      </section>

      <section className="section-mid" style={{ paddingTop: 0 }}>
        <I>
          <div className="two-col">
            <div>
              <h3 className="subtitle">{t('carpenter.purpose_subtitle')}</h3>
              <p className="body-text">{t('carpenter.purpose_text')}</p>
              <p className="body-text"><strong style={{ color: 'var(--gold)' }}>{t('carpenter.purpose_mission')}</strong></p>
              <img src={img('2025/11/tools-2423826_1920-1-738x1024.jpg')} alt="Tools" />
              <p className="body-text"><strong>{t('carpenter.purpose_thanks')}</strong></p>
            </div>
            <div>
              <p className="body-text" style={{ whiteSpace: 'pre-line' }}>{t('carpenter.purpose_list')}</p>
              <div className="cross-mark">✦ ✦ ✦</div>
              <p className="bible-verse">{t('carpenter.purpose_verse')}</p>
            </div>
          </div>
        </I>
      </section>

      {/* FAITH */}
      <div className="btn-row section-dark"><a href="#Portas" className="btn-gold">{t('carpenter.to_doors')}</a></div>

      <section id="fé" className="section-dark" style={{ textAlign: 'center', paddingBottom: '1em' }}>
        <FadeIn><h2 className="title-section">{t('carpenter.faith_title')}</h2></FadeIn>
        <div className="gold-divider" />
      </section>

      <section className="section-dark" style={{ paddingTop: 0 }}>
        <I>
          <div className="two-col">
            <div>
              <h3 className="subtitle">{t('carpenter.faith_subtitle')}</h3>
              <p className="body-text">{t('carpenter.faith_text')}</p>
              <p className="body-text">{t('carpenter.faith_text2')}</p>
              <p className="body-text">{t('carpenter.faith_text3')}</p>
              <p className="body-text">{t('carpenter.faith_text4')}</p>
              <p className="body-text">{t('carpenter.faith_text5')}</p>
              <div className="cross-mark">✦</div>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontStyle: 'italic', color: 'rgba(200,150,12,0.7)', textAlign: 'center' }}>{t('carpenter.first_crosses')}</p>
              <img src={img('2025/11/Design-sem-nome-1024x747.png')} alt="First Crosses" />
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontStyle: 'italic', color: 'rgba(200,150,12,0.65)', textAlign: 'center', marginTop: '0.5em' }}>{t('carpenter.faith_love')}</p>
            </div>
            <div>
              <h3 className="subtitle">{t('carpenter.secret_title')}</h3>
              <p className="body-text">{t('carpenter.secret_text1')}</p>
              <p className="body-text">{t('carpenter.secret_text2')}</p>
              <p className="body-text">{t('carpenter.secret_text3')}</p>
              <p className="body-text">{t('carpenter.secret_text4')}</p>
              <div className="pull-quote">{t('carpenter.secret_quote')}</div>
              <p className="body-text">{t('carpenter.secret_text5')}</p>
              <p className="bible-verse">{t('carpenter.secret_verse')}</p>
            </div>
          </div>
        </I>
      </section>

      {/* TESTIMONY LINK */}
      <section className="section-cream" style={{ textAlign: 'center' }}>
        <I>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(20px,2.5vw,30px)', fontWeight: 400, color: 'var(--text-cream)', marginBottom: '0.5em' }}>
            <Link to="/testimony" style={{ color: 'var(--gold-dark)' }}>{t('carpenter.testimony_link')}</Link>
          </h2>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: 'var(--text-cream)', maxWidth: 560, margin: '0 auto' }}>
            {t('carpenter.testimony_text')}
          </p>
        </I>
      </section>

      {/* HISTORY */}
      <div className="btn-row section-mid"><a href="#Portas" className="btn-gold">{t('carpenter.to_doors')}</a></div>

      <section id="Davi" className="section-mid" style={{ textAlign: 'center', paddingBottom: '1em' }}>
        <FadeIn><h2 className="title-section">{t('carpenter.history_title')}</h2></FadeIn>
        <div className="gold-divider" />
      </section>

      <section className="section-mid" style={{ paddingTop: 0 }}>
        <I>
          <div className="two-col">
            <div>
              <h3 className="subtitle">{t('carpenter.history_subtitle')}</h3>
              <p className="body-text">{t('carpenter.history_text1')}</p>
              <p className="body-text">{t('carpenter.history_text2')}</p>
              <p className="body-text">{t('carpenter.history_text3')}</p>
              <p className="body-text">{t('carpenter.history_text4')}</p>
              <p className="body-text">{t('carpenter.history_text5')}</p>
              <p className="body-text">{t('carpenter.history_text6')}</p>
              <p className="bible-verse">{t('carpenter.history_verse')}</p>
            </div>
            <div>
              <img src={img('2025/11/Kingdom-Cross-17-747x1024.png')} alt="Kingdom Cross" />
              <p className="body-text" style={{ fontFamily: "'Cinzel', serif", fontSize: 15, marginTop: '1em' }}>{t('carpenter.history_text7')}</p>
              <p className="body-text" style={{ fontFamily: "'Cinzel', serif", fontSize: 15 }}>{t('carpenter.history_text8')}</p>
            </div>
          </div>
        </I>
      </section>

      {/* KC 3F */}
      <div className="btn-row section-dark"><a href="#Portas" className="btn-gold">{t('carpenter.to_doors')}</a></div>

      <section id="Cruz" className="section-dark" style={{ textAlign: 'center' }}>
        <FadeIn><h2 className="title-section">{t('carpenter.kc_title')}</h2></FadeIn>
        <div className="gold-divider" />
        <p className="body-text" style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>{t('carpenter.kc_promise')}</p>
      </section>

      <section className="glow-section">
        <Link to="/series" className="btn-gold btn-gold-lg btn-gold-pulse">{t('carpenter.select_kc')}</Link>
      </section>

      <section className="section-dark" style={{ textAlign: 'center' }}>
        <FadeIn>
          <h2 className="title-section"><Link to="/request">{t('carpenter.call_title')}</Link></h2>
        </FadeIn>
        <div className="gold-divider" />
        <p className="body-text" style={{ maxWidth: 500, margin: '0 auto 1.5em', textAlign: 'center' }}>{t('carpenter.coming_soon')}</p>
        <p className="body-text" style={{ maxWidth: 500, margin: '0 auto 2em', textAlign: 'center' }}>{t('carpenter.coming_soon2')}</p>
        <a href="#principio" className="btn-gold">{t('nav.kc3f')}</a>
      </section>

    </main>
  )
}
