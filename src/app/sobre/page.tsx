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
    <div className="min-h-screen flex flex-col font-sans text-slate-600">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-6 py-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-12 text-center">Sobre o Dr. Jony Barbosa</h1>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border-8 border-white">
                <img src="/dr-jony-profile.webp" alt="Dr. Jony Barbosa" className="w-full aspect-[4/5] object-cover" />
              </div>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Sou médico Ginecologista e Obstetra, especialista em Medicina Fetal, focado em oferecer um atendimento 
                  que une a precisão tecnológica ao acolhimento humano.
                </p>
                <p>
                  Minha missão é acompanhar cada fase da vida da mulher, desde a adolescência até a menopausa, com especial 
                  dedicação ao pré-natal de alto risco e ao diagnóstico fetal avançado.
                </p>
                <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                  <h3 className="font-bold text-primary mb-2">Formação de Excelência</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Especialista em Ginecologia e Obstetrícia</li>
                    <li>Especialista em Medicina Fetal</li>
                    <li>Referência em Diagnóstico por Imagem em Goiânia</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="prose prose-slate prose-lg max-w-none space-y-8">
              <h2 className="text-3xl font-serif font-bold text-primary">Nossa Filosofia</h2>
              <p>
                Acreditamos que cada gestação é única e que cada mulher merece um plano de cuidado personalizado. 
                Em nossos consultórios, priorizamos o tempo de escuta, a clareza nas informações e o uso de 
                tecnologias atualizadas para apoiar a segurança da mãe e do bebê.
              </p>
              <p>
                Seja para uma consulta de rotina, inserção de DIU ou acompanhamento de uma gestação de alta complexidade, 
                nosso objetivo é que você se sinta segura, ouvida e cuidada.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
