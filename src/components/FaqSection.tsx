"use client";

"use client"

import React, { useState } from 'react';
import { faqs } from '../data/site-data';

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-blue-50/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-serif font-bold text-primary mb-4">Perguntas Frequentes (FAQ)</h2>
          <div className="h-1 bg-secondary/30 w-16 mx-auto mb-6"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm transition-all">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center transition-all ${openIndex === i ? 'rotate-180 bg-secondary text-white border-secondary' : 'text-slate-400'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96' : 'max-h-0'}`}>
                <div className="px-8 pb-8 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
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

export default FaqSection;
