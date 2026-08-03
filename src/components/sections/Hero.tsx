'use client';

import { MotionIn } from '@/components/ui/MotionIn';
import type { OptimizedImage } from '@/lib/image';

interface HeroProps {
  background: OptimizedImage;
}

export function Hero({ background }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative aspect-[16/9] scroll-mt-16 sm:aspect-auto sm:h-[90svh]"
    >
      <img
        src={background.src}
        srcSet={background.srcSet}
        sizes={background.sizes}
        width={background.width}
        height={background.height}
        alt=""
        className="h-full w-full object-cover object-[40%_center] sm:object-[20%_center]"
      />

      <MotionIn
        direction="up"
        delay={0.3}
        className="absolute bottom-10 left-0 z-10 px-10 sm:bottom-40 sm:px-20 md:bottom-32 md:px-42"
      >
        <a
          href="#contato"
          className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 text-xs font-medium text-white shadow-md transition-all duration-200 hover:shadow-xl hover:scale-105 md:px-7 md:py-3 md:text-body-lg"
        >
          Agendar Consultoria
        </a>
      </MotionIn>
    </section>
  );
}
