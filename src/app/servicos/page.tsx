import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/seo/Breadcrumbs';
import Card from '../../components/ui/Card';
import { servicesExtended } from '../../data/services-extended';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serviços e Procedimentos - Dr. Jony Barbosa',
  description: 'Conheça os serviços e procedimentos cirúrgicos ginecológicos realizados pelo Dr. Jony Barbosa em Goiânia.',
};

export default function ServicesIndex() {
  const services = servicesExtended.filter(s => s.category === 'servico');
  const breadcrumbs = [
    { label: 'Início', href: '/' },
    { label: 'Serviços', href: '/servicos' }
  ];

  return (
    <div className="page-shell flex min-h-screen flex-col">
      <Header />
      <main className="page-main flex-grow">
        <div className="page-container max-w-7xl">
          <Breadcrumbs items={breadcrumbs} />

          <div className="page-hero mt-4 mb-12">
            <p className="eyebrow-label mb-4">Serviços</p>
            <h1 className="page-title mb-6">Nossos Serviços</h1>
            <p className="page-intro">
              Procedimentos cirúrgicos avançados e cuidados ginecológicos personalizados
              para sua saúde e bem-estar.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Card key={i} item={s} type="procedure" />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
