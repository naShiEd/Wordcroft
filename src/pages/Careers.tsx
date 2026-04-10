import { ScrollReveal } from '../components/ScrollReveal';
import { useCMS } from '../CMSContext';
import '../App.css';

export default function Careers() {
  const { content } = useCMS();
  const page = content.pages.careers;

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ 
          backgroundImage: `linear-gradient(rgba(0,15,10,0.65), rgba(0,15,10,0.65)), url("${page.hero.bg || '/trucks/1 (7).png'}")`,
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

      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', color: 'var(--white)', marginBottom: '24px' }}>
                {page.status.title}
              </h2>
              <p style={{ color: 'var(--gray)', fontSize: '18px', lineHeight: 1.7 }}>
                {page.status.desc}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
