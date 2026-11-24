import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ChevronRight, 
  ShieldAlert, 
  Activity, 
  Layers, 
  FileCheck2, 
  Clock, 
  Building2, 
  Cpu, 
  Database,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

interface HeroProps {
  onRequestPilot: () => void;
  onExplorePlatform: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestPilot, onExplorePlatform }) => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-[#0B132B] via-navy-deep to-navy text-white overflow-hidden"
    >
      {/* Background Ambience & Lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-gold/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background-light to-transparent opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Hero Content with Staggered Entrance */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Introductory Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-semibold text-slate-200 shadow-inner"
            >
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>Built for the UK Electricity Market</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]"
            >
              Prevent Avoidable{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark">
                Meter-Asset Charges
              </span>{' '}
              Before They Arise.
            </motion.h1>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal"
            >
              AssetShift is developing a cross-party meter-asset lifecycle assurance platform designed to help electricity suppliers identify missed obligations, quantify financial exposure and strengthen invoice validation before avoidable charges accumulate.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={onRequestPilot}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-navy-dark bg-gold hover:bg-gold-light active:bg-gold-dark shadow-xl shadow-gold/25 hover:shadow-gold/40 transition-all flex items-center justify-center gap-2.5 group transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy-dark"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={onExplorePlatform}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm sm:text-base text-white bg-white/10 hover:bg-white/15 active:bg-white/5 border border-white/20 transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                <span>Explore the Platform</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </motion.div>

            {/* Development-Stage Statement */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-1 flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-400"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              <span>Currently in development | Seeking design partners and prospective pilot participants</span>
            </motion.div>

            {/* Three Supporting Value Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left"
            >
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:border-gold/30 transition-colors">
                <div className="flex items-center gap-2 text-gold mb-1.5">
                  <Activity className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-200">Assurance</span>
                </div>
                <p className="text-xs font-semibold text-slate-200">Obligation-Based Assurance</p>
                <p className="text-[11px] text-slate-400 mt-1 leading-snug">Transforms authorised meter work into date-effective obligations.</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:border-gold/30 transition-colors">
                <div className="flex items-center gap-2 text-gold mb-1.5">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-200">Visibility</span>
                </div>
                <p className="text-xs font-semibold text-slate-200">Financial Exposure Visibility</p>
                <p className="text-[11px] text-slate-400 mt-1 leading-snug">Monitors daily rental accruals and unreturned asset liability.</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:border-gold/30 transition-colors">
                <div className="flex items-center gap-2 text-gold mb-1.5">
                  <Layers className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-200">Integration</span>
                </div>
                <p className="text-xs font-semibold text-slate-200">Read-Only Integration</p>
                <p className="text-[11px] text-slate-400 mt-1 leading-snug">Operates non-intrusively alongside existing supplier CIS and billing.</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual - Conceptual Animated Cross-Party Assurance Architecture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              
              {/* Synthetic Data Label Tag */}
              <div className="mb-2.5 text-right">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold text-gold bg-gold/10 border border-gold/30 rounded-md shadow-xs">
                  <Sparkles className="w-3 h-3" />
                  Illustrative Platform Concept – Synthetic Data
                </span>
              </div>

              {/* Main Conceptual Interactive Visual Panel */}
              <div className="relative rounded-2xl bg-slate-900/95 border border-slate-700/80 shadow-2xl p-5 sm:p-6 backdrop-blur-xl space-y-5">
                
                {/* Visual Header: Stream telemetry */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400">lifecycle_stream :: MPAN 12000349812</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <Cpu className="w-3.5 h-3.5 text-gold" />
                    Assurance Engine
                  </span>
                </div>

                {/* Conceptual Nodes Illustration */}
                <div className="grid grid-cols-3 gap-2.5 text-center text-xs">
                  {/* Node 1: Electricity Supplier */}
                  <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700/80 flex flex-col items-center">
                    <Building2 className="w-5 h-5 text-sky-400 mb-1" />
                    <span className="font-semibold text-slate-200 text-[11px]">Supplier</span>
                    <span className="text-[10px] text-slate-400 mt-0.5">Job Authorisation</span>
                    <span className="mt-1.5 px-1.5 py-0.5 text-[9px] font-mono rounded bg-sky-950 text-sky-300 border border-sky-800">
                      CIS Extract
                    </span>
                  </div>

                  {/* Node 2: Metering Agent */}
                  <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700/80 flex flex-col items-center">
                    <Cpu className="w-5 h-5 text-amber-400 mb-1" />
                    <span className="font-semibold text-slate-200 text-[11px]">Metering Agent</span>
                    <span className="text-[10px] text-slate-400 mt-0.5">Physical Exchange</span>
                    <span className="mt-1.5 px-1.5 py-0.5 text-[9px] font-mono rounded bg-amber-950 text-amber-300 border border-amber-800">
                      Field Returns
                    </span>
                  </div>

                  {/* Node 3: Meter Asset Provider */}
                  <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700/80 flex flex-col items-center">
                    <Database className="w-5 h-5 text-emerald-400 mb-1" />
                    <span className="font-semibold text-slate-200 text-[11px]">Asset Provider</span>
                    <span className="text-[10px] text-slate-400 mt-0.5">Rental Invoices</span>
                    <span className="mt-1.5 px-1.5 py-0.5 text-[9px] font-mono rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                      Asset Register
                    </span>
                  </div>
                </div>

                {/* Central AssetShift Obligation Engine Card */}
                <div className="relative p-4.5 rounded-xl bg-gradient-to-br from-navy via-navy-light to-navy-dark border border-gold/40 shadow-inner">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-gold/20 flex items-center justify-center text-gold">
                        <Activity className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-bold text-white tracking-wide">
                        AssetShift Obligation Engine
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-status-danger/20 text-red-300 border border-red-500/30 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
                      1 Breached
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between py-1.5 border-b border-white/10 font-mono text-[11px]">
                      <span className="text-slate-300">O3: MAP Notification Due</span>
                      <span className="text-status-danger font-bold">BREACHED (+18 Days)</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-white/10 font-mono text-[11px]">
                      <span className="text-slate-300">O4: Asset Return Evidence</span>
                      <span className="text-status-warning font-semibold">OPEN (In Progress)</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 font-mono text-[11px]">
                      <span className="text-slate-300">O1: Field Job Completion</span>
                      <span className="text-status-success font-semibold">MET (Verified)</span>
                    </div>
                  </div>
                </div>

                {/* Liability Clock & Exposure Valuation Banner */}
                <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-status-warning/15 text-status-warning flex items-center justify-center">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold uppercase text-slate-400">
                        Liability Clock Active
                      </div>
                      <div className="text-sm font-bold text-white">
                        £18.40 / day <span className="text-xs font-normal text-slate-400 font-mono">(Contractual Rate)</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-[10px] text-slate-400">Accumulated Exposure</div>
                    <div className="text-base font-extrabold text-gold font-mono">£331.20</div>
                  </div>
                </div>

                {/* Evidence Matching & Challenge Readiness Footer */}
                <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <FileCheck2 className="w-4 h-4 text-emerald-400" />
                    <span>Evidence Pack Generated</span>
                  </div>
                  <div className="flex items-center gap-1 text-gold hover:text-gold-light cursor-pointer text-[11px] font-semibold">
                    <span>Invoice Line Challenge Ready</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

              </div>

              {/* Decorative Floating Metric Pill */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 p-3.5 rounded-xl bg-slate-800/95 border border-slate-700 text-white shadow-xl backdrop-blur-md items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-status-success flex items-center justify-center">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Assurance Posture</div>
                  <div className="text-xs font-bold text-slate-200">Non-Intrusive Read-Only</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
