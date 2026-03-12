import React from 'react';
import Slider from './ui/Slider';
import Card from './ui/Card';
import Button from './ui/Button';
import { servicesExtended } from '../data/services-extended';

// Helper to filter and type items correctly
const procedimentos = servicesExtended
  .filter(s => s.category === 'servico')
  .filter(s => ['histerectomia-goiania', 'vasectomia-goiania', 'insercao-diu-goiania', 'colposcopia-goiania'].includes(s.slug));

const ProceduresSection: React.FC = () => {
  return (
    <section id="procedimentos" className="py-24 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        <Slider
          id="procedimentos-slider"
          title="Procedimentos e Planejamento Familiar"
          subtitle="Atendimentos ambulatoriais e cirúrgicos com foco em cuidado individualizado"
        >
          {procedimentos.map((proc, i) => (
            <Card 
              key={i} 
              item={proc} 
              type="procedure" 
              linkText="Saiba mais"
            />
          ))}
        </Slider>

        <div className="text-center mt-12">
          <Button variant="primary" href="/servicos">
            Ver Todos os Procedimentos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProceduresSection;
