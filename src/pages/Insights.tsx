import { ScrollReveal } from '../components/ScrollReveal';
import { useCMS } from '../CMSContext';
import '../App.css';

export default function Insights() {
  const { content } = useCMS();
  const page = content.pages.insights;

  return (
    <div className="page-enter">
      <section className="page-hero">
        <div className="page-hero-bg" style={{
          backgroundImage: `linear-gradient(rgba(0,15,10,0.65), rgba(0,15,10,0.65)), url("${page.hero.bg || '/assets/a (10).png'}")`,
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

      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '40px' }}>
            {content.collections.insights.map((item: any, i: number) => (
              <ScrollReveal key={item.id} delay={i * 0.1}>
                <div className="glass-effect" style={{ borderRadius: '24px', overflow: 'hidden', height: '100%', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ height: '240px' }}>
                    <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '32px' }}>
                    <span style={{ color: 'var(--teal)', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase' }}>{item.date}</span>
                    <h3 style={{ color: 'var(--white)', fontSize: '22px', marginTop: '12px', marginBottom: '16px' }}>{item.title}</h3>
                    <p style={{ color: 'var(--gray)', fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>{item.excerpt}</p>
                    <button className="text-link" style={{ color: 'var(--teal)' }}>View Analysis →</button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {content.collections.insights.length === 0 && (
            <ScrollReveal>
              <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
                <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', color: 'var(--white)', marginBottom: '24px' }}>
                  {page.content.title}
                </h2>
                <p style={{ color: 'var(--gray)', fontSize: '18px', lineHeight: 1.7 }}>
                  {page.content.desc}
                </p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>
    </div>
  );
}
