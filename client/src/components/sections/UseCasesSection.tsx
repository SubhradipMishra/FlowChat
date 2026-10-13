import React from 'react';
import { 
  ShoppingBag, 
  Stethoscope, 
  Building2, 
  GraduationCap, 
  Utensils, 
  Truck,
  TrendingUp
} from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { SITE_CONTENT } from '../../data/content';

export const UseCasesSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    ShoppingBag: <ShoppingBag className="w-5 h-5 text-[#16A34A]" />,
    Stethoscope: <Stethoscope className="w-5 h-5 text-[#16A34A]" />,
    Building2: <Building2 className="w-5 h-5 text-[#16A34A]" />,
    GraduationCap: <GraduationCap className="w-5 h-5 text-[#16A34A]" />,
    Utensils: <Utensils className="w-5 h-5 text-[#16A34A]" />,
    Truck: <Truck className="w-5 h-5 text-[#16A34A]" />,
  };

  return (
    <section id="use-cases" className="py-20 lg:py-28 bg-white dark:bg-[#080F0A] relative transition-colors duration-500">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="green" size="md">
            {SITE_CONTENT.useCases.badge}
          </Badge>

          <h2 className="display-section font-extrabold text-[#0B1F14] dark:text-[#F0FDF4] transition-colors duration-500">
            {SITE_CONTENT.useCases.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#3F5247] dark:text-[#A1B8AA] leading-relaxed transition-colors duration-500">
            {SITE_CONTENT.useCases.subheadline}
          </p>
        </div>

        {/* 6 Use Case Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE_CONTENT.useCases.items.map((item, idx) => (
            <Card
              key={idx}
              surface="soft"
              hoverEffect={true}
              className="p-7 flex flex-col justify-between border-[#E2EDE5] group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-[#DCFCE7] flex items-center justify-center border border-[#BBF7D0]/60 group-hover:scale-105 transition-transform">
                    {iconMap[item.iconName] || <ShoppingBag className="w-5 h-5 text-[#16A34A]" />}
                  </div>
                  <span className="text-[11px] font-bold text-[#166534] bg-white border border-[#BBF7D0] px-2.5 py-0.5 rounded-full">
                    {item.sector}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B1F14] group-hover:text-[#16A34A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3F5247] leading-relaxed">
                    {item.automationSummary}
                  </p>
                </div>
              </div>

              {/* Impact Metric Strip */}
              <div className="mt-6 pt-4 border-t border-[#E2EDE5] flex items-center justify-between text-xs font-bold">
                <span className="text-[#166534] flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-[#16A34A]" />
                  <span>{item.impactMetric}</span>
                </span>
                <span className="text-[10px] text-[#6B7F73] font-mono">// PLACEHOLDER</span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
