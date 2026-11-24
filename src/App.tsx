import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { InnovationSection } from './components/InnovationSection';
import { BenefitsSection } from './components/BenefitsSection';
import { WhyNowSection } from './components/WhyNowSection';
import { AboutSection } from './components/AboutSection';
import { FounderSection } from './components/FounderSection';
import { RoadmapSection } from './components/RoadmapSection';
import { PlatformSection } from './components/PlatformSection';
import { HowItWorksContainer } from './components/HowItWorksContainer';
import { MarketPricingContainer } from './components/MarketPricingContainer';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { RequestPilotModal } from './components/RequestPilotModal';
import { PrivacyNoticeModal } from './components/PrivacyNoticeModal';
import { TermsModal } from './components/TermsModal';

export const App: React.FC = () => {
  const [isPilotModalOpen, setIsPilotModalOpen] = useState(false);
  const [pilotContext, setPilotContext] = useState<string | undefined>(undefined);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const handleOpenPilotModal = (context?: string) => {
    setPilotContext(context);
    setIsPilotModalOpen(true);
  };

  const handleClosePilotModal = () => {
    setIsPilotModalOpen(false);
    setPilotContext(undefined);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background-light text-content-primary flex flex-col font-sans selection:bg-gold selection:text-white">
      {/* Sticky Top Header */}
      <Header onRequestPilot={() => handleOpenPilotModal('Header CTA')} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Section 1: Home */}
        <Hero
          onRequestPilot={() => handleOpenPilotModal('Hero Primary CTA')}
          onExplorePlatform={() => scrollToSection('platform')}
        />

        {/* 6.2 Problem Section */}
        <ProblemSection />

        {/* 6.3 Core Business Solution */}
        <SolutionSection />

        {/* 6.4 Core Innovation Section */}
        <InnovationSection />

        {/* 6.5 Key Benefits Section */}
        <BenefitsSection />

        {/* 6.6 Why Now Section */}
        <WhyNowSection />

        {/* Section 2: About (7.1 About, 7.2 Founder, 7.3 Roadmap) */}
        <AboutSection />
        <FounderSection />
        <RoadmapSection />

        {/* Section 3: Platform (8 Modules, 9 Dashboard Preview, 10 Architecture) */}
        <PlatformSection />

        {/* Section 4: How It Works (11 Stages, 11.1 Example, 11.2 Use Cases, 11.3 Boundary) */}
        <HowItWorksContainer />

        {/* Section 5: Market & Pricing (12.1 Target Market, 12.2 Proposed Pricing) */}
        <MarketPricingContainer
          onRequestPilot={(context) => handleOpenPilotModal(context || 'Pricing CTA')}
        />

        {/* Section 6: FAQ */}
        <FAQSection />

        {/* Section 14: Final CTA */}
        <FinalCTA
          onRequestPilot={() => handleOpenPilotModal('Final Banner CTA')}
          onExplorePricing={() => scrollToSection('market-pricing')}
        />
      </main>

      {/* Section 7: Footer */}
      <Footer
        onRequestPilot={(context) => handleOpenPilotModal(context || 'Footer Link')}
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
        onOpenTerms={() => setIsTermsModalOpen(true)}
      />

      {/* Modals */}
      <RequestPilotModal
        isOpen={isPilotModalOpen}
        onClose={handleClosePilotModal}
        initialContext={pilotContext}
      />

      <PrivacyNoticeModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />

      <TermsModal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
      />
    </div>
  );
};

export default App;
