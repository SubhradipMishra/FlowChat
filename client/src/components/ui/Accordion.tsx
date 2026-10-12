import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface AccordionItemData {
  question: string;
  answer: string;
  category?: string;
}

export interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className = '',
}) => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggle = (index: number) => {
    if (allowMultiple) {
      setOpenIndices(prev =>
        prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndices(prev => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={`space-y-3.5 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        return (
          <div
            key={index}
            className={`border rounded-2xl transition-colors duration-200 overflow-hidden ${
              isOpen
                ? 'bg-[#F6FBF7] border-[#BBF7D0] shadow-[0_4px_20px_-4px_rgba(22,163,74,0.1)]'
                : 'bg-white border-[#E2EDE5] hover:border-[#BBF7D0]'
            }`}
          >
            <button
              type="button"
              id={`accordion-btn-${index}`}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${index}`}
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-inset"
            >
              <div className="flex items-center gap-3">
                {item.category && (
                  <span className="text-[11px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#DCFCE7] text-[#166534]">
                    {item.category}
                  </span>
                )}
                <span className="font-semibold text-base sm:text-lg text-[#0B1F14]">
                  {item.question}
                </span>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="shrink-0 text-[#6B7F73]"
              >
                <ChevronDown className="w-5 h-5 text-[#16A34A]" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`accordion-panel-${index}`}
                  role="region"
                  aria-labelledby={`accordion-btn-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-[#3F5247] leading-relaxed border-t border-[#E2EDE5]/60 pt-4">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
