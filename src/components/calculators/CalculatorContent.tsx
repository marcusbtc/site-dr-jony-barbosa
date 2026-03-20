import React from 'react';
import type { CalculatorItem } from '../../types';

interface Props {
  calculator: CalculatorItem;
}

const CalculatorContent: React.FC<Props> = ({ calculator }) => {
  return (
    <section id="sobre-calculadora" className="py-16 md:py-24">
      <div className="page-container max-w-4xl">
        <div className="page-section mb-10 p-8 md:p-10">
          <h2 className="mb-6 font-['EB_Garamond'] text-[40px] font-medium tracking-[0.4px] text-[var(--ds-color-text-strong)]">
            O que esta calculadora mostra
          </h2>
          <p className="font-['Questrial'] text-[18px] leading-[32px] tracking-[0.3px] text-[var(--ds-color-text-body)]">
            {calculator.whatItShows}
          </p>
        </div>

        <div className="page-section mb-10 p-8 md:p-10">
          <h2 className="mb-6 font-['EB_Garamond'] text-[34px] font-medium tracking-[0.35px] text-[var(--ds-color-text-strong)]">
            Como usar
          </h2>
          <ol className="space-y-6">
            {calculator.howToUse.map((step, index) => (
              <li key={step} className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--ds-color-brand-700)] font-['DM_Sans'] text-lg text-white shadow-[0_10px_22px_rgba(72,98,132,0.18)]">
                  {index + 1}
                </div>
                <p className="pt-1 font-['Questrial'] text-[18px] leading-[32px] text-[var(--ds-color-text-body)]">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {calculator.timelineHighlights && calculator.timelineHighlights.length > 0 ? (
          <div className="page-section mb-10 p-8 md:p-10">
            <h2 className="mb-6 font-['EB_Garamond'] text-[34px] font-medium tracking-[0.35px] text-[var(--ds-color-text-strong)]">
              Janelas que costumam orientar o acompanhamento
            </h2>
            <div className="space-y-5">
              {calculator.timelineHighlights.map((item) => (
                <div
                  key={`${item.label}-${item.timing}`}
                  className="surface-card rounded-[18px] p-6"
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="font-['Poppins'] text-lg font-medium text-[var(--ds-color-text-strong)]">
                        {item.label}
                      </h3>
                      <p className="mt-2 font-['Questrial'] leading-[28px] text-[var(--ds-color-text-body)]">
                        {item.details}
                      </p>
                    </div>
                    <span className="rounded-full bg-[rgba(173,189,210,0.22)] px-4 py-2 font-['DM_Sans'] text-sm uppercase tracking-[0.08em] text-[var(--ds-color-brand-700)]">
                      {item.timing}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="page-section mb-10 p-8 md:p-10">
          <h2 className="mb-6 font-['EB_Garamond'] text-[34px] font-medium tracking-[0.35px] text-[var(--ds-color-text-strong)]">
            Como interpretar o resultado
          </h2>
          <ul className="space-y-4">
            {calculator.resultNotes.map((note) => (
              <li
                key={note}
                className="flex items-start gap-3 font-['Questrial'] text-[18px] leading-[32px] text-[var(--ds-color-text-body)]"
              >
                <svg
                  className="mt-1 h-6 w-6 flex-shrink-0 text-[var(--ds-color-brand-500)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="page-section mb-10 p-8 md:p-10">
          <h2 className="mb-6 font-['EB_Garamond'] text-[34px] font-medium tracking-[0.35px] text-[var(--ds-color-text-strong)]">
            Quando vale falar com o Dr. Jony
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {calculator.whenToTalkToDoctor.map((item) => (
              <div
                key={item}
                className="surface-card flex items-start gap-4 rounded-[18px] p-6"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(72,98,132,0.1)] text-[var(--ds-color-brand-700)]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M4.93 19h14.14c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.2 16c-.77 1.33.19 3 1.73 3z"
                    />
                  </svg>
                </div>
                <p className="font-['Questrial'] leading-[28px] text-[var(--ds-color-text-body)]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[24px] border border-[rgba(188,98,86,0.18)] bg-[rgba(244,224,218,0.55)] p-8 shadow-[0_16px_36px_rgba(188,98,86,0.08)]">
          <p className="font-['DM_Sans'] text-[14px] uppercase tracking-[0.1em] text-[#9a5448]">
            Aviso importante
          </p>
          <p className="mt-3 font-['Questrial'] text-[18px] leading-[32px] text-[var(--ds-color-text-body)]">
            {calculator.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CalculatorContent;
