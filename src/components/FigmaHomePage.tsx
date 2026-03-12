import { faqs } from '../data/site-data'

const heroHighlights = [
  'Atendimento ginecológico e obstétrico com foco na sua história, suas necessidades e seus objetivos.',
  'Abordagem cuidadosa, com escuta ativa e explicações claras a cada etapa.',
  'Consultório em Goiânia com estrutura confortável e equipamentos de alta tecnologia para te oferecer segurança e bem-estar.',
]

const examProcedureItems = [
  'Ultrassonografia obstétrica',
  'Ecografia ginecológica',
  'Exames de diagnóstico em gestação',
  'Acompanhamento de gestações de alto risco',
]

const testimonials = [
  {
    quote:
      'Fui acolhida do começo ao fim. O atendimento é humano, cuidadoso e muito seguro em cada decisão.',
    author: 'Paciente de Goiânia',
  },
  {
    quote:
      'As explicações durante o pré-natal fizeram toda a diferença. Saí de cada consulta entendendo exatamente o que estava acontecendo.',
    author: 'Acompanhamento pré-natal',
  },
  {
    quote:
      'Estrutura excelente, exames com muita qualidade e uma postura médica que transmite confiança de verdade.',
    author: 'Consulta ginecológica',
  },
]

const contactBadges = [
  {
    icon: (
      <svg
        aria-hidden="true"
        className="size-4"
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
    ),
    text: '(62) 3070-5555',
  },
  {
    icon: (
      <svg
        aria-hidden="true"
        className="size-4"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          d="M4 4h16v16H4z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="m4 7.5 8 6 8-6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    ),
    text: 'contato@fetalcentercentromedico.com.br',
  },
  {
    icon: (
      <svg
        aria-hidden="true"
        className="size-4"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    text: 'A-26, Edifício Absolut Business Style - Av. T-4, 1478 - 2° andar, Sala - St. Bueno, Goiânia - GO, 74230-030',
  },
]

const homeFaqs = faqs.slice(0, 3)

const primaryButtonClass =
  "inline-flex items-center justify-center rounded-[26px] bg-[#486284] px-[15px] py-[10px] font-['DM_Sans'] text-[16px] font-normal tracking-[0.5px] text-white transition-colors duration-200 hover:bg-[#3f5870]"

const outlineButtonClass =
  "inline-flex items-center justify-center rounded-[36px] border border-white/90 px-9 py-5 font-['Lato'] text-[18px] font-medium tracking-[0.08em] text-white transition-colors duration-200 hover:bg-white hover:text-[#486284]"

function PlayIcon() {
  return (
    <svg aria-hidden="true" className="size-14 md:size-20" viewBox="0 0 80 80" fill="none">
      <path d="M60 40 24 61V19l36 21Z" fill="#486284" />
    </svg>
  )
}

function ChevronIcon() {
  return (
    <svg aria-hidden="true" className="size-3 text-[#486284]" viewBox="0 0 12 8" fill="none">
      <path
        d="m1 1 5 5 5-5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export default function FigmaHomePage() {
  return (
    <main className="figma-home overflow-x-clip bg-[#edf4f6] text-[#2f2f2f]">
      <section className="relative overflow-hidden bg-[#d7e3e8]">
        <img
          src="/figma-home/hero-background.svg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(237,244,246,0.9)_0%,rgba(237,244,246,0.84)_24%,rgba(237,244,246,0.54)_43%,rgba(237,244,246,0.14)_63%,rgba(237,244,246,0.03)_100%)]" />

        <div className="relative mx-auto flex min-h-[677px] max-w-[1280px] items-center px-6 pb-24 pt-16 sm:px-8 lg:px-10">
          <div className="max-w-[660px] lg:ml-[42px] lg:mt-[-8px]">
            <h1 className="max-w-[596px] font-['EB_Garamond'] text-[40px] font-medium leading-[1.12] tracking-[0.5px] text-[#1f1f1f] sm:text-[48px] lg:text-[56px] lg:leading-[64px]">
              Você está procurando por{' '}
              <span className="font-semibold text-[#486a84]">ginecologista</span>{' '}
              <span className="font-semibold text-[#486a84]">e</span>{' '}
              <span className="font-semibold text-[#486a84]">obstetra em Goiânia</span>?
            </h1>

            <ul className="mt-5 max-w-[560px] space-y-3 pl-6 font-['Questrial'] text-[18px] leading-[1.75] tracking-[0.35px] text-[#2f2f2f] marker:text-[#486284] lg:text-[20px] lg:leading-[31px]">
              {heroHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <a className={`${primaryButtonClass} mt-7`} href="https://wa.me/556299504788" target="_blank" rel="noreferrer">
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
                Cuidar da saúde feminina exige atenção, sensibilidade e conhecimento.
              </p>
              <p>
                O atendimento com o Dr. Jony vai muito além da consulta médica tradicional
                e é pensado para criar vínculo, acolher suas necessidades e oferecer
                acompanhamento completo tanto na ginecologia quanto na obstetrícia.
              </p>
              <p>
                Se você precisa de um ginecologista para gestante, deseja iniciar o
                pré-natal ou simplesmente realizar seus exames de rotina, aqui você
                encontra atenção verdadeira. Desde o planejamento gestacional até o parto,
                o Dr. Jony caminha ao seu lado com responsabilidade e empatia.
              </p>
            </div>
            <a className={`${primaryButtonClass} mt-6`} href="https://wa.me/556299504788" target="_blank" rel="noreferrer">
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

            {['/figma-home/badge-1.svg', '/figma-home/badge-2.svg', '/figma-home/badge-3.svg', '/figma-home/badge-4.svg'].map(
              (badge, index) => {
                const positions = [
                  'left-[8%] top-[12%]',
                  'right-[10%] top-[28%]',
                  'left-[5%] bottom-[16%]',
                  'right-[14%] top-[8%]',
                ]

                return (
                  <img
                    key={badge}
                    src={badge}
                    alt=""
                    className={`absolute hidden size-[90px] md:block lg:size-[120px] ${positions[index]}`}
                  />
                )
              },
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#e1e6e7] py-20 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 sm:px-8 lg:grid-cols-[minmax(0,700px)_520px] lg:px-10">
          <div>
            <h2 className="max-w-[612px] font-['EB_Garamond'] text-[38px] font-medium leading-[1.2] tracking-[0.5px] text-[#1f1f1f] md:text-[48px] md:leading-[70px]">
              Exames e Procedimentos
            </h2>
            <div className="mt-4 max-w-[700px] space-y-4 font-['Questrial'] text-[18px] leading-[32px] tracking-[0.5px] text-[#2f2f2f]">
              <p>
                No consultório do Dr. Jony, é possível realizar exames essenciais para o
                acompanhamento da saúde da mulher e da gravidez.
              </p>
              <p>
                São oferecidos serviços como ultrassonografia obstétrica em Goiânia,
                ecografia ginecológica, exames de diagnóstico durante a gestação e
                acompanhamento de gestações de alto risco com todo o suporte necessário.
              </p>
              <p>
                A realização dos exames é feita com tecnologia moderna, garantindo imagens
                nítidas, diagnósticos precisos e muito mais tranquilidade para a gestante.
              </p>
            </div>
            <a className={`${primaryButtonClass} mt-6`} href="https://wa.me/556299504788" target="_blank" rel="noreferrer">
              Agendar consulta
            </a>
          </div>

          <div className="flex flex-col gap-5">
            {examProcedureItems.map((item) => (
              <div
                key={item}
                className="flex min-h-[140px] items-center justify-center rounded-[30px] border border-[rgba(72,98,132,0.1)] bg-[rgba(72,98,132,0.45)] px-8 text-center"
              >
                <p className="font-['Questrial'] text-[24px] leading-[1.3] tracking-[0.5px] text-white md:text-[31px]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="consultorio" className="bg-[#ebedee] py-20 md:py-24">
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
                O Dr. Jony é ginecologista e obstetra formado pela Universidade Federal de
                Goiás, com especialização no Hospital das Clínicas de Goiânia e
                aperfeiçoamento em medicina fetal e ultrassonografia no Instituto Fernandes
                Figueira (RJ).
              </p>
              <p>
                Sua atuação se destaca pela combinação entre conhecimento técnico
                atualizado e uma abordagem humana, que respeita as particularidades de cada
                paciente.
              </p>
              <p>
                Ele é reconhecido por proporcionar uma experiência de cuidado onde a
                paciente é ouvida, compreendida e tratada com atenção total, seja em
                consultas ginecológicas, no acompanhamento de pré-natal ou em casos mais
                complexos.
              </p>
            </div>
            <a className={`${primaryButtonClass} mt-6`} href="https://wa.me/556299504788" target="_blank" rel="noreferrer">
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
                A saúde do bebê começa na gestação. Por isso, o Dr. Jony realiza um
                acompanhamento pré-natal cuidadoso e completo, focado na saúde da mãe e do
                bebê desde as primeiras semanas.
              </p>
              <p>
                O acompanhamento neonatal tem início com exames de ultrassonografia de alta
                precisão e monitoramento regular da evolução da gestação.
              </p>
              <p>
                Esse olhar atento desde o início é essencial para promover um parto mais
                seguro e um início de vida mais saudável para o recém-nascido. Se você está
                grávida ou tentando engravidar, o pré-natal com o Dr. Jony garante uma
                jornada mais tranquila, com acolhimento e responsabilidade.
              </p>
            </div>
            <a className={`${primaryButtonClass} mt-6`} href="https://wa.me/556299504788" target="_blank" rel="noreferrer">
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
                Quando se trata da sua saúde, escolher um ginecologista e obstetra vai além
                do currículo. É sobre se sentir ouvida, respeitada e segura.
              </p>
              <p>
                O Dr. Jony oferece um atendimento particular que valoriza o tempo de cada
                paciente, com escuta verdadeira, clareza nas informações e um cuidado
                centrado em você.
              </p>
              <p>
                As consultas não são apressadas. Você terá espaço para tirar dúvidas, falar
                sobre suas inseguranças e tomar decisões com apoio profissional de verdade.
                Ao escolher o Dr. Jony, você terá um parceiro presente em todos os momentos
                da sua saúde íntima e reprodutiva.
              </p>
            </div>
            <a className={`${primaryButtonClass} mt-6`} href="https://wa.me/556299504788" target="_blank" rel="noreferrer">
              Agendar consulta
            </a>
          </div>

          <div className="home-paper-shadow overflow-hidden rounded-[18px] bg-white">
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
            Entenda como acontecem as consultas, os exames e o acompanhamento completo em
            ginecologia e obstetrícia.
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
                O Dr. Jony oferece também atendimento online para quem precisa de
                praticidade, mora em outra cidade ou deseja orientações iniciais antes da
                consulta presencial.
              </p>
              <p>
                Esse formato é ideal para tirar dúvidas, revisar exames ou dar continuidade
                a acompanhamentos simples com conforto e segurança.
              </p>
              <p>
                Já as consultas presenciais são realizadas em Goiânia, em um espaço moderno
                e acolhedor, ideal para exames ginecológicos, início de pré-natal e
                acompanhamento de gestações. Seja online ou presencial, o cuidado é sempre
                pessoal, atencioso e feito com responsabilidade.
              </p>
            </div>
            <a className={`${primaryButtonClass} mt-6`} href="https://wa.me/556299504788" target="_blank" rel="noreferrer">
              Agendar consulta
            </a>
          </div>

          <div className="home-paper-shadow overflow-hidden rounded-[18px] bg-white">
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
            Histórias de pacientes que encontraram cuidado atencioso, estrutura de qualidade
            e confiança durante o acompanhamento.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.author}
                className="rounded-[10px] border border-white/30 bg-white/45 p-7 text-left shadow-[0_12px_36px_rgba(72,98,132,0.08)] backdrop-blur-[6px]"
              >
                <div className="mb-5 size-[58px] rounded-full bg-[#adbdd2]" />
                <p className="font-['Questrial'] text-[20px] leading-[34px] tracking-[0.5px] text-[#8ca2c0]">
                  {testimonial.quote}
                </p>
                <p className="mt-4 font-['DM_Sans'] text-[16px] leading-[29px] text-[#486284]">
                  {testimonial.author}
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

      <section className="bg-[#ebedee] py-20 md:py-24">
        <div className="mx-auto max-w-[1420px] px-6 sm:px-8 lg:px-10">
          <h2 className="font-['EB_Garamond'] text-[36px] font-medium leading-[1.2] tracking-[0.5px] text-[#1f1f1f] md:text-[48px] md:leading-[70px]">
            Venha conhecer o consultório!
          </h2>

          <div className="mt-8 flex flex-wrap gap-4">
            {contactBadges.map((item) => (
              <div
                key={item.text}
                className="inline-flex min-h-[47px] items-center gap-[9px] rounded-[9px] bg-[#c8d4d9] px-4 py-3 font-['Poppins'] text-[15px] font-medium leading-[28px] text-[#486284]"
              >
                <span className="text-[#486284]">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[250px_minmax(0,1fr)]">
            <aside className="rounded-[9px] bg-[#c8d4d9] p-5 text-[#486284]">
              <div className="mb-5 flex items-center gap-3">
                <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                  <path
                    d="M12 7.5v5l3.5 2"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  />
                </svg>
                <p className="font-['Poppins'] text-[20px] font-bold leading-[28px]">Horários</p>
              </div>

              <div className="font-['Poppins'] text-[15px] font-medium leading-[30px]">
                <p>Segunda-feira: 07:00-18:00</p>
                <p>Terça-feira: 07:00-18:00</p>
                <p>Quarta-feira: 07:00-18:00</p>
                <p>Quinta-feira: 07:00-18:00</p>
                <p>Sexta-feira: 07:00-18:00</p>
                <p>Sábado: Fechado</p>
                <p>Domingo: Fechado</p>
              </div>
            </aside>

            <div className="relative overflow-hidden rounded-[9px]">
              <img
                src="/figma-home/map-preview.png"
                alt="Mapa do consultório"
                className="min-h-[300px] w-full object-cover"
              />
              <div className="absolute left-6 top-6 w-[220px] rounded-sm bg-white p-3 text-left shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
                <p className="font-['Roboto'] text-[14px] font-medium text-black">
                  Fetalcenter Centro Médico Go...
                </p>
                <p className="mt-2 font-['Roboto'] text-[12px] leading-[1.4] text-[#5b5b5b]">
                  Edifício Absolut Business Style - Av. T-4, 1478 - 2 Andar - St.
                  Bueno, Goiânia - GO, 74230-030
                </p>
                <div className="mt-3 flex items-center gap-2 font-['Roboto'] text-[12px] text-[#1a73e8]">
                  <span className="text-[14px] font-medium text-[#5b5b5b]">4,0</span>
                  <span>★★★★★</span>
                  <span>100 avaliações</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Edif%C3%ADcio+Absolut+Business+Style+Goi%C3%A2nia"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block font-['Roboto'] text-[12px] text-[#1a73e8]"
                >
                  Ver mapa ampliado
                </a>
              </div>
            </div>
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
            Comece a sua jornada de saúde e bem-estar, com o cuidado que você e sua
            família merecem.
          </h2>

          <div className="mt-10 flex flex-col items-center justify-center gap-5 md:flex-row md:gap-8">
            <a
              href="https://wa.me/556299504788"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-[36px] bg-[#486284] px-9 py-5 font-['Lato'] text-[18px] font-medium tracking-[0.08em] text-white transition-colors duration-200 hover:bg-[#425b76]"
            >
              <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24">
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

            <a className={outlineButtonClass} href="#consultorio">
              Ver localização
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#edf4f6] px-6 py-10 sm:px-8">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-4 text-[#1f2222] md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-['Inter'] text-[24px] font-bold tracking-[1.04px] text-[#486284]">
              Dra. Sílvia Marques de Aguiar
            </p>
            <p className="font-['Poppins'] text-[16px] font-medium text-[#36416e]">
              Diretor Técnico Médico - CRM: 11032| RQE N° 6104
            </p>
          </div>

          <p className="font-['Poppins'] text-[16px] leading-[26px] md:text-right">
            © Dr. Jony 2025 Todos os direitos reservados
          </p>
        </div>
      </footer>
    </main>
  )
}
