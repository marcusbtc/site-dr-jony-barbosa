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
    description: "Atendimento ginecológico e obstétrico premium de fácil acesso para moradoras do Setor Bueno. O consultório do Dr. Jony está localizado no próprio bairro (Ed. Absolut Business Style), oferecendo equipamentos de última geração e conforto perto de você.",
    localContext: "O Setor Bueno é um dos corações pulsantes de Goiânia, conhecido por ser um dos bairros mais nobres e dinâmicos da capital. Com uma verticalização imponente e avenidas largas como a T-63 e T-4, o bairro atrai famílias que buscam qualidade de vida, educação de elite com os melhores colégios e uma vasta rede de serviços. É um polo de saúde e bem-estar, onde a tradição se encontra com a modernidade.",
    logisticDetails: "Para as moradoras do Bueno, a conveniência é total. O Dr. Jony atende na FetalCenter, situada no Edifício Absolut Business Style, facilitando o acompanhamento pré-natal e consultas de rotina sem a necessidade de grandes deslocamentos. A proximidade permite agendamentos flexíveis para quem concilia carreira e família.",
    localCareTips: "Devido ao perfil familiar e dinâmico do bairro, recomendamos atenção especial ao acompanhamento ginecológico em todas as fases da vida, desde a adolescência até a menopausa. A realização periódica de exames preventivos e o suporte em medicina fetal são diferenciais para as gestantes da região.",
    landmarks: ["Goiânia Shopping", "Parque Vaca Brava", "Praça T-25"],
    clinic: clinicLocations.bueno
  },
  {
    slug: "ginecologista-setor-marista-goiania",
    name: "Setor Marista",
    shortName: "Marista",
    description: "Para as pacientes do Setor Marista, oferecemos um padrão de excelência em medicina fetal e ginecologia com localização estratégica e atendimento humanizado para cuidar da saúde da mulher com total discrição e conforto.",
    localContext: "O Setor Marista é sinônimo de sofisticação em Goiânia. Com a charmosa Alameda Ricardo Paranhos e o Parque Areião, o bairro é o endereço de quem não abre mão do luxo e do bom gosto. É uma região que concentra a alta gastronomia e empreendimentos de altíssimo padrão, refletindo um estilo de vida exigente e refinado.",
    logisticDetails: "Vizinho imediato do Setor Bueno, o Marista oferece acesso rápido à clínica FetalCenter (Av. T-4). O trajeto é curto e descomplicado, permitindo que as pacientes desfrutem de um atendimento premium em medicina fetal e ginecologia com o máximo de conforto e agilidade.",
    localCareTips: "Pacientes do Marista frequentemente buscam o que há de mais moderno em diagnósticos. Destacamos a importância de exames de ultrassonografia morfológica de alta precisão e o acompanhamento de pré-natal de alto risco, garantindo segurança e tranquilidade para a mãe e o bebê.",
    landmarks: ["Shopping Bougainville", "Alameda Ricardo Paranhos", "Parque Areião"],
    clinic: clinicLocations.bueno
  },
  {
    slug: "ginecologista-alphaville-flamboyant-goiania",
    name: "Alphaville Flamboyant",
    shortName: "Alphaville",
    description: "Cuidado completo para a saúde feminina das moradoras do Alphaville Flamboyant. Oferecemos comodidade, tecnologia em diagnósticos e um atendimento particular focado na excelência e na valorização do seu tempo.",
    localContext: "O Alphaville Flamboyant representa o ápice do planejamento urbano e segurança em Goiânia. Entre lagos e áreas verdes, o condomínio abriga uma comunidade que valoriza a exclusividade e a tranquilidade. É um refúgio de alto padrão que exige serviços de saúde que acompanhem esse nível de excelência.",
    logisticDetails: "Apesar de ser uma região mais reservada, o acesso ao consultório do Dr. Jony no Setor Bueno é facilitado pelas vias expressas. Entendemos que o tempo das pacientes do Alphaville é precioso, por isso priorizamos a pontualidade e a eficiência em diagnósticos avançados.",
    localCareTips: "Para as gestantes e mulheres que vivem no Alphaville, oferecemos um suporte contínuo e personalizado. Recomendamos o uso de tecnologias de telemedicina para orientações rápidas e a realização de check-ups completos que otimizem as visitas ao consultório.",
    landmarks: ["Shopping Flamboyant", "Parque Flamboyant", "Centro Cultural Oscar Niemeyer"],
    clinic: clinicLocations.bueno
  },
  {
    slug: "ginecologista-jardim-goias-goiania",
    name: "Jardim Goiás",
    shortName: "Jardim Goiás",
    description: "Ginecologista e Obstetra com atendimento especializado perto do Jardim Goiás. Realize seu acompanhamento de pré-natal e exames ginecológicos com suporte contínuo e tecnologia avançada na nossa clínica.",
    localContext: "O Jardim Goiás é um dos bairros que mais crescem e se valorizam em Goiânia. Emoldurado pelo Parque Flamboyant e pelo Shopping Flamboyant, o bairro oferece um estilo de vida cosmopolita com grandes edifícios residenciais e comerciais de luxo, atraindo um público jovem e moderno.",
    logisticDetails: "Localizado estrategicamente, o Jardim Goiás permite um deslocamento rápido via Marginal Botafogo ou Avenida 136 até o Setor Bueno. O Dr. Jony oferece um atendimento que se encaixa na rotina dinâmica dos moradores deste setor, com foco em praticidade e alta tecnologia.",
    localCareTips: "A rotina intensa do Jardim Goiás pede cuidados preventivos práticos. Enfatizamos a importância de métodos contraceptivos modernos (como o DIU) e o rastreamento ginecológico anual como formas de manter a saúde em dia com conveniência.",
    landmarks: ["Estádio Serra Dourada", "Parque Flamboyant", "Paço Municipal"],
    clinic: clinicLocations.bueno 
  },
  {
    slug: "ginecologista-setor-sul-goiania",
    name: "Setor Sul",
    shortName: "Sul",
    description: "Tradição e modernidade no cuidado com a saúde da mulher. As pacientes do Setor Sul contam com um profissional qualificado no Setor Bueno ou Setor Oeste para cirurgias, inserção de DIU e acompanhamento de gestação.",
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
    description: "Atendimento no próprio Setor Oeste! Na Policlínica São Luiz, oferecemos acompanhamento pré-natal de alto risco, exames de medicina fetal e uma infraestrutura moderna focada na sua saúde.",
    localContext: "O Setor Oeste é o berço da medicina na capital goiana e um dos bairros mais tradicionais e prestigiados. Com o Bosque dos Buritis e o Lago das Rosas, o bairro oferece um ambiente sereno e uma estrutura completa de clínicas e hospitais, sendo referência em saúde para todo o estado.",
    logisticDetails: "As moradoras do Setor Oeste têm a facilidade de encontrar o Dr. Jony na Policlínica São Luiz, um endereço tradicional e de fácil acesso. O atendimento local reforça o compromisso de estar perto das pacientes, oferecendo conforto e segurança em um ambiente já familiar.",
    localCareTips: "No Setor Oeste, destacamos nossa expertise em Medicina Fetal e pré-natal de alto risco. A infraestrutura local permite a realização de exames complexos com a segurança de estar em um dos maiores polos médicos do Centro-Oeste.",
    landmarks: ["Praça Tamandaré", "Bosque dos Buritis", "Zoológico de Goiânia"],
    clinic: clinicLocations.oeste
  }
];
