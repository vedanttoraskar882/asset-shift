import React from 'react';
import { 
  ArrowDown
} from 'lucide-react';

const STATUS_PILLS = [
  {
    status: 'Open',
    color: 'bg-amber-50 text-status-warning border-amber-200',
    indicator: 'bg-amber-500',
    description: 'Obligation pending completion within configured timeline window.'
  },
  {
    status: 'Met',
    color: 'bg-emerald-50 text-status-success border-emerald-200',
    indicator: 'bg-emerald-500',
    description: 'Required evidence received and validated from counterparty source.'
  },
  {
    status: 'Breached',
    color: 'bg-red-50 text-status-danger border-red-200',
    indicator: 'bg-red-500',
    description: 'Configured deadline passed without verified evidence. Liability Clock begins.'
  },
  {
    status: 'Waived',
    color: 'bg-slate-100 text-slate-600 border-slate-200',
    indicator: 'bg-slate-400',
    description: 'Formally excused or overridden by authorised operational review.'
  }
];

const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Authorised Meter Job',
    subtitle: 'Supplier work order or industry exchange notification initiated',
    tag: 'Input Event'
  },
  {
    step: '02',
    title: 'Expected-State Obligation Model',
    subtitle: 'Applies job templates to determine required downstream tasks, evidence & deadlines',
    tag: 'Rules Engine'
  },
  {
    step: '03',
    title: 'Supplier + MAP + Metering Agent Records',
    subtitle: 'Ingests read-only flows, CIS logs, field sheets & asset registers',
    tag: 'Cross-Party Data'
  },
  {
    step: '04',
    title: 'Cross-Party Evidence Matching',
    subtitle: 'Date-effective correlation of MPAN, serial number, MAP ID & work order',
    tag: 'Identity Spine'
  },
  {
    step: '05',
    title: 'Obligation Status Assessment',
    subtitle: 'Evaluates each obligation against evidence to assign Open, Met, Breached or Waived',
    tag: 'Assurance Engine'
  },
  {
    step: '06',
    title: 'Exception Detection & Financial Valuation',
    subtitle: 'Activates the Liability Clock to quantify daily rental & unreturned penalty risk',
    tag: 'Exposure Valuation'
  },
  {
    step: '07',
    title: 'Evidence-Based Resolution',
    subtitle: 'Generates structured challenge files and audit-ready Evidence Packs for finance',
    tag: 'Actionable Output'
  }
];

export const SolutionSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold/10 text-gold-dark border border-gold/20">
            The Core Business Solution
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            From Reactive Reconciliation to Proactive Assurance
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
            AssetShift proposes an obligation-based assurance layer that starts with an authorised meter job, determines what must happen next, monitors supporting evidence and identifies the financial consequences of missed obligations.
          </p>
        </div>

        {/* Structured Obligation Model Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-border shadow-sm">
          <div className="max-w-3xl mx-auto text-center mb-6">
            <h3 className="text-xl font-bold text-navy">
              Every Authorised Meter Job Generates Structured Obligations
            </h3>
            <p className="text-sm text-content-secondary mt-1">
              Each obligation tracks specific operational requirements with clear financial accountability:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-white rounded-xl border border-border shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Parameter 01</span>
              <h4 className="text-sm font-bold text-navy mt-1">Responsible Party</h4>
              <p className="text-xs text-content-secondary mt-1">Identifies whether the supplier, field agent, or MAP holds responsibility.</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-border shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Parameter 02</span>
              <h4 className="text-sm font-bold text-navy mt-1">Required Evidence Source</h4>
              <p className="text-xs text-content-secondary mt-1">Specifies the expected data flow, field return sheet, or counterparty log.</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-border shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Parameter 03</span>
              <h4 className="text-sm font-bold text-navy mt-1">Configured Deadline</h4>
              <p className="text-xs text-content-secondary mt-1">Contractual or operational target window for evidence completion.</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-border shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Parameter 04</span>
              <h4 className="text-sm font-bold text-navy mt-1">Financial Cost Function</h4>
              <p className="text-xs text-content-secondary mt-1">Pounds per day or fixed liability formula incurred if breached.</p>
            </div>
          </div>

          {/* 4 Obligation Statuses */}
          <div className="mt-8 pt-6 border-t border-border">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 text-center mb-4">
              Deterministic Obligation Lifecycle Statuses
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {STATUS_PILLS.map((item) => (
                <div key={item.status} className={`p-3.5 rounded-xl border ${item.color} flex flex-col justify-between`}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${item.indicator}`} />
                    <span className="font-bold text-sm">{item.status}</span>
                  </div>
                  <p className="text-xs opacity-90 leading-normal">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Flow Architecture Diagram */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-navy">
              Proposed Assurance Operating Architecture
            </h3>
            <p className="text-sm text-content-secondary mt-1">
              End-to-end trace from job authorisation through multi-party evidence matching to audit-ready invoice challenge
            </p>
          </div>

          <div className="max-w-3xl mx-auto relative space-y-3">
            {WORKFLOW_STEPS.map((step, idx) => (
              <React.Fragment key={step.step}>
                <div className="p-4 sm:p-5 rounded-xl bg-slate-50 hover:bg-white border border-border hover:border-gold/40 shadow-xs hover:shadow-md transition-all flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-navy text-gold flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-sm">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-navy">
                        {step.title}
                      </h4>
                      <p className="text-xs text-content-secondary mt-0.5">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block px-2.5 py-1 text-[11px] font-semibold text-navy bg-navy/5 border border-navy/10 rounded-md whitespace-nowrap">
                    {step.tag}
                  </span>
                </div>

                {idx < WORKFLOW_STEPS.length - 1 && (
                  <div className="flex justify-center py-0.5">
                    <ArrowDown className="w-4 h-4 text-slate-400" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
