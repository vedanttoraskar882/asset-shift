import React from 'react';
import { ArrowRight, ChevronRight, Zap, ShieldCheck, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onRequestPilot: () => void;
  onExplorePricing: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onRequestPilot, onExplorePricing }) => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-navy via-navy-deep to-navy-dark text-white overflow-hidden border-t border-white/10">
      {/* Background Grid Pattern & Radial Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-gold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Collaborative Market Validation</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Help Shape the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">Meter-Asset Assurance</span>
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          AssetShift is seeking electricity suppliers, Meter Asset Providers and metering industry professionals interested in contributing to the development and validation of a new approach to meter lifecycle assurance.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onRequestPilot}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base text-navy-dark bg-gold hover:bg-gold-light active:bg-gold-dark shadow-xl shadow-gold/25 hover:shadow-gold/40 transition-all flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy-dark"
          >
            <span>Request a Pilot</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onExplorePricing}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-base text-white bg-white/10 hover:bg-white/15 active:bg-white/5 border border-white/20 transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <span>Explore Proposed Pricing</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>
        </div>

        {/* Supporting Assurance Statement */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-gold" />
            Read-only data access
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-gold" />
            UK electricity market focus
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            Deterministic obligation rules
          </span>
        </div>

      </div>
    </section>
  );
};
