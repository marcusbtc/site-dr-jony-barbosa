import React from 'react';
import type { CalculatorItem } from '../../types';
import Button from '../ui/Button';

interface Props {
  calculator: CalculatorItem;
}

const CalculatorCta: React.FC<Props> = ({ calculator }) => {
  const whatsappUrl = `https://wa.me/556299504788?text=${encodeURIComponent(
    `Olá! Gostaria de orientação sobre ${calculator.title}.`,
  )}`;

  return (
    <section id="agendar" className="py-20 md:py-28">
      <div className="page-container max-w-4xl page-section p-8 text-center md:p-10">
        <h2 className="font-['EB_Garamond'] text-[38px] font-medium tracking-[0.4px] text-[var(--ds-color-text-strong)] md:text-[44px]">
          {calculator.ctaTitle}
        </h2>
        <p className="mb-12 mt-3 font-['Questrial'] text-[18px] leading-[32px] text-[var(--ds-color-text-muted)]">
          {calculator.ctaDescription}
        </p>

        <div className="mb-16 flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            variant="primary"
            className="flex items-center justify-center px-8 py-4"
            href={whatsappUrl}
          >
            {calculator.ctaLabel}
          </Button>
          <Button
            variant="outline"
            className="flex items-center justify-center px-8 py-4"
            href="/contato"
          >
            Ver contato
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CalculatorCta;
