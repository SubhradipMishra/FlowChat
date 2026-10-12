import React, { useState, useEffect, useRef } from 'react';
import { 
  UserPlus, 
  Building2, 
  Smartphone, 
  Cpu, 
  Activity, 
  CheckCircle2, 
  ArrowRight,
  Play, 
  Pause, 
  ShieldCheck, 
  ChevronRight, 
  ChevronLeft,
  Sparkles,
  Terminal
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { SITE_CONTENT, type HowItWorksStep } from '../../data/content';

interface StationMeta {
  code: string;
  duration: string;
  protocol: string;
  headline: string;
  milestones: string[];
  techSpec: string;
}

const STATIONS_META: Record<number, StationMeta> = {
  1: {
    code: "STATION 01 // AUTH GATEWAY",
    duration: "~30 sec",
    protocol: "OAuth 2.0 / Work SSO",
    headline: "Frictionless Onboarding & Zero Card Barrier",
    milestones: [
      "Instant email / Google SSO authentication",
      "Immediate trial workspace provisioning",
      "No credit card required to start"
    ],
    techSpec: "Auto-generates 14-day trial JWT with full API capabilities"
  },
  2: {
    code: "STATION 02 // ORG TENANT",
    duration: "~2.5 min",
    protocol: "PostgreSQL Multi-Tenant RLS",
    headline: "Enterprise Data Isolation & Brand Rules",
    milestones: [
      "Custom business hour schedules & timezones",
      "RBAC team roles: Admin, Manager, Live Agent",
      "Tailored company brand voice & tone"
    ],
    techSpec: "Dedicated schema-level encryption with AES-256 at rest"
  },
  3: {
    code: "STATION 03 // META CLOUD BRIDGE",
    duration: "~3.5 min",
    protocol: "Meta Cloud API v20.0 Webhooks",
    headline: "Direct Official WhatsApp Number Linking",
    milestones: [
      "One-click Facebook Business Manager OAuth",
      "Official Meta Cloud API direct pipeline",
      "Zero per-message Twilio broker markup"
    ],
    techSpec: "Instant verification with official Green Tick eligibility"
  },
  4: {
    code: "STATION 04 // AI REASONING CORE",
    duration: "~4.5 min",
    protocol: "Vector RAG + Guardrail Engine",
    headline: "Catalog Ingestion & Custom Escalation Rules",
    milestones: [
      "Upload PDF catalogs, price lists & FAQs",
      "Strict hallucination defense filters",
      "Smart sentiment & VIP escalation thresholds"
    ],
    techSpec: "Sub-second vector retrieval with confidence score gating"
  },
  5: {
    code: "STATION 05 // PROD DISPATCH",
    duration: "~1.0 min",
    protocol: "Real-time Event Streaming Loop",
    headline: "Go-Live Launch & Real-time Telemetry",
    milestones: [
      "Automated WhatsApp message event listener active",
      "Seamless human agent handoff in < 2 seconds",
      "Live analytics stream tracking resolutions & leads"
    ],
    techSpec: "Real-time WebSocket event dispatch with 99.99% uptime SLA"
  }
};

// 5 Circular Node coordinates calculated for viewBox 0 0 480 480 (Center: 240, 240, Radius: 160)
const NODE_COORDINATES = [
  { step: 1, angle: -90, x: 240, y: 80 },    // Top (12 o'clock)
  { step: 2, angle: -18, x: 392, y: 191 },   // Top-Right (~2 o'clock)
  { step: 3, angle: 54,  x: 334, y: 369 },   // Bottom-Right (~4:30 o'clock)
  { step: 4, angle: 126, x: 146, y: 369 },   // Bottom-Left (~7:30 o'clock)
  { step: 5, angle: 198, x: 88,  y: 191 },   // Top-Left (~10 o'clock)
];

const AUTOPLAY_DURATION_MS = 4500;

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progressPercent, setProgressPercent] = useState<number>(0);

  const stepIcons = [
    <UserPlus className="w-5 h-5" key="1" />,
    <Building2 className="w-5 h-5" key="2" />,
    <Smartphone className="w-5 h-5" key="3" />,
    <Cpu className="w-5 h-5" key="4" />,
    <Activity className="w-5 h-5" key="5" />,
  ];

  const startTimeRef = useRef<number>(Date.now());

  // Automatic circular route rotation & progress counter
  useEffect(() => {
    if (!isPlaying) {
      setProgressPercent(0);
      return;
    }

    startTimeRef.current = Date.now();
    const intervalRate = 50;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min((elapsed / AUTOPLAY_DURATION_MS) * 100, 100);
      setProgressPercent(pct);

      if (elapsed >= AUTOPLAY_DURATION_MS) {
        setActiveStep((prev) => (prev >= 5 ? 1 : prev + 1));
        startTimeRef.current = Date.now();
        setProgressPercent(0);
      }
    }, intervalRate);

    return () => clearInterval(interval);
  }, [isPlaying, activeStep]);

  const activeMeta = STATIONS_META[activeStep] || STATIONS_META[1];
  const currentStepData = SITE_CONTENT.howItWorks.steps[activeStep - 1];

  const handleSelectStep = (stepNumber: number) => {
    setActiveStep(stepNumber);
    startTimeRef.current = Date.now();
    setProgressPercent(0);
  };

  const handlePrev = () => {
    setActiveStep((prev) => (prev <= 1 ? 5 : prev - 1));
    startTimeRef.current = Date.now();
    setProgressPercent(0);
  };

  const handleNext = () => {
    setActiveStep((prev) => (prev >= 5 ? 1 : prev + 1));
    startTimeRef.current = Date.now();
    setProgressPercent(0);
  };

  // SVG Arc calculation for active progress ring
  // Angle for step 1 is -90 deg. Fraction of circle completed is (activeStep / 5)
  const circlePerimeter = 2 * Math.PI * 160;
  const strokeDashoffset = circlePerimeter - (circlePerimeter * (activeStep / 5));

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#F6FBF7]/80 border-y border-[#E2EDE5]/70 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#DCFCE7]/35 via-[#BBF7D0]/25 to-[#DCFCE7]/35 rounded-full blur-3xl pointer-events-none -z-0" 
      />

      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 relative z-10">
          <Badge variant="mint" size="md">
            {SITE_CONTENT.howItWorks.badge}
          </Badge>

          <h2 className="display-section font-extrabold text-[#0B1F14]">
            {SITE_CONTENT.howItWorks.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#3F5247] leading-relaxed">
            {SITE_CONTENT.howItWorks.subheadline}
          </p>
        </div>

        {/* Global Route Status Pill Bar */}
        <div className="max-w-4xl mx-auto mb-10 bg-white/90 backdrop-blur-md rounded-2xl border border-[#E2EDE5] px-4 py-3 shadow-xs flex flex-wrap items-center justify-between gap-3 relative z-10">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16A34A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#16A34A]"></span>
            </span>
            <span className="text-xs font-bold text-[#166534] tracking-wide">
              CIRCULAR ROUTE ENGINE: AUTOMATED ORBIT ACTIVE
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs text-[#6B7F73]">
            <span>Fast-track Setup: <strong className="text-[#0B1F14]">~14.5 mins total</strong></span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline font-mono text-[#16A34A] font-bold">5 WAYPOINT NODES</span>
          </div>
        </div>

        {/* Main Circular Route System Presentation (2 Columns on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 relative z-10">
          
          {/* LEFT: The Interactive Circular Orbital Radar System (Span 6) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-[440px] sm:max-w-[480px] aspect-square flex items-center justify-center select-none">
              
              {/* SVG Circular Rail & Animated Conduit Lines */}
              <svg 
                viewBox="0 0 480 480" 
                className="w-full h-full overflow-visible pointer-events-none"
              >
                <defs>
                  {/* Outer emerald gradient */}
                  <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#16A34A" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#22C55E" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#86EFAC" stopOpacity="0.8" />
                  </linearGradient>

                  <filter id="emeraldGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Concentric Background Guidance Rings */}
                <circle cx="240" cy="240" r="195" fill="none" stroke="#E2EDE5" strokeWidth="1" strokeDasharray="3 6" opacity="0.6" />
                <circle cx="240" cy="240" r="160" fill="none" stroke="#E2EDE5" strokeWidth="3" />
                <circle cx="240" cy="240" r="120" fill="none" stroke="#E2EDE5" strokeWidth="1" strokeDasharray="2 4" opacity="0.4" />
                
                {/* Active Luminous Circular Route Segment (Rotates smoothly to activeStep) */}
                <circle 
                  cx="240" 
                  cy="240" 
                  r="160" 
                  fill="none" 
                  stroke="url(#orbitGradient)" 
                  strokeWidth="5" 
                  strokeLinecap="round"
                  strokeDasharray={circlePerimeter}
                  strokeDashoffset={strokeDashoffset}
                  transform="rotate(-90 240 240)"
                  className="transition-all duration-700 ease-out"
                  filter="url(#emeraldGlow)"
                />

                {/* Continuous Orbiting Dashed Energy Ring */}
                <g className="animate-spin-slow origin-center">
                  <circle 
                    cx="240" 
                    cy="240" 
                    r="160" 
                    fill="none" 
                    stroke="#16A34A" 
                    strokeWidth="1.5" 
                    strokeDasharray="8 18" 
                    opacity="0.75" 
                  />
                </g>

                {/* Reverse Outer Ring */}
                <g className="animate-spin-reverse origin-center">
                  <circle 
                    cx="240" 
                    cy="240" 
                    r="195" 
                    fill="none" 
                    stroke="#86EFAC" 
                    strokeWidth="1" 
                    strokeDasharray="4 24" 
                    opacity="0.5" 
                  />
                </g>

                {/* Directional Chevrons along circular path */}
                {NODE_COORDINATES.map((node, i) => {
                  const nextNode = NODE_COORDINATES[(i + 1) % 5];
                  const midX = (node.x + nextNode.x) / 2;
                  const midY = (node.y + nextNode.y) / 2;
                  const isCurrentPass = activeStep === node.step;

                  return (
                    <circle 
                      key={i} 
                      cx={midX} 
                      cy={midY} 
                      r="2.5" 
                      fill={isCurrentPass ? "#16A34A" : "#BBF7D0"} 
                      className={isCurrentPass ? "animate-ping" : ""}
                    />
                  );
                })}
              </svg>

              {/* CENTER HUB CORE: Real-time Route State & Engine Display */}
              <div className="absolute w-44 sm:w-48 h-44 sm:h-48 rounded-full bg-white/95 backdrop-blur-md border border-[#BBF7D0] shadow-[0_16px_36px_-10px_rgba(22,163,74,0.18)] flex flex-col items-center justify-center p-4 text-center z-20">
                {/* Micro green radar pulse */}
                <div className="absolute -inset-2 rounded-full border border-[#16A34A]/20 animate-orbit-pulse pointer-events-none" />

                <div className="w-7 h-7 rounded-full bg-[#DCFCE7] text-[#166534] flex items-center justify-center mb-1.5 shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#16A34A]" />
                </div>

                <div className="text-xs font-mono font-bold text-[#166534] tracking-wider uppercase mb-0.5">
                  CIRCUIT PROGRESS
                </div>

                <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1F14] tracking-tight">
                  {activeStep * 20}%
                </div>

                <div className="text-xs font-bold text-[#16A34A] mt-0.5">
                  Step 0{activeStep} of 05
                </div>

                <div className="text-xs text-[#6B7F73] mt-1 truncate max-w-[130px]">
                  {currentStepData.title}
                </div>
              </div>

              {/* 5 CIRCULAR STATION NODES (Positioned absolutely around the SVG ring) */}
              {NODE_COORDINATES.map((node, idx) => {
                const stepNum = node.step;
                const isActive = activeStep === stepNum;
                const isPast = activeStep > stepNum;
                const stepData = SITE_CONTENT.howItWorks.steps[idx];

                // Convert SVG center coordinate (240) to percentage for responsive positioning
                const leftPercent = `${(node.x / 480) * 100}%`;
                const topPercent = `${(node.y / 480) * 100}%`;

                return (
                  <div
                    key={stepNum}
                    style={{ left: leftPercent, top: topPercent }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center"
                  >
                    {/* Active Radar Ripple */}
                    {isActive && (
                      <span 
                        aria-hidden="true" 
                        className="absolute -inset-2.5 rounded-full bg-[#16A34A]/30 animate-route-ping pointer-events-none" 
                      />
                    )}

                    {/* Circular Interactive Node Button */}
                    <button
                      type="button"
                      onClick={() => handleSelectStep(stepNum)}
                      aria-label={`Select Step ${stepNum}: ${stepData.title}`}
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-extrabold transition-all duration-300 cursor-pointer shadow-md group ${
                        isActive
                          ? 'bg-[#16A34A] text-white ring-4 ring-[#DCFCE7] scale-110 shadow-[0_10px_25px_-4px_rgba(22,163,74,0.4)]'
                          : isPast
                          ? 'bg-[#DCFCE7] text-[#166534] border-2 border-[#BBF7D0] hover:scale-105 hover:bg-[#BBF7D0]'
                          : 'bg-white text-[#3F5247] border-2 border-[#E2EDE5] hover:border-[#16A34A] hover:scale-105'
                      }`}
                    >
                      {isPast ? (
                        <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#16A34A]" />
                      ) : (
                        <span className="flex items-center gap-0.5 text-xs sm:text-sm">
                          {stepIcons[idx]}
                        </span>
                      )}
                    </button>

                    {/* Compact Label Below / Above Node */}
                    <div className={`mt-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold transition-all whitespace-nowrap shadow-2xs pointer-events-none ${
                      isActive
                        ? 'bg-[#0B1F14] text-white scale-105'
                        : isPast
                        ? 'bg-[#DCFCE7] text-[#166534]'
                        : 'bg-white text-[#6B7F73] border border-[#E2EDE5]'
                    }`}>
                      0{stepNum} • {stepData.title.split(' ')[0]}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Circular Orbit Controller Sub-bar */}
            <div className="flex items-center gap-3 mt-6 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#E2EDE5] shadow-2xs">
              <button
                type="button"
                onClick={handlePrev}
                className="p-1.5 rounded-full hover:bg-[#F6FBF7] text-[#3F5247] transition-colors cursor-pointer"
                aria-label="Previous Station"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#DCFCE7] hover:bg-[#BBF7D0] text-[#166534] transition-colors cursor-pointer"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-[#16A34A]" />
                    <span>Auto-Orbit Active</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-[#16A34A]" />
                    <span>Resume Auto-Orbit</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="p-1.5 rounded-full hover:bg-[#F6FBF7] text-[#3F5247] transition-colors cursor-pointer"
                aria-label="Next Station"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT: Active Station Dossier & Route Inspector (Span 6) */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#BBF7D0] shadow-[0_20px_45px_-12px_rgba(22,163,74,0.12)] relative"
              >
                {/* Header: Station Code & Estimated Setup Duration */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E2EDE5] pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-[#16A34A] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                      0{activeStep}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#166534]">
                      {activeMeta.code}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-[#166534] bg-[#DCFCE7] px-2.5 py-0.5 rounded-full border border-[#BBF7D0]">
                      Est. Duration: {activeMeta.duration}
                    </span>
                  </div>
                </div>

                {/* Station Title & Summary */}
                <div className="space-y-3 mb-6">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1F14] leading-tight">
                    {currentStepData.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#3F5247] leading-relaxed">
                    {currentStepData.summary}
                  </p>
                </div>

                {/* Technical Architecture Milestones */}
                <div className="space-y-2.5 mb-6">
                  <div className="text-xs font-bold text-[#6B7F73] uppercase tracking-wider flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#16A34A]" />
                    <span>Automated Protocol Checklist</span>
                  </div>

                  <div className="space-y-2">
                    {activeMeta.milestones.map((point, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0B1F14] bg-[#F6FBF7] p-2.5 rounded-xl border border-[#E2EDE5]">
                        <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                        <span className="font-medium">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Hint & Tech Specification Footnote */}
                <div className="p-3.5 rounded-xl bg-[#DCFCE7]/50 border border-[#BBF7D0] flex items-start gap-2.5 text-xs text-[#166534] mb-6">
                  <ShieldCheck className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold">Verified Specification:</strong>
                    <span>{activeMeta.techSpec}</span>
                  </div>
                </div>

                {/* Progress Ring / Step Timer Bar (When Auto-play is ON) */}
                {isPlaying && (
                  <div className="space-y-1.5 mb-6">
                    <div className="flex justify-between text-xs font-mono text-[#6B7F73]">
                      <span>Auto-advancing orbit in 4.5s...</span>
                      <span>{Math.round(progressPercent)}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#E2EDE5] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#16A34A] transition-all duration-75 ease-linear rounded-full"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Quick Interactive Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
                  <a
                    href="#pricing"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#16A34A] hover:bg-[#15803D] text-white shadow-md shadow-[#16A34A]/25 transition-all active:scale-95 text-center"
                  >
                    <span>Launch This Flow</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  {/* Manual Step Jump Buttons */}
                  <div className="flex items-center justify-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => handleSelectStep(num)}
                        className={`w-7 h-7 rounded-full text-xs font-bold transition-all cursor-pointer ${
                          activeStep === num
                            ? 'bg-[#16A34A] text-white shadow-xs scale-105'
                            : 'bg-[#F6FBF7] text-[#6B7F73] hover:bg-[#E2EDE5]'
                        }`}
                        aria-label={`Jump to step ${num}`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom 5-Station At-a-Glance Route Cards (Summary Grid) */}
        <div className="border-t border-[#E2EDE5] pt-12 relative z-10">
          <div className="text-center mb-6">
            <h3 className="text-sm sm:text-base font-bold text-[#0B1F14]">
              Complete End-to-End Route Timeline
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SITE_CONTENT.howItWorks.steps.map((step: HowItWorksStep) => {
              const stepNum = step.stepNumber;
              const isSelected = activeStep === stepNum;
              const isDone = activeStep > stepNum;

              return (
                <Card
                  key={stepNum}
                  surface="white"
                  hoverEffect={true}
                  onClick={() => handleSelectStep(stepNum)}
                  className={`p-4 flex flex-col justify-between cursor-pointer transition-all ${
                    isSelected
                      ? 'border-2 border-[#16A34A] shadow-md -translate-y-1 bg-[#F6FBF7]'
                      : isDone
                      ? 'border-[#BBF7D0]'
                      : 'border-[#E2EDE5]'
                  }`}
                >
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center justify-between">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-extrabold ${
                        isSelected 
                          ? 'bg-[#16A34A] text-white' 
                          : isDone 
                          ? 'bg-[#DCFCE7] text-[#166534]' 
                          : 'bg-[#F6FBF7] text-[#6B7F73]'
                      }`}>
                        {isDone ? '✓' : stepNum}
                      </span>
                      <span className="text-xs font-bold text-[#166534] bg-[#DCFCE7] px-2 py-0.5 rounded-full">
                        {STATIONS_META[stepNum]?.duration || '~2m'}
                      </span>
                    </div>

                    <h4 className={`text-sm font-bold transition-colors ${
                      isSelected ? 'text-[#16A34A]' : 'text-[#0B1F14]'
                    }`}>
                      {step.title}
                    </h4>

                    <p className="text-xs text-[#3F5247] leading-relaxed line-clamp-2">
                      {step.summary}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#E2EDE5]/70 flex items-start gap-1.5 text-xs font-semibold text-[#166534]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                    <span className="leading-snug">{step.actionHint}</span>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

      </Container>
    </section>
  );
};
