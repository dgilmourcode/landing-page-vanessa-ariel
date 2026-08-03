'use client';

import { HeartHandshake, Lightbulb } from 'lucide-react';
import { LinkedinLogo } from '@phosphor-icons/react';
import { MotionIn } from '@/components/ui/MotionIn';
import { ParallaxLayer } from '@/components/ui/ParallaxLayer';
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
    <section id="sobre" className="scroll-mt-20 px-margin-mobile py-xl md:px-margin-desktop">
      <div className="mx-auto grid w-full max-w-[85rem] grid-cols-1 items-center gap-xl md:grid-cols-2">
        <div className="min-w-0 md:col-start-2 md:row-start-1">
          <MotionIn direction="right">
            <h2 className="text-headline-lg font-semibold text-primary">Sobre Vanessa Ariel</h2>
            <div className="mt-base mb-md h-1 w-20 rounded-full brand-gradient" />
          </MotionIn>

          <MotionIn delay={0.1} direction="right">
            <p className="text-body-lg text-on-surface-variant">
              Com uma trajetória dedicada à psicologia organizacional e gestão estratégica, Vanessa
              Ariel acredita que o sucesso de uma empresa está intrinsecamente ligado ao bem-estar e
              desenvolvimento de seus colaboradores.
            </p>
          </MotionIn>

          <MotionIn delay={0.2} direction="right">
            <p className="m-2 text-body-md text-on-surface-variant">
              Minha missão é desmistificar o RH transacional e elevar a área ao seu papel
              fundamental: parceira estratégica do negócio. Através de uma visão sistêmica e
              acolhedora, auxilio empreendedores a construir culturas fortes e equipes de alta
              performance.
            </p>
          </MotionIn>
        </div>

        <div className="relative w-full md:col-start-1 md:row-span-2 md:row-start-1">
          <MotionIn direction="left" distance={motionTokens.distance.xl} className="relative z-0">
            <div className="aspect-[5/6] overflow-hidden rounded-3xl shadow-2xl">
              <ParallaxLayer speed={0.12}>
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
              </ParallaxLayer>
            </div>
          </MotionIn>
        </div>

        <div className="min-w-0 md:col-start-2 md:row-start-2">
          <div className="grid grid-cols-2 gap-md py-md">
            {values.map((value, index) => (
              <MotionIn
                key={value.title}
                delay={0.3 + index * 0.1}
                direction="up"
                distance={motionTokens.distance.md}
                className="h-full"
              >
                <div className="h-full rounded-xl bg-surface-container-low p-base">
                  <div className="mb-sm flex h-10 w-10 items-center justify-center rounded-full bg-secondary-fixed-dim/40 text-secondary">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-headline-md font-semibold text-secondary">{value.title}</h4>
                  <p className="text-label-sm text-on-surface-variant">{value.description}</p>
                </div>
              </MotionIn>
            ))}
          </div>

          <MotionIn delay={0.45} direction="right" distance={motionTokens.distance.sm}>
            <blockquote className="border-l-4 border-primary pl-md text-body-lg italic text-primary">
              &quot;Pessoas não são recursos, são o coração do negócio.&quot;
            </blockquote>
          </MotionIn>

          <MotionIn delay={0.55} direction="right" distance={motionTokens.distance.sm}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="m-4 group inline-flex items-center gap-sm font-bold text-primary"
            >
              Ver perfil no LinkedIn
              <LinkedinLogo
                weight="fill"
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </MotionIn>
        </div>
      </div>
    </section>
  );
}
