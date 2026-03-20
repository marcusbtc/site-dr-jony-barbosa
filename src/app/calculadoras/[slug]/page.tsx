import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CalculatorLayout from '../../../components/calculators/CalculatorLayout';
import { calculators, getCalculatorBySlug } from '../../../data/calculators';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return calculators.map((calculator) => ({
    slug: calculator.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const calculator = getCalculatorBySlug(slug);

  if (!calculator) return {};

  return {
    title: calculator.metaTitle,
    description: calculator.metaDescription,
    keywords: calculator.keywords,
    alternates: {
      canonical: calculator.canonicalUrl,
    },
    openGraph: {
      title: calculator.metaTitle,
      description: calculator.metaDescription,
      url: calculator.canonicalUrl,
      type: 'article',
      locale: 'pt_BR',
    },
    twitter: {
      card: 'summary_large_image',
      title: calculator.metaTitle,
      description: calculator.metaDescription,
    },
  };
}

export default async function CalculatorPage({ params }: Props) {
  const { slug } = await params;
  const calculator = getCalculatorBySlug(slug);

  if (!calculator) notFound();

  return <CalculatorLayout calculator={calculator} />;
}
