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
    <section className="bg-primary text-white pt-10 pb-16 lg:pt-14 lg:pb-24 text-center">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className={`${heroImage ? 'grid lg:grid-cols-2 gap-10 items-center text-left' : 'max-w-4xl mx-auto'}`}>
          <div className={heroImage ? 'order-2 lg:order-1' : ''}>
            <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-6">{service.title}</h1>
            <p className="text-lg md:text-xl font-light leading-relaxed opacity-95 mb-8">
              {service.description}
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 ${heroImage ? 'justify-start' : 'justify-center'}`}>
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

          {heroImage && (
            <div className="order-1 lg:order-2 rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
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
