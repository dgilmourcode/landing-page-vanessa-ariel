# TODO.md — Vanessa Ariel · Gestão de RH

## Status Atual

Fase 3 concluída — Hero cinemático. Aguardando autorização para Fase 4.

## Sessões

| Data       | Resumo                                                                                                                                                                                                                                                                                            |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2026-08-01 | Fase 0: scaffold Astro 7 + React 19 + Tailwind v4; deps (motion, lenis, lucide-react, fontsource); estrutura completa de pastas/componentes; rename `site-code.html` → `index.html`; download das fotos hero/about para `src/assets`                                                              |
| 2026-08-01 | Fase 1: design system "Aura Professional" em `global.css` (`@theme`: cor/tipografia/espaçamento/raio; utilitários brand-gradient/glass/floating; keyframes shake/float) + Arimo self-hosted                                                                                                       |
| 2026-08-01 | Fase 2: `SmoothScroll` (Lenis + anchor scrollTo), `use-scroll-spy` (IntersectionObserver), `lib/sections.ts`, Header sticky (blur/shrink, indicador ativo scaleX, menu mobile com AnimatePresence), layout base em `index.astro` com seções-âncora; logo otimizado para `public/logo-simbolo.png` |
| 2026-08-01 | Fase 3: Hero cinemático (badge slide-in, H1 word-reveal com rotateX, imagem scale-in + parallax, orbes float, card glass "+10 anos", CTA magnético); primitivos UI `ScrollReveal`/`AnimatedText`/`MagneticButton`/`ParallaxLayer`; `getImage` webp; logo trocado para `public/logo-horizontal.png` |

## Pendências

- Fase 4: Serviços bento
- Fase 5: Sobre
- Fase 6: Contato/CTA + Footer + MobileNav
- Fase 7: LGPDBanner + WhatsAppFloat + contadores
- Fase 8: SEO + Lighthouse + a11y
