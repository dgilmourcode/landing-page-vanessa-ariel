'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { motionTokens } from '@/lib/motion-tokens';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  scale?: number;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = motionTokens.distance.lg,
  scale = 1,
}: ScrollRevealProps) {
  const [mounted, setMounted] = useState(false);
  const reduce = useReducedMotion();
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y, scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: motionTokens.duration.slow,
        delay,
        ease: motionTokens.easing.smooth,
      }}
    >
      {children}
    </motion.div>
  );
}
