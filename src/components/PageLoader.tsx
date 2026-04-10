import { useEffect, useState } from 'react';
import './PageLoader.css';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // Wait 1.2 seconds for initial animations to finish and assets to start loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`page-loader ${!loading ? 'fade-out' : ''}`}>
      <img src="/logo.png" alt="Wordcroft Loader" className="loader-logo" />
    </div>
  );
}
