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
    <div className="min-h-screen flex flex-col font-sans text-slate-600">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-6 py-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-12 text-center">Fale Conosco</h1>
            
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-10">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-primary mb-6">Canais de Atendimento</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800">Telefones</h3>
                        <p className="text-lg">(62) 3070-5555</p>
                        <p className="text-lg">(62) 99613-6640 (WhatsApp)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800">E-mail</h3>
                        <p className="text-lg">contato@drjonybarbosa.com.br</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-primary mb-6">Horário de Funcionamento</h2>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <ul className="space-y-3">
                      <li className="flex justify-between border-b border-slate-200 pb-2"><span>Segunda a Sexta</span> <span className="font-bold">07:00 - 18:00</span></li>
                      <li className="flex justify-between"><span>Sábado e Domingo</span> <span className="text-slate-400">Fechado</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-xl shadow-primary/5 border border-slate-100">
                <h2 className="text-3xl font-serif font-bold text-primary mb-8">Agende sua Consulta</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Para sua maior comodidade, todos os agendamentos são realizados via WhatsApp. Clique no botão abaixo para falar com nossa secretária agora mesmo.
                </p>
                <a 
                  href="https://wa.me/556299504788" 
                  className="block w-full bg-accent text-white py-5 rounded-2xl text-center text-xl font-bold shadow-lg shadow-accent/20 hover:scale-[1.02] transition-transform"
                >
                  Falar no WhatsApp
                </a>
                <p className="text-center mt-6 text-sm text-slate-400">Resposta imediata em horário comercial</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
