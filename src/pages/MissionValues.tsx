import { useCMS } from '../CMSContext';
import { ScrollReveal } from '../components/ScrollReveal';
import '../App.css';

export default function MissionValues() {
  const { content } = useCMS();
  const page = content.pages.missionValues;

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ 
          backgroundImage: `linear-gradient(rgba(0,10,15,0.7), rgba(0,10,15,0.7)), url("${page.hero.bg || '/assets/a (10).png'}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className="section-tag page-hero-tag">{page.hero.tag}</span>
          <h1 className="page-hero-title">{page.hero.title}</h1>
          <p className="page-hero-desc" style={{ color: 'rgba(255,255,255,0.8)' }}>
            {page.hero.desc}
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section style={{ padding: '100px 0', background: 'var(--navy-mid)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="who-we-are-inner">
            <ScrollReveal>
              <div>
                <div className="who-we-are-badge">Our Vision</div>
                <p style={{ color: 'var(--white)', fontSize: '24px', lineHeight: 1.5, marginTop: '20px', fontStyle: 'italic' }}>
                  "{page.vision}"
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <div className="who-we-are-badge">Our Mission</div>
                <p style={{ color: 'var(--gray)', fontSize: '20px', lineHeight: 1.6, marginTop: '20px' }}>
                  {page.mission}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <ScrollReveal>
             <h2 style={{ fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 700, color: 'var(--white)', marginBottom: '60px', textAlign: 'center' }}>
               Our Values
             </h2>
          </ScrollReveal>
          <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {page.values.map((v: any, i: number) => (
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
