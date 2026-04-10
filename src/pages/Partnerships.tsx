import { useState, useEffect } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { useCMS } from '../CMSContext';
import '../App.css';

export default function Partnerships() {
  const { content } = useCMS();
  const page = content.pages.partnerships;
  const homePage = content.pages.home; // Still use home for regional testimonials & logos if they are shared global assets
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    if (!homePage.partners.testimonials?.length) return;
    const timer = setInterval(() => {
      setCurrentTestimonial((prev: number) => (prev + 1) % homePage.partners.testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [homePage.partners.testimonials?.length]);

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="page-hero" style={{ paddingBottom: '40px' }}>
        <div className="page-hero-bg" style={{ 
          backgroundImage: `linear-gradient(rgba(0,15,10,0.65), rgba(0,15,10,0.65)), url("${page.hero.bg || '/trucks/1 (2).jpg'}")`,
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

      {/* Network Story */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <ScrollReveal>
          <div className="who-we-are-inner" style={{ alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '32px', color: 'var(--white)', marginBottom: '24px' }}>{page.storyTitle}</h2>
                <p style={{ color: 'var(--gray)', fontSize: '18px', lineHeight: 1.6, marginBottom: '24px' }}>
                  {page.storyDesc.replace('Wordcroft', content.global.companyName)}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                  {['Fuel Suppliers', 'Industrial Operators', 'Regional Distributors', 'Infrastructure Partners'].map(p => (
                     <div key={p} style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '12px', color: 'var(--white)', fontWeight: 600 }}>
                       ✦ {p}
                     </div>
                  ))}
                </div>
              </div>
              <div style={{ background: 'var(--navy-mid)', padding: '40px', borderRadius: '24px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.08)' }}>
                 <h3 style={{ fontSize: '24px', color: 'var(--white)', marginBottom: '16px' }}>Interested in partnering?</h3>
                 <p style={{ color: 'var(--gray)', marginBottom: '32px' }}>We are looking for strategic partners to expand our regional cargo and energy distribution network.</p>
                 <a href="/contact" className="btn-primary">Let us partner together →</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      {/* Partner Logo Dual Slider */}
      <section style={{ padding: '40px 0', background: 'var(--navy-mid)', borderTop: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
        <div className="container" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <ScrollReveal>
             <h2 style={{ fontSize: 'clamp(32px, 3.5vw, 48px)', color: 'var(--white)', fontWeight: 700 }}>OUR PARTNERS</h2>
          </ScrollReveal>
        </div>

        <div className="scale-slider-track-wrapper" style={{ opacity: 0.8, paddingTop: '20px' }}>
          <div className="marquee-container" style={{ display: 'flex', alignItems: 'center' }}>
            {/* Duplicating for smooth infinite loop */}
            {[...homePage.partners.logos, ...homePage.partners.logos].map((p: string, i: number) => (
              <div key={i} className="scale-card marquee-card" style={{ width: '220px', height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ffffff', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.15)', margin: '0 12px' }}>
                <img src={p} alt={`Partner Row 1 - ${i}`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>

        <div className="scale-slider-track-wrapper" style={{ opacity: 0.8, marginTop: '20px', paddingBottom: '40px' }}>
          <div className="marquee-container reverse" style={{ display: 'flex', alignItems: 'center' }}>
            {/* Duplicating for smooth infinite loop */}
            {[...homePage.partners.logos, ...homePage.partners.logos].map((p: string, i: number) => (
              <div key={i} className="scale-card marquee-card" style={{ width: '220px', height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ffffff', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.15)', margin: '0 12px' }}>
                <img src={p} alt={`Partner Row 2 - ${i}`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Below Logos */}
        <div className="container" style={{ textAlign: 'center', minHeight: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '60px' }}>
          {homePage.partners.testimonials?.map((t: any, i: number) => (
            <div 
              key={i} 
              style={{ 
                display: i === currentTestimonial ? 'block' : 'none',
                animation: 'fadeIn 0.8s ease forwards',
                maxWidth: '800px',
                margin: '0 auto'
              }}
            >
              <p style={{ fontSize: '24px', color: 'var(--white)', fontStyle: 'italic', lineHeight: 1.5 }}>
                {t.quote}
              </p>
              <div style={{ marginTop: '24px', color: 'var(--teal)', fontWeight: 700 }}>{t.author}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
