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
    <section className="py-12 border-y border-[#E2EDE5]/70 bg-[#F6FBF7]/60">
      <Container>
        <div className="text-center space-y-2 mb-8">
          <p className="text-sm sm:text-base font-semibold text-[#6B7F73]">
            {SITE_CONTENT.socialProof.label}
          </p>
          <div className="text-xs text-[#6B7F73]/70 font-mono">
            // PLACEHOLDER: Representative multi-industry customer cohorts
          </div>
        </div>

        {/* Logo Slots Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 items-center">
          {SITE_CONTENT.socialProof.logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-white border border-[#E2EDE5] hover:border-[#BBF7D0] transition-colors shadow-2xs group"
            >
              <div className="flex items-center gap-2 mb-1">
                {iconMap[logo.industry] || <Layers className="w-4 h-4 text-[#6B7F73]" />}
                <span className="font-bold text-xs sm:text-sm text-[#3F5247] group-hover:text-[#0B1F14] transition-colors">
                  {logo.name}
                </span>
              </div>
              <span className="text-[10px] text-[#6B7F73] font-medium bg-[#F6FBF7] px-2 py-0.5 rounded-full border border-[#E2EDE5]/60">
                {logo.tag}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
