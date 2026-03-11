export interface ClinicLocation {
  name: string;
  address: string;
  phone: string;
  geo: {
    latitude: number;
    longitude: number;
  };
  mapUrl: string;
  mapEmbedUrl: string;
}

export const clinicLocations: Record<'oeste' | 'bueno', ClinicLocation> = {
  oeste: {
    name: "Policlínica São Luiz",
    address: "R. 3A, 211 - St. Oeste, Goiânia - GO, 74075-090",
    phone: "(62) 99613-6640",
    geo: {
      latitude: -16.678537,
      longitude: -49.269218
    },
    mapUrl: "https://maps.app.goo.gl/YourMapLinkOeste", // Replace with real links if available
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.0269040169446!2d-49.26921852485097!3d-16.675537084095318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef3c3787ab911%3A0x861f2a60dd5f0deb!2sDr.%20Jony%20Rodrigues%20Barbosa%20Ginecologista%20e%20Obstetra%20Goi%C3%A2nia!5e0!3m2!1spt-BR!2sbr!4v1773170528459!5m2!1spt-BR!2sbr"
  },
  bueno: {
    name: "FetalCenter Goiânia",
    address: "Edificio Absolut Business Style - Av. T-4, 1478 - 2 Andar - St. Bueno, Goiânia - GO, 74230-030",
    phone: "(62) 3070-5555",
    geo: {
      latitude: -16.7028135,
      longitude: -49.2676839
    },
    mapUrl: "https://maps.app.goo.gl/YourMapLinkBueno", // Replace with real links if available
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.579043!2d-49.2702588!3d-16.7028135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQyJzEwLjEiUyA0OcKwMTYnMTIuOSJX!5e0!3m2!1spt-BR!2sbr!4v1!5m2!1spt-BR!2sbr" // Placeholder embed for Bueno
  }
};

export interface NeighborhoodData {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  landmarks: string[];
  clinic: ClinicLocation; // Assign the nearest clinic
}

export const nobleNeighborhoods: NeighborhoodData[] = [
  {
    slug: "ginecologista-setor-bueno-goiania",
    name: "Setor Bueno",
    shortName: "Bueno",
    description: "Atendimento ginecológico e obstétrico premium de fácil acesso para moradoras do Setor Bueno. O consultório do Dr. Jony está localizado no próprio bairro (Ed. Absolut Business Style), oferecendo equipamentos de última geração e conforto perto de você.",
    landmarks: ["Goiânia Shopping", "Parque Vaca Brava", "Praça T-25"],
    clinic: clinicLocations.bueno
  },
  {
    slug: "ginecologista-setor-marista-goiania",
    name: "Setor Marista",
    shortName: "Marista",
    description: "Para as pacientes do Setor Marista, oferecemos um padrão de excelência em medicina fetal e ginecologia com localização estratégica e atendimento humanizado para cuidar da saúde da mulher com total discrição e conforto.",
    landmarks: ["Shopping Bougainville", "Alameda Ricardo Paranhos", "Parque Areião"],
    clinic: clinicLocations.bueno // Bueno clinic is closest to Marista
  },
  {
    slug: "ginecologista-alphaville-flamboyant-goiania",
    name: "Alphaville Flamboyant",
    shortName: "Alphaville",
    description: "Cuidado completo para a saúde feminina das moradoras do Alphaville Flamboyant. Oferecemos comodidade, tecnologia em diagnósticos e um atendimento particular focado na excelência e na valorização do seu tempo.",
    landmarks: ["Shopping Flamboyant", "Parque Flamboyant", "Centro Cultural Oscar Niemeyer"],
    clinic: clinicLocations.bueno // Or Oeste, depending on traffic, let's default to Bueno
  },
  {
    slug: "ginecologista-jardim-goias-goiania",
    name: "Jardim Goiás",
    shortName: "Jardim Goiás",
    description: "Ginecologista e Obstetra com atendimento especializado perto do Jardim Goiás. Realize seu acompanhamento de pré-natal e exames ginecológicos com suporte contínuo e tecnologia avançada na nossa clínica.",
    landmarks: ["Estádio Serra Dourada", "Parque Flamboyant", "Paço Municipal"],
    clinic: clinicLocations.bueno 
  },
  {
    slug: "ginecologista-setor-sul-goiania",
    name: "Setor Sul",
    shortName: "Sul",
    description: "Tradição e modernidade no cuidado com a saúde da mulher. As pacientes do Setor Sul contam com um profissional qualificado no Setor Bueno ou Setor Oeste para cirurgias, inserção de DIU e acompanhamento de gestação.",
    landmarks: ["Praça Cívica", "Bosque dos Buritis", "Clube de Engenharia"],
    clinic: clinicLocations.oeste // Oeste is right next to Sul
  },
  {
    slug: "ginecologista-setor-oeste-goiania",
    name: "Setor Oeste",
    shortName: "Oeste",
    description: "Atendimento no próprio Setor Oeste! Na Policlínica São Luiz, oferecemos acompanhamento pré-natal de alto risco, exames de medicina fetal e uma infraestrutura moderna focada na sua saúde.",
    landmarks: ["Praça Tamandaré", "Bosque dos Buritis", "Zoológico de Goiânia"],
    clinic: clinicLocations.oeste
  }
];
