import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = 'lg',
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const maxWidthStyles = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    '2xl': 'max-w-5xl',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0B1F14]/60 backdrop-blur-sm transition-opacity"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.2 }}
            className={`relative w-full ${maxWidthStyles[maxWidth]} bg-white dark:bg-[#0E1A12] rounded-3xl shadow-2xl border border-[#E2EDE5] dark:border-[#1C3827] overflow-hidden z-10 my-8 transition-colors duration-300`}
            role="dialog"
            aria-modal="true"
          >
            {title && (
              <div className="flex items-center justify-between px-6 py-4.5 border-b border-[#E2EDE5] dark:border-[#1C3827]">
                <h3 className="text-lg font-bold text-[#0B1F14] dark:text-[#F0FDF4]">{title}</h3>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close dialog"
                  className="p-1.5 text-[#6B7F73] dark:text-[#9FB5A6] hover:text-[#0B1F14] dark:hover:text-white hover:bg-[#F6FBF7] dark:hover:bg-[#122218] rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}
            {!title && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="absolute top-4 right-4 p-2 text-[#6B7F73] dark:text-[#9FB5A6] hover:text-[#0B1F14] dark:hover:text-white hover:bg-[#F6FBF7] dark:hover:bg-[#122218] rounded-full transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>
            )}
            <div className="p-6 sm:p-8 text-[#3F5247] dark:text-[#A1B8AA]">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
