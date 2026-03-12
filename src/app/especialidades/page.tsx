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
    <div className="page-shell flex min-h-screen flex-col">
      <Header />
      <main className="page-main flex-grow">
        <div className="page-container max-w-7xl">
          <Breadcrumbs items={breadcrumbs} />

          <div className="page-hero mt-4 mb-12">
            <p className="eyebrow-label mb-4">Especialidades</p>
            <h1 className="page-title mb-6">Nossas Especialidades</h1>
            <p className="page-intro">
              Oferecemos um cuidado integral para a saúde feminina, unindo tradição e as
              tecnologias mais avançadas da medicina.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
