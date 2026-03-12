import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/seo/Breadcrumbs';

export default function ContatoPage() {
  const breadcrumbItems = [
    { label: 'Início', href: '/' },
    { label: 'Contato', href: '/contato' },
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
              <p className="eyebrow-label mb-4">Contato</p>
              <h1 className="page-title">Fale Conosco</h1>
              <p className="page-intro mt-4">
                Canais diretos para agendamento, dúvidas e orientações sobre consultas.
              </p>
            </div>

            <div className="mt-10 grid gap-10 md:grid-cols-2">
              <div className="space-y-10">
                <div className="page-section p-8">
                  <h2 className="mb-6 font-['EB_Garamond'] text-[34px] font-medium text-[var(--ds-color-text-strong)]">
                    Canais de Atendimento
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(173,189,210,0.22)]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--ds-color-brand-700)]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                      </div>
                      <div>
                        <h3 className="font-['Poppins'] font-medium text-[var(--ds-color-brand-700)]">Telefones</h3>
                        <p className="text-lg">(62) 3070-5555</p>
                        <p className="text-lg">(62) 99613-6640 (WhatsApp)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(173,189,210,0.22)]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--ds-color-brand-700)]"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                      </div>
                      <div>
                        <h3 className="font-['Poppins'] font-medium text-[var(--ds-color-brand-700)]">E-mail</h3>
                        <p className="text-lg">contato@drjonybarbosa.com.br</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="page-section p-8">
                  <h2 className="mb-6 font-['EB_Garamond'] text-[34px] font-medium text-[var(--ds-color-text-strong)]">
                    Horário de Funcionamento
                  </h2>
                  <div className="surface-card rounded-[18px] p-6">
                    <ul className="space-y-3">
                      <li className="flex justify-between border-b border-[rgba(72,98,132,0.08)] pb-2">
                        <span>Segunda a Sexta</span>
                        <span className="font-medium text-[var(--ds-color-brand-700)]">07:00 - 18:00</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sábado e Domingo</span>
                        <span className="text-[var(--ds-color-brand-500)]">Fechado</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="page-section p-8">
                <h2 className="font-['EB_Garamond'] text-[38px] font-medium text-[var(--ds-color-text-strong)]">
                  Agende sua Consulta
                </h2>
                <p className="mb-8 mt-4 leading-[32px] text-[var(--ds-color-text-muted)]">
                  Para sua maior comodidade, todos os agendamentos são realizados via
                  WhatsApp. Clique no botão abaixo para falar com nossa secretária agora
                  mesmo.
                </p>
                <a
                  href="https://wa.me/556299504788"
                  className="inline-flex w-full items-center justify-center rounded-[26px] bg-[var(--ds-color-brand-700)] py-5 text-center font-['DM_Sans'] text-xl tracking-[0.4px] text-white shadow-[0_18px_34px_rgba(72,98,132,0.18)] hover:scale-[1.02]"
                >
                  Falar no WhatsApp
                </a>
                <p className="mt-6 text-center text-sm text-[var(--ds-color-brand-500)]">
                  Resposta imediata em horário comercial
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
