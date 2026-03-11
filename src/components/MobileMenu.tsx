import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuProps {
  links: Array<{ label: string; href: string }>;
}

export default function MobileMenu({ links }: MobileMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden text-primary"
        aria-label="Toggle mobile menu"
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg py-4 px-6 flex flex-col gap-4 top-full left-0">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="py-2 border-b border-slate-50"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
