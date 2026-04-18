import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import FadeIn from '../components/FadeIn'

const img = (p) => `/uploads/${p}`

const doors = [
  { anchor: '#primeiro', key: 'door_rules',  bg: img('2025/11/Kingdom-Cross-20.png') },
  { anchor: '#segundo',  key: 'door_series', bg: img('2025/11/Kingdom-Cross-21.png') },
  { anchor: '#terceiro', key: 'door_first',  bg: img('2025/11/Kingdom-Cross-23.png') },
  { anchor: '#quatro',   key: 'door_choose', bg: img('2025/11/12.png') },
]

const rules = [
  { num: '1', text: 'Never reveal the message inside \u201cyour\u201d Kingdom Cross or the KC. It was revealed only to you, at that exact moment, with an eternal purpose. If you wish to share, share the testimony, not the message itself.', verse: 'Mt 7:6 \u201cDo not give what is holy to dogs; do not throw your pearls before swine.\u201d' },
  { num: '2', text: 'The box and the instructions are part of the Kingdom Cross. They were made with the same care, prayer, and intention. Keep them together, exactly as you received them. Never photograph \u201cyour\u201d KC. Never post it online.', verse: 'Mt 6:3 \u201cBut when you give, do not let your left hand know what your right hand is doing.\u201d' },
  { num: '3', text: 'The Kingdom Cross is not an amulet. She has no power in herself. She is a sign, a reminder of what Jesus has already done for you and for me. Let your heart rest at the feet of the Cross.', verse: 'Gal 6:14 \u201cThe cross of Christ\u2026 by which the world has been crucified to me, and I to the world.\u201d' },
  { num: '4', text: 'Once you\u2019ve been touched by the message, your mission begins. You have two paths: a) Sell the KC for more than your contribution, and donate the full amount to a trusted Christian ministry. b) Gift her to someone whose heart you feel is ready for that message.', verse: 'Mt 25:21 \u201cWell done, good and faithful servant.\u201d' },
  { num: '5', text: 'The KC must continue her journey. She is not meant to remain on an altar or a shelf. She was born to move, to bless, to awaken, to change lives.', verse: 'Mk 16:15 \u201cGo into all the world and preach the gospel to all creation.\u201d' },
  { num: '6', text: 'Do not speak about the carpenter of the KC. He must remain anonymous. It is not about who crafted it, but about Who transforms through her.', verse: 'Jn 15:8 \u201cThis is to my Father\u2019s glory, that you bear much fruit, showing yourselves to be My disciples.\u201d' },
  { num: '7', text: 'The KC is not yours to keep forever. She was entrusted to you for a time, for a purpose. When that purpose is fulfilled, release her.', verse: 'Mt 16:24 \u201cIf anyone would come after Me, let him deny himself and take up his cross and follow Me.\u201d' },
]

const firstCrosses = [
  { code: 'KC 00/01', theme: 'Peace', focus: 'Family', request: '"To be less angry and demanding with my son and my parents. I feel a storm of anger within me, and I want to learn to master it with grace."' },
  { code: 'KC 01/01', theme: 'Transformation', focus: 'Faith', request: '"Deliver me from vanity and fill me with Your presence, Lord."' },
  { code: 'KC 01/02', theme: 'Faith', focus: 'Strength', request: '"Help me not to drift away from You, Lord, for that breaks my heart."' },
  { code: 'KC 01/03', theme: 'Agnostic / Atheist', focus: 'The conflict between the carnal and the spiritual', request: '"Reveal Yourself to me, God, through history, philosophy, and science."' },
  { code: 'KC 01/04', theme: 'Forgiveness', focus: 'Learning to forgive myself', request: '"Teach me to forgive myself. I have cried many nights for my own mistakes."' },
  { code: 'KC 01/05', theme: 'Presence of God', focus: 'Feeling His presence again', request: '"Five days after January 22, 2025, I fell back into the world. I ask once more to live in His presence."' },
  { code: 'KC 01/06', theme: 'Provision / Time', focus: 'Trusting God as the provider', request: '"Teach me to see that everything I have belongs to You. Free me from the fear of lack and the pride of abundance."' },
  { code: 'KC 01/07', theme: 'Humility', focus: 'Letting go of arrogance', request: '"Everything I have done or known means nothing to God. Help me understand that I do not deserve You, except through the sacrifice of Christ."' },
]

const seriesTable = [
  { code: 'KC 0/01',  qty: '1 unit',       value: '—',       purpose: 'Founding Cross — The first KC, symbol of the Kingdom.' },
  { code: 'KC 01/01', qty: '7 units',       value: '—',       purpose: 'Covenant Cross — The seven pillars of global restoration.' },
  { code: 'KC 02/01', qty: '77 units',      value: '$77,777', purpose: 'Flame Cross — Supporting missions and spiritual leaders.' },
  { code: 'KC 03/01', qty: '77,777 units',  value: '$777.77', purpose: 'Cross of Faith — Multiplication of seeds and expansion of the Kingdom.' },
  { code: 'KC-3',     qty: 'Open series',   value: '$77.77',  purpose: 'Family Cross — Unity, purpose, and heritage.' },
  { code: 'KC-3F',    qty: 'Open series',   value: '$37.77',  purpose: 'Grace Cross — Accessible symbol of faith for all.' },
  { code: 'KC-7',     qty: 'Open series',   value: '$17.77',  purpose: 'Mission Cross — Each one blesses lives in active mission.' },
]

const W = ({ children, style }) => (
  <div style={{ maxWidth: 1200, margin: '0 auto', ...style }}>{children}</div>
)

export default function Series() {
  const { t } = useTranslation()

  return (
    <main>

      {/* ── HERO ── */}
      <section id="começo" className="hero-section" style={{ backgroundImage: `url(${img('2025/11/Mao-e-cruz.png')})` }}>
        <FadeIn>
          <h2 className="gold-title">{t('series.hero_title')}</h2>
        </FadeIn>
        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(16px,2vw,24px)', fontWeight: 'normal', color: 'rgba(243,243,243,0.88)', textShadow: '0 0 12px rgba(0,0,0,0.8)', textAlign: 'center', maxWidth: 600 }}>
          {t('series.hero_subtitle')}
        </p>
        <div className="gold-divider" style={{ margin: '1.5em auto' }} />
        <p style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(13px,1.5vw,18px)', color: '#fff', textAlign: 'center', maxWidth: 700, fontStyle: 'italic' }}>
          {t('series.hero_verse')}
        </p>
        <div className="hero-scroll" />
      </section>

      {/* ── DOORS TITLE ── */}
      <section id="inicio" className="section-wood" style={{ textAlign: 'center', padding: '3.5em 2em' }}>
        <FadeIn>
          <h2 className="gold-title-dark">{t('series.doors_title')}</h2>
        </FadeIn>
        <div className="gold-divider" />
      </section>

      {/* ── DOOR CARDS ── */}
      <div className="doors-row">
        {doors.map((d, i) => (
          <a key={i} href={d.anchor} className="door-card" style={{ backgroundImage: `url(${d.bg})` }}>
            <h2>{t(`series.${d.key}`)}</h2>
          </a>
        ))}
      </div>

      {/* ── RULES ── */}
      <div className="btn-center section-wood">
        <a href="#inicio" className="btn-gold">{t('series.to_doors')}</a>
      </div>

      <section id="primeiro" className="section-wood" style={{ textAlign: 'center', padding: '3em 2em 1em' }}>
        <FadeIn>
          <h2 className="gold-title-dark">{t('series.rules_title')}</h2>
        </FadeIn>
        <div className="gold-divider" />
      </section>

      <section className="section-wood" style={{ padding: '0 2em 4em' }}>
        <W>
          <div className="two-col">
            <div>
              <h2 className="playfair-subtitle" style={{ marginBottom: '1.5em' }}>One Symbol. One Kingdom. One Message.</h2>
              {rules.map((r) => (
                <div key={r.num} className="rule-card">
                  <div className="rule-number">{r.num}</div>
                  <p className="rule-text">{r.text}</p>
                  <p className="rule-verse">{r.verse}</p>
                </div>
              ))}
            </div>
            <div>
              <img src={img('2025/11/ChatGPT-Image-4-de-nov.-de-2025-08_36_31-683x1024.png')} alt="Rules" style={{ filter: 'sepia(10%) brightness(0.88)', boxShadow: '0 0 40px rgba(0,0,0,0.6)' }} />
              <div style={{ marginTop: '2em' }}>
                <h2 className="playfair-subtitle">{t('series.golden_rule_title')}</h2>
                <p className="playfair-body">{t('series.golden_rule_text')}</p>
                <div className="cross-divider">✦</div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 'normal', color: '#D1A412', textShadow: '0 0 14px rgba(196,167,9,0.4)' }}>
                  {t('series.how_to_title')}
                </h2>
                <p className="playfair-body">{t('series.how_to_text')}</p>
              </div>
            </div>
          </div>
        </W>
      </section>

      {/* ── THEMES ── */}
      <section className="section-transition-gold" style={{ textAlign: 'center', padding: '2em' }}>
        <a href="#inicio" className="btn-gold">{t('series.to_doors')}</a>
        <FadeIn>
          <h2 id="segundo" className="gold-title-dark" style={{ marginTop: '1.5em' }}>{t('series.themes_title')}</h2>
        </FadeIn>
        <div className="gold-divider" />
      </section>

      <section className="section-gold-glow" style={{ padding: '3em 2em' }}>
        <W>
          <div className="two-col">
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 'normal', color: '#1a0800', textShadow: '0 0 20px rgba(0,0,0,0.2)' }}>
                {t('series.sacred_echo')}
              </h2>
              <img src={img('2025/11/ax-595976_1920-683x1024.jpg')} alt="Sacred Echo" style={{ width: '100%', borderRadius: 3, boxShadow: '0 8px 30px rgba(0,0,0,0.4)', filter: 'sepia(5%)' }} />
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 500, color: '#1a0800', marginTop: '1em', lineHeight: '1.7em' }}>
                {t('series.sacred_echo_text')}
              </p>
            </div>
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 'normal', color: '#1a0800' }}>
                {t('series.choose_theme')}
              </h2>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 500, color: '#2a1000', marginBottom: '1.2em' }}>
                {t('series.choose_theme_text')}
              </p>
              <div className="themes-grid">
                {t('series.themes', { returnObjects: true }).map((theme, i) => (
                  <div key={i} className="theme-chip" style={{ color: '#1a0800', borderColor: 'rgba(100,60,0,0.35)', background: 'rgba(100,60,0,0.08)' }}>
                    {theme}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </W>
      </section>

      {/* ── FIRST CROSSES ── */}
      <section className="section-transition-fade" style={{ textAlign: 'center', padding: '2em' }}>
        <a href="#inicio" className="btn-gold">{t('series.to_doors')}</a>
      </section>

      <section id="terceiro" className="section-wood" style={{ textAlign: 'center', padding: '3em 2em 1em' }}>
        <FadeIn>
          <h2 className="gold-title-dark">{t('series.first_crosses_title')}</h2>
        </FadeIn>
        <div className="gold-divider" />
      </section>

      <section className="section-wood" style={{ padding: '0 2em 4em' }}>
        <W>
          <div className="two-col">
            <div>
              <h2 className="playfair-subtitle" style={{ marginBottom: '1.5em' }}>{t('series.first_eight_title')}</h2>
              {firstCrosses.map((c, i) => (
                <div key={i} className="cross-entry">
                  <div className="cross-code">{c.code} — {c.theme}</div>
                  <p className="playfair-body" style={{ fontSize: 15, marginBottom: 0 }}>
                    <span style={{ color: 'rgba(212,175,55,0.7)', fontSize: 13 }}>Focus: </span>{c.focus}
                  </p>
                  <p className="playfair-body" style={{ fontSize: 15, fontStyle: 'italic', color: 'rgba(232,220,200,0.75)', marginBottom: 0 }}>
                    {c.request}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <p className="playfair-body" style={{ fontSize: 16, marginBottom: '1.5em' }}>
                Each cross is handcrafted from different types of rustic wood, supported by a wooden base, each with its own natural story. Hidden within her foundation lies a message, revealed only to those who hold her with faith.
              </p>
              <img src={img('2025/11/Kingdom-Cross-22-747x1024.png')} alt="Kingdom Cross" style={{ filter: 'sepia(10%) brightness(0.9)', boxShadow: '0 0 40px rgba(212,175,55,0.1)' }} />
              <p className="playfair-body" style={{ fontFamily: "'Cinzel', serif", fontSize: 15, textAlign: 'center', marginTop: '1em', color: 'rgba(232,220,200,0.8)' }}>
                The handwritten devotions of the first eight Kingdom Crosses carry more than words; they hold his journey of redemption.
              </p>
              <p style={{ fontFamily: "'Cinzel', serif", fontSize: 11, color: 'rgba(212,175,55,0.5)', textAlign: 'right', letterSpacing: '0.1em' }}>Written in English</p>
            </div>
          </div>
        </W>
      </section>

      {/* ── TESTIMONY LINK ── */}
      <section style={{ background: 'linear-gradient(180deg,rgba(10,5,0,0.88) 0%,#fff 100%)', backgroundImage: `url(${img('2025/10/lumber-84678_1920-1-rotated.jpg')})`, backgroundSize: 'cover', backgroundBlendMode: 'multiply', padding: '3em 2em', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(20px,3vw,33px)', fontWeight: 400, color: '#f0e6cc', textShadow: '0 0 20px rgba(0,0,0,0.8)' }}>
          <Link to="/testimony" style={{ color: '#D1A412', textDecoration: 'none' }}>{t('series.testimony_link')}</Link>
        </h2>
      </section>

      <section style={{ background: 'linear-gradient(180deg,rgba(255,255,255,0.1) 0%,rgba(10,5,0,0.88) 100%)', backgroundImage: `url(${img('2025/10/lumber-84678_1920-1-rotated.jpg')})`, backgroundSize: 'cover', backgroundBlendMode: 'multiply', padding: '2em', textAlign: 'center' }}>
        <a href="#inicio" className="btn-gold">{t('series.to_doors')}</a>
      </section>

      {/* ── CHOOSE ── */}
      <section id="quatro" className="section-wood" style={{ textAlign: 'center', padding: '4em 2em' }}>
        <FadeIn>
          <h2 className="gold-title-dark">{t('series.find_title')}</h2>
        </FadeIn>
        <div className="gold-divider" />
        <FadeIn>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(20px,3vw,42px)', fontWeight: 600, color: '#E1AF0B', textShadow: '0 0 25px rgba(196,167,9,0.6)', marginBottom: '0.5em' }}>
            <Link to="/formulario" style={{ color: '#E1AF0B', textDecoration: 'none' }}>{t('series.pray_choose')}</Link>
          </h2>
        </FadeIn>
        <p className="playfair-body" style={{ maxWidth: 500, margin: '0 auto 2em', textAlign: 'center' }}>{t('series.each_series')}</p>
      </section>

      {/* ── SERIES TABLE ── */}
      <section className="section-wood" style={{ padding: '0 2em 4em' }}>
        <W>
          <div className="two-col">
            <div>
              <h2 className="playfair-subtitle" style={{ marginBottom: '1em' }}>
                Some crosses are still on their way, fulfilling what Heaven has written for them.
              </h2>
              <img src={img('2025/11/11-747x1024.png')} alt="Kingdom Cross" style={{ filter: 'sepia(10%) brightness(0.88)', boxShadow: '0 0 40px rgba(212,175,55,0.1)' }} />
            </div>
            <div>
              <h2 className="playfair-subtitle" style={{ marginBottom: '1em' }}>{t('series.series_table_title')}</h2>
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr><th>KC Series</th><th>Quantity</th><th>Value (USD)</th><th>Spiritual Purpose</th></tr>
                  </thead>
                  <tbody>
                    {seriesTable.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: '#D1A412', fontFamily: "'Cinzel', serif", fontSize: 13 }}>{row.code}</strong></td>
                        <td style={{ fontSize: 14 }}>{row.qty}</td>
                        <td style={{ fontSize: 14, color: '#D1A412' }}>{row.value}</td>
                        <td style={{ fontSize: 14 }}>{row.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </W>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="section-wood" style={{ textAlign: 'center', padding: '4em 2em' }}>
        <Link to="/kingdom-cross-3f" className="btn-gold" style={{ marginBottom: '2em', display: 'inline-block' }}>Kingdom Cross 3F Page</Link>
        <div className="gold-divider" />
        <FadeIn>
          <h2 className="gold-title-dark">
            <Link to="/formulario" style={{ color: '#D1A412', textDecoration: 'none' }}>{t('series.choose_yours')}</Link>
          </h2>
        </FadeIn>
        <a href="#começo" className="btn-gold" style={{ marginTop: '1em' }}>{t('nav.kc3f')}</a>
      </section>

    </main>
  )
}
