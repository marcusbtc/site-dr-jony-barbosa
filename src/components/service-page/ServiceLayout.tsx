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

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-600">
      <Header />

      <main className="min-h-screen pt-20 pb-12">
        <div className="mx-auto px-6 lg:px-12 max-w-7xl pt-8 pb-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <ServiceHero service={service} />
        <ServiceContent service={service} />
        {children}
        <RelatedServices service={service} category={category} />
        <ServiceFaq faqs={service.faq || []} serviceTitle={service.title} />
        <ServiceCta service={service} />
      </main>

      <Footer />
    </div>
  );
};

export default ServiceLayout;
