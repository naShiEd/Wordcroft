import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCMS } from '../CMSContext';
import './Navbar.css';

const navLinks = [
  {
    label: 'Home',
    href: '/',
    children: [],
  },
  {
    label: 'About us',
    href: '/about',
    children: [
      { label: 'About us', description: 'Wordcroft as a leading logistics and transportation partner.', href: '/about' },
      { label: 'Our team', description: 'Meet our key leadership and operational team.', href: '/team' },
      { label: 'Mission, purpose and values', description: 'Our core commitment to logistics excellence.', href: '/mission-values' },
      { label: 'Careers', description: 'Join our growing logistics network.', href: '/careers' },
      { label: 'News', description: 'The latest updates on our regional operations.', href: '/news' },
      { label: 'Insights', description: 'In-depth views on regional trade and logistics.', href: '/insights' },
    ],
  },
  {
    label: 'Partners',
    href: '/partners',
    children: [],
  },
  {
    label: 'Sustainability',
    href: '/sustainability',
    children: [],
  },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMobileGroup, setActiveMobileGroup] = useState<string | null>(null);
  const location = useLocation();
  const { content } = useCMS();
  const { global } = content;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [location]);

  const isLightPage = location.pathname.startsWith('/team');

  return (
    <header className={`navbar ${isLightPage ? 'navbar-light' : ''} ${scrolled ? 'scrolled' : ''} ${mobileOpen ? 'mobile-nav-open' : ''}`}>
      <div className="navbar-inner container">
        <Link to="/" className="navbar-logo">
          <img src={global.logo} alt={global.companyName} style={{ height: '40px', width: 'auto' }} />
        </Link>

        <nav className="navbar-links" role="navigation">
          {navLinks.map((item) => (
            <div
              key={item.label}
              className={`nav-item${item.children.length > 0 ? ' has-dropdown' : ''}`}
              onMouseEnter={() => item.children.length > 0 && setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                to={item.href}
                className={`nav-link${location.pathname.startsWith(item.href) ? ' active' : ''}`}
              >
                {item.label}
                {item.children.length > 0 && (
                  <svg width="12" height="7" viewBox="0 0 12 7" fill="none" className="nav-chevron">
                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </Link>

      {/* Dropdown Desktop */}
      {item.children.length > 0 && openMenu === item.label && (
        <div className="nav-dropdown">
          {item.children.map((child) => (
            <Link key={child.label} to={child.href} className="dropdown-link">
              <span className="dropdown-link-inner">
                <span className="dropdown-label">{child.label}</span>
                {'description' in child && child.description && (
                  <span className="dropdown-desc">{child.description}</span>
                )}
              </span>
            </Link>
          ))}
        </div>
      )}
            </div>
          ))}
        </nav>

        <div className="navbar-actions">
          <Link to="/contact" className="btn-primary nav-cta">
            Contact Us
          </Link>
          <Link to="/admin" style={{ color: 'rgba(255,255,255,0.02)', padding: '8px', display: 'flex' }} aria-label="Admin Access">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
              <polyline points="10 17 15 12 10 7"/>
              <line x1="15" y1="12" x2="3" y2="12"/>
            </svg>
          </Link>
          <button
            className={`mobile-toggle${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        {navLinks.map((item) => (
          <div key={item.label} className="mobile-nav-group">
            <div 
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
              onClick={() => {
                if (item.children.length > 0) {
                  setActiveMobileGroup(activeMobileGroup === item.label ? null : item.label);
                }
              }}
            >
              <Link to={item.href} className="mobile-nav-link" onClick={(e) => {
                if (item.children.length > 0) e.preventDefault();
              }}>
                {item.label}
              </Link>
              {item.children.length > 0 && (
                <svg 
                  width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" 
                  style={{ 
                    transition: 'transform 0.4s ease', 
                    transform: activeMobileGroup === item.label ? 'rotate(180deg)' : 'rotate(0deg)',
                    color: 'rgba(255,255,255,0.4)'
                  }}
                >
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>

            {item.children.length > 0 && (
              <div style={{ 
                maxHeight: activeMobileGroup === item.label ? '500px' : '0',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: activeMobileGroup === item.label ? 1 : 0,
                paddingLeft: '12px'
              }}>
                {item.children.map((child) => (
                  <Link 
                    key={child.href} 
                    to={child.href} 
                    className="mobile-nav-child"
                    onClick={() => { setMobileOpen(false); setActiveMobileGroup(null); }}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '32px' }}>
          <Link to="/contact" className="btn-primary mobile-cta">Contact Us</Link>
          <Link to="/admin" className="mobile-nav-link" style={{ fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.02)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
              <polyline points="10 17 15 12 10 7"/>
              <line x1="15" y1="12" x2="3" y2="12"/>
            </svg>
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
