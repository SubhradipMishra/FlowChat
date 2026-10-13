import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  bordered?: boolean;
  surface?: 'white' | 'soft' | 'tint';
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = false,
  bordered = true,
  surface = 'white',
  onClick,
}) => {
  const surfaceStyles = {
    white: "bg-white dark:bg-[#0E1A12]",
    soft: "bg-[#F6FBF7] dark:bg-[#122218]",
    tint: "bg-[#EEF8F1] dark:bg-[#0B1710]",
  };

  const borderStyle = bordered ? "border border-[#E2EDE5] dark:border-[#1C3827]" : "";
  const hoverStyle = hoverEffect 
    ? "transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_32px_-8px_rgba(22,163,74,0.15)] dark:hover:shadow-[0_16px_32px_-8px_rgba(34,197,94,0.22)] hover:border-[#BBF7D0] dark:hover:border-[#22C55E]/50" 
    : "shadow-[0_4px_20px_-2px_rgba(11,31,20,0.04)] dark:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.4)] transition-all duration-500";

  return (
    <div
      onClick={onClick}
      className={`rounded-2xl transition-colors duration-500 ${surfaceStyles[surface]} ${borderStyle} ${hoverStyle} ${className}`}
    >
      {children}
    </div>
  );
};
