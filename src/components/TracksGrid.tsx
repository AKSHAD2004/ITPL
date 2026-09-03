import React, { useRef, useState } from 'react';
import { INTERNSHIP_TRACKS, getWhatsAppLink } from '../data/internshipData';
import { InternshipTrack } from '../types';
import { ChevronRight, ChevronLeft, Sparkles, Clock, MessageCircle } from 'lucide-react';

interface TracksGridProps {
  onSelectTrack: (track: InternshipTrack) => void;
  onApplyTrack: (trackId: string) => void;
}

export const TracksGrid: React.FC<TracksGridProps> = ({
  onSelectTrack,
  onApplyTrack
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const totalWidth = scrollRef.current.scrollWidth;
      const cardWidth = totalWidth / INTERNSHIP_TRACKS.length;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(newIndex, 0), INTERNSHIP_TRACKS.length - 1));
    }
  };

  const scrollTo = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth * 0.85;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth * 0.85;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  return (
    <section id="roles" className="py-20 sm:py-28 bg-[#f8f9fa] relative z-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-[#0059bb] font-heading font-bold text-[12px] uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Career Programs</span>
          </div>
          <h2 className="font-heading font-extrabold text-[32px] sm:text-[42px] lg:text-[48px] text-[#00113a] tracking-tight leading-tight">
            Choose Your Tech Path
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#444650] mt-4 leading-relaxed">
            We offer specialized internship tracks designed to equip you with industry-relevant skills in today's most in-demand technological domains.
          </p>
        </div>

        {/* Mobile Slider Arrow Controls (visible on mobile only) */}
        <div className="flex md:hidden items-center justify-between mb-4 px-1">
          <span className="text-[12px] font-bold text-[#0059bb] uppercase tracking-wider">
            Swipe to explore programs ({activeIndex + 1}/{INTERNSHIP_TRACKS.length})
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollTo('left')}
              disabled={activeIndex === 0}
              className="w-9 h-9 rounded-full bg-white border border-slate-200 text-[#00113a] disabled:opacity-40 disabled:pointer-events-none flex items-center justify-center shadow-sm active:scale-95 transition-all"
              aria-label="Previous card"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollTo('right')}
              disabled={activeIndex === INTERNSHIP_TRACKS.length - 1}
              className="w-9 h-9 rounded-full bg-[#00113a] text-white disabled:opacity-40 disabled:pointer-events-none flex items-center justify-center shadow-sm active:scale-95 transition-all"
              aria-label="Next card"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Responsive Track Cards: Touch Slider on Mobile (< md), Grid on Desktop (>= md) */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory no-scrollbar pb-4 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {INTERNSHIP_TRACKS.map((track) => {
            return (
              <div
                key={track.id}
                className="w-[85vw] sm:w-[350px] md:w-auto shrink-0 snap-center group bg-white rounded-3xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,17,58,0.06)] hover:shadow-[0_16px_40px_rgba(0,17,58,0.12)] border border-[#c5c6d2]/40 hover:border-[#0059bb]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Top: Icon, Popular Badge, and Openings */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#00113a] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 group-hover:bg-[#0059bb] transition-all duration-300">
                      <span className="material-symbols-outlined text-[28px] sm:text-[32px] text-[#b3c5ff]">
                        {track.icon}
                      </span>
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      {track.popular && (
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-100 text-[#d07c00] border border-amber-200 shadow-sm flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          Popular
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Track Title & Tagline */}
                  <h3 
                    onClick={() => onSelectTrack(track)}
                    className="font-heading font-extrabold text-[20px] sm:text-[22px] text-[#00113a] group-hover:text-[#0059bb] transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <span>{track.title}</span>
                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-[#0059bb] group-hover:translate-x-1 transition-all" />
                  </h3>

                  <p className="text-[13px] font-semibold text-[#0059bb] mt-1">
                    {track.tagline}
                  </p>

                  <p className="text-[13px] sm:text-[14px] text-[#444650] mt-3 leading-relaxed line-clamp-2">
                    {track.description}
                  </p>

                  {/* Skills You'll Learn Box */}
                  <div className="mt-5 p-3.5 rounded-2xl bg-[#f8f9fa] border border-slate-100 space-y-2">
                    <span className="text-[11px] font-bold text-[#757682] uppercase tracking-wider block">
                      Key Skills Acquired
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {track.skills.slice(0, 5).map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg text-[12px] font-medium bg-white text-[#191c1d] border border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
                        >
                          {skill}
                        </span>
                      ))}
                      {track.skills.length > 5 && (
                        <span className="px-2 py-1 rounded-lg text-[11px] font-bold text-[#0059bb] bg-blue-50">
                          +{track.skills.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Quick Metadata: Duration */}
                  <div className="flex items-center gap-1.5 mt-4 text-[12px] text-[#444650] font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#0059bb]" />
                    <span>{track.duration}</span>
                  </div>
                </div>

                {/* Card Bottom Actions */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-2.5">
                  <button
                    onClick={() => onSelectTrack(track)}
                    className="flex-1 py-2.5 px-3 rounded-full text-[13px] font-bold text-[#00113a] bg-slate-100 hover:bg-slate-200 transition-colors text-center cursor-pointer"
                  >
                    View Syllabus
                  </button>
                  <a
                    href={getWhatsAppLink(track.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 px-2 sm:px-3 rounded-full text-[11px] sm:text-[12px] font-extrabold text-white bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-600 shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Mobile Pagination Dot Indicators (visible on mobile only) */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-4">
          {INTERNSHIP_TRACKS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                activeIndex === idx
                  ? 'w-6 bg-[#0059bb]'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
