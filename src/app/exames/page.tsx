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
    <div className="min-h-screen flex flex-col font-sans text-slate-600">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <Breadcrumbs items={breadcrumbs} />
          
          <div className="text-center mb-16 mt-8">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-primary mb-6">Exames Especializados</h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">
              Precisão diagnóstica em medicina fetal e saúde da mulher com tecnologia de última geração.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
