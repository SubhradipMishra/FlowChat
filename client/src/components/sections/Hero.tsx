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
  Bot,
  Zap,
  TrendingUp,
  Lock,
  Building2,
  ShoppingBag,
  Home,
  Stethoscope,
  Activity,
  Check,
  Database
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ThemeToggle } from '../ui/ThemeToggle';
import { SITE_CONTENT } from '../../data/content';

export interface HeroProps {
  onOpenTrialModal: () => void;
  onOpenDemoModal: () => void;
}

interface SimulatedBranch {
  id: string;
  label: string;
  customerMsg: string;
  aiMsg: string;
  dealIntent: string;
  handoffUser: string;
}

const SIMULATED_BRANCHES: SimulatedBranch[] = [
  {
    id: 'agency',
    label: 'Agency Redesign',
    customerMsg: "Hi! Do you have slots for website redesign this month? What's your typical pricing?",
    aiMsg: "Hello! Yes, we have 2 client intake slots left for October. Our redesign packages start from $1,200. Would you like our breakdown PDF or to schedule a 15-min discovery call?",
    dealIntent: '$1,200 Intent • Qualified',
    handoffUser: 'Priya V. (Lead Strategist)',
  },
  {
    id: 'ecommerce',
    label: 'E-Commerce Order',
    customerMsg: "Where is my order #FC-9482? Can I change my delivery address to Mumbai?",
    aiMsg: "Found your order! It's currently in transit. I've updated your destination to Mumbai HQ and synced tracking with BlueDart.",
    dealIntent: 'Order #FC-9482 • Routed',
    handoffUser: 'Rahul S. (Logistics Lead)',
  },
  {
    id: 'realestate',
    label: 'Real Estate Tour',
    customerMsg: "Interested in the 3-BHK penthouse in Palm Avenue. Is a weekend viewing possible?",
    aiMsg: "Yes! Slot reserved for Saturday, 11:30 AM. Brokered by Palm Avenue Sales Suite with virtual brochure attached.",
    dealIntent: '$450k Property • Viewing',
    handoffUser: 'Ananya D. (Property Advisor)',
  },
];

const INDUSTRY_PREVIEWS = [
  { id: 'agencies', name: 'Agencies', icon: Building2, lift: '+310% lead capture', highlight: 'SOP & proposal bots' },
  { id: 'ecommerce', name: 'E-Commerce', icon: ShoppingBag, lift: '4.2x cart recovery', highlight: 'Order tracking & upsells' },
  { id: 'realestate', name: 'Real Estate', icon: Home, lift: '88% tour bookings', highlight: 'Instant property qualification' },
  { id: 'clinics', name: 'Healthcare', icon: Stethoscope, lift: '2.4x appointment show-up', highlight: 'HIPAA-aware reminders' },
];

export const Hero: React.FC<HeroProps> = ({
  onOpenTrialModal,
  onOpenDemoModal,
}) => {
  const [activeBranchId, setActiveBranchId] = useState<string>('agency');
  const [activeIndustryId, setActiveIndustryId] = useState<string>('agencies');
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const activeBranch = SIMULATED_BRANCHES.find(b => b.id === activeBranchId) || SIMULATED_BRANCHES[0];

  // Animated chat sequence loop
  useEffect(() => {
    let isSubscribed = true;

    const runSequence = async () => {
      // Step 1: Customer asks question
      setCurrentStepIndex(1);
      setIsTyping(false);

      // Step 2: AI Typing then response
      await new Promise(r => setTimeout(r, 1100));
      if (!isSubscribed) return;
      setIsTyping(true);

      await new Promise(r => setTimeout(r, 1200));
      if (!isSubscribed) return;
      setIsTyping(false);
      setCurrentStepIndex(2);

      // Step 3: Customer follow-up
      await new Promise(r => setTimeout(r, 1600));
      if (!isSubscribed) return;
      setCurrentStepIndex(3);

      // Step 4: AI confirmation & Lead extraction
      await new Promise(r => setTimeout(r, 1000));
      if (!isSubscribed) return;
      setIsTyping(true);

      await new Promise(r => setTimeout(r, 1200));
      if (!isSubscribed) return;
      setIsTyping(false);
      setCurrentStepIndex(4);

      // Step 5: System handoff card
      await new Promise(r => setTimeout(r, 1400));
      if (!isSubscribed) return;
      setCurrentStepIndex(5);
    };

    runSequence();

    return () => {
      isSubscribed = false;
    };
  }, [activeBranchId]);

  const handleRestartChat = () => {
    setCurrentStepIndex(1);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setCurrentStepIndex(2);
    }, 900);
  };

  const handleBranchSelect = (id: string) => {
    setActiveBranchId(id);
    setCurrentStepIndex(0);
  };

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-white dark:bg-[#080F0A] transition-colors duration-500">
      {/* Background radial gradients & subtle dotted grid */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60 dark:opacity-40 pointer-events-none transition-opacity duration-500" />
      
      {/* Ambient Aurora Glows */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-gradient-to-tr from-[#DCFCE7]/70 via-[#EEF8F1]/80 to-[#BBF7D0]/40 dark:from-[#16A34A]/15 dark:via-[#0E2818]/25 dark:to-[#052E16]/30 rounded-full blur-3xl pointer-events-none -z-10 transition-all duration-700" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-44 right-[-5%] w-[480px] h-[480px] bg-gradient-to-br from-[#BBF7D0]/40 to-transparent dark:from-[#22C55E]/10 dark:to-transparent rounded-full blur-3xl pointer-events-none -z-10 transition-all duration-700" 
      />

      <Container>
        {/* Top Bento Header Bar: Compliance status + Theme Mode Pill */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-3 border-b border-[#E2EDE5]/60 dark:border-[#1C3827]/60 transition-colors duration-500">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
            <Badge 
              variant="green" 
              size="md" 
              icon={<ShieldCheck className="w-3.5 h-3.5 text-[#16A34A] dark:text-[#4ADE80]" />}
              className="py-1 px-3 shadow-xs"
            >
              {SITE_CONTENT.hero.badge}
            </Badge>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F6FBF7] dark:bg-[#0E1A12] border border-[#E2EDE5] dark:border-[#1C3827] text-[#3F5247] dark:text-[#A1B8AA] transition-colors duration-500">
              <span className="w-2 h-2 rounded-full bg-[#16A34A] dark:bg-[#4ADE80] animate-pulse" />
              <span>Official Cloud API • 99.99% Uptime</span>
            </div>
          </div>

          {/* Bento Theme Switcher Pill */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#6B7F73] dark:text-[#9FB5A6] hidden sm:inline transition-colors duration-500">
              Hero Theme:
            </span>
            <ThemeToggle variant="pill" />
          </div>
        </div>

        {/* ========================================================
            BENTO GRID HERO LAYOUT (12 Columns)
           ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          
          {/* ======================================================
              BENTO TILE 1: Primary Focal Spotlight (Span 7)
             ====================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 bg-gradient-to-br from-white via-[#F6FBF7]/90 to-[#EEF8F1]/60 dark:from-[#0E1A12] dark:via-[#112218] dark:to-[#0A160F] p-6 sm:p-8 lg:p-9 rounded-3xl border border-[#E2EDE5] dark:border-[#1C3827] shadow-[0_12px_36px_-10px_rgba(11,31,20,0.06)] dark:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.5)] flex flex-col justify-between relative overflow-hidden transition-all duration-500 group"
          >
            {/* Subtle glow accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#DCFCE7]/60 to-transparent dark:from-[#22C55E]/10 dark:to-transparent rounded-full blur-2xl pointer-events-none -mr-16 -mt-16" />

            <div className="space-y-6 relative z-10">
              {/* Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#DCFCE7] dark:bg-[#143522] text-[#166534] dark:text-[#4ADE80] border border-[#BBF7D0] dark:border-[#22C55E]/40 transition-colors duration-500">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next-Gen WhatsApp Intelligence Platform</span>
              </div>

              {/* Bold Display Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F14] dark:text-[#F0FDF4] tracking-tight leading-[1.12] transition-colors duration-500">
                Automate WhatsApp conversations.{' '}
                <span className="text-[#16A34A] dark:text-[#4ADE80] inline-block bg-gradient-to-r from-[#16A34A] to-[#22C55E] dark:from-[#4ADE80] dark:to-[#86EFAC] bg-clip-text text-transparent">
                  Capture 4x more leads.
                </span>
              </h1>

              {/* Value Proposition Description */}
              <p className="text-base sm:text-lg text-[#3F5247] dark:text-[#A1B8AA] leading-relaxed max-w-xl transition-colors duration-500">
                {SITE_CONTENT.hero.subheadline}
              </p>

              {/* Dual CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={onOpenTrialModal}
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="text-base px-7 py-3.5 shadow-md hover:shadow-lg dark:bg-[#16A34A] dark:hover:bg-[#22C55E] transition-all duration-300"
                >
                  {SITE_CONTENT.hero.primaryCta}
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={onOpenDemoModal}
                  icon={<Play className="w-4 h-4 fill-[#16A34A] text-[#16A34A] dark:fill-[#4ADE80] dark:text-[#4ADE80]" />}
                  iconPosition="left"
                  className="text-base px-6 py-3.5 dark:bg-[#122218] dark:text-white dark:border-[#1F3D2B] dark:hover:border-[#4ADE80]/50 transition-colors duration-500"
                >
                  {SITE_CONTENT.hero.secondaryCta}
                </Button>
              </div>

              {/* Trust Line & Guarantees */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-[#6B7F73] dark:text-[#9FB5A6] pt-1 transition-colors duration-500">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] dark:text-[#4ADE80] shrink-0" />
                  <span>Official Cloud API</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] dark:text-[#4ADE80] shrink-0" />
                  <span>Zero ban risk</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] dark:text-[#4ADE80] shrink-0" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>

            {/* Micro KPI Ribbon inside Spotlight Tile */}
            <div className="mt-8 pt-5 border-t border-[#E2EDE5] dark:border-[#1C3827] grid grid-cols-3 gap-3 text-center sm:text-left transition-colors duration-500 relative z-10">
              {SITE_CONTENT.hero.metricsHighlight.map((m, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-xl sm:text-2xl font-black text-[#0B1F14] dark:text-[#F0FDF4] transition-colors duration-500">
                    {m.value}
                  </div>
                  <div className="text-xs text-[#6B7F73] dark:text-[#9FB5A6] font-medium leading-tight transition-colors duration-500">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ======================================================
              BENTO TILE 2: Live WhatsApp Simulator (Span 5, Row-2)
             ====================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-5 lg:row-span-2 bg-[#F6FBF7] dark:bg-[#0D1812] p-5 sm:p-6 rounded-3xl border border-[#E2EDE5] dark:border-[#1C3827] shadow-[0_12px_36px_-10px_rgba(11,31,20,0.06)] dark:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.5)] flex flex-col justify-between transition-colors duration-500 relative"
          >
            {/* Top Bar: Simulator Controls & Scenario Switcher */}
            <div className="mb-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#16A34A] dark:bg-[#4ADE80] animate-ping" />
                  <span className="text-xs font-bold text-[#0B1F14] dark:text-[#F0FDF4] uppercase tracking-wider transition-colors duration-500">
                    Live Chat Simulation
                  </span>
                </div>

                <button
                  onClick={handleRestartChat}
                  title="Replay conversation simulation"
                  aria-label="Replay conversation simulation"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium text-[#166534] dark:text-[#4ADE80] bg-[#DCFCE7] dark:bg-[#143522] hover:bg-[#BBF7D0] dark:hover:bg-[#1A472E] border border-[#BBF7D0] dark:border-[#22C55E]/40 transition-all duration-200 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Replay</span>
                </button>
              </div>

              {/* Branch Selector Chips */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                {SIMULATED_BRANCHES.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => handleBranchSelect(b.id)}
                    className={`text-xs px-2.5 py-1 rounded-lg font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                      activeBranchId === b.id
                        ? 'bg-[#16A34A] text-white shadow-xs font-semibold'
                        : 'bg-white dark:bg-[#122218] text-[#3F5247] dark:text-[#A1B8AA] border border-[#E2EDE5] dark:border-[#1C3827] hover:border-[#BBF7D0] dark:hover:border-[#22C55E]/40'
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Realistic WhatsApp Smartphone Frame */}
            <div className="w-full bg-[#0B1F14] dark:bg-[#050A07] p-2 sm:p-2.5 rounded-[32px] shadow-[0_20px_50px_-15px_rgba(11,31,20,0.35)] dark:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] border-4 border-[#1E3A29] dark:border-[#152B1E] transition-colors duration-500">
              
              {/* WhatsApp Header: Switches cleanly between Light (Emerald) & Dark (Obsidian) */}
              <div className="bg-[#075E54] dark:bg-[#1F2C34] rounded-t-[26px] pt-2.5 pb-2.5 px-3.5 text-white transition-colors duration-500">
                {/* Notch */}
                <div className="w-16 h-3 bg-[#0B1F14] dark:bg-[#050A07] rounded-full mx-auto mb-2 opacity-80" />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-white text-[#16A34A] flex items-center justify-center font-bold text-xs shadow-xs">
                        FC
                      </div>
                      <span className="absolute bottom-0 right-0 w-2 h-2 bg-[#22C55E] border-2 border-[#075E54] dark:border-[#1F2C34] rounded-full" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs sm:text-sm font-bold leading-tight">FlowChat Studio</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#BBF7D0] dark:text-[#4ADE80]" />
                      </div>
                      <p className="text-[11px] text-[#DCFCE7] dark:text-[#9FB5A6]">
                        Official Verified Account
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold bg-white/15 dark:bg-black/30 px-2 py-0.5 rounded-full">
                    Meta Cloud API
                  </span>
                </div>
              </div>

              {/* Chat Thread Canvas with Real WhatsApp Themes */}
              <div className="bg-[#EFEAE2] dark:bg-[#0B141A] min-h-[380px] max-h-[420px] overflow-y-auto p-3.5 space-y-2.5 rounded-b-[24px] flex flex-col justify-between transition-colors duration-500">
                
                {/* Encryption Security Banner */}
                <div className="text-center">
                  <span className="inline-block bg-[#FDF9EA] dark:bg-[#182229] border border-[#E8E1CE] dark:border-[#222E35] text-[#54656F] dark:text-[#8696A0] text-[10px] sm:text-xs font-medium px-3 py-1 rounded-lg shadow-2xs transition-colors duration-500">
                    🔒 256-bit Cloud Webhook Encryption • Meta Verified
                  </span>
                </div>

                {/* Animated Chat Messages Sequence */}
                <div className="space-y-2.5 flex-1 pt-1">
                  
                  {/* Step 1: Customer Message */}
                  {currentStepIndex >= 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col items-end"
                    >
                      <div className="max-w-[88%] rounded-2xl px-3 py-2 shadow-xs text-xs leading-relaxed bg-[#D9FDD3] dark:bg-[#005C4B] text-[#111B21] dark:text-[#E9EDEF] rounded-tr-xs transition-colors duration-500">
                        <p>{activeBranch.customerMsg}</p>
                        <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-[#667781] dark:text-[#8696A0]">
                          <span>10:14 AM</span>
                          <span className="text-[#53BDEB] font-bold">✓✓</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: AI Reply */}
                  {currentStepIndex >= 2 && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col items-start"
                    >
                      <div className="max-w-[88%] rounded-2xl px-3 py-2 shadow-xs text-xs leading-relaxed bg-white dark:bg-[#202C33] text-[#111B21] dark:text-[#E9EDEF] rounded-tl-xs border border-[#E2EDE5] dark:border-[#2A3942] transition-colors duration-500">
                        <div className="flex items-center gap-1.5 text-[11px] text-[#16A34A] dark:text-[#4ADE80] font-bold mb-1">
                          <Bot className="w-3.5 h-3.5" />
                          <span>FlowChat AI Assistant</span>
                        </div>
                        <p>{activeBranch.aiMsg}</p>
                        <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-[#667781] dark:text-[#8696A0]">
                          <span>10:14 AM</span>
                        </div>
                      </div>

                      <div className="mt-1 flex items-center gap-1">
                        <span className="text-[10px] font-bold bg-white dark:bg-[#182229] border border-[#BBF7D0] dark:border-[#22C55E]/40 text-[#166534] dark:text-[#4ADE80] px-2 py-0.5 rounded-full shadow-2xs flex items-center gap-1 transition-colors duration-500">
                          <Sparkles className="w-3 h-3 text-[#16A34A] dark:text-[#4ADE80]" />
                          {activeBranch.dealIntent}
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Customer follow-up */}
                  {currentStepIndex >= 3 && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col items-end"
                    >
                      <div className="max-w-[88%] rounded-2xl px-3 py-2 shadow-xs text-xs leading-relaxed bg-[#D9FDD3] dark:bg-[#005C4B] text-[#111B21] dark:text-[#E9EDEF] rounded-tr-xs transition-colors duration-500">
                        <p>Discovery call please! Can someone call me today around 3 PM?</p>
                        <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-[#667781] dark:text-[#8696A0]">
                          <span>10:15 AM</span>
                          <span className="text-[#53BDEB] font-bold">✓✓</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: AI Instant Confirmation */}
                  {currentStepIndex >= 4 && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col items-start"
                    >
                      <div className="max-w-[88%] rounded-2xl px-3 py-2 shadow-xs text-xs leading-relaxed bg-white dark:bg-[#202C33] text-[#111B21] dark:text-[#E9EDEF] rounded-tl-xs border border-[#E2EDE5] dark:border-[#2A3942] transition-colors duration-500">
                        <p>Done! I've reserved your slot for 3:00 PM and synced your CRM contact card.</p>
                        <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-[#667781] dark:text-[#8696A0]">
                          <span>10:15 AM</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 5: System Human Handoff Card */}
                  {currentStepIndex >= 5 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.25 }}
                      className="my-1.5 bg-[#DCFCE7] dark:bg-[#122A1C] border border-[#BBF7D0] dark:border-[#22C55E]/40 rounded-xl p-2.5 shadow-2xs flex items-center justify-between gap-2 transition-colors duration-500"
                    >
                      <div className="flex items-center gap-2 truncate">
                        <div className="w-6 h-6 rounded-full bg-[#16A34A] dark:bg-[#22C55E] text-white flex items-center justify-center shrink-0">
                          <UserCheck className="w-3.5 h-3.5" />
                        </div>
                        <div className="text-left truncate">
                          <div className="text-[11px] font-bold text-[#0B1F14] dark:text-[#F0FDF4]">
                            Human Handoff Assigned
                          </div>
                          <div className="text-[10px] text-[#166534] dark:text-[#86EFAC] font-medium truncate">
                            {activeBranch.handoffUser}
                          </div>
                        </div>
                      </div>
                      <span className="text-[9px] font-bold bg-[#16A34A] dark:bg-[#22C55E] text-white px-2 py-0.5 rounded-full shrink-0">
                        CRM Synced
                      </span>
                    </motion.div>
                  )}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-1 bg-white dark:bg-[#202C33] px-3 py-2 rounded-2xl rounded-tl-xs w-16 shadow-2xs border border-[#E2EDE5] dark:border-[#2A3942] transition-colors duration-500"
                    >
                      <span className="w-1.5 h-1.5 bg-[#16A34A] dark:bg-[#4ADE80] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="w-1.5 h-1.5 bg-[#16A34A] dark:bg-[#4ADE80] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="w-1.5 h-1.5 bg-[#16A34A] dark:bg-[#4ADE80] rounded-full animate-bounce"></span>
                    </motion.div>
                  )}
                </div>

                {/* WhatsApp Interactive Input Bar */}
                <div className="bg-white dark:bg-[#202C33] rounded-full px-3 py-1.5 flex items-center justify-between text-xs text-[#8696A0] shadow-xs border border-[#E2EDE5] dark:border-[#2A3942] transition-colors duration-500">
                  <span className="truncate">Type a reply or click branch above...</span>
                  <div className="w-6 h-6 rounded-full bg-[#16A34A] dark:bg-[#22C55E] text-white flex items-center justify-center font-bold text-[10px]">
                    ➤
                  </div>
                </div>

              </div>
            </div>

            {/* Micro Latency Footnote under simulator */}
            <div className="mt-3 flex items-center justify-between text-[11px] text-[#6B7F73] dark:text-[#9FB5A6] px-1 transition-colors duration-500">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#16A34A] dark:text-[#4ADE80]" />
                <span>Average reply latency: <strong>1.8s</strong></span>
              </span>
              <span className="text-[#16A34A] dark:text-[#4ADE80] font-semibold">
                ● 0% Ban Risk
              </span>
            </div>
          </motion.div>

          {/* ======================================================
              BENTO TILE 3: Instant AI Dispatch & Latency Radar (Span 3)
             ====================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-3 bg-white dark:bg-[#0E1A12] p-5 sm:p-6 rounded-3xl border border-[#E2EDE5] dark:border-[#1C3827] shadow-[0_4px_24px_-4px_rgba(11,31,20,0.04)] dark:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.4)] flex flex-col justify-between transition-colors duration-500 group hover:border-[#BBF7D0] dark:hover:border-[#22C55E]/40"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-[#DCFCE7] dark:bg-[#143522] text-[#16A34A] dark:text-[#4ADE80] flex items-center justify-center transition-colors duration-500">
                  <Zap className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold text-[#166534] dark:text-[#4ADE80] bg-[#DCFCE7]/70 dark:bg-[#143522] px-2 py-0.5 rounded-full">
                  Real-Time
                </span>
              </div>

              <h2 className="text-base sm:text-lg font-bold text-[#0B1F14] dark:text-[#F0FDF4] mb-1 transition-colors duration-500">
                Instant AI Dispatch
              </h2>
              <p className="text-xs text-[#6B7F73] dark:text-[#9FB5A6] leading-relaxed transition-colors duration-500">
                Respond before leads bounce. 24/7 automated intelligence without human delays.
              </p>
            </div>

            {/* Visual Animated Latency Display */}
            <div className="mt-4 pt-3 border-t border-[#E2EDE5]/70 dark:border-[#1C3827]/70 flex items-baseline justify-between transition-colors duration-500">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1F14] dark:text-[#F0FDF4]">
                  &lt; 1.8s
                </div>
                <div className="text-[11px] text-[#16A34A] dark:text-[#4ADE80] font-semibold">
                  First response time
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs text-[#6B7F73] dark:text-[#9FB5A6]">
                <Activity className="w-3.5 h-3.5 text-[#16A34A] dark:text-[#4ADE80] animate-pulse" />
                <span>99.4% intent</span>
              </div>
            </div>
          </motion.div>

          {/* ======================================================
              BENTO TILE 4: CRM Pipeline Deal Extraction (Span 4)
             ====================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:col-span-4 bg-white dark:bg-[#0E1A12] p-5 sm:p-6 rounded-3xl border border-[#E2EDE5] dark:border-[#1C3827] shadow-[0_4px_24px_-4px_rgba(11,31,20,0.04)] dark:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.4)] flex flex-col justify-between transition-colors duration-500 group hover:border-[#BBF7D0] dark:hover:border-[#22C55E]/40"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-[#FEF3C7] dark:bg-[#2C1F0A] text-[#B45309] dark:text-[#FBBF24] flex items-center justify-center transition-colors duration-500">
                  <Database className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold text-[#166534] dark:text-[#4ADE80] bg-[#DCFCE7] dark:bg-[#143522] px-2 py-0.5 rounded-full">
                  Auto-Synced
                </span>
              </div>

              <h2 className="text-base sm:text-lg font-bold text-[#0B1F14] dark:text-[#F0FDF4] mb-1 transition-colors duration-500">
                Smart Deal Qualification
              </h2>
              <p className="text-xs text-[#6B7F73] dark:text-[#9FB5A6] leading-relaxed transition-colors duration-500">
                Extract deal values, emails, and phone numbers directly into your CRM pipeline.
              </p>
            </div>

            {/* Mini CRM Sync Badge Strip */}
            <div className="mt-4 bg-[#F6FBF7] dark:bg-[#122218] p-3 rounded-xl border border-[#E2EDE5] dark:border-[#1C3827] space-y-1.5 transition-colors duration-500">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#0B1F14] dark:text-[#F0FDF4]">Marcus T. (TechCorp)</span>
                <span className="font-bold text-[#16A34A] dark:text-[#4ADE80]">$1,200 Deal</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-[#6B7F73] dark:text-[#9FB5A6]">
                <Check className="w-3 h-3 text-[#16A34A] dark:text-[#4ADE80]" />
                <span>HubSpot • Salesforce • Notion Webhook Ready</span>
              </div>
            </div>
          </motion.div>

          {/* ======================================================
              BENTO TILE 5: Official Meta Zero-Ban Shield (Span 4)
             ====================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="lg:col-span-4 bg-white dark:bg-[#0E1A12] p-5 sm:p-6 rounded-3xl border border-[#E2EDE5] dark:border-[#1C3827] shadow-[0_4px_24px_-4px_rgba(11,31,20,0.04)] dark:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.4)] flex flex-col justify-between transition-colors duration-500 group hover:border-[#BBF7D0] dark:hover:border-[#22C55E]/40"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-[#DCFCE7] dark:bg-[#143522] text-[#16A34A] dark:text-[#4ADE80] flex items-center justify-center transition-colors duration-500">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold text-[#166534] dark:text-[#4ADE80] bg-[#DCFCE7] dark:bg-[#143522] px-2 py-0.5 rounded-full">
                  Zero Ban Risk
                </span>
              </div>

              <h2 className="text-base sm:text-lg font-bold text-[#0B1F14] dark:text-[#F0FDF4] mb-1 transition-colors duration-500">
                Official Cloud API Only
              </h2>
              <p className="text-xs text-[#6B7F73] dark:text-[#9FB5A6] leading-relaxed transition-colors duration-500">
                Zero browser scraping or unofficial hacks. Direct Meta Cloud API link keeps your phone numbers 100% safe.
              </p>
            </div>

            {/* Verification Guarantee Pill */}
            <div className="mt-4 pt-3 border-t border-[#E2EDE5]/70 dark:border-[#1C3827]/70 flex items-center justify-between text-xs text-[#166534] dark:text-[#4ADE80] font-semibold transition-colors duration-500">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" />
                <span>Meta Business Partner</span>
              </span>
              <span className="text-[11px] text-[#6B7F73] dark:text-[#9FB5A6]">
                256-bit SSL
              </span>
            </div>
          </motion.div>

          {/* ======================================================
              BENTO TILE 6: Industry Multiplier & Social Proof (Span 8)
             ====================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="lg:col-span-8 bg-gradient-to-r from-[#F6FBF7] via-white to-[#F6FBF7] dark:from-[#0E1A12] dark:via-[#112218] dark:to-[#0E1A12] p-5 sm:p-6 rounded-3xl border border-[#E2EDE5] dark:border-[#1C3827] shadow-[0_4px_24px_-4px_rgba(11,31,20,0.04)] dark:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.4)] flex flex-col justify-between transition-colors duration-500"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1.5 overflow-hidden">
                    <span className="inline-block w-6 h-6 rounded-full ring-2 ring-white dark:ring-[#0E1A12] bg-[#16A34A] text-white text-[10px] font-bold flex items-center justify-center">
                      JD
                    </span>
                    <span className="inline-block w-6 h-6 rounded-full ring-2 ring-white dark:ring-[#0E1A12] bg-[#075E54] text-white text-[10px] font-bold flex items-center justify-center">
                      AK
                    </span>
                    <span className="inline-block w-6 h-6 rounded-full ring-2 ring-white dark:ring-[#0E1A12] bg-[#22C55E] text-white text-[10px] font-bold flex items-center justify-center">
                      MV
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-[#0B1F14] dark:text-[#F0FDF4]">
                    <span>★ 4.9 / 5.0 Rating</span>
                    <span className="text-[#6B7F73] dark:text-[#9FB5A6] font-normal">• 2,400+ Active Teams</span>
                  </div>
                </div>
              </div>

              <div className="text-xs font-semibold text-[#166534] dark:text-[#4ADE80] flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Automated 2.4M+ Conversations Last Month</span>
              </div>
            </div>

            {/* Interactive Industry Selector Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
              {INDUSTRY_PREVIEWS.map((ind) => {
                const IconComponent = ind.icon;
                const isSelected = activeIndustryId === ind.id;
                return (
                  <button
                    key={ind.id}
                    onClick={() => setActiveIndustryId(ind.id)}
                    className={`p-2.5 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-white dark:bg-[#143522] border-[#16A34A] dark:border-[#4ADE80] shadow-sm'
                        : 'bg-white/60 dark:bg-[#122218]/60 border-[#E2EDE5] dark:border-[#1C3827] hover:bg-white dark:hover:bg-[#143522]'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#0B1F14] dark:text-[#F0FDF4] mb-0.5">
                      <IconComponent className="w-3.5 h-3.5 text-[#16A34A] dark:text-[#4ADE80]" />
                      <span>{ind.name}</span>
                    </div>
                    <div className="text-[11px] font-extrabold text-[#16A34A] dark:text-[#4ADE80]">
                      {ind.lift}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};
