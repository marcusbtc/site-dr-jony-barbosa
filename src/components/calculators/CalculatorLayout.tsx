import React from 'react';
import type { CalculatorItem } from '../../types';
import Header from '../Header';
import Footer from '../Footer';
import Breadcrumbs from '../seo/Breadcrumbs';
import CalculatorHero from './CalculatorHero';
import CalculatorWidget from './CalculatorWidget';
import CalculatorContent from './CalculatorContent';
import RelatedCalculators from './RelatedCalculators';
import RelatedCalculatorServices from './RelatedCalculatorServices';
import CalculatorCta from './CalculatorCta';
import ServiceFaq from '../service-page/ServiceFaq';

interface Props {
  calculator: CalculatorItem;
}

const CalculatorLayout: React.FC<Props> = ({ calculator }) => {
  const breadcrumbItems = [
    { label: 'Início', href: '/' },
    { label: 'Calculadoras', href: '/calculadoras' },
    { label: calculator.title, href: `/calculadoras/${calculator.slug}` },
  ];

  const faqSchema = calculator.faq.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: calculator.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `https://drjonybarbosa.com.br${item.href}`,
    })),
  };

  const webpageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: calculator.title,
    description: calculator.metaDescription,
    url: calculator.canonicalUrl,
    about: ['Ginecologia', 'Obstetrícia', calculator.primaryKeyword],
    inLanguage: 'pt-BR',
  };

  return (
    <div className="page-shell flex min-h-screen flex-col">
      <Header />

      <main className="page-main min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
        />
        {faqSchema ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        ) : null}

        <div className="page-container page-breadcrumbs max-w-[1280px] pt-2 pb-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <CalculatorHero calculator={calculator} />
        <CalculatorWidget calculator={calculator} />
        <CalculatorContent calculator={calculator} />
        <ServiceFaq
          faqs={calculator.faq}
          serviceTitle={calculator.title}
          subtitle="Veja respostas rápidas sobre uso, limites e interpretação desta ferramenta."
        />
        <RelatedCalculators calculator={calculator} />
        <RelatedCalculatorServices calculator={calculator} />
        <CalculatorCta calculator={calculator} />
      </main>

      <Footer />
    </div>
  );
};

export default CalculatorLayout;
