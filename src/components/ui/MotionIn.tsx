'use client';

import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { motionTokens } from '@/lib/motion-tokens';

export type MotionInDirection = 'up' | 'down' | 'left' | 'right' | 'fade';

interface MotionInProps {
  children: ReactNode;
  className?: string;
  direction?: MotionInDirection;
  delay?: number;
  distance?: number;
  scale?: number;
}

const origins: Record<MotionInDirection, string> = {
  up: 'center bottom',
  down: 'center top',
  left: 'left center',
  right: 'right center',
  fade: 'center',
};

export function MotionIn({
  children,
  className,
  direction = 'up',
  delay = 0,
  distance = 56,
  scale = 1,
}: MotionInProps) {
  const reduce = useReducedMotion();

  const initial = reduce
    ? { opacity: 0 }
    : {
        opacity: 0,
        scale,
        x: 0,
        y: 0,
        ...(direction === 'left' && { x: -distance }),
        ...(direction === 'right' && { x: distance }),
        ...(direction === 'up' && { y: distance }),
        ...(direction === 'down' && { y: -distance }),
      };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-64px' }}
      transition={{ duration: motionTokens.duration.slow, delay, ease: motionTokens.easing.smooth }}
    >
      {children}
    </motion.div>
  );
}
