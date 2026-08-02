'use client';

import { Briefcase, Home, Mail, UserSearch, type LucideIcon } from 'lucide-react';
import { useScrollSpy } from '@/hooks/use-scroll-spy';
import { NAV_SECTIONS } from '@/lib/sections';

const icons: Record<string, LucideIcon> = {
  inicio: Home,
  servicos: Briefcase,
  sobre: UserSearch,
  contato: Mail,
};

export function MobileNav() {
  const activeId = useScrollSpy();

  return (
    <nav
      aria-label="Navegação inferior"
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-around rounded-t-xl border-t border-outline-variant bg-surface/95 px-2 py-2 shadow-[0_-4px_12px_rgba(75,28,113,0.05)] backdrop-blur-md md:hidden"
    >
      {NAV_SECTIONS.map(({ id, label }) => {
        const Icon = icons[id];
        const active = activeId === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            className={`flex flex-col items-center gap-0.5 rounded-full px-4 py-1.5 transition-colors duration-300 ${
              active
                ? 'bg-primary-container text-on-primary-container'
                : 'text-on-surface-variant hover:bg-secondary-fixed-dim/30'
            }`}
          >
            <Icon className="h-5 w-5" />
            <span className="text-label-sm">{label}</span>
          </a>
        );
      })}
    </nav>
  );
}
