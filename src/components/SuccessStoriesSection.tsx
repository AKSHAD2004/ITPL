import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/internshipData';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, Building2 } from 'lucide-react';

export const SuccessStoriesSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#f8f9fa] border-y border-[#c5c6d2]/30 relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="text-[12px] font-bold uppercase tracking-widest text-[#0059bb] block mb-2 font-heading">
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
              className="w-12 h-12 rounded-full bg-white border border-slate-200 hover:border-[#0059bb] hover:text-[#0059bb] text-[#00113a] flex items-center justify-center shadow-sm transition-all cursor-pointer"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-[#00113a] text-white hover:bg-[#0059bb] flex items-center justify-center shadow-md transition-all cursor-pointer"
              aria-label="Next story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid / Carousel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => {
            const isFeatured = idx === activeIdx;
            return (
              <div
                key={t.id}
                className={`bg-white rounded-3xl p-7 sm:p-8 border transition-all duration-300 flex flex-col justify-between ${
                  isFeatured 
                    ? 'border-[#0059bb] shadow-[0_12px_32px_rgba(0,89,187,0.12)] ring-2 ring-blue-100'
                    : 'border-[#c5c6d2]/30 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div>
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-blue-100 shrink-0" />
                  </div>

                  {/* Quote Body */}
                  <p className="text-[14px] sm:text-[15px] text-[#191c1d] leading-relaxed font-normal mb-6 italic">
                    "{t.quote}"
                  </p>
                </div>

                {/* Intern Profile Card Footer */}
                <div className="pt-5 border-t border-slate-100 flex items-center gap-3.5">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${t.bgGrad} text-white font-heading font-extrabold text-[14px] flex items-center justify-center shrink-0 shadow-sm`}>
                    {t.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading font-bold text-[15px] text-[#00113a] truncate">
                      {t.name}
                    </h4>
                    <p className="text-[12px] font-medium text-[#0059bb] truncate">
                      {t.role}
                    </p>
                    <div className="flex items-center gap-1 text-[11px] text-[#444650] font-semibold mt-0.5">
                      <Building2 className="w-3 h-3 text-emerald-600" />
                      <span className="truncate">Placed @ {t.placedAt}</span>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
