import React, { useState } from 'react';
import { 
  Bot, 
  User, 
  UserCheck, 
  AlertCircle, 
  Sparkles, 
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { SITE_CONTENT } from '../../data/content';

export const InteractiveWorkflowDemo: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>(SITE_CONTENT.interactiveDemo.scenarios[0].id);

  const activeScenario = SITE_CONTENT.interactiveDemo.scenarios.find(
    (s) => s.id === activeTabId
  ) || SITE_CONTENT.interactiveDemo.scenarios[0];

  return (
    <section id="demo" className="py-20 lg:py-28 bg-white relative">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <Badge variant="green" size="md">
            {SITE_CONTENT.interactiveDemo.badge}
          </Badge>

          <h2 className="display-section font-extrabold text-[#0B1F14]">
            {SITE_CONTENT.interactiveDemo.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#3F5247] leading-relaxed">
            {SITE_CONTENT.interactiveDemo.subheadline}
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {SITE_CONTENT.interactiveDemo.scenarios.map((scenario) => {
            const isActive = scenario.id === activeTabId;
            return (
              <button
                key={scenario.id}
                type="button"
                onClick={() => setActiveTabId(scenario.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#16A34A] text-white shadow-md shadow-[#16A34A]/25'
                    : 'bg-[#F6FBF7] text-[#3F5247] border border-[#E2EDE5] hover:border-[#BBF7D0] hover:bg-white'
                }`}
              >
                <span>{scenario.title}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  isActive ? 'bg-white/20 text-white' : 'bg-[#DCFCE7] text-[#166534]'
                }`}>
                  {scenario.tag}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Scenario Visualizer */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScenario.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left Box: Live Customer & AI WhatsApp Simulator (Span 6) */}
            <div className="lg:col-span-6 bg-[#F6FBF7] rounded-3xl p-6 sm:p-8 border border-[#E2EDE5] space-y-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-[#E2EDE5] pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-xs">
                    WA
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0B1F14]">Live Conversation Simulator</div>
                    <div className="text-[11px] text-[#16A34A] font-semibold">Active Session</div>
                  </div>
                </div>
                <Badge variant="mint" size="sm">Cloud API</Badge>
              </div>

              {/* Chat Thread */}
              <div className="space-y-4">
                {/* Incoming Customer Message */}
                <div className="flex flex-col items-end">
                  <div className="bg-[#D9FDD3] text-[#111B21] rounded-2xl rounded-tr-sm p-4 max-w-[90%] text-sm shadow-xs border border-[#BBF7D0]/50">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#166534] mb-1">
                      <User className="w-3.5 h-3.5" />
                      <span>Customer</span>
                    </div>
                    <p className="leading-relaxed font-normal">{activeScenario.customerPrompt}</p>
                    <div className="text-right text-xs text-[#667781] mt-1">10:42 AM • Sent</div>
                  </div>
                </div>

                {/* AI Automated Reply */}
                <div className="flex flex-col items-start">
                  <div className="bg-white text-[#111B21] rounded-2xl rounded-tl-sm p-4 max-w-[90%] text-sm shadow-xs border border-[#E2EDE5]">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#16A34A] mb-1">
                      <Bot className="w-3.5 h-3.5" />
                      <span>FlowChat AI Assistant (Automated)</span>
                    </div>
                    <p className="leading-relaxed font-normal">{activeScenario.aiResponse}</p>
                    <div className="text-right text-xs text-[#667781] mt-1">10:42 AM • Sub-second</div>
                  </div>
                </div>
              </div>

              {/* Internal AI Action summary badge */}
              <div className="p-3.5 rounded-xl bg-white border border-[#BBF7D0] flex items-start gap-2.5 text-xs text-[#3F5247]">
                <Sparkles className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#0B1F14]">Automated Backend Action: </span>
                  <span>{activeScenario.aiAction}</span>
                </div>
              </div>
            </div>

            {/* Right Box: Escalation Logic & Animated Routing Conduit (Span 6) */}
            <div className="lg:col-span-6 space-y-4">
              {/* Route Node 1: Escalation Condition Trigger */}
              <Card surface="tint" bordered={true} className="p-6 border-[#BBF7D0] relative overflow-hidden group">
                <div className="flex items-start gap-3 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] text-[#B45309] flex items-center justify-center shrink-0 border border-[#FDE68A]">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#92400E] bg-[#FEF3C7] px-2.5 py-0.5 rounded-full border border-[#FDE68A]">
                        Route Trigger Condition
                      </span>
                      <span className="text-[11px] font-mono font-semibold text-[#B45309]">
                        EVALUATION NODE
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0B1F14]">
                      When does AI yield to a human agent?
                    </h3>
                    <p className="text-sm text-[#3F5247] leading-relaxed">
                      {activeScenario.escalationTrigger}
                    </p>
                  </div>
                </div>
              </Card>

              {/* Animated Vertical Route Connector / Junction Wire */}
              <div className="flex items-center justify-center py-1 relative">
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-[#B45309] via-[#16A34A] to-[#16A34A] relative">
                    <div className="w-2 h-2 rounded-full bg-[#16A34A] -left-[3px] absolute animate-ping top-1/2 -translate-y-1/2" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white border border-[#BBF7D0] shadow-2xs text-[11px] font-mono font-bold text-[#166534] flex items-center gap-1.5 my-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse" />
                    <span>SIGNAL ROUTING ➔ DISPATCH TO HUMAN AGENT</span>
                  </div>
                  <div className="w-0.5 h-6 bg-[#16A34A]" />
                </div>
              </div>

              {/* Route Node 2: Human Resolution & Team Handoff */}
              <Card surface="white" bordered={true} className="p-6 border-[#BBF7D0] shadow-sm relative overflow-hidden group">
                <div className="flex items-start gap-3 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-[#DCFCE7] text-[#166534] flex items-center justify-center shrink-0 border border-[#BBF7D0]">
                    <UserCheck className="w-5 h-5 text-[#16A34A]" />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#166534] bg-[#DCFCE7] px-2.5 py-0.5 rounded-full border border-[#BBF7D0]">
                        Live Agent Routing & Handoff
                      </span>
                      <span className="text-[11px] font-mono font-semibold text-[#16A34A]">
                        DESTINATION NODE
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0B1F14]">
                      Human Resolution Pipeline
                    </h3>
                    <p className="text-sm text-[#3F5247] leading-relaxed">
                      {activeScenario.humanResolution}
                    </p>
                  </div>
                </div>
              </Card>

              {/* Reassurance note */}
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#3F5247] bg-[#F6FBF7] p-3.5 rounded-2xl border border-[#E2EDE5]">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>
                  Context, customer history, and intent metadata are preserved 100% when handing off.
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
};
