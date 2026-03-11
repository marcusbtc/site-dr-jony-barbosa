import { useState } from 'react';
import { X } from 'lucide-react';
import type { FaqItem } from '../types';

interface AccordionProps {
  items: FaqItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left px-6 py-4 flex justify-between items-center bg-white hover:bg-slate-50 transition-colors"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <span className="font-medium text-primary text-lg">{item.question}</span>
            <span
              className={`transform transition-transform duration-300 text-accent ${
                openIndex === index ? 'rotate-45' : ''
              }`}
            >
              <X size={20} />
            </span>
          </button>
          <div
            id={`faq-answer-${index}`}
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
