import Footer from "./Footer";
import Header from "./Header";
import Slider from "./ui/Slider";
import { faqs } from "../data/site-data";
import { servicesExtended } from "../data/services-extended";
import type { ExtendedServiceItem } from "../types";

const heroHighlights = [
  "Atendimento ginecológico e obstétrico com foco na sua história, suas necessidades e seus objetivos.",
  "Abordagem cuidadosa, com escuta ativa e explicações claras a cada etapa.",
  "Consultório em Goiânia com estrutura confortável e equipamentos de alta tecnologia para te oferecer segurança e bem-estar.",
];

const testimonials = [
  {
    id: "google-review-prenatal-care",
    quote:
      "A avaliação destaca acompanhamento de pré-natal e parto com dedicação, responsabilidade e uma experiência descrita como segura do início ao fim.",
    label: "Pré-natal e parto",
  },
  {
    id: "google-review-gestation-empathy",
    quote:
      "O cuidado com a gestante e o bebê aparece junto de empatia, cordialidade e atenção também com a família durante consultas e ultrassons.",
    label: "Gestação e ultrassom",
  },
  {
    id: "google-review-clear-explanations",
    quote:
      "A paciente relata atendimento sem pressa, explicações detalhadas em cada etapa e uma postura transparente que transmite confiança e segurança.",
    label: "Consulta detalhada",
  },
  {
    id: "google-review-answered-questions",
    quote:
      "O depoimento reforça acolhimento em um momento de urgência, esclarecimento de medos e suporte antes e depois do parto.",
    label: "Acolhimento e suporte",
  },
  {
    id: "google-review-human-approach",
    quote:
      "O atendimento é resumido como atencioso, cuidadoso e humano, com acompanhamento da gestação marcado por bom humor e profissionalismo.",
    label: "Cuidado humanizado",
  },
];

const homeFaqs = faqs.slice(0, 3);

const examItems = servicesExtended.filter(
  (service) => service.category === "exame" && service.slug !== "nipt-goiania",
);

const serviceItems = servicesExtended.filter(
  (service) => service.category === "servico",
);

const primaryButtonClass =
  "inline-flex items-center justify-center rounded-[26px] bg-[#486284] px-[15px] py-[10px] font-['DM_Sans'] text-[16px] font-normal tracking-[0.5px] text-white transition-colors duration-200 hover:bg-[#3f5870]";

function PlayIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-14 md:size-20"
      viewBox="0 0 80 80"
      fill="none"
    >
      <path d="M60 40 24 61V19l36 21Z" fill="#486284" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-3 text-[#486284]"
      viewBox="0 0 12 8"
      fill="none"
    >
      <path
        d="m1 1 5 5 5-5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ServiceCardLink({
  href,
  label,
  light = false,
}: {
  href: string;
  label: string;
  light?: boolean;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 font-['DM_Sans'] text-[14px] uppercase tracking-[0.08em] transition-colors ${
        light
          ? "text-white hover:text-white/80"
          : "text-[#486284] hover:text-[#2f465d]"
      }`}
    >
      {label}
      <span aria-hidden="true">→</span>
    </a>
  );
}

function StickyExamCard({
  exam,
  index,
  total,
}: {
  exam: ExtendedServiceItem;
  index: number;
  total: number;
}) {
  return (
    <article
      className="surface-card relative overflow-hidden rounded-[28px] border border-[rgba(72,98,132,0.1)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(244,248,249,0.92))] p-7 lg:sticky lg:top-32 lg:min-h-[21rem] lg:p-8"
      style={{
        zIndex: total + index,
      }}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#486284,#8ca2c0,#d8e4ea)]" />
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.18em] text-[#486284]/70">
            Exame {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-3 max-w-[32rem] font-['EB_Garamond'] text-[30px] font-medium leading-[1.05] tracking-[0.3px] text-[#1f1f1f] md:text-[34px]">
            {exam.title}
          </h3>
        </div>
        <span className="rounded-full border border-[rgba(72,98,132,0.12)] bg-[#edf4f6] px-4 py-2 font-['DM_Sans'] text-[12px] uppercase tracking-[0.14em] text-[#486284]">
          {exam.estimatedDuration ?? "Tempo sob avaliação"}
        </span>
      </div>

      <p className="mt-5 max-w-[45rem] font-['Questrial'] text-[18px] leading-[31px] tracking-[0.35px] text-[#4c5253]">
        {exam.description}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-[#d7e3e8] px-4 py-2 font-['DM_Sans'] text-[12px] uppercase tracking-[0.14em] text-[#486284]">
          {exam.schemaType === "MedicalTest"
            ? "Diagnóstico por imagem"
            : "Investigação complementar"}
        </span>
        <span className="rounded-full bg-white px-4 py-2 font-['DM_Sans'] text-[12px] uppercase tracking-[0.14em] text-[#486284]/80">
          {exam.performedAt}
        </span>
      </div>

      <div className="mt-7">
        <ServiceCardLink href={`/exames/${exam.slug}`} label="Conhecer exame" />
      </div>
    </article>
  );
}

function ProcedureSliderCard({
  service,
  index,
}: {
  service: ExtendedServiceItem;
  index: number;
}) {
  const tones = [
    "bg-[#f7fafb]",
    "bg-[#eef4f6]",
    "bg-[#f8f4ef]",
    "bg-[#eef0f6]",
    "bg-[#f5f8f2]",
  ];

  return (
    <article
      className={`mx-4 flex min-w-[300px] flex-shrink-0 snap-center flex-col rounded-[26px] border border-[rgba(72,98,132,0.09)] p-7 shadow-[0_18px_40px_rgba(72,98,132,0.05)] md:mx-0 md:min-w-[340px] xl:min-w-[360px] ${
        tones[index % tones.length]
      }`}
    >
      <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.18em] text-[#486284]/70">
        {service.schemaType === "MedicalTherapy"
          ? "Atendimento"
          : "Procedimento"}
      </p>
      <h3 className="mt-4 font-['EB_Garamond'] text-[29px] font-medium leading-[1.08] tracking-[0.3px] text-[#1f1f1f]">
        {service.title}
      </h3>
      <p className="mt-4 font-['Questrial'] text-[17px] leading-[30px] tracking-[0.3px] text-[#4c5253]">
        {service.description}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <span className="rounded-full bg-white px-4 py-2 font-['DM_Sans'] text-[12px] uppercase tracking-[0.14em] text-[#486284]">
          {service.estimatedDuration ?? "Tempo sob avaliação"}
        </span>
      </div>
      <div className="mt-7">
        <ServiceCardLink
          href={`/servicos/${service.slug}`}
          label="Ver detalhes"
        />
      </div>
    </article>
  );
}

export default function FigmaHomePage() {
  return (
    <div className="page-shell flex min-h-screen flex-col">
      <Header />

      <main className="page-main figma-home flex-grow overflow-x-clip bg-[#edf4f6] text-[#2f2f2f]">
        <section className="relative overflow-hidden bg-[#d7e3e8]">
          <img
            src="/figma-home/hero-background.svg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#7f9aa8]/20 mix-blend-color-burn" />
          <div className="absolute inset-y-0 right-[-8%] hidden w-[44%] max-w-[780px] bg-[linear-gradient(112deg,rgba(185,201,208,0.95)_8%,rgba(185,201,208,0.45)_46%,rgba(185,201,208,0)_82%)] lg:block" />
          <div className="absolute inset-y-0 left-0 hidden w-[28%] min-w-[260px] max-w-[480px] overflow-hidden opacity-80 lg:block">
            <div className="absolute inset-0 rounded-r-[220px] bg-[#d7e3e8]/65" />
            <img
              src="/figma-home/hero-ultrasound.png"
              alt=""
              className="absolute -left-[10%] top-[-3%] h-[109%] w-[112%] max-w-none rounded-r-[220px] object-cover object-right"
            />
          </div>
          <div className="absolute inset-y-0 right-0 hidden w-[31%] min-w-[300px] max-w-[560px] overflow-hidden opacity-55 lg:block [mask-image:linear-gradient(180deg,transparent_0%,black_8%,black_100%)]">
            <img
              src="/figma-home/hero-pregnant.png"
              alt=""
              className="h-full w-full object-cover object-left"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(237,244,246,0.94)_0%,rgba(237,244,246,0.88)_24%,rgba(237,244,246,0.58)_42%,rgba(237,244,246,0.18)_63%,rgba(237,244,246,0.04)_100%)]" />
          <div className="pointer-events-none absolute bottom-0 right-[7%] hidden h-[618px] w-[504px] lg:block">
            <img
              src="/figma-home/hero-doctor.png"
              alt=""
              className="absolute -left-[162.26%] -top-[11.4%] h-[111.4%] max-w-none w-[301.89%]"
            />
          </div>

          <div className="relative mx-auto flex min-h-[677px] max-w-[1280px] items-center px-6 pb-24 pt-16 sm:px-8 lg:px-10">
            <div className="max-w-[660px] lg:ml-[42px] lg:mt-[-8px]">
              <h1 className="max-w-[596px] font-['EB_Garamond'] text-[40px] font-medium leading-[1.12] tracking-[0.5px] text-[#1f1f1f] sm:text-[48px] lg:text-[56px] lg:leading-[64px]">
                Você está procurando por{" "}
                <span className="font-semibold text-[#486a84]">
                  ginecologista
                </span>{" "}
                <span className="font-semibold text-[#486a84]">e</span>{" "}
                <span className="font-semibold text-[#486a84]">
                  obstetra em Goiânia
                </span>
                ?
              </h1>

              <ul className="mt-5 max-w-[560px] space-y-3 pl-6 font-['Questrial'] text-[18px] leading-[1.75] tracking-[0.35px] text-[#2f2f2f] marker:text-[#486284] lg:text-[20px] lg:leading-[31px]">
                {heroHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <a
                className={`${primaryButtonClass} mt-7`}
                href="https://wa.me/556299504788"
                target="_blank"
                rel="noreferrer"
              >
                Agendar consulta
              </a>
            </div>
          </div>

          <img
            src="/figma-home/hero-wave.svg"
            alt=""
            className="pointer-events-none absolute bottom-[-1px] left-0 w-full"
          />
        </section>

        <section className="home-marble relative overflow-hidden bg-[#ebedee] py-20 md:py-24">
          <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 sm:px-8 lg:grid-cols-[minmax(0,700px)_minmax(0,1fr)] lg:px-10">
            <div>
              <h2 className="max-w-[612px] font-['EB_Garamond'] text-[38px] font-medium leading-[1.2] tracking-[0.5px] text-[#1f1f1f] md:text-[48px] md:leading-[70px]">
                Como posso te ajudar?
              </h2>
              <div className="mt-4 max-w-[700px] space-y-4 font-['Questrial'] text-[18px] leading-[32px] tracking-[0.5px] text-[#2f2f2f]">
                <p>
                  Cuidar da saúde feminina exige atenção, sensibilidade e
                  conhecimento.
                </p>
                <p>
                  O atendimento com o Dr. Jony vai muito além da consulta médica
                  tradicional e é pensado para criar vínculo, acolher suas
                  necessidades e oferecer acompanhamento completo tanto na
                  ginecologia quanto na obstetrícia.
                </p>
                <p>
                  Se você precisa de um ginecologista para gestante, deseja
                  iniciar o pré-natal ou simplesmente realizar seus exames de
                  rotina, aqui você encontra atenção verdadeira. Desde o
                  planejamento gestacional até o parto, o Dr. Jony caminha ao
                  seu lado com responsabilidade e empatia.
                </p>
              </div>
              <a
                className={`${primaryButtonClass} mt-6`}
                href="https://wa.me/556299504788"
                target="_blank"
                rel="noreferrer"
              >
                Agendar consulta
              </a>
            </div>

            <div className="relative mx-auto w-full max-w-[680px]">
              <div className="absolute inset-[8%_5%_0] rounded-[40px] bg-[linear-gradient(180deg,rgba(162,201,222,0.08),rgba(162,201,222,0.48))]" />
              <img
                src="/figma-home/help-doctor.png"
                alt="Dr. Jony em ambiente clínico"
                className="relative z-10 w-full rounded-[36px] object-cover shadow-[0_24px_70px_rgba(72,98,132,0.14)]"
              />

              {[
                "/figma-home/badge-1.svg",
                "/figma-home/badge-2.svg",
                "/figma-home/badge-3.svg",
                "/figma-home/badge-4.svg",
              ].map((badge, index) => {
                const positions = [
                  "left-[8%] top-[12%]",
                  "right-[10%] top-[28%]",
                  "left-[5%] bottom-[16%]",
                  "right-[14%] top-[8%]",
                ];

                return (
                  <img
                    key={badge}
                    src={badge}
                    alt=""
                    className={`absolute hidden size-[90px] md:block lg:size-[120px] ${positions[index]}`}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative bg-[#e1e6e7] py-20 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.4),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.24),rgba(215,227,232,0))]" />

          <div className="relative mx-auto grid max-w-[1380px] gap-12 px-6 sm:px-8 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:items-start lg:px-10">
            <div className="lg:sticky lg:top-32">
              <h2 className="max-w-[612px] font-['EB_Garamond'] text-[38px] font-medium leading-[1.2] tracking-[0.5px] text-[#1f1f1f] md:text-[48px] md:leading-[62px]">
                Exames que acompanham cada fase do cuidado
              </h2>
              <div className="mt-4 max-w-[390px] space-y-4 font-['Questrial'] text-[18px] leading-[32px] tracking-[0.5px] text-[#2f2f2f]">
                <p>
                  Agora os exames aparecem todos na home e vão se empilhando
                  durante o scroll, para mostrar a amplitude do atendimento sem
                  esconder opções em carrossel.
                </p>
                <p>
                  O bloco reúne exames de rotina, medicina fetal e diagnósticos
                  complementares realizados em Goiânia com tecnologia moderna e
                  leitura cuidadosa.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full bg-white px-4 py-2 font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#486284]">
                  {examItems.length} exames visíveis
                </span>
                <span className="rounded-full bg-[#d7e3e8] px-4 py-2 font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#486284]">
                  Scroll com efeito de pilha
                </span>
              </div>

              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  className={primaryButtonClass}
                  href="https://wa.me/556299504788"
                  target="_blank"
                  rel="noreferrer"
                >
                  Agendar consulta
                </a>
                <a
                  href="/exames"
                  className="inline-flex items-center justify-center rounded-[26px] border border-[#486284] px-[15px] py-[10px] font-['DM_Sans'] text-[16px] tracking-[0.5px] text-[#486284] transition-colors duration-200 hover:bg-white/70"
                >
                  Ver página de exames
                </a>
              </div>
            </div>

            <div className="space-y-5 lg:space-y-8">
              {examItems.map((exam, index) => (
                <StickyExamCard
                  key={exam.slug}
                  exam={exam}
                  index={index}
                  total={examItems.length}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#edf1ef] py-20 md:py-24">
          <div className="mx-auto max-w-[1380px] px-6 sm:px-8 lg:px-10">
            <div className="max-w-[760px]">
              <h2 className="font-['EB_Garamond'] text-[38px] font-medium leading-[1.2] tracking-[0.5px] text-[#1f1f1f] md:text-[48px] md:leading-[62px]">
                Procedimentos e atendimentos em uma seção própria
              </h2>
              <div className="mt-4 space-y-4 font-['Questrial'] text-[18px] leading-[32px] tracking-[0.5px] text-[#2f2f2f]">
                <p>
                  Os procedimentos saem do bloco de exames e entram em um layout
                  diferente, mais editorial, para separar cirurgia,
                  acompanhamento fetal e consulta médica.
                </p>
                <p>
                  Assim a home mostra tudo com mais clareza: exames em pilha no
                  scroll e procedimentos em um slider lateral que passa sozinho.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Slider
                id="home-procedures-slider"
                autoplay
                autoplayInterval={3200}
              >
                {serviceItems.map((service, index) => (
                  <ProcedureSliderCard
                    key={service.slug}
                    service={service}
                    index={index}
                  />
                ))}
              </Slider>
            </div>

            <div className="mt-10 flex justify-center">
              <a className={primaryButtonClass} href="/servicos">
                Ver página de procedimentos
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#ebedee] py-20 md:py-24">
          <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 sm:px-8 lg:grid-cols-[517px_minmax(0,1fr)] lg:px-10">
            <div className="home-photo-frame home-paper-shadow overflow-hidden rounded-tl-[16px] rounded-br-[16px] bg-white">
              <img
                src="/figma-home/about-doctor-desk.png"
                alt="Dr. Jony em consulta"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <h2 className="max-w-[612px] font-['EB_Garamond'] text-[38px] font-medium leading-[1.2] tracking-[0.5px] text-[#1f1f1f] md:text-[48px] md:leading-[70px]">
                Quem é o Dr. Jony?
              </h2>
              <div className="mt-4 max-w-[700px] space-y-4 font-['Questrial'] text-[18px] leading-[32px] tracking-[0.5px] text-[#2f2f2f]">
                <p>
                  O Dr. Jony é ginecologista e obstetra formado pela
                  Universidade Federal de Goiás, com especialização no Hospital
                  das Clínicas de Goiânia e aperfeiçoamento em medicina fetal e
                  ultrassonografia no Instituto Fernandes Figueira (RJ).
                </p>
                <p>
                  Sua atuação se destaca pela combinação entre conhecimento
                  técnico atualizado e uma abordagem humana, que respeita as
                  particularidades de cada paciente.
                </p>
                <p>
                  Ele é reconhecido por proporcionar uma experiência de cuidado
                  onde a paciente é ouvida, compreendida e tratada com atenção
                  total, seja em consultas ginecológicas, no acompanhamento de
                  pré-natal ou em casos mais complexos.
                </p>
              </div>
              <a
                className={`${primaryButtonClass} mt-6`}
                href="https://wa.me/556299504788"
                target="_blank"
                rel="noreferrer"
              >
                Agendar consulta
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#edf1ef] py-20 md:py-24">
          <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 sm:px-8 lg:grid-cols-[minmax(0,1fr)_520px] lg:px-10">
            <div>
              <h2 className="max-w-[612px] font-['EB_Garamond'] text-[38px] font-medium leading-[1.2] tracking-[0.5px] text-[#1f1f1f] md:text-[48px] md:leading-[70px]">
                Acompanhamento pré-natal
              </h2>
              <div className="mt-4 max-w-[700px] space-y-4 font-['Questrial'] text-[18px] leading-[32px] tracking-[0.5px] text-[#2f2f2f]">
                <p>
                  A saúde do bebê começa na gestação. Por isso, o Dr. Jony
                  realiza um acompanhamento pré-natal cuidadoso e completo,
                  focado na saúde da mãe e do bebê desde as primeiras semanas.
                </p>
                <p>
                  O acompanhamento neonatal tem início com exames de
                  ultrassonografia de alta precisão e monitoramento regular da
                  evolução da gestação.
                </p>
                <p>
                  Esse olhar atento desde o início é essencial para promover um
                  parto mais seguro e um início de vida mais saudável para o
                  recém-nascido. Se você está grávida ou tentando engravidar, o
                  pré-natal com o Dr. Jony garante uma jornada mais tranquila,
                  com acolhimento e responsabilidade.
                </p>
              </div>
              <a
                className={`${primaryButtonClass} mt-6`}
                href="https://wa.me/556299504788"
                target="_blank"
                rel="noreferrer"
              >
                Agendar consulta
              </a>
            </div>

            <div className="home-paper-shadow overflow-hidden rounded-[18px] bg-white">
              <img
                src="/figma-home/prenatal-main.png"
                alt="Exame de ultrassonografia"
                className="h-full min-h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#eaf0ee] py-20 md:py-24">
          <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 sm:px-8 lg:grid-cols-[minmax(0,1fr)_520px] lg:px-10">
            <div>
              <h2 className="max-w-[612px] font-['EB_Garamond'] text-[38px] font-medium leading-[1.2] tracking-[0.5px] text-[#1f1f1f] md:text-[48px] md:leading-[70px]">
                Por que escolher o Dr. Jony?
              </h2>
              <div className="mt-4 max-w-[700px] space-y-4 font-['Questrial'] text-[18px] leading-[32px] tracking-[0.5px] text-[#2f2f2f]">
                <p>
                  Quando se trata da sua saúde, escolher um ginecologista e
                  obstetra vai além do currículo. É sobre se sentir ouvida,
                  respeitada e segura.
                </p>
                <p>
                  O Dr. Jony oferece um atendimento particular que valoriza o
                  tempo de cada paciente, com escuta verdadeira, clareza nas
                  informações e um cuidado centrado em você.
                </p>
                <p>
                  As consultas não são apressadas. Você terá espaço para tirar
                  dúvidas, falar sobre suas inseguranças e tomar decisões com
                  apoio profissional de verdade. Ao escolher o Dr. Jony, você
                  terá um parceiro presente em todos os momentos da sua saúde
                  íntima e reprodutiva.
                </p>
              </div>
              <a
                className={`${primaryButtonClass} mt-6`}
                href="https://wa.me/556299504788"
                target="_blank"
                rel="noreferrer"
              >
                Agendar consulta
              </a>
            </div>

            <div className="overflow-hidden rounded-[18px] bg-transparent">
              <img
                src="/figma-home/why-choose.png"
                alt="Dr. Jony em consultório"
                className="h-full min-h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="home-marble flex min-h-[540px] items-center justify-center px-6 py-20 text-center md:px-8">
          <div className="w-full max-w-[1060px]">
            <h2 className="font-['EB_Garamond'] text-[36px] font-medium leading-[1.2] tracking-[0.5px] text-[#1f1f1f] md:text-[48px] md:leading-[70px]">
              Como funciona o atendimento com o Dr. Jony?
            </h2>
            <p className="mx-auto mt-4 max-w-[720px] font-['Questrial'] text-[18px] leading-[32px] tracking-[0.5px] text-[#2f2f2f]">
              Entenda como acontecem as consultas, os exames e o acompanhamento
              completo em ginecologia e obstetrícia.
            </p>
            <a
              href="https://www.youtube.com/watch?v=ie829MJ0BC0"
              target="_blank"
              rel="noreferrer"
              className="mx-auto mt-10 flex size-28 items-center justify-center rounded-full bg-white/70 shadow-[0_18px_50px_rgba(72,98,132,0.12)] backdrop-blur-sm transition-transform duration-200 hover:scale-105 md:size-36"
            >
              <PlayIcon />
            </a>
          </div>
        </section>

        <section className="bg-[#ebedee] py-20 md:py-24">
          <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 sm:px-8 lg:grid-cols-[minmax(0,1fr)_520px] lg:px-10">
            <div>
              <h2 className="max-w-[612px] font-['EB_Garamond'] text-[38px] font-medium leading-[1.2] tracking-[0.5px] text-[#1f1f1f] md:text-[48px] md:leading-[70px]">
                Atendimentos online e presencial
              </h2>
              <div className="mt-4 max-w-[700px] space-y-4 font-['Questrial'] text-[18px] leading-[32px] tracking-[0.5px] text-[#2f2f2f]">
                <p>
                  O Dr. Jony oferece também atendimento online para quem precisa
                  de praticidade, mora em outra cidade ou deseja orientações
                  iniciais antes da consulta presencial.
                </p>
                <p>
                  Esse formato é ideal para tirar dúvidas, revisar exames ou dar
                  continuidade a acompanhamentos simples com conforto e
                  segurança.
                </p>
                <p>
                  Já as consultas presenciais são realizadas em Goiânia, em um
                  espaço moderno e acolhedor, ideal para exames ginecológicos,
                  início de pré-natal e acompanhamento de gestações. Seja online
                  ou presencial, o cuidado é sempre pessoal, atencioso e feito
                  com responsabilidade.
                </p>
              </div>
              <a
                className={`${primaryButtonClass} mt-6`}
                href="https://wa.me/556299504788"
                target="_blank"
                rel="noreferrer"
              >
                Agendar consulta
              </a>
            </div>

            <div className="overflow-hidden rounded-[18px] bg-transparent">
              <img
                src="/figma-home/online-presential.png"
                alt="Dr. Jony em atendimento"
                className="h-full min-h-[440px] w-full object-cover object-top"
              />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#a6b5be] py-20 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.55),transparent_24%),radial-gradient(circle_at_84%_8%,rgba(255,255,255,0.28),transparent_24%),linear-gradient(180deg,rgba(239,242,246,0.58),rgba(160,177,188,0.42))]" />

          <div className="relative mx-auto max-w-[1280px] px-6 text-center sm:px-8 lg:px-10">
            <p className="font-['EB_Garamond'] text-[34px] font-medium leading-[1.25] tracking-[0.5px] text-[#1f1f1f] md:text-[48px] md:leading-[70px]">
              Depoimentos
            </p>
            <p className="mx-auto mt-3 max-w-[640px] font-['Questrial'] text-[18px] leading-[32px] tracking-[0.5px] text-[#2f2f2f]">
              Seleção de avaliações 5 estrelas publicadas no Google, com a
              identificação das pacientes removida para preservar privacidade.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.id}
                  className="rounded-[10px] border border-white/30 bg-white/45 p-7 text-left shadow-[0_12px_36px_rgba(72,98,132,0.08)] backdrop-blur-[6px]"
                >
                  <div className="mb-5 flex items-center gap-1 text-[#d1a64b]">
                    {Array.from({ length: 5 }, (_, index) => (
                      <span key={index} aria-hidden="true" className="text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="font-['Questrial'] text-[20px] leading-[34px] tracking-[0.5px] text-[#8ca2c0]">
                    {testimonial.quote}
                  </p>
                  <p className="mt-4 font-['DM_Sans'] text-[16px] font-medium leading-[29px] text-[#486284]">
                    {testimonial.label}
                  </p>
                  <p className="font-['DM_Sans'] text-[14px] leading-[24px] text-[#486284]/80">
                    Google Meu Negócio · 5 estrelas
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#edf4f6] py-20 md:py-24">
          <div className="mx-auto max-w-[1060px] px-6 sm:px-8">
            <h2 className="text-center font-['EB_Garamond'] text-[36px] font-medium leading-[1.2] tracking-[0.5px] text-[#1f1f1f] md:text-[48px] md:leading-[70px]">
              Perguntas Frequentes
            </h2>

            <div className="mt-10 space-y-5">
              {homeFaqs.map((item) => (
                <details
                  key={item.question}
                  className="home-faq rounded-[7px] bg-white px-8 py-7 shadow-[0_10px_24px_rgba(72,98,132,0.05)]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-['Poppins'] text-[18px] font-medium leading-[30px] text-[#486284] md:text-[20px]">
                    <span>{item.question}</span>
                    <span className="shrink-0 transition-transform duration-200">
                      <ChevronIcon />
                    </span>
                  </summary>
                  <p className="pt-4 font-['Questrial'] text-[18px] leading-[30px] tracking-[0.3px] text-[#4c5253]">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#486284] py-20 text-center text-white md:py-24">
          <div className="absolute inset-0">
            <img
              src="/figma-home/cta-background.png"
              alt=""
              className="h-full w-full object-cover opacity-30"
            />
          </div>
          <div className="absolute inset-0 bg-[rgba(72,98,132,0.55)]" />

          <div className="relative mx-auto max-w-[1049px] px-6 sm:px-8">
            <h2 className="font-['EB_Garamond'] text-[34px] font-medium leading-[1.35] text-white md:text-[40px] md:leading-[58px]">
              Comece a sua jornada de saúde e bem-estar, com o cuidado que você
              e sua família merecem.
            </h2>

            <div className="mt-10 flex flex-col items-center justify-center gap-5 md:flex-row md:gap-8">
              <a
                href="https://wa.me/556299504788"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-[36px] bg-[#486284] px-9 py-5 font-['Lato'] text-[18px] font-medium tracking-[0.08em] text-white transition-colors duration-200 hover:bg-[#425b76]"
              >
                <svg
                  aria-hidden="true"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.7 2.81a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.58 2.81.7A2 2 0 0 1 22 16.92Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  />
                </svg>
                Agendar Horário
              </a>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
