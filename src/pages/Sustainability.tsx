import { ScrollReveal } from '../components/ScrollReveal';
import '../App.css';

export default function Sustainability() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: 'url("/assets/a/sustain.png")' }} />
        <div className="container">
          <span className="section-tag page-hero-tag">Purpose</span>
          <h1 className="page-hero-title">Sustainability & Impact</h1>
          <p className="page-hero-desc">
            We believe that moving essential resources reliably and securely is critical to the sustainability of the region's industrial backbone.
          </p>
        </div>
      </section>

      {/* Impact Story */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: 'clamp(32px, 3.5vw, 48px)', color: 'var(--white)', marginBottom: '32px' }}>
                  Delivering impact across the regional logistics network
                </h2>
                <p style={{ color: 'var(--gray)', fontSize: '18px', lineHeight: 1.6, marginBottom: '24px' }}>
                  Wordcroft Investments focuses on sectors that power economies. From fuel supply chains to industrial logistics, our work enables businesses, communities, and entire regions to function effectively.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '40px' }}>
                  {[
                    { label: 'Honesty', val: 'Transparent operations' },
                    { label: 'Integrity', val: 'Principled delivery' }
                  ].map(v => (
                    <div key={v.label}>
                      <div style={{ color: 'var(--teal)', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', marginBottom: '4px' }}>{v.label}</div>
                      <div style={{ color: 'var(--white)', fontSize: '16px' }}>{v.val}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ padding: '48px', background: 'rgba(255,255,255,0.03)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="who-we-are-badge" style={{ marginBottom: '24px' }}>Why Our Work Matters</div>
                <p style={{ color: 'var(--white)', fontSize: '20px', lineHeight: 1.6, fontWeight: 500 }}>
                  "Reliability in logistics is not optional—it is essential. We strengthen regional networks to power the future of Zimbabwe and its neighbors."
                </p>
                <div style={{ marginTop: '32px', display: 'flex', gap: '20px' }}>
                   <div style={{ color: 'var(--white)' }}>
                     <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--teal)' }}>20+</div>
                     <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--gray)' }}>Years Experience</div>
                   </div>
                   <div style={{ color: 'var(--white)' }}>
                     <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--teal)' }}>100%</div>
                     <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--gray)' }}>Compliance focus</div>
                   </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
