import { ScrollReveal } from '../components/ScrollReveal';
import '../App.css';

export default function Careers() {
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
            <span className="section-tag page-hero-tag" style={{ color: 'var(--teal)' }}>Join Us</span>
            <h1 className="page-hero-title">Careers</h1>
            <p className="page-hero-desc" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Discover job opportunities with HPE Growth and help shape the future of technology investment.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', color: 'var(--white)', marginBottom: '24px' }}>
                We're building something great
              </h2>
              <p style={{ color: 'var(--gray)', fontSize: '18px', lineHeight: 1.7 }}>
                We are always looking for talented individuals who share our passion for technology and growth investing. Check back soon for open positions.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
