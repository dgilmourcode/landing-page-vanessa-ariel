'use client';

import type { OptimizedImage } from '@/lib/image';

interface HeroProps {
  background: OptimizedImage;
}

export function Hero({ background }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative aspect-[3/2] scroll-mt-20 sm:aspect-auto sm:min-h-[85svh]"
    >
      <a
        href="#contato"
        aria-label="Agende uma consultoria"
        className="absolute inset-0 block bg-cover bg-[position:right]"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <span className="sr-only">Agende uma consultoria — vá para a seção de contato</span>
      </a>
    </section>
  );
}
