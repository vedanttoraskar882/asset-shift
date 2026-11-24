import React, { useState } from 'react';
import { USE_CASES } from '../data/useCases';
import { CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export const UseCasesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(USE_CASES[0].id);

  const currentCase = USE_CASES.find(c => c.id === activeTab) || USE_CASES[0];

  return (
    <div className="mt-20 pt-16 border-t border-border">
      
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-navy/5 text-navy border border-navy/10">
          Operational Scenarios
        </div>
        <h3 className="text-3xl font-extrabold text-navy tracking-tight">
          Designed for Real Meter Lifecycle Challenges
        </h3>
        <p className="text-sm sm:text-base text-content-secondary leading-relaxed">
          Explore how AssetShift's proposed assurance model responds to frequent cross-party operational breakdowns and transition risks.
        </p>
        <span className="inline-block text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-md">
          Illustrative applications of the planned product
        </span>
      </div>

      {/* Interactive Tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
          {USE_CASES.map((uc) => {
            const isActive = activeTab === uc.id;
            return (
              <button
                key={uc.id}
                onClick={() => setActiveTab(uc.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-navy text-white shadow-sm'
                    : 'text-content-secondary hover:text-navy hover:bg-slate-200/60'
                }`}
              >
                {uc.tabLabel}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Tab Content Card */}
      <div className="max-w-4xl mx-auto p-6 sm:p-8 bg-white rounded-3xl border border-border shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-border gap-2">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark bg-gold/10 px-2.5 py-1 rounded-md border border-gold/20">
              {currentCase.category}
            </span>
            <h4 className="text-2xl font-bold text-navy mt-2">
              {currentCase.title}
            </h4>
          </div>
        </div>

        <div className="py-6 border-b border-border space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Operational Scenario
          </span>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-800 leading-relaxed font-medium">
            {currentCase.scenario}
          </div>
        </div>

        <div className="py-6 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-navy flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-gold" />
            AssetShift's Proposed Response:
          </span>

          <ul className="space-y-3">
            {currentCase.proposedResponses.map((resp, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-content-primary">
                <CheckCircle2 className="w-4 h-4 text-status-success flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-slate-100">
          <div className="p-4 rounded-xl bg-gold/10 border border-gold/20 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5" />
            <p className="text-xs font-medium text-navy leading-relaxed">
              <strong>Assurance Value:</strong> {currentCase.impactSummary}
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};
