import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Partnerships from './pages/Partnerships';
import Contact from './pages/Contact';
import MissionValues from './pages/MissionValues';
import Sustainability from './pages/Sustainability';
import Careers from './pages/Careers';
import News from './pages/News';
import Insights from './pages/Insights';
import TeamMember from './pages/TeamMember';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import SustainabilityPolicy from './pages/SustainabilityPolicy';
import AdminDashboard from './admin/AdminDashboard';
import Login from './admin/Login';
import PageLoader from './components/PageLoader';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { CMSProvider } from './CMSContext';
import './App.css';

/** Main public site layout — wraps all public pages */
function SiteLayout() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 2,
      infinite: false,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="app-container">
      <PageLoader />
      <FloatingWhatsApp />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <CMSProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* ── Admin routes — standalone, no Navbar/Footer ── */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/login" element={<Login />} />

          {/* ── Public site routes — wrapped in SiteLayout ── */}
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/our-team" element={<Team />} />
            <Route path="/meet-the-team" element={<Team />} />
            <Route path="/team/:id" element={<TeamMember />} />
            <Route path="/mission-values" element={<MissionValues />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/partners" element={<Partnerships />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/news" element={<News />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/sustainability-policy" element={<SustainabilityPolicy />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </CMSProvider>
  );
}

export default App;
