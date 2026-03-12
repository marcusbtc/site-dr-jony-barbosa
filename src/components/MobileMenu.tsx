"use client"

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
        className="text-[var(--ds-color-brand-700)] lg:hidden"
        aria-label="Toggle mobile menu"
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isMenuOpen && (
        <div className="absolute left-0 top-full flex w-full flex-col gap-2 border-t border-[rgba(72,98,132,0.08)] bg-[rgba(239,242,246,0.98)] px-6 py-4 shadow-[0_18px_40px_rgba(72,98,132,0.12)] lg:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-[12px] border border-transparent px-3 py-3 font-['Questrial'] text-[16px] text-[var(--ds-color-text-body)] hover:border-[rgba(72,98,132,0.08)] hover:bg-white/70"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
