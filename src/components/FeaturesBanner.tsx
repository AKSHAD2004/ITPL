import React from 'react';
import { Laptop, Award, Users } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const FeaturesBanner: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  const features = [
    {
      icon: 'model_training',
      fallbackIcon: Laptop,
      title: 'PRACTICAL TRAINING',
      subtitle: '100% Hands-on Experience',
      desc: 'Build real client applications and enterprise capstone software with production workflows.',
      bgLight: 'bg-red-50 text-[#cc0000]',
      accentLine: 'from-[#cc0000] to-red-400',
    },
    {
      icon: 'workspace_premium',
      fallbackIcon: Award,
      title: 'CERTIFICATE PROVIDED',
      subtitle: 'Industry-Recognized Credential',
      desc: 'Earn a verifiable certificate of completion, performance scorecard, and Letter of Recommendation.',
      bgLight: 'bg-amber-50 text-[#d07c00]',
      accentLine: 'from-amber-500 to-orange-400',
    },
    {
      icon: 'supervisor_account',
      fallbackIcon: Users,
      title: 'EXPERT MENTORSHIP',
      subtitle: 'Guidance from Professionals',
      desc: 'Weekly 1-on-1 code reviews, architectural feedback, and rigorous technical mock interviews.',
      bgLight: 'bg-blue-50 text-[#0059bb]',
      accentLine: 'from-[#0059bb] to-blue-400',
    }
  ];

  return (
    <section className="relative z-20 -mt-10 sm:-mt-12 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div
        ref={ref}
        className={`bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,17,58,0.08)] border border-[#c5c6d2]/40 p-5 sm:p-8 overflow-hidden transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Top brand accent stripe */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#cc0000] via-[#00113a] to-[#0059bb] rounded-t-3xl" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {features.map((item, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${index * 120 + 200}ms` }}
              className={`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 group cursor-pointer transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              } ${index !== 0 ? 'pt-6 md:pt-0 md:pl-8' : ''}`}
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${item.bgLight} flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                <span className="material-symbols-outlined text-[30px] sm:text-[34px]">
                  {item.icon}
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="font-heading font-extrabold text-[15px] sm:text-[16px] tracking-wide text-[#00113a] uppercase">
                  {item.title}
                </h3>
                <p className={`text-[13px] sm:text-[14px] font-bold bg-gradient-to-r ${item.accentLine} bg-clip-text text-transparent`}>
                  {item.subtitle}
                </p>
                <p className="text-[12px] sm:text-[13px] text-[#444650] leading-relaxed line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
