import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import AdminDashboard from './admin/AdminDashboard';
import PageLoader from './components/PageLoader';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { CMSProvider } from './CMSContext';
import './App.css';

function App() {
  useEffect(() => {
    // ... animation code
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <CMSProvider>
      <Router>
        <ScrollToTop />
        <PageLoader />
        <FloatingWhatsApp />
        <div className="app-container">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/team/:id" element={<TeamMember />} />
              <Route path="/mission-values" element={<MissionValues />} />
              <Route path="/partnerships" element={<Partnerships />} />
              <Route path="/partners" element={<Partnerships />} />
              <Route path="/sustainability" element={<Sustainability />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/news" element={<News />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CMSProvider>
  );
}

export default App;
