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
      className="relative aspect-[3/2] scroll-mt-16 sm:aspect-auto sm:min-h-[55svh]"
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
        className="absolute bottom-36 left-0 z-10 px-10 sm:bottom-40 sm:px-20 md:bottom-46 md:px-40"
      >
        <a
          href="#contato"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-body-sm font-medium text-white shadow-md transition-all duration-200 hover:shadow-xl hover:scale-105 md:px-7 md:py-3 md:text-body-lg"
        >
          Agendar Consultoria
        </a>
      </MotionIn>
    </section>
  );
}
