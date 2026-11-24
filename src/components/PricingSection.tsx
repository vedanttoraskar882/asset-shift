import React from 'react';
import { MAIN_PRICING_PLANS, ADDITIONAL_COMMERCIAL_OPTIONS, PRICING_DISCLAIMER } from '../data/pricing';
import { CheckCircle2, ArrowRight, Info } from 'lucide-react';

interface PricingSectionProps {
  onRequestPilot: (context?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onRequestPilot }) => {
  return (
    <div className="mt-20 pt-16 border-t border-border">
      
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold/10 text-gold-dark border border-gold/20">
          Commercial Framework
        </div>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
          Flexible Commercial Models for Complex Meter Estates
        </h3>
        <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
          AssetShift proposes enterprise pricing based on the number of meter points monitored, integration requirements, migration scope and future counterparty participation.
        </p>
      </div>

      {/* 3 Main Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {MAIN_PRICING_PLANS.map((plan) => (
          <div
            key={plan.id}
            className={`relative p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between ${
              plan.isPrimary
                ? 'bg-white border-2 border-gold shadow-2xl ring-4 ring-gold/10'
                : 'bg-white border border-border hover:border-slate-300 shadow-md hover:shadow-xl'
            }`}
          >
            {plan.isPrimary && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold text-navy-dark text-xs font-extrabold uppercase tracking-wider shadow-sm">
                Core SaaS Model
              </div>
            )}

            <div>
              <div className="pb-4 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {plan.billing}
                </span>
                <h4 className="text-xl font-bold text-navy mt-1">
                  {plan.title}
                </h4>
              </div>

              <div className="py-6">
                <div className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight font-sans">
                  {plan.price}
                </div>
                <p className="text-xs text-content-secondary mt-3 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="pt-2 pb-6 border-t border-slate-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Planned Inclusions:
                </span>
                <ul className="space-y-2.5">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-content-primary">
                      <CheckCircle2 className="w-4 h-4 text-status-success flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={() => onRequestPilot(`Pricing Plan: ${plan.title}`)}
                className={`w-full py-3 px-5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 group ${
                  plan.isPrimary
                    ? 'bg-navy hover:bg-navy-light text-white shadow-md hover:shadow-lg'
                    : 'bg-slate-100 hover:bg-navy hover:text-white text-navy'
                }`}
              >
                <span>{plan.ctaText}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Commercial Options Header */}
      <div className="mt-16 max-w-5xl mx-auto">
        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 text-center mb-6">
          Additional Commercial Options
        </h4>

        {/* 3 Smaller Commercial Option Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ADDITIONAL_COMMERCIAL_OPTIONS.map((opt) => (
            <div
              key={opt.id}
              className="p-6 rounded-2xl bg-slate-50 border border-border hover:border-slate-300 hover:bg-white transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold-dark bg-gold/10 px-2.5 py-0.5 rounded border border-gold/20">
                  {opt.pricing}
                </span>
                <h5 className="text-base font-bold text-navy mt-2.5 mb-2">
                  {opt.title}
                </h5>
                <p className="text-xs text-content-secondary leading-relaxed mb-4">
                  {opt.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/60">
                <button
                  onClick={() => onRequestPilot(`Commercial Option: ${opt.title}`)}
                  className="w-full py-2 px-3 text-xs font-semibold text-navy hover:text-gold-dark bg-white border border-border hover:border-gold/50 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>{opt.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Required Prominent Pricing Disclaimer */}
      <div className="mt-12 max-w-4xl mx-auto p-5 rounded-2xl bg-slate-100 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
        <Info className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          {PRICING_DISCLAIMER}
        </p>
      </div>

    </div>
  );
};
