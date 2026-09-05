import React, { useState } from 'react';
import { INTERNSHIP_TRACKS, getWhatsAppLink } from '../data/internshipData';
import { InternshipTrack } from '../types';
import { ChevronRight, Sparkles, Clock } from 'lucide-react';
import { WhatsappIcon } from './WhatsappIcon';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface TracksGridProps {
  onSelectTrack: (track: InternshipTrack) => void;
  onApplyTrack?: (trackId: string) => void;
}

interface InteractiveTrackCardProps {
  track: InternshipTrack;
  idx: number;
  onSelectTrack: (track: InternshipTrack) => void;
  expandedSkills: Record<string, boolean>;
  toggleExpandSkills: (trackId: string) => void;
}

/** Staggered scroll-reveal wrapper */
function ScrollRevealCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-14 scale-95'
      } h-full`}
    >
      {children}
    </div>
  );
}

const InteractiveTrackCard: React.FC<InteractiveTrackCardProps> = ({
  track,
  onSelectTrack,
  expandedSkills,
  toggleExpandSkills,
}) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0, sheenX: 50, sheenY: 50, active: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    const sheenX = (x / rect.width) * 100;
    const sheenY = (y / rect.height) * 100;
    setTilt({ x: rotateX, y: rotateY, sheenX, sheenY, active: true });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, sheenX: 50, sheenY: 50, active: false });
  };

  const isExpanded = expandedSkills[track.id];
  const displayedSkills = isExpanded ? track.skills : track.skills.slice(0, 4);
  const remainingSkills = track.skills.length - 4;

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: tilt.active
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-6px) scale(1.012)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)',
        transition: tilt.active ? 'transform 0.1s ease-out' : 'transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1)',
      }}
      className="group relative rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,17,58,0.35)] hover:shadow-[0_20px_50px_rgba(0,17,58,0.55)] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer h-full"
    >
      {/* Navy gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001030] via-[#00113a] to-[#001a4d]" />

      {/* Ambient corner glow */}
      <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#cc0000]/20 rounded-full blur-[50px] pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-amber-400/10 rounded-full blur-[50px] pointer-events-none" />

      {/* Top brand accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#cc0000] via-amber-400 to-[#cc0000] z-30" />

      {/* Moving sheen on mouse */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-10"
        style={{
          background: `radial-gradient(600px circle at ${tilt.sheenX}% ${tilt.sheenY}%, rgba(255,255,255,0.07), transparent 50%)`,
        }}
      />

      <div className="relative z-20 p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Header: Icon */}
          <div className="flex items-start justify-between gap-3 mb-5">
            {/* Icon box matching modal style */}
            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 text-amber-300 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 group-hover:bg-white/15 transition-all duration-300 shrink-0">
              <span className="material-symbols-outlined text-[30px]">{track.icon}</span>
            </div>
          </div>

          {/* Title & Tagline */}
          <h3 className="font-heading font-extrabold text-[22px] sm:text-[24px] text-white group-hover:text-amber-300 transition-colors leading-tight mb-1 uppercase tracking-tight">
            {track.title}
          </h3>
          <p className="text-[13px] font-bold text-amber-400 mb-3">{track.tagline}</p>
          <p className="text-[14px] text-slate-300 leading-relaxed mb-5 line-clamp-3">{track.description}</p>

          {/* Skills */}
          <div className="mb-6">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
              Key Technologies & Skills
            </div>
            <div className="flex flex-wrap gap-1.5">
              {displayedSkills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-2.5 py-1 rounded-lg text-[12px] font-semibold bg-white/8 group-hover:bg-white/15 text-slate-300 group-hover:text-white border border-white/10 group-hover:border-amber-400/40 transition-all"
                  style={{ background: 'rgba(255,255,255,0.07)' }}
                >
                  {skill}
                </span>
              ))}
              {!isExpanded && remainingSkills > 0 && (
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); toggleExpandSkills(track.id); }}
                  className="px-2.5 py-1 rounded-lg text-[12px] font-bold text-amber-400 border border-amber-400/40 hover:bg-amber-400/10 transition-colors cursor-pointer"
                  style={{ background: 'rgba(251,191,36,0.08)' }}
                >
                  +{remainingSkills} more
                </button>
              )}
              {isExpanded && (
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); toggleExpandSkills(track.id); }}
                  className="px-2.5 py-1 rounded-lg text-[12px] font-bold text-slate-400 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Show less
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
          <div className="flex items-center justify-between text-[13px] font-medium">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-4 h-4 text-amber-400" />
              {track.duration}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => onSelectTrack(track)}
              className="w-full py-2.5 px-3 rounded-xl font-heading font-bold text-[13px] sm:text-[14px] text-[#00113a] transition-all shadow-md hover:shadow-amber-400/20 flex items-center justify-center gap-1 group/btn cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'linear-gradient(135deg, #fbbf24, #f59e0b)')}
            >
              <span>View Track</span>
              <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>

            <a
              href={getWhatsAppLink(track.title)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="relative overflow-hidden w-full py-2.5 px-3 rounded-xl font-heading font-bold text-[13px] sm:text-[14px] bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-1.5 cursor-pointer animate-btn-glow select-none"
            >
              {/* Shimmer light beam */}
              <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 animate-shimmer pointer-events-none" />
              <WhatsappIcon className="w-4 h-4 fill-current shrink-0 animate-icon-wiggle" />
              <span>Apply</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TracksGrid: React.FC<TracksGridProps> = ({ onSelectTrack }) => {
  const [expandedSkills, setExpandedSkills] = useState<Record<string, boolean>>({});
  const headerReveal = useScrollReveal();

  const toggleExpandSkills = (trackId: string) => {
    setExpandedSkills(prev => ({ ...prev, [trackId]: !prev[trackId] }));
  };

  return (
    <section id="roles" className="py-20 sm:py-28 bg-[#f8f9fa] relative z-20 overflow-hidden">
      {/* Section background orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#cc0000]/4 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0059bb]/4 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div
          ref={headerReveal.ref}
          className={`text-center max-w-3xl mx-auto mb-10 sm:mb-16 transition-all duration-700 ${
            headerReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-[#cc0000] border border-red-200 font-heading font-bold text-[12px] uppercase tracking-widest mb-4">
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

        {/* Track Cards Grid — staggered scroll reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {INTERNSHIP_TRACKS.map((track, idx) => (
            <ScrollRevealCard key={track.id} delay={idx * 100}>
              <InteractiveTrackCard
                track={track}
                idx={idx}
                onSelectTrack={onSelectTrack}
                expandedSkills={expandedSkills}
                toggleExpandSkills={toggleExpandSkills}
              />
            </ScrollRevealCard>
          ))}
        </div>

      </div>
    </section>
  );
};
