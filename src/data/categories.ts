import type { ServiceCategory } from '../types';

export const serviceCategories: ServiceCategory[] = [
  {
    name: 'Especialidades',
    slug: 'especialidades',
    description: 'Áreas de atuação especializadas do Dr. Jony Barbosa em Goiânia, incluindo gestação de alto risco, ginecologia, medicina fetal, obstetrícia e ultrassonografia.',
    metaTitle: 'Especialidades Médicas em Goiânia | Dr. Jony Barbosa',
    metaDescription: 'Conheça as especialidades do Dr. Jony Barbosa: Gestação de Alto Risco, Ginecologia, Medicina Fetal, Obstetrícia e Ultrassonografia em Goiânia.',
    services: [
      'gestacao-alto-risco-goiania',
      'ginecologia-goiania',
      'medicina-fetal-goiania',
      'obstetricia-goiania',
      'ultrassonografia-goiania'
    ]
  },
  {
    name: 'Exames',
    slug: 'exames',
    description: 'Exames especializados de medicina fetal e ultrassonografia realizados pelo Dr. Jony Barbosa em Goiânia com tecnologia de ponta e atendimento humanizado.',
    metaTitle: 'Exames de Medicina Fetal e Ultrassonografia em Goiânia | Dr. Jony Barbosa',
    metaDescription: 'Exames completos: NIPT, Amniocentese, Cordocentese, FISH, Ultrassom Morfológico e muito mais com Dr. Jony Barbosa em Goiânia. Agende: (62) 9950-4788',
    services: [
      'amniocentese-goiania',
      'biopsia-vilo-corial-goiania',
      'cariotipo-goiania',
      'cordocentese-goiania',
      'fish-goiania',
      'monitoracao-ovulacao-goiania',
      'nipt-goiania',
      'snip-array-goiania',
      'ultrassom-mamas-goiania',
      'ultrassom-morfologico-primeiro-trimestre-goiania',
      'ultrassom-morfologico-segundo-trimestre-goiania',
      'ultrassom-morfologico-terceiro-trimestre-goiania',
      'ultrassom-obstetrico-doppler-goiania',
      'ultrassom-obstetrico-transvaginal-goiania'
    ]
  },
  {
    name: 'Serviços',
    slug: 'servicos',
    description: 'Serviços médicos especializados oferecidos pelo Dr. Jony Barbosa em Goiânia, incluindo procedimentos ginecológicos e avaliações fetais.',
    metaTitle: 'Serviços Médicos Especializados em Goiânia | Dr. Jony Barbosa',
    metaDescription: 'Serviços especializados: Avaliação Fetal, Consulta Médica, Histerectomia, Videolaparoscopia e mais com Dr. Jony Barbosa em Goiânia. Agende: (62) 9950-4788',
    services: [
      'avaliacao-fetal-goiania',
      'consulta-medica-goiania',
      'histerectomia-goiania',
      'histeroscopia-goiania',
      'videolaparoscopia-goiania',
      'videohisteroscopia-goiania'
    ]
  }
];

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find(cat => cat.slug === slug);
}

export function getCategoryForService(serviceSlug: string): ServiceCategory | undefined {
  return serviceCategories.find(cat => cat.services.includes(serviceSlug));
}
