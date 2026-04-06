import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import '../App.css';

export default function About() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container">
          <span className="section-tag page-hero-tag">About Us</span>
          <h1 className="page-hero-title">Wordcroft Investments</h1>
          <p className="page-hero-desc">
            Established in 2003, Wordcroft Investments (Pvt) Ltd is a Zimbabwe-based transport and logistics company specializing in the movement of bulk fuel and general cargo across Southern Africa.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/team" className="btn-primary">Our Team</Link>
            <Link to="/contact" className="btn-outline">Partner With Us →</Link>
          </div>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <ScrollReveal>
              <div>
                <h2 style={{ fontSize: '32px', color: 'var(--white)', marginBottom: '24px' }}>Two decades of operational consistency</h2>
                <p style={{ color: 'var(--gray)', fontSize: '18px', lineHeight: 1.6, marginBottom: '24px' }}>
                  We operate at the core of Africa’s industrial backbone—where significant economic activity depends on petroleum and energy distribution. Our role is simple but critical: ensuring that essential resources move efficiently, reliably, and securely across borders and industries.
                </p>
                <p style={{ color: 'var(--gray)', fontSize: '18px', lineHeight: 1.6 }}>
                  Since 2003, Wordcroft has built a reputation grounded in consistency, discipline, and delivery. We ensure operational excellence across every regional movement.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '48px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="who-we-are-badge" style={{ marginBottom: '24px' }}>Our History</div>
                <p style={{ color: 'var(--gray)', lineHeight: 1.6, marginBottom: '24px' }}>
                  Wordcroft Investments (Pvt) Ltd was founded with a vision to provide specialized logistics services. Over the last 20 years, we have expanded our fleet and network to become a trusted partner for major industrial players in the region.
                </p>
                <div style={{ color: 'var(--white)', fontWeight: 700, fontSize: '18px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
                  "We don’t just move cargo. We manage risk, timing, and reliability."
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Reliability at Scale - REDESIGNED */}
      <section style={{ padding: '160px 0', background: 'var(--navy-mid)', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: '100px', alignItems: 'center' }}>
            {/* Left Content Panel */}
            <ScrollReveal>
              <div className="about-redesign-info">
                <div className="who-we-are-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '40px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--teal)"><path d="M12 0l3.09 8.91h9.41l-7.62 5.54 2.91 9.55-7.79-5.66-7.79 5.66 2.91-9.55-7.62-5.54h9.41z"/></svg>
                  About Wordcroft
                </div>
                <h2 style={{ fontSize: 'clamp(40px, 4.5vw, 68px)', fontWeight: 800, color: 'var(--white)', lineHeight: 1.05, letterSpacing: '-0.04em', marginBottom: '32px' }}>
                  One Standard.<br />One Network.<br />Reliability at scale.
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: 1.65, maxWidth: '520px', marginBottom: '64px' }}>
                  Our logistics model combines a well-maintained fleet with advanced surveillance and dedicated operations to maintain total accountability across the supply chain.
                </p>
                
                {/* Stats Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px 24px' }}>
                  {[
                    { val: '50+', label: 'Specialised Fleet' },
                    { val: '15+', label: 'Dedicated Team' },
                    { val: '24/7', label: 'Cargo Monitoring' },
                    { val: '100%', label: 'Route Planning' }
                  ].map(stat => (
                    <div key={stat.label}>
                      <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--white)', marginBottom: '8px', letterSpacing: '-0.02em' }}>{stat.val}</div>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Right Asymmetrical Grid */}
            <ScrollReveal delay={0.2}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', position: 'relative' }}>
                {/* Left Column of sub-grid */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '40px' }}>
                  <img src="/assets/a (1).jpg" alt="Fleet 1" style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '12px' }} />
                  <img src="/assets/a (11).png" alt="Fleet 2" style={{ width: '100%', height: '360px', objectFit: 'cover', borderRadius: '12px' }} />
                  <img src="/assets/a (3).png" alt="Fleet 3" style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '12px' }} />
                </div>
                {/* Right Column of sub-grid */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <img src="/assets/a (5).png" alt="Operations 1" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px' }} />
                  <img src="/assets/a (2).jpg" alt="Team 1" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' }} />
                  <img src="/assets/a (4).png" alt="Operations 2" style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '12px' }} />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Playbook */}
      <section className="playbook-section">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ScrollReveal>
            <span className="section-tag" style={{ textAlign: 'center' }}>The Wordcroft Playbook</span>
            <h2 className="playbook-title" style={{ textAlign: 'center', color: 'var(--white)', marginBottom: '20px' }}>Disciplined Operational Model</h2>
            <p className="playbook-sub" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>We deliver value through a repeatable, high-standard process designed for safety and speed.</p>
          </ScrollReveal>
          <div className="playbook-steps">
            {[
              { num: '01', label: 'Planning', desc: 'Route optimization and compliance.' },
              { num: '02', label: 'Preparation', desc: 'Fleet readiness and safety.' },
              { num: '03', label: 'Monitoring', desc: 'Real-time surveillance tracking.' },
              { num: '04', label: 'Control', desc: 'Active oversight during transit.' },
              { num: '05', label: 'Delivery', desc: 'Secure, timely cargo delivery.' },
              { num: '06', label: 'Reporting', desc: 'Logs and accountability.' },
            ].map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 0.1}>
                <div className="playbook-step">
                  <div className="step-num-circle">{s.num}</div>
                  <div className="step-label" style={{ marginBottom: '8px', color: 'var(--white)', fontWeight: 700 }}>{s.label}</div>
                  <div style={{ fontSize: '12px', color: 'var(--gray)', maxWidth: '140px', margin: '0 auto' }}>{s.desc}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section style={{ padding: '120px 0', background: 'var(--navy-mid)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
            <ScrollReveal>
              <div>
                <div className="who-we-are-badge">Vision</div>
                <p style={{ color: 'var(--white)', fontSize: '24px', lineHeight: 1.5, marginTop: '20px', fontStyle: 'italic' }}>
                  "To become a leading regional logistics and energy transport partner, known for reliability, efficiency, and operational excellence."
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <div className="who-we-are-badge">Mission</div>
                <p style={{ color: 'var(--gray)', fontSize: '20px', lineHeight: 1.6, marginTop: '20px' }}>
                  To deliver safe, efficient, and transparent logistics solutions that support economic growth across Zimbabwe and the region.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="who-we-are-badge" style={{ alignSelf: 'center', marginBottom: '24px' }}>Our Values</div>
          <h2 style={{ textAlign: 'center', fontSize: '32px', color: 'var(--white)', marginBottom: '60px' }}>The Foundation of Wordcroft</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {[
              { label: 'Honesty', val: 'Transparent operations and communication at every level.' },
              { label: 'Integrity', val: 'Doing the right thing, ensuring safety and compliance.' },
              { label: 'Client Value', val: 'Delivering measurable efficiency and reliability to partners.' },
              { label: 'Diligence', val: 'Unwavering attention to detail in every cargo movement.' }
            ].map((v, i) => (
              <ScrollReveal key={v.label} delay={i * 0.1}>
                <div>
                  <div style={{ padding: '32px', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h3 style={{ color: 'var(--teal)', fontSize: '18px', marginBottom: '12px' }}>{v.label}</h3>
                    <p style={{ color: 'var(--gray)', fontSize: '15px', lineHeight: 1.6 }}>{v.val}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Summary */}
      <section style={{ padding: '100px 0', background: 'var(--navy-mid)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <div>
              <h2 style={{ fontSize: '32px', color: 'var(--white)', marginBottom: '24px' }}>Our Team</h2>
              <p style={{ color: 'var(--gray)', maxWidth: '700px', margin: '0 auto 40px', fontSize: '18px' }}>
                Wordcroft is led by a dedicated team of logistics professionals, operations experts, and regional coordinators who share a commitment to excellence.
              </p>
              <Link to="/team" className="btn-outline">View Full Team Profiles →</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
