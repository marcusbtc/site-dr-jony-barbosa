import React from 'react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface Props {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<Props> = ({ items }) => {
  return (
    <nav className="scrollbar-hide flex overflow-x-auto py-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 whitespace-nowrap rounded-full border border-[rgba(72,98,132,0.08)] bg-white/70 px-4 py-2 font-['Questrial'] text-sm text-[var(--ds-color-text-muted)] shadow-[0_8px_24px_rgba(72,98,132,0.05)]">
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            {index > 0 && (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--ds-color-brand-300)]">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            )}
            <a 
              href={item.href} 
              className={`transition-colors hover:text-[var(--ds-color-brand-700)] ${index === items.length - 1 ? 'pointer-events-none font-medium text-[var(--ds-color-brand-700)]' : ''}`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
