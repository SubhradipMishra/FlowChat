import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Lock, 
  KeyRound, 
  FileCheck, 
  UserCheck
} from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { SITE_CONTENT } from '../../data/content';

export const TrustCompliance: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#16A34A]" />,
    Clock: <Clock className="w-5 h-5 text-[#16A34A]" />,
    Lock: <Lock className="w-5 h-5 text-[#16A34A]" />,
    KeyRound: <KeyRound className="w-5 h-5 text-[#16A34A]" />,
    FileCheck: <FileCheck className="w-5 h-5 text-[#16A34A]" />,
    UserCheck: <UserCheck className="w-5 h-5 text-[#16A34A]" />,
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="green" size="md">
            {SITE_CONTENT.trust.badge}
          </Badge>

          <h2 className="display-section font-extrabold text-[#0B1F14]">
            {SITE_CONTENT.trust.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#3F5247] leading-relaxed">
            {SITE_CONTENT.trust.subheadline}
          </p>
        </div>

        {/* 6 Trust Principle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SITE_CONTENT.trust.principles.map((item, idx) => (
            <Card
              key={idx}
              surface="soft"
              hoverEffect={true}
              className="p-7 flex flex-col justify-between border-[#E2EDE5] group"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-[#DCFCE7] flex items-center justify-center border border-[#BBF7D0]/60 group-hover:scale-105 transition-transform">
                  {iconMap[item.iconName] || <ShieldCheck className="w-5 h-5 text-[#16A34A]" />}
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#0B1F14] group-hover:text-[#16A34A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3F5247] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2EDE5] text-[11px] font-semibold text-[#166534]">
                ✓ {item.complianceNote}
              </div>
            </Card>
          ))}
        </div>

        {/* Important Compliance Boundary Disclaimer Banner */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#F6FBF7] border border-[#BBF7D0] max-w-4xl mx-auto flex items-start gap-3.5">
          <ShieldCheck className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-xs sm:text-sm font-bold text-[#0B1F14]">
              Strict Anti-Spam & Platform Integrity Commitment
            </h4>
            <p className="text-xs text-[#3F5247] leading-relaxed">
              {SITE_CONTENT.trust.disclaimer}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
