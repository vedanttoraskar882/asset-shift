import React from 'react';
import { Zap, CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold/10 text-gold-dark border border-gold/20">
            About AssetShift
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-snug">
            Built to Close the Gap Between Meter Operations and Financial Control
          </h2>
        </div>

        {/* Core Description Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-content-secondary leading-relaxed text-base">
            <p className="text-lg font-medium text-navy">
              AssetShift is a proposed UK-based energy technology business developing a read-only software assurance platform for the electricity market.
            </p>
            <p>
              The business focuses on the financial consequences of incomplete meter lifecycle events and disconnected records between suppliers, Meter Asset Providers and metering agents.
            </p>
            <p>
              By transforming authorised meter jobs into measurable obligations, AssetShift aims to help organisations identify missing evidence, monitor operational responsibilities and understand financial exposure before avoidable charges arise.
            </p>
            <p>
              The platform is designed to complement existing billing, customer information, metering and field service systems rather than replace them.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-border">
                <div className="flex items-center gap-2 text-navy font-bold text-sm mb-1">
                  <CheckCircle className="w-4 h-4 text-gold" />
                  Read-Only Architecture
                </div>
                <p className="text-xs text-content-secondary">
                  Non-intrusive ingestion of existing flows and records without requiring write permissions to core supplier systems.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-border">
                <div className="flex items-center gap-2 text-navy font-bold text-sm mb-1">
                  <CheckCircle className="w-4 h-4 text-gold" />
                  Complementary Design
                </div>
                <p className="text-xs text-content-secondary">
                  Enhances existing CIS, billing, and work management software with an independent layer of financial assurance.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-navy to-navy-dark text-white shadow-xl border border-navy-light/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="w-12 h-12 rounded-xl bg-gold/20 text-gold flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                Assurance At A Glance
              </h3>
              
              <ul className="space-y-3.5 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <span><strong>Focused Scope:</strong> UK electricity market meter asset lifecycle assurance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <span><strong>Operational Posture:</strong> Deterministic, rules-first obligation engine.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <span><strong>Financial Mechanism:</strong> Configurable daily Liability Clock.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <span><strong>Development Status:</strong> Conceptual and market validation stage seeking pilot partners.</span>
                </li>
              </ul>

              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Validation Stage: Active</span>
                <span className="text-gold font-medium">Design Partner Recruitment</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
