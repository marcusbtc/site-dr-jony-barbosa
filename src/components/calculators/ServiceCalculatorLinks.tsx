import React from 'react';
import type { ExtendedServiceItem } from '../../types';
import { getCalculatorsForServiceSlug } from '../../data/calculators';
import Card from '../ui/Card';

interface Props {
  service: ExtendedServiceItem;
}

const ServiceCalculatorLinks: React.FC<Props> = ({ service }) => {
  const calculators = getCalculatorsForServiceSlug(service.slug, 3);

  if (calculators.length === 0) return null;

  return (
    <section className="pb-20 md:pb-24">
      <div className="page-container max-w-7xl page-section p-8 md:p-10">
        <h2 className="text-center font-['EB_Garamond'] text-[36px] font-medium tracking-[0.4px] text-[var(--ds-color-text-strong)] md:text-[42px]">
          Calculadoras úteis para este tema
        </h2>
        <p className="mb-12 mt-3 text-center font-['Questrial'] text-[18px] leading-[32px] text-[var(--ds-color-text-muted)]">
          Use estas ferramentas para organizar dúvidas frequentes antes, durante ou após a consulta.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {calculators.map((calculator) => (
            <Card
              key={calculator.slug}
              type="calculator"
              title={calculator.title}
              description={calculator.description}
              href={`/calculadoras/${calculator.slug}`}
              linkText="Abrir calculadora"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCalculatorLinks;
