import React from 'react';
import { CUSTOMER_SEGMENTS, BENEFICIARY_ROLES } from '../data/targetMarkets';
import { Building2, UserCheck } from 'lucide-react';

export const MarketSection: React.FC = () => {
  return (
    <div className="space-y-16">
      
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-navy/5 text-navy border border-navy/10">
          Market & Stakeholders
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-snug">
          Built for the Organisations Behind the Electricity Market
        </h2>
        <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
          From lean independent energy suppliers to high-volume asset providers, AssetShift is being developed to align multi-party operational records with financial truth.
        </p>
      </div>

      {/* 5 Customer Segment Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CUSTOMER_SEGMENTS.map((segment) => (
          <div
            key={segment.id}
            className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
              segment.isPrimary
                ? 'bg-gradient-to-br from-white to-slate-50 border-gold/60 shadow-lg ring-2 ring-gold/15'
                : 'bg-white border-border hover:border-slate-300 shadow-xs hover:shadow-md'
            }`}
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <span className="w-8 h-8 rounded-lg bg-navy/5 text-navy flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-navy" />
                </span>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${
                    segment.isPrimary
                      ? 'bg-gold/15 text-gold-dark border-gold/30 font-bold'
                      : 'bg-slate-100 text-slate-600 border-slate-200'
                  }`}
                >
                  {segment.priority}
                </span>
              </div>

              <h3 className="text-lg font-bold text-navy mb-2.5">
                {segment.name}
              </h3>

              <p className="text-xs text-content-secondary leading-relaxed mb-4">
                {segment.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 text-[11px] text-navy font-medium bg-slate-50/80 p-3 rounded-xl border border-slate-100">
              {segment.focusArea}
            </div>
          </div>
        ))}
      </div>

      {/* Supporting Section: Who Within These Organisations Could Benefit? */}
      <div className="pt-8">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h3 className="text-2xl font-bold text-navy">
            Who Within These Organisations Could Benefit?
          </h3>
          <p className="text-xs sm:text-sm text-content-secondary mt-1">
            Empowering cross-functional teams with continuous evidence traceability and financial exposure control
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BENEFICIARY_ROLES.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 hover:bg-white border border-border hover:border-gold/40 shadow-2xs hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-2 mb-2">
                <UserCheck className="w-4 h-4 text-gold flex-shrink-0" />
                <h4 className="text-sm font-bold text-navy">
                  {item.role}
                </h4>
              </div>
              <p className="text-xs text-content-secondary leading-relaxed">
                {item.benefit}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
