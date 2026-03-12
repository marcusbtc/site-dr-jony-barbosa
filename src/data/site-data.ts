import type {
  ServiceItem,
  FaqItem,
  ContactInfo,
  NavLink,
  BlogPost,
  BusinessHours,
  SocialLink
} from '../types';

export const services: ServiceItem[] = [
  {
    title: "Pré-natal de Alto Risco",
    slug: "pre-natal-alto-risco-goiania",
    description: "Acompanhamento especializado para gestações complexas em Goiânia."
  },
  {
    title: "Ginecologia da Adolescência",
    slug: "ginecologista-adolescencia-goiania",
    description: "Cuidado delicado e educativo para jovens."
  },
  {
    title: "Inserção de DIU/Mirena",
    slug: "insercao-diu-mirena-goiania",
    description: "Métodos contraceptivos de longa duração com segurança."
  },
  {
    title: "Implantes Hormonais",
    slug: "implantes-hormonais-goiania",
    description: "Implanon e outras terapias de reposição hormonal."
  },
];

export const exams: ServiceItem[] = [
  {
    title: "Cordocentese",
    slug: "cordocentese-goiania",
    description: "Diagnóstico fetal avançado realizado com precisão."
  },
  {
    title: "Exame FISH",
    slug: "exame-fish-genetica-goiania",
    description: "Análise genética rápida para saúde do bebê."
  },
  {
    title: "Ultrassom Obstétrico",
    slug: "ultrassom-obstetrico-goiania",
    description: "Tecnologia 4D/5D para ver seu bebê em detalhes."
  },
  {
    title: "NIPT",
    slug: "nipt-teste-prenatal-goiania",
    description: "Triagem pré-natal não invasiva de alta confiabilidade."
  },
];

export const procedures: ServiceItem[] = [
  {
    title: "Laqueadura Tubária",
    slug: "laqueadura-tubaria-goiania",
    description: "Planejamento familiar definitivo com cirurgia segura."
  },
  {
    title: "Ninfoplastia",
    slug: "ninfoplastia-goiania",
    description: "Cirurgia íntima para conforto e estética feminina."
  },
  {
    title: "Parto Cesariana",
    slug: "parto-cesariana-humanizada-goiania",
    description: "Parto cirúrgico humanizado e respeitoso."
  },
  {
    title: "Cirurgia Ginecológica",
    slug: "cirurgia-ginecologica-goiania",
    description: "Histerectomia, miomectomia e procedimentos minimamente invasivos."
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Como funciona a consulta com Dr. Jony em Goiânia?",
    answer: "A consulta é realizada no Setor Aeroporto ou Marista, com duração estendida para ouvir todas as suas queixas, realizar exame físico completo e ultrassonografia se necessário."
  },
  {
    question: "Como faço para agendar uma consulta particular?",
    answer: "O agendamento pode ser feito via WhatsApp ou telefone. Priorizamos horários flexíveis para atender sua rotina."
  },
  {
    question: "Dr. Jony atende Unimed ou outros convênios?",
    answer: "Atendemos na modalidade particular e oferecemos toda a documentação necessária para que você solicite o reembolso junto ao seu plano de saúde (Unimed, Bradesco, Sulamérica, etc)."
  },
  {
    question: "O Dr. Jony faz parto normal e humanizado?",
    answer: "Sim! O Dr. Jony é defensor do parto adequado, seja normal ou cesariana, sempre priorizando a segurança da mãe e do bebê e respeitando o plano de parto."
  },
  {
    question: "Onde são realizados os partos?",
    answer: "Os partos são realizados em maternidades de Goiânia, com definição durante o pré-natal conforme perfil clínico e convênio. Locais frequentes: Hospital Premium e Hospital e Maternidade Materno Infantil."
  },
  {
    question: "Qual o valor da inserção do DIU em Goiânia?",
    answer: "Para valores atualizados de procedimentos como DIU de Cobre, Mirena ou Kyleena, por favor entre em contato com nossa equipe via WhatsApp."
  },
];

export const contactInfo: ContactInfo = {
  phone: "(62) 3070-5555 / (62) 3224-5276 / (62) 99613-6640",
  email: "contato@drjonybarbosa.com.br",
  address: "Fetalcenter Centro Médico Goiânia (St. Bueno) e FetalCenter (St. Aeroporto) - Goiânia - GO"
};

export const navLinks: NavLink[] = [
  { label: "Início", href: "#home" },
  { label: "Ginecologista", href: "#ginecologista" },
  { label: "Obstetra", href: "#obstetra" },
  { label: "Serviços", href: "#servicos" },
  { label: "Exames", href: "#exames" },
  { label: "Sobre", href: "#sobre" },
  { label: "Procedimentos", href: "#procedimentos" },
];

export const blogPosts: BlogPost[] = [
  {
    title: "Doppler na Gestação: quando fazer?",
    excerpt: "Por Dr. Jony - Ginecologista e Obstetra. Se você está grávida, pode ser que já tenha ouvido falar no exame...",
    slug: "doppler-na-gestacao"
  },
  {
    title: "O que é o exame Doppler?",
    excerpt: "Por Dr. Jony - Ginecologista e Obstetra. Muitas pacientes me perguntam sobre o exame Doppler na gestação...",
    slug: "o-que-e-exame-doppler"
  }
];

export const businessHours: BusinessHours[] = [
  { day: "Segunda-feira", hours: "07:00-18:00" },
  { day: "Terça-feira", hours: "07:00-18:00" },
  { day: "Quarta-feira", hours: "07:00-18:00" },
  { day: "Quinta-feira", hours: "07:00-18:00" },
  { day: "Sexta-feira", hours: "07:00-18:00" },
  { day: "Sábado", hours: "Fechado", isClosed: true },
  { day: "Domingo", hours: "Fechado", isClosed: true },
];

export const socialLinks: SocialLink[] = [
  { platform: 'instagram', url: '#' },
  { platform: 'facebook', url: '#' },
  { platform: 'youtube', url: '#' },
];

export const whyChooseReasons: string[] = [
  "Consultas sem pressa",
  "Espaço para tirar dúvidas",
  "Apoio profissional de verdade",
  "Acompanhamento em todos os momentos"
];
