'use client';

import { ArrowRight, Calendar, Users, Verified } from 'lucide-react';
import { AnimatedText, type AnimatedWord } from '@/components/ui/AnimatedText';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ParallaxLayer } from '@/components/ui/ParallaxLayer';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import type { OptimizedImage } from '@/lib/image';
import { motionTokens } from '@/lib/motion-tokens';

const titleWords: AnimatedWord[] = [
  { text: 'Transformando' },
  { text: 'negócios' },
  { text: 'através' },
  { text: 'do' },
  { text: 'potencial', className: 'brand-text-gradient' },
  { text: 'humano.', className: 'brand-text-gradient' },
];

interface HeroProps {
  image: OptimizedImage;
}

export function Hero({ image }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[90vh] items-center overflow-hidden px-margin-mobile py-xl scroll-mt-20 md:px-margin-desktop"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 h-96 w-96 animate-float rounded-full brand-gradient opacity-10 blur-3xl" />
        <div
          className="absolute -left-24 top-1/3 h-80 w-80 animate-float rounded-full bg-secondary-container opacity-20 blur-3xl"
          style={{ animationDelay: '1.5s' }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-xl lg:grid-cols-2">
        <div className="space-y-md">
          <ScrollReveal delay={0} y={motionTokens.distance.sm}>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-fixed px-4 py-1.5 text-label-sm font-semibold uppercase tracking-widest text-on-primary-fixed">
              <Verified className="h-4 w-4" />
              Gestão de RH Humana e Estratégica
            </span>
          </ScrollReveal>

          <AnimatedText
            words={titleWords}
            delay={0.1}
            className="block text-display-lg text-primary"
          />

          <ScrollReveal delay={0.35} y={motionTokens.distance.md}>
            <p className="max-w-lg text-body-lg text-on-surface-variant">
              Soluções personalizadas em gestão de pessoas para empresas que buscam excelência,
              retenção de talentos e um ambiente corporativo saudável.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.45} y={motionTokens.distance.md}>
            <div className="flex flex-col gap-md pt-base sm:flex-row">
              <MagneticButton
                href="#contato"
                className="brand-gradient inline-flex items-center justify-center gap-sm rounded-full px-8 py-4 text-headline-md font-semibold text-white shadow-xl shadow-primary/10"
              >
                Agende uma Consultoria
                <Calendar className="h-5 w-5" />
              </MagneticButton>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-sm rounded-full border-2 border-primary px-8 py-4 text-headline-md font-semibold text-primary transition-colors duration-300 hover:bg-primary-fixed/60"
              >
                Conheça meus serviços
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3} y={motionTokens.distance.xl} className="relative hidden lg:block">
          <ParallaxLayer speed={0.15} maxOffset={100}>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -right-6 -top-6 h-full w-full rounded-[2rem] border-4 border-secondary-fixed"
              />
              <div className="relative z-10 aspect-square overflow-hidden rounded-[2rem] shadow-2xl">
                <img
                  src={image.src}
                  srcSet={image.srcSet}
                  sizes={image.sizes}
                  width={image.width}
                  height={image.height}
                  alt="Vanessa Ariel, especialista em Gestão de RH, retrato profissional em escritório moderno."
                  className="h-full w-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="glass-card absolute -bottom-10 -left-10 z-20 flex items-center gap-md rounded-2xl p-6 shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-container text-on-primary-container">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-headline-md font-semibold text-primary">+10 anos</p>
                  <p className="text-label-sm text-on-surface-variant">de experiência em RH</p>
                </div>
              </div>
            </div>
          </ParallaxLayer>
        </ScrollReveal>
      </div>
    </section>
  );
}
