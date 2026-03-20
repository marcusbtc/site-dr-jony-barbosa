import React from 'react';
import type { CalculatorItem } from '../../types';
import { getCalculatorRelatedServices } from '../../data/calculators';
import Card from '../ui/Card';

interface Props {
  calculator: CalculatorItem;
}

const typeByCategory = {
  especialidade: 'service',
  exame: 'exam',
  servico: 'procedure',
} as const;

const RelatedCalculatorServices: React.FC<Props> = ({ calculator }) => {
  const relatedServices = getCalculatorRelatedServices(calculator, 3);

  if (relatedServices.length === 0) return null;

  return (
    <section className="pb-20 md:pb-28">
      <div className="page-container max-w-7xl page-section p-8 md:p-10">
        <h2 className="text-center font-['EB_Garamond'] text-[38px] font-medium tracking-[0.4px] text-[var(--ds-color-text-strong)] md:text-[44px]">
          Atendimentos e exames que podem complementar
        </h2>
        <p className="mb-12 mt-3 text-center font-['Questrial'] text-[18px] leading-[32px] text-[var(--ds-color-text-muted)]">
          Se a dúvida ficar maior do que a calculadora resolve, estes são caminhos naturais para aprofundar a avaliação.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {relatedServices.map((service) => (
            <Card
              key={service.slug}
              item={service}
              type={typeByCategory[service.category]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedCalculatorServices;
