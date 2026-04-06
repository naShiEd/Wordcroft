import { useParams, Navigate, Link } from 'react-router-dom';
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
    <div className="page-enter" style={{ background: '#f9f9f9', minHeight: '100vh', color: '#222' }}>
      <section style={{ paddingTop: '160px', paddingBottom: '120px' }}>
        <div className="container">
          <ScrollReveal>
             <div style={{ marginBottom: '40px' }}>
               <Link to="/team" style={{ textDecoration: 'none', color: '#777', fontSize: '13px', letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: 600 }}>
                 ← Back to Team
               </Link>
             </div>
          </ScrollReveal>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 4fr) 6fr', gap: '80px', alignItems: 'start' }}>
            {/* Left: Image (Monochrome) */}
            <ScrollReveal delay={0.1}>
              <div style={{ aspectRatio: '3/4', width: '100%', background: '#e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
                 <img 
                   src={member.avatar} 
                   alt={member.name}
                   style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', filter: 'grayscale(100%)' }}
                 />
              </div>
            </ScrollReveal>

            {/* Right: Info Area */}
            <ScrollReveal delay={0.2}>
              <div style={{ paddingTop: '10px' }}>
                <h1 style={{ fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 800, color: '#111', margin: '0 0 16px 0', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
                  {member.name}
                </h1>
                <h2 style={{ fontSize: '18px', color: '#666', fontWeight: 600, margin: '0 0 48px 0', textTransform: 'uppercase', letterSpacing: '2px' }}>
                  {member.role}
                </h2>

                <div style={{ fontSize: '24px', lineHeight: 1.5, color: '#333', fontWeight: 500, marginBottom: '32px' }}>
                  Since joining the team, {firstName} has been pivotal in advancing our {member.role.toLowerCase()} framework and streamlining regional operations.
                </div>

                <div style={{ fontSize: '18px', color: '#555', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <p>
                    {firstName} brings extensive experience in strategy and supply chain optimization. With a deep understanding of the Southern African region, they play a vital role in fulfilling our commitment to delivering what matters, where it matters most.
                  </p>
                  <p>
                    Prior to their current role, they successfully managed large-scale logistical operations, fostering strong relationships with both local operators and international industrial leaders. Their background provides a unique operational edge in navigating complex transportation networks.
                  </p>
                  <p>
                    Outside of their professional commitments, {firstName} is highly active in regional development forums and enjoys mentoring upcoming logistics professionals across the continent.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
