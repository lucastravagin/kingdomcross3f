import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import FadeIn from '../components/FadeIn'

const img = (p) => `/uploads/${p}`

const W = ({ children, style }) => (
  <div style={{ maxWidth: 1200, margin: '0 auto', ...style }}>{children}</div>
)

const Chapter = ({ num, title, bg, overlay = 'rgba(0,0,0,0.7)' }) => (
  <div style={{ background: bg ? `linear-gradient(180deg,${overlay} 0%,${overlay} 100%), url(${bg})` : undefined, backgroundSize: 'cover', backgroundBlendMode: bg ? 'multiply' : undefined, padding: '3em 2em', textAlign: 'center' }}>
    <div style={{ fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: '0.3em', color: 'rgba(212,175,55,0.6)', textTransform: 'uppercase', marginBottom: '0.4em' }}>
      {num}
    </div>
    <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(22px,3vw,38px)', fontWeight: 600, color: '#D1A412', textShadow: '0 0 25px rgba(196,167,9,0.5)', margin: 0 }}>
      {title}
    </h2>
    <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg,transparent,rgba(212,175,55,0.5),transparent)', margin: '1em auto 0' }} />
  </div>
)

export default function Testimony() {
  const { t } = useTranslation()

  return (
    <main>

      {/* ── HERO ── */}
      <section
        className="hero-section"
        id="Inicial"
        style={{ backgroundImage: `url(${img('2025/10/ai-generated-8968417_1920.jpg')})`, minHeight: '70vh' }}
      >
        <FadeIn>
          <h2 className="gold-title">The Testimony Behind The Kingdom Cross</h2>
        </FadeIn>
        <div className="gold-divider" style={{ margin: '1em auto' }} />
        <p className="italic-hero">A true story. A calling. A mission.</p>
        <div className="hero-scroll" />
      </section>

      {/* ── CHAPTER 1: Before ── */}
      <Chapter
        num="Chapter I"
        title="A Carpenter of the Soul"
        bg={img('2025/10/lumber-84678_1920-1-rotated.jpg')}
        overlay="rgba(10,5,0,0.88)"
      />

      <section className="section-wood" style={{ padding: '3em 2em' }}>
        <W>
          <div className="two-col">
            <div>
              <p className="playfair-body">I am not a pastor.<br />I am not perfect. I'm just an ordinary man. A sinner. A father. A husband. A carpenter of the soul…<br />But I carry a cross in my hands, and another in my heart.<br />And I keep walking…<br />With love…</p>
              <p className="playfair-body">For you. <br />For the Kingdom.<br />And for Christ, the Carpenter who found me.</p>
              <p className="playfair-body">One day, I asked God for proof. Not proof for the intellect. I wanted to <em>experience</em> His existence. I wanted to <em>feel</em> His presence.</p>
              <p className="playfair-body">For years, I read the Bible. I studied. I taught.</p>
              <p className="playfair-body">But something was missing.<br />The encounter was missing.<br />That moment when God is not just <em>spoken of</em>, but <em>lived</em>.</p>
              <p className="playfair-body">I was living one of the happiest moments of my life:<br />With my wife and son, without TV, internet, or cell phone.<br />And right there… everything changed.</p>
              <p className="playfair-body">Awake, next to my wife, praying just to fall asleep… He came.</p>
              <p className="playfair-body">My tears revealed my sins, the ones I already knew…<br />And even those hidden deep in my heart that I didn't know existed.</p>
              <p className="playfair-body">And despite the weight of all my failures,<br />I felt the greatest joy of my life.</p>
              <p className="playfair-body">At a distance I can't explain, I saw His golden Kingdom.<br />In the midst of my tears… and the greatest Love I have ever felt.<br />That Love overflowed from Him to me…<br />And I still feel it today.</p>
            </div>
            <div>
              <p className="playfair-body">Yes… I love you in Christ Jesus.<br />Even without knowing you, I feel your pain. I understand your search.</p>
              <div className="pull-quote">
                You're not the one searching for God.<br />He's the one searching for you.
              </div>
              <p className="playfair-body">In that strange, beautiful, and paradoxical feeling of pain and Love,<br />He spoke to me… I didn't hear His voice.<br />But I understood every word:</p>
              <p className="bible-verse">"My son… you still have so much to learn."</p>
              <img src={img('2025/11/Eu-ia-683x1024.png')} alt="The Carpenter" style={{ filter: 'sepia(15%) brightness(0.85)', boxShadow: '0 0 40px rgba(212,175,55,0.1)', marginTop: '1.5em' }} />
            </div>
          </div>
        </W>
      </section>

      {/* ── CHAPTER 2: The Encounter ── */}
      <Chapter
        num="Chapter II"
        title="January 22, 2025"
        bg={img('2025/10/lumber-84678_1920-1-rotated.jpg')}
        overlay="rgba(30,15,0,0.82)"
      />

      <section className="section-wood" style={{ padding: '3em 2em' }}>
        <W>
          <div className="two-col">
            <div>
              <h2 className="playfair-subtitle">You already know Christ.</h2>
              <p className="playfair-body">That's why you're here.<br />Because you're someone like me…<br />Trying to become a better father, a more present mother, a more loving husband or wife…</p>
              <p className="playfair-body">A person who reflects Jesus more.</p>
              <p className="playfair-body">You desire an encounter with the Father.<br />And you know that if it happens, it's only because He allowed it.<br />You know that nothing comes from our own merit.</p>
              <div className="pull-quote">All glory is His.</div>
              <p className="playfair-body">Salvation isn't about worthiness, yours or mine.</p>
              <p className="playfair-body">It is grace.<br />It is Love.<br />It is the result of Christ's sacrifice on the Cross.</p>
              <p className="playfair-body">That's why I invite you to walk this journey alongside me.<br />If Christ allows, through us, more sons and daughters will be rescued.<br />More souls will be reached.<br />Not out of obligation…</p>
              <p className="playfair-body"><strong style={{ color: '#D1A412' }}>But out of love.</strong></p>
              <p className="bible-verse">Matthew 7:16-20: "By their fruit you will recognize them. Do people pick grapes from thornbushes, or figs from thistles? Likewise, every good tree bears good fruit, but a bad tree bears bad fruit."</p>
            </div>
            <div>
              <img src={img('2025/11/Kingdom-Cross-27-747x1024.png')} alt="Kingdom Cross" style={{ filter: 'sepia(10%) brightness(0.88)', boxShadow: '0 0 40px rgba(212,175,55,0.1)' }} />
              <p className="playfair-body" style={{ marginTop: '1.5em' }}>I remained a long time in the Father's presence.<br />And believe me… it wasn't enough.<br />I wanted more.<br />I still want more.<br /><em>(Tears come to my eyes as I try to describe the indescribable to you.)</em></p>
              <p className="playfair-body">My wife and son recorded over an hour and forty minutes of video at my request.</p>
              <p className="bible-verse">1 Corinthians 1:18: "For the message of the cross is foolishness to those who are perishing, but to us who are being saved it is the power of God."</p>
              <div className="pull-quote" style={{ fontSize: 'clamp(16px,2vw,22px)' }}>
                The Proof of the Existence of God.
              </div>
              <p className="playfair-body"><strong style={{ color: '#D1A412' }}>From that day on, nothing was the same.</strong></p>
            </div>
          </div>
        </W>
      </section>

      {/* ── CHAPTER 3: The Kingdom Cross is Born ── */}
      <Chapter
        num="Chapter III"
        title="The Kingdom Cross is Born"
        bg={img('2025/10/lumber-84678_1920-1-rotated.jpg')}
        overlay="rgba(10,5,0,0.88)"
      />

      <section className="section-wood" style={{ padding: '3em 2em' }}>
        <W>
          <div className="two-col">
            <div>
              <p className="playfair-body">But the world and its pain came back…<br />The affliction, the silent guilt, the hidden failures.</p>
              <p className="playfair-body">And that's when the <strong style={{ color: '#D1A412' }}>Kingdom Cross</strong> was born.</p>
              <p className="playfair-body">She came to mind shortly after that encounter.<br />She was born out of what hurt.</p>
              <p className="playfair-body">Out of the hidden tears soaked into my pillow.<br />Out of repeated mistakes.<br />Out of battles only God knew.</p>
              <p className="playfair-body">The first Cross was crafted through tears, prayer, and worship.<br />And through <strong style={{ color: '#D1A412' }}>her</strong>, with fear and reverence, I say: a spiritual delivery method was revealed to me:</p>
              <div style={{ border: '1px solid rgba(212,175,55,0.25)', borderRadius: 4, padding: '1.5em', background: 'rgba(212,163,18,0.04)', marginTop: '1em' }}>
                {['Spiritual Strengthening', 'Protection for the Home and Family', 'Discernment of the World', 'Life Strategy', 'Spiritual Warfare'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8em', padding: '0.6em 0', borderBottom: i < 4 ? '1px solid rgba(212,175,55,0.1)' : 'none' }}>
                    <span style={{ fontFamily: "'Cinzel', serif", fontSize: 13, color: '#D1A412', minWidth: 20 }}>{i + 1}</span>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, color: '#e8dcc8' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src={img('2025/11/Kingdom-Cross-29-747x1024.png')} alt="Kingdom Cross" style={{ filter: 'sepia(10%) brightness(0.88)', boxShadow: '0 0 40px rgba(212,175,55,0.1)' }} />
              <p className="playfair-body" style={{ marginTop: '1.5em' }}>The next seven Crosses were born with the same surrender.<br />But none like the first.</p>
              <p className="playfair-body">And so, with wood, worship, and surrender,<br />I began to understand the mission behind <strong style={{ color: '#D1A412' }}>Kingdom Cross 3F</strong>.</p>
              <p className="bible-verse">Romans 7:19: "For I do not do the good I want to do, but the evil I do not want to do—this I keep on doing."</p>
              <p className="playfair-body"><strong style={{ color: '#D1A412' }}>Come walk with me.</strong></p>
              <p className="playfair-body">The journey is long. But He never leaves us alone.</p>
            </div>
          </div>
        </W>
      </section>

      {/* ── CHAPTER 4: Come Walk With Me ── */}
      <Chapter
        num="Chapter IV"
        title="Come Walk With Me"
        bg={img('2025/10/lumber-84678_1920-1-rotated.jpg')}
        overlay="rgba(10,5,0,0.88)"
      />

      <section className="section-wood" style={{ padding: '3em 2em' }}>
        <W>
          <div className="two-col">
            <div>
              <p className="playfair-body"><strong style={{ color: '#D1A412' }}>You…</strong></p>
              <p className="playfair-body">And this simple carpenter, who writes with all his heart…</p>
              <p className="playfair-body"><strong style={{ color: '#D1A412' }}>Through Christ…</strong></p>
              <p className="playfair-body">Can be used to reach those who need God.</p>
              <p className="playfair-body">Through your pain, your search, your love…<br /><strong style={{ color: '#D1A412' }}>We, together… will deliver Love.</strong><br />And present Jesus the way <strong style={{ color: '#D1A412' }}>He desires to be presented</strong>.</p>
              <p className="playfair-body">And in doing so, we, too, will be transformed.</p>
              <div className="cross-divider">✦ ✦ ✦</div>
              <p className="playfair-body">Thank you for walking with me.<br />Thank you for the challenge of building this site.<br />It led me through many pages of the Bible, through worship, through prayer.</p>
              <p className="playfair-body">Just like the Kingdom Cross, this site was made in surrender, and for you.<br />May she lead you to Christ, as it has led me.</p>
              <p className="bible-verse">May God bless you… In the name of Jesus, the Christ.</p>
            </div>
            <div>
              <p className="playfair-body">She carries a sign.</p>
              <p className="playfair-body">A reminder that hope is still alive.<br />That Jesus lives and transforms.<br />That God is still searching for His children.</p>
              <p className="playfair-body">Come with me.</p>
              <p className="playfair-body">Not to admire a Cross on a shelf…<br />But to carry this mission… with your love, your scars, and your faith.</p>
              <div className="pull-quote">
                The KC is not about wood.<br />She is about the Carpenter who is calling you, too.
              </div>
              <p className="playfair-body"><strong style={{ color: '#D1A412' }}>The Kingdom Cross is not mine. And not yours.</strong><br />Once you become part of this… she becomes God's mission, entrusted to us.</p>
              <p className="playfair-body">Let us, together, reach our brothers and sisters.<br />Rescue the lost.<br />Touch those living in silence, in pain, in hunger, affliction, and sin.</p>
            </div>
          </div>
        </W>
      </section>

      {/* ── PICK UP THE CROSS — full width impact ── */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${img('2025/11/ChatGPT-Image-8-de-nov.-de-2025-00_12_32-683x1024.png')})`, minHeight: '80vh', backgroundPosition: 'center top' }}
      >
        <FadeIn>
          <h2 className="gold-title">Pick Up the Cross and Follow Jesus</h2>
        </FadeIn>
        <div className="gold-divider" style={{ margin: '1em auto' }} />
        <p className="italic-hero" style={{ maxWidth: 500 }}>
          Sometimes, all it takes is one moment.<br />
          One phrase, one image, one spark of faith…<br />
          And suddenly, the heart knows: it's time.
        </p>
        <p className="italic-hero" style={{ maxWidth: 500, marginTop: '1em' }}>
          A carpenter's scars…<br />
          A cross made in prayer…<br />
          And a God who's still calling you by name.
        </p>
        <div className="gold-divider" style={{ margin: '2em auto' }} />
        <FadeIn>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(18px,2.5vw,32px)', fontWeight: 600, color: '#D1A412', textShadow: '0 0 25px rgba(196,167,9,0.6)', marginBottom: '1.5em' }}>
            <Link to="/formulario" style={{ color: '#D1A412', textDecoration: 'none' }}>
              My heart has decided… I'm ready to choose my cross.
            </Link>
          </h2>
        </FadeIn>
        <Link to="/formulario" className="btn-gold btn-gold-pulse" style={{ fontSize: 18, padding: '16px 36px' }}>
          Request a Cross
        </Link>
      </section>

      {/* ── NAVIGATION ── */}
      <section className="section-wood" style={{ textAlign: 'center', padding: '3em 2em' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1em', flexWrap: 'wrap' }}>
          <Link to="/" className="btn-gold" style={{ fontSize: 15, padding: '12px 24px' }}>The Carpenter</Link>
          <Link to="/series" className="btn-gold" style={{ fontSize: 15, padding: '12px 24px' }}>Series</Link>
          <Link to="/kingdom-cross-3f" className="btn-gold" style={{ fontSize: 15, padding: '12px 24px' }}>Kingdom Cross 3F</Link>
        </div>
      </section>

    </main>
  )
}
