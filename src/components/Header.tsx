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
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-serif font-bold text-primary">
            Dr. Jony Barbosa
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8 font-medium text-sm uppercase tracking-wide text-slate-500">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-secondary transition-colors">
              {link.label}
            </a>
          ))}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-secondary transition-colors uppercase py-2">
              Localização
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:rotate-180 duration-300"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div className="absolute top-full right-0 lg:-left-4 mt-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="bg-white border border-slate-100 shadow-xl rounded-xl flex flex-col overflow-hidden py-2 cursor-default">
                {[
                  { label: "Setor Bueno", href: "/localizacao/ginecologista-setor-bueno-goiania" },
                  { label: "Setor Marista", href: "/localizacao/ginecologista-setor-marista-goiania" },
                  { label: "Setor Sul", href: "/localizacao/ginecologista-setor-sul-goiania" },
                  { label: "Setor Oeste", href: "/localizacao/ginecologista-setor-oeste-goiania" },
                  { label: "Alphaville Flamboyant", href: "/localizacao/ginecologista-alphaville-flamboyant-goiania" },
                ].map((loc) => (
                  <a key={loc.href} href={loc.href} className="px-5 py-3 hover:bg-slate-50 text-slate-600 hover:text-primary transition-colors text-sm font-medium normal-case flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-secondary" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    {loc.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <Button variant="primary" className="ml-4 !py-2.5 !px-6 text-sm font-bold shadow-md">
            Agendar Consulta
          </Button>
        </nav>

        <MobileMenu links={mobileLinks} />
      </div>
    </header>
  );
};

export default Header;
