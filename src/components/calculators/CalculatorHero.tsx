import React from 'react';
import type { CalculatorItem } from '../../types';
import Button from '../ui/Button';

interface Props {
  calculator: CalculatorItem;
}

const CalculatorHero: React.FC<Props> = ({ calculator }) => {
  return (
    <section className="pb-10">
      <div className="page-container max-w-[1280px]">
        <div className="page-hero mx-auto max-w-4xl">
          <p className="eyebrow-label mb-4">{calculator.intentLabel}</p>
          <h1 className="font-['EB_Garamond'] text-[42px] font-medium leading-[1.1] tracking-[0.5px] text-[var(--ds-color-text-strong)] md:text-[56px]">
            {calculator.title}
          </h1>
          <p className="mt-6 max-w-[44rem] font-['Questrial'] text-[18px] leading-[32px] tracking-[0.3px] text-[var(--ds-color-text-muted)] md:text-[20px]">
            {calculator.heroIntro}
          </p>
          <p className="mt-4 max-w-[42rem] font-['DM_Sans'] text-[14px] uppercase tracking-[0.1em] text-[var(--ds-color-brand-500)]">
            {calculator.medicalReviewNote}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button variant="primary" className="px-8 py-3" href="#calculadora">
              Usar calculadora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorHero;
