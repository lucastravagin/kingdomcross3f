import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import FadeIn from '../components/FadeIn'

const img = (p) => `/uploads/${p}`
const I = ({ children, style }) => <div className="inner" style={style}>{children}</div>

const doors = [
  { anchor: '#primeira', key: 'door1', bg: img('2025/11/Kingdom-Cross-25.png') },
  { anchor: '#seguntap', key: 'door2', bg: img('2025/11/paranapiacaba-2645918_1920.jpg') },
  { anchor: '#terceira', key: 'door3', bg: img('2025/11/8.png') },
  { anchor: '#quatro',   key: 'door4', bg: img('2025/11/8-1.png') },
]

export default function KingdomCross3F() {
  const { t } = useTranslation()

  return (
    <main>

      {/* HERO */}
      <section id="inicio3" className="hero-section" style={{ backgroundImage: `url(${img('2025/11/lantern-6826697-scaled.jpg')})` }}>
        <FadeIn>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(26px,4vw,50px)', fontWeight: 600, color: '#FFC200', textShadow: '3px 3px 10px #000, 0 0 30px rgba(255,194,0,0.25)', marginBottom: '0.5em', letterSpacing: '0.03em' }}>
            {t('kc3f.verse_title')}
          </h2>
        </FadeIn>
        <p style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500, color: 'rgba(255,194,0,0.85)', textAlign: 'right', marginBottom: 8, fontSize: 13, letterSpacing: '0.1em' }}>
          {t('kc3f.verse_ref')}
        </p>
        <div className="gold-divider" style={{ margin: '1em auto' }} />
        <p className="hero-sub">{t('kc3f.verse2')}</p>
        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 13, color: 'rgba(255,255,255,0.55)', textAlign: 'center', marginTop: '0.5em', letterSpacing: '0.08em' }}>
          {t('kc3f.verse2_ref')}
        </p>
        <div className="hero-scroll">▼</div>
      </section>

      {/* DOORS TITLE — dark */}
      <section id="um" className="section-dark" style={{ textAlign: 'center' }}>
        <FadeIn><h2 className="title-section">{t('kc3f.doors_title')}</h2></FadeIn>
        <div className="gold-divider" />
      </section>

      {/* DOOR CARDS */}
      <div className="doors-row">
        {doors.map((d, i) => (
          <a key={i} href={d.anchor} className="door-card" style={{ backgroundImage: `url(${d.bg})` }}>
            <h2>{t(`kc3f.${d.key}`)}</h2>
          </a>
        ))}
      </div>

      {/* CRAFTED WITH PURPOSE — dark */}
      <section id="primeira" className="section-dark" style={{ textAlign: 'center', paddingBottom: '1em' }}>
        <FadeIn><h2 className="title-section">{t('kc3f.crafted_title')}</h2></FadeIn>
        <div className="gold-divider" />
      </section>

      <section className="section-dark" style={{ paddingTop: 0 }}>
        <I>
          <div className="two-col-wide">
            <div>
              <p className="body-text" style={{ marginTop: '1.5em' }}>
                <strong style={{ fontFamily: "'Cinzel', serif", fontSize: 13, color: 'var(--gold)', letterSpacing: '0.05em' }}>{t('kc3f.eph_verse')}</strong>
              </p>
              <p className="bible-verse">{t('kc3f.eph_text')}</p>
              <img src={img('2025/11/Kingdom-Cross-32.png')} alt="Kingdom Cross" />
              <p className="body-text" style={{ fontSize: 16, marginTop: '0.5em' }}>{t('kc3f.walk_text')}</p>
              <img src={img('2025/11/Kingdom-Cross-30-747x1024.png')} alt="Kingdom Cross" />
            </div>
            <div>
              <h3 className="subtitle">{t('kc3f.what_is_title')}</h3>
              <div className="gold-divider" style={{ margin: '1em 0' }} />
              {t('kc3f.what_is_text').split('\n\n').map((para, i) => (
                para.startsWith('\u201c') || para.startsWith('"')
                  ? <div key={i} className="pull-quote" style={{ fontSize: 'clamp(14px,1.6vw,18px)', margin: '1.5em 0' }}>{para}</div>
                  : <p key={i} className="body-text" style={{ fontSize: 17 }}>{para}</p>
              ))}
            </div>
          </div>
        </I>
      </section>

      <div className="btn-row section-dark"><a href="#um" className="btn-gold">{t('kc3f.to_doors')}</a></div>

      {/* TOUCHED BY GRACE — cream (contraste) */}
      <section id="seguntap" className="section-cream" style={{ textAlign: 'center', paddingBottom: '1em' }}>
        <FadeIn><h2 className="title-section">{t('kc3f.touched_title')}</h2></FadeIn>
        <div className="gold-divider" />
      </section>

      <section className="section-cream" style={{ paddingTop: 0 }}>
        <I>
          <div className="two-col">
            <div>
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: 17, fontWeight: 600, color: 'var(--gold-dark)', marginBottom: '1em', letterSpacing: '0.04em' }}>
                {t('kc3f.how_receive_title')}
              </h3>
              {t('kc3f.how_receive_text').split('\n\n').map((para, i) => (
                <p key={i} className="body-text" style={{ fontSize: 16 }}>{para}</p>
              ))}
              <div style={{ borderTop: '1px solid rgba(139,105,20,0.25)', paddingTop: '1em', marginTop: '0.5em' }}>
                <p style={{ fontFamily: "'Cinzel', serif", fontSize: 13, color: 'var(--gold-dark)', letterSpacing: '0.06em' }}>
                  <strong>{t('kc3f.matt_verse')}</strong>
                </p>
                <p className="bible-verse">{t('kc3f.matt_text')}</p>
              </div>
            </div>
            <div>
              <img src={img('2025/11/Kingdom-Cross-30-747x1024.png')} alt="Kingdom Cross" />
            </div>
          </div>
        </I>
      </section>

      <div className="btn-row section-cream" style={{ borderTop: '1px solid rgba(139,105,20,0.2)' }}>
        <a href="#um" className="btn-gold">{t('kc3f.to_doors')}</a>
      </div>

      {/* YOUR SEED — dark */}
      <section id="terceira" className="section-dark" style={{ textAlign: 'center', paddingBottom: '1em' }}>
        <FadeIn><h2 className="title-section">{t('kc3f.seed_title')}</h2></FadeIn>
        <div className="gold-divider" />
      </section>

      <section className="section-dark" style={{ paddingTop: 0 }}>
        <I>
          <div className="two-col">
            <div>
              <h3 className="subtitle">{t('kc3f.seed_subtitle')}</h3>
              {t('kc3f.seed_text').split('\n\n').map((para, i) => (
                <p key={i} className="body-text" style={{ fontSize: 17 }}>{para}</p>
              ))}
            </div>
            <div>
              <img src={img('2025/11/Kingdom-Cross-26-747x1024.png')} alt="Kingdom Cross" />
              <p className="body-text" style={{ marginTop: '1em' }}>{t('kc3f.seed_text2')}</p>
              <p className="bible-verse">{t('kc3f.gal_verse')}</p>
              <p className="bible-verse">{t('kc3f.gal_text')}</p>
            </div>
          </div>
        </I>
      </section>

      <div className="btn-row section-dark"><a href="#um" className="btn-gold">{t('kc3f.to_doors')}</a></div>

      {/* THE FINAL WORD — mid */}
      <section id="quatro" className="section-mid" style={{ textAlign: 'center', paddingBottom: '1em' }}>
        <FadeIn><h2 className="title-section">{t('kc3f.final_title')}</h2></FadeIn>
        <div className="gold-divider" />
      </section>

      <section className="section-mid" style={{ paddingTop: 0 }}>
        <I>
          <div className="two-col">
            <div>
              {t('kc3f.final_text').split('\n\n').map((para, i) => {
                if (para.startsWith('\u201c') || para.startsWith('"'))
                  return <div key={i} className="pull-quote" style={{ fontSize: 'clamp(14px,1.6vw,18px)', margin: '1.5em 0' }}>{para}</div>
                if (para === 'Kingdom Cross 3F' || para === 'The Carpenter')
                  return <h3 key={i} style={{ fontFamily: "'Cinzel', serif", fontSize: 15, color: 'var(--gold)', letterSpacing: '0.1em', marginTop: '1.5em' }}>{para}</h3>
                return <p key={i} className="body-text" style={{ fontSize: 17 }}>{para}</p>
              })}
              <div className="cross-mark" style={{ marginTop: '2em' }}>✦</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(16px,2vw,24px)', fontWeight: 400, color: 'var(--gold)', textAlign: 'center', marginTop: '1em' }}>
                <Link to="/testimony">{t('kc3f.testimony_link')}</Link>
              </h3>
            </div>
            <div>
              <img src={img('2025/11/ChatGPT-Image-7-de-nov.-de-2025-01_03_47-683x1024.png')} alt="The Cross" style={{ maxWidth: '87%', margin: '0 auto' }} />
            </div>
          </div>
        </I>
      </section>

      {/* GALATIANS — dark */}
      <section className="section-dark" style={{ textAlign: 'center' }}>
        <I className="inner-text">
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(16px,2.2vw,26px)', fontWeight: 600, color: 'var(--gold)', textShadow: '0 0 18px rgba(196,167,9,0.4)', lineHeight: '1.5em', margin: 0 }}>
            {t('kc3f.gal3_verse')}
          </h2>
        </I>
      </section>

      {/* CTA — dark */}
      <section className="section-dark" style={{ textAlign: 'center' }}>
        <FadeIn>
          <h2 className="title-section">
            <Link to="/request">{t('kc3f.call_title')}</Link>
          </h2>
        </FadeIn>
        <div className="gold-divider" />
        <a href="#inicio3" className="btn-gold">{t('nav.kc3f')}</a>
      </section>

    </main>
  )
}
