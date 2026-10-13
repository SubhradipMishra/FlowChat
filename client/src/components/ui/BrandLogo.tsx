import React from 'react';

export interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'dark' | 'light';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  theme = 'light',
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <a href="#" className={`inline-flex items-center gap-2.5 group select-none ${className}`}>
      {/* Brand Mark: Green Chat Bubble + Flow-Node Network */}
      <div className={`relative ${iconSizes[size]} rounded-xl bg-gradient-to-br from-[#16A34A] to-[#15803D] p-1.5 shadow-[0_4px_12px_rgba(22,163,74,0.3)] flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shrink-0`}>
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white">
          {/* Main Bubble outline */}
          <path
            d="M20 11.5C20 6.80558 16.4183 3 12 3C7.58172 3 4 6.80558 4 11.5C4 13.5651 4.70014 15.459 5.86708 16.9388L4.5 21L8.8576 19.8661C9.80808 20.2748 10.8719 20.5 12 20.5C16.4183 20.5 20 16.6944 20 11.5Z"
            fill="currentColor"
            fillOpacity="0.15"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Flow Node Connected Dots */}
          <circle cx="9" cy="11.5" r="1.6" fill="white" />
          <circle cx="15" cy="11.5" r="1.6" fill="white" />
          <path d="M9 11.5H15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1.5 1.5" />
          <circle cx="12" cy="8.5" r="1.2" fill="#BBF7D0" />
          <path d="M12 8.5V11.5" stroke="#BBF7D0" strokeWidth="1.2" />
        </svg>
      </div>

      <div className="flex items-baseline tracking-tight font-extrabold">
        <span className={`${textSizes[size]} transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-[#0B1F14] dark:text-white'}`}>
          FlowChat
        </span>
        <span className={`${textSizes[size]} text-[#16A34A] dark:text-[#4ADE80] transition-colors duration-500 ml-1`}>AI</span>
      </div>
    </a>
  );
};
