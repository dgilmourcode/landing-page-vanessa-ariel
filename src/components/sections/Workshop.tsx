'use client';

import { MotionIn } from '@/components/ui/MotionIn';
import { ParallaxLayer } from '@/components/ui/ParallaxLayer';
import type { OptimizedImage } from '@/lib/image';

interface WorkshopProps {
  image: OptimizedImage;
}

export function Workshop({ image }: WorkshopProps) {
  return (
    <section
      aria-label="Vanessa Ariel em workshop corporativo"
      className="scroll-mt-20 px-margin-mobile py-xl md:px-margin-desktop"
    >
      <div className="mx-auto max-w-5xl">
        <MotionIn direction="up" distance={56}>
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <ParallaxLayer speed={0.15} className="aspect-[16/9] w-full">
              <img
                src={image.src}
                srcSet={image.srcSet}
                sizes={image.sizes}
                width={image.width}
                height={image.height}
                alt="Vanessa Ariel conduzindo um workshop corporativo com a equipe"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </ParallaxLayer>
          </div>
        </MotionIn>
      </div>
    </section>
  );
}
