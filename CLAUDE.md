# CLAUDE.md — Vanessa Ariel · Gestão de RH

Última atualização: 2026-08-01

## Stack

- **Astro 7** (output estático, zero JS por padrão) + **React 19** em ilhas (`@astrojs/react`)
- **Tailwind CSS v4** (tokens via `@theme` em CSS, plugin `@tailwindcss/vite`)
- **`motion`** (`motion/react`, sucessor do framer-motion) + **Lenis** (scroll suave) + **lucide-react** (ícones)
- **@fontsource/arimo** (Arimo self-hosted), TypeScript strict, Prettier, Vitest

## Arquitetura

- Página única: `src/pages/index.astro`; seções como ilhas React em `src/components/sections/`; primitivos de motion/UI em `src/components/ui/`
- Tokens de motion centralizados em `src/lib/motion-tokens.ts` (tokens, springs, gates de device/reduced-motion)
- `src/hooks/use-safe-motion.ts` = wrapper a11y de reduced motion
- Design system "Aura Professional" em `src/styles/global.css` (fonte: `site-design.md`; cor/tipografia/espaçamento)
- Assets otimizados com `astro:assets` em `src/assets/` (fotos hero/about baixadas localmente)

## Segurança / Performance

- Sem chaves/secrets no client. Sem backend/Supabase nesta fase.
- Animações só em `transform`/`opacity` (nunca layout); easing consistente; `prefers-reduced-motion` + gate low-end
- Guard de montagem SSR-safe (initial = output do servidor) para evitar hydration mismatch
- Logo horizontal local otimizado em `public/logo-horizontal.png`; fotos em `src/assets/` otimizadas via `getImage` (webp/avif) e passadas como props às ilhas React (import de asset dentro de componente React no Astro retorna `[object Object]` — evitar)
- Fonte/ícones sem CDN externo

## Comandos

- Dev: `npm run dev` · Build: `npm run build` · Lint: `npm run lint` (Prettier) · Format: `npm run format` · Test: `npm run test` (Vitest)

## Referência legada

- `index.html` (renomeado de `site-code.html`) = página original de referência
