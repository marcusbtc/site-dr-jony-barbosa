import type { ExtendedServiceItem, FaqItem } from '../types';
import {
  nobleNeighborhoods,
  type ClinicLocation,
  type NeighborhoodData,
} from './neighborhoods';
import { servicesExtended } from './services-extended';

const SITE_URL = 'https://drjonybarbosa.com.br';

const defaultFeaturedServiceSlugs = [
  'ginecologia-goiania',
  'obstetricia-goiania',
  'medicina-fetal-goiania',
  'consulta-medica-goiania',
];

const featuredServiceSlugsByNeighborhood: Record<string, string[]> = {
  'ginecologista-setor-bueno-goiania': [
    'ginecologia-goiania',
    'obstetricia-goiania',
    'medicina-fetal-goiania',
    'ultrassonografia-goiania',
  ],
  'ginecologista-setor-marista-goiania': [
    'medicina-fetal-goiania',
    'gestacao-alto-risco-goiania',
    'obstetricia-goiania',
    'ultrassonografia-goiania',
  ],
  'ginecologista-alphaville-flamboyant-goiania': [
    'obstetricia-goiania',
    'gestacao-alto-risco-goiania',
    'medicina-fetal-goiania',
    'consulta-medica-goiania',
  ],
  'ginecologista-jardim-goias-goiania': [
    'ginecologia-goiania',
    'obstetricia-goiania',
    'ultrassonografia-goiania',
    'consulta-medica-goiania',
  ],
  'ginecologista-setor-sul-goiania': [
    'ginecologia-goiania',
    'consulta-medica-goiania',
    'cirurgia-ginecologica-goiania',
    'ultrassonografia-goiania',
  ],
  'ginecologista-setor-oeste-goiania': [
    'gestacao-alto-risco-goiania',
    'medicina-fetal-goiania',
    'ultrassonografia-goiania',
    'avaliacao-fetal-goiania',
  ],
};

export interface FeaturedLocationService {
  title: string;
  description: string;
  href: string;
  categoryLabel: string;
}

export interface AppointmentStep {
  title: string;
  description: string;
}

export interface TrustSignal {
  title: string;
  description: string;
}

export interface LocationPageContent {
  canonicalUrl: string;
  clinic: ClinicLocation;
  directionsUrl: string;
  faqItems: FaqItem[];
  featuredServices: FeaturedLocationService[];
  medicalBusinessSchema: Record<string, unknown>;
  breadcrumbSchema: Record<string, unknown>;
  faqSchema: Record<string, unknown>;
  neighborhood: NeighborhoodData;
  nearbyNeighborhoods: NeighborhoodData[];
  appointmentSteps: AppointmentStep[];
  trustSignals: TrustSignal[];
}

function getServiceHref(service: ExtendedServiceItem) {
  switch (service.category) {
    case 'especialidade':
      return `/especialidades/${service.slug}`;
    case 'exame':
      return `/exames/${service.slug}`;
    case 'servico':
      return `/servicos/${service.slug}`;
    default:
      return '/servicos';
  }
}

function getCategoryLabel(service: ExtendedServiceItem) {
  switch (service.category) {
    case 'especialidade':
      return 'Especialidade';
    case 'exame':
      return 'Exame';
    case 'servico':
      return 'Serviço';
    default:
      return 'Atendimento';
  }
}

function getFeaturedServices(neighborhoodSlug: string): FeaturedLocationService[] {
  const featuredSlugs =
    featuredServiceSlugsByNeighborhood[neighborhoodSlug] ?? defaultFeaturedServiceSlugs;

  return featuredSlugs
    .map((serviceSlug) => servicesExtended.find((service) => service.slug === serviceSlug))
    .filter((service): service is ExtendedServiceItem => Boolean(service))
    .map((service) => ({
      title: service.title,
      description: service.description,
      href: getServiceHref(service),
      categoryLabel: getCategoryLabel(service),
    }));
}

function getDirectionsUrl(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

function getAppointmentSteps(neighborhood: NeighborhoodData): AppointmentStep[] {
  return [
    {
      title: 'Agendamento inicial',
      description: `Fale com a equipe pelo WhatsApp, informe se você mora no ${neighborhood.name} e descreva se precisa de consulta, pré-natal, exame ou retorno.`,
    },
    {
      title: 'Definição do local de atendimento',
      description: `A equipe confirma o melhor endereço para você: ${neighborhood.clinic.name}, com orientações de acesso e horário.`,
    },
    {
      title: 'Consulta com tempo adequado',
      description: 'O foco é atendimento particular, com agenda menos corrida, tempo para avaliação clínica real e orientação clara sobre as próximas etapas.',
    },
    {
      title: 'Continuidade do cuidado',
      description: 'Se necessário, o cuidado continua com retornos, ultrassonografia, pré-natal, exames complementares ou planejamento cirúrgico na unidade mais adequada.',
    },
  ];
}

function getTrustSignals(
  neighborhood: NeighborhoodData,
  featuredServices: FeaturedLocationService[],
): TrustSignal[] {
  return [
    {
      title: 'Cuidado completo',
      description: `Pacientes do ${neighborhood.name} encontram no mesmo acompanhamento ginecologia, obstetrícia e medicina fetal.`,
    },
    {
      title: 'Local de atendimento definido',
      description: `O atendimento acontece em ${neighborhood.clinic.name}, com endereço conhecido e acesso prático para a rotina da região.`,
    },
    {
      title: 'Atendimento particular',
      description:
        'A consulta é organizada com foco em atendimento particular, escuta sem pressa e orientação individualizada para cada fase do cuidado.',
    },
    {
      title: 'Serviços alinhados à demanda local',
      description: `Os atendimentos mais procurados por pacientes da região incluem ${featuredServices
        .slice(0, 3)
        .map((service) => service.title.toLowerCase())
        .join(', ')}.`,
    },
  ];
}

function getLocationFaqs(
  neighborhood: NeighborhoodData,
  featuredServices: FeaturedLocationService[],
): FaqItem[] {
  const featuredServicesText = featuredServices
    .slice(0, 3)
    .map((service) => service.title)
    .join(', ');

  return [
    {
      question: `Onde o Dr. Jony atende pacientes do ${neighborhood.name}?`,
      answer: `As pacientes do ${neighborhood.name} são atendidas em ${neighborhood.clinic.name}, no endereço ${neighborhood.clinic.address}. A equipe envia a melhor orientação de chegada no momento do agendamento.`,
    },
    {
      question: `Quais atendimentos costumam ser mais procurados por quem mora no ${neighborhood.name}?`,
      answer: `Entre os atendimentos mais buscados por pacientes do ${neighborhood.name} estão ${featuredServicesText}. A indicação ideal depende da sua fase de vida, sintomas, exames prévios e objetivos do tratamento.`,
    },
    {
      question: `Como funciona o agendamento para pacientes do ${neighborhood.name}?`,
      answer: 'O agendamento é feito pelo WhatsApp. A equipe orienta horários, documentos, preparo quando houver exame, a unidade mais conveniente e como funciona o fluxo para atendimento particular ou pacientes Unimed.',
    },
    {
      question: `Quem mora no ${neighborhood.name} pode fazer acompanhamento completo com o Dr. Jony?`,
      answer: 'Sim. O atendimento cobre consulta ginecológica, pré-natal, medicina fetal, ultrassonografia e procedimentos conforme indicação clínica. Quando necessário, o cuidado continua com retornos e planejamento do tratamento.',
    },
  ];
}

function getNearbyNeighborhoods(neighborhood: NeighborhoodData) {
  return nobleNeighborhoods
    .filter((item) => item.slug !== neighborhood.slug)
    .sort((left, right) => {
      const leftPriority = left.clinic.name === neighborhood.clinic.name ? 0 : 1;
      const rightPriority = right.clinic.name === neighborhood.clinic.name ? 0 : 1;

      if (leftPriority !== rightPriority) {
        return leftPriority - rightPriority;
      }

      return left.name.localeCompare(right.name, 'pt-BR');
    })
    .slice(0, 4);
}

function getPostalCode(address: string) {
  return address.match(/\d{5}-\d{3}/)?.[0] ?? '74000-000';
}

function getStreetAddress(address: string) {
  return address.split(', Goiânia')[0] ?? address;
}

export function getLocationPageContent(slug: string): LocationPageContent | null {
  const neighborhood = nobleNeighborhoods.find((item) => item.slug === slug);

  if (!neighborhood) {
    return null;
  }

  const canonicalUrl = `${SITE_URL}/localizacao/${neighborhood.slug}`;
  const featuredServices = getFeaturedServices(neighborhood.slug);
  const faqItems = getLocationFaqs(neighborhood, featuredServices);
  const nearbyNeighborhoods = getNearbyNeighborhoods(neighborhood);
  const appointmentSteps = getAppointmentSteps(neighborhood);
  const trustSignals = getTrustSignals(neighborhood, featuredServices);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Localização',
        item: `${SITE_URL}/localizacao`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: neighborhood.name,
        item: canonicalUrl,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((faqItem) => ({
      '@type': 'Question',
      name: faqItem.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faqItem.answer,
      },
    })),
  };

  const medicalBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: `Dr. Jony Barbosa - Ginecologista no ${neighborhood.name} em Goiânia`,
    url: canonicalUrl,
    telephone: neighborhood.clinic.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: getStreetAddress(neighborhood.clinic.address),
      addressLocality: 'Goiânia',
      addressRegion: 'GO',
      postalCode: getPostalCode(neighborhood.clinic.address),
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: neighborhood.clinic.geo.latitude,
      longitude: neighborhood.clinic.geo.longitude,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Goiânia',
      },
      {
        '@type': 'Neighborhood',
        name: neighborhood.name,
      },
    ],
    medicalSpecialty: ['Gynecology', 'Obstetrics'],
    availableService: featuredServices.map((service) => ({
      '@type': 'MedicalTherapy',
      name: service.title,
      url: `${SITE_URL}${service.href}`,
    })),
  };

  return {
    canonicalUrl,
    clinic: neighborhood.clinic,
    directionsUrl: getDirectionsUrl(neighborhood.clinic.address),
    faqItems,
    featuredServices,
    medicalBusinessSchema,
    breadcrumbSchema,
    faqSchema,
    neighborhood,
    nearbyNeighborhoods,
    appointmentSteps,
    trustSignals,
  };
}
