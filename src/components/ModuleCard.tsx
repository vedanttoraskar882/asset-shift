import React from 'react';
import { 
  Database, 
  Fingerprint, 
  ListChecks, 
  Clock, 
  FileCheck, 
  FolderCheck, 
  ChartNoAxesCombined, 
  ArrowLeftRight, 
  Users, 
  Plug, 
  Flame,
  CheckCircle2,
  Info
} from 'lucide-react';
import { PlatformModule } from '../data/platformModules';

const ICON_MAP = {
  Database,
  Fingerprint,
  ListChecks,
  Clock,
  FileCheck,
  FolderCheck,
  ChartNoAxesCombined,
  ArrowLeftRight,
  Users,
  Plug,
  Flame
};

interface ModuleCardProps {
  module: PlatformModule;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({ module }) => {
  const IconComponent = ICON_MAP[module.iconName] || Database;

  const getPhaseBadgeColor = (phase: string) => {
    switch (phase) {
      case 'Core MVP':
        return 'bg-navy/10 text-navy border-navy/20';
      case 'Months 6–12':
        return 'bg-gold/15 text-gold-dark border-gold/30';
      case 'Year 2':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Year 3':
        return 'bg-slate-100 text-slate-700 border-slate-200';
      default:
        return 'bg-slate-100 text-slate-600 border-slate-200';
    }
  };

  return (
    <div className="relative p-6 sm:p-7 rounded-2xl bg-white border border-border hover:border-gold/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Card Header: Module Number + Icon + Release Phase */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-slate-400">
              MOD {module.moduleNumber}
            </span>
            <div className="w-9 h-9 rounded-xl bg-slate-50 text-navy border border-slate-100 group-hover:bg-navy group-hover:text-gold flex items-center justify-center transition-colors">
              <IconComponent className="w-5 h-5" />
            </div>
          </div>
          <span className={`px-2.5 py-0.5 text-[11px] font-semibold rounded-full border ${getPhaseBadgeColor(module.releasePhase)}`}>
            {module.releaseLabel}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-lg font-bold text-navy mb-2.5 group-hover:text-navy-light transition-colors">
          {module.name}
        </h3>
        <p className="text-xs text-content-secondary leading-relaxed mb-5">
          {module.description}
        </p>

        {/* Capabilities List */}
        <div className="space-y-2 pt-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Planned Capabilities
          </span>
          <ul className="space-y-1.5">
            {module.capabilities.map((cap, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-content-primary">
                <CheckCircle2 className="w-3.5 h-3.5 text-status-success flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{cap}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Optional Note / Disclaimer */}
      {module.notes && (
        <div className="mt-5 pt-3 border-t border-slate-100 flex items-start gap-1.5 text-[10px] text-slate-500 italic">
          <Info className="w-3 h-3 flex-shrink-0 mt-0.5 text-gold" />
          <span>{module.notes}</span>
        </div>
      )}
    </div>
  );
};
