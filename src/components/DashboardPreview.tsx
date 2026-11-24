import React from 'react';
import { 
  Activity, 
  Clock, 
  AlertTriangle, 
  PoundSterling, 
  Info
} from 'lucide-react';

const METRICS = [
  {
    label: 'Meter Events Monitored',
    value: '1,248',
    subtext: 'Synthetic baseline portfolio',
    icon: Activity,
    color: 'text-sky-600',
    bg: 'bg-sky-50'
  },
  {
    label: 'Open Obligations',
    value: '186',
    subtext: 'Within configured deadlines',
    icon: Clock,
    color: 'text-amber-600',
    bg: 'bg-amber-50'
  },
  {
    label: 'Breached Obligations',
    value: '24',
    subtext: 'Liability Clock active',
    icon: AlertTriangle,
    color: 'text-red-600',
    bg: 'bg-red-50'
  },
  {
    label: 'Illustrative Financial Exposure',
    value: '£8,420',
    subtext: 'Accumulated daily liability',
    icon: PoundSterling,
    color: 'text-gold-dark',
    bg: 'bg-gold/10'
  }
];

const DISTRIBUTION = [
  { status: 'Met', percentage: 78, countLabel: '78%', color: 'bg-emerald-500', text: 'text-emerald-700' },
  { status: 'Open', percentage: 15, countLabel: '15%', color: 'bg-amber-500', text: 'text-amber-700' },
  { status: 'Breached', percentage: 5, countLabel: '5%', color: 'bg-red-500', text: 'text-red-700' },
  { status: 'Waived', percentage: 2, countLabel: '2%', color: 'bg-slate-400', text: 'text-slate-600' }
];

const TABLE_ROWS = [
  {
    ref: 'EVT-001',
    mpan: '19000284719',
    type: 'Rental Not Stopped',
    party: 'MAP',
    exposure: '£1,280',
    status: 'Breached',
    statusColor: 'bg-red-50 text-status-danger border-red-200'
  },
  {
    ref: 'EVT-002',
    mpan: '12000349812',
    type: 'Missing Return Evidence',
    party: 'Metering Agent',
    exposure: '£850',
    status: 'Open',
    statusColor: 'bg-amber-50 text-status-warning border-amber-200'
  },
  {
    ref: 'EVT-003',
    mpan: '22000491823',
    type: 'Incorrect MAP Record',
    party: 'Supplier / MAP',
    exposure: '£320',
    status: 'Breached',
    statusColor: 'bg-red-50 text-status-danger border-red-200'
  },
  {
    ref: 'EVT-004',
    mpan: '14000192847',
    type: 'Migration Record Gap',
    party: 'Supplier',
    exposure: 'Pending Assessment',
    status: 'Open',
    statusColor: 'bg-amber-50 text-status-warning border-amber-200'
  },
  {
    ref: 'EVT-005',
    mpan: '10000392811',
    type: 'Field Completion Verified',
    party: 'Metering Agent',
    exposure: '£0',
    status: 'Met',
    statusColor: 'bg-emerald-50 text-status-success border-emerald-200'
  }
];

export const DashboardPreview: React.FC = () => {
  return (
    <div className="mt-16">
      
      {/* Visual Header & Synthetic Label */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
        <div>
          <h3 className="text-2xl font-bold text-navy">
            A Preview of the Proposed AssetShift Platform
          </h3>
          <p className="text-xs text-content-secondary mt-0.5">
            Conceptual user interface showing synthetic exception ranking, obligation monitoring and exposure tracking.
          </p>
        </div>
        <span className="inline-block px-3.5 py-1 text-xs font-bold text-gold-dark bg-gold/15 border border-gold/30 rounded-full whitespace-nowrap shadow-xs">
          Illustrative Platform Concept – Synthetic Data
        </span>
      </div>

      {/* Main Dashboard Preview Canvas */}
      <div className="rounded-2xl bg-white border border-border shadow-xl overflow-hidden">
        
        {/* Mock Top Application Bar */}
        <div className="px-6 py-3.5 bg-navy-dark text-white flex flex-wrap items-center justify-between gap-4 border-b border-white/10 text-xs">
          <div className="flex items-center gap-4">
            <span className="font-bold text-gold tracking-wide">ASSETSHIFT ASSURANCE LAYER</span>
            <span className="hidden md:inline-block text-slate-400">|</span>
            <span className="hidden md:inline-block text-slate-300">Portfolio: Electricity I&C Synthetic Estate</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded bg-white/10 text-slate-300 font-mono text-[11px]">
              Assurance Window: Active (Read-Only)
            </span>
          </div>
        </div>

        {/* 4 Metric Cards */}
        <div className="p-6 bg-slate-50 border-b border-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {METRICS.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div key={idx} className="p-4 bg-white rounded-xl border border-border shadow-xs flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    {metric.label}
                  </p>
                  <p className="text-2xl font-extrabold text-navy mt-1">
                    {metric.value}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    {metric.subtext}
                  </p>
                </div>
                <div className={`w-11 h-11 rounded-xl ${metric.bg} ${metric.color} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Conceptual Obligation Distribution Chart */}
        <div className="p-6 border-b border-border bg-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <h4 className="text-sm font-bold text-navy">
              Illustrative Obligation Status Distribution (Synthetic Model)
            </h4>
            <span className="text-xs text-slate-400">
              Deterministic categorization across sample portfolio
            </span>
          </div>

          {/* Progress Segment Bar */}
          <div className="w-full h-4 rounded-full bg-slate-100 flex overflow-hidden p-0.5 border border-slate-200">
            {DISTRIBUTION.map((d, idx) => (
              <div
                key={idx}
                style={{ width: `${d.percentage}%` }}
                className={`${d.color} h-full first:rounded-l-full last:rounded-r-full transition-all`}
                title={`${d.status}: ${d.percentage}%`}
              />
            ))}
          </div>

          {/* Legend */}
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            {DISTRIBUTION.map((d, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                <span className={`w-3 h-3 rounded-full ${d.color}`} />
                <span className="font-semibold text-navy">{d.status}:</span>
                <span className={`font-mono font-bold ${d.text}`}>{d.countLabel}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Example Exception Queue Table */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="text-sm font-bold text-navy">
                Financially Prioritised Exception Queue
              </h4>
              <p className="text-xs text-slate-500">
                Sample operational exceptions ranked by estimated daily financial exposure
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-slate-400 hidden sm:inline-block">5 of 24 Active Exceptions</span>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 text-slate-600 font-semibold uppercase tracking-wider text-[10px] border-b border-border">
                <tr>
                  <th className="py-3 px-4">Event Ref</th>
                  <th className="py-3 px-4">Exception Type</th>
                  <th className="py-3 px-4">Responsible Party</th>
                  <th className="py-3 px-4 text-right">Illustrative Exposure</th>
                  <th className="py-3 px-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {TABLE_ROWS.map((row) => (
                  <tr key={row.ref} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-navy">
                      {row.ref}
                      <span className="block text-[10px] font-normal text-slate-400">{row.mpan}</span>
                    </td>
                    <td className="py-3.5 px-4 font-medium text-slate-800">
                      {row.type}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600">
                      {row.party}
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono font-bold text-navy">
                      {row.exposure}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${row.statusColor}`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Required Prominent Disclaimer Directly Below Visual */}
      <div className="mt-4 p-4 rounded-xl bg-slate-100 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
        <Info className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Illustrative Disclaimer:</strong> This dashboard is an illustrative design concept using synthetic data. It does not represent live customer information, actual financial savings or an operational product.
        </p>
      </div>

    </div>
  );
};
