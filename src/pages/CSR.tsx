import { ScrollReveal } from '../components/ScrollReveal';
import '../App.css';

export default function CSR() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container">
          <span className="section-tag page-hero-tag">Impact</span>
          <h1 className="page-hero-title">CSR Initiatives</h1>
          <p className="page-hero-desc">
            We are committed to delivering safe and transparent logistics solutions that support communities and economic growth across the region.
          </p>
        </div>
      </section>

      {/* CSR Grid */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="csr-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {[
              { title: 'Regional Connectivity', desc: 'Strengthening supply chain networks across borders to lower costs for essential goods.' },
              { title: 'Economic Growth', desc: 'Providing infrastructure that enables businesses to function effectively in Southern Africa.' },
              { title: 'Safety and Standards', desc: 'Implementing rigorous safety inspections and monitoring to protect our people and environments.' }
            ].map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div style={{ padding: '40px', background: 'var(--navy-mid)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)', height: '100%' }}>
                  <h3 style={{ color: 'var(--teal)', fontSize: '20px', marginBottom: '16px' }}>{v.title}</h3>
                  <p style={{ color: 'var(--gray)', lineHeight: 1.6 }}>{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      {/* Image Marquee Slider */}
      <section className="scale-slider-section" style={{ padding: '80px 0' }}>
        <div className="container" style={{ marginBottom: '60px' }}>
          <ScrollReveal>
            <div className="who-we-are-badge">Our Operations</div>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 700, color: 'var(--white)', maxWidth: '600px', marginTop: '16px' }}>
              Built for regional cargo and energy distribution
            </h2>
          </ScrollReveal>
        </div>

        {/* Row 1 - scrolls left */}
        <div className="scale-slider-track-wrapper">
          <div className="marquee-container">
            {[
              { img: '/assets/a (1).png', label: 'Fuel' },
              { img: '/assets/a (3).png', label: 'Regional' },
              { img: '/assets/a (4).png', label: 'Fleet' },
              { img: '/assets/a (10).png', label: 'Tracking' },
              { img: '/assets/a (1).png', label: 'Fuel' },
              { img: '/assets/a (3).png', label: 'Regional' },
              { img: '/assets/a (4).png', label: 'Fleet' },
              { img: '/assets/a (10).png', label: 'Tracking' },
            ].map((s, i) => (
              <div key={i} className="scale-card" style={{ width: '400px', flexShrink: 0, margin: '0 15px', borderRadius: '24px', overflow: 'hidden', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', position: 'relative' }}>
                <div style={{ height: '300px', overflow: 'hidden' }}>
                  <img src={s.img} alt={s.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - scrolls right (reverse) */}
        <div className="scale-slider-track-wrapper" style={{ marginTop: '20px' }}>
          <div className="marquee-container reverse">
            {[
              { img: '/assets/a (6).png', label: 'Cargo' },
              { img: '/assets/a (7).png', label: 'Distribution' },
              { img: '/assets/a (8).png', label: 'Cross-Border' },
              { img: '/assets/a (9).png', label: 'Operations' },
              { img: '/assets/a (6).png', label: 'Cargo' },
              { img: '/assets/a (7).png', label: 'Distribution' },
              { img: '/assets/a (8).png', label: 'Cross-Border' },
              { img: '/assets/a (9).png', label: 'Operations' },
            ].map((s, i) => (
              <div key={i} className="scale-card" style={{ width: '400px', flexShrink: 0, margin: '0 15px', borderRadius: '24px', overflow: 'hidden', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', position: 'relative' }}>
                <div style={{ height: '300px', overflow: 'hidden' }}>
                  <img src={s.img} alt={s.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
