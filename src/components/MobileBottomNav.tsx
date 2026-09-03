import React from 'react';
import { Home, Briefcase, Sparkles, FileCheck, PhoneCall, Phone } from 'lucide-react';
import { CONTACT_PHONE } from '../data/internshipData';

interface MobileBottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenApply: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  setActiveTab,
  onOpenApply
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

        {/* Center Apply Now Button */}
        <button
          onClick={onOpenApply}
          className="flex flex-col items-center -mt-5 cursor-pointer"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 to-amber-400 text-[#00113a] flex items-center justify-center shadow-[0_4px_12px_rgba(250,204,21,0.5)] border-2 border-white">
            <Sparkles className="w-6 h-6 text-[#00113a]" />
          </div>
          <span className="text-[10px] font-extrabold text-[#00113a] mt-0.5">Apply</span>
        </button>

        {/* Direct Call */}
        <a
          href={`tel:${CONTACT_PHONE}`}
          className="flex flex-col items-center gap-1 py-1 px-3 rounded-xl text-[#00113a] hover:text-[#0059bb] transition-colors"
        >
          <Phone className="w-5 h-5 text-amber-600" />
          <span className="text-[10px] font-bold">Call</span>
        </a>

      </div>
    </div>
  );
};
