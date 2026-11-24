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

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 bg-background-light border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-navy/5 text-navy border border-navy/10">
            Industry Operational Challenge
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight">
            One Meter. Multiple Organisations. Disconnected Records.
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
            Every meter exchange, installation or removal involves multiple organisations, each maintaining its own records. When responsibilities are not completed or evidence is not updated across parties, avoidable charges can arise.
          </p>
        </div>

        {/* Bento Grid Layout (Visual Variety instead of 6 identical cards) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Featured Continuing Rental Charges (Span 7 cols) */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-white border border-border hover:border-gold/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-navy/5 text-navy group-hover:bg-navy group-hover:text-gold flex items-center justify-center transition-colors">
                  <CreditCard className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-status-danger border border-red-200">
                  Primary Leakage Driver
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-navy mb-3">
                1. Continuing Rental Charges
              </h3>
              <p className="text-sm text-content-secondary leading-relaxed max-w-xl">
                When a removed meter is not reported to its owning Meter Asset Provider, rental charges may continue despite the asset no longer being installed.
              </p>

              {/* Visual Lifecycle Breakdown */}
              <div className="mt-6 p-4.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Operational Disconnect Mechanics:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                    <span className="font-semibold text-navy block">Physical Removal</span>
                    <span className="text-[11px] text-slate-500 mt-0.5 block">Old meter disconnected on-site</span>
                  </div>
                  <div className="p-3 bg-red-50/60 rounded-xl border border-red-200">
                    <span className="font-semibold text-status-danger block">Notice Not Received</span>
                    <span className="text-[11px] text-red-600 mt-0.5 block">MAP unaware of exchange</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                    <span className="font-semibold text-navy block">Rental Continues</span>
                    <span className="text-[11px] text-slate-500 mt-0.5 block">Invoices arrive months later</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <span>Financial consequence: Ongoing monthly rental drag</span>
              <span className="font-semibold text-navy">Avoidable Accumulation</span>
            </div>
          </div>

          {/* Card 2: Non-Return Charges (Span 5 cols) */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-border hover:border-gold/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-navy/5 text-navy group-hover:bg-navy group-hover:text-gold flex items-center justify-center transition-colors">
                  <PackageX className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-50 text-status-warning border border-amber-200">
                  Capital Penalty
                </span>
              </div>

              <h3 className="text-xl font-bold text-navy mb-3">
                2. Non-Return Charges
              </h3>
              <p className="text-sm text-content-secondary leading-relaxed">
                Removed meters without appropriate return or disposal evidence may attract non-return or lost-meter charges under asset provider contracts.
              </p>

              <div className="mt-6 p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60 text-xs text-amber-900 leading-relaxed font-medium">
                Unreturned asset invoices often arrive as large unbudgeted batch penalties when evidence trail is fragmented between field depots.
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <span>Impact: Lump-sum non-return penalties</span>
              <span className="font-semibold text-navy">Evidence Gap</span>
            </div>
          </div>

          {/* Card 3: Incorrect Asset Ownership (Span 4 cols) */}
          <div className="lg:col-span-4 p-7 rounded-3xl bg-white border border-border hover:border-gold/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 rounded-xl bg-navy/5 text-navy group-hover:bg-navy group-hover:text-gold flex items-center justify-center mb-5 transition-colors">
                <FileQuestion className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2.5">
                3. Incorrect Asset Ownership
              </h3>
              <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                Inconsistent MAP ownership records may lead to incorrect asset rental invoices billed to suppliers who do not hold responsibility.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
              Risk: Disputed counterparty liabilities
            </div>
          </div>

          {/* Card 4: Incorrect Meter Classification (Span 4 cols) */}
          <div className="lg:col-span-4 p-7 rounded-3xl bg-white border border-border hover:border-gold/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 rounded-xl bg-navy/5 text-navy group-hover:bg-navy group-hover:text-gold flex items-center justify-center mb-5 transition-colors">
                <Tag className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2.5">
                4. Incorrect Meter Classification
              </h3>
              <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                Discrepancies in meter types, phase specifications and asset technical details may result in incorrect rental rate-tier application.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
              Risk: Systematic rate-tier overcharging
            </div>
          </div>

          {/* Card 5: Fragmented Operational Records (Span 4 cols) */}
          <div className="lg:col-span-4 p-7 rounded-3xl bg-white border border-border hover:border-gold/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 rounded-xl bg-navy/5 text-navy group-hover:bg-navy group-hover:text-gold flex items-center justify-center mb-5 transition-colors">
                <Unlink className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2.5">
                5. Fragmented Operational Records
              </h3>
              <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                Supplier, metering agent and MAP records may not reflect the same asset lifecycle status, creating operational blindspots.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
              Risk: Multi-party data misalignment
            </div>
          </div>

          {/* Card 6: Migration-Related Exceptions (Span 12 cols - Wide Feature Card) */}
          <div className="lg:col-span-12 p-8 sm:p-9 rounded-3xl bg-gradient-to-r from-slate-900 to-navy text-white shadow-xl border border-slate-700/80 flex flex-col lg:flex-row items-center justify-between gap-8 group">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold/20 text-gold border border-gold/30">
                <RefreshCwOff className="w-3.5 h-3.5" />
                Industry Transformation Risk
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                6. Migration-Related Exceptions
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Open meter events may become lost, duplicated or reassigned when suppliers change systems or migrate to new industry arrangements like Market-wide Half-Hourly Settlement (MHHS).
              </p>
            </div>

            <div className="w-full lg:w-auto p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md flex-shrink-0 text-xs space-y-2 text-slate-200">
              <span className="font-bold text-gold uppercase tracking-wider text-[10px] block">
                The Migration Blindspot:
              </span>
              <p className="max-w-xs leading-normal">
                Pre-existing in-flight exchanges without post-migration revalidation generate persistent leakage that goes undetected across system transitions.
              </p>
            </div>
          </div>

        </div>

        {/* Highlighted Statement Banner */}
        <div className="mt-14 max-w-4xl mx-auto p-7 sm:p-8 rounded-3xl bg-white border border-border shadow-md flex flex-col sm:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-navy text-gold flex items-center justify-center flex-shrink-0 shadow-sm">
            <AlertCircle className="w-7 h-7" />
          </div>
          <div className="text-center sm:text-left space-y-1">
            <p className="text-base sm:text-lg font-bold text-navy">
              Traditional reconciliation often identifies these problems after invoices arrive.
            </p>
            <p className="text-sm font-semibold text-gold-dark">
              AssetShift is designed to identify missing obligations earlier.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
