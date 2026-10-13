import React from 'react';
import { Container } from '../ui/Container';
import { SITE_CONTENT } from '../../data/content';
import { Building2, Layers, ShoppingBag, Stethoscope, GraduationCap, Truck } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    "E-Commerce": <ShoppingBag className="w-4 h-4 text-[#6B7F73]" />,
    "Property": <Building2 className="w-4 h-4 text-[#6B7F73]" />,
    "Healthcare": <Stethoscope className="w-4 h-4 text-[#6B7F73]" />,
    "Education": <GraduationCap className="w-4 h-4 text-[#6B7F73]" />,
    "Logistics": <Truck className="w-4 h-4 text-[#6B7F73]" />,
    "Dining": <Layers className="w-4 h-4 text-[#6B7F73]" />,
  };

  return (
    <section className="py-12 border-y border-[#E2EDE5]/70 dark:border-[#1C3827]/70 bg-[#F6FBF7]/60 dark:bg-[#0D1812]/60 transition-colors duration-500">
      <Container>
        <div className="text-center space-y-2 mb-8">
          <p className="text-sm sm:text-base font-semibold text-[#6B7F73] dark:text-[#9FB5A6] transition-colors duration-500">
            {SITE_CONTENT.socialProof.label}
          </p>
          <div className="text-xs text-[#6B7F73]/70 dark:text-[#6E8B79] font-mono transition-colors duration-500">
            // Representative multi-industry customer cohorts
          </div>
        </div>

        {/* Logo Slots Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 items-center">
          {SITE_CONTENT.socialProof.logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-white dark:bg-[#0E1A12] border border-[#E2EDE5] dark:border-[#1C3827] hover:border-[#BBF7D0] dark:hover:border-[#22C55E]/40 transition-all duration-300 shadow-2xs group"
            >
              <div className="flex items-center gap-2 mb-1">
                {iconMap[logo.industry] || <Layers className="w-4 h-4 text-[#6B7F73] dark:text-[#9FB5A6]" />}
                <span className="font-bold text-xs sm:text-sm text-[#3F5247] dark:text-[#E2E8F0] group-hover:text-[#0B1F14] dark:group-hover:text-[#4ADE80] transition-colors">
                  {logo.name}
                </span>
              </div>
              <span className="text-[10px] text-[#6B7F73] dark:text-[#9FB5A6] font-medium bg-[#F6FBF7] dark:bg-[#122218] px-2 py-0.5 rounded-full border border-[#E2EDE5]/60 dark:border-[#1C3827]/60 transition-colors">
                {logo.tag}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
