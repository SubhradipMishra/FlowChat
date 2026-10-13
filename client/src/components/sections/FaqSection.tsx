import React from 'react';
import { HelpCircle } from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { Accordion } from '../ui/Accordion';
import { SITE_CONTENT } from '../../data/content';

export const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-white dark:bg-[#080F0A] relative transition-colors duration-500">
      <Container size="narrow">
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-14">
          <Badge 
            variant="green" 
            size="md" 
            icon={<HelpCircle className="w-3.5 h-3.5 text-[#16A34A] dark:text-[#4ADE80]" />}
          >
            {SITE_CONTENT.faq.badge}
          </Badge>

          <h2 className="display-section font-extrabold text-[#0B1F14] dark:text-[#F0FDF4] transition-colors duration-500">
            {SITE_CONTENT.faq.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#3F5247] dark:text-[#A1B8AA] leading-relaxed transition-colors duration-500">
            {SITE_CONTENT.faq.subheadline}
          </p>
        </div>

        {/* Accessible Accordion Component */}
        <Accordion items={SITE_CONTENT.faq.items} />

        {/* Still have questions hint */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#F6FBF7] dark:bg-[#0E1A12] border border-[#E2EDE5] dark:border-[#1C3827] transition-colors">
          <p className="text-sm font-semibold text-[#0B1F14] dark:text-[#F0FDF4] mb-1 transition-colors">
            Have a question about your specific business setup?
          </p>
          <p className="text-xs text-[#6B7F73] dark:text-[#9FB5A6] transition-colors">
            Our WhatsApp onboarding engineers are available on chat to verify number eligibility and API compatibility.
          </p>
        </div>
      </Container>
    </section>
  );
};
