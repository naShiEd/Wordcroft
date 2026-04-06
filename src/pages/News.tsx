import { ScrollReveal } from '../components/ScrollReveal';
import '../App.css';

export default function News() {
  return (
    <div className="page-enter">
      <section className="page-hero">
        <div className="page-hero-bg" style={{
          backgroundImage: 'linear-gradient(rgba(0,30,20,0.55), rgba(0,30,20,0.55)), url("/assets/a/sustain.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <ScrollReveal>
            <span className="section-tag page-hero-tag" style={{ color: 'var(--teal)' }}>Latest Updates</span>
            <h1 className="page-hero-title">News</h1>
            <p className="page-hero-desc" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Read the latest news about our firm and portfolio companies.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', color: 'var(--white)', marginBottom: '24px' }}>
                Stay informed
              </h2>
              <p style={{ color: 'var(--gray)', fontSize: '18px', lineHeight: 1.7 }}>
                News articles and announcements from HPE Growth and our portfolio will be published here. Check back soon for updates.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
