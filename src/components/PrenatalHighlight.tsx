import React from 'react';
import Button from './ui/Button';

const PrenatalHighlight: React.FC = () => {
  return (
    <section id="prenatal" className="py-24 bg-blue-50/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/10 rounded-3xl blur-2xl -z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=800"
                alt="Ultrassom Obstétrico em Goiânia"
                className="rounded-3xl shadow-2xl border-8 border-white object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                </div>
                <div>
                  <div className="text-xl font-bold text-primary">Segurança</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Para você e seu bebê</div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-bold tracking-wide uppercase">
              Excelência em Obstetrícia
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif text-primary font-bold leading-tight">
              Acompanhamento <span className="text-secondary italic">pré-natal</span> em Goiânia
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                A saúde do seu bebê começa muito antes do nascimento. O Dr. Jony realiza um acompanhamento
                pré-natal cuidadoso, unindo tecnologia de ponta e acolhimento humano.
              </p>
              <p>
                Utilizamos <strong className="text-primary font-bold">ultrassonografia morfológica de alta resolução</strong> e monitoramento
                constante para garantir que cada etapa da sua gestação seja segura e tranquila.
              </p>
              <ul className="space-y-4 pt-4">
                {["Ultrassom 3D/4D de última geração", "Rastreamento de pré-eclâmpsia", "Medicina Fetal avançada"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span className="font-medium text-slate-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-6">
              <Button variant="accent" className="px-10 py-5 shadow-xl shadow-secondary/20">
                Saiba mais sobre Pré-natal
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrenatalHighlight;
