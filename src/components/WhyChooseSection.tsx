import React from 'react';

const WhyChooseSection: React.FC = () => {
  const points = [
    {
      title: "Atendimento Humanizado",
      desc: "Escuta ativa e acolhimento em cada etapa do seu tratamento.",
      color: "bg-blue-500"
    },
    {
      title: "Tecnologia de Ponta",
      desc: "Equipamentos modernos para diagnósticos precisos e seguros.",
      color: "bg-secondary"
    },
    {
      title: "Localização Privilegiada",
      desc: "Clínicas nos principais bairros de Goiânia para sua conveniência.",
      color: "bg-primary"
    },
    {
      title: "Foco na Paciente",
      desc: "Planos de tratamento personalizados de acordo com sua realidade.",
      color: "bg-accent text-primary"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-primary/20 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px] -z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 text-accent text-sm font-bold tracking-wide uppercase backdrop-blur-md">
              Diferenciais
            </div>
            <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-8 leading-tight">
              Por que escolher o <span className="text-secondary">Dr. Jony Barbosa</span>?
            </h2>
            <p className="text-lg text-slate-300 mb-12 leading-relaxed">
              Combinamos décadas de experiência clínica com um olhar moderno e atencioso, garantindo que você se sinta segura e respeitada em todas as consultas.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {points.map((point, i) => (
                <div key={i} className="flex gap-4">
                  <div className={`w-12 h-12 rounded-xl ${point.color} flex-shrink-0 flex items-center justify-center font-bold text-xl shadow-lg`}>
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">{point.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-2xl -z-10"></div>
            <div className="relative overflow-hidden rounded-[3rem] border border-white/10 shadow-3xl bg-slate-800 p-2">
              <img 
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800" 
                alt="Excelência médica" 
                className="w-full h-full object-cover rounded-[2.5rem]"
              />
              
              {/* Floating Quote */}
              <div className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur-xl p-8 rounded-3xl shadow-2xl text-slate-900 border border-white">
                <div className="text-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.437.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                </div>
                <p className="italic font-serif text-lg mb-4">
                  "O Dr. Jony não apenas trata problemas, ele cuida de pessoas. Foi a primeira vez que me senti realmente ouvida por um médico."
                </p>
                <div className="text-sm font-bold text-primary uppercase tracking-widest">— Maria Eduarda, Goiânia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
