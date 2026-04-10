import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import { useCMS } from '../CMSContext';
import '../App.css';

export default function About() {
  const { content } = useCMS();
  const page = content.pages.about;

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ 
          backgroundImage: `linear-gradient(rgba(0,15,10,0.65), rgba(0,15,10,0.65)), url("${page.hero.bg || '/trucks/1 (5).png'}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
        <div className="container">
          <span className="section-tag page-hero-tag">About {content.global.companyName}</span>
          <h1 className="page-hero-title">{page.hero.title}</h1>
          <p className="page-hero-desc">
            {page.hero.desc}
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">Partner With Us →</Link>
          </div>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="who-we-are-inner" style={{ alignItems: 'center' }}>
            <ScrollReveal>
              <div>
                <h2 style={{ fontSize: '32px', color: 'var(--white)', marginBottom: '24px' }}>{page.story.title}</h2>
                <p style={{ color: 'var(--gray)', fontSize: '18px', lineHeight: 1.6, marginBottom: '24px' }}>
                  {page.story.desc1}
                </p>
                <p style={{ color: 'var(--gray)', fontSize: '18px', lineHeight: 1.6 }}>
                  {page.story.desc2}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '48px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="who-we-are-badge" style={{ marginBottom: '24px' }}>Our History</div>
                <p style={{ color: 'var(--gray)', lineHeight: 1.6, marginBottom: '24px' }}>
                   {page.story.historyDesc}
                </p>
                <div style={{ color: 'var(--white)', fontWeight: 700, fontSize: '18px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
                   "{page.story.historyQuote}"
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Reliability at Scale */}
      <section style={{ padding: '160px 0', background: 'var(--navy-mid)', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <div className="container">
          <div className="who-we-are-inner" style={{ alignItems: 'center', gap: '60px' }}>
            <ScrollReveal>
              <div className="about-redesign-info">
                <div className="who-we-are-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '40px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--teal)"><path d="M12 0l3.09 8.91h9.41l-7.62 5.54 2.91 9.55-7.79-5.66-7.79 5.66 2.91-9.55-7.62-5.54h9.41z"/></svg>
                  Operational Excellence
                </div>
                <h2 style={{ fontSize: 'clamp(40px, 4.5vw, 68px)', fontWeight: 800, color: 'var(--white)', lineHeight: 1.05, letterSpacing: '-0.04em', marginBottom: '32px' }}>
                  {page.reliability.title}<br />{page.reliability.subtitle}
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: 1.65, maxWidth: '520px', marginBottom: '64px' }}>
                  {page.reliability.desc}
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '24px' }}>
                  {page.reliability.stats.map((stat: any) => (
                    <div key={stat.label}>
                      <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--white)', marginBottom: '8px', letterSpacing: '-0.02em' }}>{stat.val}</div>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', position: 'relative' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {(page.reliability.images || []).map((img: string, i: number) => (
                    <img key={i} src={img} alt={`Fleet ${i+1}`} style={{ width: '100%', height: i === 1 ? '360px' : (i === 0 ? '240px' : '280px'), objectFit: 'cover', borderRadius: '12px' }} />
                  ))}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {(page.reliability.imagesCol2 || []).map((img: string, i: number) => (
                    <img key={i} src={img} alt={`Ops ${i+1}`} style={{ width: '100%', height: i === 0 ? '400px' : (i === 1 ? '200px' : '320px'), objectFit: 'cover', borderRadius: '12px' }} />
                  ))}
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
            <span className="section-tag" style={{ textAlign: 'center' }}>{page.playbook.tag}</span>
            <h2 className="playbook-title" style={{ textAlign: 'center', color: 'var(--white)', marginBottom: '20px' }}>{page.playbook.title}</h2>
            <p className="playbook-sub" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>{page.playbook.sub}</p>
          </ScrollReveal>
          <div className="playbook-steps">
            {page.playbook.steps.map((s: any, i: number) => (
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

      {/* Partner Showcase */}
      <section style={{ padding: '100px 0', background: 'var(--navy-mid)', borderTop: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
        <div className="container" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <ScrollReveal>
             <div className="who-we-are-badge" style={{ marginBottom: '24px', alignSelf: 'center' }}>Our Partners</div>
             <h2 style={{ fontSize: 'clamp(32px, 3.5vw, 48px)', color: 'var(--white)', fontWeight: 700 }}>Trusted by major industrial groups</h2>
          </ScrollReveal>
        </div>

        <div className="scale-slider-track-wrapper" style={{ opacity: 0.8, padding: '40px 0' }}>
          <div className="marquee-container">
            {content.pages.home.partners.logos.map((p: string, i: number) => (
              <div key={i} className="scale-card" style={{ width: '220px', height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ffffff', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.15)', margin: '0 12px' }}>
                <img src={p} alt={`Partner ${i}`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </div>
            ))}
            {content.pages.home.partners.logos.map((p: string, i: number) => (
              <div key={`dup-${i}`} className="scale-card" style={{ width: '220px', height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ffffff', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.15)', margin: '0 12px' }}>
                <img src={p} alt={`Partner Dup ${i}`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
