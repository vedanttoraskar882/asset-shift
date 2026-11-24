import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, AlertTriangle, Building2, User, Mail, Phone, ShieldCheck, Loader2 } from 'lucide-react';
import { savePilotSubmission, validatePilotForm, PilotFormData } from '../utils/pilotStorage';

interface RequestPilotModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialContext?: string;
}

export const RequestPilotModal: React.FC<RequestPilotModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<PilotFormData>({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    organisationName: ''
  });

  const [acknowledged, setAcknowledged] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [systemError, setSystemError] = useState<string | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);
  const initialFocusRef = useRef<HTMLInputElement>(null);

  // Focus trap and escape key handler
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    // Set initial focus
    const timer = setTimeout(() => {
      initialFocusRef.current?.focus();
    }, 50);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
      clearTimeout(timer);
    };
  }, [isOpen, onClose]);

  // Reset form when reopened
  useEffect(() => {
    if (isOpen) {
      setSubmitSuccess(false);
      setSystemError(null);
      setErrors({});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Validate fields
    const validationErrors = validatePilotForm(formData);

    if (!acknowledged) {
      validationErrors.acknowledgement = 'Please confirm your agreement to be contacted regarding the pilot programme.';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSystemError(null);

    try {
      // Save strictly using the storage utility
      savePilotSubmission(formData);

      // Successfully saved
      setSubmitSuccess(true);
      setFormData({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        organisationName: ''
      });
      setAcknowledged(false);
      setErrors({});
    } catch (err: unknown) {
      if (err instanceof Error) {
        setSystemError(err.message || 'Your request could not be processed. Please verify your input and try again.');
      } else {
        setSystemError('Your request could not be processed. Please verify your input and try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/80 backdrop-blur-sm overflow-y-auto transition-opacity"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg my-8 bg-white rounded-2xl shadow-2xl border border-border overflow-hidden transition-all transform duration-200"
      >
        {/* Header decoration bar */}
        <div className="h-2 bg-gradient-to-r from-navy via-navy-light to-gold" />

        {/* Modal Header */}
        <div className="px-6 sm:px-8 pt-6 pb-4 border-b border-border flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gold/10 text-gold-dark border border-gold/20 mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              Pilot Programme Registration
            </div>
            <h2 id="modal-title" className="text-2xl font-extrabold text-navy font-heading tracking-tight">
              Request a Pilot
            </h2>
            <p className="text-sm text-content-secondary mt-1">
              Register your interest in AssetShift's proposed meter-asset lifecycle assurance platform.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 -mr-2 text-content-secondary hover:text-navy hover:bg-slate-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-navy"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="px-6 sm:px-8 py-6">
          {submitSuccess ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-50 text-status-success rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy">Request Successfully Submitted</h3>
              <div className="p-4 bg-slate-50 border border-border rounded-xl text-sm text-content-primary leading-relaxed text-left">
                <p className="font-semibold text-navy mb-1">Confirmation Details:</p>
                <p className="text-content-secondary">
                  Thank you for registering your pilot interest. Your enquiry has been recorded. Our team will review your requirements and reach out to discuss pilot validation.
                </p>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={() => setSubmitSuccess(false)}
                  className="px-5 py-2.5 border border-border text-navy rounded-lg hover:bg-slate-50 font-medium text-sm transition-colors"
                >
                  Submit Another Request
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 bg-navy text-white rounded-lg hover:bg-navy-light font-medium text-sm transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {systemError && (
                <div className="p-3.5 bg-red-50 border border-status-danger/30 rounded-xl flex items-start gap-3 text-sm text-status-danger">
                  <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Unable to Process Request</p>
                    <p className="text-xs mt-0.5">{systemError}</p>
                  </div>
                </div>
              )}

              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 tracking-normal mb-1.5">
                  Full Name <span className="text-status-danger">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-content-secondary">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    ref={initialFocusRef}
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border rounded-lg text-sm text-content-primary placeholder-content-secondary/60 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.fullName
                        ? 'border-status-danger focus:ring-status-danger/30'
                        : 'border-border focus:ring-navy/20 focus:border-navy'
                    }`}
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  />
                </div>
                {errors.fullName && (
                  <p id="fullName-error" className="text-xs text-status-danger mt-1">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="block text-xs font-semibold text-slate-700 tracking-normal mb-1.5">
                  Phone Number <span className="text-status-danger">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-content-secondary">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border rounded-lg text-sm text-content-primary placeholder-content-secondary/60 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.phoneNumber
                        ? 'border-status-danger focus:ring-status-danger/30'
                        : 'border-border focus:ring-navy/20 focus:border-navy'
                    }`}
                    aria-invalid={!!errors.phoneNumber}
                    aria-describedby={errors.phoneNumber ? 'phoneNumber-error' : undefined}
                  />
                </div>
                {errors.phoneNumber && (
                  <p id="phoneNumber-error" className="text-xs text-status-danger mt-1">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="emailAddress" className="block text-xs font-semibold text-slate-700 tracking-normal mb-1.5">
                  Business Email Address <span className="text-status-danger">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-content-secondary">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    placeholder="Enter your business email"
                    className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border rounded-lg text-sm text-content-primary placeholder-content-secondary/60 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.emailAddress
                        ? 'border-status-danger focus:ring-status-danger/30'
                        : 'border-border focus:ring-navy/20 focus:border-navy'
                    }`}
                    aria-invalid={!!errors.emailAddress}
                    aria-describedby={errors.emailAddress ? 'emailAddress-error' : undefined}
                  />
                </div>
                {errors.emailAddress && (
                  <p id="emailAddress-error" className="text-xs text-status-danger mt-1">
                    {errors.emailAddress}
                  </p>
                )}
              </div>

              {/* Organisation Name */}
              <div>
                <label htmlFor="organisationName" className="block text-xs font-semibold text-slate-700 tracking-normal mb-1.5">
                  Organisation Name <span className="text-status-danger">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-content-secondary">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="organisationName"
                    name="organisationName"
                    value={formData.organisationName}
                    onChange={handleChange}
                    placeholder="Enter your organisation name"
                    className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border rounded-lg text-sm text-content-primary placeholder-content-secondary/60 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.organisationName
                        ? 'border-status-danger focus:ring-status-danger/30'
                        : 'border-border focus:ring-navy/20 focus:border-navy'
                    }`}
                    aria-invalid={!!errors.organisationName}
                    aria-describedby={errors.organisationName ? 'organisationName-error' : undefined}
                  />
                </div>
                {errors.organisationName && (
                  <p id="organisationName-error" className="text-xs text-status-danger mt-1">
                    {errors.organisationName}
                  </p>
                )}
              </div>

              {/* Acknowledgement Checkbox */}
              <div className="pt-2">
                <div className="flex items-start gap-3 p-3 bg-slate-50 border border-border rounded-xl">
                  <input
                    type="checkbox"
                    id="pilot-programme-agreement"
                    checked={acknowledged}
                    onChange={e => {
                      setAcknowledged(e.target.checked);
                      if (errors.acknowledgement) {
                        setErrors(prev => {
                          const next = { ...prev };
                          delete next.acknowledgement;
                          return next;
                        });
                      }
                    }}
                    className="mt-0.5 h-4 w-4 rounded border-border text-navy focus:ring-navy focus:ring-offset-0 cursor-pointer"
                  />
                  <label htmlFor="pilot-programme-agreement" className="text-xs text-content-secondary cursor-pointer leading-relaxed">
                    I confirm my interest in the AssetShift pilot programme and agree to be contacted regarding evaluation milestones and requirements.
                  </label>
                </div>
                {errors.acknowledgement && (
                  <p className="text-xs text-status-danger mt-1">
                    {errors.acknowledgement}
                  </p>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 bg-navy hover:bg-navy-light text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Pilot Request...</span>
                    </>
                  ) : (
                    <span>Send a Pilot Request</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
