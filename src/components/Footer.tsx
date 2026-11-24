import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onRequestPilot: (context?: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Platform', href: '#platform' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Market & Pricing', href: '#market-pricing' },
  { label: 'FAQ', href: '#faq' },
];

const PLANNED_SOLUTIONS = [
  { label: 'Obligation Engine', href: '#platform' },
  { label: 'Asset Identity Spine', href: '#platform' },
  { label: 'Liability Clock', href: '#platform' },
  { label: 'MAP Invoice Challenge', href: '#platform' },
  { label: 'Migration Assurance', href: '#platform' },
  { label: 'Evidence Pack', href: '#platform' },
];

export const Footer: React.FC<FooterProps> = ({
  onRequestPilot,
  onOpenPrivacy,
  onOpenTerms
}) => {
  const currentYear = new Date().getFullYear();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="bg-navy-dark text-slate-400 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand & Summary (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-baseline gap-2 text-white">
              <span className="text-2xl font-extrabold tracking-[-0.03em] text-white font-heading">
                Asset<span className="text-gold">Shift</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 uppercase font-medium">
                Assurance
              </span>
            </div>

            <p className="text-xs font-semibold text-gold tracking-wide">
              Cross-Party Meter-Asset Lifecycle Assurance
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              A proposed software assurance platform designed to help UK electricity organisations identify incomplete meter lifecycle obligations and address avoidable financial exposure.
            </p>
          </div>

          {/* Column 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="hover:text-gold transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Planned Solutions (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Planned Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              {PLANNED_SOLUTIONS.map((sol) => (
                <li key={sol.label}>
                  <a
                    href={sol.href}
                    onClick={(e) => handleScroll(e, sol.href)}
                    className="hover:text-gold transition-colors inline-block py-0.5"
                  >
                    {sol.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get Involved (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Get Involved
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              We are actively engaging with forward-thinking suppliers and asset providers to shape platform specifications.
            </p>
            <div className="space-y-2 pt-1 text-xs">
              <button
                onClick={() => onRequestPilot('Footer: Request a Pilot')}
                className="w-full text-left py-2 px-3 rounded-lg bg-white/5 hover:bg-gold/15 hover:text-gold text-slate-200 border border-white/10 transition-colors flex items-center justify-between"
              >
                <span>Request a Pilot</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onRequestPilot('Footer: Register Interest')}
                className="w-full text-left py-2 px-3 rounded-lg bg-white/5 hover:bg-gold/15 hover:text-gold text-slate-200 border border-white/10 transition-colors flex items-center justify-between"
              >
                <span>Register Interest</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onRequestPilot('Footer: Discuss Your Requirements')}
                className="w-full text-left py-2 px-3 rounded-lg bg-white/5 hover:bg-gold/15 hover:text-gold text-slate-200 border border-white/10 transition-colors flex items-center justify-between"
              >
                <span>Discuss Your Requirements</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Footer Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} AssetShift. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-gold transition-colors focus:outline-none"
            >
              Privacy Notice
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-gold transition-colors focus:outline-none"
            >
              Terms of Use
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
