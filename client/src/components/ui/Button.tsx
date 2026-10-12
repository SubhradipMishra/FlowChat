import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'subtle';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  asAnchor?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  className = '',
  asAnchor = false,
  href,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none select-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary: "bg-[#16A34A] hover:bg-[#15803D] active:bg-[#166534] text-white shadow-sm hover:shadow-[0_10px_25px_-5px_rgba(22,163,74,0.35)] focus-visible:outline-[#16A34A]",
    secondary: "bg-[#DCFCE7] hover:bg-[#BBF7D0] text-[#0B1F14] border border-[#BBF7D0]/60 focus-visible:outline-[#16A34A]",
    outline: "border border-[#E2EDE5] hover:border-[#16A34A] bg-white text-[#0B1F14] hover:bg-[#F6FBF7] shadow-sm",
    ghost: "text-[#3F5247] hover:text-[#0B1F14] hover:bg-[#F6FBF7]",
    subtle: "bg-white/80 backdrop-blur-sm text-[#0B1F14] border border-[#E2EDE5] hover:bg-white shadow-sm",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (asAnchor && href) {
    return (
      <a href={href} className={combinedClasses}>
        {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </button>
  );
};
