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
    green: "bg-[#DCFCE7] dark:bg-[#143522] text-[#166534] dark:text-[#4ADE80] border border-[#BBF7D0] dark:border-[#22C55E]/40",
    mint: "bg-[#F0FDF4] dark:bg-[#0D2417] text-[#15803D] dark:text-[#86EFAC] border border-[#DCFCE7] dark:border-[#166534]/50",
    neutral: "bg-[#F6FBF7] dark:bg-[#112117] text-[#3F5247] dark:text-[#A7C2B2] border border-[#E2EDE5] dark:border-[#1C3827]",
    outline: "bg-white dark:bg-[#0E1A12] text-[#166534] dark:text-[#4ADE80] border border-[#BBF7D0] dark:border-[#22C55E]/40 shadow-xs",
    amber: "bg-[#FEF3C7] dark:bg-[#38260A] text-[#92400E] dark:text-[#FCD34D] border border-[#FDE68A] dark:border-[#78350F]/50",
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} transition-colors duration-500 ${className}`}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
