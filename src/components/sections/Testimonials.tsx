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
  {
    quote:
      'A metodologia aplicada trouxe clareza para nossos processos de gestão de pessoas. Hoje temos métricas claras e uma cultura de feedback contínuo.',
    name: 'Bruno Oliveira',
    role: 'Diretor de Operações · Mesa Sul',
  },
];

export function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section
      id="depoimentos"
      className="scroll-mt-20 bg-surface-container-lowest px-margin-mobile py-xl md:px-margin-desktop"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="mb-16 text-center" y={motionTokens.distance.md}>
          <h2 className="text-headline-lg font-semibold text-primary md:text-display-lg">
            O que dizem quem já trabalhou comigo
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full brand-gradient" />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -8,
                scale: 1.015,
                boxShadow: '0 30px 60px -12px rgba(92,0,131,0.25)',
                borderColor: 'rgba(92,0,131,0.3)',
              }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card flex h-full flex-col rounded-3xl p-8"
            >
              <Quote className="mb-6 h-9 w-9 text-secondary" />
              <div className="mb-6 flex gap-1" aria-label="5 de 5 estrelas">
                {Array.from({ length: 5 }).map((_, star) => (
                  <Star key={star} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>
              <blockquote className="flex-1 text-body-md leading-relaxed text-on-surface-variant">
                "{item.quote}"
              </blockquote>
              <figcaption className="mt-8 border-t border-outline-variant pt-6">
                <p className="text-headline-md font-semibold text-primary">{item.name}</p>
                <p className="mt-1 text-label-sm text-on-surface-variant">{item.role}</p>
              </figcaption>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
