import React, { useState } from 'react';
import { TrendingUp, Globe, Award, UserCheck, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const WhyInternSection: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const headerReveal = useScrollReveal();
  const statsReveal = useScrollReveal();

  const pillars = [
    {
      icon: TrendingUp,
      title: 'Career Growth',
      highlight: 'Fast-Track Trajectory',
      desc: 'Work on production codebases and high-impact projects that transform your resume from standard to outstanding.',
      metric: '3x',
      metricLabel: 'Faster Skill Mastery',
      accent: 'from-[#cc0000] to-[#ff4444]',
    },
    {
      icon: Globe,
      title: 'Industry Exposure',
      highlight: 'Real Enterprise Stacks',
      desc: 'Get hands-on with cutting-edge tools: React 19, TypeScript, PyTorch, Flutter, Selenium, and Google Analytics 4.',
      metric: '80+',
      metricLabel: 'Hiring Partners',
      accent: 'from-[#0059bb] to-[#0077ff]',
    },
    {
      icon: Award,
      title: 'Certification & LOR',
      highlight: 'Verifiable Credentials',
      desc: 'Earn an accredited Internship Certificate, project completion badges, and a custom Letter of Recommendation.',
      metric: '100%',
      metricLabel: 'Recognized by Top Tech',
      accent: 'from-[#cc0000] to-amber-600',
    },
    {
      icon: UserCheck,
      title: 'Expert Mentorship',
      highlight: '1-on-1 Technical Leads',
      desc: 'Receive continuous guidance, direct PR code reviews, and structured mock technical interview rounds.',
      metric: '1:1',
      metricLabel: 'Personalized Coaching',
      accent: 'from-[#00113a] to-[#0059bb]',
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
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#cc0000]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#0059bb]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header with scroll reveal */}
        <div
          ref={headerReveal.ref}
          className={`text-center max-w-3xl mx-auto mb-16 sm:mb-20 transition-all duration-700 ${
            headerReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-[#cc0000] font-heading font-bold text-[12px] uppercase tracking-widest mb-4 border border-red-200">
            <Sparkles className="w-3.5 h-3.5 text-[#cc0000]" />
            <span>The INFOYASHONAND Advantage</span>
          </div>
          <h2 className="font-heading font-extrabold text-[32px] sm:text-[42px] lg:text-[48px] text-[#00113a] tracking-tight leading-tight">
            Why Intern With Us?
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#444650] mt-4 leading-relaxed">
            We bridge the gap between academic theory and real software engineering. Here is why our interns stand out in competitive job markets.
          </p>
        </div>

        {/* 4 Value Pillars Grid — staggered scroll reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollRevealCard key={idx} delay={idx * 120}>
                <div
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative overflow-hidden bg-[#f8f9fa] rounded-3xl p-7 border border-[#c5c6d2]/30 hover:border-[#cc0000]/40 hover:bg-white hover:shadow-[0_20px_45px_rgba(204,0,0,0.10)] hover:-translate-y-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 ease-out flex flex-col justify-between group cursor-pointer h-full"
                >
                  {/* Sheen sweep on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                  {/* Top accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accent} rounded-t-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

                  <div>
                    {/* Animated Icon Box */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.accent} text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg transition-all duration-500`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#cc0000] block mb-1 group-hover:translate-x-1 transition-transform duration-300">
                      {item.highlight}
                    </span>

                    <h3 className="font-heading font-extrabold text-[20px] text-[#00113a] mb-3 group-hover:text-[#cc0000] transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-[14px] text-[#444650] leading-relaxed group-hover:text-[#191c1d] transition-colors duration-300">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                    <span className="font-heading font-black text-[22px] text-[#00113a] group-hover:text-[#cc0000] group-hover:scale-105 transition-all duration-300 inline-block">
                      {item.metric}
                    </span>
                    <span className="text-[11px] font-semibold text-[#757682] uppercase text-right group-hover:text-[#00113a] transition-colors duration-300">
                      {item.metricLabel}
                    </span>
                  </div>
                </div>
              </ScrollRevealCard>
            );
          })}
        </div>

        {/* Stats Strip Banner */}
        <div
          ref={statsReveal.ref}
          className={`mt-16 transition-all duration-700 delay-300 ${
            statsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-to-r from-[#00113a] via-[#001f5c] to-[#00113a] text-white rounded-3xl p-8 sm:p-12 shadow-xl overflow-hidden relative">
            {/* Red accent glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-[#cc0000] to-transparent" />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {stats.map((st, sIdx) => (
                <div key={sIdx} className={`space-y-1.5 group ${sIdx !== 0 ? 'pt-4 sm:pt-0' : ''}`}>
                  <div className="font-heading font-black text-[32px] sm:text-[42px] lg:text-[46px] text-amber-300 group-hover:text-[#ff6666] tracking-tight leading-none transition-colors duration-300">
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

      </div>
    </section>
  );
};

/** Internal helper: staggered scroll reveal wrapper */
function ScrollRevealCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {children}
    </div>
  );
}
