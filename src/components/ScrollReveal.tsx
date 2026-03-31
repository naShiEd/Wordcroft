import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  width?: "fit-content" | "100%";
}

export const ScrollReveal = ({ children, className = "", delay = 0, width = "100%" }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ width, height: '100%', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
      className={`${className} ${isVisible ? 'reveal active' : 'reveal'}`}
    >
      <div style={{ transitionDelay: `${delay}s`, height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </div>
  );
};
