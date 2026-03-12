import React from 'react';
import Slider from './ui/Slider';
import Card from './ui/Card';
import Button from './ui/Button';
import { servicesExtended } from '../data/services-extended';

const exames = servicesExtended.filter(s => s.category === 'exame');

const ExamsSection: React.FC = () => {
  return (
    <section id="exames" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        <Slider
          id="exames-slider"
          title="Exames Especializados"
          subtitle="Diagnóstico de Precisão com Tecnologia Avançada"
        >
          {exames.map((exam, i) => (
            <Card key={i} item={exam} type="exam" />
          ))}
        </Slider>

        <div className="text-center mt-12">
          <Button variant="accent">
            Ver Todos os Exames
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExamsSection;
