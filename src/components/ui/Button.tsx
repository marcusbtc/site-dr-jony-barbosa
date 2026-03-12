import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

const Button: React.FC<Props> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold transition-all duration-300 transform active:scale-95 text-center";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20",
    secondary: "bg-secondary text-white hover:bg-secondary-hover hover:shadow-lg hover:shadow-secondary/20",
    accent: "bg-accent text-primary hover:bg-accent-hover",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "bg-transparent text-primary hover:bg-primary/10"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
