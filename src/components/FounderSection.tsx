import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Code2, 
  CheckCircle2, 
  ShieldCheck
} from 'lucide-react';

const PROFESSIONAL_BACKGROUND = [
  'Senior Transportation Analyst',
  'Energy industry invoice validation',
  'Half-hourly settlement reconciliation',
  'Cost recovery investigations',
  'Operational and financial risk management',
  'Banking and account reconciliation',
  'Procurement and process improvement'
];

const QUALIFICATIONS = [
  'PRINCE2 Foundation',
  'Level 5 Diploma in Trading and Financial Market Analysis',
  'CIPS Levels 1 and 2 achieved; further studies ongoing'
];

const TECHNICAL_SKILLS = [
  'Python',
  'SQL',
  'Power BI',
  'Microsoft Excel',
  'R Programming',
  'Financial Modelling',
  'Data Analytics',
  'Risk Management'
];

export const FounderSection: React.FC = () => {
  return (
    <section className="py-20 bg-background-light border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-navy/5 text-navy border border-navy/10">
            Founder & Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            Meet Our Founder
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
            Bridging operational domain knowledge in energy charge validation with quantitative finance and analytics.
          </p>
        </div>

        {/* Founder Card Container (No photo / avatar box) */}
        <div className="mt-14 max-w-5xl mx-auto bg-white rounded-3xl border border-border shadow-md hover:shadow-lg transition-shadow overflow-hidden">
          
          {/* Subtle Accent Stripe */}
          <div className="h-2 bg-gradient-to-r from-navy via-navy-light to-gold" />

          <div className="p-8 sm:p-10 lg:p-12">
            
            {/* Header: Name, Title & Credentials (No photo/avatar placeholder) */}
            <div className="pb-8 border-b border-border">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gold/10 text-gold-dark border border-gold/20">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Founder & Leadership
                </div>
                <span className="text-xs font-medium text-slate-400">
                  Energy Revenue Assurance & Data Analytics
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-[-0.03em] font-heading">
                Odinakachi Maduabuchukwu
              </h3>
              <p className="text-base font-semibold text-content-secondary mt-1">
                Founder, AssetShift
              </p>
              <p className="text-xs sm:text-sm text-slate-500 max-w-3xl pt-2 leading-relaxed">
                MSc in Finance and Data Analytics (University of Stirling, Merit) • UK Energy Sector Reconciliation & Invoice Validation Specialist
              </p>
            </div>

            {/* Biography */}
            <div className="py-8 border-b border-border space-y-4 text-sm text-content-secondary leading-relaxed">
              <p>
                Odinakachi Maduabuchukwu is an operations and finance-focused analyst with professional experience in the UK energy sector, financial reconciliation, invoice validation, cost recovery and operational process improvement.
              </p>
              <p>
                Her background in industry charge validation, half-hourly settlement reconciliation, meter tracking and revenue leakage investigations has informed the development of AssetShift.
              </p>
              <p>
                She holds an MSc in Finance and Data Analytics from the University of Stirling and combines financial, commercial and technical expertise to address operational and financial challenges within the energy industry.
              </p>
            </div>

            {/* Structured Credentials Grid */}
            <div className="pt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Left Column: Education & Qualifications */}
              <div className="space-y-6">
                
                {/* Education */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-border">
                  <div className="flex items-center gap-2.5 text-navy font-bold text-base mb-4">
                    <GraduationCap className="w-5 h-5 text-gold" />
                    <span>Education</span>
                  </div>
                  <div className="space-y-4">
                    <div className="border-l-2 border-gold pl-3.5">
                      <h4 className="text-sm font-bold text-navy">MSc Finance and Data Analytics</h4>
                      <p className="text-xs text-content-secondary mt-0.5">University of Stirling, United Kingdom</p>
                      <span className="inline-block mt-1.5 px-2.5 py-0.5 text-[10px] font-semibold bg-emerald-50 text-status-success rounded border border-emerald-200">
                        Grade: Merit
                      </span>
                    </div>

                    <div className="border-l-2 border-slate-300 pl-3.5">
                      <h4 className="text-sm font-bold text-navy">BSc Biochemistry</h4>
                      <p className="text-xs text-content-secondary mt-0.5">Federal University of Technology, Nigeria</p>
                    </div>
                  </div>
                </div>

                {/* Professional Qualifications */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-border">
                  <div className="flex items-center gap-2.5 text-navy font-bold text-base mb-4">
                    <Award className="w-5 h-5 text-gold" />
                    <span>Professional Qualifications</span>
                  </div>
                  <ul className="space-y-2.5">
                    {QUALIFICATIONS.map((qual, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-content-primary">
                        <CheckCircle2 className="w-4 h-4 text-status-success flex-shrink-0 mt-0.5" />
                        <span>{qual}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Right Column: Background & Technical Skills */}
              <div className="space-y-6">
                
                {/* Professional Background */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-border">
                  <div className="flex items-center gap-2.5 text-navy font-bold text-base mb-4">
                    <Briefcase className="w-5 h-5 text-gold" />
                    <span>Professional Background</span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-content-primary">
                    {PROFESSIONAL_BACKGROUND.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-navy mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Skills */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-border">
                  <div className="flex items-center gap-2.5 text-navy font-bold text-base mb-4">
                    <Code2 className="w-5 h-5 text-gold" />
                    <span>Technical & Analytical Toolkit</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {TECHNICAL_SKILLS.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-white border border-border rounded-lg text-xs font-semibold text-navy shadow-2xs hover:border-gold hover:text-gold-dark transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
