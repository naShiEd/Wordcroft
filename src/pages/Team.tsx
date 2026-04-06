import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import '../App.css';
import { useCMS } from '../CMSContext';

export default function Team() {
  const { content } = useCMS();
  const teamMembers = content.collections.team;
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container">
          <ScrollReveal>
            <span className="section-tag page-hero-tag">Professional Excellence</span>
            <h1 className="page-hero-title">Meet the Team</h1>
            <p className="page-hero-desc">
              A disciplined assembly of logistics experts, strategic thinkers, and operational leaders committed to regional reliability.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Grid */}
      <section className="team-section-light" style={{ padding: '100px 0 160px' }}>
        <div className="container">
          <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '40px 24px' }}>
            {teamMembers.map((m, i) => (
              <ScrollReveal key={m.id || m.name} delay={i * 0.05}>
                <Link to={`/team/${m.id}`} style={{ display: 'block', textDecoration: 'none', cursor: 'pointer' }}>
                  <div style={{ aspectRatio: '1/1.1', borderRadius: '6px', overflow: 'hidden', background: '#eaeaea', marginBottom: '16px' }}>
                   <img 
                      src={m.avatar} 
                      alt={m.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', filter: 'grayscale(100%)', transition: 'filter 0.4s ease' }} 
                      className="team-hover-img"
                      onMouseOver={(e) => { e.currentTarget.style.filter = 'grayscale(0%)'; }}
                      onMouseOut={(e) => { e.currentTarget.style.filter = 'grayscale(100%)'; }}
                    />
                  </div>
                  <div style={{ paddingLeft: '4px', textAlign: 'left' }}>
                    <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1B1464', margin: 0, lineHeight: 1.2 }}>{m.name}</h3>
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
