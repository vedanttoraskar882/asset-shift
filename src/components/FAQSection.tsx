import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../data/faqs';
import { ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  // Only one accordion open at a time (default first open)
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-white border-b border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold/10 text-gold-dark border border-gold/20">
            Answers & Clarifications
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed max-w-2xl mx-auto">
            Detailed answers regarding AssetShift's proposed architecture, planned delivery roadmap, commercial assumptions and pilot participation.
          </p>
        </div>

        {/* 15 FAQ Accordion Items with Framer Motion */}
        <div className="space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-50 border-gold/50 shadow-md ring-1 ring-gold/20'
                    : 'bg-white border-border hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-inset"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-question-${faq.id}`}
                >
                  <span className={`text-base sm:text-lg font-bold leading-snug transition-colors ${
                    isOpen ? 'text-navy' : 'text-slate-800'
                  }`}>
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-navy text-gold rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-question-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-content-secondary leading-relaxed border-t border-slate-200/60">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
