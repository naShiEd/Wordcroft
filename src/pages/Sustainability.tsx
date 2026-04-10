import { ScrollReveal } from '../components/ScrollReveal';
import { useCMS } from '../CMSContext';
import '../App.css';

export default function Sustainability() {
  const { content } = useCMS();
  const page = content.pages.sustainability;

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ 
          backgroundImage: `linear-gradient(rgba(0, 50, 40, 0.45), rgba(0, 50, 40, 0.45)), url("${page.hero.bg || '/assets/a/sustain.png'}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <ScrollReveal>
            <span className="section-tag page-hero-tag" style={{ color: 'var(--teal)' }}>{page.hero.tag}</span>
            <h1 className="page-hero-title">{page.hero.title}</h1>
            <p className="page-hero-desc" style={{ color: 'rgba(255,255,255,0.8)' }}>
              {page.hero.desc}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Impact Story */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div className="who-we-are-inner" style={{ alignItems: 'center', gap: '60px' }}>
              <div>
                <h2 style={{ fontSize: 'clamp(32px, 3.5vw, 48px)', color: 'var(--white)', marginBottom: '32px' }}>
                  {page.impact.title}
                </h2>
                <p style={{ color: 'var(--gray)', fontSize: '18px', lineHeight: 1.6, marginBottom: '24px' }}>
                  {page.impact.desc}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '24px', marginTop: '40px' }}>
                  {page.impact.values.map((v: any) => (
                    <div key={v.label}>
                      <div style={{ color: 'var(--teal)', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', marginBottom: '4px' }}>{v.label}</div>
                      <div style={{ color: 'var(--white)', fontSize: '16px' }}>{v.val}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ padding: '48px', background: 'rgba(255,255,255,0.03)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="who-we-are-badge" style={{ marginBottom: '24px' }}>{page.impact.badge}</div>
                <p style={{ color: 'var(--white)', fontSize: '20px', lineHeight: 1.6, fontWeight: 500 }}>
                  {page.impact.quote}
                </p>
                <div style={{ marginTop: '32px', display: 'flex', gap: '20px' }}>
                   {page.impact.stats.map((stat: any) => (
                     <div key={stat.label} style={{ color: 'var(--white)' }}>
                       <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--teal)' }}>{stat.val}</div>
                       <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--gray)' }}>{stat.label}</div>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Impact Showcase Marquee */}
      <section className="scale-slider-section" style={{ padding: '80px 0', position: 'relative', background: 'var(--navy-mid)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container" style={{ marginBottom: '60px' }}>
          <ScrollReveal>
            <div className="who-we-are-badge">{page.csr.badge}</div>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 700, color: 'var(--white)' }}>
              {page.csr.title}
            </h2>
          </ScrollReveal>
        </div>

        <div className="scale-slider-track-wrapper">
          <div className="marquee-container">
            {page.csr.impactImages.slice(0, Math.ceil(page.csr.impactImages.length / 2)).map((img: string, i: number) => (
              <div key={`row1-${i}`} className="scale-card marquee-card">
                <div style={{ height: '300px', overflow: 'hidden' }}>
                    <img src={img} alt={`CSR Impact Row 1 ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="scale-slider-track-wrapper" style={{ marginTop: '30px' }}>
          <div className="marquee-container reverse">
            {page.csr.impactImages.slice(Math.ceil(page.csr.impactImages.length / 2)).map((img: string, i: number) => (
              <div key={`row2-${i}`} className="scale-card marquee-card">
                <div style={{ height: '300px', overflow: 'hidden' }}>
                    <img src={img} alt={`CSR Impact Row 2 ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CSR Initiatives (Consolidated) */}
      <section style={{ padding: '0 0 100px', background: 'var(--navy-mid)', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <div className="container">
          <div className="csr-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
            {page.csr.items.map((v: any, i: number) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div style={{ padding: '40px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)', height: '100%' }}>
                  <h3 style={{ color: 'var(--teal)', fontSize: '20px', marginBottom: '16px' }}>{v.title}</h3>
                  <p style={{ color: 'var(--gray)', lineHeight: 1.6 }}>{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
