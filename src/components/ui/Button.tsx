import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  fullWidth?: boolean;
  href?: string;
}

const Button: React.FC<Props> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  href,
  ...props 
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-[26px] px-6 py-3 font-['DM_Sans'] text-[16px] font-normal tracking-[0.5px] transition-all duration-200 active:scale-[0.98] text-center";
  
  const variants = {
    primary:
      "bg-[var(--ds-color-brand-700)] text-white shadow-[0_14px_28px_rgba(72,98,132,0.16)] hover:bg-[var(--ds-color-primary-hover)]",
    secondary:
      "bg-[rgba(173,189,210,0.32)] text-[var(--ds-color-brand-700)] hover:bg-[rgba(173,189,210,0.5)]",
    accent:
      "bg-[var(--ds-color-brand-300)] text-[var(--ds-color-brand-700)] hover:bg-[var(--ds-color-brand-500)] hover:text-white",
    outline:
      "border border-[var(--ds-color-brand-700)] bg-transparent text-[var(--ds-color-brand-700)] hover:bg-[var(--ds-color-brand-700)] hover:text-white",
    ghost:
      "bg-transparent text-[var(--ds-color-brand-700)] hover:bg-[rgba(72,98,132,0.08)]"
  };

  const widthStyle = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthStyle} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClasses}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
