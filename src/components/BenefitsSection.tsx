import React from 'react';
import { 
  Search, 
  Eye, 
  ArrowUpDown, 
  FileCheck2, 
  Clock4, 
  FolderSearch2, 
  Share2, 
  ShieldCheck 
} from 'lucide-react';

const INTENDED_BENEFITS = [
  {
    icon: Search,
    title: 'Earlier Identification of Avoidable Charges',
    description: 'Supports earlier identification of missed meter notifications, unreturned assets, and disconnected rental records before unbudgeted charges accumulate.'
  },
  {
    icon: Eye,
    title: 'Improved Visibility of Incomplete Events',
    description: 'Designed to help operational teams spot open physical exchanges where subsequent counterparty evidence has stalled or failed to progress.'
  },
  {
    icon: ArrowUpDown,
    title: 'Financially Prioritised Exceptions',
    description: 'Intended to rank operational exceptions by estimated daily exposure so analysts focus immediate investigation on the highest financial leakage risk.'
  },
  {
    icon: FileCheck2,
    title: 'Stronger MAP Invoice Validation',
    description: 'Designed to test incoming monthly rental and non-return lines against date-effective meter lifecycle events, generating structured challenge files.'
  },
  {
    icon: Clock4,
    title: 'Reduced Manual Reconciliation Effort',
    description: 'Supports energy revenue assurance teams by automating time-consuming cross-party spreadsheet checks into repeatable obligation rules.'
  },
  {
    icon: FolderSearch2,
    title: 'Improved Evidence Traceability',
    description: 'Intended to assemble job orders, industry flows, contractor logs, and counterparty communications into unified, audit-ready evidence packs.'
  },
  {
    icon: Share2,
    title: 'Better Cross-Party Visibility',
    description: 'Designed to help bridge the operational divide between suppliers, metering equipment managers, and asset providers through shared event context.'
  },
  {
    icon: ShieldCheck,
    title: 'Greater Confidence During Migrations',
    description: 'Supports suppliers navigating major platform modernisations and MHHS transitions by auditing open meter events before and after cut-over.'
  }
];

export const BenefitsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold/10 text-gold-dark border border-gold/20">
            Intended Operational Value
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            Designed to Strengthen Financial and Operational Control
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
            AssetShift focuses on establishing operational traceability and preventing preventable leakage through structured, forward-looking assurance.
          </p>
        </div>

        {/* 8 Benefits Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INTENDED_BENEFITS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-50 border border-border hover:border-navy/30 hover:bg-white hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-navy/5 text-navy flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-navy" />
                  </div>
                  <h3 className="text-base font-bold text-navy mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-content-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on claims discipline */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400 italic">
            Note: All benefits reflect intended capabilities of the proposed software platform. Actual operational and financial outcomes remain subject to supplier estate size, contractual terms, and pilot validation.
          </p>
        </div>

      </div>
    </section>
  );
};
