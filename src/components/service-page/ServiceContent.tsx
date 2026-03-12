import React from 'react';
import type { ExtendedServiceItem } from '../../types';

interface Props {
  service: ExtendedServiceItem;
}

const ServiceContent: React.FC<Props> = ({ service }) => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* O que é */}
        <div className="mb-14">
          <h2 className="text-3xl font-serif font-bold text-primary mb-6">O que é {service.title}?</h2>
          <p className="text-lg text-slate-700 leading-relaxed font-light">{service.whatIsIt}</p>
        </div>

        {/* Quando é indicado */}
        {service.whoNeedsIt && service.whoNeedsIt.length > 0 && (
          <div className="mb-14">
            <h2 className="text-2xl font-serif font-bold text-primary mb-6">Quando é Indicado?</h2>
            <ul className="space-y-4">
              {service.whoNeedsIt.map((indication, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 text-lg font-light leading-relaxed">
                  <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{indication}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Como funciona */}
        {service.howItWorks && service.howItWorks.length > 0 && (
          <div className="mb-14">
            <h2 className="text-2xl font-serif font-bold text-primary mb-6">Como Funciona?</h2>
            <ol className="space-y-6">
              {service.howItWorks.map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary to-[#1a3f63] text-white font-bold text-lg flex-shrink-0 shadow-md">
                    {index + 1}
                  </div>
                  <p className="text-lg text-slate-700 font-light leading-relaxed pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Benefícios */}
        {service.benefits && service.benefits.length > 0 && (
          <div>
            <h2 className="text-2xl font-serif font-bold text-primary mb-6">Benefícios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200 transition-all hover:-translate-y-1 hover:shadow-lg group">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-slate-700 font-light leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceContent;
