import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import Breadcrumbs from '../../../components/seo/Breadcrumbs';
import Button from '../../../components/ui/Button';
import { nobleNeighborhoods } from '../../../data/neighborhoods';
import { getLocationPageContent } from '../../../data/location-pages';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return nobleNeighborhoods.map((neighborhood) => ({
    slug: neighborhood.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const locationPageContent = getLocationPageContent(slug);

  if (!locationPageContent) {
    return {};
  }

  const { canonicalUrl, neighborhood } = locationPageContent;
  const title = `Ginecologista no ${neighborhood.name} em Goiânia | Dr. Jony Barbosa`;
  const description = `${neighborhood.description} Consulte o endereço, os serviços mais procurados na região e como agendar sua consulta.`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'website',
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const locationPageContent = getLocationPageContent(slug);

  if (!locationPageContent) {
    notFound();
  }

  const {
    breadcrumbSchema,
    clinic,
    directionsUrl,
    faqItems,
    faqSchema,
    featuredServices,
    medicalBusinessSchema,
    neighborhood,
    nearbyNeighborhoods,
    appointmentSteps,
    trustSignals,
  } = locationPageContent;

  const breadcrumbItems = [
    { label: 'Início', href: '/' },
    { label: 'Localização', href: '/localizacao' },
    { label: neighborhood.name, href: `/localizacao/${neighborhood.slug}` },
  ];

  return (
    <div className="page-shell flex min-h-screen flex-col">
      <Header />
      <main className="page-main flex-grow">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <div className="page-container page-breadcrumbs">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <section className="pb-10">
          <div className="page-container max-w-7xl">
            <div className="page-hero mx-auto max-w-5xl text-left md:px-10 md:py-12">
              <p className="eyebrow-label mb-4">Atendimento para {neighborhood.name}</p>
              <h1 className="page-title mb-6 text-left">
                Ginecologista no {neighborhood.name} em Goiânia
              </h1>
              <p className="page-intro mb-8 max-w-4xl text-left">
                {neighborhood.description}
              </p>

              <div className="mb-8 grid gap-3 md:grid-cols-3">
                <div className="surface-card p-4">
                  <p className="mb-1 text-sm uppercase tracking-[0.08em] text-[var(--ds-color-brand-500)]">
                    Clínica
                  </p>
                  <p className="font-['Poppins'] text-[18px] text-[var(--ds-color-text-strong)]">
                    {clinic.name}
                  </p>
                </div>
                <div className="surface-card p-4">
                  <p className="mb-1 text-sm uppercase tracking-[0.08em] text-[var(--ds-color-brand-500)]">
                    Região
                  </p>
                  <p className="font-['Poppins'] text-[18px] text-[var(--ds-color-text-strong)]">
                    {neighborhood.shortName}, Goiânia
                  </p>
                </div>
                <div className="surface-card p-4">
                  <p className="mb-1 text-sm uppercase tracking-[0.08em] text-[var(--ds-color-brand-500)]">
                    Agendamento
                  </p>
                  <p className="font-['Poppins'] text-[18px] text-[var(--ds-color-text-strong)]">
                    Particular e por WhatsApp
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button href="https://wa.me/556299504788" className="!px-10 !py-4">
                  Agendar Consulta
                </Button>
                <Button href="#endereco" variant="outline" className="!px-10 !py-4">
                  Ver endereço
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="page-container max-w-7xl">
            <div className="grid items-start gap-10 lg:grid-cols-2">
              <div className="page-section p-8 md:p-10">
                <h2 className="mb-6 font-['EB_Garamond'] text-[38px] font-medium text-[var(--ds-color-text-strong)]">
                  {neighborhood.name} e o cuidado com a saúde da mulher
                </h2>
                <div className="max-w-none font-['Questrial'] text-[18px] leading-[32px] text-[var(--ds-color-text-body)]">
                  <p className="mb-4">{neighborhood.description}</p>
                  <p className="mb-6">{neighborhood.localContext}</p>
                  <p>
                    Se você busca ginecologista no {neighborhood.name}, o objetivo aqui é unir
                    consulta sem pressa, avaliação individualizada e acesso a exames ou
                    acompanhamentos mais complexos quando houver necessidade.
                  </p>
                </div>
              </div>

              <div id="endereco" className="page-section rounded-[24px] p-8">
                <h2 className="mb-6 font-['EB_Garamond'] text-[34px] font-medium text-[var(--ds-color-text-strong)]">
                  Onde acontece o atendimento
                </h2>
                <p className="mb-6 font-['Questrial'] text-[18px] leading-[32px] text-[var(--ds-color-text-muted)]">
                  {neighborhood.logisticDetails}
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 font-['Poppins'] font-medium text-[var(--ds-color-brand-700)]">
                      Clínica
                    </h3>
                    <p className="text-[var(--ds-color-text-muted)]">{clinic.name}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-['Poppins'] font-medium text-[var(--ds-color-brand-700)]">
                      Endereço
                    </h3>
                    <p className="text-[var(--ds-color-text-muted)]">{clinic.address}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-['Poppins'] font-medium text-[var(--ds-color-brand-700)]">
                      Referências
                    </h3>
                    <ul className="list-disc space-y-1 pl-5 text-[var(--ds-color-text-muted)]">
                      {neighborhood.landmarks.map((landmark) => (
                        <li key={landmark}>{landmark}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="surface-card rounded-[18px] p-5">
                    <p className="mb-2 font-['Poppins'] text-lg text-[var(--ds-color-text-strong)]">
                      Telefone da clínica
                    </p>
                    <p className="mb-4 text-[var(--ds-color-text-muted)]">{clinic.phone}</p>
                    <Button href={directionsUrl} variant="outline">
                      Abrir rota no mapa
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="page-container max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <p className="eyebrow-label mb-3">Serviços</p>
              <h2 className="mb-4 font-['EB_Garamond'] text-[42px] font-medium text-[var(--ds-color-text-strong)]">
                Serviços mais procurados por pacientes do {neighborhood.name}
              </h2>
              <p className="font-['Questrial'] text-[18px] leading-[32px] text-[var(--ds-color-text-muted)]">
                O atendimento para quem mora no {neighborhood.name} pode incluir consulta
                ginecológica, pré-natal, medicina fetal, ultrassonografia e procedimentos
                conforme a indicação clínica.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {featuredServices.map((service) => (
                <a
                  key={service.href}
                  href={service.href}
                  className="surface-card flex h-full flex-col rounded-[20px] p-6 transition-all hover:-translate-y-1 hover:border-[rgba(72,98,132,0.16)] hover:shadow-[0_18px_40px_rgba(72,98,132,0.1)]"
                >
                  <p className="mb-3 text-sm uppercase tracking-[0.08em] text-[var(--ds-color-brand-500)]">
                    {service.categoryLabel}
                  </p>
                  <h3 className="mb-3 font-['EB_Garamond'] text-[30px] font-medium text-[var(--ds-color-text-strong)]">
                    {service.title}
                  </h3>
                  <p className="mb-6 flex-grow font-['Questrial'] leading-[30px] text-[var(--ds-color-text-muted)]">
                    {service.description}
                  </p>
                  <span className="font-['Poppins'] text-sm font-medium text-[var(--ds-color-brand-700)]">
                    Ver atendimento →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="page-container max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <p className="eyebrow-label mb-3">Atendimento</p>
              <h2 className="mb-4 font-['EB_Garamond'] text-[42px] font-medium text-[var(--ds-color-text-strong)]">
                Como funciona o atendimento para {neighborhood.name}
              </h2>
              <p className="font-['Questrial'] text-[18px] leading-[32px] text-[var(--ds-color-text-muted)]">
                A estrutura segue um fluxo simples para quem mora na região e quer organizar a
                consulta, o exame ou o acompanhamento com previsibilidade.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {appointmentSteps.map((step, index) => (
                <div key={step.title} className="page-section p-6">
                  <p className="mb-3 text-sm uppercase tracking-[0.08em] text-[var(--ds-color-brand-500)]">
                    Etapa {index + 1}
                  </p>
                  <h3 className="mb-3 font-['EB_Garamond'] text-[28px] font-medium text-[var(--ds-color-text-strong)]">
                    {step.title}
                  </h3>
                  <p className="font-['Questrial'] leading-[30px] text-[var(--ds-color-text-muted)]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="page-container max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[1.25fr_0.95fr]">
              <div className="surface-card h-[520px] overflow-hidden rounded-[24px] border-[8px] border-white">
                <iframe
                  src={clinic.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa de atendimento para ${neighborhood.name}`}
                ></iframe>
              </div>

              <div className="space-y-8">
                <div className="page-section p-8">
                  <p className="eyebrow-label mb-3">Cuidados</p>
                  <h2 className="mb-4 font-['EB_Garamond'] text-[38px] font-medium text-[var(--ds-color-text-strong)]">
                    Cuidados para pacientes do {neighborhood.name}
                  </h2>
                  <p className="font-['Questrial'] text-[18px] leading-[32px] text-[var(--ds-color-text-body)]">
                    {neighborhood.localCareTips}
                  </p>
                </div>

                <div className="page-section p-8">
                  <p className="eyebrow-label mb-3">Diferenciais</p>
                  <h2 className="mb-6 font-['EB_Garamond'] text-[38px] font-medium text-[var(--ds-color-text-strong)]">
                    Por que pacientes do {neighborhood.name} escolhem o Dr. Jony
                  </h2>
                  <div className="grid gap-4">
                    {trustSignals.map((signal) => (
                      <div key={signal.title} className="surface-card rounded-[18px] p-5">
                        <h3 className="mb-2 font-['Poppins'] text-lg text-[var(--ds-color-text-strong)]">
                          {signal.title}
                        </h3>
                        <p className="font-['Questrial'] leading-[28px] text-[var(--ds-color-text-muted)]">
                          {signal.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="page-container max-w-5xl">
            <div className="mb-10 text-center">
              <p className="eyebrow-label mb-3">Perguntas frequentes</p>
              <h2 className="font-['EB_Garamond'] text-[42px] font-medium text-[var(--ds-color-text-strong)]">
                Perguntas sobre ginecologista no {neighborhood.name}
              </h2>
            </div>

            <div className="space-y-4">
              {faqItems.map((faqItem, index) => (
                <details
                  key={faqItem.question}
                  className="surface-card rounded-[20px] px-6 py-5"
                  open={index === 0}
                >
                  <summary className="cursor-pointer list-none font-['Poppins'] text-lg text-[var(--ds-color-text-strong)]">
                    {faqItem.question}
                  </summary>
                  <p className="mt-4 font-['Questrial'] leading-[30px] text-[var(--ds-color-text-muted)]">
                    {faqItem.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="page-container max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <p className="eyebrow-label mb-3">Bairros próximos</p>
              <h2 className="mb-4 font-['EB_Garamond'] text-[42px] font-medium text-[var(--ds-color-text-strong)]">
                Também atendemos pacientes de bairros próximos
              </h2>
              <p className="font-['Questrial'] text-[18px] leading-[32px] text-[var(--ds-color-text-muted)]">
                Se você está avaliando a região de atendimento mais conveniente, veja outras
                páginas locais com rotas e contexto específicos de Goiânia.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {nearbyNeighborhoods.map((item) => (
                <a
                  key={item.slug}
                  href={`/localizacao/${item.slug}`}
                  className="surface-card rounded-[20px] p-6 transition-all hover:-translate-y-1 hover:border-[rgba(72,98,132,0.16)] hover:shadow-[0_18px_40px_rgba(72,98,132,0.1)]"
                >
                  <h3 className="mb-3 font-['EB_Garamond'] text-[30px] font-medium text-[var(--ds-color-text-strong)]">
                    {item.name}
                  </h3>
                  <p className="mb-4 font-['Questrial'] leading-[30px] text-[var(--ds-color-text-muted)]">
                    {item.description}
                  </p>
                  <p className="font-['Poppins'] text-sm font-medium text-[var(--ds-color-brand-700)]">
                    Ver página local →
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-8">
          <div className="page-container max-w-6xl">
            <div className="page-hero">
              <p className="eyebrow-label mb-4">Agendamento</p>
              <h2 className="mb-4 font-['EB_Garamond'] text-[42px] font-medium text-[var(--ds-color-text-strong)]">
                Precisa de ginecologista no {neighborhood.name}?
              </h2>
              <p className="page-intro mb-8">
                Agende sua consulta pelo WhatsApp para receber orientação sobre endereço,
                disponibilidade e qual atendimento faz mais sentido para o seu caso.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button href="https://wa.me/556299504788" className="!px-10 !py-4">
                  Agendar pelo WhatsApp
                </Button>
                <Button href="/localizacao" variant="ghost" className="!px-10 !py-4">
                  Ver outras localizações
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer clinic={clinic} />
    </div>
  );
}
