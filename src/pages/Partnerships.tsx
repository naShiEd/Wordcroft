import { ScrollReveal } from '../components/ScrollReveal';
import '../App.css';

export default function Partnerships() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container">
          <span className="section-tag page-hero-tag">Working Together</span>
          <h1 className="page-hero-title">Regional Partnerships</h1>
          <p className="page-hero-desc">
            We partner with operators, suppliers, and industrial leaders to build a stronger logistics backbone for Southern Africa.
          </p>
        </div>
      </section>

      {/* Network Story */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '32px', color: 'var(--white)', marginBottom: '24px' }}>Building a unified network</h2>
                <p style={{ color: 'var(--gray)', fontSize: '18px', lineHeight: 1.6, marginBottom: '24px' }}>
                  At Wordcroft, we believe our strength comes from our network. We collaborate with operators and industrial leaders who have proven traction and are ready to scale logistics across Zimbabwe and neighboring countries.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  {['Fuel Suppliers', 'Industrial Operators', 'Regional Distributors', 'Infrastructure Partners'].map(p => (
                     <div key={p} style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '12px', color: 'var(--white)', fontWeight: 600 }}>
                       ✦ {p}
                     </div>
                  ))}
                </div>
              </div>
              <div style={{ background: 'var(--navy-mid)', padding: '60px', borderRadius: '24px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.08)' }}>
                 <h3 style={{ fontSize: '24px', color: 'var(--white)', marginBottom: '16px' }}>Interested in partnering?</h3>
                 <p style={{ color: 'var(--gray)', marginBottom: '32px' }}>We are looking for strategic partners to expand our regional cargo and energy distribution network.</p>
                 <a href="/contact" className="btn-primary">Let us partner together →</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      {/* Partner Logo Dual Slider */}
      <section style={{ padding: '80px 0', background: 'var(--navy-mid)', borderTop: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
        <div className="container" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <ScrollReveal>
             <h2 style={{ fontSize: 'clamp(32px, 3.5vw, 48px)', color: 'var(--white)', fontWeight: 700 }}>Our Growing Regional Network</h2>
          </ScrollReveal>
        </div>

        <div className="scale-slider-track-wrapper" style={{ opacity: 0.8, paddingTop: '20px' }}>
          <div className="marquee-container">
            {[
              '/assets/partners/01 (1).png', '/assets/partners/01 (2).png', '/assets/partners/01 (3).png', '/assets/partners/01 (4).png',
              '/assets/partners/01 (1).png', '/assets/partners/01 (2).png', '/assets/partners/01 (3).png', '/assets/partners/01 (4).png',
              '/assets/partners/01 (1).png', '/assets/partners/01 (2).png', '/assets/partners/01 (3).png', '/assets/partners/01 (4).png',
            ].map((p, i) => (
              <div key={i} className="scale-card" style={{ width: '220px', height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ffffff', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.15)', margin: '0 12px' }}>
                <img src={p} alt={`Partner Row 1 - ${i}`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>

        <div className="scale-slider-track-wrapper" style={{ opacity: 0.8, marginTop: '20px', paddingBottom: '40px' }}>
          <div className="marquee-container reverse">
            {[
              '/assets/partners/01 (5).png', '/assets/partners/01 (6).png', '/assets/partners/01 (1).jpg', '/assets/partners/01 (2).jpg',
              '/assets/partners/01 (5).png', '/assets/partners/01 (6).png', '/assets/partners/01 (1).jpg', '/assets/partners/01 (2).jpg',
              '/assets/partners/01 (5).png', '/assets/partners/01 (6).png', '/assets/partners/01 (1).jpg', '/assets/partners/01 (2).jpg',
            ].map((p, i) => (
              <div key={i} className="scale-card" style={{ width: '220px', height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ffffff', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.15)', margin: '0 12px' }}>
                <img src={p} alt={`Partner Row 2 - ${i}`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
