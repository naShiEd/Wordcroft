import { ScrollReveal } from '../components/ScrollReveal';
import '../App.css';

const teamMembers = [
  { name: 'Stephen Wordcroft', role: 'CEO & Managing Director', img: '/assets/team/1 (1).png', category: 'Leadership' },
  { name: 'Michael Maposa', role: 'Head of Logistics', img: '/assets/team/1 (2).png', category: 'Operations' },
  { name: 'Tendai Dube', role: 'Strategy & Operations Manager', img: '/assets/team/1 (3).png', category: 'Operations' },
  { name: 'Sarah Sibanda', role: 'Fleet Operations Director', img: '/assets/team/1 (4).png', category: 'Fleet Operations' },
  { name: 'Robert Nyoni', role: 'Technical Support Lead', img: '/assets/team/1 (5).png', category: 'Support' },
  { name: 'Dr. Elias Marufu', role: 'Senior Advisory Board', img: '/assets/team/1 (6).png', category: 'Advisory Board' },
  { name: 'Faith Moyo', role: 'Senior Logistics Analyst', img: '/assets/team/1 (7).png', category: 'Operations' },
  { name: 'Chris Phiri', role: 'Fleet Coordinator', img: '/assets/team/1 (8).png', category: 'Fleet Operations' },
  { name: 'Grace Chirwa', role: 'Support Specialist', img: '/assets/team/1 (9).png', category: 'Support' },
  { name: 'Arthur Ndlovu', role: 'Executive Director', img: '/assets/team/1 (10).png', category: 'Leadership' },
];

export default function Team() {
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
              <ScrollReveal key={m.name} delay={i * 0.05}>
                <div className="team-card-light" style={{ padding: '20px 20px 0 20px', background: '#fcfcfc', borderRadius: '12px', border: '1px solid #f0f0f0' }}>
                  <div className="team-avatar" style={{ aspectRatio: '4/5', borderRadius: '6px', overflow: 'hidden', background: '#ffffff', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                   <img 
                      src={m.img} 
                      alt={m.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'bottom center' }} 
                    />
                  </div>
                  <div className="team-info" style={{ padding: '24px 0', textAlign: 'center', position: 'relative' }}>
                    <h3 className="team-name" style={{ fontSize: '17px', fontWeight: 700, color: 'var(--navy)', marginBottom: '4px' }}>{m.name}</h3>
                    <div className="team-role" style={{ fontSize: '12px', color: 'var(--teal)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>{m.role}</div>
                    <div className="team-social" style={{ display: 'flex', justifyContent: 'center' }}>
                      <a href="#" className="linkedin-icon" style={{ color: 'var(--navy)', opacity: 0.2, transition: 'all 0.3s' }} 
                         onMouseOver={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = 'var(--teal)'; }}
                         onMouseOut={(e) => { e.currentTarget.style.opacity = '0.2'; e.currentTarget.style.color = 'var(--navy)'; }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
