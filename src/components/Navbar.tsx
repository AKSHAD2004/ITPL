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
        <strong className="text-amber-300">Next Internship Batch 2026:</strong> Admissions Open! Limited Seats Available.
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
      <div className="bg-[#1b2685] border-b border-white/10 shadow-[0_4px_25px_rgba(0,17,58,0.5)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between gap-4">
        {/* Brand Logo & Name Matching Reference - Filling Full Navbar on Mobile */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center justify-center lg:justify-start gap-2.5 min-[380px]:gap-3.5 sm:gap-4 cursor-pointer group min-w-0 select-none w-full lg:w-auto"
        >
          {/* Clean Circular Logo Emblem */}
          <div className="relative w-13 h-13 min-[380px]:w-15 min-[380px]:h-15 sm:w-16 sm:h-16 md:w-18 md:h-18 flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shrink-0">
            <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
              <img 
                src={LOGO_URL} 
                alt="INFOYASHONAND Logo" 
                className="w-full h-full object-cover scale-[1.2] -translate-x-[4%]"
              />
            </div>
          </div>

          {/* Vertical White Divider with Visible Spacing */}
          <div className="w-[2px] sm:w-[2.5px] h-9 min-[380px]:h-10 sm:h-11 md:h-12 bg-white/90 rounded-full shrink-0 shadow-xs mx-0.5 sm:mx-1" />

          {/* Two-line exact company name perfectly aligned edge-to-edge matching reference */}
          <div className="flex items-center min-w-0">
            <svg 
              viewBox="0 0 670 170" 
              className="w-auto h-[34px] min-[360px]:h-[38px] min-[400px]:h-[42px] sm:h-[46px] md:h-[50px] shrink-0 select-none"
              style={{ overflow: 'visible' }}
            >
              <text 
                x="0" 
                y="90" 
                className="fill-white group-hover:fill-amber-300 transition-colors duration-200"
                fontFamily="'Oswald', sans-serif" 
                fontWeight="700" 
                fontSize="102"
                textLength="670" 
                lengthAdjust="spacing"
              >
                INFOYASHONAND
              </text>
              <text 
                x="0" 
                y="162" 
                className="fill-white/95"
                fontFamily="'Oswald', sans-serif" 
                fontWeight="700" 
                fontSize="64"
                textLength="670" 
                lengthAdjust="spacing"
              >
                TECHNOLOGY PVT. LTD.
              </text>
            </svg>
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
