import React, { useState } from 'react';
import { PLATFORM_MODULES, ReleasePhase } from '../data/platformModules';
import { ModuleCard } from './ModuleCard';
import { DashboardPreview } from './DashboardPreview';
import { ArchitectureSection } from './ArchitectureSection';

type FilterCategory = 'All Modules' | ReleasePhase;

const FILTER_TABS: FilterCategory[] = [
  'All Modules',
  'Core MVP',
  'Months 6–12',
  'Year 2',
  'Year 3'
];

export const PlatformSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>('All Modules');

  const filteredModules = selectedFilter === 'All Modules'
    ? PLATFORM_MODULES
    : PLATFORM_MODULES.filter(m => m.releasePhase === selectedFilter);

  return (
    <section id="platform" className="py-20 bg-background-light border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-navy/5 text-navy border border-navy/10">
            Platform Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-snug">
            One Assurance Layer. Complete Meter Lifecycle Visibility.
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
            AssetShift is being designed as a modular software platform combining meter identity, cross-party evidence, obligation monitoring, financial exposure valuation and invoice challenge capabilities.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-white border border-border shadow-xs">
            {FILTER_TABS.map((tab) => {
              const isSelected = selectedFilter === tab;
              const count = tab === 'All Modules' 
                ? PLATFORM_MODULES.length 
                : PLATFORM_MODULES.filter(m => m.releasePhase === tab).length;

              return (
                <button
                  key={tab}
                  onClick={() => setSelectedFilter(tab)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-navy text-white shadow-sm'
                      : 'text-content-secondary hover:text-navy hover:bg-slate-50'
                  }`}
                >
                  <span>{tab}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                      isSelected ? 'bg-gold text-navy-dark font-bold' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 11 Modules Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>

        {/* Section 9: Conceptual Platform Dashboard Preview */}
        <DashboardPreview />

        {/* Section 10: Technical Architecture Section */}
        <ArchitectureSection />

      </div>
    </section>
  );
};
