import React, { useState } from 'react';
import { 
  FileSignature, 
  Sparkles, 
  Eye, 
  AlertTriangle, 
  Scale, 
  FolderCheck,
  ChevronRight
} from 'lucide-react';

const OPERATING_STAGES = [
  {
    stage: '01',
    name: 'AUTHORISE',
    icon: FileSignature,
    title: 'Meter Job Authorised',
    description: 'A meter job is authorised by the supplier.',
    details: 'Supported job types include meter exchange, meter removal, meter installation, de-energisation, or change of MAP.'
  },
  {
    stage: '02',
    name: 'EXPECT',
    icon: Sparkles,
    title: 'Obligations Generated',
    description: 'The obligation engine applies the appropriate job template and generates expected obligations.',
    details: 'Assigns responsible parties, evidence requirements, configurable deadlines and financial cost functions.'
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
    details: 'Identifies exceptions, overdue submissions and breached milestones requiring operational investigation.'
  },
  {
    stage: '05',
    name: 'VALUE',
    icon: Scale,
    title: 'Liability Clock Activated',
    description: 'The Liability Clock applies contractual rates and cost functions to estimate financial exposure.',
    details: 'Exceptions are prioritised by pounds-per-day value, urgency and contractual time-to-lock-in.'
  },
  {
    stage: '06',
    name: 'EVIDENCE',
    icon: FolderCheck,
    title: 'Evidence-Based Resolution',
    description: 'Supporting records are assembled into structured evidence packs for finance and operations.',
    details: 'Generates auditable records linking authorisations, evidence, exceptions and financial outcomes to challenge avoidable charges.'
  }
];

export const HowItWorksSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <div className="space-y-14">
      
      {/* Section Heading */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold/10 text-gold-dark border border-gold/20">
          Proposed Operating Workflow
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight">
          From Authorised Meter Jobs to Evidence-Based Resolution
        </h2>
        <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
          AssetShift's proposed operating model follows six structured stages designed to transform meter activities into measurable operational and financial responsibilities.
        </p>

        {/* Interactive Stepper Navigation Bar */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
          {OPERATING_STAGES.map((s, idx) => (
            <button
              key={s.stage}
              onClick={() => setActiveStage(idx)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-1.5 ${
                activeStage === idx
                  ? 'bg-navy text-gold shadow-md ring-2 ring-gold/30'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
              }`}
            >
              <span>{s.stage}. {s.name}</span>
              {idx < OPERATING_STAGES.length - 1 && (
                <ChevronRight className="w-3 h-3 text-slate-400 hidden sm:inline-block" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 6 Structured Stages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {OPERATING_STAGES.map((stage, idx) => {
          const Icon = stage.icon;
          const isSelected = activeStage === idx;
          return (
            <div
              key={stage.stage}
              onClick={() => setActiveStage(idx)}
              className={`relative p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                isSelected
                  ? 'bg-white border-gold/60 shadow-xl ring-2 ring-gold/20'
                  : 'bg-slate-50 border-border hover:border-slate-300 hover:bg-white shadow-xs hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-200/60 mb-5">
                  <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full border ${
                    isSelected ? 'bg-gold text-navy-dark border-gold font-extrabold' : 'bg-slate-200/80 text-slate-600 border-slate-300'
                  }`}>
                    STAGE {stage.stage}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    {stage.name}
                  </span>
                </div>

                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors ${
                    isSelected ? 'bg-navy text-gold shadow-md' : 'bg-white text-navy border border-slate-200'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-navy leading-snug">
                    {stage.title}
                  </h3>
                </div>

                <p className="text-sm font-semibold text-slate-800 leading-relaxed mb-3">
                  {stage.description}
                </p>

                <p className="text-xs text-content-secondary leading-relaxed">
                  {stage.details}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="font-semibold text-slate-400">Step {stage.stage} of 06</span>
                <span className={`font-bold transition-colors ${isSelected ? 'text-gold-dark' : 'text-navy'}`}>
                  {isSelected ? 'Active Focus' : 'Click to inspect'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
