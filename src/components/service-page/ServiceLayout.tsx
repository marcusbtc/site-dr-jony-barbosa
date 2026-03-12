import React from 'react';
import type { ExtendedServiceItem } from '../../types';
import Header from '../Header';
import Footer from '../Footer';
import Breadcrumbs from '../seo/Breadcrumbs';
import ServiceHero from './ServiceHero';
import ServiceContent from './ServiceContent';
import RelatedServices from './RelatedServices';
import ServiceFaq from './ServiceFaq';
import ServiceCta from './ServiceCta';

interface Props {
  service: ExtendedServiceItem;
  category: string;
  children?: React.ReactNode;
}

const categoryNames: Record<string, string> = {
  'especialidades': 'Especialidades',
  'exames': 'Exames',
  'servicos': 'Serviços'
};

const ServiceLayout: React.FC<Props> = ({ service, category, children }) => {
  const breadcrumbItems = [
    { label: 'Início', href: '/' },
    { label: categoryNames[category] || category, href: `/${category}` },
    { label: service.title, href: `/${category}/${service.slug}` }
  ];
  const faqSchema = service.faq?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: service.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <div className="page-shell flex min-h-screen flex-col">
      <Header />

      <main className="page-main min-h-screen">
        {faqSchema ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        ) : null}
        <div className="page-container page-breadcrumbs max-w-[1280px] pt-2 pb-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <ServiceHero service={service} />
        <ServiceContent service={service} />
        {children}
        <RelatedServices service={service} />
        <ServiceFaq faqs={service.faq || []} serviceTitle={service.title} />
        <ServiceCta service={service} />
      </main>

      <Footer />
    </div>
  );
};

export default ServiceLayout;
