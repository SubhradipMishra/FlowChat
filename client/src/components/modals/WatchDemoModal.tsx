import React, { useState } from 'react';
import { Play, Pause, CheckCircle2, Bot, ArrowRight } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';

export interface WatchDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTrial: () => void;
}

export const WatchDemoModal: React.FC<WatchDemoModalProps> = ({
  isOpen,
  onClose,
  onOpenTrial,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeStep, setActiveStep] = useState(0);

  const demoTourSteps = [
    {
      time: "0:00 - 0:35",
      title: "1. Connecting Official WhatsApp Number",
      summary: "Authorize via Meta Business Manager in 60 seconds with zero downtime or QR code scanning.",
      highlight: "Cloud API Webhook verified",
    },
    {
      time: "0:35 - 1:15",
      title: "2. Ingesting Business Knowledge & Rules",
      summary: "Upload PDF price list and set prompt guardrails to ensure responses match brand tone.",
      highlight: "RAG Accuracy > 99%",
    },
    {
      time: "1:15 - 2:00",
      title: "3. Live Lead Capture & Agent Handoff",
      summary: "Customer asks for enterprise pricing; AI qualifies budget and instantly notifies Senior Agent Priya.",
      highlight: "Zero context loss handoff",
    },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="FlowChat AI Product Tour (2-Min Demo)" maxWidth="xl">
      <div className="space-y-6">
        {/* Mock Video Player Canvas */}
        <div className="relative rounded-2xl overflow-hidden bg-[#0B1F14] aspect-video border border-[#16A34A]/40 shadow-2xl flex flex-col justify-between p-6 text-white">
          {/* Top Player Status */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-pulse"></span>
              <span className="font-bold text-[#BBF7D0]">Live Demonstration</span>
            </div>
            <span className="bg-white/10 px-2.5 py-1 rounded-md text-[11px] font-mono">
              Official WhatsApp Cloud API
            </span>
          </div>

          {/* Central Interactive Simulation State */}
          <div className="text-center space-y-3 max-w-lg mx-auto">
            <div className="w-14 h-14 rounded-full bg-[#16A34A] text-white flex items-center justify-center mx-auto shadow-lg">
              <Bot className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-extrabold text-white">
              {demoTourSteps[activeStep].title}
            </h4>
            <p className="text-sm text-[#DCFCE7]/90 leading-relaxed">
              {demoTourSteps[activeStep].summary}
            </p>
            <div className="inline-block bg-[#1E3A29] text-[#BBF7D0] px-3 py-1 rounded-full text-xs font-semibold border border-[#16A34A]">
              ✓ {demoTourSteps[activeStep].highlight}
            </div>
          </div>

          {/* Bottom Player Controls */}
          <div className="space-y-2">
            <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-[#16A34A] h-full transition-all duration-300" 
                style={{ width: `${((activeStep + 1) / demoTourSteps.length) * 100}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-xs text-white/70">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="hover:text-white flex items-center gap-1 font-semibold"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isPlaying ? 'Pause' : 'Play'}</span>
              </button>
              <div className="flex gap-2">
                {demoTourSteps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                      activeStep === i ? 'bg-[#16A34A] text-white' : 'bg-white/10 text-white/60 hover:text-white'
                    }`}
                  >
                    Step {i + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-[#E2EDE5]">
          <div className="flex items-center gap-2 text-xs text-[#3F5247]">
            <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
            <span>Ready to automate your inquiries? 14-day free trial.</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
              className="flex-1 sm:flex-none"
            >
              Close
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                onClose();
                onOpenTrial();
              }}
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              className="flex-1 sm:flex-none"
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
