import React from 'react';
import { TrendingUp, Globe, Award, UserCheck, ShieldCheck, Sparkles, Building2, Target } from 'lucide-react';

export const WhyInternSection: React.FC = () => {
  const pillars = [
    {
      icon: TrendingUp,
      title: 'Career Growth',
      highlight: 'Fast-Track Trajectory',
      desc: 'Work on production codebases and high-impact projects that transform your resume from standard to outstanding.',
      metric: '3x',
      metricLabel: 'Faster Skill Mastery'
    },
    {
      icon: Globe,
      title: 'Industry Exposure',
      highlight: 'Real Enterprise Stacks',
      desc: 'Get hands-on with cutting-edge tools: React 19, TypeScript, PyTorch, Flutter, Selenium, and Google Analytics 4.',
      metric: '80+',
      metricLabel: 'Hiring Partners'
    },
    {
      icon: Award,
      title: 'Certification & LOR',
      highlight: 'Verifiable Credentials',
      desc: 'Earn an accredited Internship Certificate, project completion badges, and a custom Letter of Recommendation.',
      metric: '100%',
      metricLabel: 'Recognized by Top Tech'
    },
    {
      icon: UserCheck,
      title: 'Expert Mentorship',
      highlight: '1-on-1 Technical Leads',
      desc: 'Receive continuous guidance, direct PR code reviews, and structured mock technical interview rounds.',
      metric: '1:1',
      metricLabel: 'Personalized Coaching'
    }
  ];

  const stats = [
    { value: '200+', label: 'Students Placed & Mentored' },
    { value: '98%', label: 'Placement Success Rate' },
    { value: '80+', label: 'Corporate Hiring Partners' },
    { value: '100%', label: 'Hands-On Practical Code' }
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-[#d07c00] font-heading font-bold text-[12px] uppercase tracking-widest mb-4 border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>The Infoyashonand Advantage</span>
          </div>
          <h2 className="font-heading font-extrabold text-[32px] sm:text-[42px] lg:text-[48px] text-[#00113a] tracking-tight leading-tight">
            Why Intern With Us?
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#444650] mt-4 leading-relaxed">
            We bridge the gap between academic theory and real software engineering. Here is why our interns stand out in competitive job markets.
          </p>
        </div>

        {/* 4 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                style={{ animationDelay: `${idx * 150}ms` }}
                className="relative overflow-hidden bg-[#f8f9fa] rounded-3xl p-7 border border-[#c5c6d2]/30 hover:border-[#0059bb]/60 hover:bg-white hover:shadow-[0_20px_45px_rgba(0,89,187,0.15)] hover:-translate-y-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 ease-out flex flex-col justify-between group cursor-pointer animate-in fade-in slide-in-from-bottom-6"
              >
                {/* Subtle Sheen Highlight Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                <div>
                  {/* Animated Icon Box */}
                  <div className="w-14 h-14 rounded-2xl bg-[#00113a] text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 group-hover:rotate-6 group-hover:bg-gradient-to-tr from-[#0059bb] to-amber-500 group-hover:shadow-[0_8px_20px_rgba(0,89,187,0.35)] transition-all duration-500">
                    <Icon className="w-7 h-7 text-[#b3c5ff] group-hover:text-white transition-colors duration-300" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0059bb] block mb-1 group-hover:translate-x-1 transition-transform duration-300">
                    {item.highlight}
                  </span>

                  <h3 className="font-heading font-extrabold text-[20px] text-[#00113a] mb-3 group-hover:text-[#0059bb] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-[14px] text-[#444650] leading-relaxed group-hover:text-[#191c1d] transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="font-heading font-black text-[22px] text-[#00113a] group-hover:text-[#0059bb] group-hover:scale-105 transition-all duration-300 inline-block">
                    {item.metric}
                  </span>
                  <span className="text-[11px] font-semibold text-[#757682] uppercase text-right group-hover:text-[#00113a] transition-colors duration-300">
                    {item.metricLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Strip Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#00113a] via-[#001f5c] to-[#00113a] text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {stats.map((st, sIdx) => (
              <div key={sIdx} className={`space-y-1.5 ${sIdx !== 0 ? 'pt-4 sm:pt-0' : ''}`}>
                <div className="font-heading font-black text-[32px] sm:text-[42px] lg:text-[46px] text-amber-300 tracking-tight leading-none">
                  {st.value}
                </div>
                <div className="text-[13px] sm:text-[14px] font-medium text-[#b3c5ff]">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
