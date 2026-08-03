'use client';

import { motion, type ReactNode } from 'motion/react';

interface ShakeIconProps {
  children: ReactNode;
  className?: string;
}

export function ShakeIcon({ children, className }: ShakeIconProps) {
  return (
    <motion.span
      className={className}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.span>
  );
}
