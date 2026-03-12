"use client";

"use client"

import React, { useState } from 'react';
import type { FaqItem } from '../../types';

interface Props {
  faqs: FaqItem[];
  serviceTitle: string;
}

const ServiceFaq: React.FC<Props> = ({ faqs, serviceTitle }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-20 md:py-28">
      <div className="page-container max-w-4xl">
        <h2 className="text-center font-['EB_Garamond'] text-[38px] font-medium tracking-[0.4px] text-[var(--ds-color-text-strong)] md:text-[44px]">Perguntas Frequentes sobre {serviceTitle}</h2>
        <p className="mb-12 mt-3 text-center font-['Questrial'] text-[18px] leading-[32px] text-[var(--ds-color-text-muted)]">
          Tire suas dúvidas sobre o procedimento
        </p>

        <div className="mt-8 space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="surface-card overflow-hidden rounded-[18px] text-left transition-all">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="group flex w-full items-center justify-between px-8 py-6"
              >
                <span className="font-['Poppins'] text-lg font-medium text-[var(--ds-color-brand-700)] transition-colors group-hover:text-[var(--ds-color-brand-500)]">
                  {faq.question}
                </span>
                <div className={`flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(72,98,132,0.08)] transition-all ${openIndex === i ? 'rotate-180 bg-[var(--ds-color-brand-500)] text-white border-[var(--ds-color-brand-500)]' : 'text-[var(--ds-color-brand-500)]'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96' : 'max-h-0'}`}>
                <div className="border-t border-[rgba(72,98,132,0.06)] px-8 pb-8 pt-4 font-['Questrial'] leading-[30px] text-[var(--ds-color-text-muted)]">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFaq;
