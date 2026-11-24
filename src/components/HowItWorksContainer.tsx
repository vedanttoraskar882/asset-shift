import React from 'react';
import { HowItWorksSection } from './HowItWorksSection';
import { ObligationExample } from './ObligationExample';
import { UseCasesSection } from './UseCasesSection';
import { ProductBoundarySection } from './ProductBoundarySection';

export const HowItWorksContainer: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HowItWorksSection />
        <ObligationExample />
        <UseCasesSection />
        <ProductBoundarySection />
      </div>
    </section>
  );
};
