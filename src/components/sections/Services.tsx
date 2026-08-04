'use client';

import type { ElementType } from 'react';
import { CheckCircle2, GraduationCap, TrendingUp, UserSearch } from 'lucide-react';
import { Card3D } from '@/components/ui/Card3D';
import { MotionIn } from '@/components/ui/MotionIn';
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
  {
    title: 'Desenvolvimento de Liderança',
    description:
      'Programas customizados para formar líderes que inspiram, comunicam com assertividade e geram resultados sustentáveis.',
    icon: GraduationCap,
    items: ['Mentoria executiva', 'Feedback 360°', 'Gestão de conflitos'],
  },
];

export function Services() {
  return (
    <section
      id="servicos"
      className="scroll-mt-20 bg-surface-container-lowest px-margin-mobile py-xl md:px-margin-desktop"
    >
      <div className="mx-auto w-full max-w-7xl">
        <MotionIn
          direction="up"
          distance={motionTokens.distance.md}
          className="mb-16 space-y-4 text-center"
        >
          <h2 className="text-headline-lg font-semibold text-primary md:text-display-lg">
            Nossas Especialidades
          </h2>
          <p className="mx-auto max-w-2xl text-body-lg text-on-surface-variant">
            Desenvolvemos estratégias ponta a ponta para que seu RH seja o motor de crescimento da
            sua organização.
          </p>
        </MotionIn>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-10">
          {services.map((service, index) => (
            <MotionIn
              key={service.title}
              delay={index * 0.1}
              direction="up"
              distance={motionTokens.distance.md}
              className="h-full"
            >
              <Card3D
                className={`group flex h-full flex-col rounded-3xl p-8 ${
                  service.featured
                    ? 'brand-gradient text-white shadow-2xl shadow-primary/20'
                    : 'glass-card'
                }`}
              >
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-300 ${
                    service.featured ? 'bg-white/20' : 'bg-primary/10 group-hover:bg-primary'
                  }`}
                >
                  <ShakeIcon
                    className={
                      service.featured ? 'text-white' : 'text-primary group-hover:text-white'
                    }
                  >
                    <service.icon className="h-9 w-9" />
                  </ShakeIcon>
                </div>

                <h3
                  className={`mb-3 text-headline-md font-semibold ${service.featured ? '' : 'text-primary'}`}
                >
                  {service.title}
                </h3>
                <p
                  className={`mb-6 text-body-md leading-relaxed ${service.featured ? 'text-white/90' : 'text-on-surface-variant'}`}
                >
                  {service.description}
                </p>

                <ul
                  className={`mt-auto space-y-3 text-label-lg ${service.featured ? 'text-white/80' : 'text-on-surface-variant'}`}
                >
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        className={`h-5 w-5 shrink-0 mt-0.5 ${service.featured ? 'text-white' : 'text-secondary'}`}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card3D>
            </MotionIn>
          ))}
        </div>
      </div>
    </section>
  );
}
