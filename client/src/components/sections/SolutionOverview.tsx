import React from 'react';
import { Zap, Target, Users, ArrowUpRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { SITE_CONTENT } from '../../data/content';

export const SolutionOverview: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Zap: <Zap className="w-6 h-6 text-[#16A34A]" />,
    Target: <Target className="w-6 h-6 text-[#16A34A]" />,
    Users: <Users className="w-6 h-6 text-[#16A34A]" />,
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F6FBF7]/80 dark:bg-[#0D1812]/80 border-t border-[#E2EDE5]/60 dark:border-[#1C3827]/60 relative transition-colors duration-500">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="mint" size="md">
            {SITE_CONTENT.solution.badge}
          </Badge>

          <h2 className="display-section font-extrabold text-[#0B1F14] dark:text-[#F0FDF4] transition-colors duration-500">
            {SITE_CONTENT.solution.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#3F5247] dark:text-[#A1B8AA] leading-relaxed transition-colors duration-500">
            {SITE_CONTENT.solution.subheadline}
          </p>
        </div>

        {/* 3-Column Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SITE_CONTENT.solution.benefits.map((benefit, idx) => (
            <Card
              key={idx}
              surface="white"
              hoverEffect={true}
              className="p-8 flex flex-col justify-between relative group overflow-hidden border-[#E2EDE5] dark:border-[#1C3827] transition-all duration-300"
            >
              {/* Subtle top green gradient accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#16A34A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-6">
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-2xl bg-[#DCFCE7] dark:bg-[#143522] flex items-center justify-center border border-[#BBF7D0]/60 dark:border-[#22C55E]/30 group-hover:scale-105 transition-all">
                  {iconMap[benefit.iconName] || <Zap className="w-6 h-6 text-[#16A34A] dark:text-[#4ADE80]" />}
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#0B1F14] dark:text-[#F0FDF4] group-hover:text-[#16A34A] dark:group-hover:text-[#4ADE80] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#3F5247] dark:text-[#A1B8AA] leading-relaxed transition-colors">
                    {benefit.description}
                  </p>
                </div>
              </div>

              {/* Metric Highlight Box */}
              <div className="mt-8 pt-6 border-t border-[#E2EDE5]/80 dark:border-[#1C3827]/80 flex items-baseline justify-between transition-colors">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1F14] dark:text-[#F0FDF4] tracking-tight transition-colors">
                    {benefit.metric}
                  </div>
                  <div className="text-xs text-[#6B7F73] dark:text-[#9FB5A6] font-medium transition-colors">
                    {benefit.metricLabel}
                  </div>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#F6FBF7] dark:bg-[#122218] group-hover:bg-[#DCFCE7] dark:group-hover:bg-[#143522] flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-[#16A34A] dark:text-[#4ADE80]" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
