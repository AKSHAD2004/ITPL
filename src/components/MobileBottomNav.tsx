import React from 'react';
import { Home, Briefcase, Phone } from 'lucide-react';
import { CONTACT_PHONE, getWhatsAppLink } from '../data/internshipData';
import { WhatsappIcon } from './WhatsappIcon';

interface MobileBottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenApply: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  setActiveTab
}) => {
  const handleTab = (id: string) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }; 

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200/80 shadow-[0_-4px_20px_rgba(0,17,58,0.08)] px-2 py-2">
      <div className="max-w-md mx-auto flex items-center justify-around">
        
        {/* Home */}
        <button
          onClick={() => handleTab('home')}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-colors ${
            activeTab === 'home' ? 'text-[#0059bb]' : 'text-[#757682]'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-bold">Home</span>
        </button>

        {/* Opportunities */}
        <button
          onClick={() => handleTab('roles')}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-colors ${
            activeTab === 'roles' ? 'text-[#0059bb]' : 'text-[#757682]'
          }`}
        >
          <Briefcase className="w-5 h-5" />
          <span className="text-[10px] font-bold">Tracks</span>
        </button>

        {/* Center WhatsApp Button - Always Popped Up & Highly Attractive */}
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noreferrer"
          className="relative flex flex-col items-center -mt-7 cursor-pointer group select-none"
        >
          {/* Eye-catching floating chip */}
          <span className="absolute -top-5.5 bg-gradient-to-r from-emerald-600 to-green-600 text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow-md whitespace-nowrap animate-bounce flex items-center gap-1 z-10 border border-emerald-300/40">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-200 animate-ping" />
            Chat Now
          </span>

          <div className="relative">
            {/* Pulsing radar ping wave */}
            <span className="absolute -inset-1.5 rounded-full bg-emerald-400/50 animate-ping pointer-events-none" />

            {/* Glowing blur halo */}
            <span className="absolute -inset-2 rounded-full bg-emerald-500/40 blur-md animate-pulse pointer-events-none" />

            {/* Main Button */}
            <div className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 via-green-500 to-emerald-600 text-white flex items-center justify-center border-[3px] border-white group-hover:scale-110 active:scale-95 transition-all duration-200 animate-whatsapp-pulse">
              <WhatsappIcon className="w-7 h-7 text-white drop-shadow-sm" />

              {/* Online pulse dot */}
              <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full flex items-center justify-center shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
              </span>
            </div>
          </div>

          <span className="text-[10px] font-black text-emerald-700 mt-1 uppercase tracking-wider">
            WhatsApp
          </span>
        </a>

        {/* Direct Call - Animated Ringing */}
        <a
          href={`tel:${CONTACT_PHONE}`}
          className="flex flex-col items-center gap-1 py-1 px-3 rounded-xl text-[#00113a] hover:text-[#0059bb] transition-all group select-none relative"
        >
          <div className="relative w-7 h-7 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 group-hover:bg-amber-100 transition-colors shadow-xs">
            {/* Subtle amber ping pulse */}
            <span className="absolute -inset-0.5 rounded-full bg-amber-400/30 animate-ping pointer-events-none" />
            <Phone className="w-4 h-4 text-amber-600 animate-phone-ring" />
          </div>
          <span className="text-[10px] font-bold text-amber-700 group-hover:text-amber-800">Call</span>
        </a>

      </div>
    </div>
  );
};
