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
    <div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-200 group min-w-[280px] md:min-w-[300px] flex-shrink-0 mx-4 md:mx-0 snap-center">
      {type && (
        <div className="mb-6 text-primary bg-slate-50 border border-slate-200 w-14 h-14 rounded-lg flex items-center justify-center transition-transform duration-300">
          {icons[type]}
        </div>
      )}
      <h3 className="text-xl font-serif font-bold text-primary mb-3">{cardTitle}</h3>
      <p className="text-slate-600/90 text-sm mb-6 leading-relaxed font-light">{cardDescription}</p>
      <a href={cardHref} className="text-secondary text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors flex items-center gap-1">
        {linkText}
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </a>
    </div>
  );
};

export default Card;
