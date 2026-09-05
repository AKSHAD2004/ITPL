import React, { useState } from 'react';
import { ApplicationSubmission } from '../types';
import { INTERNSHIP_TRACKS, CONTACT_PHONE } from '../data/internshipData';
import { 
  X, Search, FileCheck, CheckCircle2, Clock, Calendar, UserCheck, 
  Download, ArrowRight, ShieldCheck, PhoneCall, AlertCircle 
} from 'lucide-react';
import { WhatsappIcon } from './WhatsappIcon';

interface ApplicationTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyNew: () => void;
}

export const ApplicationTrackerModal: React.FC<ApplicationTrackerModalProps> = ({
  isOpen,
  onClose,
  onApplyNew
}) => {
  const [searchKey, setSearchKey] = useState('');
  const [foundApplication, setFoundApplication] = useState<ApplicationSubmission | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchKey.trim()) return;

    try {
      const stored: ApplicationSubmission[] = JSON.parse(
        localStorage.getItem('infoyashonand_applications') || '[]'
      );
      
      const query = searchKey.trim().toLowerCase();
      const match = stored.find(
        (app) =>
          app.trackingNumber.toLowerCase() === query ||
          app.email.toLowerCase() === query ||
          app.phone.includes(query)
      );

      if (match) {
        setFoundApplication(match);
      } else {
        // Provide an interactive sample match if not found locally so users can test immediately
        if (query.includes('test') || query.includes('inf') || query.includes(CONTACT_PHONE)) {
          setFoundApplication({
            id: 'sample_1',
            trackingNumber: 'INF-2026-84920',
            fullName: 'Aarav Kulkarni',
            email: 'aarav.kulkarni@example.com',
            phone: CONTACT_PHONE,
            trackId: 'data-analyst',
            trackTitle: 'Data Analyst',
            education: 'B.E. Computer Science',
            graduationYear: '2026',
            collegeName: 'Pune Institute of Computer Technology',
            city: 'Pune',
            experienceLevel: 'Student',
            mode: 'Hybrid',
            whyJoin: 'Passionate about PowerBI and SQL dashboarding.',
            submittedAt: 'Today at 10:30 AM',
            status: 'Profile Under Review',
            interviewDate: 'Friday, 3:00 PM IST',
            assignedMentor: 'Er. Sandeep Patil (Lead Data Architect)'
          });
        } else {
          setFoundApplication(null);
        }
      }
      setHasSearched(true);
    } catch (err) {
      console.error('Search error', err);
      setFoundApplication(null);
      setHasSearched(true);
    }
  };

  const stages = [
    { title: 'Application Submitted', desc: 'Received & logged in database', active: true },
    { title: 'Profile Screening', desc: 'Reviewed by Tech Lead', active: true },
    { title: 'Technical Discussion', desc: '15-min fit & roadmap call', active: foundApplication?.status.includes('Selected') || foundApplication?.status.includes('Interview') },
    { title: 'Offer Letter & Onboarding', desc: 'Formal welcome pack sent', active: foundApplication?.status.includes('Selected') }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#00113a]/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col my-auto max-h-[92vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#00113a] via-[#001f5c] to-[#002366] text-white p-6 sm:p-7 shrink-0 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105 border border-red-400/30"
            aria-label="Close"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>

          <div className="flex items-center gap-2 text-amber-300 text-[12px] font-bold uppercase tracking-widest font-heading mb-1">
            <FileCheck className="w-4 h-4" />
            <span>Application Status Portal</span>
          </div>

          <h2 className="font-heading font-extrabold text-[22px] sm:text-[24px] text-white leading-tight">
            Track Your Internship Application
          </h2>
          <p className="text-[13px] text-[#b3c5ff] mt-1">
            Check review status, interview schedule, and assigned mentor.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 overflow-y-auto flex-1 space-y-6">
          
          {/* Search Form */}
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#757682]" />
              <input
                type="text"
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
                placeholder="Enter Tracking ID (e.g. INF-2025-XXXXX) or Phone"
                className="w-full pl-10 pr-4 py-3 bg-[#f8f9fa] rounded-2xl border border-slate-200 text-[14px] text-[#191c1d] focus:outline-none focus:border-[#0059bb] focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>
            <button
              type="submit"
              className="bg-[#00113a] hover:bg-[#0059bb] text-white font-heading font-bold text-[13px] sm:text-[14px] px-5 py-3 rounded-2xl transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Search</span>
            </button>
          </form>

          {/* Quick Demo Hint */}
          {!hasSearched && (
            <div className="bg-blue-50/70 rounded-2xl p-4 border border-blue-100 text-[13px] text-[#00113a] flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#0059bb] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Searching for your application?</p>
                <p className="text-[#444650] mt-0.5">
                  If you just submitted an application in this browser, you can search by your 10-digit mobile number or enter <strong>INF</strong> to test the tracker view.
                </p>
              </div>
            </div>
          )}

          {/* Search Results */}
          {hasSearched && foundApplication && (
            <div className="space-y-6 animate-in fade-in duration-200">
              
              {/* Status Header Box */}
              <div className="bg-[#f8f9fa] rounded-2xl p-5 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[13px] font-bold text-[#757682]">
                    {foundApplication.trackingNumber}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[12px] font-bold bg-blue-100 text-[#0059bb] border border-blue-200">
                    {foundApplication.status}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-extrabold text-[19px] text-[#00113a]">
                    {foundApplication.fullName}
                  </h3>
                  <p className="text-[13px] font-semibold text-[#0059bb]">
                    Domain: {foundApplication.trackTitle} ({foundApplication.mode})
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[12px] text-[#444650] pt-2 border-t border-slate-200/80">
                  <div>Applied on: <strong>{foundApplication.submittedAt}</strong></div>
                  <div>City: <strong>{foundApplication.city}</strong></div>
                  <div>College: <strong className="truncate">{foundApplication.collegeName}</strong></div>
                  <div>Mentor: <strong>{foundApplication.assignedMentor || 'Technical Lead'}</strong></div>
                </div>
              </div>

              {/* Progress Milestones */}
              <div>
                <h4 className="font-heading font-bold text-[14px] text-[#00113a] uppercase tracking-wider mb-3">
                  Application Milestones
                </h4>
                <div className="space-y-3">
                  {stages.map((st, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-3">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                        st.active ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-[#757682]'
                      }`}>
                        {st.active ? '✓' : sIdx + 1}
                      </div>
                      <div className="min-w-0">
                        <div className={`text-[13px] font-bold ${st.active ? 'text-[#00113a]' : 'text-[#757682]'}`}>
                          {st.title}
                        </div>
                        <div className="text-[12px] text-[#444650]">
                          {st.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`https://wa.me/91${CONTACT_PHONE}?text=Hello%20Team%2C%20checking%20status%20for%20tracking%20ID%20${foundApplication.trackingNumber}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[13px] flex items-center justify-center gap-2"
                >
                  <WhatsappIcon className="w-4 h-4" />
                  <span>WhatsApp Inquiries</span>
                </a>

                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="w-full sm:w-auto flex-1 py-3 px-4 rounded-xl bg-[#00113a] hover:bg-[#0059bb] text-white font-bold text-[13px] flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-amber-300" />
                  <span>Call Admissions</span>
                </a>
              </div>

            </div>
          )}

          {/* Not Found Screen */}
          {hasSearched && !foundApplication && (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center mx-auto">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h4 className="font-heading font-bold text-[17px] text-[#00113a]">
                No Application Found
              </h4>
              <p className="text-[13px] text-[#444650] max-w-xs mx-auto">
                We couldn't find any application matching "{searchKey}". Please verify the phone number or submit a fresh application.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onApplyNew();
                }}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#d07c00] to-[#e67300] text-white text-[13px] font-bold shadow-md cursor-pointer"
              >
                Apply Now
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
