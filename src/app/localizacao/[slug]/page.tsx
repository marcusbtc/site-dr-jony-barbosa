import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Breadcrumbs from '../../../components/seo/Breadcrumbs';
import { nobleNeighborhoods } from '../../../data/neighborhoods';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return nobleNeighborhoods.map((neighborhood) => ({
    slug: neighborhood.slug,
  }));
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const neighborhood = nobleNeighborhoods.find((n) => n.slug === slug);

  if (!neighborhood) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Início', href: '/' },
    { label: 'Localização', href: '#' },
    { label: neighborhood.name, href: `/localizacao/${neighborhood.slug}` },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-600">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-6 py-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Hero Section */}
        <section className="bg-primary text-white py-16 lg:py-24 text-center">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
                Ginecologista no {neighborhood.name}
              </h1>
              <p className="text-xl font-light leading-relaxed opacity-90 mb-10">
                Atendimento especializado e humanizado para moradoras do {neighborhood.name} em Goiânia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/556299504788"
                  className="bg-accent text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-opacity-90 transition-all text-center"
                >
                  Agendar Consulta
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">Sobre o Atendimento</h2>
                <div className="prose prose-slate prose-lg max-w-none">
                  <p className="mb-4 text-lg leading-relaxed">{neighborhood.description}</p>
                  <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Contexto Local</h3>
                  <p className="mb-6">{neighborhood.localContext}</p>
                </div>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">Como Chegar</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-slate-800 mb-2">Clínica:</h4>
                    <p className="text-slate-600">{neighborhood.clinic.name}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-2">Endereço:</h4>
                    <p className="text-slate-600">{neighborhood.clinic.address}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-2">Referência no Bairro:</h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-600">
                      {neighborhood.landmarks.map((landmark, idx) => (
                        <li key={idx}>{landmark}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px] border-8 border-white">
              <iframe
                src={neighborhood.clinic.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Logistic Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8">Conveniência para Você</h2>
            <p className="text-lg leading-relaxed text-slate-600 mb-8">{neighborhood.logisticDetails}</p>
            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
              <h3 className="text-xl font-bold text-primary mb-4">Dicas de Cuidado</h3>
              <p className="text-slate-700">{neighborhood.localCareTips}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
