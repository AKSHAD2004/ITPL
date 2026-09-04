import React, { useState } from 'react';
import { INTERNSHIP_TRACKS, CONTACT_PHONE } from '../data/internshipData';
import { ApplicationSubmission } from '../types';
import { 
  X, CheckCircle2, ArrowRight, ArrowLeft, Upload, FileText, Sparkles, 
  Send, Copy, Check, PhoneCall, Calendar, User, Mail, GraduationCap, MapPin, Briefcase 
} from 'lucide-react';
import { WhatsappIcon } from './WhatsappIcon';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedTrackId?: string;
  onApplicationSubmitted: (submission: ApplicationSubmission) => void;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({
  isOpen,
  onClose,
  preSelectedTrackId,
  onApplicationSubmitted
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [copied, setCopied] = useState(false);
  const [completedSubmission, setCompletedSubmission] = useState<ApplicationSubmission | null>(null);

  // Form State
  const [selectedTrackId, setSelectedTrackId] = useState(
    preSelectedTrackId || INTERNSHIP_TRACKS[0].id
  );
  const [mode, setMode] = useState<'Hybrid' | 'Remote' | 'On-site'>('Hybrid');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Sangli');
  const [education, setEducation] = useState('B.E. / B.Tech Computer Science');
  const [collegeName, setCollegeName] = useState('');
  const [graduationYear, setGraduationYear] = useState('2025');
  const [experienceLevel, setExperienceLevel] = useState<'Student' | 'Fresher (2023-2025)' | 'Career Switcher' | 'Working Professional'>('Student');
  const [githubUrl, setGithubUrl] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [resumeFileName, setResumeFileName] = useState('My_Resume.pdf');
  const [whyJoin, setWhyJoin] = useState('');

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFileName(e.target.files[0].name);
    }
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Final Submit
      const trackObj = INTERNSHIP_TRACKS.find(t => t.id === selectedTrackId) || INTERNSHIP_TRACKS[0];
      const randomNum = Math.floor(10000 + Math.random() * 90000);
      const trackingCode = `INF-2025-${randomNum}`;

      const newSubmission: ApplicationSubmission = {
        id: `app_${Date.now()}`,
        trackingNumber: trackingCode,
        fullName: fullName || 'Candidate',
        email: email || 'candidate@example.com',
        phone: phone || CONTACT_PHONE,
        trackId: selectedTrackId,
        trackTitle: trackObj.title,
        education,
        graduationYear,
        collegeName: collegeName || 'Savitribai Phule Pune University',
        city,
        experienceLevel,
        mode,
        githubUrl,
        linkedinUrl,
        portfolioUrl,
        resumeFileName,
        whyJoin: whyJoin || 'Looking to master production coding and build industry projects.',
        submittedAt: new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        status: 'Application Received',
        interviewDate: 'Upcoming (2-3 business days)',
        assignedMentor: 'Senior Technical Lead'
      };

      // Save to localStorage
      try {
        const existing = JSON.parse(localStorage.getItem('infoyashonand_applications') || '[]');
        localStorage.setItem('infoyashonand_applications', JSON.stringify([newSubmission, ...existing]));
      } catch (err) {
        console.error('Storage write error', err);
      }

      setCompletedSubmission(newSubmission);
      onApplicationSubmitted(newSubmission);
      setCurrentStep(4);
    }
  };

  const handleCopyId = () => {
    if (!completedSubmission) return;
    navigator.clipboard.writeText(completedSubmission.trackingNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#00113a]/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col my-auto max-h-[92vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Strip */}
        <div className="bg-gradient-to-r from-blue-50/90 via-slate-50 to-amber-50/70 text-[#00113a] p-6 sm:p-7 shrink-0 relative border-b border-slate-200/80">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-200/70 hover:bg-slate-300 text-[#00113a] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-[#0059bb] text-[12px] font-bold uppercase tracking-widest font-heading mb-1">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>INFOYASHONAND Internship Portal</span>
          </div>

          <h2 className="font-heading font-extrabold text-[22px] sm:text-[26px] text-[#00113a] leading-tight">
            {currentStep === 4 ? 'Application Submitted!' : 'Internship Application Form'}
          </h2>

          {/* Stepper Indicator */}
          {currentStep < 4 && (
            <div className="flex items-center gap-2 mt-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex-1 flex items-center gap-2">
                  <div 
                    className={`h-2 flex-1 rounded-full transition-all ${
                      step <= currentStep ? 'bg-[#0059bb]' : 'bg-slate-200'
                    }`} 
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          
          {/* STEP 1: Track & Mode Selection */}
          {currentStep === 1 && (
            <form onSubmit={handleNext} className="space-y-6">
              <div>
                <label className="block font-heading font-bold text-[14px] text-[#00113a] mb-2">
                  1. Choose Your Preferred Internship Domain *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {INTERNSHIP_TRACKS.map((track) => {
                    const isSelected = selectedTrackId === track.id;
                    return (
                      <div
                        key={track.id}
                        onClick={() => setSelectedTrackId(track.id)}
                        className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-3 ${
                          isSelected
                            ? 'border-[#0059bb] bg-blue-50/70 shadow-sm'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-[#00113a] text-amber-300' : 'bg-slate-100 text-[#00113a]'
                        }`}>
                          <span className="material-symbols-outlined text-[20px]">
                            {track.icon}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-heading font-bold text-[14px] text-[#00113a] truncate">
                            {track.title}
                          </div>
                          <div className="text-[11px] text-[#444650] truncate">
                            {track.duration}
                          </div>
                        </div>
                        {isSelected && <CheckCircle2 className="w-5 h-5 text-[#0059bb] shrink-0" />}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Mode Selection */}
              <div>
                <label className="block font-heading font-bold text-[14px] text-[#00113a] mb-2">
                  2. Select Work Mode Preference *
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(['Hybrid', 'Remote', 'On-site'] as const).map((m) => (
                    <button
                      type="button"
                      key={m}
                      onClick={() => setMode(m)}
                      className={`py-3 px-2 rounded-xl text-[13px] font-bold border-2 transition-all cursor-pointer ${
                        mode === m
                          ? 'border-[#0059bb] bg-[#00113a] text-white'
                          : 'border-slate-200 text-[#444650] hover:border-slate-300'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Experience Level */}
              <div>
                <label className="block font-heading font-bold text-[14px] text-[#00113a] mb-2">
                  3. What is your current status? *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {(['Student', 'Fresher (2023-2025)', 'Career Switcher', 'Working Professional'] as const).map((lvl) => (
                    <button
                      type="button"
                      key={lvl}
                      onClick={() => setExperienceLevel(lvl)}
                      className={`p-3 rounded-xl text-left text-[13px] font-semibold border transition-all ${
                        experienceLevel === lvl
                          ? 'border-[#0059bb] bg-blue-50 text-[#0059bb] font-bold'
                          : 'border-slate-200 text-[#444650] hover:bg-slate-50'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 text-[#00113a] font-heading font-extrabold text-[15px] py-4 rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Continue to Personal Details</span>
                <ArrowRight className="w-5 h-5 text-[#00113a]" />
              </button>
            </form>
          )}

          {/* STEP 2: Personal & Academic Details */}
          {currentStep === 2 && (
            <form onSubmit={handleNext} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-bold text-[#00113a] uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#757682]" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Aditi Deshmukh"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#f8f9fa] border border-slate-200 text-[14px] focus:outline-none focus:border-[#0059bb] focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-bold text-[#00113a] uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#757682]" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@gmail.com"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#f8f9fa] border border-slate-200 text-[14px] focus:outline-none focus:border-[#0059bb] focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-bold text-[#00113a] uppercase tracking-wider mb-1">
                    WhatsApp Phone Number *
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-200 bg-slate-100 text-[#444650] text-[13px] font-bold">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="9876543210"
                      className="w-full px-4 py-3 rounded-r-xl bg-[#f8f9fa] border border-slate-200 text-[14px] focus:outline-none focus:border-[#0059bb] focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-bold text-[#00113a] uppercase tracking-wider mb-1">
                    Current City *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#757682]" />
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Sangli, Kolhapur, Pune, Mumbai"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#f8f9fa] border border-slate-200 text-[14px] focus:outline-none focus:border-[#0059bb] focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-bold text-[#00113a] uppercase tracking-wider mb-1">
                  College / University Name *
                </label>
                <div className="relative">
                  <GraduationCap className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#757682]" />
                  <input
                    type="text"
                    required
                    value={collegeName}
                    onChange={(e) => setCollegeName(e.target.value)}
                    placeholder="e.g. College of Engineering Pune (COEP) / Sinhgad Institute"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#f8f9fa] border border-slate-200 text-[14px] focus:outline-none focus:border-[#0059bb] focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-bold text-[#00113a] uppercase tracking-wider mb-1">
                    Degree / Course *
                  </label>
                  <select
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#f8f9fa] border border-slate-200 text-[14px] focus:outline-none focus:border-[#0059bb]"
                  >
                    <option value="B.E. / B.Tech Computer Science/IT">B.E. / B.Tech Computer Science/IT</option>
                    <option value="B.E. / B.Tech (Other Branches)">B.E. / B.Tech (Other Branches)</option>
                    <option value="BCA / MCA">BCA / MCA</option>
                    <option value="B.Sc / M.Sc Computer Science">B.Sc / M.Sc Computer Science</option>
                    <option value="B.Com / BBA / MBA">B.Com / BBA / MBA</option>
                    <option value="Other">Other Graduate / Post Graduate</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[12px] font-bold text-[#00113a] uppercase tracking-wider mb-1">
                    Graduation Year *
                  </label>
                  <select
                    value={graduationYear}
                    onChange={(e) => setGraduationYear(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#f8f9fa] border border-slate-200 text-[14px] focus:outline-none focus:border-[#0059bb]"
                  >
                    <option value="2026">2026 (Pursuing)</option>
                    <option value="2025">2025 (Final Year)</option>
                    <option value="2024">2024 (Graduate)</option>
                    <option value="2023">2023 (Graduate)</option>
                    <option value="2022">2022 or earlier</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="w-1/3 py-3.5 rounded-xl border border-slate-200 text-[#444650] font-bold text-[14px] flex items-center justify-center gap-2 hover:bg-slate-100"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="w-2/3 bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 text-[#00113a] font-heading font-extrabold text-[14px] py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Continue to Skills & Resume</span>
                  <ArrowRight className="w-4 h-4 text-[#00113a]" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Skills, Profile Links & Resume */}
          {currentStep === 3 && (
            <form onSubmit={handleNext} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-bold text-[#00113a] uppercase tracking-wider mb-1">
                    GitHub / Code Profile URL
                  </label>
                  <input
                    type="url"
                    value={githubUrl}
                    onChange={(e) => setGithubUrl(e.target.value)}
                    placeholder="https://github.com/username"
                    className="w-full px-4 py-3 rounded-xl bg-[#f8f9fa] border border-slate-200 text-[14px] focus:outline-none focus:border-[#0059bb]"
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-bold text-[#00113a] uppercase tracking-wider mb-1">
                    LinkedIn Profile URL
                  </label>
                  <input
                    type="url"
                    value={linkedinUrl}
                    onChange={(e) => setLinkedinUrl(e.target.value)}
                    placeholder="https://linkedin.com/in/username"
                    className="w-full px-4 py-3 rounded-xl bg-[#f8f9fa] border border-slate-200 text-[14px] focus:outline-none focus:border-[#0059bb]"
                  />
                </div>
              </div>

              {/* Resume File Upload Box */}
              <div>
                <label className="block text-[12px] font-bold text-[#00113a] uppercase tracking-wider mb-1">
                  Upload Resume / CV (PDF or DOCX) *
                </label>
                <div className="border-2 border-dashed border-[#0059bb]/40 hover:border-[#0059bb] rounded-2xl p-5 bg-blue-50/40 text-center relative cursor-pointer group">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <Upload className="w-8 h-8 text-[#0059bb] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-[14px] font-bold text-[#00113a]">
                    {resumeFileName ? `Selected: ${resumeFileName}` : 'Click or Drag & Drop to upload Resume'}
                  </p>
                  <p className="text-[12px] text-[#757682] mt-0.5">
                    Supports PDF, DOC, DOCX up to 10MB
                  </p>
                </div>
              </div>

              {/* Why join statement */}
              <div>
                <label className="block text-[12px] font-bold text-[#00113a] uppercase tracking-wider mb-1">
                  Why do you want to join this internship? *
                </label>
                <textarea
                  rows={3}
                  required
                  value={whyJoin}
                  onChange={(e) => setWhyJoin(e.target.value)}
                  placeholder="Tell us what you hope to learn, projects you want to build, or your career goals..."
                  className="w-full px-4 py-3 rounded-xl bg-[#f8f9fa] border border-slate-200 text-[14px] focus:outline-none focus:border-[#0059bb]"
                />
              </div>

              <div className="flex items-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="w-1/3 py-3.5 rounded-xl border border-slate-200 text-[#444650] font-bold text-[14px] flex items-center justify-center gap-2 hover:bg-slate-100"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="w-2/3 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:from-yellow-300 hover:to-amber-400 text-[#00113a] font-heading font-extrabold text-[15px] py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#00113a]" />
                  <span>Submit Application</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Success Screen */}
          {currentStep === 4 && completedSubmission && (
            <div className="text-center py-4 space-y-6 animate-in fade-in duration-300">
              
              <div className="w-18 h-18 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-[12px] font-bold uppercase tracking-widest text-emerald-700 block mb-1">
                  Submission Successful
                </span>
                <h3 className="font-heading font-extrabold text-[24px] sm:text-[28px] text-[#00113a]">
                  Welcome to INFOYASHONAND!
                </h3>
                <p className="text-[14px] text-[#444650] mt-1 max-w-md mx-auto">
                  Your application for <strong>{completedSubmission.trackTitle}</strong> has been received and routed to our technical evaluation panel.
                </p>
              </div>

              {/* Tracking ID Box */}
              <div className="bg-[#00113a] text-white p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-left max-w-md mx-auto shadow-lg">
                <div>
                  <span className="text-[11px] font-semibold text-[#b3c5ff] uppercase tracking-wider block">
                    Your Unique Tracking ID
                  </span>
                  <span className="font-mono font-bold text-[20px] text-amber-300">
                    {completedSubmission.trackingNumber}
                  </span>
                </div>
                <button
                  onClick={handleCopyId}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-[12px] font-bold text-white flex items-center gap-1.5 transition-colors shrink-0"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>

              {/* Next Steps Timeline */}
              <div className="bg-[#f8f9fa] rounded-2xl p-5 text-left border border-slate-200 text-[13px] space-y-3">
                <span className="font-bold text-[#00113a] uppercase tracking-wider text-[11px] block">
                  What Happens Next:
                </span>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-[#0059bb] font-bold flex items-center justify-center shrink-0 text-xs">1</div>
                  <p className="text-[#444650]"><strong>Technical Profile Review:</strong> Our leads will inspect your profile within 24-48 hours.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-[#0059bb] font-bold flex items-center justify-center shrink-0 text-xs">2</div>
                  <p className="text-[#444650]"><strong>Telephonic Discussion:</strong> Quick 15-minute call on project goals and slot allocation.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 text-xs">3</div>
                  <p className="text-[#444650]"><strong>Offer Letter & Mentor Match:</strong> Verified onboarding letter issued via email.</p>
                </div>
              </div>

              {/* Fast Track WhatsApp & Call Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
                <a
                  href={`https://wa.me/91${CONTACT_PHONE}?text=Hello%20Team%2C%20I%20have%20submitted%20my%20internship%20application%20(${completedSubmission.trackingNumber})%20for%20${completedSubmission.trackTitle}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[13px] flex items-center justify-center gap-2 shadow-md"
                >
                  <WhatsappIcon className="w-4 h-4" />
                  <span>Fast-Track via WhatsApp</span>
                </a>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#00113a] text-white font-bold text-[13px] hover:bg-[#0059bb]"
                >
                  Done & Back to Portal
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
