import { useParams, Navigate } from 'react-router-dom';
import { useCMS } from '../CMSContext';
import { ScrollReveal } from '../components/ScrollReveal';

export default function TeamMember() {
  const { id } = useParams();
  const { content } = useCMS();
  
  const member = content.collections.team.find((m: any) => m.id === id);
  
  if (!member) {
    return <Navigate to="/team" />;
  }

  const firstName = member.name.split(' ')[0];

  return (
    <div className="page-enter" style={{ background: '#ffffff', minHeight: '100vh', color: 'var(--navy)' }}>
      <section style={{ paddingTop: '160px', paddingBottom: '120px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 4.5fr) 6fr', gap: '80px', alignItems: 'start' }}>
            {/* Left: Sticky Image Area */}
            <div style={{ position: 'sticky', top: '140px', alignSelf: 'start' }}>
              <div className="page-enter" style={{ animationDelay: '0.1s' }}>
                <div style={{ aspectRatio: '3/4', width: '100%', background: '#f8f8f8', borderRadius: '4px', overflow: 'hidden', border: '1px solid #eee' }}>
                   <img 
                     src={member.avatar} 
                     alt={member.name}
                     style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                   />
                </div>
                {/* LinkedIn Connector */}
                <a href={member.linkedIn || '#'} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '24px', color: '#0077b5', fontSize: '14px', fontWeight: 700, textDecoration: 'none', transition: 'opacity 0.3s' }} className="linkedin-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            {/* Right: Info Area (Scrolls Normally) */}
            <ScrollReveal delay={0.2}>
              <div style={{ padding: '0 0' }}>
                <h1 style={{ fontSize: 'clamp(42px, 5vw, 64px)', fontWeight: 800, color: 'var(--navy)', margin: '0 0 12px 0', lineHeight: 1.1, letterSpacing: '-0.04em' }}>
                  {member.name}
                </h1>
                <h2 style={{ fontSize: '18px', color: 'var(--teal)', fontWeight: 700, margin: '0 0 48px 0', textTransform: 'uppercase', letterSpacing: '2px' }}>
                  {member.role}
                </h2>

                <div style={{ fontSize: '24px', lineHeight: 1.5, color: 'var(--navy)', fontWeight: 500, marginBottom: '40px' }}>
                  Since joining {content.global.companyName}, {firstName} has been pivotal in advancing our {member.role.toLowerCase()} framework and streamlining regional operations.
                </div>

                <div style={{ fontSize: '18px', color: '#555', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '28px' }}>
                  {member.bio ? (
                    member.bio.split('\n\n').map((para: string, i: number) => (
                      <p key={i}>{para}</p>
                    ))
                  ) : (
                    <>
                      <p>
                        {firstName} brings extensive experience in strategy and supply chain optimization. With a deep understanding of the Southern African region, they play a vital role in fulfilling our commitment to delivering what matters, where it matters most.
                      </p>
                      <p>
                        Prior to their current role, they successfully managed large-scale logistical operations, fostering strong relationships with both local operators and international industrial leaders. Their background provides a unique operational edge in navigating complex transportation networks.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
