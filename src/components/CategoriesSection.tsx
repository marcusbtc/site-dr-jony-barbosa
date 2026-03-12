import React from 'react';

const categories = [
  {
    title: "Especialidades",
    subtitle: "Atendimento Clínico",
    description: "Consultas especializadas em ginecologia de rotina, climatério e reposição hormonal.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
    ),
    color: "bg-blue-500",
    href: "/especialidades"
  },
  {
    title: "Exames",
    subtitle: "Medicina Fetal",
    description: "Ultrassonografia obstétrica avançada e exames ginecológicos de alta precisão.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
    ),
    color: "bg-secondary",
    href: "/exames"
  },
  {
    title: "Serviços",
    subtitle: "Procedimentos",
    description: "Cirurgias ginecológicas minimamente invasivas e procedimentos ambulatoriais.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
    color: "bg-primary",
    href: "/servicos"
  }
];

interface Props {
  title?: string;
  subtitle?: string;
}

const CategoriesSection: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
              {title || "Áreas de Atuação"}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              {subtitle || "Soluções completas e humanizadas para a saúde da mulher em todas as idades."}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <a 
              key={i}
              href={cat.href}
              className="group relative bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border border-slate-100 overflow-hidden flex flex-col h-full"
            >
              <div className={`w-14 h-14 ${cat.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-${cat.color.split('-')[1]}/20 transform transition-transform group-hover:scale-110 duration-500`}>
                {cat.icon}
              </div>
              
              <div className="relative z-10">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2 opacity-60">
                  {cat.subtitle}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                  {cat.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                  {cat.description}
                </p>
                
                <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                  Ver Mais
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>

              {/* Decorative Background Elements */}
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-slate-50 rounded-full group-hover:bg-primary/5 transition-colors duration-500 -z-0"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
