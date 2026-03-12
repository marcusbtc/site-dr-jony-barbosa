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
    <div className="page-shell flex min-h-screen flex-col">
      <Header />
      <main className="page-main flex-grow">
        <div className="page-container max-w-7xl">
          <Breadcrumbs items={breadcrumbs} />

          <div className="page-hero mt-4 mb-12">
            <p className="eyebrow-label mb-4">Localização</p>
            <h1 className="page-title mb-6">Regiões Atendidas em Goiânia</h1>
            <p className="page-intro max-w-3xl">
              Escolha sua região para ver detalhes de acesso, clínica de atendimento e
              informações importantes para sua consulta.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {nobleNeighborhoods.map((neighborhood) => (
              <a
                key={neighborhood.slug}
                href={`/localizacao/${neighborhood.slug}`}
                className="surface-card rounded-[18px] p-6 transition-all hover:-translate-y-1 hover:border-[rgba(72,98,132,0.16)] hover:shadow-[0_18px_40px_rgba(72,98,132,0.1)]"
              >
                <h2 className="mb-3 font-['EB_Garamond'] text-[30px] font-medium text-[var(--ds-color-text-strong)]">{neighborhood.name}</h2>
                <p className="mb-4 leading-[30px] text-[var(--ds-color-text-muted)]">{neighborhood.description}</p>
                <p className="mb-1 text-sm font-medium text-[var(--ds-color-brand-700)]">Clínica: {neighborhood.clinic.name}</p>
                <p className="text-sm text-[var(--ds-color-text-muted)]">{neighborhood.clinic.address}</p>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
