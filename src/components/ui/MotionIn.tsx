'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';

export type MotionInDirection = 'up' | 'down' | 'left' | 'right' | 'fade';

interface MotionInProps {
  children: ReactNode;
  className?: string;
  direction?: MotionInDirection;
  delay?: number;
  distance?: number;
  scale?: number;
  tilt?: boolean;
}

const directionMap = {
  up: { x: 0, y: 1 },
  down: { x: 0, y: -1 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
  fade: { x: 0, y: 0 },
};

export function MotionIn({
  children,
  className,
  direction = 'up',
  delay = 0,
  distance = 56,
  scale = 1,
  tilt = false,
}: MotionInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  if (reduce) return <div className={className}>{children}</div>;

  const dir = directionMap[direction];

  const target = {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    rotateX: 0,
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ willChange: 'transform, opacity' }}
      initial={{
        opacity: 0,
        x: dir.x * distance,
        y: dir.y * distance,
        scale,
        ...(tilt && { rotateX: 22 }),
      }}
      animate={isInView ? target : {}}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}