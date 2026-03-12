import React from 'react';
import type { ExtendedServiceItem } from '../../types';

interface Props {
  service: ExtendedServiceItem;
}

const ServiceContent: React.FC<Props> = ({ service }) => {
  return (
    <section id="sobre" className="py-16 md:py-24">
      <div className="page-container max-w-4xl">
        {/* O que é */}
        <div className="page-section mb-10 p-8 md:p-10">
          <h2 className="mb-6 font-['EB_Garamond'] text-[40px] font-medium tracking-[0.4px] text-[var(--ds-color-text-strong)]">O que é {service.title}?</h2>
          <p className="font-['Questrial'] text-[18px] leading-[32px] tracking-[0.3px] text-[var(--ds-color-text-body)]">{service.whatIsIt}</p>
        </div>

        {/* Quando é indicado */}
        {service.whoNeedsIt && service.whoNeedsIt.length > 0 && (
          <div className="page-section mb-10 p-8 md:p-10">
            <h2 className="mb-6 font-['EB_Garamond'] text-[34px] font-medium tracking-[0.35px] text-[var(--ds-color-text-strong)]">Quando é Indicado?</h2>
            <ul className="space-y-4">
              {service.whoNeedsIt.map((indication, i) => (
                <li key={i} className="flex items-start gap-3 font-['Questrial'] text-[18px] leading-[32px] text-[var(--ds-color-text-body)]">
                  <svg className="mt-1 h-6 w-6 flex-shrink-0 text-[var(--ds-color-brand-500)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <div className="page-section mb-10 p-8 md:p-10">
            <h2 className="mb-6 font-['EB_Garamond'] text-[34px] font-medium tracking-[0.35px] text-[var(--ds-color-text-strong)]">Como Funciona?</h2>
            <ol className="space-y-6">
              {service.howItWorks.map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--ds-color-brand-700)] font-['DM_Sans'] text-lg text-white shadow-[0_10px_22px_rgba(72,98,132,0.18)]">
                    {index + 1}
                  </div>
                  <p className="pt-1 font-['Questrial'] text-[18px] leading-[32px] text-[var(--ds-color-text-body)]">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Benefícios */}
        {service.benefits && service.benefits.length > 0 && (
          <div className="page-section p-8 md:p-10">
            <h2 className="mb-6 font-['EB_Garamond'] text-[34px] font-medium tracking-[0.35px] text-[var(--ds-color-text-strong)]">Benefícios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="surface-card flex items-start gap-4 rounded-[18px] p-6 transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(72,98,132,0.1)] group">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(72,98,132,0.1)] text-[var(--ds-color-brand-700)] transition-colors group-hover:bg-[var(--ds-color-brand-700)] group-hover:text-white">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="font-['Questrial'] leading-[28px] text-[var(--ds-color-text-body)]">{benefit}</p>
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
