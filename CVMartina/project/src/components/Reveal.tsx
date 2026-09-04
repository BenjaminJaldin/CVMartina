import { useEffect, useRef, useState, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'fade-in' | 'scale-in';
};

const shouldSkipAnimation = () =>
  typeof window !== 'undefined' &&
  (window.innerWidth < 640 || window.matchMedia('(prefers-reduced-motion: reduce)').matches);

export function Reveal({
  children,
  className = '',
  delay = 0,
  animation = 'fade-up',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(shouldSkipAnimation);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (shouldSkipAnimation()) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all will-change-transform`}
      style={{
        opacity: visible ? undefined : 0,
        animation: visible ? `${animation} 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms forwards` : undefined,
      }}
    >
      {children}
    </div>
  );
}
