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
    <nav className="flex py-4 overflow-x-auto scrollbar-hide" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-slate-500 whitespace-nowrap">
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            {index > 0 && (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            )}
            <a 
              href={item.href} 
              className={`hover:text-primary transition-colors ${index === items.length - 1 ? 'font-bold text-primary pointer-events-none' : ''}`}
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
