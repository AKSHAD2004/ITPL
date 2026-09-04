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
          {INTERNSHIP_TRACKS.map((track, idx) => (
            <InteractiveTrackCard
              key={track.id}
              track={track}
              idx={idx}
              onSelectTrack={onSelectTrack}
              expandedSkills={expandedSkills}
              toggleExpandSkills={toggleExpandSkills}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
