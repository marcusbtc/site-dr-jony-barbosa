import React from 'react';
import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/seo/Breadcrumbs';
import Card from '../../components/ui/Card';
import { calculatorHubIntro, calculators } from '../../data/calculators';

export const metadata: Metadata = {
  title: 'Calculadoras de Ginecologia e Obstetrícia | Dr. Jony Barbosa',
  description:
    'Acesse calculadoras de obstetrícia e ginecologia para DPP, cronograma pré-natal, ovulação, ganho de peso gestacional, pré-eclâmpsia e contrações.',
  alternates: {
    canonical: '/calculadoras',
  },
  openGraph: {
    title: 'Calculadoras de Ginecologia e Obstetrícia | Dr. Jony Barbosa',
    description:
      'Ferramentas educativas para organizar dúvidas frequentes de ginecologia e obstetrícia em Goiânia.',
    url: '/calculadoras',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadoras de Ginecologia e Obstetrícia | Dr. Jony Barbosa',
    description:
      'Ferramentas educativas para DPP, período fértil, pré-natal, ganho de peso e contrações.',
  },
};

export default function CalculatorsIndexPage() {
  const breadcrumbs = [
    { label: 'Início', href: '/' },
    { label: 'Calculadoras', href: '/calculadoras' },
  ];

  return (
    <div className="page-shell flex min-h-screen flex-col">
      <Header />
      <main className="page-main flex-grow">
        <div className="page-container max-w-7xl">
          <Breadcrumbs items={breadcrumbs} />

          <div className="page-hero mt-4 mb-12">
            <p className="eyebrow-label mb-4">Calculadoras</p>
            <h1 className="page-title mb-6">
              Calculadoras de ginecologia e obstetrícia
            </h1>
            <p className="page-intro">{calculatorHubIntro}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {calculators.map((calculator) => (
              <Card
                key={calculator.slug}
                type="calculator"
                title={calculator.title}
                description={calculator.description}
                href={`/calculadoras/${calculator.slug}`}
                linkText="Abrir calculadora"
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
