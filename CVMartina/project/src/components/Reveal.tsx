import { useEffect, useRef, useState, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'fade-in' | 'scale-in';
  as?: keyof JSX.IntrinsicElements;
};

export function Reveal({
  children,
  className = '',
  delay = 0,
  animation = 'fade-up',
  as: Tag = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

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

  const Component = Tag as any;

  return (
    <Component
      ref={ref}
      className={`${className} transition-all will-change-transform`}
      style={{
        opacity: visible ? undefined : 0,
        animation: visible ? `${animation} 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms forwards` : undefined,
      }}
    >
      {children}
    </Component>
  );
}
