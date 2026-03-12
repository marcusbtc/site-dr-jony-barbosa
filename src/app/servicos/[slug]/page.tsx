import React from 'react';
import { servicesExtended } from '../../../data/services-extended';
import ServiceLayout from '../../../components/service-page/ServiceLayout';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = servicesExtended.find(s => s.slug === params.slug && s.category === 'servico');
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: service.canonicalUrl,
    }
  };
}

export async function generateStaticParams() {
  return servicesExtended
    .filter(s => s.category === 'servico')
    .map((s) => ({
      slug: s.slug,
    }));
}

export default function ServicePage({ params }: Props) {
  const service = servicesExtended.find(s => s.slug === params.slug && s.category === 'servico');
  if (!service) notFound();

  return (
    <ServiceLayout service={service} category="servicos" />
  );
}
