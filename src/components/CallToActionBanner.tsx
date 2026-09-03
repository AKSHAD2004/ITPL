import React, { useState } from 'react';
import { CONTACT_PHONE, COMPANY_WEBSITE, CONTACT_EMAIL, INTERNSHIP_TRACKS } from '../data/internshipData';
import { Phone, PhoneCall, Globe, Mail, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { WhatsappIcon } from './WhatsappIcon';

export const CallToActionBanner: React.FC = () => {
  const [callbackName, setCallbackName] = useState('');
  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackTrack, setCallbackTrack] = useState(INTERNSHIP_TRACKS[0].title);
  const [submitted, setSubmitted] = useState(false);

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackName || !callbackPhone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setCallbackName('');
      setCallbackPhone('');
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Navy High-Impact Banner Card */}
        <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[#00113a] via-[#001f5c] to-[#00113a] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-white/15">
          
          {/* Background Glows */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#0059bb]/40 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#d07c00]/30 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Col: Contact Info & Hotline */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 font-heading font-bold text-[12px] uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Immediate Assistance</span>
              </div>

              <h2 className="font-heading font-extrabold text-[32px] sm:text-[42px] lg:text-[46px] leading-[1.12] tracking-tight text-white">
                Have Questions? Speak Directly with Our Admissions Team
              </h2>

              <p className="text-[16px] sm:text-[18px] text-[#dbe1ff]/90 leading-relaxed font-light">
                Need guidance on choosing between Data Science, Web Development, or App Dev? Our senior tech counselors are available to guide you.
              </p>

              {/* High-Contrast Phone Call Box */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 text-[#00113a] font-heading font-extrabold text-[18px] sm:text-[20px] px-8 py-4 rounded-2xl shadow-[0_8px_25px_rgba(250,204,21,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                >
                  <PhoneCall className="w-6 h-6 animate-pulse text-[#00113a]" />
                  <span>Call: {CONTACT_PHONE}</span>
                </a>

                <a
                  href={`https://wa.me/91${CONTACT_PHONE}?text=Hello%2C%20I%20am%20interested%20in%20the%20Infoyashonand%20Technology%20Internship%20Program.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-[15px] sm:text-[16px] px-7 py-4 rounded-2xl shadow-md transition-all flex items-center justify-center gap-2.5"
                >
                  <WhatsappIcon className="w-5 h-5 text-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Direct Info Links */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-[14px] text-[#b3c5ff]">
                <a 
                  href={`https://${COMPANY_WEBSITE}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Globe className="w-4 h-4 text-amber-300" />
                  <span>{COMPANY_WEBSITE}</span>
                </a>
                <a 
                  href={`mailto:${CONTACT_EMAIL}`} 
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan-300" />
                  <span>{CONTACT_EMAIL}</span>
                </a>
              </div>

            </div>

            {/* Right Col: Instant Callback Form */}
            <div className="lg:col-span-5">
              <div className="bg-white text-[#191c1d] rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100">
                <div className="mb-5 text-left">
                  <h3 className="font-heading font-extrabold text-[20px] sm:text-[22px] text-[#00113a]">
                    Request a Free Counseling Call
                  </h3>
                  <p className="text-[13px] text-[#444650] mt-1">
                    Enter your details below and a senior mentor will call you within 2 hours.
                  </p>
                </div>

                {submitted ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-heading font-bold text-[18px] text-[#00113a]">
                      Callback Request Received!
                    </h4>
                    <p className="text-[13px] text-[#444650]">
                      Our counselor will call you at <strong>+91 {callbackPhone}</strong> shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleCallbackSubmit} className="space-y-4 text-left">
                    <div>
                      <label className="block text-[12px] font-bold text-[#00113a] uppercase tracking-wider mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={callbackName}
                        onChange={(e) => setCallbackName(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-[#f8f9fa] border border-slate-200 text-[14px] focus:outline-none focus:border-[#0059bb] focus:ring-2 focus:ring-blue-100 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[12px] font-bold text-[#00113a] uppercase tracking-wider mb-1.5">
                        Phone Number (WhatsApp)
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-200 bg-slate-100 text-[#444650] text-[13px] font-bold">
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          pattern="[0-9]{10}"
                          value={callbackPhone}
                          onChange={(e) => setCallbackPhone(e.target.value)}
                          placeholder="10-digit mobile number"
                          className="w-full px-4 py-3 rounded-r-xl bg-[#f8f9fa] border border-slate-200 text-[14px] focus:outline-none focus:border-[#0059bb] focus:ring-2 focus:ring-blue-100 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[12px] font-bold text-[#00113a] uppercase tracking-wider mb-1.5">
                        Interested Track
                      </label>
                      <select
                        value={callbackTrack}
                        onChange={(e) => setCallbackTrack(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#f8f9fa] border border-slate-200 text-[14px] text-[#191c1d] focus:outline-none focus:border-[#0059bb] focus:ring-2 focus:ring-blue-100 transition-all"
                      >
                        {INTERNSHIP_TRACKS.map((t) => (
                          <option key={t.id} value={t.title}>
                            {t.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#00113a] hover:bg-[#0059bb] text-white font-heading font-bold text-[14px] py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 mt-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Request Instant Callback</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
