'use client';

import type { ElementType } from 'react';
import { CheckCircle2, GraduationCap, TrendingUp, UserSearch } from 'lucide-react';
import { Card3D } from '@/components/ui/Card3D';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ShakeIcon } from '@/components/ui/ShakeIcon';
import { motionTokens } from '@/lib/motion-tokens';

interface Service {
  title: string;
  description: string;
  icon: ElementType;
  items: string[];
  featured?: boolean;
}

const services: Service[] = [
  {
    title: 'Recrutamento e Seleção',
    description:
      'Atração de talentos alinhados à cultura e aos objetivos do seu negócio através de processos humanizados e técnicos.',
    icon: UserSearch,
    items: ['Hunting especializado', 'Assessment técnico', 'Fit cultural profundo'],
  },
  {
    title: 'Treinamentos',
    description:
      'Capacitação de equipes e lideranças para alta performance, comunicação assertiva e inteligência emocional.',
    icon: GraduationCap,
    items: ['Workshops in-company', 'Desenvolvimento de líderes', 'Soft Skills & Feedback'],
    featured: true,
  },
  {
    title: 'Consultoria Estratégica',
    description:
      'Estruturação completa de departamentos de RH, Cargos & Salários e Pesquisas de Clima Organizacional.',
    icon: TrendingUp,
    items: ['Clima Organizacional', 'Plano de Carreira', 'Employer Branding'],
  },
];

export function Services() {
  return (
    <section
      id="servicos"
      className="scroll-mt-20 bg-surface-container-lowest px-margin-mobile py-xl md:px-margin-desktop"
    >
      <div className="mx-auto w-full max-w-7xl">
        <ScrollReveal className="mb-xl space-y-sm text-center" y={motionTokens.distance.md}>
          <h2 className="text-headline-lg font-semibold text-primary">Nossas Especialidades</h2>
          <p className="mx-auto max-w-2xl text-body-md text-on-surface-variant">
            Desenvolvemos estratégias ponta a ponta para que seu RH seja o motor de crescimento da
            sua organização.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-lg md:grid-cols-3">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.title}
              delay={index * 0.12}
              y={motionTokens.distance.lg}
              className="h-full"
            >
              <Card3D
                className={`group flex h-full flex-col rounded-3xl p-xl ${
                  service.featured
                    ? 'brand-gradient text-white shadow-2xl shadow-primary/20'
                    : 'glass-card'
                }`}
              >
                <div
                  className={`mb-md flex h-16 w-16 items-center justify-center rounded-2xl transition-colors duration-300 ${
                    service.featured ? 'bg-white/20' : 'bg-primary/10 group-hover:bg-primary'
                  }`}
                >
                  <ShakeIcon
                    className={
                      service.featured ? 'text-white' : 'text-primary group-hover:text-white'
                    }
                  >
                    <service.icon className="h-8 w-8" />
                  </ShakeIcon>
                </div>

                <h3
                  className={`mb-sm text-headline-md font-semibold ${service.featured ? '' : 'text-primary'}`}
                >
                  {service.title}
                </h3>
                <p
                  className={`mb-md text-body-md ${service.featured ? 'text-white/90' : 'text-on-surface-variant'}`}
                >
                  {service.description}
                </p>

                <ul
                  className={`mt-auto space-y-xs text-label-lg ${service.featured ? 'text-white/80' : 'text-on-surface-variant'}`}
                >
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2
                        className={`h-4 w-4 ${service.featured ? 'text-white' : 'text-secondary'}`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card3D>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
