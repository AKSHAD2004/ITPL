import React from 'react';
import { InternshipTrack } from '../types';
import { X, CheckCircle2, Clock, MapPin, DollarSign, Briefcase, Award, Sparkles, ArrowRight, Code2, BookOpen } from 'lucide-react';

interface TrackDetailModalProps {
  track: InternshipTrack | null;
  onClose: () => void;
  onApply: (trackId: string) => void;
}

export const TrackDetailModal: React.FC<TrackDetailModalProps> = ({
  track,
  onClose,
  onApply
}) => {
  if (!track) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#00113a]/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[92vh] flex flex-col my-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative bg-gradient-to-r from-blue-50/90 via-slate-50 to-amber-50/70 text-[#00113a] p-6 sm:p-8 shrink-0 border-b border-slate-200/80">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-200/70 hover:bg-slate-300 text-[#00113a] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-[#00113a] text-white flex items-center justify-center shadow-md shrink-0">
              <span className="material-symbols-outlined text-[36px] text-[#b3c5ff]">
                {track.icon}
              </span>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-100 text-[#d07c00] border border-amber-200">
                  Official Track
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {track.vacancies} Openings Available
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-[24px] sm:text-[28px] text-[#00113a] leading-tight">
                {track.title}
              </h2>
              <p className="text-[13px] sm:text-[14px] text-[#0059bb] font-semibold">
                {track.tagline}
              </p>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 pt-4 border-t border-slate-200/80 text-[13px]">
            <div className="flex items-center gap-2 text-[#444650] font-medium">
              <Clock className="w-4 h-4 text-[#0059bb] shrink-0" />
              <span>{track.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-[#444650] font-medium">
              <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{track.mode}</span>
            </div>
            <div className="col-span-2 sm:col-span-1 flex items-center gap-2 text-[#00113a] font-bold">
              <DollarSign className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{track.stipend}</span>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-[#191c1d]">
          
          {/* Track Overview */}
          <div>
            <h3 className="font-heading font-bold text-[17px] text-[#00113a] mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#0059bb]" />
              <span>Track Overview</span>
            </h3>
            <p className="text-[14px] sm:text-[15px] text-[#444650] leading-relaxed">
              {track.description}
            </p>
          </div>

          {/* Core Skills & Tools */}
          <div>
            <h3 className="font-heading font-bold text-[17px] text-[#00113a] mb-2.5 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#0059bb]" />
              <span>Technologies & Tools Stack</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {track.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-xl text-[13px] font-semibold bg-blue-50 text-[#0059bb] border border-blue-100"
                >
                  {skill}
                </span>
              ))}
              {track.tools.map((tool, idx) => (
                <span
                  key={`t-${idx}`}
                  className="px-3 py-1 rounded-xl text-[13px] font-medium bg-slate-100 text-[#191c1d] border border-slate-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Capstone Project Showcase */}
          <div className="bg-[#f8f9fa] rounded-2xl p-5 sm:p-6 border border-slate-200/80">
            <div className="flex items-center gap-2 text-amber-600 font-heading font-bold text-[12px] uppercase tracking-wider mb-2">
              <Award className="w-4 h-4" />
              <span>Featured Capstone Project</span>
            </div>
            <h4 className="font-heading font-bold text-[17px] text-[#00113a] mb-2">
              {track.capstoneProject.title}
            </h4>
            <p className="text-[14px] text-[#444650] mb-4 leading-relaxed">
              {track.capstoneProject.description}
            </p>
            <div className="space-y-1.5">
              <span className="text-[12px] font-bold text-[#00113a] uppercase tracking-wider block">
                Deliverables for Your Resume:
              </span>
              {track.capstoneProject.deliverables.map((item, dIdx) => (
                <div key={dIdx} className="flex items-start gap-2 text-[13px] text-[#444650]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Prerequisites & Eligibility */}
          <div>
            <h3 className="font-heading font-bold text-[16px] text-[#00113a] mb-2.5">
              Prerequisites & Eligibility
            </h3>
            <ul className="space-y-2">
              {track.prerequisites.map((req, rIdx) => (
                <li key={rIdx} className="flex items-start gap-2 text-[13px] sm:text-[14px] text-[#444650]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0059bb] shrink-0 mt-2" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Career Outcomes */}
          <div>
            <h3 className="font-heading font-bold text-[16px] text-[#00113a] mb-2.5 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#0059bb]" />
              <span>Target Career Roles</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {track.careerRoles.map((role, rIdx) => (
                <span
                  key={rIdx}
                  className="px-3 py-1 rounded-full text-[12px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200"
                >
                  ✓ {role}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-[13px] text-[#444650] text-center sm:text-left">
            <span className="font-bold text-[#00113a]">Next Batch Starts:</span> Ongoing Rolling Admissions (Sangli / Hybrid)
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-full text-[13px] font-bold text-[#444650] hover:bg-slate-200 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onApply(track.id);
              }}
              className="w-1/2 sm:w-auto bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 text-[#00113a] text-[14px] font-extrabold px-7 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Apply For This Track</span>
              <ArrowRight className="w-4 h-4 text-[#00113a]" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
