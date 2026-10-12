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
    white: "bg-white",
    soft: "bg-[#F6FBF7]",
    tint: "bg-[#EEF8F1]",
  };

  const borderStyle = bordered ? "border border-[#E2EDE5]" : "";
  const hoverStyle = hoverEffect 
    ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-8px_rgba(22,163,74,0.15)] hover:border-[#BBF7D0]" 
    : "shadow-[0_4px_20px_-2px_rgba(11,31,20,0.04)]";

  return (
    <div
      onClick={onClick}
      className={`rounded-2xl ${surfaceStyles[surface]} ${borderStyle} ${hoverStyle} ${className}`}
    >
      {children}
    </div>
  );
};
