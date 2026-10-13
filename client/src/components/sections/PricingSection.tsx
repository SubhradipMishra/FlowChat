import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { SITE_CONTENT } from '../../data/content';

export interface PricingSectionProps {
  onSelectTier: (tierName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectTier }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#F6FBF7]/70 dark:bg-[#0D1812]/80 border-y border-[#E2EDE5]/80 dark:border-[#1C3827]/80 relative transition-colors duration-500">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <Badge variant="green" size="md">
            {SITE_CONTENT.pricing.badge}
          </Badge>

          <h2 className="display-section font-extrabold text-[#0B1F14] dark:text-[#F0FDF4] transition-colors duration-500">
            {SITE_CONTENT.pricing.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#3F5247] dark:text-[#A1B8AA] leading-relaxed transition-colors duration-500">
            {SITE_CONTENT.pricing.subheadline}
          </p>

          {/* Monthly / Annual Billing Switcher */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className={`text-xs sm:text-sm font-semibold transition-colors ${!isAnnual ? 'text-[#0B1F14] dark:text-[#F0FDF4]' : 'text-[#6B7F73] dark:text-[#9FB5A6]'}`}>
              Monthly billing
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={isAnnual}
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-7 w-13 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] bg-[#16A34A]"
            >
              <span
                className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-xs sm:text-sm font-semibold transition-colors ${isAnnual ? 'text-[#0B1F14] dark:text-[#F0FDF4]' : 'text-[#6B7F73] dark:text-[#9FB5A6]'}`}>
                Annual billing
              </span>
              <span className="text-[11px] font-extrabold bg-[#DCFCE7] dark:bg-[#143522] text-[#166534] dark:text-[#4ADE80] px-2.5 py-0.5 rounded-full border border-[#BBF7D0] dark:border-[#22C55E]/40 transition-colors">
                Save ~20%
              </span>
            </div>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {SITE_CONTENT.pricing.tiers.map((tier) => {
            const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;

            return (
              <Card
                key={tier.id}
                surface={tier.isPopular ? 'white' : 'soft'}
                bordered={true}
                hoverEffect={true}
                className={`p-8 flex flex-col justify-between relative ${
                  tier.isPopular
                    ? 'border-2 border-[#16A34A] dark:border-[#22C55E] shadow-[0_20px_45px_-10px_rgba(22,163,74,0.18)] dark:shadow-[0_20px_45px_-10px_rgba(34,197,94,0.25)] lg:-translate-y-2'
                    : 'border-[#E2EDE5] dark:border-[#1C3827]'
                }`}
              >
                {/* Popular Pill */}
                {tier.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#16A34A] text-white text-xs font-extrabold uppercase tracking-wider py-1 px-4 rounded-full shadow-sm flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Most Popular
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Tier Title & Description */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#0B1F14] dark:text-[#F0FDF4] transition-colors">{tier.name}</h3>
                    <p className="text-xs sm:text-sm text-[#3F5247] dark:text-[#A1B8AA] mt-1.5 leading-relaxed min-h-[40px] transition-colors">
                      {tier.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="pt-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold text-[#0B1F14] dark:text-[#F0FDF4] tracking-tight transition-colors">
                        ${price}
                      </span>
                      <span className="text-sm font-semibold text-[#6B7F73] dark:text-[#9FB5A6] transition-colors">
                        / month
                      </span>
                    </div>
                    <div className="text-[11px] text-[#6B7F73] dark:text-[#8CA394] mt-1 font-mono transition-colors">
                      {isAnnual ? 'Billed annually' : 'Billed monthly'} • // 14-Day Free Trial
                    </div>
                  </div>

                  {/* Included Usage Limits */}
                  <div className="bg-[#F6FBF7] dark:bg-[#122218] p-3.5 rounded-xl border border-[#E2EDE5] dark:border-[#1C3827] space-y-1.5 text-xs transition-colors">
                    <div className="flex justify-between font-medium">
                      <span className="text-[#6B7F73] dark:text-[#9FB5A6]">Active Chats:</span>
                      <span className="font-bold text-[#0B1F14] dark:text-[#F0FDF4]">{tier.limits.conversations}</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span className="text-[#6B7F73] dark:text-[#9FB5A6]">Team Seats:</span>
                      <span className="font-bold text-[#0B1F14] dark:text-[#F0FDF4]">{tier.limits.agents}</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span className="text-[#6B7F73] dark:text-[#9FB5A6]">Flows:</span>
                      <span className="font-bold text-[#0B1F14] dark:text-[#F0FDF4]">{tier.limits.workflows}</span>
                    </div>
                  </div>

                  {/* Feature Bullets */}
                  <div className="space-y-2.5 pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#6B7F73] dark:text-[#9FB5A6]">
                      What's Included:
                    </div>
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#3F5247] dark:text-[#A1B8AA] transition-colors">
                        <Check className="w-4 h-4 text-[#16A34A] dark:text-[#4ADE80] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Button */}
                <div className="pt-8">
                  <Button
                    variant={tier.isPopular ? 'primary' : 'outline'}
                    size="md"
                    className="w-full justify-center"
                    onClick={() => onSelectTier(tier.name)}
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    {tier.ctaText}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Transparent Meta Fees Note */}
        <div className="p-4 rounded-xl bg-white border border-[#E2EDE5] max-w-3xl mx-auto text-center text-xs text-[#6B7F73] mb-16">
          <p className="font-medium">
            💡 {SITE_CONTENT.pricing.metaFeeNote}
          </p>
        </div>

        {/* Feature Comparison Table (Desktop) */}
        <div className="hidden lg:block bg-white rounded-3xl border border-[#E2EDE5] shadow-xs overflow-hidden">
          <div className="p-6 bg-[#F6FBF7] border-b border-[#E2EDE5]">
            <h3 className="text-lg font-bold text-[#0B1F14]">Feature Comparison Checklist</h3>
            <p className="text-xs text-[#6B7F73]">Detailed breakdown across Starter, Growth, and Scale plans</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#E2EDE5] bg-white text-[#0B1F14]">
                  <th className="py-4 px-6 font-bold">Capabilities</th>
                  <th className="py-4 px-6 font-bold text-center">Starter</th>
                  <th className="py-4 px-6 font-bold text-center text-[#16A34A]">Growth (Popular)</th>
                  <th className="py-4 px-6 font-bold text-center">Scale / Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2EDE5]/80">
                {SITE_CONTENT.pricing.comparisonMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F6FBF7]/50 transition-colors">
                    <td className="py-3.5 px-6 font-medium text-[#3F5247]">{row.feature}</td>
                    
                    <td className="py-3.5 px-6 text-center text-[#0B1F14]">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? <Check className="w-4 h-4 text-[#16A34A] mx-auto" /> : <span className="text-[#6B7F73]">—</span>
                      ) : (
                        <span className="font-semibold">{row.starter}</span>
                      )}
                    </td>

                    <td className="py-3.5 px-6 text-center text-[#0B1F14] bg-[#DCFCE7]/20">
                      {typeof row.growth === 'boolean' ? (
                        row.growth ? <Check className="w-4 h-4 text-[#16A34A] mx-auto" /> : <span className="text-[#6B7F73]">—</span>
                      ) : (
                        <span className="font-bold text-[#166534]">{row.growth}</span>
                      )}
                    </td>

                    <td className="py-3.5 px-6 text-center text-[#0B1F14]">
                      {typeof row.scale === 'boolean' ? (
                        row.scale ? <Check className="w-4 h-4 text-[#16A34A] mx-auto" /> : <span className="text-[#6B7F73]">—</span>
                      ) : (
                        <span className="font-semibold">{row.scale}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </Container>
    </section>
  );
};
