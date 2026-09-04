import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/internshipData';
import { Star, Quote, ChevronLeft, ChevronRight, Building2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

function ScrollRevealCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
      }`}
    >
      {children}
    </div>
  );
}

export const SuccessStoriesSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const headerReveal = useScrollReveal();

  const nextTestimonial = () => setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  const prevTestimonial = () => setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#f8f9fa] border-y border-[#c5c6d2]/30 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#cc0000]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#0059bb]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div
          ref={headerReveal.ref}
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 transition-all duration-700 ${
            headerReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-2xl">
            <span className="text-[12px] font-bold uppercase tracking-widest text-[#cc0000] block mb-2 font-heading">
              Alumni Hall of Fame
            </span>
            <h2 className="font-heading font-extrabold text-[32px] sm:text-[42px] text-[#00113a] tracking-tight">
              Student Success Stories
            </h2>
            <p className="text-[16px] text-[#444650] mt-3">
              Hear directly from past interns who transformed their practical project experience into high-paying full-time engineering offers.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 hover:border-[#cc0000] hover:text-[#cc0000] text-[#00113a] flex items-center justify-center shadow-sm transition-all cursor-pointer"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-[#00113a] text-white hover:bg-[#cc0000] flex items-center justify-center shadow-md transition-all cursor-pointer"
              aria-label="Next story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => {
            const isFeatured = idx === activeIdx;
            return (
              <ScrollRevealCard key={t.id} delay={idx * 120}>
                <div
                  className={`bg-white rounded-3xl p-7 sm:p-8 border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl ${
                    isFeatured
                      ? 'border-[#cc0000] shadow-[0_12px_32px_rgba(204,0,0,0.10)] ring-2 ring-red-100'
                      : 'border-[#c5c6d2]/30 hover:border-[#cc0000]/40 shadow-sm'
                  }`}
                >
                  {/* Featured bar */}
                  {isFeatured && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#cc0000] to-[#0059bb] rounded-t-3xl" />
                  )}

                  <div className="relative">
                    {/* Rating & Quote */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <Quote className={`w-8 h-8 shrink-0 transition-colors duration-300 ${isFeatured ? 'text-red-100' : 'text-blue-100'} group-hover:text-red-100`} />
                    </div>

                    {/* Quote Body */}
                    <p className="text-[14px] sm:text-[15px] text-[#191c1d] leading-relaxed font-normal mb-6 italic">
                      "{t.quote}"
                    </p>
                  </div>

                  {/* Profile Footer */}
                  <div className="pt-5 border-t border-slate-100 flex items-center gap-3.5">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${t.bgGrad} text-white font-heading font-extrabold text-[14px] flex items-center justify-center shrink-0 shadow-sm`}>
                      {t.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-heading font-bold text-[15px] text-[#00113a] truncate">{t.name}</h4>
                      <p className="text-[12px] font-medium text-[#cc0000] truncate">{t.role}</p>
                      <div className="flex items-center gap-1 text-[11px] text-[#444650] font-semibold mt-0.5">
                        <Building2 className="w-3 h-3 text-emerald-600" />
                        <span className="truncate">Placed @ {t.placedAt}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollRevealCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};
