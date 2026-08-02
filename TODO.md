# TODO.md — Vanessa Ariel · Gestão de RH

## Status Atual

Seções de FAQ (acordeão) e formulário de contato (envio via WhatsApp) adicionadas. Aguardando próximos ajustes/Fase 8.

## Sessões

| Data       | Resumo                                                                                                                                                                                                                                                                                                               |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2026-08-01 | Fase 0: scaffold Astro 7 + React 19 + Tailwind v4; deps (motion, lenis, lucide-react, fontsource); estrutura completa de pastas/componentes; rename `site-code.html` → `index.html`; download das fotos hero/about para `src/assets`                                                                                 |
| 2026-08-01 | Fase 1: design system "Aura Professional" em `global.css` (`@theme`: cor/tipografia/espaçamento/raio; utilitários brand-gradient/glass/floating; keyframes shake/float) + Arimo self-hosted                                                                                                                          |
| 2026-08-01 | Fase 2: `SmoothScroll` (Lenis + anchor scrollTo), `use-scroll-spy` (IntersectionObserver), `lib/sections.ts`, Header sticky (blur/shrink, indicador ativo scaleX, menu mobile com AnimatePresence), layout base em `index.astro` com seções-âncora; logo otimizado para `public/logo-simbolo.png`                    |
| 2026-08-01 | Fase 3: Hero cinemático (badge slide-in, H1 word-reveal com rotateX, imagem scale-in + parallax, orbes float, card glass "+10 anos", CTA magnético); primitivos UI `ScrollReveal`/`AnimatedText`/`MagneticButton`/`ParallaxLayer`; `getImage` webp; logo trocado para `public/logo-horizontal.png`                   |
| 2026-08-01 | Fase 4: Serviços bento grid (3 cards, destaque em gradiente, stagger `ScrollReveal`, tilt 3D `Card3D`, `animate-shake` no ícone via `ShakeIcon`/`group-hover`)                                                                                                                                                       |
| 2026-08-01 | Fase 5: Sobre (imagem parallax `ParallaxLayer`, quote slide-in, valores com stagger, link LinkedIn com seta animada); `getImage` webp para about-workshop                                                                                                                                                            |
| 2026-08-01 | Hero redesenhado (estilo Atitude RH): fundo gradiente escuro `hero-gradient`, badges glass flutuantes (+10 anos, avaliação 5.0), linha de stats, CTA branco sobre fundo escuro; novas utilidades `glass-card-dark`/`brand-text-gradient-light`; contato: WhatsApp (86) 99482-9203, email contato@vanessaariel.com.br |
| 2026-08-01 | Hero simplificado: banner de imagem só (`hero-section.webp`, 38KB, otimizado pelo usuário), sem texto, inteiro clicável → `#contato`; nova seção `Pillars` (`pilares-section.webp`, 58KB) = "Nossos Pilares de Atuação" como imagem de fundo; assets webp passados direto como props (sem re-encode)                 |
| 2026-08-01 | Reordenação de seções: Sobre → Pilares → Serviços; Pillars corrigida para `<img w-full h-auto>` (sem corte)                                                                                                                                                                                                          |
| 2026-08-01 | Fase 6: Contato/CTA (mailto contato@vanessaariel.com.br + wa.me/5586994829203, fundo `hero-gradient`), Footer (logo-horizontal, © 2026, links), MobileNav barra inferior (scroll-spy, sem hambúrguer)                                                                                                                |
| 2026-08-01 | Fase 7: LGPDBanner (consentimento em localStorage, `lgpd-consent`) + WhatsAppFloat (ícone real da marca, `wa.me/5586994829203`)                                                                                                                |
| 2026-08-01 | Sobre usa `about-section.webp`; balão da citação vira `<blockquote>` de destaque antes do LinkedIn; Footer/Contato com logos oficiais via `@phosphor-icons/react` (LinkedinLogo, InstagramLogo, WhatsappLogo)                               |
| 2026-08-01 | FAQ (acordeão `AnimatePresence`, 5 perguntas) + Contato com formulário (nome/empresa/email/whatsapp/mensagem, envio compõe mensagem → `wa.me` com texto pré-preenchido) + canais de contato (e-mail, WhatsApp, sociais)                         |

## Pendências

- Fase 6: Contato/CTA + Footer + MobileNav
- Fase 7: LGPDBanner + WhatsAppFloat + contadores
- Fase 8: SEO + Lighthouse + a11y
- Trocar imagem do hero quando a nova estiver pronta (substituir `src/assets/hero-portrait.jpg`)
