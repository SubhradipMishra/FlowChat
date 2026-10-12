import React, { useState } from 'react';
import { 
  ChevronDown, 
  Tag, 
  Lock
} from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { SITE_CONTENT } from '../../data/content';

export const HumanHandoffSection: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState('Priya V. (Senior Consultant)');
  const [internalNote, setInternalNote] = useState('');
  const [notesList, setNotesList] = useState<string[]>([
    'Customer has $1,500 budget and needs rollout within 2 weeks. Ready to close.',
  ]);

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (internalNote.trim()) {
      setNotesList([...notesList, internalNote.trim()]);
      setInternalNote('');
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F6FBF7]/70 border-y border-[#E2EDE5]/80 relative">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="mint" size="md">
            {SITE_CONTENT.handoff.badge}
          </Badge>

          <h2 className="display-section font-extrabold text-[#0B1F14]">
            {SITE_CONTENT.handoff.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#3F5247] leading-relaxed">
            {SITE_CONTENT.handoff.subheadline}
          </p>
        </div>

        {/* 2-Column Section: Features + Live Inbox Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Feature Highlights */}
          <div className="lg:col-span-5 space-y-6">
            {SITE_CONTENT.handoff.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#E2EDE5] shadow-2xs hover:border-[#BBF7D0] transition-colors">
                <div className="w-9 h-9 rounded-xl bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center shrink-0 font-bold text-sm">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0B1F14] mb-1">{feat.title}</h3>
                  <p className="text-xs sm:text-sm text-[#3F5247] leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Shared Agent Inbox Mockup */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-[#E2EDE5] shadow-[0_20px_50px_-12px_rgba(11,31,20,0.08)] overflow-hidden">
              
              {/* Inbox Header Bar */}
              <div className="bg-[#0B1F14] text-white p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#16A34A] flex items-center justify-center font-bold text-sm">
                    MT
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm sm:text-base">Marcus Vance</span>
                      <span className="text-[10px] font-bold bg-[#DCFCE7] text-[#166534] px-2 py-0.5 rounded-full">
                        +1 (555) 381-9920
                      </span>
                    </div>
                    <div className="text-xs text-[#DCFCE7]/80 flex items-center gap-2">
                      <span>Source: WhatsApp Cloud API</span>
                      <span>•</span>
                      <span>Lead Score: 94%</span>
                    </div>
                  </div>
                </div>

                {/* Status Tags */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold bg-[#1E3A29] text-[#BBF7D0] px-3 py-1 rounded-full border border-[#16A34A]/40 flex items-center gap-1.5">
                    <Tag className="w-3 h-3 text-[#16A34A]" /> VIP Account
                  </span>
                </div>
              </div>

              {/* Assignment Bar */}
              <div className="bg-[#F6FBF7] px-5 py-3 border-b border-[#E2EDE5] flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-[#6B7F73] font-semibold">Assigned Agent:</span>
                  <div className="relative">
                    <select
                      value={selectedAgent}
                      onChange={(e) => setSelectedAgent(e.target.value)}
                      className="bg-white border border-[#BBF7D0] text-[#0B1F14] font-bold text-xs py-1.5 pl-3 pr-8 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#16A34A]"
                    >
                      <option value="Priya V. (Senior Consultant)">Priya V. (Senior Consultant)</option>
                      <option value="Alex Morgan (Solutions Architect)">Alex Morgan (Solutions Architect)</option>
                      <option value="David Chen (Support Lead)">David Chen (Support Lead)</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-[#16A34A] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse"></span>
                  <span className="font-semibold text-[#166534]">AI Paused: Human in Control</span>
                </div>
              </div>

              {/* Mock Chat Body */}
              <div className="p-5 sm:p-6 space-y-4 max-h-[300px] overflow-y-auto bg-dot-subtle">
                <div className="bg-[#F6FBF7] p-3 rounded-xl border border-[#E2EDE5] text-xs space-y-1">
                  <div className="text-[10px] uppercase font-bold text-[#6B7F73]">AI Pre-qualification Summary</div>
                  <p className="text-[#3F5247]">
                    Customer inquired on enterprise licensing for 25 seats. Budget estimate $1,500/mo. Requested phone call.
                  </p>
                </div>

                {/* Customer Message */}
                <div className="bg-white p-3.5 rounded-2xl border border-[#E2EDE5] text-xs max-w-[85%] shadow-2xs">
                  <span className="font-bold text-[#0B1F14] block mb-1">Marcus Vance</span>
                  <p className="text-[#3F5247]">Could Priya call me on this WhatsApp number directly or share a link?</p>
                </div>

                {/* Agent Reply */}
                <div className="bg-[#DCFCE7] p-3.5 rounded-2xl text-xs max-w-[85%] ml-auto border border-[#BBF7D0] shadow-2xs">
                  <span className="font-bold text-[#166534] block mb-1">Priya V. (Live Agent)</span>
                  <p className="text-[#0B1F14]">Hi Marcus! I have your project specifications open in front of me. Calling you right now!</p>
                </div>

                {/* Internal Private Notes Feed */}
                <div className="space-y-1.5 pt-2">
                  <div className="text-[11px] font-bold text-[#B45309] flex items-center gap-1.5">
                    <Lock className="w-3 h-3 text-[#B45309]" />
                    <span>Internal Team Notes (Invisible to Customer):</span>
                  </div>
                  {notesList.map((note, i) => (
                    <div key={i} className="bg-[#FEF3C7]/70 border border-[#FDE68A] text-[#92400E] p-2.5 rounded-lg text-xs font-medium">
                      {note}
                    </div>
                  ))}
                </div>
              </div>

              {/* Internal Note Input Form */}
              <form onSubmit={handleAddNote} className="p-4 bg-[#F6FBF7] border-t border-[#E2EDE5] flex items-center gap-2">
                <input
                  type="text"
                  value={internalNote}
                  onChange={(e) => setInternalNote(e.target.value)}
                  placeholder="Add a private internal note for the team..."
                  className="flex-1 text-xs bg-white border border-[#E2EDE5] rounded-xl px-3.5 py-2 text-[#0B1F14] placeholder-[#6B7F73] focus:outline-none focus:border-[#16A34A]"
                />
                <button
                  type="submit"
                  disabled={!internalNote.trim()}
                  className="bg-[#16A34A] disabled:opacity-40 text-white px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1 hover:bg-[#15803D] transition-colors"
                >
                  <span>Add Note</span>
                </button>
              </form>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
