import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export interface ThemeToggleProps {
  variant?: 'icon' | 'pill' | 'bento-badge';
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  variant = 'icon',
  className = '',
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  if (variant === 'pill') {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        className={`relative inline-flex items-center gap-1.5 p-1 rounded-full bg-[#EEF8F1] dark:bg-[#122218] border border-[#BBF7D0] dark:border-[#1F3D2B] transition-colors duration-500 shadow-xs cursor-pointer ${className}`}
      >
        {/* Sliding background pill indicator */}
        <motion.div
          layout
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full ${
            isDark
              ? 'right-1 bg-gradient-to-r from-[#16A34A] to-[#22C55E] shadow-[0_2px_10px_rgba(34,197,94,0.35)]'
              : 'left-1 bg-white shadow-xs'
          }`}
        />

        {/* Light Mode Label & Icon */}
        <span
          className={`relative z-10 flex items-center gap-1.5 px-3 py-1 text-xs font-bold transition-colors duration-300 ${
            !isDark ? 'text-[#0B1F14]' : 'text-[#6E8B79] hover:text-[#9FB5A6]'
          }`}
        >
          <Sun className={`w-3.5 h-3.5 ${!isDark ? 'text-[#EAB308]' : ''}`} />
          <span>Light</span>
        </span>

        {/* Dark Mode Label & Icon */}
        <span
          className={`relative z-10 flex items-center gap-1.5 px-3 py-1 text-xs font-bold transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-[#6B7F73] hover:text-[#0B1F14]'
          }`}
        >
          <Moon className={`w-3.5 h-3.5 ${isDark ? 'text-white' : ''}`} />
          <span>Dark</span>
        </span>
      </button>
    );
  }

  if (variant === 'bento-badge') {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        className={`group relative flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-500 cursor-pointer ${
          isDark
            ? 'bg-[#143522] hover:bg-[#1B432C] text-[#4ADE80] border border-[#22C55E]/40 shadow-[0_0_15px_rgba(34,197,94,0.15)]'
            : 'bg-[#DCFCE7] hover:bg-[#BBF7D0] text-[#166534] border border-[#BBF7D0] shadow-xs'
        } ${className}`}
      >
        <span className="flex items-center gap-1.5">
          <motion.span
            animate={{ rotate: isDark ? 180 : 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="inline-flex"
          >
            {isDark ? (
              <Moon className="w-3.5 h-3.5 text-[#4ADE80]" />
            ) : (
              <Sun className="w-3.5 h-3.5 text-[#16A34A]" />
            )}
          </motion.span>
          <span>{isDark ? 'Dark Theme' : 'Light Theme'}</span>
        </span>
        <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-white/40 dark:bg-black/30 opacity-80 group-hover:opacity-100 font-semibold">
          Switch
        </span>
      </button>
    );
  }

  // Default: Compact Icon button for Navbar
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative p-2 rounded-full transition-all duration-300 cursor-pointer ${
        isDark
          ? 'bg-[#122218] text-[#4ADE80] hover:text-white border border-[#1F3D2B] hover:border-[#22C55E]/50 shadow-[0_2px_8px_rgba(34,197,94,0.15)]'
          : 'bg-[#F6FBF7] text-[#3F5247] hover:text-[#0B1F14] border border-[#E2EDE5] hover:border-[#BBF7D0] shadow-xs'
      } ${className}`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-[#4ADE80]" />
        ) : (
          <Sun className="w-4 h-4 text-[#EAB308]" />
        )}
      </motion.div>
    </button>
  );
};
