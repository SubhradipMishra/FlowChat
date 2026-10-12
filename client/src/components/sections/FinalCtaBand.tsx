import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Container } from '../ui/Container';
import { SITE_CONTENT } from '../../data/content';

export const FinalCtaBand: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid work email address.');
      return;
    }

    setError('');
    // TODO: connect API endpoint (e.g. POST /api/auth/register or waitlist lead)
    console.log('[FlowChat AI] Lead captured from final CTA:', email);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.75 },
        colors: ['#16A34A', '#BBF7D0', '#DCFCE7', '#FFFFFF'],
      });
    } catch {
      // Ignore if canvas-confetti is not loaded
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-[#16A34A] via-[#15803D] to-[#166534] text-white relative overflow-hidden">
      {/* Background radial highlight */}
      <div 
        aria-hidden="true" 
        className="absolute -top-32 -left-32 w-96 h-96 bg-[#BBF7D0]/20 rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#DCFCE7]/15 rounded-full blur-3xl pointer-events-none" 
      />

      <Container size="narrow">
        <div className="text-center space-y-6 relative z-10">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-xs text-xs font-semibold text-[#DCFCE7] border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-[#BBF7D0]" />
            <span>Zero Commitment 14-Day Free Trial</span>
          </div>

          <h2 className="display-section font-extrabold tracking-tight text-white">
            {SITE_CONTENT.ctaBanner.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#DCFCE7] max-w-xl mx-auto leading-relaxed">
            {SITE_CONTENT.ctaBanner.subheadline}
          </p>

          {/* Email Capture Form / Success State */}
          <div className="pt-2 max-w-md mx-auto">
            {submitted ? (
              <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center space-y-2 animate-in zoom-in-95 duration-200">
                <div className="w-10 h-10 rounded-full bg-white text-[#16A34A] flex items-center justify-center mx-auto font-bold">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-white">Check Your Inbox!</h3>
                <p className="text-xs sm:text-sm text-[#DCFCE7]">
                  We've sent your magic onboarding link to <span className="font-semibold text-white">{email}</span>.
                </p>
                <div className="text-[10px] text-white/60 font-mono pt-1">
                  // TODO: connect API endpoint to trigger automatic workspace provision
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-2 bg-white/10 backdrop-blur-md p-1.5 rounded-2xl border border-white/25 shadow-lg">
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 text-white/60 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError('');
                      }}
                      placeholder={SITE_CONTENT.ctaBanner.formPlaceholder}
                      className="w-full pl-10 pr-4 py-3 bg-white text-[#0B1F14] placeholder-[#6B7F73] text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-white"
                      aria-label="Work email address"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#0B1F14] hover:bg-[#07140D] text-white text-sm font-bold px-6 py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm shrink-0"
                  >
                    <span>{SITE_CONTENT.ctaBanner.buttonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {error && (
                  <p className="text-xs text-[#FEF3C7] font-semibold text-left pl-2">
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Perks Guarantee Strip */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#DCFCE7]">
            {SITE_CONTENT.ctaBanner.perks.map((perk, i) => (
              <div key={i} className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#BBF7D0] shrink-0" />
                <span>{perk}</span>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};
