import React, { useEffect, useRef } from 'react';
import { X, FileText, Info, AlertCircle } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/80 backdrop-blur-sm overflow-y-auto"
      onClick={e => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl my-8 bg-white rounded-2xl shadow-2xl border border-border overflow-hidden"
      >
        <div className="h-1.5 bg-gradient-to-r from-navy to-gold" />
        <div className="px-6 sm:px-8 pt-6 pb-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-navy/5 text-navy flex items-center justify-center">
              <FileText className="w-5 h-5 text-navy" />
            </div>
            <h2 id="terms-modal-title" className="text-xl font-bold text-navy">
              Terms of Use & Platform Disclaimer
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-content-secondary hover:text-navy hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 sm:px-8 py-6 space-y-5 text-sm text-content-secondary leading-relaxed max-h-[70vh] overflow-y-auto">
          <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl">
            <h3 className="text-navy font-semibold flex items-center gap-2 mb-1">
              <Info className="w-4 h-4 text-status-warning" /> Development & Market Validation Stage
            </h3>
            <p className="text-content-primary">
              AssetShift is currently at the conceptual, development and market validation stage. This website is presented to communicate the business concept, core technical innovations, planned modular architecture, and proposed commercial models to potential design partners, industry advisers, and pilot participants.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-navy text-base">Proposed Product Scope & Synthetic Data</h4>
            <p>
              Descriptions of product modules, workflow logic, architecture layers, and conceptual dashboards represent planned engineering deliverables. All numbers, metrics, charts, exception tables, and currency figures shown across this website are synthetic design concepts and illustrative planning examples. They do not represent live operational data, historical customer results, or guaranteed financial recoveries.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-navy text-base flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-navy" /> Indicative Commercial Planning Assumptions
            </h4>
            <p>
              All pricing tiers, onboarding fees, migration assurance costs, and counterparty licensing models displayed represent indicative commercial planning assumptions. They do not constitute an active commercial contract, binding quote, or regulatory offering. Final commercial terms remain subject to customer discovery, pilot validation, estate scope, and mutually executed legal agreements.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-navy text-base">Complementary Assurance Layer</h4>
            <p>
              AssetShift is being developed as a read-only assurance software solution designed to operate alongside existing market infrastructure, customer information systems, billing platforms, and field services. AssetShift does not act as an electricity supplier, meter manufacturer, meter asset provider, or regulated market agent, and does not submit statutory industry data flows.
            </p>
          </div>
        </div>

        <div className="px-6 sm:px-8 py-4 bg-slate-50 border-t border-border flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-navy text-white text-sm font-semibold rounded-lg hover:bg-navy-light transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
