'use client';

import { ArrowRight, HeartHandshake, Lightbulb } from 'lucide-react';
import { ParallaxLayer } from '@/components/ui/ParallaxLayer';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import type { OptimizedImage } from '@/lib/image';
import { motionTokens } from '@/lib/motion-tokens';

interface AboutProps {
  image: OptimizedImage;
}

const values = [
  {
    title: 'Acolhimento',
    description: 'Escuta ativa em todos os processos.',
    icon: HeartHandshake,
  },
  { title: 'Estratégia', description: 'Foco em resultados sustentáveis.', icon: Lightbulb },
];

export function About({ image }: AboutProps) {
  return (
    <section
      id="sobre"
      className="scroll-mt-20 overflow-hidden px-margin-mobile py-xl md:px-margin-desktop"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-xl md:flex-row">
        <ScrollReveal y={motionTokens.distance.xl} className="relative w-full md:w-1/2">
          <ParallaxLayer speed={0.12} maxOffset={80}>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={image.src}
                  srcSet={image.srcSet}
                  sizes={image.sizes}
                  width={image.width}
                  height={image.height}
                  alt="Vanessa Ariel conduzindo um workshop corporativo com equipe em sala moderna."
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="glass-card absolute bottom-5 right-5 z-20 hidden max-w-xs rounded-2xl p-lg shadow-xl lg:block">
                <p className="text-body-lg italic text-primary">
                  &quot;Pessoas não são recursos, são o coração do negócio.&quot;
                </p>
              </div>
            </div>
          </ParallaxLayer>
        </ScrollReveal>

        <div className="w-full space-y-md md:w-1/2">
          <ScrollReveal y={motionTokens.distance.md}>
            <h2 className="text-headline-lg font-semibold text-primary">Sobre Vanessa Ariel</h2>
            <div className="mt-base mb-md h-1 w-20 rounded-full brand-gradient" />
          </ScrollReveal>

          <ScrollReveal delay={0.1} y={motionTokens.distance.md}>
            <p className="text-body-lg text-on-surface-variant">
              Com uma trajetória dedicada à psicologia organizacional e gestão estratégica, Vanessa
              Ariel acredita que o sucesso de uma empresa está intrinsecamente ligado ao bem-estar e
              desenvolvimento de seus colaboradores.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2} y={motionTokens.distance.md}>
            <p className="text-body-md text-on-surface-variant">
              Minha missão é desmistificar o RH transacional e elevar a área ao seu papel
              fundamental: parceira estratégica do negócio. Através de uma visão sistêmica e
              acolhedora, auxilio empreendedores a construir culturas fortes e equipes de alta
              performance.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-md py-md">
            {values.map((value, index) => (
              <ScrollReveal
                key={value.title}
                delay={0.3 + index * 0.1}
                y={motionTokens.distance.md}
                className="h-full"
              >
                <div className="h-full rounded-xl bg-surface-container-low p-base">
                  <div className="mb-sm flex h-10 w-10 items-center justify-center rounded-full bg-secondary-fixed-dim/40 text-secondary">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-headline-md font-semibold text-secondary">{value.title}</h4>
                  <p className="text-label-sm text-on-surface-variant">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.5} y={motionTokens.distance.sm}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-sm font-bold text-primary"
            >
              Ver perfil no LinkedIn
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
