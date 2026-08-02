'use client';

import { type FormEvent, useState } from 'react';
import { InstagramLogo, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react';
import { Mail, Send } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { motionTokens } from '@/lib/motion-tokens';

const EMAIL = 'contato@vanessaariel.com.br';
const WHATSAPP_URL = 'https://wa.me/5586994829203';

const inputClass =
  'w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-body-md text-white placeholder-white/50 outline-none transition-[border-color,background-color] duration-300 focus:border-white/50 focus:bg-white/15';

const labelClass = 'text-label-sm font-semibold uppercase tracking-widest text-white/70';

export function Contact() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nome = String(data.get('nome') ?? '');
    const email = String(data.get('email') ?? '');
    const whatsapp = String(data.get('whatsapp') ?? '');
    const empresa = String(data.get('empresa') ?? '');
    const mensagem = String(data.get('mensagem') ?? '');

    const texto = [
      `Olá, Vanessa! Meu nome é ${nome}${empresa ? `, da empresa ${empresa}` : ''}.`,
      `Contato: ${email}${whatsapp ? ` / ${whatsapp}` : ''}`,
      `Mensagem: ${mensagem}`,
    ].join('\n');

    setSending(true);
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener');
    setSending(false);
  };

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

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-xl md:grid-cols-2">
        <ScrollReveal y={motionTokens.distance.md}>
          <div className="flex h-full flex-col justify-center gap-md">
            <h2 className="text-headline-lg font-semibold text-white md:text-display-lg">
              Vamos conversar sobre o seu negócio?
            </h2>
            <p className="max-w-lg text-body-lg text-white/80">
              Preencha o formulário ou fale comigo diretamente. Vou entender as necessidades da sua
              empresa e propor o caminho mais humano e estratégico para o seu RH.
            </p>

            <div className="flex flex-col gap-sm pt-base">
              <a
                href={`mailto:${EMAIL}`}
                className="glass-card-dark flex items-center gap-md rounded-2xl p-md transition-transform duration-300 hover:scale-[1.02]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="flex flex-col">
                  <span className="text-label-sm text-white/60">E-mail</span>
                  <span className="text-body-md font-semibold text-white">{EMAIL}</span>
                </span>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-dark flex items-center gap-md rounded-2xl p-md transition-transform duration-300 hover:scale-[1.02]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white">
                  <WhatsappLogo weight="fill" className="h-5 w-5" />
                </span>
                <span className="flex flex-col">
                  <span className="text-label-sm text-white/60">WhatsApp</span>
                  <span className="text-body-md font-semibold text-white">(86) 99482-9203</span>
                </span>
              </a>
            </div>

            <div className="flex items-center gap-sm pt-base">
              <span className="text-label-sm text-white/60">Siga:</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-white/25"
              >
                <LinkedinLogo weight="fill" className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-white/25"
              >
                <InstagramLogo weight="fill" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15} y={motionTokens.distance.md}>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-md rounded-3xl border border-white/20 bg-white/10 p-xl shadow-2xl backdrop-blur-md"
          >
            <div className="grid grid-cols-1 gap-md sm:grid-cols-2">
              <div className="flex flex-col gap-sm">
                <label htmlFor="nome" className={labelClass}>
                  Nome *
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  placeholder="Seu nome"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-sm">
                <label htmlFor="empresa" className={labelClass}>
                  Empresa
                </label>
                <input
                  id="empresa"
                  name="empresa"
                  type="text"
                  placeholder="Nome da empresa"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-md sm:grid-cols-2">
              <div className="flex flex-col gap-sm">
                <label htmlFor="email" className={labelClass}>
                  E-mail *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="seu@email.com"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-sm">
                <label htmlFor="whatsapp" className={labelClass}>
                  WhatsApp
                </label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="flex flex-col gap-sm">
              <label htmlFor="mensagem" className={labelClass}>
                Mensagem *
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                required
                rows={4}
                placeholder="Conte sobre o que sua empresa precisa…"
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center justify-center gap-sm rounded-full bg-white px-8 py-4 text-headline-md font-semibold text-primary shadow-xl shadow-black/20 transition-transform duration-300 hover:scale-[1.03] active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Enviar via WhatsApp
              <Send className="h-5 w-5" />
            </button>
            <p className="text-label-sm text-white/60">
              Ao enviar, você será direcionado ao WhatsApp com a mensagem pronta. Seus dados não são
              armazenados no site.
            </p>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
