'use client';

import { MotionIn } from '@/components/ui/MotionIn';
import { ParallaxLayer } from '@/components/ui/ParallaxLayer';
import type { OptimizedImage } from '@/lib/image';

interface PillarsProps {
  background: OptimizedImage;
}

export function Pillars({ background }: PillarsProps) {
  return (
    <section id="pilares" aria-label="Nossos Pilares de Atuação" className="scroll-mt-20">
      <MotionIn direction="fade">
        <ParallaxLayer speed={0.2} className="aspect-[16/9] w-full">
          <img
            src={background.src}
            srcSet={background.srcSet}
            sizes={background.sizes}
            width={background.width}
            height={background.height}
            alt="Nossos Pilares de Atuação"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </ParallaxLayer>
      </MotionIn>
    </section>
  );
}
