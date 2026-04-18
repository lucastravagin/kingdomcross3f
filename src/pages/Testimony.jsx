import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import FadeIn from '../components/FadeIn'

const img = (p) => `/uploads/${p}`
const I = ({ children }) => <div className="inner">{children}</div>

function ChapterHeader({ labelKey, titleKey, bg }) {
  const { t } = useTranslation()
  return (
    <section className={bg === 'mid' ? 'section-mid' : 'section-dark'} style={{ textAlign: 'center', paddingBottom: '1.5em' }}>
      <div className="chapter-label">{t(labelKey)}</div>
      <h2 className="chapter-title">{t(titleKey)}</h2>
      <div className="gold-divider" />
    </section>
  )
}

export default function Testimony() {
  const { t } = useTranslation()

  return (
    <main>

      {/* HERO */}
      <section className="hero-section" id="Inicial"
        style={{ backgroundImage: `url(${img('2025/10/ai-generated-8968417_1920.jpg')})`, minHeight: '70vh' }}>
        <FadeIn><h2 className="title-hero">{t('testimony.title')}</h2></FadeIn>
        <div className="gold-divider" style={{ margin: '1em auto' }} />
        <p className="hero-sub">{t('testimony.hero_sub')}</p>
        <div className="hero-scroll">▼</div>
      </section>

      {/* CHAPTER I */}
      <ChapterHeader labelKey="testimony.chapter1_label" titleKey="testimony.chapter1_title" />

      <section className="section-dark" style={{ paddingTop: '1em' }}>
        <I>
          <div className="two-col">
            <div>
              <p className="body-text">{t('testimony.p1')}</p>
              <p className="body-text">{t('testimony.p2')}</p>
              <p className="body-text">{t('testimony.p3')}</p>
              <p className="body-text">{t('testimony.p4')}</p>
              <p className="body-text">{t('testimony.p5')}</p>
              <p className="body-text">{t('testimony.p6')}</p>
              <p className="body-text">{t('testimony.p7')}</p>
              <p className="body-text">{t('testimony.p8')}</p>
              <p className="body-text">{t('testimony.p9')}</p>
              <p className="body-text">{t('testimony.p10')}</p>
            </div>
            <div>
              <p className="body-text">{t('testimony.p11')}</p>
              <div className="pull-quote">{t('testimony.quote1')}</div>
              <p className="body-text">{t('testimony.p12')}</p>
              <p className="bible-verse">{t('testimony.verse1')}</p>
              <img src={img('2025/11/Eu-ia-683x1024.png')} alt="The Carpenter" style={{ marginTop: '1.5em' }} />
            </div>
          </div>
        </I>
      </section>

      {/* CHAPTER II */}
      <ChapterHeader labelKey="testimony.chapter2_label" titleKey="testimony.chapter2_title" bg="mid" />

      <section className="section-mid" style={{ paddingTop: '1em' }}>
        <I>
          <div className="two-col">
            <div>
              <h3 className="subtitle">{t('testimony.ch2_subtitle')}</h3>
              <p className="body-text">{t('testimony.p13')}</p>
              <p className="body-text">{t('testimony.p14')}</p>
              <p className="body-text">{t('testimony.p15')}</p>
              <div className="pull-quote">{t('testimony.quote2')}</div>
              <p className="body-text">{t('testimony.p16')}</p>
              <p className="body-text">{t('testimony.p17')}</p>
              <p className="body-text"><strong style={{ color: 'var(--gold)' }}>{t('testimony.p18')}</strong></p>
              <p className="bible-verse">{t('testimony.verse2')}</p>
            </div>
            <div>
              <img src={img('2025/11/Kingdom-Cross-27-747x1024.png')} alt="Kingdom Cross" />
              <p className="body-text" style={{ marginTop: '1.5em' }}>{t('testimony.p19')}</p>
              <p className="body-text">{t('testimony.p20')}</p>
              <p className="bible-verse">{t('testimony.verse3')}</p>
              <div className="pull-quote" style={{ fontSize: 'clamp(15px,1.8vw,20px)' }}>{t('testimony.quote3')}</div>
              <p className="body-text"><strong style={{ color: 'var(--gold)' }}>{t('testimony.p21')}</strong></p>
            </div>
          </div>
        </I>
      </section>

      {/* CHAPTER III */}
      <ChapterHeader labelKey="testimony.chapter3_label" titleKey="testimony.chapter3_title" />

      <section className="section-dark" style={{ paddingTop: '1em' }}>
        <I>
          <div className="two-col">
            <div>
              <p className="body-text">{t('testimony.p22')}</p>
              <p className="body-text">{t('testimony.p23')}</p>
              <p className="body-text">{t('testimony.p24')}</p>
              <p className="body-text">{t('testimony.p25')}</p>
              <div className="pillars-list">
                {t('testimony.pillars', { returnObjects: true }).map((item, i) => (
                  <div key={i} className="pillar-item">
                    <span className="pillar-num">{i + 1}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="body-text">{t('testimony.p26')}</p>
            </div>
            <div>
              <img src={img('2025/11/Kingdom-Cross-29-747x1024.png')} alt="Kingdom Cross" />
              <p className="body-text" style={{ marginTop: '1.5em' }}>{t('testimony.p27')}</p>
              <p className="body-text">{t('testimony.p28')}</p>
              <p className="bible-verse">{t('testimony.verse4')}</p>
              <p className="body-text"><strong style={{ color: 'var(--gold)' }}>{t('testimony.p29')}</strong></p>
            </div>
          </div>
        </I>
      </section>

      {/* CHAPTER IV */}
      <ChapterHeader labelKey="testimony.chapter4_label" titleKey="testimony.chapter4_title" bg="mid" />

      <section className="section-mid" style={{ paddingTop: '1em' }}>
        <I>
          <div className="two-col">
            <div>
              <p className="body-text">{t('testimony.p30')}</p>
              <p className="body-text">{t('testimony.p31')}</p>
              <p className="body-text">{t('testimony.p32')}</p>
              <div className="cross-mark">✦ ✦ ✦</div>
              <p className="body-text">{t('testimony.p33')}</p>
              <p className="body-text">{t('testimony.p34')}</p>
              <p className="bible-verse">{t('testimony.verse5')}</p>
            </div>
            <div>
              <p className="body-text">{t('testimony.p35')}</p>
              <div className="pull-quote">{t('testimony.quote4')}</div>
              <p className="body-text"><strong style={{ color: 'var(--gold)' }}>{t('testimony.p36')}</strong></p>
              <p className="body-text">{t('testimony.p37')}</p>
            </div>
          </div>
        </I>
      </section>

      {/* PICK UP THE CROSS */}
      <section className="hero-section"
        style={{ backgroundImage: `url(${img('2025/11/ChatGPT-Image-8-de-nov.-de-2025-00_12_32-683x1024.png')})`, minHeight: '80vh', backgroundPosition: 'center top' }}>
        <FadeIn><h2 className="title-hero">{t('testimony.pickup_title')}</h2></FadeIn>
        <div className="gold-divider" style={{ margin: '1em auto' }} />
        <p className="hero-sub" style={{ maxWidth: 480 }}>{t('testimony.pickup_p1')}</p>
        <p className="hero-sub" style={{ maxWidth: 480, marginTop: '1em' }}>{t('testimony.pickup_p2')}</p>
        <div className="gold-divider" style={{ margin: '2em auto' }} />
        <FadeIn>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(16px,2.2vw,28px)', fontWeight: 600, color: 'var(--gold)', textShadow: '0 0 20px rgba(196,167,9,0.5)', marginBottom: '1.5em' }}>
            <Link to="/request">{t('testimony.pickup_cta')}</Link>
          </h2>
        </FadeIn>
        <Link to="/request" className="btn-gold btn-gold-lg btn-gold-pulse">{t('testimony.btn_request')}</Link>
      </section>

      {/* NAVIGATION */}
      <section className="section-dark" style={{ textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1em', flexWrap: 'wrap' }}>
          <Link to="/"                className="btn-gold" style={{ fontSize: 14, padding: '11px 22px' }}>{t('testimony.btn_carpenter')}</Link>
          <Link to="/series"          className="btn-gold" style={{ fontSize: 14, padding: '11px 22px' }}>{t('testimony.btn_series')}</Link>
          <Link to="/kingdom-cross-3f" className="btn-gold" style={{ fontSize: 14, padding: '11px 22px' }}>{t('testimony.btn_kc3f')}</Link>
        </div>
      </section>

    </main>
  )
}
