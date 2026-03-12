import React from 'react';
import type { ExtendedServiceItem } from '../../types';
import { getRelatedServices } from '../../data/services-extended';
import Card from '../ui/Card';

interface Props {
  service: ExtendedServiceItem;
}

const categoryPaths: Record<ExtendedServiceItem['category'], string> = {
  especialidade: 'especialidades',
  exame: 'exames',
  servico: 'servicos',
};

const RelatedServices: React.FC<Props> = ({ service }) => {
  const relatedServices = getRelatedServices(service, 3);

  if (relatedServices.length === 0) return null;

  return (
    <section className="py-20 md:py-28">
      <div className="page-container max-w-7xl page-section p-8 md:p-10">
        <h2 className="text-center font-['EB_Garamond'] text-[38px] font-medium tracking-[0.4px] text-[var(--ds-color-text-strong)] md:text-[44px]">Serviços Relacionados</h2>
        <p className="mb-12 mt-3 text-center font-['Questrial'] text-[18px] leading-[32px] text-[var(--ds-color-text-muted)]">
          Conheça outros serviços que podem complementar seu tratamento
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedServices.map((relatedService, i) => (
            <Card
              key={i}
              title={relatedService.title}
              description={relatedService.description}
              href={`/${categoryPaths[relatedService.category]}/${relatedService.slug}`}
              linkText="Saiba Mais"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
