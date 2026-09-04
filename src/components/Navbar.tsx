import React from 'react';
import { LOGO_URL, CONTACT_PHONE } from '../data/internshipData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenApplyModal: (trackId?: string) => void;
  onSelectTrack: (trackId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'roles', label: 'Internships' },
    { id: 'why-us', label: 'Why Intern With Us' },
    { id: 'about', label: 'About Us' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
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
        <strong className="text-amber-300">Admissions Hotline:</strong> Call +91 {CONTACT_PHONE} for Instant Counseling.
      </span>
      <span className="text-white/30">•</span>
      <span className="flex items-center gap-2">
        <span className="text-amber-400">🏆</span>
        <strong className="text-white">200+ Alumni Placed</strong> across Top Tech Companies with 98% Rate.
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
      <div className="bg-[#00113a] backdrop-blur-xl border-b border-white/10 shadow-[0_4px_25px_rgba(0,17,58,0.5)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo & Name matching official banner */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center cursor-pointer group min-w-0 shrink"
        >
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-white/20 p-0.5 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform shrink-0 overflow-hidden">
            <img 
              src={LOGO_URL} 
              alt="Infoyashonand Technology Logo" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Vertical Divider Line */}
          <div className="w-[2px] h-8 sm:h-10 bg-white/40 mx-2.5 sm:mx-3 shrink-0" />

          <div className="flex flex-col min-w-0 justify-center">
            <span className="font-heading font-black text-[17px] sm:text-[22px] leading-none text-white tracking-[0.05em] group-hover:text-amber-300 transition-colors truncate uppercase">
              INFOYASHONAND
            </span>
            <span className="font-heading font-extrabold text-[10px] sm:text-[13px] leading-tight text-slate-200 tracking-[0.06em] uppercase truncate mt-0.5">
              TECHNOLOGY PVT. LTD.
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links (Hidden on mobile) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3.5 py-2 rounded-full text-[14px] font-semibold transition-all duration-200 ${
                  isActive 
                    ? 'text-amber-300 bg-white/15 font-bold' 
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  </header>
);
};
