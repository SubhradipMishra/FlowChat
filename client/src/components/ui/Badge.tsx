import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'green' | 'mint' | 'neutral' | 'outline' | 'amber';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'green',
  size = 'md',
  icon,
  className = '',
}) => {
  const baseStyles = "inline-flex items-center gap-1.5 font-medium rounded-full select-none";

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5",
    md: "text-xs px-3 py-1",
  };

  const variantStyles = {
    green: "bg-[#DCFCE7] text-[#166534] border border-[#BBF7D0]",
    mint: "bg-[#F0FDF4] text-[#15803D] border border-[#DCFCE7]",
    neutral: "bg-[#F6FBF7] text-[#3F5247] border border-[#E2EDE5]",
    outline: "bg-white text-[#166534] border border-[#BBF7D0] shadow-xs",
    amber: "bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]",
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
