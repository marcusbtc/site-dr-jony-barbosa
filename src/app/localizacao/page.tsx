import React from 'react';
import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/seo/Breadcrumbs';
import { nobleNeighborhoods } from '../../data/neighborhoods';

export const metadata: Metadata = {
  title: 'Localização das Clínicas - Dr. Jony Barbosa | Goiânia',
  description: 'Veja as regiões de Goiânia atendidas pelo Dr. Jony Barbosa e encontre a clínica mais conveniente para o seu atendimento.',
};

export default function LocationsPage() {
  const breadcrumbs = [
    { label: 'Início', href: '/' },
    { label: 'Localização', href: '/localizacao' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-600">
      <Header />
      <main className="flex-grow pt-32 pb-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <Breadcrumbs items={breadcrumbs} />

          <div className="text-center mb-16 mt-8">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-primary mb-6">Regiões Atendidas em Goiânia</h1>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto font-light">
              Escolha sua região para ver detalhes de acesso, clínica de atendimento e informações importantes para sua consulta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nobleNeighborhoods.map((neighborhood) => (
              <a
                key={neighborhood.slug}
                href={`/localizacao/${neighborhood.slug}`}
                className="rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all bg-white"
              >
                <h2 className="text-2xl font-serif font-bold text-primary mb-3">{neighborhood.name}</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">{neighborhood.description}</p>
                <p className="text-sm font-semibold text-slate-800 mb-1">Clínica: {neighborhood.clinic.name}</p>
                <p className="text-sm text-slate-500">{neighborhood.clinic.address}</p>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
