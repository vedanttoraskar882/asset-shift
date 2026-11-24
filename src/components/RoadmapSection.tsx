import React from 'react';
import { ROADMAP_PHASES } from '../data/roadmap';

export const RoadmapSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold/10 text-gold-dark border border-gold/20">
            Planned Delivery Schedule
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            Our Planned Development Roadmap
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
            A staged delivery pathway focusing on deterministic rules-first validation, controlled design partner pilots, and structured counterparty connectivity.
          </p>
          <div className="inline-block p-2 rounded-lg bg-amber-50 text-status-warning border border-amber-200 text-xs font-medium">
            Note: All milestones, phases and timelines represent forward-looking engineering plans and are subject to pilot feedback and validation.
          </div>
        </div>

        {/* Roadmap Cards Grid (Responsive layout) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROADMAP_PHASES.map((phase) => (
            <div
              key={phase.id}
              className="relative p-6 sm:p-7 rounded-2xl bg-slate-50 border border-border hover:border-gold/50 hover:bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Phase Number & Timeline */}
                <div className="flex items-center justify-between pb-4 border-b border-border mb-4">
                  <span className="w-8 h-8 rounded-lg bg-navy text-gold font-bold text-xs flex items-center justify-center font-mono">
                    {phase.phaseNumber}
                  </span>
                  <span className="text-xs font-bold text-navy bg-gold/15 px-2.5 py-1 rounded-md border border-gold/30">
                    {phase.timeline}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Status: {phase.status}
                  </span>
                  <h3 className="text-lg font-bold text-navy mt-0.5 leading-snug">
                    {phase.title}
                  </h3>
                </div>

                {/* Objectives */}
                <ul className="mt-4 space-y-2.5 text-xs text-content-secondary">
                  {phase.objectives.map((obj, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                      <span className="leading-relaxed">{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Phase {phase.phaseNumber}</span>
                <span className="font-semibold text-navy">Planned Scope</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
