import React from 'react';
import { 
  AlertTriangle, 
  ArrowRight
} from 'lucide-react';

const OBLIGATIONS = [
  {
    code: 'O1',
    name: 'Field Completion Evidence',
    party: 'Metering Agent',
    source: 'Field Job Sheet / Handheld Log',
    deadline: 'Configurable (e.g. +2 working days)',
    costFunction: 'Operational penalty risk',
    status: 'Met',
    statusColor: 'bg-emerald-50 text-status-success border-emerald-200',
    description: 'Record evidence confirming the old meter was removed and the replacement installed.'
  },
  {
    code: 'O2',
    name: 'Meter Technical Details',
    party: 'Metering Agent / Supplier',
    source: 'D0150 / D0149 Industry Data Flow',
    deadline: 'Configurable target window',
    costFunction: 'Billing exception exposure',
    status: 'Met',
    statusColor: 'bg-emerald-50 text-status-success border-emerald-200',
    description: 'Update the relevant meter technical records in industry settlement systems.'
  },
  {
    code: 'O3',
    name: 'Old MAP Notification',
    party: 'Electricity Supplier',
    source: 'MAP De-registration Notification / D0268',
    deadline: 'Configurable contractual notice window',
    costFunction: '£1.40 / day continued rental rate card',
    status: 'Breached',
    statusColor: 'bg-red-50 text-status-danger border-red-200',
    description: 'Notify the owning MAP that the previous meter has been removed from the site.'
  },
  {
    code: 'O4',
    name: 'Asset Return or Disposal',
    party: 'Metering Agent / Depot',
    source: 'Logistics Courier Note / Scrappage Certificate',
    deadline: 'Configurable return window (e.g. 30 days)',
    costFunction: '£350 fixed unreturned asset replacement penalty',
    status: 'Open',
    statusColor: 'bg-amber-50 text-status-warning border-amber-200',
    description: 'Record evidence of physical return or agreed disposal of the removed asset.'
  },
  {
    code: 'O5',
    name: 'New Meter Asset Registration',
    party: 'New MAP / Supplier',
    source: 'New MAP Agreement & Serial Number Log',
    deadline: 'Effective installation date',
    costFunction: 'Delayed rental billing / Dispute risk',
    status: 'Met',
    statusColor: 'bg-emerald-50 text-status-success border-emerald-200',
    description: 'Ensure the replacement asset is correctly recorded and relevant rental starts correctly.'
  },
  {
    code: 'O6',
    name: 'Record Consistency',
    party: 'Supplier Data Team',
    source: 'Supplier CIS & Settlement Register',
    deadline: 'Cycle-end reconciliation',
    costFunction: 'Audit discrepancy exposure',
    status: 'Met',
    statusColor: 'bg-emerald-50 text-status-success border-emerald-200',
    description: 'Ensure relevant settlement and asset records reflect the meter change consistently.'
  }
];

export const ObligationExample: React.FC = () => {
  return (
    <div className="mt-20 pt-16 border-t border-border">
      
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-navy/5 text-navy border border-navy/10">
          Practical Walkthrough
        </div>
        <h3 className="text-3xl font-extrabold text-navy tracking-tight">
          Understanding the Obligation Model in Practice
        </h3>
        <p className="text-sm sm:text-base text-content-secondary leading-relaxed">
          Illustrative example showing how one authorised meter exchange generates six distinct obligations, and how a breach in O3 triggers the Liability Clock.
        </p>
      </div>

      {/* Grid of the 6 Obligations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {OBLIGATIONS.map((ob) => (
          <div
            key={ob.code}
            className={`p-5 rounded-2xl border transition-all ${
              ob.status === 'Breached'
                ? 'bg-red-50/40 border-red-300 shadow-md ring-2 ring-red-500/10'
                : 'bg-white border-border hover:border-slate-300'
            }`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <span className="font-mono font-extrabold text-sm text-navy">
                {ob.code}
              </span>
              <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${ob.statusColor}`}>
                {ob.status}
              </span>
            </div>

            <h4 className="text-base font-bold text-navy mb-1.5">
              {ob.name}
            </h4>
            <p className="text-xs text-content-secondary mb-4 leading-relaxed">
              {ob.description}
            </p>

            <div className="space-y-1.5 text-[11px] bg-slate-50 p-3 rounded-xl border border-slate-100">
              <div className="flex justify-between">
                <span className="text-slate-400 font-medium">Party:</span>
                <span className="font-semibold text-navy">{ob.party}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 font-medium">Evidence:</span>
                <span className="font-medium text-slate-700 truncate max-w-[150px]">{ob.source}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 font-medium">Deadline:</span>
                <span className="font-medium text-slate-700">{ob.deadline}</span>
              </div>
              <div className="flex justify-between pt-1 border-t border-slate-200/60">
                <span className="text-slate-400 font-medium">Cost Function:</span>
                <span className="font-bold text-navy font-mono text-[10px]">{ob.costFunction}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Breached O3 Consequence Pathway Banner */}
      <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-navy via-navy to-navy-dark text-white shadow-xl border border-white/10">
        <div className="max-w-2xl mx-auto text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold bg-red-500/20 text-red-300 border border-red-500/30 mb-2">
            <AlertTriangle className="w-3.5 h-3.5" />
            Breached Obligation Pathway (O3: Old MAP Notification)
          </div>
          <h4 className="text-xl font-bold text-white">
            How a Missed Obligation Translates into Invoice Challenge
          </h4>
          <p className="text-xs text-slate-300 mt-1">
            When O3 is not evidenced before the configured deadline, AssetShift connects operational delay with financial exposure.
          </p>
        </div>

        {/* Pathway Diagram */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center">
          
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center">
            <span className="text-[10px] font-mono text-slate-400 uppercase">Stage 1</span>
            <p className="text-xs font-bold text-slate-200 mt-1">Missing MAP Notification</p>
            <span className="text-[10px] text-slate-400 mt-0.5">Removal not signaled</span>
          </div>

          <div className="hidden sm:flex items-center justify-center">
            <ArrowRight className="w-5 h-5 text-gold" />
          </div>

          <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/30 flex flex-col items-center justify-center">
            <span className="text-[10px] font-mono text-red-400 uppercase">Stage 2</span>
            <p className="text-xs font-bold text-red-200 mt-1">Configured Deadline Breached</p>
            <span className="text-[10px] text-red-300 mt-0.5">SLA elapsed without flow</span>
          </div>

          <div className="hidden sm:flex items-center justify-center">
            <ArrowRight className="w-5 h-5 text-gold" />
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center">
            <span className="text-[10px] font-mono text-gold uppercase">Stage 3</span>
            <p className="text-xs font-bold text-gold mt-1">Liability Clock Activated</p>
            <span className="text-[10px] text-slate-300 mt-0.5">£1.40/day accrual monitored</span>
          </div>

        </div>

        <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <span>Resolution Outcome: <strong>Invoice Line Flagged for Discrepancy Challenge</strong> with pre-assembled removal evidence.</span>
          <span className="text-[11px] text-gold-light italic">Note: Deadlines are configurable per contract terms.</span>
        </div>
      </div>

    </div>
  );
};
