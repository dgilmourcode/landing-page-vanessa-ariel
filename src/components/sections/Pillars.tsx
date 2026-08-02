'use client';

import type { OptimizedImage } from '@/lib/image';

interface PillarsProps {
  background: OptimizedImage;
}

export function Pillars({ background }: PillarsProps) {
  return (
    <section id="pilares" aria-label="Nossos Pilares de Atuação" className="scroll-mt-20">
      <img
        src={background.src}
        srcSet={background.srcSet}
        sizes={background.sizes}
        width={background.width}
        height={background.height}
        alt="Nossos Pilares de Atuação"
        loading="lazy"
        className="h-auto w-full"
      />
    </section>
  );
}
