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
  localContext: string;
  logisticDetails: string;
  localCareTips: string;
  landmarks: string[];
  clinic: ClinicLocation;
}

export const nobleNeighborhoods: NeighborhoodData[] = [
  {
    slug: "ginecologista-setor-bueno-goiania",
    name: "Setor Bueno",
    shortName: "Bueno",
    description: "Atendimento com ginecologista e obstetra para moradoras do Setor Bueno, com acesso prático à unidade da região e foco em consulta particular, pré-natal e exames.",
    localContext: "O Setor Bueno é um dos corações pulsantes de Goiânia, conhecido por ser um dos bairros mais nobres e dinâmicos da capital. Com uma verticalização imponente e avenidas largas como a T-63 e T-4, o bairro atrai famílias que buscam qualidade de vida, educação de elite com os melhores colégios e uma vasta rede de serviços. É um polo de saúde e bem-estar, onde a tradição se encontra com a modernidade.",
    logisticDetails: "Para as moradoras do Bueno, a principal vantagem é resolver consulta, pré-natal e exames na própria região. A unidade da FetalCenter facilita deslocamentos curtos e torna o atendimento particular mais compatível com a rotina do bairro.",
    localCareTips: "Devido ao perfil familiar e dinâmico do bairro, recomendamos atenção especial ao acompanhamento ginecológico em todas as fases da vida, desde a adolescência até a menopausa. A realização periódica de exames preventivos e o suporte em medicina fetal são diferenciais para as gestantes da região.",
    landmarks: ["Goiânia Shopping", "Parque Vaca Brava", "Praça T-25"],
    clinic: clinicLocations.bueno
  },
  {
    slug: "ginecologista-setor-marista-goiania",
    name: "Setor Marista",
    shortName: "Marista",
    description: "Para pacientes do Setor Marista, o atendimento reúne ginecologia, obstetrícia e medicina fetal com acesso rápido à unidade do Setor Bueno e rotina de cuidado mais individualizada.",
    localContext: "O Setor Marista é sinônimo de sofisticação em Goiânia. Com a charmosa Alameda Ricardo Paranhos e o Parque Areião, o bairro é o endereço de quem não abre mão do luxo e do bom gosto. É uma região que concentra a alta gastronomia e empreendimentos de altíssimo padrão, refletindo um estilo de vida exigente e refinado.",
    logisticDetails: "Vizinho imediato do Setor Bueno, o Marista oferece acesso rápido ao local de atendimento da Av. T-4. O trajeto é curto e facilita consultas, exames e acompanhamentos conforme agendamento.",
    localCareTips: "Pacientes do Marista costumam precisar de orientação sobre ultrassonografia morfológica e acompanhamento de pré-natal de alto risco quando houver indicação clínica.",
    landmarks: ["Shopping Bougainville", "Alameda Ricardo Paranhos", "Parque Areião"],
    clinic: clinicLocations.bueno
  },
  {
    slug: "ginecologista-alphaville-flamboyant-goiania",
    name: "Alphaville Flamboyant",
    shortName: "Alphaville",
    description: "Cuidado em ginecologia e obstetrícia para moradoras do Alphaville Flamboyant, com atendimento particular, exames direcionados e mais previsibilidade na organização da rotina.",
    localContext: "O Alphaville Flamboyant é uma região residencial conhecida por vias planejadas, áreas verdes e rotina mais reservada. O deslocamento para atendimento em Goiânia costuma depender de acesso organizado e previsão de tempo.",
    logisticDetails: "Apesar de ser uma região mais reservada, o acesso ao local de atendimento no Setor Bueno é facilitado pelas vias expressas. O objetivo é orientar horários e endereço de forma clara para encaixar o atendimento na rotina.",
    localCareTips: "Para as gestantes e mulheres que vivem no Alphaville, oferecemos um suporte contínuo e personalizado. Recomendamos o uso de tecnologias de telemedicina para orientações rápidas e a realização de check-ups completos que otimizem as visitas ao consultório.",
    landmarks: ["Shopping Flamboyant", "Parque Flamboyant", "Centro Cultural Oscar Niemeyer"],
    clinic: clinicLocations.bueno
  },
  {
    slug: "ginecologista-jardim-goias-goiania",
    name: "Jardim Goiás",
    shortName: "Jardim Goiás",
    description: "Ginecologista e obstetra perto do Jardim Goiás para consulta, pré-natal e exames com acesso prático à unidade do Setor Bueno e atendimento particular.",
    localContext: "O Jardim Goiás é um dos bairros que mais crescem e se valorizam em Goiânia. Emoldurado pelo Parque Flamboyant e pelo Shopping Flamboyant, o bairro oferece um estilo de vida cosmopolita com grandes edifícios residenciais e comerciais de luxo, atraindo um público jovem e moderno.",
    logisticDetails: "Localizado estrategicamente, o Jardim Goiás permite um deslocamento rápido via Marginal Botafogo ou Avenida 136 até o Setor Bueno. O atendimento busca combinar praticidade, avaliação clínica e orientação objetiva para a rotina da região.",
    localCareTips: "A rotina intensa do Jardim Goiás pede cuidados preventivos práticos. Enfatizamos a importância de métodos contraceptivos modernos (como o DIU) e o rastreamento ginecológico anual como formas de manter a saúde em dia com conveniência.",
    landmarks: ["Estádio Serra Dourada", "Parque Flamboyant", "Paço Municipal"],
    clinic: clinicLocations.bueno 
  },
  {
    slug: "ginecologista-setor-sul-goiania",
    name: "Setor Sul",
    shortName: "Sul",
    description: "As pacientes do Setor Sul encontram ginecologista e obstetra com acesso simples às unidades do Setor Bueno e Setor Oeste para consulta, pré-natal e procedimentos.",
    localContext: "O Setor Sul é um dos bairros mais tradicionais e icônicos de Goiânia, preservando o traçado original da cidade e elementos da arquitetura Art Déco. Com suas praças e ruas arborizadas, o bairro mantém um charme histórico e uma vizinhança consolidada que valoriza relacionamentos de confiança, inclusive na saúde.",
    logisticDetails: "Situado em uma posição central, o Setor Sul tem o privilégio de estar entre os dois locais de atendimento do Dr. Jony: a Policlínica São Luiz (Setor Oeste) e a FetalCenter (Setor Bueno). Isso garante flexibilidade total para a paciente escolher o local mais conveniente para sua rotina.",
    localCareTips: "Para as pacientes desta região, o foco muitas vezes está na longevidade e no cuidado preventivo contínuo. Oferecemos um atendimento humanizado que respeita a história de cada mulher, desde a ginecologia geral até o suporte em cirurgias minimamente invasivas.",
    landmarks: ["Praça Cívica", "Bosque dos Buritis", "Clube de Engenharia"],
    clinic: clinicLocations.oeste
  },
  {
    slug: "ginecologista-setor-oeste-goiania",
    name: "Setor Oeste",
    shortName: "Oeste",
    description: "Atendimento no próprio Setor Oeste para consulta, pré-natal de alto risco, medicina fetal e exames, com estrutura local para quem busca cuidado mais próximo em Goiânia.",
    localContext: "O Setor Oeste é um bairro tradicional de Goiânia, com vias conhecidas e acesso simples para quem procura atendimento médico na região central da cidade.",
    logisticDetails: "As moradoras do Setor Oeste contam com um local de atendimento na Policlínica São Luiz, com orientação prática de endereço, horário e preparo conforme a necessidade do atendimento.",
    localCareTips: "No Setor Oeste, o acompanhamento pode incluir medicina fetal, pré-natal de alto risco e exames direcionados quando houver indicação clínica.",
    landmarks: ["Praça Tamandaré", "Bosque dos Buritis", "Zoológico de Goiânia"],
    clinic: clinicLocations.oeste
  }
];
