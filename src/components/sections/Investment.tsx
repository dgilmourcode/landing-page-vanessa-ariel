'use client';

import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { MotionIn } from '@/components/ui/MotionIn';
import { motionTokens } from '@/lib/motion-tokens';

const WHATSAPP_URL = 'https://wa.me/5586994829203';

const benefits = [
  'Diagnóstico completo da sua realidade',
  'Plano de ação sob medida',
  'Acompanhamento da implementação',
  'Treinamento de líderes incluso',
];

export function Investment() {
  return (
    <section
      id="investimento"
      aria-label="Invista na qualidade do seu RH"
      className="scroll-mt-20 px-margin-mobile pb-xl md:px-margin-desktop"
    >
      <div className="mx-auto max-w-7xl">
        <MotionIn direction="up" distance={motionTokens.distance.md}>
          <div className="relative overflow-hidden rounded-3xl brand-gradient p-xl md:p-2xl">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white opacity-10 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -left-16 h-72 w-72 rounded-full bg-white opacity-10 blur-3xl"
            />

            <div className="relative flex min-w-0 flex-col gap-xl md:flex-row md:items-center md:gap-xl">
              <div className="min-w-0 flex-1">
                <span className="inline-flex items-center gap-sm rounded-full bg-white/15 px-4 py-1.5 text-label-sm font-semibold uppercase tracking-widest text-white">
                  <Sparkles className="h-4 w-4" />
                  Consultoria estratégica
                </span>
                <h2 className="mt-md text-headline-lg font-semibold text-white md:text-display-lg">
                  Invista na qualidade do seu RH
                </h2>
                <p className="mt-sm text-body-lg text-white/85">
                  Transforme o RH em uma parceira estratégica do negócio: diagnóstico, plano de ação
                  e acompanhamento para construir uma cultura forte e reter talentos.
                </p>
                <ul className="mt-md grid grid-cols-1 gap-sm sm:grid-cols-2">
                  {benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-center gap-2 text-body-md text-white/90"
                    >
                      <Check className="h-5 w-5 shrink-0 text-white" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full md:w-80 md:shrink-0">
                <div className="flex flex-col items-center gap-md rounded-2xl bg-white/10 p-xl backdrop-blur-md text-center">
                  <p className="text-balance text-body-lg font-semibold leading-snug text-white">
                    Torne seu RH um pilar de crescimento da sua empresa
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-sm rounded-full bg-white px-4 py-3 text-body-lg font-semibold text-primary shadow-xl transition-transform duration-300 hover:scale-105 active:scale-95 md:px-6 md:py-4 md:text-headline-md"
                  >
                    Quero saber mais
                    <ArrowRight className="h-5 w-5 shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </MotionIn>
      </div>
    </section>
  );
}
