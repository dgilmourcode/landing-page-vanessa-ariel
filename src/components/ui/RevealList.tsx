import type { ReactNode } from 'react';

export function RevealList({ children }: { children: ReactNode }) {
  return <ul>{children}</ul>;
}
