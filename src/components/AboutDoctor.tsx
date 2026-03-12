import React from 'react';
import Button from './ui/Button';

const AboutDoctor: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[12px] border-white z-10">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800" 
                alt="Dr. Jony Barbosa atendendo" 
                className="w-full h-[600px] object-cover"
              />
            </div>
            
            <div className="absolute -right-8 bottom-20 bg-primary p-6 rounded-2xl shadow-xl z-20 text-white max-w-[200px] animate-fade-in-right">
              <div className="text-3xl font-serif font-bold mb-1">+15</div>
              <div className="text-xs uppercase tracking-widest font-bold opacity-80">Anos de dedicação à medicina</div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 text-primary text-sm font-bold tracking-wide uppercase">
              Conheça o Especialista
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">
              Dr. Jony Rodrigues Barbosa
            </h2>
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-10">
              <p>
                Graduado em Medicina pela Universidade Federal de Goiás, o Dr. Jony Barbosa é especialista em Ginecologia e Obstetrícia, com foco em Medicina Fetal e Ultrassonografia.
              </p>
              <p>
                Sua trajetória é marcada pelo compromisso com a atualização constante e pelo desenvolvimento de um atendimento que une rigor científico a uma escuta cuidadosa e empática.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-sm font-bold text-slate-800">
                {[
                  "CRM 7652 / GO",
                  "RQE 3900 (Ginecologia)",
                  "RQE 9229 (Ultrassonografia)",
                  "Especialista em Medicina Fetal"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mb-10">
              <h4 className="text-xl font-bold text-primary mb-4">Experiência e Formação</h4>
              <p className="text-slate-600 mb-6">
                Membro titular da Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO) e da Sociedade Brasileira de Ultrassonografia (SBUS).
              </p>
              <Button variant="outline" className="text-sm">
                Ver Currículo Completo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;
