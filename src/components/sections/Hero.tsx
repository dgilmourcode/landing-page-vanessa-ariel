'use client';

import { ParallaxLayer } from '@/components/ui/ParallaxLayer';
import { MotionIn } from '@/components/ui/MotionIn';
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
      <ParallaxLayer speed={0.2} maxOffset={60}>
        <img
          src={background.src}
          srcSet={background.srcSet}
          sizes={background.sizes}
          width={background.width}
          height={background.height}
          alt=""
          className="h-full w-full object-cover object-[40%_center] sm:object-[20%_center]"
        />
      </ParallaxLayer>

      <MotionIn
        direction="up"
        delay={0.3}
        className="absolute inset-x-0 bottom-12 flex justify-center px-4"
      >
        <a
          href="#contato"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-body-lg font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105 md:px-8 md:py-4 md:text-headline-md"
        >
          Quero saber mais
        </a>
      </MotionIn>
    </section>
  );
}
