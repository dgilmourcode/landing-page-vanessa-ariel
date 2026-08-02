'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Minus, Plus } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { motionTokens, springs } from '@/lib/motion-tokens';

const faqs = [
  {
    q: 'Como funciona a consultoria em gestão de RH?',
    a: 'Começa com um diagnóstico da sua realidade: cultura, processos e desafios. A partir daí, construímos um plano de ação sob medida e acompanhamos a implementação, ajustando o que for preciso até você atingir os resultados.',
  },
  {
    q: 'Vocês atendem empresas de qualquer porte?',
    a: 'Sim. As soluções são desenhadas para o momento da sua empresa, desde pequenos negócios que estão estruturando o RH até organizações maiores que buscam otimizar processos e reter talentos.',
  },
  {
    q: 'Como é o processo de recrutamento e seleção?',
    a: 'Unimos técnica e humanização: definimos o perfil ideal, fazemos hunting e avaliações (técnica, comportamental e fit cultural) e entregamos os candidatos mais alinhados ao seu negócio.',
  },
  {
    q: 'Os treinamentos podem ser feitos in-company?',
    a: 'Sim. Workshops e programas de desenvolvimento acontecem na sua empresa, com conteúdo alinhado à cultura e às dores reais das suas equipes e lideranças.',
  },
  {
    q: 'Como entro em contato e solicito uma proposta?',
    a: 'Pelo formulário da página, pelo WhatsApp ou por e-mail. Retorno rapidamente para agendarmos uma conversa inicial sem compromisso sobre as necessidades da sua empresa.',
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  const reduce = useReducedMotion();

  return (
    <section id="faq" className="scroll-mt-20 px-margin-mobile py-xl md:px-margin-desktop">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal y={motionTokens.distance.md}>
          <div className="mb-xl text-center">
            <h2 className="text-headline-lg font-semibold text-primary md:text-display-lg">
              Perguntas Frequentes
            </h2>
            <div className="mx-auto mt-base h-1 w-20 rounded-full brand-gradient" />
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-sm">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <ScrollReveal key={faq.q} delay={index * 0.05} y={motionTokens.distance.md}>
                <div
                  className={`overflow-hidden rounded-2xl border bg-surface-container-lowest transition-[border-color,box-shadow] duration-300 ${
                    isOpen
                      ? 'border-primary/30 shadow-lg shadow-primary/5'
                      : 'border-outline-variant'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-resposta-${index}`}
                    className="flex w-full items-center justify-between gap-sm px-md py-sm text-left"
                  >
                    <span className="text-headline-md font-semibold text-primary">{faq.q}</span>
                    {isOpen ? (
                      <Minus className="h-5 w-5 shrink-0 text-primary" />
                    ) : (
                      <Plus className="h-5 w-5 shrink-0 text-primary" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="conteudo"
                        id={`faq-resposta-${index}`}
                        className="overflow-hidden"
                        initial={reduce ? undefined : { height: 0, opacity: 0 }}
                        animate={reduce ? undefined : { height: 'auto', opacity: 1 }}
                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={reduce ? undefined : springs.snappy}
                      >
                        <p className="px-md pb-md text-body-md text-on-surface-variant">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
