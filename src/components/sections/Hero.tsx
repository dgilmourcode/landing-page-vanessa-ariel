'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import type { OptimizedImage } from '@/lib/image';

interface HeroProps {
  background: OptimizedImage;
}

export function Hero({ background }: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative aspect-[16/9] scroll-mt-16 overflow-hidden sm:aspect-auto sm:h-[90svh]"
    >
      <motion.img
        src={background.src}
        srcSet={background.srcSet}
        sizes={background.sizes}
        width={background.width}
        height={background.height}
        alt=""
        style={{
          y: reduce ? '0%' : y,
          scale: 1.15,
          willChange: 'transform',
        }}
        className="h-full w-full object-cover object-[40%_center] sm:object-[20%_center]"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-10 left-0 z-10 px-10 sm:bottom-40 sm:px-20 md:bottom-32 md:px-42"
      >
        <a
          href="#contato"
          className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 text-xs font-medium text-white shadow-md transition-all duration-200 hover:shadow-xl hover:scale-105 md:px-7 md:py-3 md:text-body-lg"
        >
          Agendar Consultoria
        </a>
      </motion.div>
    </section>
  );
}
