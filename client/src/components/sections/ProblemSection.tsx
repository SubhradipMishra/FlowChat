import React, { useState } from 'react';
import { MessageSquareWarning, Bot, Clock } from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { SITE_CONTENT, type QuestionChip } from '../../data/content';

export const ProblemSection: React.FC = () => {
  const [selectedChip, setSelectedChip] = useState<QuestionChip>(SITE_CONTENT.problem.chips[0]);

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <Badge 
            variant="amber" 
            size="md" 
            icon={<MessageSquareWarning className="w-3.5 h-3.5 text-[#B45309]" />}
          >
            {SITE_CONTENT.problem.badge}
          </Badge>

          <h2 className="display-section font-extrabold text-[#0B1F14]">
            {SITE_CONTENT.problem.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#3F5247] leading-relaxed">
            {SITE_CONTENT.problem.subheadline}
          </p>
        </div>

        {/* 6 Chat-Bubble Chips */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {SITE_CONTENT.problem.chips.map((chip) => {
            const isSelected = selectedChip.id === chip.id;
            return (
              <button
                key={chip.id}
                type="button"
                onClick={() => setSelectedChip(chip)}
                className={`text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer relative ${
                  isSelected
                    ? 'bg-[#F6FBF7] border-[#16A34A] shadow-[0_8px_24px_-4px_rgba(22,163,74,0.18)] scale-[1.02]'
                    : 'bg-white border-[#E2EDE5] hover:border-[#BBF7D0] hover:bg-[#F6FBF7]/50 shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#DCFCE7] text-[#166534]">
                    {chip.frequency}
                  </span>
                  {isSelected && (
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16A34A] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#16A34A]"></span>
                    </span>
                  )}
                </div>

                <div className="text-base sm:text-lg font-bold text-[#0B1F14] mb-1">
                  {chip.question}
                </div>

                <div className="text-xs text-[#6B7F73]">
                  Click to see automated FlowChat AI resolution
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Automated Solution Preview for the Selected Chip */}
        <Card surface="tint" bordered={true} className="p-6 sm:p-8 max-w-4xl mx-auto shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#166534]">
                <Bot className="w-4 h-4 text-[#16A34A]" />
                <span>How FlowChat AI Resolves This Instantly:</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0B1F14]">
                {selectedChip.question}
              </h3>
              <p className="text-sm sm:text-base text-[#3F5247] leading-relaxed">
                {selectedChip.typicalResponse}
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end gap-2 shrink-0 bg-white/90 p-4 rounded-xl border border-[#BBF7D0]">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#166534]">
                <Clock className="w-3.5 h-3.5 text-[#16A34A]" />
                <span>Sub-3 second delivery</span>
              </div>
              <div className="text-[11px] text-[#6B7F73]">
                Zero manual typing required
              </div>
            </div>
          </div>
        </Card>

        {/* Impact Warning Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-[#FEF3C7]/60 border border-[#FDE68A] max-w-3xl mx-auto text-center">
          <p className="text-xs sm:text-sm font-semibold text-[#92400E] flex items-center justify-center gap-2">
            <span>⚠️</span>
            <span>{SITE_CONTENT.problem.consequence}</span>
          </p>
        </div>
      </Container>
    </section>
  );
};
