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
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold transition-all duration-300 transform active:scale-95 text-center";
  
  const variants = {
    primary: "bg-[#004aad] text-white hover:bg-[#003d8f] hover:shadow-lg hover:shadow-[#004aad]/20",
    secondary: "bg-[#e6f0ff] text-[#004aad] hover:bg-[#cce0ff] hover:shadow-lg hover:shadow-[#004aad]/20",
    accent: "bg-[#25D366] text-white hover:bg-[#1ebe55]",
    outline: "bg-transparent border-2 border-[#004aad] text-[#004aad] hover:bg-[#004aad] hover:text-white",
    ghost: "bg-transparent text-[#004aad] hover:bg-[#004aad]/10"
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
