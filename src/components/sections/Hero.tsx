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
        className="absolute inset-0 block"
      >
        <img
          src={background.src}
          srcSet={background.srcSet}
          sizes={background.sizes}
          width={background.width}
          height={background.height}
          alt="Vanessa Ariel — Gestão de RH"
          className="h-full w-full object-cover object-[50%_center] sm:object-[20%_center]"
        />
        <span className="sr-only">Agende uma consultoria — vá para a seção de contato</span>
      </a>
    </section>
  );
}
