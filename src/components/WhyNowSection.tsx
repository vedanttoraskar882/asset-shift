import React from 'react';
import { 
  CalendarClock, 
  ServerCog, 
  Gauge, 
  Building 
} from 'lucide-react';

const MARKET_DRIVERS = [
  {
    icon: CalendarClock,
    badge: 'Industry Transition',
    title: 'Market-wide Half-Hourly Settlement (MHHS)',
    description: 'Changes to settlement arrangements and agent appointments create a critical need to monitor open meter events during migration. The business plan identifies the migration period leading towards May 2027 as an important commercial opportunity.',
    planningContext: 'Planning context: Transition window requiring continuous cross-party event monitoring.'
  },
  {
    icon: ServerCog,
    badge: 'Core Modernisation',
    title: 'Supplier Platform Modernisation',
    description: 'Suppliers migrating from legacy platforms to modern customer information systems need to maintain visibility of unresolved meter obligations to prevent record loss during data cut-over.',
    planningContext: 'Risk factor: In-flight exchanges falling between legacy and target architectures.'
  },
  {
    icon: Gauge,
    badge: 'Field Volume',
    title: 'Smart Meter Replacement',
    description: 'Ongoing replacement of legacy meters increases the volume and importance of accurate removal, counterparty notification and physical asset return records.',
    planningContext: 'Operational impact: High exchange volumes magnifying missing notification rates.'
  },
  {
    icon: Building,
    badge: 'Estate Diversity',
    title: 'Complex Meter Asset Estates',
    description: 'Large and mixed Meter Asset Provider portfolios create operational complexity, fragmented commercial terms, and significant rental reconciliation challenges.',
    planningContext: 'Commercial dynamic: Multiple MAP agreements with varying rates and notice periods.'
  }
];

export const WhyNowSection: React.FC = () => {
  return (
    <section className="py-20 bg-background-light border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-navy/5 text-navy border border-navy/10">
            Market Timing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            An Evolving Electricity Market Needs Better Assurance
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
            Structural market reforms, large-scale system cut-overs, and accelerated meter exchange programmes make automated lifecycle assurance essential.
          </p>
        </div>

        {/* 4 Market Driver Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {MARKET_DRIVERS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-white rounded-2xl border border-border hover:border-gold/50 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-navy/5 text-navy flex items-center justify-center">
                      <Icon className="w-6 h-6 text-navy" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-navy mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-content-secondary leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="text-xs font-medium text-navy bg-slate-50 p-3 rounded-xl border border-slate-100">
                    {item.planningContext}
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
