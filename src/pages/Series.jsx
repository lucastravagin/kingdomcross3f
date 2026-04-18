import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import FadeIn from '../components/FadeIn'

const img = (p) => `/uploads/${p}`
const I = ({ children, style }) => <div className="inner" style={style}>{children}</div>

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
  { code: 'KC 00/01', theme: 'Peace',            focus: 'Family',                                      request: '"To be less angry and demanding with my son and my parents. I feel a storm of anger within me, and I want to learn to master it with grace."' },
  { code: 'KC 01/01', theme: 'Transformation',   focus: 'Faith',                                       request: '"Deliver me from vanity and fill me with Your presence, Lord."' },
  { code: 'KC 01/02', theme: 'Faith',             focus: 'Strength',                                    request: '"Help me not to drift away from You, Lord, for that breaks my heart."' },
  { code: 'KC 01/03', theme: 'Agnostic/Atheist',  focus: 'The conflict between carnal and spiritual',   request: '"Reveal Yourself to me, God, through history, philosophy, and science."' },
  { code: 'KC 01/04', theme: 'Forgiveness',       focus: 'Learning to forgive myself',                  request: '"Teach me to forgive myself. I have cried many nights for my own mistakes."' },
  { code: 'KC 01/05', theme: 'Presence of God',   focus: 'Feeling His presence again',                  request: '"Five days after January 22, 2025, I fell back into the world. I ask once more to live in His presence."' },
  { code: 'KC 01/06', theme: 'Provision / Time',  focus: 'Trusting God as the provider',               request: '"Teach me to see that everything I have belongs to You. Free me from the fear of lack and the pride of abundance."' },
  { code: 'KC 01/07', theme: 'Humility',          focus: 'Letting go of arrogance',                     request: '"Everything I have done or known means nothing to God. Help me understand that I do not deserve You, except through the sacrifice of Christ."' },
]

const seriesTable = [] // moved to i18n

export default function Series() {
  const { t } = useTranslation()

  return (
    <main>

      {/* HERO */}
      <section id="começo" className="hero-section" style={{ backgroundImage: `url(${img('2025/11/Mao-e-cruz.png')})` }}>
        <FadeIn><h2 className="title-hero">{t('series.hero_title')}</h2></FadeIn>
        <p className="hero-sub">{t('series.hero_subtitle')}</p>
        <div className="gold-divider" style={{ margin: '1.5em auto' }} />
        <p style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(12px,1.4vw,16px)', color: 'rgba(243,243,243,0.8)', textAlign: 'center', maxWidth: 680, fontStyle: 'italic' }}>
          {t('series.hero_verse')}
        </p>
        <div className="hero-scroll">▼</div>
      </section>

      {/* DOORS TITLE — dark */}
      <section id="inicio" className="section-dark" style={{ textAlign: 'center' }}>
        <FadeIn><h2 className="title-section">{t('series.doors_title')}</h2></FadeIn>
        <div className="gold-divider" />
      </section>

      {/* DOOR CARDS */}
      <div className="doors-row">
        {doors.map((d, i) => (
          <a key={i} href={d.anchor} className="door-card" style={{ backgroundImage: `url(${d.bg})` }}>
            <h2>{t(`series.${d.key}`)}</h2>
          </a>
        ))}
      </div>

      {/* RULES — dark */}
      <div className="btn-row section-dark"><a href="#inicio" className="btn-gold">{t('series.to_doors')}</a></div>

      <section id="primeiro" className="section-dark" style={{ textAlign: 'center', paddingBottom: '1em' }}>
        <FadeIn><h2 className="title-section">{t('series.rules_title')}</h2></FadeIn>
        <div className="gold-divider" />
      </section>

      <section className="section-dark" style={{ paddingTop: 0 }}>
        <I>
          <div className="two-col">
            <div>
              <h3 className="subtitle" style={{ marginBottom: '1.5em' }}>{t('series.rules_subtitle')}</h3>
              {rules.map((r) => (
                <div key={r.num} className="rule-card">
                  <div className="rule-num">{r.num}</div>
                  <p className="rule-text">{r.text}</p>
                  <p className="rule-verse">{r.verse}</p>
                </div>
              ))}
            </div>
            <div>
              <img src={img('2025/11/ChatGPT-Image-4-de-nov.-de-2025-08_36_31-683x1024.png')} alt="Rules" />
              <div style={{ marginTop: '2em' }}>
                <h3 className="subtitle">{t('series.golden_rule_title')}</h3>
                <p className="body-text">{t('series.golden_rule_text')}</p>
                <div className="cross-mark">✦</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 'normal', color: 'var(--gold)', marginBottom: '0.5em' }}>
                  {t('series.how_to_title')}
                </h3>
                <p className="body-text">{t('series.how_to_text')}</p>
              </div>
            </div>
          </div>
        </I>
      </section>

      {/* THEMES — cream (contraste máximo para lista) */}
      <div className="btn-row section-dark"><a href="#inicio" className="btn-gold">{t('series.to_doors')}</a></div>

      <section id="segundo" className="section-cream" style={{ textAlign: 'center', paddingBottom: '1em' }}>
        <FadeIn><h2 className="title-section">{t('series.themes_title')}</h2></FadeIn>
        <div className="gold-divider" />
      </section>

      <section className="section-cream" style={{ paddingTop: 0 }}>
        <I>
          <div className="two-col">
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 'normal', color: 'var(--text-cream)', marginBottom: '1em' }}>
                {t('series.sacred_echo')}
              </h3>
              <img src={img('2025/11/ax-595976_1920-683x1024.jpg')} alt="Sacred Echo" />
              <p className="body-text" style={{ marginTop: '1em', color: 'var(--text-cream)' }}>{t('series.sacred_echo_text')}</p>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 'normal', color: 'var(--text-cream)', marginBottom: '0.5em' }}>
                {t('series.choose_theme')}
              </h3>
              <p className="body-text" style={{ marginBottom: '1em', color: 'var(--text-cream)' }}>{t('series.choose_theme_text')}</p>
              <div className="themes-grid">
                {t('series.themes', { returnObjects: true }).map((theme) => (
                  <div key={theme} className="theme-chip" style={{ color: 'var(--text-cream)', borderColor: 'rgba(139,105,20,0.4)', background: 'rgba(139,105,20,0.07)' }}>{theme}</div>
                ))}
              </div>
            </div>
          </div>
        </I>
      </section>

      {/* FIRST CROSSES — dark */}
      <div className="btn-row section-dark"><a href="#inicio" className="btn-gold">{t('series.to_doors')}</a></div>

      <section id="terceiro" className="section-dark" style={{ textAlign: 'center', paddingBottom: '1em' }}>
        <FadeIn><h2 className="title-section">{t('series.first_crosses_title')}</h2></FadeIn>
        <div className="gold-divider" />
      </section>

      <section className="section-dark" style={{ paddingTop: 0 }}>
        <I>
          <div className="two-col">
            <div>
              <h3 className="subtitle" style={{ marginBottom: '1.5em' }}>{t('series.first_eight_title')}</h3>
              {firstCrosses.map((c, i) => (
                <div key={i} className="cross-entry">
                  <div className="cross-code">{c.code} — {c.theme}</div>
                  <p className="body-text" style={{ fontSize: 15, marginBottom: 0 }}>
                    <span style={{ color: 'rgba(200,150,12,0.65)', fontSize: 13 }}>Focus: </span>{c.focus}
                  </p>
                  <p className="body-text" style={{ fontSize: 15, fontStyle: 'italic', color: 'rgba(232,220,200,0.65)', marginBottom: 0 }}>{c.request}</p>
                </div>
              ))}
            </div>
            <div>
              <p className="body-text" style={{ fontSize: 16, marginBottom: '1.5em' }}>{t('series.first_crosses_desc')}</p>
              <img src={img('2025/11/Kingdom-Cross-22-747x1024.png')} alt="Kingdom Cross" />
              <p className="body-text" style={{ fontFamily: "'Cinzel', serif", fontSize: 14, textAlign: 'center', marginTop: '1em', color: 'rgba(232,220,200,0.7)' }}>{t('series.first_crosses_note')}</p>
              <p style={{ fontFamily: "'Cinzel', serif", fontSize: 11, color: 'rgba(200,150,12,0.45)', textAlign: 'right', letterSpacing: '0.1em' }}>{t('series.first_crosses_lang')}</p>
            </div>
          </div>
        </I>
      </section>

      {/* TESTIMONY LINK — mid */}
      <section className="section-mid" style={{ textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(18px,2.5vw,28px)', fontWeight: 400, color: 'var(--text-light)', marginBottom: '0.5em' }}>
          <Link to="/testimony">{t('series.testimony_link')}</Link>
        </h2>
        <div className="gold-divider" />
        <a href="#inicio" className="btn-gold">{t('series.to_doors')}</a>
      </section>

      {/* CHOOSE — dark */}
      <section id="quatro" className="section-dark" style={{ textAlign: 'center' }}>
        <FadeIn><h2 className="title-section">{t('series.find_title')}</h2></FadeIn>
        <div className="gold-divider" />
        <FadeIn>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(18px,2.8vw,38px)', fontWeight: 600, color: 'var(--gold-bright)', textShadow: '0 0 20px rgba(196,167,9,0.5)', marginBottom: '0.5em' }}>
            <Link to="/request">{t('series.pray_choose')}</Link>
          </h2>
        </FadeIn>
        <p className="body-text" style={{ maxWidth: 480, margin: '0 auto 2em', textAlign: 'center' }}>{t('series.each_series')}</p>
      </section>

      {/* SERIES TABLE — mid */}
      <section className="section-mid" style={{ paddingTop: '2em' }}>
        <I>
          <div className="two-col">
            <div>
              <h3 className="subtitle" style={{ marginBottom: '1em' }}>{t('series.table_subtitle')}</h3>
              <img src={img('2025/11/11-747x1024.png')} alt="Kingdom Cross" />
            </div>
            <div>
              <h3 className="subtitle" style={{ marginBottom: '1em' }}>{t('series.series_table_title')}</h3>
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr><th>{t('series.table_th_series')}</th><th>{t('series.table_th_qty')}</th><th>{t('series.table_th_value')}</th><th>{t('series.table_th_purpose')}</th></tr>
                  </thead>
                  <tbody>
                    {t('series.table_rows', { returnObjects: true }).map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--gold)', fontFamily: "'Cinzel', serif", fontSize: 13 }}>{row.code}</strong></td>
                        <td style={{ fontSize: 14 }}>{row.qty}</td>
                        <td style={{ fontSize: 14, color: 'var(--gold)' }}>{row.value}</td>
                        <td style={{ fontSize: 14 }}>{row.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </I>
      </section>

      {/* FINAL CTA — dark */}
      <section className="section-dark" style={{ textAlign: 'center' }}>
        <Link to="/kingdom-cross-3f" className="btn-gold" style={{ marginBottom: '2em', display: 'inline-block' }}>Kingdom Cross 3F Page</Link>
        <div className="gold-divider" />
        <FadeIn>
          <h2 className="title-section">
            <Link to="/request">{t('series.choose_yours')}</Link>
          </h2>
        </FadeIn>
        <a href="#começo" className="btn-gold" style={{ marginTop: '1em' }}>{t('nav.kc3f')}</a>
      </section>

    </main>
  )
}
