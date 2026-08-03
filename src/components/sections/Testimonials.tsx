'use client';

import { Quote, Star } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { motionTokens } from '@/lib/motion-tokens';

const testimonials = [
  {
    quote:
      'A Vanessa transformou nosso RH em um parceiro estratégico. O processo de contratação ficou muito mais humano e assertivo, e a retenção de talentos cresceu de verdade.',
    name: 'Mariana Costa',
    role: 'CEO · TechNova',
  },
  {
    quote:
      'Os treinamentos de liderança mudaram o clima da equipe. A comunicação melhorou e os líderes ganharam confiança. Recomendo de olhos fechados.',
    name: 'Rafael Souza',
    role: 'Gerente de Operações · Grupo Andes',
  },
  {
    quote:
      'Diagnóstico certeiro e plano de ação realista. Em poucos meses sentimos a diferença na satisfação do time e na produtividade do negócio.',
    name: 'Camila Ferreira',
    role: 'Fundadora · Loja Vera',
  },
];

export function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section
      id="depoimentos"
      className="scroll-mt-20 bg-surface-container-lowest px-margin-mobile py-xl md:px-margin-desktop"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="mb-xl text-center" y={motionTokens.distance.md}>
          <h2 className="text-headline-lg font-semibold text-primary md:text-display-lg">
            O que dizem quem já trabalhou comigo
          </h2>
          <div className="mx-auto mt-base h-1 w-20 rounded-full brand-gradient" />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-md md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <figure className="glass-card flex h-full flex-col rounded-3xl p-xl transition-transform duration-300 hover:-translate-y-1.5">
                <Quote className="mb-md h-8 w-8 text-secondary" />
                <div className="mb-md flex gap-0.5" aria-label="5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Star key={star} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <blockquote className="flex-1 text-body-md text-on-surface-variant">
                  "{item.quote}"
                </blockquote>
                <figcaption className="mt-md border-t border-outline-variant pt-md">
                  <p className="text-headline-md font-semibold text-primary">{item.name}</p>
                  <p className="text-label-sm text-on-surface-variant">{item.role}</p>
                </figcaption>
              </figure>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
