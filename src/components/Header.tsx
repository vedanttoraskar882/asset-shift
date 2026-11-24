import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onRequestPilot: () => void;
}

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Platform', href: '#platform' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Market & Pricing', href: '#market-pricing' },
  { label: 'FAQ', href: '#faq' },
];

export const Header: React.FC<HeaderProps> = ({ onRequestPilot }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracking
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 130;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-dark/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-navy-dark/75 backdrop-blur-sm border-b border-white/5 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Wordmark (Clean text wordmark, no icon) */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-baseline gap-2 group focus:outline-none focus:ring-2 focus:ring-gold rounded-lg py-1 px-1.5"
            aria-label="AssetShift Home"
          >
            <span className="text-2xl font-extrabold tracking-tight text-white font-sans">
              Asset<span className="text-gold">Shift</span>
            </span>
            <span className="text-[10px] tracking-widest text-slate-400 uppercase font-medium hidden sm:inline-block">
              Assurance
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-white bg-white/10 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Side: Primary CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onRequestPilot}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-navy-dark bg-gold hover:bg-gold-light active:bg-gold-dark shadow-md hover:shadow-gold/25 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy-dark"
            >
              <span>Request a Pilot</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex lg:hidden items-center gap-2.5">
            <button
              onClick={onRequestPilot}
              className="px-3.5 py-1.5 text-xs font-bold text-navy-dark bg-gold rounded-lg shadow-sm"
            >
              Pilot
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-white/10 space-y-1.5 animate-fadeIn">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block px-3.5 py-2 rounded-lg text-base font-medium ${
                    isActive
                      ? 'text-gold bg-white/10 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-3 border-t border-white/10 px-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestPilot();
                }}
                className="w-full py-3 px-4 rounded-xl text-sm font-bold text-navy-dark bg-gold hover:bg-gold-light flex items-center justify-center gap-2 shadow-md"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Request a Pilot</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
