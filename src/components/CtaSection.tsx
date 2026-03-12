import React from 'react';
import Button from './ui/Button';

const CtaSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <img 
          src="/generated/cta-clinica-feminina.webp"
          alt="Ambiente da clínica"
          className="w-full h-full object-cover opacity-10 mix-blend-overlay" 
        />
      </div>
      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-serif mb-6 font-bold leading-tight">
          Comece a sua jornada de <span className="text-accent underline decoration-secondary">saúde e bem-estar</span>
        </h2>
        <p className="text-xl text-blue-100/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Consulta ginecológica particular com atendimento personalizado e possibilidade de reembolso pelo seu plano de saúde.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Button variant="accent" className="bg-[#25D366] text-white hover:bg-[#1ebe55] border-none shadow-2xl shadow-[#25D366]/20 px-10 py-5" href="https://wa.me/556299504788">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Agendar no WhatsApp
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-10 py-5" href="/localizacao">
            Localização das Clínicas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
