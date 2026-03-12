import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/seo/Breadcrumbs';
import Card from '../../components/ui/Card';
import { servicesExtended } from '../../data/services-extended';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Exames em Goiânia | Ultrassonografia e Medicina Fetal com Dr. Jony Barbosa',
  description: 'Confira os exames de ultrassonografia, medicina fetal e investigação ginecológica realizados por Dr. Jony Barbosa em Goiânia com foco diagnóstico.',
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
            <h1 className="page-title mb-6">Exames de ultrassonografia e medicina fetal em Goiânia</h1>
            <p className="page-intro">
              Esta página concentra os exames que apoiam o diagnóstico, o pré-natal e a tomada de decisão clínica, sem competir com as páginas principais de consulta e acompanhamento.
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
