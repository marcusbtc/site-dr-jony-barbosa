import React from 'react';
import type { ServiceItem } from '../../types';

interface Props {
  item?: ServiceItem;
  type?: 'service' | 'exam' | 'procedure';
  title?: string;
  description?: string;
  href?: string;
  linkText?: string;
}

const Card: React.FC<Props> = ({ 
  item, 
  type, 
  title, 
  description, 
  href, 
  linkText = 'Saiba mais' 
}) => {
  const cardTitle = title || item?.title || '';
  const cardDescription = description || item?.description || '';

  let cardHref = href;
  if (!cardHref && item?.slug && type) {
    const categoryMap: Record<string, string> = {
      'service': 'especialidades',
      'exam': 'exames',
      'procedure': 'servicos'
    };
    const categoryPath = categoryMap[type] || 'servicos';
    cardHref = `/${categoryPath}/${item.slug}`;
  } else if (!cardHref) {
    cardHref = '#contato';
  }

  const icons = {
    service: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"/>
      </svg>
    ),
    exam: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    procedure: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    )
  };

  return (
    <div className="surface-card group mx-4 flex min-w-[280px] flex-shrink-0 snap-center flex-col rounded-[18px] p-8 transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(72,98,132,0.18)] hover:shadow-[0_18px_44px_rgba(72,98,132,0.1)] md:mx-0 md:min-w-[300px]">
      {type && (
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[14px] border border-[rgba(72,98,132,0.08)] bg-[rgba(173,189,210,0.18)] text-[var(--ds-color-brand-700)] transition-transform duration-300">
          {icons[type]}
        </div>
      )}
      <h3 className="mb-3 font-['EB_Garamond'] text-[28px] font-medium leading-[1.15] tracking-[0.3px] text-[var(--ds-color-text-strong)]">
        {cardTitle}
      </h3>
      <p className="mb-6 font-['Questrial'] text-[16px] leading-[28px] tracking-[0.2px] text-[var(--ds-color-text-muted)]">
        {cardDescription}
      </p>
      <a href={cardHref} className="mt-auto flex items-center gap-1 font-['DM_Sans'] text-[14px] uppercase tracking-[0.08em] text-[var(--ds-color-brand-500)] transition-colors hover:text-[var(--ds-color-brand-700)]">
        {linkText}
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </a>
    </div>
  );
};

export default Card;
