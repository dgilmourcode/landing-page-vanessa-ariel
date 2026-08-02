import { InstagramLogo, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react';

const WHATSAPP_URL = 'https://wa.me/5586994829203';

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinLogo },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramLogo },
  { label: 'WhatsApp', href: WHATSAPP_URL, Icon: WhatsappLogo },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-outline-variant bg-surface-container-highest px-margin-mobile py-xl md:px-margin-desktop">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <img
          src="/logo-texto.webp"
          alt=""
          className="h-[70%] w-auto -rotate-6 opacity-[0.06] grayscale"
          loading="lazy"
        />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-md md:flex-row">
        <div className="flex flex-col items-center gap-sm md:items-start">
          <img
            src="/logo-horizontal.webp"
            alt="Vanessa Ariel — Gestão de RH"
            width={2304}
            height={1536}
            className="h-24 w-auto md:h-32"
            loading="lazy"
          />
          <p className="text-center text-body-md text-on-surface-variant md:text-left">
            © 2026 Vanessa Ariel — Gestão de RH. Todos os direitos reservados.
          </p>
        </div>

        <div className="flex flex-col items-center gap-md md:items-end">
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
          </nav>
          <div className="flex items-center gap-sm">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant transition-colors duration-300 hover:bg-primary-fixed hover:text-primary"
              >
                <Icon weight="fill" className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
