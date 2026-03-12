import React from 'react';
import Button from './ui/Button';
import MobileMenu from './MobileMenu';

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Especialidades", href: "/especialidades" },
  { label: "Exames", href: "/exames" },
  { label: "Serviços", href: "/servicos" },
  { label: "Contato", href: "/contato" },
];

const mobileLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Especialidades", href: "/especialidades" },
  { label: "Exames", href: "/exames" },
  { label: "Serviços", href: "/servicos" },
  { label: "Contato", href: "/contato" },
  { label: "📍 Setor Bueno", href: "/localizacao/ginecologista-setor-bueno-goiania" },
  { label: "📍 Setor Marista", href: "/localizacao/ginecologista-setor-marista-goiania" },
  { label: "📍 Setor Sul", href: "/localizacao/ginecologista-setor-sul-goiania" },
  { label: "📍 Setor Oeste", href: "/localizacao/ginecologista-setor-oeste-goiania" },
  { label: "📍 Alphaville Flamboyant", href: "/localizacao/ginecologista-alphaville-flamboyant-goiania" },
];

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-[rgba(72,98,132,0.08)] bg-[rgba(239,242,246,0.88)] backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <a href="/" className="font-['EB_Garamond'] text-[30px] font-medium tracking-[0.5px] text-[var(--ds-color-brand-700)]">
            Dr. Jony Barbosa
          </a>
        </div>

        <nav className="hidden items-center gap-7 font-['Questrial'] text-[15px] tracking-[0.3px] text-[var(--ds-color-text-muted)] lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-[var(--ds-color-brand-700)]">
              {link.label}
            </a>
          ))}
          <div className="relative group">
            <button className="flex items-center gap-1 py-2 hover:text-[var(--ds-color-brand-700)]">
              Localização
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:rotate-180 duration-300"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div className="invisible absolute right-0 top-full z-50 mt-0 w-72 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 lg:-left-4">
              <div className="surface-card flex cursor-default flex-col overflow-hidden rounded-[18px] py-2">
                {[
                  { label: "Setor Bueno", href: "/localizacao/ginecologista-setor-bueno-goiania" },
                  { label: "Setor Marista", href: "/localizacao/ginecologista-setor-marista-goiania" },
                  { label: "Setor Sul", href: "/localizacao/ginecologista-setor-sul-goiania" },
                  { label: "Setor Oeste", href: "/localizacao/ginecologista-setor-oeste-goiania" },
                  { label: "Alphaville Flamboyant", href: "/localizacao/ginecologista-alphaville-flamboyant-goiania" },
                ].map((loc) => (
                  <a key={loc.href} href={loc.href} className="flex items-center gap-2 px-5 py-3 text-sm text-[var(--ds-color-text-muted)] transition-colors hover:bg-[rgba(72,98,132,0.05)] hover:text-[var(--ds-color-brand-700)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[var(--ds-color-brand-500)]" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    {loc.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <Button variant="primary" className="ml-3 !px-5 !py-2.5" href="https://wa.me/556299504788">
            Agendar Consulta
          </Button>
        </nav>

        <MobileMenu links={mobileLinks} />
      </div>
    </header>
  );
};

export default Header;
