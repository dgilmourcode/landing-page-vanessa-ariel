'use client';

import { useReducedMotion } from 'motion/react';
import { MotionIn } from '@/components/ui/MotionIn';
import { useCountUp } from '@/hooks/use-count-up';
import { motionTokens } from '@/lib/motion-tokens';

const stats = [
  { end: 10, suffix: '+', label: 'Anos de Experiência' },
  { end: 500, suffix: '+', label: 'Profissionais Avaliados' },
  { end: 98, suffix: '%', label: 'Satisfação dos Clientes' },
  { end: 30, suffix: '+', label: 'Empresas Atendidas' },
];

interface StatCardProps {
  end: number;
  suffix: string;
  label: string;
  delay: number;
}

function StatCard({ end, suffix, label, delay }: StatCardProps) {
  const reduce = useReducedMotion();
  const { count, ref } = useCountUp(end, { delay, reduce: Boolean(reduce) });

  return (
    <div className="glass-card flex h-full flex-col items-center justify-center gap-sm rounded-2xl p-lg text-center transition-transform duration-300 hover:-translate-y-1.5">
      <p
        ref={ref}
        className="brand-text-gradient text-headline-lg font-bold tabular-nums md:text-display-lg"
      >
        {count}
        {suffix}
      </p>
      <p className="text-label-sm uppercase tracking-widest text-on-surface-variant">{label}</p>
    </div>
  );
}

export function Stats() {
  return (
    <section
      id="numeros"
      aria-label="Números e resultados"
      className="scroll-mt-20 px-margin-mobile py-xl md:px-margin-desktop"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-md md:grid-cols-4">
          {stats.map((stat, index) => (
            <MotionIn
              key={stat.label}
              delay={index * 0.1}
              direction="up"
              distance={motionTokens.distance.md}
              className="h-full"
            >
              <StatCard {...stat} delay={index * 0.1} />
            </MotionIn>
          ))}
        </div>
      </div>
    </section>
  );
}
