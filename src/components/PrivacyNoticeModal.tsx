import React, { useEffect, useRef } from 'react';
import { X, ShieldCheck, Database, Lock, EyeOff } from 'lucide-react';

interface PrivacyNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyNoticeModal: React.FC<PrivacyNoticeModalProps> = ({ isOpen, onClose }) => {
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
      aria-labelledby="privacy-modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl my-8 bg-white rounded-2xl shadow-2xl border border-border overflow-hidden"
      >
        <div className="h-1.5 bg-gradient-to-r from-navy to-gold" />
        <div className="px-6 sm:px-8 pt-6 pb-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-navy/5 text-navy flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-navy" />
            </div>
            <h2 id="privacy-modal-title" className="text-xl font-bold text-navy">
              Privacy Notice & Data Processing
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
          <div className="p-4 bg-slate-50 border border-border rounded-xl">
            <h3 className="text-navy font-semibold flex items-center gap-2 mb-1">
              <Database className="w-4 h-4 text-gold" /> Pilot Request Data Handling
            </h3>
            <p>
              Information submitted via the "Request a Pilot" form is handled for prospective pilot intake and recorded within your browser session under <code className="bg-slate-200 px-1 py-0.5 rounded text-xs font-mono text-navy">assetshift_pilot_submissions</code>.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-navy text-base">Zero External Data Transmission</h4>
            <p>
              Under no circumstances is your personal or corporate contact information transmitted to external servers, cloud providers, third-party trackers, analytics endpoints, or remote marketing databases. Your data never leaves your local client device.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-navy text-base flex items-center gap-2">
              <EyeOff className="w-4 h-4 text-navy" /> No Console Logging or Remote Logging
            </h4>
            <p>
              In strict accordance with our development and privacy standards, contact information submitted via this website is not output to the browser debugging console or forwarded to error monitoring systems.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-navy text-base flex items-center gap-2">
              <Lock className="w-4 h-4 text-navy" /> Data Retention & Local Clearance
            </h4>
            <p>
              Submitted records remain in your browser storage until you choose to clear your browser cache and site data, or use your developer tools to inspect and delete local storage. Records are not shared between different devices or browsers.
            </p>
          </div>

          <div className="p-4 bg-navy/5 border border-navy/10 rounded-xl">
            <p className="text-xs text-navy font-medium">
              Planned Enterprise Platform Privacy Standards: When the commercial AssetShift platform becomes operational, it is designed to feature UK sovereign hosting, tenant-isolated data environments, end-to-end encryption, and full alignment with UK GDPR statutory principles.
            </p>
          </div>
        </div>

        <div className="px-6 sm:px-8 py-4 bg-slate-50 border-t border-border flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-navy text-white text-sm font-semibold rounded-lg hover:bg-navy-light transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
