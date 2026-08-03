'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';

export type MotionInDirection = 'up' | 'down' | 'left' | 'right' | 'fade';

interface MotionInProps {
  children: ReactNode;
  className?: string;
  direction?: MotionInDirection;
  delay?: number;
  distance?: number;
  scale?: number;
}

const directionMap = {
  up: { x: 0, y: 56 },
  down: { x: 0, y: -56 },
  left: { x: -56, y: 0 },
  right: { x: 56, y: 0 },
  fade: { x: 0, y: 0 },
} as const;

export function MotionIn({
  children,
  className,
  direction = 'up',
  delay = 0,
  distance = 56,
  scale = 1,
}: MotionInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const dir = directionMap[direction];
  const factor = distance / 56;

  const variants: Variants = reduce
    ? {}
    : {
        hidden: {
          opacity: 0,
          x: dir.x * factor,
          y: dir.y * factor,
          scale,
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            delay,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial={reduce ? false : 'hidden'}
      whileInView={reduce ? undefined : 'visible'}
      viewport={{ once: true, margin: '-60px' }}
    >
      {children}
    </motion.div>
  );
}
