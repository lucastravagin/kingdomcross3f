import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import FadeIn from '../components/FadeIn'

const img = (p) => `/uploads/${p}`

const doors = [
  { anchor: '#primeira', key: 'door1', bg: img('2025/11/Kingdom-Cross-25.png') },
  { anchor: '#seguntap', key: 'door2', bg: img('2025/11/paranapiacaba-2645918_1920.jpg') },
  { anchor: '#terceira', key: 'door3', bg: img('2025/11/8.png') },
  { anchor: '#quatro',   key: 'door4', bg: img('2025/11/8-1.png') },
]

const W = ({ children, style }) => (
  <div style={{ maxWidth: 1200, margin: '0 auto', ...style }}>{children}</div>
)

export default function KingdomCross3F() {
  const { t } = useTranslation()

  return (
    <main>

      {/* ── HERO ── */}
      <section id="inicio3" className="hero-section" style={{ backgroundImage: `url(${img('2025/11/lantern-6826697-scaled.jpg')})` }}>
        <FadeIn>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(28px,4vw,52px)', fontWeight: 600, color: '#FFC200', textShadow: '3px 3px 10px #000, 0 0 30px rgba(255,194,0,0.3)', marginBottom: '0.5em', letterSpacing: '0.03em' }}>
            {t('kc3f.verse_title')}
          </h2>
        </FadeIn>
        <p style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 600, color: '#FFC200', textAlign: 'right', marginBottom: 10, fontSize: 14, letterSpacing: '0.1em', opacity: 0.9 }}>
          {t('kc3f.verse_ref')}
        </p>
        <div className="gold-divider" style={{ margin: '1em auto' }} />
        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(15px,1.8vw,21px)', fontWeight: 500, lineHeight: '1.5em', textShadow: '3px 3px 7px #000', color: 'rgba(243,243,243,0.92)', textAlign: 'center', maxWidth: 650 }}>
          {t('kc3f.verse2')}
        </p>
        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginTop: '0.5em', letterSpacing: '0.08em' }}>
          {t('kc3f.verse2_ref')}
        </p>
        <div className="hero-scroll" />
      </section>

      {/* ── DOORS TITLE ── */}
      <section id="um" style={{ background: 'linear-gradient(180deg,rgba(99,106,112,0.9) 0%,rgba(10,5,0,0.88) 100%)', backgroundImage: `url(${img('2025/10/lumber-84678_1920-1-rotated.jpg')})`, backgroundSize: 'cover', backgroundBlendMode: 'multiply', textAlign: 'center', padding: '3.5em 2em' }}>
        <FadeIn>
          <h2 className="gold-title-dark">{t('kc3f.doors_title')}</h2>
        </FadeIn>
        <div className="gold-divider" />
      </section>

      {/* ── DOOR CARDS ── */}
      <div className="doors-row">
        {doors.map((d, i) => (
          <a key={i} href={d.anchor} className="door-card" style={{ backgroundImage: `url(${d.bg})` }}>
            <h2>{t(`kc3f.${d.key}`)}</h2>
          </a>
        ))}
      </div>

      {/* ── CRAFTED WITH PURPOSE ── */}
      <section id="primeira" className="section-wood" style={{ textAlign: 'center', padding: '3.5em 2em 1em' }}>
        <FadeIn>
          <h2 className="gold-title-dark">{t('kc3f.crafted_title')}</h2>
        </FadeIn>
        <div className="gold-divider" />
      </section>

      <section className="section-wood" style={{ padding: '0 2em 4em' }}>
        <W>
          <div className="two-col-asymmetric">
            <div>
              <p className="playfair-body" style={{ marginTop: '2em' }}>
                <strong style={{ color: '#D1A412', fontFamily: "'Cinzel', serif", fontSize: 14, letterSpacing: '0.05em' }}>{t('kc3f.eph_verse')}</strong>
              </p>
              <p className="bible-verse">{t('kc3f.eph_text')}</p>
              <img src={img('2025/11/Kingdom-Cross-32.png')} alt="Kingdom Cross" style={{ filter: 'sepia(10%) brightness(0.9)', boxShadow: '0 0 40px rgba(212,175,55,0.15)' }} />
              <p className="playfair-body" style={{ fontSize: 16, marginTop: '0.5em' }}>{t('kc3f.walk_text')}</p>
              <img src={img('2025/11/Kingdom-Cross-30-747x1024.png')} alt="Kingdom Cross" style={{ filter: 'sepia(10%) brightness(0.9)', boxShadow: '0 0 40px rgba(212,175,55,0.1)' }} />
            </div>
            <div>
              <h2 className="playfair-subtitle">{t('kc3f.what_is_title')}</h2>
              <div className="gold-divider" style={{ margin: '1em 0' }} />
              {t('kc3f.what_is_text').split('\n\n').map((para, i) => (
                para.startsWith('"') || para.startsWith('\u201c')
                  ? <div key={i} className="pull-quote" style={{ fontSize: 'clamp(15px,1.8vw,20px)', margin: '1.5em 0' }}>{para}</div>
                  : <p key={i} className="playfair-body" style={{ fontSize: 17 }}>{para}</p>
              ))}
            </div>
          </div>
        </W>
      </section>

      <div className="btn-center section-wood">
        <a href="#um" className="btn-gold">{t('kc3f.to_doors')}</a>
      </div>

      {/* ── TOUCHED BY GRACE ── */}
      <section id="seguntap" className="section-transition-gold" style={{ textAlign: 'center', padding: '3em 2em 1em' }}>
        <FadeIn>
          <h2 className="gold-title-dark">{t('kc3f.touched_title')}</h2>
        </FadeIn>
        <div className="gold-divider" />
      </section>

      <section className="section-gold-glow" style={{ padding: '3em 2em' }}>
        <W>
          <div className="two-col">
            <div>
              <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 18, fontWeight: 600, color: '#1a0800', marginBottom: '1em', letterSpacing: '0.04em' }}>
                {t('kc3f.how_receive_title')}
              </h2>
              {t('kc3f.how_receive_text').split('\n\n').map((para, i) => (
                <p key={i} style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, color: '#1a0800', lineHeight: '1.7em', marginBottom: '1em' }}>{para}</p>
              ))}
              <div style={{ borderTop: '1px solid rgba(100,60,0,0.3)', paddingTop: '1em', marginTop: '1em' }}>
                <p style={{ fontFamily: "'Cinzel', serif", fontSize: 13, color: '#3a1800', letterSpacing: '0.06em' }}>
                  <strong>{t('kc3f.matt_verse')}</strong>
                </p>
                <p className="bible-verse" style={{ color: '#3a1800', borderLeftColor: 'rgba(100,60,0,0.5)' }}>
                  {t('kc3f.matt_text')}
                </p>
              </div>
            </div>
            <div>
              <img src={img('2025/11/Kingdom-Cross-30-747x1024.png')} alt="Kingdom Cross" style={{ filter: 'sepia(5%)', boxShadow: '0 8px 40px rgba(0,0,0,0.3)' }} />
            </div>
          </div>
        </W>
      </section>

      <section className="section-transition-fade" style={{ textAlign: 'center', padding: '2em' }}>
        <a href="#um" className="btn-gold">{t('kc3f.to_doors')}</a>
      </section>

      {/* ── YOUR SEED ── */}
      <section id="terceira" className="section-wood" style={{ textAlign: 'center', padding: '3.5em 2em 1em' }}>
        <FadeIn>
          <h2 className="gold-title-dark">{t('kc3f.seed_title')}</h2>
        </FadeIn>
        <div className="gold-divider" />
      </section>

      <section className="section-wood" style={{ padding: '0 2em 4em' }}>
        <W>
          <div className="two-col">
            <div>
              <h2 className="playfair-subtitle">{t('kc3f.seed_subtitle')}</h2>
              {t('kc3f.seed_text').split('\n\n').map((para, i) => (
                <p key={i} className="playfair-body" style={{ fontSize: 17 }}>{para}</p>
              ))}
            </div>
            <div>
              <img src={img('2025/11/Kingdom-Cross-26-747x1024.png')} alt="Kingdom Cross" style={{ filter: 'sepia(10%) brightness(0.9)', boxShadow: '0 0 40px rgba(212,175,55,0.1)' }} />
              <p className="playfair-body" style={{ marginTop: '1em' }}>{t('kc3f.seed_text2')}</p>
              <p className="bible-verse">{t('kc3f.gal_verse')}</p>
              <p className="bible-verse">{t('kc3f.gal_text')}</p>
            </div>
          </div>
        </W>
      </section>

      <div className="btn-center section-wood">
        <a href="#um" className="btn-gold">{t('kc3f.to_doors')}</a>
      </div>

      {/* ── THE FINAL WORD ── */}
      <section id="quatro" style={{ background: 'linear-gradient(180deg,rgba(10,5,0,0.88) 0%,rgba(30,15,0,0.75) 100%)', backgroundImage: `url(${img('2025/10/lumber-84678_1920-1-rotated.jpg')})`, backgroundSize: 'cover', backgroundBlendMode: 'multiply', textAlign: 'center', padding: '3.5em 2em 1em' }}>
        <FadeIn>
          <h2 className="gold-title-dark">{t('kc3f.final_title')}</h2>
        </FadeIn>
        <div className="gold-divider" />
      </section>

      <section className="section-wood" style={{ padding: '2em 2em 4em' }}>
        <W>
          <div className="two-col">
            <div>
              {t('kc3f.final_text').split('\n\n').map((para, i) => {
                if (para.startsWith('\u201c') || para.startsWith('"'))
                  return <div key={i} className="pull-quote" style={{ fontSize: 'clamp(15px,1.8vw,20px)', margin: '1.5em 0' }}>{para}</div>
                if (para === 'Kingdom Cross 3F' || para === 'The Carpenter')
                  return <h3 key={i} style={{ fontFamily: "'Cinzel', serif", fontSize: 16, color: '#D1A412', letterSpacing: '0.1em', marginTop: '1.5em' }}>{para}</h3>
                return <p key={i} className="playfair-body" style={{ fontSize: 17 }}>{para}</p>
              })}
              <div className="cross-divider" style={{ marginTop: '2em' }}>✦</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(18px,2.5vw,28px)', fontWeight: 400, color: '#D1A412', textAlign: 'center', marginTop: '1em' }}>
                <Link to="/testimony" style={{ color: '#D1A412', textDecoration: 'none' }}>{t('kc3f.testimony_link')}</Link>
              </h2>
            </div>
            <div>
              <img src={img('2025/11/ChatGPT-Image-7-de-nov.-de-2025-01_03_47-683x1024.png')} alt="The Cross" style={{ maxWidth: '87%', margin: '0 auto', filter: 'sepia(10%) brightness(0.88)', boxShadow: '0 0 50px rgba(212,175,55,0.15)' }} />
            </div>
          </div>
        </W>
      </section>

      {/* ── GALATIANS ── */}
      <section style={{ background: 'linear-gradient(180deg,rgba(30,15,0,0.75) 0%,rgba(10,5,0,0.88) 100%)', backgroundImage: `url(${img('2025/10/lumber-84678_1920-1-rotated.jpg')})`, backgroundSize: 'cover', backgroundBlendMode: 'multiply', padding: '4em 2em', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(18px,2.5vw,28px)', fontWeight: 600, color: '#D1A412', textShadow: '0 0 20px rgba(196,167,9,0.5)', maxWidth: 700, margin: '0 auto', lineHeight: '1.5em' }}>
          {t('kc3f.gal3_verse')}
        </h2>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="section-wood" style={{ textAlign: 'center', padding: '4em 2em' }}>
        <FadeIn>
          <h2 className="gold-title-dark">
            <Link to="/formulario" style={{ color: '#D1A412', textDecoration: 'none' }}>{t('kc3f.call_title')}</Link>
          </h2>
        </FadeIn>
        <div className="gold-divider" />
        <a href="#inicio3" className="btn-gold">{t('nav.kc3f')}</a>
      </section>

    </main>
  )
}
