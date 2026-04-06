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
      { label: 'About us', description: 'HPE Growth as a technology growth investor.', href: '/about' },
      { label: 'Our team', description: 'Meet our team members.', href: '/team' },
      { label: 'Mission, purpose and values', description: 'Get to know our core values.', href: '/mission-values' },
      { label: 'Careers', description: 'Discover job opportunities with us.', href: '/careers' },
      { label: 'News', description: 'Read the latest news about our firm and portfolio.', href: '/news' },
      { label: 'Insights', description: 'Learn more about our market and portfolio insights.', href: '/insights' },
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
  const location = useLocation();
  const { content } = useCMS();
  const { global } = content;

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [location]);

  return (
    <header className="navbar">
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
        <div className="nav-dropdown glass-effect">
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
          <Link to="/admin" style={{ color: 'var(--white)', padding: '8px', opacity: 0.8, display: 'flex' }} aria-label="Login">
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
            <Link to={item.href} className="mobile-nav-link">{item.label}</Link>
            {item.children.map((child) => (
              <Link key={child.href} to={child.href} className="mobile-nav-child">{child.label}</Link>
            ))}
          </div>
        ))}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '32px' }}>
          <Link to="/contact" className="btn-primary mobile-cta">Contact Us</Link>
          <Link to="/admin" className="mobile-nav-link" style={{ fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
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
