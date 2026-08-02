import { useEffect, useRef, useState } from 'react';

interface UseCountUpOptions {
  duration?: number;
  delay?: number;
  reduce?: boolean;
}

export function useCountUp(end: number, options: UseCountUpOptions = {}) {
  const { duration = 1.8, delay = 0, reduce = false } = options;
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) {
      setCount(end);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startAt = performance.now() + delay * 1000;

          const tick = (now: number) => {
            const t = Math.max(0, (now - startAt) / (duration * 1000));
            const progress = Math.min(t, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, delay, reduce]);

  return { count, ref };
}
