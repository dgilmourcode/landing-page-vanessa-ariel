'use client';

import { Mail, MessageCircle } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { motionTokens } from '@/lib/motion-tokens';

const EMAIL = 'contato@vanessaariel.com.br';
const WHATSAPP_URL = 'https://wa.me/5586994829203';

export function Contact() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden scroll-mt-20 hero-gradient px-margin-mobile py-xl md:px-margin-desktop"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 h-96 w-96 animate-float rounded-full bg-white opacity-10 blur-3xl" />
        <div
          className="absolute -left-24 bottom-0 h-80 w-80 animate-float rounded-full bg-[#ff69b4] opacity-20 blur-3xl"
          style={{ animationDelay: '1.5s' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <ScrollReveal y={motionTokens.distance.md}>
          <h2 className="text-headline-lg font-semibold text-white md:text-display-lg">
            Pronto para elevar o nível da sua gestão de pessoas?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1} y={motionTokens.distance.md}>
          <p className="mx-auto mt-md max-w-2xl text-body-lg text-white/80">
            Vamos conversar sobre as necessidades específicas da sua empresa e como podemos criar um
            ambiente mais produtivo e humano juntos.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2} y={motionTokens.distance.md}>
          <div className="mt-xl flex flex-col justify-center gap-md sm:flex-row">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center gap-sm rounded-full bg-white px-xl py-4 text-headline-md font-semibold text-primary shadow-xl shadow-black/20 transition-transform duration-300 hover:scale-105"
            >
              Enviar E-mail
              <Mail className="h-5 w-5" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-sm rounded-full border-2 border-white/40 bg-white/10 px-xl py-4 text-headline-md font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/20"
            >
              Falar no WhatsApp
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
