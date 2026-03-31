import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import HeroBlob from '../components/HeroBlob';
import '../App.css';

export default function Home() {
  return (
    <div className="page-enter">
      {/* Hero - white outer layer, navy content inside */}
      <div style={{ background: '#ffffff', padding: '4px' }}>
        <section className="home-hero">
          <div className="hero-bg-gradient" />
          <HeroBlob />
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="hero-content">
              <ScrollReveal>
                <h1 className="hero-title" style={{ fontSize: 'clamp(48px, 6vw, 92px)', fontWeight: 800, color: 'var(--white)', lineHeight: 0.95, letterSpacing: '-0.04em', maxWidth: '900px', marginBottom: '32px' }}>
                  Your partner in<br />
                  transport and logistics.
                </h1>
                <p className="hero-subtitle" style={{ fontSize: '20px', color: 'var(--gray)', maxWidth: '600px', margin: '0 auto 48px', lineHeight: 1.6, textAlign: 'center' }}>
                   Moving fuel. Moving dry goods.
                </p>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Link to="/contact" className="btn-primary">Let us partner together →</Link>
                  <Link to="/about" className="btn-outline">Our scale</Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </div>

      {/* Our Scale Section - Grid Gallery */}
      <section style={{ padding: '120px 0', background: 'var(--white)' }}>
        <div className="container" style={{ marginBottom: '80px' }}>
          <ScrollReveal>
            <div className="who-we-are-badge" style={{ background: 'var(--navy-mid)', color: 'var(--white)' }}>Our Scale</div>
            <h2 style={{ fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 700, color: 'var(--navy)', maxWidth: '600px' }}>
              Built for regional cargo and energy distribution
            </h2>
          </ScrollReveal>
        </div>

        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '32px 20px' }}>
            {[
              '/assets/a (1).jpg', '/assets/a (2).jpg', '/assets/a (3).png', '/assets/a (4).png',
              '/assets/a (5).png', '/assets/a (6).png', '/assets/a (7).png', '/assets/a (8).png',
              '/assets/a (9).png', '/assets/a (10).png', '/assets/a (11).png', '/assets/Logistics-in.png'
            ].map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div style={{ background: '#ffffff', borderRadius: '16px', overflow: 'hidden', border: '1px solid #f0f0f0', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', transition: 'transform 0.4s ease' }} 
                     onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; }}
                     onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div style={{ margin: '24px 24px 0 24px', aspectRatio: '1', overflow: 'hidden', background: '#fcfcfc', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                      src={img} 
                      alt={`Action ${i}`} 
                      style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'top' }} 
                    />
                  </div>
                  <div style={{ padding: '24px', textAlign: 'center' }}>
                    <div style={{ color: 'var(--teal)', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Wordcroft Assets</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Showcase (NEW) - Pure CSS Marquee */}
      <section style={{ padding: '100px 0', background: 'var(--navy-mid)', borderBottom: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
        <div className="container" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <ScrollReveal>
             <div className="who-we-are-badge" style={{ marginBottom: '24px', alignSelf: 'center' }}>Our Partners</div>
             <h2 style={{ fontSize: 'clamp(32px, 3.5vw, 48px)', color: 'var(--white)', fontWeight: 700 }}>Trusted by 15+ major companies in the industry</h2>
          </ScrollReveal>
        </div>

        <div className="scale-slider-track-wrapper" style={{ opacity: 0.8, padding: '40px 0' }}>
          <div className="marquee-container">
            {[
              '/assets/partners/01 (1).png', '/assets/partners/01 (2).png', '/assets/partners/01 (3).png',
              '/assets/partners/01 (4).png', '/assets/partners/01 (5).png', '/assets/partners/01 (6).png',
              '/assets/partners/01 (1).jpg', '/assets/partners/01 (2).jpg',
              '/assets/partners/01 (1).png', '/assets/partners/01 (2).png', '/assets/partners/01 (3).png',
              '/assets/partners/01 (4).png', '/assets/partners/01 (5).png', '/assets/partners/01 (6).png',
            ].map((p, i) => (
              <div key={i} className="scale-card" style={{ width: '220px', height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ffffff', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.15)', margin: '0 12px' }}>
                <img src={p} alt={`Partner ${i}`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>

        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal delay={0.3}>
            <div style={{ marginTop: '80px', maxWidth: '800px', margin: '80px auto 0' }}>
               <p style={{ fontSize: '24px', color: 'var(--white)', fontStyle: 'italic', lineHeight: 1.5 }}>
                 "Wordcroft has consistently delivered high-standard logistics solutions for our regional operations. Their reliability and discipline make them a preferred partner in Southern Africa."
               </p>
               <div style={{ marginTop: '24px', color: 'var(--teal)', fontWeight: 700 }}>— Lead Operations, Major Energy Partner</div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Sectors */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div className="who-we-are-badge">Core Sectors</div>
            <h2 style={{ fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 700, color: 'var(--white)', marginBottom: '60px' }}>
              Our Core Services
            </h2>
          </ScrollReveal>
          <div className="what-we-do-grid">
            {[
              { title: 'Fuel & Petroleum Logistics', desc: 'Safe, compliant transportation of bulk fuel across regional supply chains.', img: '/assets/services/oil-and-gas-logistics.png' },
              { title: 'Dry Goods & General Cargo', desc: 'Flexible logistics solutions for a wide range of goods and materials.', img: '/assets/services/dry good.png' },
              { title: 'Cross-Border Logistics', desc: 'Seamless regional movement across Zimbabwe and neighbouring countries.', img: '/assets/services/border.png' },
              { title: 'Fleet & Tracking', desc: 'Advanced surveillance and dedicated operations for total accountability.', img: '/assets/services/track.png' }
            ].map((sector, i) => (
              <ScrollReveal key={sector.title} delay={i * 0.1}>
                <div className="wwd-card" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', height: '100%', transition: 'all 0.3s ease', overflow: 'hidden' }}>
                  <div style={{ height: '200px', overflow: 'hidden' }}>
                    <img src={sector.img} alt={sector.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8, transition: 'transform 0.5s ease' }} />
                  </div>
                  <div style={{ padding: '32px' }}>
                    <div style={{ height: '2px', width: '32px', background: 'var(--teal)', marginBottom: '20px' }} />
                    <h3 style={{ fontSize: '20px', color: 'var(--white)', marginBottom: '12px' }}>{sector.title}</h3>
                    <p style={{ color: 'var(--gray)', fontSize: '15px', lineHeight: 1.6 }}>{sector.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement - ISOLATED FLAT SECTION */}
      <section className="cta-flat-section">
        <div className="container cta-inner">
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: 'var(--white)', marginBottom: '24px', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700 }}>Your reliable partner in<br />transport and logistics.</h2>
            <p style={{ color: 'var(--gray)', maxWidth: '700px', margin: '0 auto 44px', fontSize: '18px', lineHeight: 1.6 }}>
              Wordcroft Investments continues to build a logistics network designed for scale, reliability, and long-term impact across Africa.
            </p>
            <Link to="/contact" className="btn-primary" style={{ background: 'var(--btn-solid-primary)' }}>Let us partner together →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
