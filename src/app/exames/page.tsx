import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/seo/Breadcrumbs';
import Card from '../../components/ui/Card';
import { servicesExtended } from '../../data/services-extended';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Exames Especializados - Dr. Jony Barbosa | Goiânia',
  description: 'Confira a lista completa de exames de ultrassonografia e medicina fetal realizados pelo Dr. Jony Barbosa em Goiânia.',
};

export default function ExamsIndex() {
  const exams = servicesExtended.filter(s => s.category === 'exame');
  const breadcrumbs = [
    { label: 'Início', href: '/' },
    { label: 'Exames', href: '/exames' }
  ];

  return (
    <div className="page-shell flex min-h-screen flex-col">
      <Header />
      <main className="page-main flex-grow">
        <div className="page-container max-w-7xl">
          <Breadcrumbs items={breadcrumbs} />

          <div className="page-hero mt-4 mb-12">
            <p className="eyebrow-label mb-4">Exames</p>
            <h1 className="page-title mb-6">Exames Especializados</h1>
            <p className="page-intro">
              Precisão diagnóstica em medicina fetal e saúde da mulher com tecnologia de
              última geração.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {exams.map((s, i) => (
              <Card key={i} item={s} type="exam" />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
