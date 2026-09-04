import React, { useState } from 'react';
import { INTERNSHIP_TRACKS, getWhatsAppLink } from '../data/internshipData';
import { InternshipTrack } from '../types';
import { ChevronRight, Sparkles, Clock } from 'lucide-react';
import { WhatsappIcon } from './WhatsappIcon';

interface TracksGridProps {
  onSelectTrack: (track: InternshipTrack) => void;
  onApplyTrack: (trackId: string) => void;
}

export const TracksGrid: React.FC<TracksGridProps> = ({
  onSelectTrack,
  onApplyTrack
}) => {
  const [expandedSkills, setExpandedSkills] = useState<Record<string, boolean>>({});

  const toggleExpandSkills = (trackId: string) => {
    setExpandedSkills(prev => ({
      ...prev,
      [trackId]: !prev[trackId]
    }));
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

        {/* Track Cards Grid (Stacked down-by-down on mobile, grid on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {INTERNSHIP_TRACKS.map((track, idx) => {
            return (
              <div
                key={track.id}
                style={{ animationDelay: `${idx * 140}ms` }}
                className="relative overflow-hidden w-full group bg-gradient-to-br from-[#00113a] via-[#001f5c] to-[#00113a] rounded-3xl p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,17,58,0.25)] hover:shadow-[0_22px_50px_rgba(0,17,58,0.55)] border border-white/15 hover:border-amber-400/70 hover:-translate-y-2.5 hover:scale-[1.015] active:scale-[0.98] transition-all duration-500 ease-out flex flex-col justify-between text-white cursor-pointer animate-in fade-in slide-in-from-left-12 md:slide-in-from-bottom-8"
              >
                {/* Subtle Light Sheen Reflection Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                <div>
                  {/* Card Top: Icon & Popular Badge */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 text-amber-300 border border-white/20 flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 group-hover:rotate-6 group-hover:bg-gradient-to-tr from-amber-400 via-amber-500 to-yellow-400 group-hover:text-[#00113a] group-hover:shadow-[0_8px_20px_rgba(250,204,21,0.4)] transition-all duration-500 backdrop-blur-md">
                      <span className="material-symbols-outlined text-[28px] sm:text-[32px] group-hover:text-[#00113a] transition-colors duration-300">
                        {track.icon}
                      </span>
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      {track.popular && (
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 to-yellow-400 text-[#00113a] shadow-sm flex items-center gap-1 font-heading group-hover:scale-105 group-hover:rotate-1 transition-all duration-300">
                          <Sparkles className="w-3 h-3 text-[#00113a]" />
                          Popular
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Track Title & Tagline */}
                  <h3 
                    onClick={() => onSelectTrack(track)}
                    className="font-heading font-extrabold text-[20px] sm:text-[22px] text-white group-hover:text-amber-300 transition-colors duration-300 cursor-pointer flex items-center justify-between"
                  >
                    <span>{track.title}</span>
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-amber-300 group-hover:translate-x-1.5 transition-all duration-300" />
                  </h3>

                  <p className="text-[13px] font-semibold text-amber-300 mt-1 group-hover:translate-x-0.5 transition-transform duration-300">
                    {track.tagline}
                  </p>

                  <p className="text-[13px] sm:text-[14px] text-slate-200/90 mt-3 leading-relaxed font-light">
                    {track.description}
                  </p>

                  {/* Skills You'll Learn Box */}
                  <div className="mt-5 p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md space-y-2 group-hover:bg-white/[0.12] transition-colors duration-300">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                        Key Skills Acquired
                      </span>
                      {expandedSkills[track.id] && (
                        <button
                          type="button"
                          onClick={() => onSelectTrack(track)}
                          className="text-[11px] font-bold text-amber-300 hover:underline cursor-pointer"
                        >
                          View All Sections &rarr;
                        </button>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {(expandedSkills[track.id] ? track.skills : track.skills.slice(0, 5)).map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg text-[12px] font-medium bg-white/15 text-white border border-white/20 shadow-xs hover:bg-white/25 hover:border-amber-300/50 hover:scale-105 transition-all duration-200 animate-in fade-in"
                        >
                          {skill}
                        </span>
                      ))}
                      {track.skills.length > 5 && !expandedSkills[track.id] && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleExpandSkills(track.id);
                          }}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-bold text-amber-300 bg-amber-400/20 hover:bg-amber-400/30 border border-amber-400/40 shadow-xs transition-all active:scale-95 cursor-pointer"
                          title="Click to reveal all skills"
                        >
                          +{track.skills.length - 5} more
                        </button>
                      )}
                      {expandedSkills[track.id] && track.skills.length > 5 && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleExpandSkills(track.id);
                          }}
                          className="px-2 py-1 rounded-lg text-[11px] font-bold text-slate-300 bg-white/10 hover:bg-white/20 border border-white/20 transition-all active:scale-95 cursor-pointer"
                        >
                          Show less
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Quick Metadata: Duration */}
                  <div className="flex items-center gap-1.5 mt-4 text-[12px] text-slate-200 font-medium">
                    <Clock className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                    <span>{track.duration}</span>
                  </div>
                </div>

                {/* Card Bottom Actions */}
                <div className="mt-6 pt-5 border-t border-white/15 flex items-center gap-2.5">
                  <button
                    onClick={() => onSelectTrack(track)}
                    className="flex-1 py-2.5 px-3 rounded-full text-[13px] font-bold text-white bg-white/10 hover:bg-white/25 hover:border-white/40 hover:scale-[1.02] border border-white/20 transition-all duration-300 text-center cursor-pointer backdrop-blur-sm active:scale-95"
                  >
                    View Syllabus
                  </button>
                  <a
                    href={getWhatsAppLink(track.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 px-2 sm:px-3 rounded-full text-[11px] sm:text-[12px] font-extrabold text-white bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-600 hover:scale-[1.03] shadow-md hover:shadow-[0_6px_20px_rgba(37,211,102,0.45)] transition-all duration-300 text-center flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer active:scale-95"
                  >
                    <WhatsappIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

