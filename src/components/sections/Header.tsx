'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Calendar, Menu, X } from 'lucide-react';
import { useScrollSpy } from '@/hooks/use-scroll-spy';
import { NAV_SECTIONS } from '@/lib/sections';
import { motionTokens, springs } from '@/lib/motion-tokens';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const panelY = reduce ? 0 : -motionTokens.distance.sm;
  const panelTransition = reduce ? { duration: motionTokens.duration.fast } : springs.snappy;

  return (
    <header
      className={`sticky top-0 z-50 bg-surface/80 backdrop-blur-md transition-[box-shadow,border-color] duration-300 ${
        scrolled ? 'border-b border-outline-variant shadow-lg shadow-primary/5' : ''
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-margin-mobile transition-[padding] duration-300 md:px-margin-desktop ${
          scrolled ? 'py-2.5' : 'py-4'
        }`}
      >
        <a href="#inicio" className="flex items-center gap-sm" aria-label="Vanessa Ariel — início">
          <img
            src="/logo-simbolo.png"
            alt=""
            width={96}
            height={96}
            className="h-9 w-auto md:h-10"
            loading="eager"
          />
          <span className="hidden text-headline-md tracking-tight text-primary md:block">
            Vanessa Ariel
          </span>
        </a>

        <nav className="hidden items-center gap-xl md:flex" aria-label="Navegação principal">
          {NAV_SECTIONS.map(({ id, label }) => {
            const active = activeId === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`relative py-1 text-label-lg transition-colors duration-300 ${
                  active
                    ? 'font-semibold text-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left brand-gradient transition-transform duration-300 ${
                    active ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-sm">
          <a
            href="#contato"
            className="hidden items-center gap-sm rounded-full brand-gradient px-6 py-2.5 text-label-lg font-semibold text-white shadow-lg shadow-primary/20 transition-transform duration-300 hover:scale-105 active:scale-95 md:inline-flex"
          >
            <Calendar className="h-4 w-4" />
            Agende uma Consultoria
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex items-center justify-center rounded-full p-2 text-primary transition-colors hover:bg-primary-fixed md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            key="menu-mobile"
            id="menu-mobile"
            aria-label="Menu móvel"
            className="absolute inset-x-0 top-full border-t border-outline-variant bg-surface/95 px-margin-mobile py-md backdrop-blur-md md:hidden"
            initial={{ opacity: 0, y: panelY }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: panelY }}
            transition={panelTransition}
          >
            <ul className="flex flex-col gap-sm">
              {NAV_SECTIONS.map(({ id, label }) => {
                const active = activeId === id;
                return (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-headline-md transition-colors duration-300 ${
                        active
                          ? 'bg-primary-fixed text-on-primary-fixed'
                          : 'text-on-surface-variant hover:bg-surface-container'
                      }`}
                    >
                      {label}
                      {active && <span className="h-2 w-2 rounded-full bg-primary" />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
