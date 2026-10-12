import React, { useState, useEffect } from 'react';
import { 
  Play, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  UserCheck, 
  RotateCcw,
  Bot
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { SITE_CONTENT } from '../../data/content';

export interface HeroProps {
  onOpenTrialModal: () => void;
  onOpenDemoModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenTrialModal,
  onOpenDemoModal,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const totalSteps = SITE_CONTENT.hero.chatSimulation.length;

  // Staggered chat animation loop
  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setCurrentStepIndex(totalSteps);
      return;
    }

    let isSubscribed = true;

    const runChatSequence = async () => {
      // Step 0 appears
      setCurrentStepIndex(1);

      // Step 1: AI reply
      await new Promise(r => setTimeout(r, 1400));
      if (!isSubscribed) return;
      setIsTyping(true);

      await new Promise(r => setTimeout(r, 1200));
      if (!isSubscribed) return;
      setIsTyping(false);
      setCurrentStepIndex(2);

      // Step 2: Customer reply
      await new Promise(r => setTimeout(r, 2000));
      if (!isSubscribed) return;
      setCurrentStepIndex(3);

      // Step 3: AI confirmation + Lead chip
      await new Promise(r => setTimeout(r, 1200));
      if (!isSubscribed) return;
      setIsTyping(true);

      await new Promise(r => setTimeout(r, 1300));
      if (!isSubscribed) return;
      setIsTyping(false);
      setCurrentStepIndex(4);

      // Step 4: System handoff to Priya
      await new Promise(r => setTimeout(r, 1600));
      if (!isSubscribed) return;
      setCurrentStepIndex(5);

      // Hold complete state, then loop back
      await new Promise(r => setTimeout(r, 7000));
      if (!isSubscribed) return;
      setCurrentStepIndex(1);
    };

    runChatSequence();

    const interval = setInterval(() => {
      runChatSequence();
    }, 18000);

    return () => {
      isSubscribed = false;
      clearInterval(interval);
    };
  }, [totalSteps]);

  const restartChat = () => {
    setCurrentStepIndex(1);
    setIsTyping(false);
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-white">
      {/* Background radial gradients & subtle dotted grid */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />
      
      {/* Soft Green Organic Blobs */}
      <div 
        aria-hidden="true" 
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#DCFCE7]/70 via-[#EEF8F1]/80 to-[#BBF7D0]/40 rounded-full blur-3xl pointer-events-none -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-48 right-[-10%] w-[450px] h-[450px] bg-gradient-to-br from-[#BBF7D0]/50 to-transparent rounded-full blur-3xl pointer-events-none -z-10" 
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-6 space-y-6 lg:space-y-8 text-center lg:text-left">
            
            {/* Official Compliance Tag */}
            <div className="inline-flex items-center justify-center lg:justify-start">
              <Badge 
                variant="green" 
                size="md" 
                icon={<ShieldCheck className="w-4 h-4 text-[#16A34A]" />}
                className="py-1.5 px-3.5 shadow-xs"
              >
                {SITE_CONTENT.hero.badge}
              </Badge>
            </div>

            {/* Headline */}
            <h1 className="display-hero font-extrabold text-[#0B1F14] tracking-tight">
              Automate WhatsApp conversations.{' '}
              <span className="text-[#16A34A] inline-block bg-gradient-to-r from-[#16A34A] to-[#15803D] bg-clip-text text-transparent">
                Capture more leads.
              </span>
            </h1>

            {/* Value Proposition Subhead */}
            <p className="text-base sm:text-lg lg:text-xl text-[#3F5247] leading-relaxed max-w-xl mx-auto lg:mx-0">
              {SITE_CONTENT.hero.subheadline}
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenTrialModal}
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto text-base px-7 py-4 shadow-md hover:shadow-lg"
              >
                {SITE_CONTENT.hero.primaryCta}
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={onOpenDemoModal}
                icon={<Play className="w-4 h-4 fill-[#16A34A] text-[#16A34A]" />}
                iconPosition="left"
                className="w-full sm:w-auto text-base px-6 py-4"
              >
                {SITE_CONTENT.hero.secondaryCta}
              </Button>
            </div>

            {/* Trust Line & Guarantees */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-[#6B7F73]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>{SITE_CONTENT.hero.trustNote}</span>
              </div>
            </div>

            {/* Micro KPI Strip */}
            <div className="pt-4 border-t border-[#E2EDE5]/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              {SITE_CONTENT.hero.metricsHighlight.map((m, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#0B1F14]">{m.value}</div>
                  <div className="text-xs text-[#6B7F73] font-medium leading-tight">{m.label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Polished Phone / Dashboard Mockup with Live Animated WhatsApp Chat */}
          <div className="lg:col-span-6 relative flex justify-center">
            
            {/* Floating Live Badge 1: Response Speed */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="hidden sm:flex absolute -top-5 -left-4 z-20 items-center gap-2.5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#BBF7D0] shadow-[0_12px_30px_-6px_rgba(22,163,74,0.18)]"
            >
              <div className="w-8 h-8 rounded-xl bg-[#DCFCE7] flex items-center justify-center text-[#16A34A]">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-[#0B1F14]">Instant AI Dispatch</div>
                <div className="text-[11px] text-[#16A34A] font-semibold">1.8s avg reply latency</div>
              </div>
            </motion.div>

            {/* Floating Live Badge 2: Lead Qualified */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="hidden sm:flex absolute -bottom-5 -right-2 z-20 items-center gap-2.5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#E2EDE5] shadow-[0_12px_30px_-6px_rgba(11,31,20,0.12)]"
            >
              <div className="w-8 h-8 rounded-xl bg-[#FEF3C7] flex items-center justify-center text-[#B45309]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-[#0B1F14]">Smart Intent Detected</div>
                <div className="text-[11px] text-[#3F5247] font-medium">Auto-synced to CRM</div>
              </div>
            </motion.div>

            {/* Phone Mockup Housing */}
            <div className="w-full max-w-[430px] bg-[#0B1F14] p-3 sm:p-3.5 rounded-[40px] shadow-[0_25px_60px_-15px_rgba(11,31,20,0.35),0_10px_30px_-10px_rgba(22,163,74,0.25)] border-4 border-[#1E3A29]">
              
              {/* Phone Top Speaker & Camera Notch */}
              <div className="relative bg-[#075E54] rounded-t-[32px] pt-3 pb-3 px-4 text-white">
                <div className="w-20 h-4 bg-[#0B1F14] rounded-full mx-auto mb-2"></div>
                
                {/* WhatsApp Business Header Bar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="relative">
                      <div className="w-9 h-9 rounded-full bg-white text-[#16A34A] flex items-center justify-center font-bold text-sm shadow-xs">
                        FC
                      </div>
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#22C55E] border-2 border-[#075E54] rounded-full" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold leading-tight">FlowChat Studio</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#BBF7D0]" />
                      </div>
                      <p className="text-xs text-[#DCFCE7] flex items-center gap-1">
                        <span>Official Business Account</span>
                      </p>
                    </div>
                  </div>

                  {/* Restart Replay button */}
                  <button
                    onClick={restartChat}
                    title="Restart chat simulation"
                    aria-label="Restart chat simulation"
                    className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Chat Thread Canvas with WhatsApp Wallpaper Tint */}
              <div className="bg-[#EFEAE2] min-h-[460px] max-h-[500px] overflow-y-auto p-4 space-y-3 rounded-b-3xl flex flex-col justify-between">
                
                {/* Security encryption pill */}
                <div className="text-center my-1">
                  <span className="inline-block bg-[#FDF9EA] border border-[#E8E1CE] text-[#54656F] text-xs font-medium px-3.5 py-1.5 rounded-lg shadow-2xs">
                    🔒 Official Meta Cloud API • End-to-end verified
                  </span>
                </div>

                {/* Messages Sequence */}
                <div className="space-y-3 flex-1">
                  {SITE_CONTENT.hero.chatSimulation.slice(0, currentStepIndex).map((msg, index) => {
                    const isAi = msg.sender === 'ai';
                    const isSystem = msg.sender === 'system';

                    if (isSystem) {
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.25 }}
                          className="my-2 bg-[#DCFCE7] border border-[#BBF7D0] rounded-xl p-2.5 shadow-2xs flex items-center justify-between gap-2"
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-[#16A34A] text-white flex items-center justify-center">
                              <UserCheck className="w-3.5 h-3.5" />
                            </div>
                            <div className="text-left">
                              <div className="text-[11px] font-bold text-[#0B1F14]">Handoff Assigned</div>
                              <div className="text-[10px] text-[#166534] font-medium leading-tight">{msg.text}</div>
                            </div>
                          </div>
                          <span className="text-[9px] font-bold bg-[#16A34A] text-white px-2 py-0.5 rounded-full">
                            Priya V.
                          </span>
                        </motion.div>
                      );
                    }

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`flex flex-col ${isAi ? 'items-start' : 'items-end'}`}
                      >
                        {/* Chat Bubble */}
                        <div
                          className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 shadow-xs relative text-xs sm:text-sm leading-relaxed ${
                            isAi
                              ? 'bg-white text-[#111B21] rounded-tl-sm border border-[#E2EDE5]'
                              : 'bg-[#D9FDD3] text-[#111B21] rounded-tr-sm'
                          }`}
                        >
                          {/* AI Assistant Badge above message if AI */}
                          {isAi && (
                            <div className="flex items-center gap-1.5 text-xs text-[#16A34A] font-bold mb-1">
                              <Bot className="w-3.5 h-3.5" />
                              <span>FlowChat AI Assistant</span>
                            </div>
                          )}

                          <p className="text-[#111B21] font-normal">{msg.text}</p>
                          
                          <div className="flex items-center justify-end gap-1 mt-1 text-xs text-[#667781]">
                            <span>{msg.time}</span>
                            {!isAi && <span className="text-[#53BDEB] font-bold">✓✓</span>}
                          </div>
                        </div>

                        {/* Optional Lead Capture tag underneath AI message */}
                        {msg.badge && (
                          <div className="mt-1 flex items-center gap-1">
                            <span className="text-xs font-semibold bg-white border border-[#BBF7D0] text-[#166534] px-2 py-0.5 rounded-full shadow-2xs flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-[#16A34A]" />
                              {msg.badge.text}
                            </span>
                          </div>
                        )}
                      </motion.div>
                    );
                  })}

                  {/* AI Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-1 bg-white px-3 py-2 rounded-2xl rounded-tl-xs w-16 shadow-2xs border border-[#E2EDE5]"
                    >
                      <span className="w-1.5 h-1.5 bg-[#16A34A] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="w-1.5 h-1.5 bg-[#16A34A] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="w-1.5 h-1.5 bg-[#16A34A] rounded-full animate-bounce"></span>
                    </motion.div>
                  )}
                </div>

                {/* WhatsApp Fake Input bar */}
                <div className="bg-white rounded-full px-3 py-1.5 flex items-center justify-between text-xs text-[#8696A0] shadow-xs border border-[#E2EDE5]">
                  <span className="truncate">Type a message...</span>
                  <div className="w-7 h-7 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold">
                    ➤
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};
