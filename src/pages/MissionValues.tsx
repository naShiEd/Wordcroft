import { ScrollReveal } from '../components/ScrollReveal';
import '../App.css';

export default function MissionValues() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container">
          <span className="section-tag page-hero-tag">Our Foundation</span>
          <h1 className="page-hero-title">Mission & Values</h1>
          <p className="page-hero-desc">
            Since inception, Wordcroft Investments has been guided by a strong value system that shapes every decision.
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {[
              { label: 'Honesty', val: 'Transparent operations and communication' },
              { label: 'Integrity', val: 'Doing the right thing, even when it’s difficult' },
              { label: 'Client Value Creation', val: 'Delivering measurable value to every client' },
              { label: 'Loyalty', val: 'Building long-term partnerships' },
              { label: 'Diligence', val: 'Attention to detail in every operation' },
              { label: 'Regional Connectivity', val: 'Strengthening networks across borders' }
            ].map((v, i) => (
              <ScrollReveal key={v.label} delay={i * 0.1}>
                <div className="glass-effect" style={{ padding: '40px', borderRadius: '16px', background: 'var(--navy-mid)', height: '100%' }}>
                  <h3 style={{ color: 'var(--teal)', fontSize: '20px', marginBottom: '12px' }}>{v.label}</h3>
                  <p style={{ color: 'var(--gray)', lineHeight: 1.6 }}>{v.val}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
