import React from 'react';
import { 
  FileCheck, 
  Clock, 
  GitMerge, 
  RefreshCw, 
  Sparkles
} from 'lucide-react';

const INNOVATIONS = [
  {
    icon: FileCheck,
    tag: 'Core Innovation 01',
    title: 'Obligation Templates',
    description: 'Every authorised meter exchange, removal, installation, de-energisation or change of MAP generates a versioned set of obligations with defined responsibilities, evidence requirements and deadlines.',
    highlight: 'Unlike conventional record comparisons, the proposed approach is designed to identify what should have happened but has not.',
    accentColor: 'from-sky-500/10 to-transparent'
  },
  {
    icon: Clock,
    tag: 'Core Innovation 02',
    title: 'Liability Clock',
    description: 'A configurable financial exposure mechanism designed to calculate the cost of breached obligations in pounds per day using applicable contractual rates and cost functions.',
    highlight: 'Exceptions are prioritised by financial value and urgency, highlighting high-leakage events first.',
    accentColor: 'from-amber-500/10 to-transparent'
  },
  {
    icon: GitMerge,
    tag: 'Core Innovation 03',
    title: 'Cross-Party Meter-Level Matching',
    description: 'Connects supplier job authorisations, metering agent records, MAP asset registers and invoices using identifiers such as MPAN, meter serial number, MAP ID and relevant dates.',
    highlight: 'Addresses information gaps between organisations rather than only within a single supplier’s internal systems.',
    accentColor: 'from-emerald-500/10 to-transparent'
  },
  {
    icon: RefreshCw,
    tag: 'Core Innovation 04',
    title: 'Migration Assurance Mode',
    description: 'Designed to capture open meter obligations before a platform or MHHS migration and revalidate those obligations after migration.',
    highlight: 'Helps identify events that may have been lost, duplicated or reassigned during major platform cut-overs.',
    accentColor: 'from-purple-500/10 to-transparent'
  }
];

export const InnovationSection: React.FC = () => {
  return (
    <section className="py-20 bg-background-light border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-navy/5 text-navy border border-navy/10">
            Differentiated Technology
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            What Makes AssetShift Different?
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
            Conventional reconciliation looks backward at disconnected invoice line items. AssetShift proposes a deterministic, forward-looking assurance layer anchored on meter lifecycle obligations.
          </p>
        </div>

        {/* 4 Innovation Feature Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {INNOVATIONS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative p-8 bg-white rounded-2xl border border-border hover:border-gold/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Subtle top corner gradient */}
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${item.accentColor} rounded-bl-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-60`} />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-navy text-gold flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold font-mono tracking-wider text-slate-400 uppercase bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-navy mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-content-secondary leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <p className="text-xs font-medium text-navy leading-normal">
                      {item.highlight}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
