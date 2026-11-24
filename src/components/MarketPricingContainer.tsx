import React from 'react';
import { MarketSection } from './MarketSection';
import { PricingSection } from './PricingSection';

interface MarketPricingContainerProps {
  onRequestPilot: (context?: string) => void;
}

export const MarketPricingContainer: React.FC<MarketPricingContainerProps> = ({ onRequestPilot }) => {
  return (
    <section id="market-pricing" className="py-20 bg-background-light border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MarketSection />
        <PricingSection onRequestPilot={onRequestPilot} />
      </div>
    </section>
  );
};
