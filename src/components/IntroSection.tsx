import React from 'react';
import Button from './ui/Button';

const IntroSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-8 leading-relaxed">
            Olá, eu sou o <span className="text-primary italic">Dr. Jony Barbosa</span>. 
            Acredito que cada mulher é única e merece um atendimento <span className="text-secondary">individualizado e humano</span>.
          </h2>
          
          <div className="w-20 h-1.5 bg-accent mx-auto mb-10 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-12">
            {[
              {
                title: "Humanização",
                desc: "Atendimento focado no acolhimento emocional e físico da paciente.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              },
              {
                title: "Tecnologia",
                desc: "Uso das mais modernas técnicas em cirurgia ginecológica e exames.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 12-4-4-4 4"/><path d="M12 16V8"/></svg>
              },
              {
                title: "Excelência",
                desc: "Constantemente atualizado com as melhores práticas da medicina mundial.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 border border-slate-100 group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 inline-flex items-center gap-6 text-left max-w-2xl">
            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-md">
              <img src="/dr-jony-thumb.jpg" alt="Dr. Jony Barbosa" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="italic text-slate-700 leading-relaxed text-sm mb-2">
                "Minha missão é transformar a experiência da saúde feminina, trazendo segurança e autonomia para minhas pacientes."
              </p>
              <div className="font-bold text-primary">Dr. Jony Barbosa</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
