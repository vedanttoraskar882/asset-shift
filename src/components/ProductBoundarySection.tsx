import React from 'react';
import { Check, X } from 'lucide-react';

const WHAT_IT_DOES = [
  'Monitor meter lifecycle obligations',
  'Match records across organisations',
  'Identify missing operational evidence',
  'Estimate financial exposure',
  'Support invoice challenges',
  'Support migration assurance'
];

const WHAT_IT_DOES_NOT = [
  'Replace existing billing platforms',
  'Replace Customer Information Systems',
  'Replace field-service management systems',
  'Submit industry data flows',
  'Act as a regulated supplier agent',
  'Perform regulated market roles',
  'Independently verify physical engineer actions',
  'Guarantee prevention of every incorrect charge'
];

export const ProductBoundarySection: React.FC = () => {
  return (
    <div className="mt-20 pt-16 border-t border-border">
      
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-navy/5 text-navy border border-navy/10">
          Clear Architectural Boundaries
        </div>
        <h3 className="text-3xl font-extrabold text-navy tracking-tight">
          Works Alongside Existing Systems
        </h3>
        <p className="text-sm sm:text-base text-content-secondary leading-relaxed">
          AssetShift is designed as a read-only assurance layer that complements existing electricity supplier platforms and operational systems, without requiring system replacement.
        </p>
      </div>

      {/* Two Column Boundary Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        {/* Column 1: Designed To Do */}
        <div className="p-8 rounded-3xl bg-emerald-50/50 border border-emerald-200/80 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-status-success text-white flex items-center justify-center shadow-sm">
                <Check className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h4 className="text-lg font-bold text-navy">
                What AssetShift Is Designed To Do
              </h4>
            </div>

            <ul className="space-y-3.5">
              {WHAT_IT_DOES.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-content-primary">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-status-success flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-emerald-200/60 text-xs text-emerald-800 font-medium">
            Core posture: Non-intrusive, read-only lifecycle assurance.
          </div>
        </div>

        {/* Column 2: Does NOT Do */}
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-slate-400 text-white flex items-center justify-center shadow-sm">
                <X className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h4 className="text-lg font-bold text-slate-800">
                What AssetShift Does NOT Do
              </h4>
            </div>

            <ul className="space-y-3.5">
              {WHAT_IT_DOES_NOT.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                    ✕
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-slate-500 font-medium">
            Strict boundaries: Does not replace core transactional platforms or regulated market roles.
          </div>
        </div>

      </div>

    </div>
  );
};
