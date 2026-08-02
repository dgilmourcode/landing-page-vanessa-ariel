'use client';

import type { OptimizedImage } from '@/lib/image';

interface HeroProps {
  background: OptimizedImage;
}

export function Hero({ background }: HeroProps) {
  return (
    <section id="inicio" className="relative min-h-[90vh] scroll-mt-20">
      <a
        href="#contato"
        aria-label="Agende uma consultoria"
        className="absolute inset-0 block bg-cover bg-center"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <span className="sr-only">Agende uma consultoria — vá para a seção de contato</span>
      </a>
    </section>
  );
}
