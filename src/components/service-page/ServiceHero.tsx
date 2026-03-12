import React from 'react';
import type { ExtendedServiceItem } from '../../types';
import Button from '../ui/Button';

interface Props {
  service: ExtendedServiceItem;
}

const ServiceHero: React.FC<Props> = ({ service }) => {
  return (
    <section className="bg-primary text-white pt-10 pb-16 lg:pt-14 lg:pb-24 text-center">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-6">{service.title}</h1>
          <p className="text-lg md:text-xl font-light leading-relaxed opacity-95 mb-8">
            {service.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="accent"
              className="px-8 py-3 bg-accent text-white hover:bg-opacity-90 shadow-lg"
              href={`https://wa.me/556299504788?text=Olá! Gostaria de agendar ${service.title}`}
            >
              Agendar Agora
            </Button>
            <Button
              variant="outline"
              className="px-8 py-3 shadow-lg border-white text-white hover:bg-white hover:text-primary"
              href="#sobre"
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
