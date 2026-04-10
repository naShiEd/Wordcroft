import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import '../App.css';
import { useCMS } from '../CMSContext';

export default function Team() {
  const { content } = useCMS();
  const teamMembers = content.collections.team;
  return (
    <div className="page-enter" style={{ background: '#ffffff', minHeight: '100vh', color: 'var(--navy)' }}>
      {/* Hero */}
      <section className="page-hero" style={{ background: 'var(--navy)', color: 'var(--white)' }}>
        <div className="page-hero-bg" />
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
             <span className="section-tag page-hero-tag" style={{ margin: '0 auto 24px' }}>Professional Excellence</span>
             <h1 className="page-hero-title">Meet the Team</h1>
             <p className="page-hero-desc" style={{ margin: '0 auto', maxWidth: '740px', color: 'var(--gray)' }}>
               A disciplined assembly of logistics experts, strategic thinkers, and operational leaders committed to regional reliability.
             </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Grid */}
      <section style={{ padding: '80px 0 160px', background: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '1400px' }}>
          <div className="team-grid">
            {teamMembers.map((m, i) => (
              <ScrollReveal key={m.id || m.name} delay={i * 0.05}>
                <Link to={`/team/${m.id}`} style={{ display: 'block', textDecoration: 'none', cursor: 'pointer', transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }} className="team-card-hover">
                  <div style={{ aspectRatio: '1/1.2', borderRadius: '4px', overflow: 'hidden', background: '#f8f8f8', border: '1px solid #eee', marginBottom: '20px' }}>
                   <img 
                      src={m.avatar} 
                      alt={m.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', filter: 'grayscale(100%)', transition: 'all 0.6s ease' }} 
                      className="team-hover-img"
                    />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--navy)', margin: 0, lineHeight: 1.1, letterSpacing: '-0.02em' }}>{m.name}</h3>
                    {/* Role hidden here per request */}
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
