'use client';

import { ArrowRight, Calendar, Sparkles, Star, Users } from 'lucide-react';
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
  { text: 'potencial', className: 'brand-text-gradient-light' },
  { text: 'humano.', className: 'brand-text-gradient-light' },
];

const stats = [
  { value: '+10', label: 'anos de experiência em RH' },
  { value: '+200', label: 'profissionais avaliados' },
  { value: '+50', label: 'treinamentos aplicados' },
];

interface HeroProps {
  image: OptimizedImage;
}

export function Hero({ image }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[90vh] items-center overflow-hidden scroll-mt-20 hero-gradient px-margin-mobile py-xl md:px-margin-desktop"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 h-96 w-96 animate-float rounded-full bg-white opacity-10 blur-3xl" />
        <div
          className="absolute -left-24 top-1/3 h-80 w-80 animate-float rounded-full bg-[#ff69b4] opacity-20 blur-3xl"
          style={{ animationDelay: '1.5s' }}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-xl lg:grid-cols-2">
        <div className="space-y-md">
          <ScrollReveal delay={0} y={motionTokens.distance.sm}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-label-sm font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-[#ffb0d0]" />
              Gestão de RH Humana e Estratégica
            </span>
          </ScrollReveal>

          <AnimatedText
            words={titleWords}
            delay={0.1}
            className="block text-display-lg text-white"
          />

          <ScrollReveal delay={0.35} y={motionTokens.distance.md}>
            <p className="max-w-lg text-body-lg text-white/80">
              Soluções personalizadas em gestão de pessoas para empresas que buscam excelência,
              retenção de talentos e um ambiente corporativo saudável.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.45} y={motionTokens.distance.md}>
            <div className="flex flex-col gap-md pt-base sm:flex-row">
              <MagneticButton
                href="#contato"
                className="inline-flex items-center justify-center gap-sm rounded-full bg-white px-8 py-4 text-headline-md font-semibold text-primary shadow-xl shadow-black/20 transition-transform duration-300 hover:scale-105"
              >
                Agende uma Consultoria
                <Calendar className="h-5 w-5" />
              </MagneticButton>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-sm rounded-full border-2 border-white/40 px-8 py-4 text-headline-md font-semibold text-white transition-colors duration-300 hover:bg-white/10"
              >
                Conheça meus serviços
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.55} y={motionTokens.distance.sm}>
            <div className="flex flex-col gap-md pt-base sm:flex-row sm:items-center sm:gap-xl sm:divide-x sm:divide-white/20">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1 sm:pr-xl">
                  <p className="text-headline-md font-bold text-white">{stat.value}</p>
                  <p className="text-label-sm text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3} y={motionTokens.distance.xl} className="relative hidden lg:block">
          <ParallaxLayer speed={0.15} maxOffset={100}>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-8 rounded-full brand-gradient opacity-40 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="absolute -right-6 -top-6 h-full w-full rounded-[2rem] border-4 border-white/15"
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
              <div className="glass-card-dark absolute -bottom-10 -left-10 z-20 flex items-center gap-md rounded-2xl p-6 shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-headline-md font-semibold text-white">+10 anos</p>
                  <p className="text-label-sm text-white/70">de experiência em RH</p>
                </div>
              </div>
              <div className="glass-card-dark absolute -right-4 -top-4 z-20 hidden items-center gap-2 rounded-full px-4 py-2 shadow-lg md:flex">
                <Star className="h-4 w-4 text-[#ffb0d0] fill-[#ffb0d0]" />
                <span className="text-label-sm font-semibold text-white">Avaliação 5.0</span>
              </div>
            </div>
          </ParallaxLayer>
        </ScrollReveal>
      </div>
    </section>
  );
}
