import React from 'react';
import { 
  CreditCard, 
  PackageX, 
  FileQuestion, 
  Tag, 
  Unlink, 
  RefreshCwOff, 
  AlertCircle 
} from 'lucide-react';

const PROBLEMS = [
  {
    icon: CreditCard,
    title: 'Continuing Rental Charges',
    description: 'When a removed meter is not reported to its owning Meter Asset Provider, rental charges may continue despite the asset no longer being installed.',
    impact: 'Ongoing financial leakage'
  },
  {
    icon: PackageX,
    title: 'Non-Return Charges',
    description: 'Removed meters without appropriate return or disposal evidence may attract non-return or lost-meter charges.',
    impact: 'Unbudgeted capital penalties'
  },
  {
    icon: FileQuestion,
    title: 'Incorrect Asset Ownership',
    description: 'Inconsistent MAP ownership records may lead to incorrect asset rental invoices.',
    impact: 'Disputed supplier liability'
  },
  {
    icon: Tag,
    title: 'Incorrect Meter Classification',
    description: 'Discrepancies in meter types and asset information may result in incorrect rental rates.',
    impact: 'Rate-tier overcharging'
  },
  {
    icon: Unlink,
    title: 'Fragmented Operational Records',
    description: 'Supplier, metering agent and MAP records may not reflect the same asset lifecycle status.',
    impact: 'Cross-party visibility blindspots'
  },
  {
    icon: RefreshCwOff,
    title: 'Migration-Related Exceptions',
    description: 'Open meter events may become lost, duplicated or reassigned when suppliers change systems or migrate to new industry arrangements.',
    impact: 'Transformation record drift'
  }
];

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 bg-background-light border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-navy/5 text-navy border border-navy/10">
            Industry Operational Challenge
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            One Meter. Multiple Organisations. Disconnected Records.
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
            Every meter exchange, installation or removal involves multiple organisations, each maintaining its own records. When responsibilities are not completed or evidence is not updated across parties, avoidable charges can arise.
          </p>
        </div>

        {/* 6 Problem Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEMS.map((problem, idx) => {
            const Icon = problem.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 sm:p-7 bg-white rounded-2xl border border-border hover:border-gold/50 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-navy group-hover:text-gold flex items-center justify-center text-navy transition-colors mb-5">
                    <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2.5">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-content-secondary leading-relaxed">
                    {problem.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-400 uppercase tracking-wider text-[10px]">
                    Root Risk
                  </span>
                  <span className="font-medium text-status-danger bg-red-50 px-2 py-0.5 rounded-full border border-red-100">
                    {problem.impact}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlighted Statement Banner */}
        <div className="mt-12 max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-navy to-navy-light text-white shadow-xl flex flex-col sm:flex-row items-center gap-5 border border-white/10">
          <div className="w-12 h-12 rounded-xl bg-gold/20 text-gold flex items-center justify-center flex-shrink-0">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div className="text-center sm:text-left space-y-1">
            <p className="text-base sm:text-lg font-semibold text-slate-100">
              Traditional reconciliation often identifies these problems after invoices arrive.
            </p>
            <p className="text-sm text-gold-light font-medium">
              AssetShift is designed to identify missing obligations earlier.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
