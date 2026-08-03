# CLAUDE.md — Vanessa Ariel · Gestão de RH

Última atualização: 2026-08-03

## Stack

- **Astro 7** (output estático, zero JS por padrão) + **React 19** em ilhas (`@astrojs/react`)
- **Tailwind CSS v4** (tokens via `@theme` em CSS, plugin `@tailwindcss/vite`)
- **`motion`** (`motion/react`, sucessor do framer-motion) + **Lenis** (scroll suave) + **lucide-react** (ícones)
- **@fontsource/arimo** (Arimo self-hosted), TypeScript strict, Prettier, Vitest

## Arquitetura

- Página única: `src/pages/index.astro`; seções como ilhas React em `src/components/sections/`; primitivos de motion/UI em `src/components/ui/`
- Tokens de motion centralizados em `src/lib/motion-tokens.ts` (tokens, springs, gates de device/reduced-motion)
- `src/hooks/use-safe-motion.ts` = wrapper a11y de reduced motion; `src/hooks/use-count-up.ts` = contador animado (IntersectionObserver + RAF, ease-out cubic, suporta reduced-motion)
- Entradas de seção: `MotionIn` (variants + `whileInView`, direções up/down/left/right/fade, `viewport once margin -60px`, SSR-safe) e `ScrollReveal` (fade+slide simples); parallax via `ParallaxLayer` (container `overflow-hidden` + `motion.div` com `scale`>1, desativado em reduced-motion)
- Ordem no `index.astro`: Hero → Stats → Investment → About → Pillars → Services → Workshop → Testimonials → Faq → Contact
- `src/lib/sections.ts`: `NAV_SECTIONS` (desktop: Início, Sobre, Serviços, Contato) e `MENU_SECTIONS` (menu mobile hambúrguer, completo)
- Contatos: `vanessaarielmatos@gmail.com`, Instagram `@vanessaarielbrito`, WhatsApp `(86) 99482-9203`
- Design system "Aura Professional" em `src/styles/global.css` (tokens cor/tipografia/espaçamento via `@theme`)
- Assets otimizados com `astro:assets` em `src/assets/` (fotos hero/about baixadas localmente)

## Segurança / Performance

- Sem chaves/secrets no client. Sem backend/Supabase nesta fase.
- Animações só em `transform`/`opacity` (nunca layout); easing consistente; `prefers-reduced-motion` + gate low-end
- Guard de montagem SSR-safe (initial = output do servidor) para evitar hydration mismatch
- Logos em WebP lossless em `public/` (`logo-horizontal.webp` no Header/Footer, `logo-icon.webp` favicon/apple-touch-icon); marca d'água do Footer (`logo-texto.webp`) removida. Fotos em `src/assets/` comprimidas (quality 88) passadas como props às ilhas React (import de asset dentro de componente React no Astro retorna `[object Object]` — evitar)
- Fonte/ícones sem CDN externo

## Comandos

- Dev: `npm run dev` · Build: `npm run build` · Lint: `npm run lint` (Prettier) · Format: `npm run format` · Test: `npm run test` (Vitest)

## Referência legada

- `index.html` (renomeado de `site-code.html`) = página original de referência
