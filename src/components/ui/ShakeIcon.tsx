'use client';

import type { ReactNode } from 'react';

interface ShakeIconProps {
  children: ReactNode;
  className?: string;
}

export function ShakeIcon({ children, className }: ShakeIconProps) {
  return (
    <span className={`inline-flex ${className ?? ''}`}>
      <span className="group-hover:animate-shake">{children}</span>
    </span>
  );
}
