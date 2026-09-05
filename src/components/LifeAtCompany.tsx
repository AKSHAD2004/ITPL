import React from 'react';
import { LOGO_URL } from '../data/internshipData';
import { GraduationCap, TrendingUp, HeartHandshake, CheckCircle2, Terminal, Code2, Users2, Sparkles } from 'lucide-react';

export const LifeAtCompany: React.FC = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Continuous Learning',
      desc: 'Access to premium tech libraries, curated architectural roadmaps, and weekly deep-dive masterclasses led by principal engineers.',
      badge: 'Skill Mastery'
    },
    {
      icon: TrendingUp,
      title: 'Rapid Practical Growth',
      desc: 'Work on actual production codebases and live client software. Every sprint you push real code to GitHub repositories and staging servers.',
      badge: 'Zero Fluff'
    },
    {
      icon: HeartHandshake,
      title: 'Collaborative & Inclusive Culture',
      desc: 'Join a dynamic, supportive cohort of fellow builders. Participate in internal hackathons, pair programming, and networking meetups.',
      badge: 'Community First'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-y border-[#c5c6d2]/20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag & Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 text-[#0059bb] font-heading font-bold text-[12px] uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Culture & Environment</span>
          </div>
          <h2 className="font-heading font-extrabold text-[28px] sm:text-[38px] text-[#00113a] tracking-tight flex flex-col items-center justify-center gap-3 sm:gap-4">
            <span>Life at</span>
            <div className="inline-flex items-center gap-3.5 sm:gap-5 md:gap-6 px-6 sm:px-8 md:px-10 py-3.5 sm:py-4.5 md:py-5 rounded-2xl sm:rounded-3xl bg-[#1b2685] text-white shadow-2xl border border-white/15 select-none hover:scale-[1.02] transition-transform duration-200">
              {/* Circular Logo Emblem */}
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white border-2 border-white/30 p-0.5 sm:p-1 flex items-center justify-center shadow-md shrink-0 overflow-hidden">
                <img 
                  src={LOGO_URL} 
                  alt="INFOYASHONAND Logo" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Thin Vertical White Divider */}
              <div className="w-[2px] sm:w-[2.5px] md:w-[3px] h-10 sm:h-14 md:h-18 bg-white/90 shrink-0" />

              {/* Two-line company name perfectly aligned edge-to-edge matching reference */}
              <div className="flex items-center min-w-0">
                <svg 
                  viewBox="0 0 670 170" 
                  className="w-auto h-[40px] sm:h-[56px] md:h-[68px] shrink-0 select-none"
                  style={{ overflow: 'visible' }}
                >
                  <text 
                    x="0" 
                    y="90" 
                    fill="#ffffff"
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
                    fill="rgba(255, 255, 255, 0.95)"
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
          </h2>
          <p className="text-[15px] sm:text-[17px] text-[#444650] mt-3 max-w-2xl mx-auto">
            We don't believe in boring busywork. We nurture aspiring software developers, data practitioners, and marketers into confident industry leaders.
          </p>
        </div>

        {/* 3 Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="relative bg-[#f8f9fa] rounded-3xl p-7 sm:p-8 border border-[#c5c6d2]/30 hover:border-[#0059bb]/50 hover:bg-white hover:shadow-[0_12px_30px_rgba(0,17,58,0.08)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#00113a] text-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#0059bb] transition-all duration-300">
                      <Icon className="w-7 h-7 text-[#b3c5ff]" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-100/70 text-[#00113a]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-[19px] sm:text-[20px] text-[#00113a] mb-3 group-hover:text-[#0059bb] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-[14px] sm:text-[15px] text-[#444650] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-[13px] font-semibold text-[#0059bb]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Verified Internship Component</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
