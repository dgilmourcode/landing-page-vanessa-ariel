'use client';

import type { MouseEvent, ReactNode } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import { motionTokens } from '@/lib/motion-tokens';

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  strength?: number;
}

export function MagneticButton({
  children,
  href,
  className,
  strength = 0.25,
}: MagneticButtonProps) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const gesture = {
    whileHover: { scale: motionTokens.scale.pop },
    whileTap: { scale: motionTokens.scale.press },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={className}
        style={{ x: springX, y: springY }}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        {...gesture}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove as never}
      onMouseLeave={reset}
      {...gesture}
    >
      {children}
    </motion.button>
  );
}
