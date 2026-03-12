import React from 'react';
import Button from './ui/Button';

interface Props {
  title?: string;
  subtitle?: string;
}

const ServicesSection: React.FC<Props> = ({ title, subtitle }) => {
  const services = [
    {
      title: "Consulta Médica",
      desc: "Check-up ginecológico completo e humanizado.",
      price: "Sob Consulta",
      img: "/dr-jony-profile.webp"
    },
    {
      title: "Medicina Fetal",
      desc: "Acompanhamento detalhado da saúde do seu bebê.",
      price: "Sob Consulta",
      img: "/dr-jony-profile.webp"
    },
    {
      title: "Cirurgia Ginecológica",
      desc: "Procedimentos avançados minimamente invasivos.",
      price: "Sob Consulta",
      img: "/dr-jony-profile.webp"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
            {title || "Principais Serviços"}
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            {subtitle || "Tecnologia e cuidado integrados na preservação da saúde feminina."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <div key={i} className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-slate-100 flex flex-col h-full">
              <div className="h-64 overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <div className="mt-auto border-t border-slate-50 pt-6 flex items-center justify-between">
                  <span className="text-primary font-bold">{service.price}</span>
                  <a href={`/servicos`} className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" href="/servicos">
            Ver Todos os Serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
