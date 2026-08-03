'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Calendar, Menu, X } from 'lucide-react';
import { useScrollSpy } from '@/hooks/use-scroll-spy';
import { MENU_SECTIONS, NAV_SECTIONS } from '@/lib/sections';
import { motionTokens } from '@/lib/motion-tokens';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

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
            src="/logo-horizontal.webp"
            alt="Vanessa Ariel — Gestão de RH"
            width={2304}
            height={1536}
            className="h-6 w-auto md:h-8"
            loading="eager"
          />
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
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="flex h-11 w-11 items-center justify-center rounded-full text-primary transition-colors duration-300 hover:bg-primary-container/30 md:hidden"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="menu-mobile"
            className="absolute inset-x-0 top-full flex flex-col border-b border-outline-variant bg-surface/95 backdrop-blur-md md:hidden"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: motionTokens.duration.fast, ease: motionTokens.easing.smooth }}
          >
            <nav className="flex flex-col gap-xs px-margin-mobile py-md" aria-label="Menu mobile">
              {MENU_SECTIONS.map(({ id, label }, index) => {
                const active = activeId === id;
                return (
                  <motion.a
                    key={id}
                    href={`#${id}`}
                    onClick={() => setMenuOpen(false)}
                    initial={reduce ? { opacity: 0 } : { opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.04,
                      duration: motionTokens.duration.fast,
                      ease: motionTokens.easing.smooth,
                    }}
                    className={`flex items-center justify-between rounded-xl px-md py-sm text-headline-md transition-colors duration-200 ${
                      active
                        ? 'bg-primary-container text-on-primary-container'
                        : 'hover:bg-surface-container'
                    }`}
                  >
                    {label}
                  </motion.a>
                );
              })}
              <motion.a
                href="#contato"
                onClick={() => setMenuOpen(false)}
                initial={reduce ? { opacity: 0 } : { opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: MENU_SECTIONS.length * 0.04,
                  duration: motionTokens.duration.fast,
                  ease: motionTokens.easing.smooth,
                }}
                className="mt-sm inline-flex items-center justify-center gap-sm rounded-full brand-gradient px-6 py-3.5 text-headline-md font-semibold text-white shadow-lg shadow-primary/20"
              >
                <Calendar className="h-5 w-5" />
                Agende uma Consultoria
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
