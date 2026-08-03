'use client';

import { useRef, type CSSProperties, type ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';

interface ParallaxLayerProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  speed?: number;
  factor?: number;
}

export function ParallaxLayer({
  children,
  className,
  style,
  speed = 0.5,
  factor = 1.15,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-(speed * 100), speed * 100]);

  if (reduce)
    return (
      <div className={`overflow-hidden ${className ?? ''}`} style={style}>
        <div className="h-full w-full">{children}</div>
      </div>
    );

  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ''}`} style={style}>
      {/* scale > 1 garante que o translateY nunca exponha borda */}
      <motion.div
        className="h-full w-full"
        style={{
          y,
          scale: factor,
          willChange: 'transform',
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
