import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/seo/Breadcrumbs';
import Card from '../../components/ui/Card';
import { servicesExtended } from '../../data/services-extended';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Especialidades - Dr. Jony Barbosa | Ginecologista em Goiânia',
  description: 'Conheça as principais especialidades ginecológicas e obstétricas atendidas pelo Dr. Jony Barbosa em Goiânia.',
};

export default function SpecialtiesIndex() {
  const specialties = servicesExtended.filter(s => s.category === 'especialidade');
  const breadcrumbs = [
    { label: 'Início', href: '/' },
    { label: 'Especialidades', href: '/especialidades' }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-600">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <Breadcrumbs items={breadcrumbs} />
          
          <div className="text-center mb-16 mt-8">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-primary mb-6">Nossas Especialidades</h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">
              Oferecemos um cuidado integral para a saúde feminina, unindo tradição e as tecnologias mais avançadas da medicina.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((s, i) => (
              <Card key={i} item={s} type="service" />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
