'use client';

import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Mail, Check, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { motionTokens, springs } from '@/lib/motion-tokens';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const reduce = useReducedMotion();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || status === 'submitting') return;
    setStatus('submitting');
    await new Promise((r) => setTimeout(r, 1000));
    setStatus('success');
    setEmail('');
  };

  return (
    <section
      id="newsletter"
      className="scroll-mt-20 px-margin-mobile py-xl md:px-margin-desktop"
    >
      <div className="mx-auto max-w-3xl">
        <ScrollReveal className="mb-12 text-center" y={motionTokens.distance.md}>
          <h2 className="text-headline-lg font-semibold text-primary md:text-display-lg">
            Receba insights de RH
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body-lg text-on-surface-variant">
            Dicas práticas, casos reais e tendências de gestão de pessoas direto no seu e-mail.
            Sem spam, só conteúdo útil.
          </p>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          {status !== 'success' && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={springs.snappy}
            >
              <div className="glass-card-strong rounded-3xl p-8 md:p-12">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:flex-row md:items-center md:gap-4">
                  <div className="flex flex-col gap-2 w-full md:flex-1">
                    <label htmlFor="email" className="text-label-lg font-medium text-on-surface">
                      Seu melhor e-mail
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-on-surface-variant" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seu@email.com"
                        disabled={status === 'submitting' || status === 'success'}
                        className="w-full h-12 pl-12 pr-4 rounded-xl border bg-white/50 backdrop-blur-sm bg-surface-container-lowest/50 text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        required
                        autoComplete="email"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'submitting' || status === 'success' || !email}
                    className="group w-full md:w-auto h-12 px-8 rounded-xl bg-primary text-white font-semibold text-body-lg flex items-center justify-center gap-2 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <span>{status === 'submitting' ? 'Enviando...' : 'Quero receber'}</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
                <p className="mt-4 text-center text-label-sm text-on-surface-variant">
                  Respeitamos sua privacidade. Seu e-mail nunca será compartilhado.
                </p>
                </div>
              </motion.div>
            )}
          {status === 'success' && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={springs.snappy}
            >
              <div className="glass-card-strong rounded-3xl p-12 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-headline-lg font-semibold text-primary mb-2">
                  Inscrito com sucesso!
                </h3>
                <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto">
                  Obrigado por se inscrever. Em breve você receberá nossos melhores conteúdos.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
                >
                  <ArrowRight className="h-5 w-5" />
                  Fechar
                </button>
                </div>
              </motion.div>
            )}
        </AnimatePresence>
      </div>
    </section>
  );
}