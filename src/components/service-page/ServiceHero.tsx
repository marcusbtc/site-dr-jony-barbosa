import React from 'react';
import type { ExtendedServiceItem } from '../../types';
import Button from '../ui/Button';

interface Props {
  service: ExtendedServiceItem;
}

const ServiceHero: React.FC<Props> = ({ service }) => {
  const specialtyHeroImages: Record<string, string> = {
    'gestacao-alto-risco-goiania': '/generated/especialidades/gestacao-alto-risco-goiania.webp',
    'ginecologia-goiania': '/generated/especialidades/ginecologia-goiania.webp',
    'medicina-fetal-goiania': '/generated/especialidades/medicina-fetal-goiania.webp',
    'obstetricia-goiania': '/generated/especialidades/obstetricia-goiania.webp',
    'ultrassonografia-goiania': '/generated/especialidades/ultrassonografia-goiania.webp'
  };

  const heroImage = specialtyHeroImages[service.slug];

  return (
    <section className="pb-10">
      <div className="page-container max-w-[1280px]">
        <div className={`page-hero ${heroImage ? 'grid items-center gap-10 text-left lg:grid-cols-2' : 'mx-auto max-w-4xl'}`}>
          <div className={heroImage ? 'order-2 lg:order-1' : ''}>
            <p className="eyebrow-label mb-4">Atendimento especializado</p>
            <h1 className="font-['EB_Garamond'] text-[42px] font-medium leading-[1.1] tracking-[0.5px] text-[var(--ds-color-text-strong)] md:text-[56px]">{service.title}</h1>
            <p className="mt-6 max-w-[42rem] font-['Questrial'] text-[18px] leading-[32px] tracking-[0.3px] text-[var(--ds-color-text-muted)] md:text-[20px]">
              {service.description}
            </p>

            <div className={`mt-8 flex flex-col gap-4 sm:flex-row ${heroImage ? 'justify-start' : 'justify-center'}`}>
              <Button
                variant="primary"
                className="px-8 py-3"
                href={`https://wa.me/556299504788?text=Olá! Gostaria de agendar ${service.title}`}
              >
                Agendar Agora
              </Button>
              <Button
                variant="outline"
                className="px-8 py-3"
                href="#sobre"
              >
                Saiba Mais
              </Button>
            </div>
          </div>

          {heroImage && (
            <div className="surface-card order-1 overflow-hidden rounded-[18px] lg:order-2">
              <img
                src={heroImage}
                alt={service.title}
                className="w-full h-full object-cover aspect-[16/10]"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
