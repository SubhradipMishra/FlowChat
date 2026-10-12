import { useState } from 'react';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { SocialProof } from './components/sections/SocialProof';
import { ProblemSection } from './components/sections/ProblemSection';
import { SolutionOverview } from './components/sections/SolutionOverview';
import { FeaturesGrid } from './components/sections/FeaturesGrid';
import { HowItWorks } from './components/sections/HowItWorks';
import { InteractiveWorkflowDemo } from './components/sections/InteractiveWorkflowDemo';
import { HumanHandoffSection } from './components/sections/HumanHandoffSection';
import { UseCasesSection } from './components/sections/UseCasesSection';
import { AnalyticsPreview } from './components/sections/AnalyticsPreview';
import { TrustCompliance } from './components/sections/TrustCompliance';
import { PricingSection } from './components/sections/PricingSection';
import { FaqSection } from './components/sections/FaqSection';
import { FinalCtaBand } from './components/sections/FinalCtaBand';
import { Footer } from './components/sections/Footer';
import { WatchDemoModal } from './components/modals/WatchDemoModal';
import { TrialSignupModal } from './components/modals/TrialSignupModal';
import { LoginModal } from './components/modals/LoginModal';

export function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('Growth');

  const handleOpenTrialWithPlan = (planName?: string) => {
    if (planName) setSelectedPlan(planName);
    setIsTrialModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#3F5247] selection:bg-[#DCFCE7] selection:text-[#0B1F14]">
      {/* 1. Sticky Navigation Bar */}
      <Navbar
        onOpenTrialModal={() => handleOpenTrialWithPlan()}
        onOpenLoginModal={() => setIsLoginModalOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onOpenTrialModal={() => handleOpenTrialWithPlan()}
          onOpenDemoModal={() => setIsDemoModalOpen(true)}
        />

        {/* 3. Social Proof Strip */}
        <SocialProof />

        {/* 4. Problem Section */}
        <ProblemSection />

        {/* 5. Solution Overview */}
        <SolutionOverview />

        {/* 6. Features Grid (Bento Layout) */}
        <FeaturesGrid />

        {/* 7. How It Works (5 Numbered Steps) */}
        <HowItWorks />

        {/* 8. Interactive Workflow Demo (Tabbed) */}
        <InteractiveWorkflowDemo />

        {/* 9. Human + AI Handoff Deep Dive */}
        <HumanHandoffSection />

        {/* 10. Industry Use Cases */}
        <UseCasesSection />

        {/* 11. Analytics Preview Dashboard */}
        <AnalyticsPreview />

        {/* 12. Trust, Security & Compliance */}
        <TrustCompliance />

        {/* 13. Pricing & Feature Comparison */}
        <PricingSection onSelectTier={(plan) => handleOpenTrialWithPlan(plan)} />

        {/* 14. Accessible FAQ Accordion */}
        <FaqSection />

        {/* 15. Final High-Impact CTA Band */}
        <FinalCtaBand />
      </main>

      {/* 16. Footer with Compliance Disclaimers */}
      <Footer />

      {/* Modals */}
      <WatchDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        onOpenTrial={() => handleOpenTrialWithPlan()}
      />

      <TrialSignupModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
        initialPlan={selectedPlan}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSwitchToTrial={() => handleOpenTrialWithPlan()}
      />
    </div>
  );
}

export default App;
