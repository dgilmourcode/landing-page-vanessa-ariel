'use client';

import { HeartHandshake, Lightbulb, Award } from 'lucide-react';
import { LinkedinLogo } from '@phosphor-icons/react';
import { motion } from 'motion/react';
import type { OptimizedImage } from '@/lib/image';

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

const stats = [
  { value: '10+', label: 'anos de experiência' },
  { value: '500+', label: 'profissionais avaliados' },
];

export function About({ image }: AboutProps) {
  return (
    <section id="sobre" className="px-margin-mobile py-xl md:px-margin-desktop">
      <div className="mx-auto grid w-full max-w-[85rem] grid-cols-1 items-start gap-xl lg:grid-cols-2 lg:gap-16">
        {/* Texto — entradas independentes (padrão do portfólio) */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-label-sm font-medium uppercase tracking-[0.2em] text-primary">
              Quem sou
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-2 text-3xl font-semibold leading-tight tracking-tight text-primary text-balance sm:text-4xl"
          >
            Sobre Vanessa Ariel
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-4 text-lg leading-relaxed text-on-surface-variant"
          >
            Com uma trajetória dedicada à psicologia organizacional e gestão estratégica, Vanessa
            Ariel acredita que o sucesso de uma empresa está intrinsecamente ligado ao bem-estar e
            ao desenvolvimento dos seus colaboradores.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-4 text-base leading-relaxed text-on-surface-variant"
          >
            Minha missão é desmistificar o RH transacional e elevá-lo ao papel fundamental de
            parceira estratégica do negócio: construir culturas fortes e equipes de alta
            performance.
          </motion.p>

          {/* Cards de valores */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-4 rounded-2xl bg-surface-container-low p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary-fixed-dim/40 text-secondary">
                  <value.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">{value.title}</h3>
                  <p className="mt-1 text-sm text-on-surface-variant">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              >
                <span className="brand-text-gradient text-3xl font-bold tabular-nums">
                  {stat.value}
                </span>
                <p className="text-sm text-on-surface-variant">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="group mt-8 inline-flex items-center gap-2 text-base font-bold text-primary"
          >
            Ver perfil no LinkedIn
            <LinkedinLogo
              weight="fill"
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.a>
        </div>

        {/* Foto — entrada lateral da direita + selo de destaque */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
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
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>

            <div className="glass-card absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl p-4 shadow-xl">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Award className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-on-surface">Psicóloga Organizacional</p>
                <p className="text-xs text-on-surface-variant">RH estratégico</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
