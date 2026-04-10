import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import HeroBlob from '../components/HeroBlob';
import { useCMS } from '../CMSContext';
import '../App.css';

export default function Home() {
  const { content } = useCMS();
  const page = content.pages.home;
  const { services } = content.collections;
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    if (!page.partners.testimonials?.length) return;
    const timer = setInterval(() => {
      setCurrentTestimonial((prev: number) => (prev + 1) % page.partners.testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [page.partners.testimonials?.length]);

  return (
    <div className="page-enter">
      {/* Hero - white outer layer, navy content inside */}
      <div style={{ background: '#ffffff', padding: '4px' }}>
        <section className="home-hero">
          <div className="hero-bg-gradient" />
          <HeroBlob />
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="hero-content">
              <ScrollReveal>
                <h1 className="hero-title" style={{ fontWeight: 800, color: 'var(--white)', letterSpacing: '-0.04em', maxWidth: '900px', marginBottom: '32px' }}>
                  {page.hero.title.split('\n').map((line: string, i: number) => (
                    <span key={i} style={{ display: 'block' }}>{line}</span>
                  ))}
                </h1>
                <p className="hero-subtitle" style={{ fontSize: '20px', color: 'var(--gray)', maxWidth: '600px', margin: '0 auto 48px', lineHeight: 1.6, textAlign: 'center' }}>
                   {page.hero.subtitle}
                </p>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                   <Link to="/contact" className="btn-primary">{page.hero.primaryBtn}</Link>
                   <Link to="/about" className="btn-outline">{page.hero.secondaryBtn}</Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </div>

      {/* Our Scale Section - Pure CSS Marquee */}
      <section className="scale-slider-section" style={{ padding: '120px 0', position: 'relative', background: 'var(--navy-mid)' }}>
        <div className="container" style={{ marginBottom: '80px' }}>
          <ScrollReveal>
            <div className="who-we-are-badge">{page.scaleSection.badge}</div>
            <h2 style={{ fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 700, color: 'var(--white)', maxWidth: '600px' }}>
              {page.scaleSection.title}
            </h2>
          </ScrollReveal>
        </div>

        <div className="scale-slider-track-wrapper">
          <div className="marquee-container">
            {[...page.scaleSection.images, ...page.scaleSection.images].map((img: string, i: number) => (
              <div key={`row1-${i}`} className="scale-card marquee-card">
                <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={img} alt={`Fleet ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="scale-slider-track-wrapper" style={{ marginTop: '30px' }}>
          <div className="marquee-container reverse">
            {[...page.scaleSection.imagesRow2, ...page.scaleSection.imagesRow2].map((img: string, i: number) => (
              <div key={`row2-${i}`} className="scale-card marquee-card">
                <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   <img src={img} alt={`Fleet Row 2 ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Showcase (NEW) - Pure CSS Marquee */}
      <section style={{ padding: '100px 0', background: 'var(--navy-mid)', borderBottom: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
        <div className="container" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <ScrollReveal>
             <div className="who-we-are-badge" style={{ marginBottom: '24px', alignSelf: 'center' }}>{page.partners.badge}</div>
             <h2 style={{ fontSize: 'clamp(32px, 3.5vw, 48px)', color: 'var(--white)', fontWeight: 700 }}>{page.partners.title}</h2>
          </ScrollReveal>
        </div>

        <div className="scale-slider-track-wrapper" style={{ opacity: 0.8, padding: '40px 0' }}>
          <div className="marquee-container">
            {page.partners.logos.map((p: string, i: number) => (
              <div key={i} className="scale-card" style={{ width: '220px', height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ffffff', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.15)', margin: '0 12px' }}>
                <img src={p} alt={`Partner ${i}`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </div>
            ))}
            {/* Duplicate for seamless infinite loop */}
            {page.partners.logos.map((p: string, i: number) => (
              <div key={`dup-${i}`} className="scale-card" style={{ width: '220px', height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ffffff', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.15)', margin: '0 12px' }}>
                <img src={p} alt={`Partner Dup ${i}`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>

        <div className="container" style={{ textAlign: 'center', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {page.partners.testimonials?.map((t: any, i: number) => (
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

      {/* Core Sectors */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div className="who-we-are-badge">{page.sectors.badge}</div>
            <h2 style={{ fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 700, color: 'var(--white)', marginBottom: '60px' }}>
              {page.sectors.title}
            </h2>
          </ScrollReveal>
          <div className="what-we-do-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', maxWidth: '100% ' }}>
            {services.map((sector: any, i: number) => (
              <ScrollReveal key={sector.title} delay={i * 0.1}>
                <div className="wwd-card" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', height: '100%', transition: 'all 0.3s ease', overflow: 'hidden' }}>
                  <div style={{ height: '280px', overflow: 'hidden' }}>
                    <img src={sector.img} alt={sector.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8, transition: 'transform 0.5s ease' }} />
                  </div>
                  <div style={{ padding: '32px' }}>
                    <div style={{ height: '2px', width: '32px', background: 'var(--teal)', marginBottom: '20px' }} />
                    <h3 style={{ fontSize: '20px', color: 'var(--white)', marginBottom: '12px' }}>{sector.title}</h3>
                    <p style={{ color: 'var(--gray)', fontSize: '15px', lineHeight: 1.7, textAlign: 'justify', opacity: 0.9 }}>{sector.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement - ISOLATED FLAT SECTION */}
      <section className="cta-flat-section">
        <div className="container cta-inner">
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: 'var(--white)', marginBottom: '24px', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700 }}>{page.cta.title.split('\n').map((line: string, i: number) => <span key={i}>{line}{i === 0 && <br />}</span>)}</h2>
            <p style={{ color: 'var(--gray)', maxWidth: '700px', margin: '0 auto 44px', fontSize: '18px', lineHeight: 1.6 }}>
              {page.cta.desc}
            </p>
            <Link to="/contact" className="btn-primary" style={{ background: 'var(--btn-solid-primary)' }}>{page.hero.primaryBtn}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
