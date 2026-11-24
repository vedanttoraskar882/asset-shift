import React from 'react';
import { 
  FileSignature, 
  Sparkles, 
  Eye, 
  AlertTriangle, 
  Scale, 
  FolderCheck,
  ArrowRight
} from 'lucide-react';

const OPERATING_STAGES = [
  {
    stage: '01',
    name: 'AUTHORISE',
    icon: FileSignature,
    title: 'Meter Job Authorised',
    description: 'A meter job is authorised by the supplier.',
    details: 'Supported job types: Meter exchange, meter removal, meter installation, de-energisation, or change of MAP.'
  },
  {
    stage: '02',
    name: 'EXPECT',
    icon: Sparkles,
    title: 'Obligations Generated',
    description: 'The obligation engine applies the appropriate job template and generates expected obligations.',
    details: 'Assigns responsible parties, evidence requirements, configurable deadlines and cost functions.'
  },
  {
    stage: '03',
    name: 'OBSERVE',
    icon: Eye,
    title: 'Cross-Party Matching',
    description: 'Incoming records are matched to the single physical meter event via the Asset Identity Spine.',
    details: 'Ingests industry flows, field return sheets, CIS updates, MAP registers and supplier invoices.'
  },
  {
    stage: '04',
    name: 'DETECT',
    icon: AlertTriangle,
    title: 'Exceptions Flagged',
    description: 'Missing, late or conflicting evidence is evaluated against expected obligations.',
    details: 'Identifies exceptions, overdue submissions and breached milestones requiring investigation.'
  },
  {
    stage: '05',
    name: 'VALUE',
    icon: Scale,
    title: 'Liability Clock Activated',
    description: 'The Liability Clock applies contractual rates and cost functions to estimate exposure.',
    details: 'Exceptions are prioritized by pounds-per-day value, urgency and time-to-lock-in.'
  },
  {
    stage: '06',
    name: 'EVIDENCE',
    icon: FolderCheck,
    title: 'Evidence-Based Resolution',
    description: 'Supporting records are assembled into structured evidence packs for finance and operations.',
    details: 'Generates audit trails and structured files to challenge avoidable charges.'
  }
];

export const HowItWorksSection: React.FC = () => {
  return (
    <div className="space-y-12">
      
      {/* Section Heading */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold/10 text-gold-dark border border-gold/20">
          Proposed Operating Workflow
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
          From Authorised Meter Jobs to Evidence-Based Resolution
        </h2>
        <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
          AssetShift's proposed operating model follows six structured stages designed to transform meter activities into measurable operational and financial responsibilities.
        </p>

        {/* Workflow Summary Pill */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-mono font-bold text-navy">
          <span className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200">Authorise</span>
          <ArrowRight className="w-3.5 h-3.5 text-gold" />
          <span className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200">Expect</span>
          <ArrowRight className="w-3.5 h-3.5 text-gold" />
          <span className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200">Observe</span>
          <ArrowRight className="w-3.5 h-3.5 text-gold" />
          <span className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200">Detect</span>
          <ArrowRight className="w-3.5 h-3.5 text-gold" />
          <span className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200">Value</span>
          <ArrowRight className="w-3.5 h-3.5 text-gold" />
          <span className="px-3 py-1 rounded-lg bg-gold/20 text-navy-dark border border-gold/30">Evidence</span>
        </div>
      </div>

      {/* 6 Structured Stages Grid (Horizontal on desktop, vertical on mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {OPERATING_STAGES.map((stage) => {
          const Icon = stage.icon;
          return (
            <div
              key={stage.stage}
              className="relative p-6 sm:p-7 rounded-2xl bg-slate-50 border border-border hover:border-gold/50 hover:bg-white shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/60 mb-4">
                  <span className="text-xs font-mono font-bold text-gold-dark bg-gold/10 px-2.5 py-0.5 rounded border border-gold/20">
                    STAGE {stage.stage}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    {stage.name}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-navy text-gold flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-navy">
                    {stage.title}
                  </h3>
                </div>

                <p className="text-xs font-medium text-slate-700 leading-relaxed mb-3">
                  {stage.description}
                </p>

                <p className="text-[11px] text-content-secondary leading-normal">
                  {stage.details}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
