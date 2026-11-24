import React from 'react';
import { 
  Database, 
  Fingerprint, 
  ListChecks, 
  Clock, 
  FolderCheck, 
  ShieldCheck, 
  ArrowDown, 
  AlertCircle
} from 'lucide-react';

const INPUT_SOURCES = [
  'Industry Flows',
  'Supplier CIS Records',
  'Field-Service Returns',
  'MAP Asset Registers',
  'MAP Invoices'
];

const ARCHITECTURE_LAYERS = [
  {
    layerNumber: 'Layer 1',
    name: 'Ingestion',
    icon: Database,
    description: 'Read-only ingestion, file drops, APIs as planned product capabilities, source tracking and immutable raw record storage.',
    accent: 'border-l-sky-500'
  },
  {
    layerNumber: 'Layer 2',
    name: 'Identity',
    icon: Fingerprint,
    description: 'Date-effective matching of MPAN, meter serial number, MAP ID, work order, agent and site.',
    accent: 'border-l-indigo-500'
  },
  {
    layerNumber: 'Layer 3',
    name: 'Obligation Engine',
    icon: ListChecks,
    description: 'Versioned job templates, configured evidence requirements, deadlines and responsible parties.',
    accent: 'border-l-gold'
  },
  {
    layerNumber: 'Layer 4',
    name: 'Liability',
    icon: Clock,
    description: 'Contractual rate cards, daily exposure calculations and financial prioritisation.',
    accent: 'border-l-amber-500'
  },
  {
    layerNumber: 'Layer 5',
    name: 'Evidence',
    icon: FolderCheck,
    description: 'Auditable records linking authorisations, evidence, exceptions and financial outcomes.',
    accent: 'border-l-emerald-500'
  },
  {
    layerNumber: 'Layer 6',
    name: 'Governance',
    icon: ShieldCheck,
    description: 'Planned role-based access, tenant isolation, event history, rule-version audit trails, UK hosting and GDPR-aligned processing.',
    accent: 'border-l-purple-500'
  }
];

const PROPOSED_OUTPUTS = [
  'Exception Queue',
  'Financial Exposure Dashboard',
  'MAP Invoice Challenge Files',
  'Evidence Packs',
  'Migration Assurance Reports',
  'Operational Hotspot Insights'
];

const TECH_STACK_TAGS = [
  'Python',
  'SQL',
  'Relational Data Store',
  'Event Log',
  'Power BI / Web Interface'
];

export const ArchitectureSection: React.FC = () => {
  return (
    <div className="mt-20 pt-16 border-t border-border">
      
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-navy/5 text-navy border border-navy/10">
          Planned Technical Architecture
        </div>
        <h3 className="text-3xl font-extrabold text-navy tracking-tight">
          Designed for Traceability and Cross-Party Assurance
        </h3>
        <p className="text-sm sm:text-base text-content-secondary leading-relaxed">
          The planned AssetShift technical architecture is structured into six discrete, deterministic layers ensuring comprehensive auditability from ingestion to invoice challenge.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* INPUT SOURCES */}
        <div className="p-5 rounded-2xl bg-slate-100 border border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Input Sources (Read-Only)
            </span>
            <span className="text-[11px] text-slate-400">Non-Intrusive Ingestion</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {INPUT_SOURCES.map((source, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-navy shadow-2xs"
              >
                {source}
              </span>
            ))}
          </div>
        </div>

        {/* Downward Connector */}
        <div className="flex justify-center -my-2">
          <ArrowDown className="w-5 h-5 text-slate-400 animate-bounce" />
        </div>

        {/* 6 ARCHITECTURE LAYERS */}
        <div className="space-y-3">
          {ARCHITECTURE_LAYERS.map((layer) => {
            const Icon = layer.icon;
            return (
              <div
                key={layer.layerNumber}
                className={`p-4 sm:p-5 rounded-xl bg-white border border-border border-l-4 ${layer.accent} shadow-2xs hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 text-navy flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold text-slate-400 uppercase">
                        {layer.layerNumber}
                      </span>
                      <h4 className="text-base font-bold text-navy">
                        {layer.name}
                      </h4>
                    </div>
                    <p className="text-xs text-content-secondary mt-0.5 leading-relaxed">
                      {layer.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Downward Connector */}
        <div className="flex justify-center -my-2">
          <ArrowDown className="w-5 h-5 text-slate-400" />
        </div>

        {/* PROPOSED OUTPUTS */}
        <div className="p-5 rounded-2xl bg-navy text-white shadow-lg border border-navy-light/30">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gold">
              Proposed Outputs & Analytics
            </span>
            <span className="text-[11px] text-slate-300">Operational & Financial Deliverables</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {PROPOSED_OUTPUTS.map((output, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 bg-white/10 hover:bg-white/15 border border-white/15 rounded-lg text-xs font-medium text-slate-100 shadow-2xs"
              >
                {output}
              </span>
            ))}
          </div>
        </div>

        {/* Proposed Technology Stack Tags */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span className="font-semibold uppercase tracking-wider text-[11px]">Proposed Technology Stack:</span>
          <div className="flex flex-wrap gap-2">
            {TECH_STACK_TAGS.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-md text-[11px] font-mono text-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Architecture Disclaimer */}
        <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs text-slate-500">
          <AlertCircle className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Architecture Scope Note:</strong> This diagram describes the planned architecture of the future AssetShift software platform. It does not represent active backend services on this website. Security features, hosting and GDPR alignment will be verified during commercial implementation.
          </p>
        </div>

      </div>

    </div>
  );
};
