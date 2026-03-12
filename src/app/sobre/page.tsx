import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/seo/Breadcrumbs';

export default function SobrePage() {
  const breadcrumbItems = [
    { label: 'Início', href: '/' },
    { label: 'Sobre', href: '/sobre' },
  ];

  return (
    <div className="page-shell flex min-h-screen flex-col">
      <Header />
      <main className="page-main flex-grow">
        <div className="page-container page-breadcrumbs">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <section className="pb-20">
          <div className="page-container max-w-5xl">
            <div className="page-hero">
              <p className="eyebrow-label mb-4">Trajetória e filosofia</p>
              <h1 className="page-title">Sobre o Dr. Jony Barbosa</h1>
              <p className="page-intro mt-4">
                Formação sólida, atenção cuidadosa e acompanhamento próximo em cada fase
                da saúde da mulher.
              </p>
            </div>

            <div className="page-section mt-10 grid items-center gap-12 p-8 md:grid-cols-2 md:p-10">
              <div className="surface-card overflow-hidden rounded-[18px]">
                <img src="/dr-jony-profile.webp" alt="Dr. Jony Barbosa" className="aspect-[4/5] w-full object-cover" />
              </div>
              <div className="space-y-6 font-['Questrial'] text-[18px] leading-[32px] text-[var(--ds-color-text-body)]">
                <p>
                  Sou médico Ginecologista e Obstetra, especialista em Medicina Fetal,
                  focado em oferecer um atendimento que une a precisão tecnológica ao
                  acolhimento humano.
                </p>
                <p>
                  Minha missão é acompanhar cada fase da vida da mulher, desde a
                  adolescência até a menopausa, com especial dedicação ao pré-natal de
                  alto risco e ao diagnóstico fetal avançado.
                </p>
                <div className="surface-card rounded-[18px] p-6">
                  <h3 className="mb-2 font-['Poppins'] text-lg font-medium text-[var(--ds-color-brand-700)]">
                    Formação de Excelência
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-[var(--ds-color-text-muted)]">
                    <li>Especialista em Ginecologia e Obstetrícia</li>
                    <li>Especialista em Medicina Fetal</li>
                    <li>Referência em Diagnóstico por Imagem em Goiânia</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="page-section mt-10 space-y-8 p-8 md:p-10">
              <h2 className="font-['EB_Garamond'] text-[38px] font-medium tracking-[0.4px] text-[var(--ds-color-text-strong)]">
                Nossa Filosofia
              </h2>
              <p className="font-['Questrial'] text-[18px] leading-[32px] text-[var(--ds-color-text-body)]">
                Acreditamos que cada gestação é única e que cada mulher merece um plano de
                cuidado personalizado. Em nossos consultórios, priorizamos o tempo de
                escuta, a clareza nas informações e o uso de tecnologias atualizadas para
                apoiar a segurança da mãe e do bebê.
              </p>
              <p className="font-['Questrial'] text-[18px] leading-[32px] text-[var(--ds-color-text-body)]">
                Seja para uma consulta de rotina, inserção de DIU ou acompanhamento de uma
                gestação de alta complexidade, nosso objetivo é que você se sinta segura,
                ouvida e cuidada.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
