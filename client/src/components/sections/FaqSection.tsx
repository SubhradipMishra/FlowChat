import React from 'react';
import { HelpCircle } from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { Accordion } from '../ui/Accordion';
import { SITE_CONTENT } from '../../data/content';

export const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-white relative">
      <Container size="narrow">
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-14">
          <Badge 
            variant="green" 
            size="md" 
            icon={<HelpCircle className="w-3.5 h-3.5 text-[#16A34A]" />}
          >
            {SITE_CONTENT.faq.badge}
          </Badge>

          <h2 className="display-section font-extrabold text-[#0B1F14]">
            {SITE_CONTENT.faq.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#3F5247] leading-relaxed">
            {SITE_CONTENT.faq.subheadline}
          </p>
        </div>

        {/* Accessible Accordion Component */}
        <Accordion items={SITE_CONTENT.faq.items} />

        {/* Still have questions hint */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#F6FBF7] border border-[#E2EDE5]">
          <p className="text-sm font-semibold text-[#0B1F14] mb-1">
            Have a question about your specific business setup?
          </p>
          <p className="text-xs text-[#6B7F73]">
            Our WhatsApp onboarding engineers are available on chat to verify number eligibility and API compatibility.
          </p>
        </div>
      </Container>
    </section>
  );
};
