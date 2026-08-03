'use client';

import { useRef, type CSSProperties, type ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';

interface ParallaxLayerProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  speed?: number;
  maxOffset?: number;
}

export function ParallaxLayer({
  children,
  className,
  style,
  speed = 0.5,
  maxOffset = 120,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [maxOffset * speed, -maxOffset * speed]);

  if (reduce)
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );

  return (
    <div ref={ref} className={className} style={style}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
