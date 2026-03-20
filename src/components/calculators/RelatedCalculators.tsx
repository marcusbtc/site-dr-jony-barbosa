import React from 'react';
import type { CalculatorItem } from '../../types';
import { getRelatedCalculators } from '../../data/calculators';
import Card from '../ui/Card';

interface Props {
  calculator: CalculatorItem;
}

const RelatedCalculators: React.FC<Props> = ({ calculator }) => {
  const relatedCalculators = getRelatedCalculators(calculator, 4);

  if (relatedCalculators.length === 0) return null;

  return (
    <section className="py-20 md:py-28">
      <div className="page-container max-w-7xl page-section p-8 md:p-10">
        <h2 className="text-center font-['EB_Garamond'] text-[38px] font-medium tracking-[0.4px] text-[var(--ds-color-text-strong)] md:text-[44px]">
          Outras calculadoras relacionadas
        </h2>
        <p className="mb-12 mt-3 text-center font-['Questrial'] text-[18px] leading-[32px] text-[var(--ds-color-text-muted)]">
          Continue a jornada com ferramentas que fazem sentido para a mesma fase do cuidado.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {relatedCalculators.map((item) => (
            <Card
              key={item.slug}
              type="calculator"
              title={item.title}
              description={item.description}
              href={`/calculadoras/${item.slug}`}
              linkText="Abrir calculadora"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedCalculators;
