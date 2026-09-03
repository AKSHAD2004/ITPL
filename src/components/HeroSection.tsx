import React from 'react';
import { HERO_IMAGE_URL, getWhatsAppLink } from '../data/internshipData';
import { ArrowRight, Sparkles, Rocket, Laptop, Award, Code2 } from 'lucide-react';
import { WhatsappIcon } from './WhatsappIcon';

interface HeroSectionProps {
  onOpenApplyModal: () => void;
  onExploreRoles: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenApplyModal,
  onExploreRoles
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#00113a] text-white pt-28 sm:pt-36 pb-16 sm:pb-24 min-h-[100dvh] flex items-center justify-center">
      
      {/* Full Background Image Layer - Responsive alignment for mobile & desktop */}
      <div 
        className="absolute inset-0 bg-cover bg-[position:70%_center] md:bg-center bg-no-repeat pointer-events-none transition-all duration-300"
        style={{ backgroundImage: `url(${HERO_IMAGE_URL})` }}
      />

      {/* Balanced Soft Overlay for Full Image Visibility */}
      <div className="absolute inset-0 bg-[#00113a]/40 backdrop-brightness-90 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#00113a]/65 via-transparent to-[#00113a]/85 pointer-events-none" />

      {/* Ambient Tech Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 lg:w-[500px] lg:h-[500px] bg-[#0059bb]/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 lg:w-[500px] lg:h-[500px] bg-amber-500/15 rounded-full blur-[130px]" />
        
        {/* Bottom Diagonal Angle Cut for Smooth Transition */}
        <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 lg:h-20 bg-[#f8f9fa] transform -skew-y-1 sm:-skew-y-2 origin-bottom-left" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6 sm:space-y-8">
          
          {/* Tag Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-amber-500/25 to-orange-500/25 border border-amber-400/50 text-amber-300 shadow-md backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0 animate-spin" style={{ animationDuration: '6s' }} />
            <span className="text-[11px] sm:text-[13px] font-bold tracking-[0.14em] uppercase font-heading">
              Kickstart Your Career With Real-World Experience
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-1 sm:space-y-2">
            <span className="block font-heading font-extrabold text-[36px] sm:text-[50px] md:text-[62px] lg:text-[70px] leading-[1.08] tracking-tight text-white uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              Internship
            </span>
            <span className="block font-heading font-black text-[42px] sm:text-[58px] md:text-[72px] lg:text-[80px] leading-[1.05] tracking-tight uppercase bg-gradient-to-r from-yellow-300 via-amber-400 to-amber-500 text-transparent bg-clip-text drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              Opportunity
            </span>
          </div>

          {/* Subtitle / Pitch */}
          <p className="font-body text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed text-slate-100 max-w-2xl font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
            Kickstart Your Career with Us! Gain real-world experience, work on live enterprise projects, build an industry-ready portfolio, and accelerate your tech trajectory with 1-on-1 mentorship.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-600 text-white font-heading font-extrabold text-[15px] sm:text-[16px] px-8 sm:px-10 py-4 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_14px_30px_rgba(37,211,102,0.55)] hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group cursor-pointer"
            >
              <WhatsappIcon className="w-5 h-5 text-white" />
              <span>WhatsApp Enquiry</span>
            </a>

            <button
              onClick={onExploreRoles}
              className="w-full sm:w-auto border-2 border-white/80 hover:border-white hover:bg-white/20 text-white font-heading font-bold text-[15px] sm:text-[16px] px-8 sm:px-9 py-3.5 rounded-full transition-all flex items-center justify-center gap-2.5 backdrop-blur-md shadow-md"
            >
              <Laptop className="w-5 h-5 text-amber-300" />
              <span>View Programs</span>
            </button>
          </div>

          {/* Floating Highlights Strip - Single line alignment on mobile */}
          <div className="pt-4 flex flex-row items-center justify-center gap-1.5 sm:gap-3 border-t border-white/20 w-full max-w-2xl">
            <div className="inline-flex items-center gap-1 sm:gap-2 px-2.5 sm:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl bg-black/50 border border-white/20 backdrop-blur-md text-[10px] sm:text-[13px] text-white shadow-md whitespace-nowrap shrink-0">
              <Code2 className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
              <span><strong>100%</strong> Practical</span>
            </div>

            <div className="inline-flex items-center gap-1 sm:gap-2 px-2.5 sm:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl bg-black/50 border border-white/20 backdrop-blur-md text-[10px] sm:text-[13px] text-white shadow-md whitespace-nowrap shrink-0">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
              <span><strong>98%</strong> Placement</span>
            </div>

            <div className="inline-flex items-center gap-1 sm:gap-2 px-2.5 sm:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl bg-black/50 border border-white/20 backdrop-blur-md text-[10px] sm:text-[13px] text-white shadow-md whitespace-nowrap shrink-0">
              <Rocket className="w-3 h-3 sm:w-4 sm:h-4 text-amber-300 shrink-0" />
              <span>Fast-Track</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
