import React, { useState } from 'react';
import { LOGO_URL, CONTACT_PHONE, getWhatsAppLink } from '../data/internshipData';
import { Phone, Menu, X, ArrowUpRight, Sparkles, MessageCircle } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenApplyModal: (trackId?: string) => void;
  onSelectTrack: (trackId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenApplyModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'roles', label: 'Internships' },
    { id: 'why-us', label: 'Why Intern With Us' },
    { id: 'about', label: 'About Us' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tickerItems = (
    <div className="flex items-center gap-8 px-4 shrink-0">
      <span className="flex items-center gap-2">
        <span className="text-amber-400">🚀</span>
        <strong className="text-amber-300">Next Internship Batch 2025:</strong> Admissions Open! Limited Seats Available.
      </span>
      <span className="text-white/30">•</span>
      <span className="flex items-center gap-2">
        <span className="text-amber-400">🎓</span>
        <strong className="text-white">100% Practical Training:</strong> Real-World Enterprise Capstone Projects.
      </span>
      <span className="text-white/30">•</span>
      <span className="flex items-center gap-2">
        <span className="text-amber-400">📞</span>
        <strong className="text-amber-300">Admissions Hotline:</strong> Call +91 9309253549 for Instant Counseling.
      </span>
      <span className="text-white/30">•</span>
      <span className="flex items-center gap-2">
        <span className="text-amber-400">🏆</span>
        <strong className="text-white">5,000+ Alumni Placed</strong> across Top Tech Companies with 98% Rate.
      </span>
      <span className="text-white/30">•</span>
    </div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all">
      {/* Top Moving Announcement Line */}
      <div className="w-full bg-gradient-to-r from-[#00113a] via-[#002366] to-[#00113a] text-white py-1.5 overflow-hidden border-b border-amber-400/20 text-[12px] sm:text-[13px] shadow-sm select-none">
        <div className="animate-marquee">
          {tickerItems}
          {tickerItems}
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-[#f8f9fa]/90 backdrop-blur-xl border-b border-[#c5c6d2]/30 shadow-[0_1px_12px_rgba(0,17,58,0.04)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group min-w-0 shrink"
        >
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200/80 p-0.5 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform shrink-0 overflow-hidden">
            <img 
              src={LOGO_URL} 
              alt="Infoyashonand Technology Logo" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-heading font-extrabold text-[15px] sm:text-[19px] leading-tight text-[#00113a] tracking-tight group-hover:text-[#0059bb] transition-colors truncate">
              Infoyashonand Technology
            </span>
            <span className="text-[9px] sm:text-[11px] font-semibold text-[#0059bb] tracking-wider sm:tracking-widest uppercase truncate">
              Pvt. Ltd. • Innovate • Develop • Grow
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3.5 py-2 rounded-full text-[14px] font-semibold transition-all duration-200 ${
                  isActive 
                    ? 'text-[#0059bb] bg-[#0059bb]/10 font-bold' 
                    : 'text-[#444650] hover:text-[#00113a] hover:bg-slate-200/50'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Call Hotline Quick Link */}
          <a
            href={`tel:${CONTACT_PHONE}`}
            className="hidden xl:inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-[13px] font-bold text-[#00113a] bg-amber-50 border border-amber-200 hover:bg-amber-100 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#d07c00]" />
            <span>{CONTACT_PHONE}</span>
          </a>

          {/* WhatsApp Primary CTA */}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-600 text-white font-extrabold text-[12px] sm:text-[14px] px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>WhatsApp Enquiry</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-xl text-[#00113a] hover:bg-slate-200/60 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#c5c6d2]/40 px-5 py-4 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`flex items-center justify-between text-left px-4 py-3 rounded-xl text-[15px] font-semibold transition-colors ${
                  activeTab === link.id
                    ? 'bg-[#0059bb]/10 text-[#0059bb] font-bold'
                    : 'text-[#191c1d] hover:bg-slate-100'
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#757682]" />
              </button>
            ))}

            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-[14px] font-extrabold text-white bg-gradient-to-r from-emerald-500 to-green-600 shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4.5 h-4.5 text-white" />
                <span>WhatsApp Enquiry</span>
              </a>

              <a
                href={`tel:${CONTACT_PHONE}`}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-[14px] font-bold text-white bg-[#00113a]"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                Call Admissions: {CONTACT_PHONE}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
