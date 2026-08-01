export const NAV_SECTIONS = [
  { id: 'inicio', label: 'Início' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'contato', label: 'Contato' },
] as const;

export const SECTION_IDS = NAV_SECTIONS.map((s) => s.id);
