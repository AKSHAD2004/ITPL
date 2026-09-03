import React from 'react';
import { Laptop, Award, Users, CheckCircle, ShieldCheck, Trophy, Sparkles } from 'lucide-react';

export const FeaturesBanner: React.FC = () => {
  const features = [
    {
      icon: 'model_training',
      fallbackIcon: Laptop,
      title: 'PRACTICAL TRAINING',
      subtitle: '100% Hands-on Experience',
      desc: 'Build real client applications and enterprise capstone software with production workflows.',
      color: 'from-blue-600 to-indigo-700',
      bgLight: 'bg-blue-50 text-[#0059bb]'
    },
    {
      icon: 'workspace_premium',
      fallbackIcon: Award,
      title: 'CERTIFICATE PROVIDED',
      subtitle: 'Industry-Recognized Credential',
      desc: 'Earn a verifiable certificate of completion, performance scorecard, and Letter of Recommendation.',
      color: 'from-amber-500 to-orange-600',
      bgLight: 'bg-amber-50 text-[#d07c00]'
    },
    {
      icon: 'supervisor_account',
      fallbackIcon: Users,
      title: 'EXPERT MENTORSHIP',
      subtitle: 'Guidance from Professionals',
      desc: 'Weekly 1-on-1 code reviews, architectural feedback, and rigorous technical mock interviews.',
      color: 'from-emerald-600 to-teal-700',
      bgLight: 'bg-emerald-50 text-emerald-700'
    }
  ];

  return (
    <section className="relative z-20 -mt-10 sm:-mt-12 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,17,58,0.08)] border border-[#c5c6d2]/40 p-5 sm:p-8 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {features.map((item, index) => {
            const IconComp = item.fallbackIcon;
            return (
              <div 
                key={index} 
                className={`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 group transition-transform ${
                  index !== 0 ? 'pt-6 md:pt-0 md:pl-8' : ''
                }`}
              >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${item.bgLight} flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  <span className="material-symbols-outlined text-[30px] sm:text-[34px]">
                    {item.icon}
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-center sm:justify-start gap-1.5">
                    <h3 className="font-heading font-extrabold text-[15px] sm:text-[16px] tracking-wide text-[#00113a] uppercase">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[13px] sm:text-[14px] font-bold text-[#0059bb]">
                    {item.subtitle}
                  </p>
                  <p className="text-[12px] sm:text-[13px] text-[#444650] leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
