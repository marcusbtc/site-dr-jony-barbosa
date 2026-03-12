import React from 'react';
import Button from './ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-50/50 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100/80 text-primary text-sm font-bold tracking-wide uppercase backdrop-blur-sm border border-blue-200/50 animate-fade-in">
              Ginecologia & Obstetrícia Humanizada
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-slate-900 leading-[1.15] mb-8">
              Cuidado especializado para <span className="text-primary italic">todas as fases</span> da sua saúde.
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Atendimento focado no acolhimento e na excelência médica, proporcionando saúde e bem-estar para a mulher moderna em Goiânia.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button variant="primary" className="shadow-xl shadow-primary/20">
                Agendar Consulta
              </Button>
              <Button variant="outline">
                Conhecer Especialidades
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-6 justify-center lg:justify-start">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i+10}`} alt="Paciente" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-sm text-slate-500 font-medium">
                <span className="text-primary font-bold">+5.000</span> pacientes atendidas
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-2 transform transition-transform group-hover:rotate-0 duration-700"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10 border-8 border-white">
              <img 
                src="/dr-jony-profile.webp" 
                alt="Dr. Jony Barbosa" 
                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            
            {/* Quick Stats Card */}
            <div className="absolute -bottom-6 -left-6 lg:-left-12 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-100 animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                </div>
                <div>
                  <div className="text-xl font-bold text-primary leading-none">Experiência</div>
                  <div className="text-sm text-slate-500 mt-1">Ginecologia e Obstetrícia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
