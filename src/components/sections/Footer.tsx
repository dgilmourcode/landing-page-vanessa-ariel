import { ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-outline-variant bg-surface-container-highest px-margin-mobile py-xl md:px-margin-desktop">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-md md:flex-row">
        <div className="flex flex-col items-center gap-sm md:items-start">
          <img
            src="/logo-horizontal.png"
            alt="Vanessa Ariel — Gestão de RH"
            width={480}
            height={320}
            className="h-9 w-auto"
            loading="lazy"
          />
          <p className="text-center text-body-md text-on-surface-variant md:text-left">
            © 2026 Vanessa Ariel — Gestão de RH. Todos os direitos reservados.
          </p>
        </div>

        <nav className="flex gap-lg" aria-label="Links do rodapé">
          <a
            href="#"
            className="text-label-lg text-on-surface-variant transition-colors hover:text-secondary"
          >
            Privacidade
          </a>
          <a
            href="#"
            className="text-label-lg text-on-surface-variant transition-colors hover:text-secondary"
          >
            Termos de Uso
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-label-lg text-on-surface-variant transition-colors hover:text-primary"
          >
            LinkedIn
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </nav>
      </div>
    </footer>
  );
}
