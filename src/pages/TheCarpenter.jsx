import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import FadeIn from '../components/FadeIn'

const img = (p) => `/uploads/${p}`

const doors = [
  { anchor: '#carpinteiro', key: 'door_message', bg: img('2025/10/hammer-3987553_1920.jpg') },
  { anchor: '#Proposito',   key: 'door_purpose', bg: img('2025/10/Kingdom-Cross-8.png') },
  { anchor: '#fé',          key: 'door_faith',   bg: img('2025/10/lumber-84678_1920-1-rotated.jpg') },
  { anchor: '#Davi',        key: 'door_history', bg: img('2025/11/old-door-193147_1920.jpg') },
  { anchor: '#Cruz',        key: 'door_cross',   bg: img('2025/11/wooden-cross-3262919_1920-rotated.jpg') },
]

const W = ({ children, style }) => (
  <div style={{ maxWidth: 1200, margin: '0 auto', ...style }}>{children}</div>
)

export default function TheCarpenter() {
  const { t } = useTranslation()

  return (
    <main>

      {/* ── HERO ── */}
      <section
        id="principio"
        className="hero-section"
        style={{ backgroundImage: `url(${img('2025/10/ai-generated-8968417_1920.jpg')})` }}
      >
        <FadeIn>
          <h2 className="gold-title">{t('carpenter.hero_title')}</h2>
        </FadeIn>
        <p className="italic-hero" style={{ maxWidth: 680 }}>{t('carpenter.hero_text')}</p>
        <div className="gold-divider" style={{ margin: '1.5em auto' }} />
        <p style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(14px,1.5vw,18px)', fontStyle: 'italic', color: '#D1A412', letterSpacing: '0.05em' }}>
          {t('carpenter.hero_verse')}
        </p>
        <div className="hero-scroll" />
      </section>

      {/* ── DOORS TITLE ── */}
      <section id="Portas" className="section-wood" style={{ textAlign: 'center', padding: '3.5em 2em' }}>
        <FadeIn>
          <h2 className="gold-title-dark">{t('carpenter.doors_title')}</h2>
        </FadeIn>
        <div className="gold-divider" />
      </section>

      {/* ── DOOR CARDS ── */}
      <div className="doors-row">
        {doors.map((d, i) => (
          <a key={i} href={d.anchor} className="door-card" style={{ backgroundImage: `url(${d.bg})` }}>
            <h2>{t(`carpenter.${d.key}`)}</h2>
          </a>
        ))}
      </div>

      {/* ── THE CARPENTER'S MESSAGE ── */}
      <section id="carpinteiro" className="section-wood" style={{ textAlign: 'center', padding: '3.5em 2em' }}>
        <FadeIn>
          <h2 className="gold-title-dark">{t('carpenter.message_title')}</h2>
        </FadeIn>
        <div className="gold-divider" />
      </section>

      <section className="section-wood" style={{ padding: '0 2em 4em' }}>
        <W>
          <div className="two-col">
            <div>
              <h2 className="playfair-subtitle">{t('carpenter.about_title')}</h2>
              <p className="playfair-body">{t('carpenter.about_text')}</p>
              <p className="playfair-body">{t('carpenter.about_text2')}</p>
            </div>
            <div>
              <p className="playfair-body">{t('carpenter.about_text3')}</p>
              <img
                src={img('2025/10/ai-generated-8176159-1024x640.png')}
                alt="The Carpenter"
                style={{ filter: 'sepia(15%) brightness(0.88)', boxShadow: '0 0 40px rgba(212,175,55,0.15)' }}
              />
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontStyle: 'italic', color: 'rgba(212,175,55,0.8)', textAlign: 'center', marginTop: '0.5em' }}>
                {t('carpenter.true_carpenter')}
              </p>
            </div>
          </div>
        </W>
      </section>

      {/* ── PURPOSE ── */}
      <div className="btn-center section-wood">
        <a href="#Portas" className="btn-gold">{t('carpenter.to_doors')}</a>
      </div>

      <section id="Proposito" className="section-wood" style={{ textAlign: 'center', padding: '2em 2em 1em' }}>
        <FadeIn>
          <h2 className="gold-title-dark">{t('carpenter.purpose_title')}</h2>
        </FadeIn>
        <div className="gold-divider" />
      </section>

      <section className="section-wood" style={{ padding: '0 2em 4em' }}>
        <W>
          <div className="two-col">
            <div>
              <h2 className="playfair-subtitle">{t('carpenter.purpose_subtitle')}</h2>
              <p className="playfair-body">{t('carpenter.purpose_text')}</p>
              <p className="playfair-body"><strong style={{ color: '#D1A412' }}>{t('carpenter.purpose_mission')}</strong></p>
              <img src={img('2025/11/tools-2423826_1920-1-738x1024.jpg')} alt="Tools" style={{ filter: 'sepia(10%) brightness(0.85)' }} />
              <p className="playfair-body"><strong>{t('carpenter.purpose_thanks')}</strong></p>
            </div>
            <div>
              <p className="playfair-body" style={{ whiteSpace: 'pre-line' }}>{t('carpenter.purpose_list')}</p>
              <div className="cross-divider">✦ ✦ ✦</div>
              <p className="bible-verse">
                "For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do." — Eph 2:10
              </p>
            </div>
          </div>
        </W>
      </section>

      {/* ── FAITH ── */}
      <div className="btn-center" style={{ background: 'linear-gradient(180deg,rgba(10,5,0,0.88) 0%,rgba(30,15,0,0.75) 100%)', backgroundImage: `url(${img('2025/10/lumber-84678_1920-1-rotated.jpg')})`, backgroundSize: 'cover', backgroundBlendMode: 'multiply' }}>
        <a href="#Portas" className="btn-gold">{t('carpenter.to_doors')}</a>
      </div>

      <section id="fé" style={{ background: 'linear-gradient(180deg,rgba(10,5,0,0.88) 0%,rgba(50,30,0,0.82) 100%)', backgroundImage: `url(${img('2025/10/lumber-84678_1920-1-rotated.jpg')})`, backgroundSize: 'cover', backgroundBlendMode: 'multiply', textAlign: 'center', padding: '3em 2em 1em' }}>
        <FadeIn>
          <h2 className="gold-title-dark">{t('carpenter.faith_title')}</h2>
        </FadeIn>
        <div className="gold-divider" />
      </section>

      <section style={{ background: 'linear-gradient(180deg,rgba(50,30,0,0.82) 0%,rgba(180,120,0,0.9) 100%)', backgroundImage: `url(${img('2025/10/lumber-84678_1920-1-rotated.jpg')})`, backgroundSize: 'cover', backgroundBlendMode: 'multiply', padding: '2em 2em 4em' }}>
        <W>
          <div className="two-col">
            <div>
              <h2 style={{ fontFamily: "'Playfair', serif", fontSize: 21, fontWeight: 500, color: '#f0e6cc' }}>{t('carpenter.faith_subtitle')}</h2>
              <p className="playfair-body">{t('carpenter.faith_text')}</p>
              <p className="playfair-body">Displaying her online, placing her on a pedestal, or turning her into mere decoration is to lose the essence of what she represents.</p>
              <p className="playfair-body">The faith behind the Kingdom Cross is simple: that each piece reaches the right heart at the right time, the one who truly needs her message.</p>
              <p className="playfair-body">Each cross is unique, just like you. Every cross is handcrafted with faith, and her message is chosen through prayer and discernment.</p>
              <p className="playfair-body">The message is for you. Perhaps God is trusting you to multiply it, to carry forward what was placed in your hands.</p>
              <div className="cross-divider">✦</div>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontStyle: 'italic', color: 'rgba(212,175,55,0.8)', textAlign: 'center' }}>
                {t('carpenter.first_crosses')}
              </p>
              <img src={img('2025/11/Design-sem-nome-1024x747.png')} alt="First Crosses" style={{ filter: 'sepia(10%) brightness(0.9)', boxShadow: '0 0 30px rgba(0,0,0,0.5)' }} />
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontStyle: 'italic', color: 'rgba(212,175,55,0.7)', textAlign: 'center', marginTop: '0.5em' }}>
                {t('carpenter.faith_love')}
              </p>
            </div>
            <div>
              <h2 style={{ fontFamily: "'Playfair', serif", fontSize: 21, fontWeight: 500, color: '#f0e6cc' }}>{t('carpenter.secret_title')}</h2>
              <p className="playfair-body">The secret of the image and the message is not about hiding something. It exists so that the message can reach what your heart truly needs.</p>
              <p className="playfair-body">Others may receive the same message you did when you pass your KC forward, but it will speak to them in a completely different way.</p>
              <p className="playfair-body">But if the message becomes public, it loses its essence. It stops being personal. It stops being unique. It stops being Christ speaking to you and becomes just another story told to many.</p>
              <p className="playfair-body">When the personal becomes public, the mystery fades and the purpose weakens. When the purpose weakens, no one is truly reached.</p>
              <div className="pull-quote">
                The Kingdom Cross was never made to be shown to the world, but to change the world, one soul at a time.
              </div>
              <p className="playfair-body">For the power of the Kingdom Cross does not reside in her form, but in the prayer, faith, and obedience that gave her life.</p>
              <p className="bible-verse">Some secrets are not meant to hide truth, but to reveal it only to those who listen.</p>
            </div>
          </div>
        </W>
      </section>

      {/* ── TESTIMONY LINK ── */}
      <section style={{ background: 'linear-gradient(180deg,rgba(180,120,0,0.9) 0%,#FFB700 100%)', backgroundImage: `url(${img('2025/10/lumber-84678_1920-1-rotated.jpg')})`, backgroundSize: 'cover', backgroundBlendMode: 'multiply', padding: '3.5em 2em', textAlign: 'center' }}>
        <W>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(22px,3vw,33px)', fontWeight: 400, color: '#1a0800', textShadow: '0 1px 3px rgba(255,255,255,0.2)', marginBottom: '0.5em' }}>
            <Link to="/testimony" style={{ color: '#1a0800', textDecoration: 'none' }}>{t('carpenter.testimony_link')}</Link>
          </h2>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 500, color: '#2a1000', maxWidth: 600, margin: '0 auto' }}>
            {t('carpenter.testimony_text')}
          </p>
        </W>
      </section>

      {/* ── HISTORY ── */}
      <section style={{ background: 'linear-gradient(180deg,#FFB700 0%,rgba(10,5,0,0.88) 100%)', backgroundImage: `url(${img('2025/10/lumber-84678_1920-1-rotated.jpg')})`, backgroundSize: 'cover', backgroundBlendMode: 'multiply', padding: '2em', textAlign: 'center' }}>
        <a href="#Portas" className="btn-gold">{t('carpenter.to_doors')}</a>
      </section>

      <section id="Davi" className="section-wood" style={{ textAlign: 'center', padding: '3em 2em 1em' }}>
        <FadeIn>
          <h2 className="gold-title-dark">{t('carpenter.history_title')}</h2>
        </FadeIn>
        <div className="gold-divider" />
      </section>

      <section className="section-wood" style={{ padding: '0 2em 4em' }}>
        <W>
          <div className="two-col">
            <div>
              <h2 className="playfair-subtitle">{t('carpenter.history_subtitle')}</h2>
              <p className="playfair-body">{t('carpenter.history_text1')}</p>
              <p className="playfair-body">{t('carpenter.history_text2')}</p>
              <p className="playfair-body">{t('carpenter.history_text3')}</p>
              <p className="playfair-body">{t('carpenter.history_text4')}</p>
              <p className="playfair-body">{t('carpenter.history_text5')}</p>
              <p className="playfair-body">With her came messages of spiritual strength, protection for home and family, wisdom to discern the world, plans for prayer, life strategies, and guidance for spiritual battles.</p>
              <p className="bible-verse">The "3F" mark brings a silent reminder: The "F" is incomplete, because your obedience completes the mark. God will do everything for you, except your part.</p>
            </div>
            <div>
              <img src={img('2025/11/Kingdom-Cross-17-747x1024.png')} alt="Kingdom Cross" style={{ filter: 'sepia(10%) brightness(0.9)', boxShadow: '0 0 40px rgba(212,175,55,0.1)' }} />
              <p className="playfair-body" style={{ fontFamily: "'Cinzel', serif", fontSize: 16, textShadow: '1px 1px 4px #000', marginTop: '1em' }}>
                Now, the time is near for the KC 3F 00/01 to reach the world and the one she was meant for.
              </p>
              <p className="playfair-body" style={{ fontFamily: "'Cinzel', serif", fontSize: 16, textShadow: '1px 1px 4px #000' }}>
                Once his own healing is complete, the carpenter will release them, so that each cross may find the soul she was created to reach.
              </p>
            </div>
          </div>
        </W>
      </section>

      {/* ── KC 3F ── */}
      <div className="btn-center section-wood">
        <a href="#Portas" className="btn-gold">{t('carpenter.to_doors')}</a>
      </div>

      <section id="Cruz" className="section-wood" style={{ textAlign: 'center', padding: '3em 2em 1em' }}>
        <FadeIn>
          <h2 className="gold-title-dark">{t('carpenter.kc_title')}</h2>
        </FadeIn>
        <div className="gold-divider" />
        <p className="playfair-body" style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>{t('carpenter.kc_promise')}</p>
      </section>

      {/* ── GLOW BUTTON ── */}
      <section className="glow-section">
        <Link to="/series" className="btn-gold btn-gold-pulse" style={{ fontSize: 20, padding: '18px 40px' }}>
          {t('carpenter.select_kc')}
        </Link>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="section-wood" style={{ textAlign: 'center', padding: '4em 2em' }}>
        <FadeIn>
          <h2 className="gold-title-dark">
            <Link to="/formulario" style={{ color: '#D1A412', textDecoration: 'none' }}>{t('carpenter.call_title')}</Link>
          </h2>
        </FadeIn>
        <div className="gold-divider" />
        <p className="playfair-body" style={{ maxWidth: 500, margin: '0 auto 1.5em', textAlign: 'center' }}>{t('carpenter.coming_soon')}</p>
        <p className="playfair-body" style={{ maxWidth: 500, margin: '0 auto 2em', textAlign: 'center' }}>{t('carpenter.coming_soon2')}</p>
        <a href="#principio" className="btn-gold">{t('nav.kc3f')}</a>
      </section>

    </main>
  )
}
