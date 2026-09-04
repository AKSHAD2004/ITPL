import React from 'react';
import { LOGO_URL, CONTACT_PHONE, COMPANY_WEBSITE, CONTACT_EMAIL, COMPANY_NAME, TAGLINE, INTERNSHIP_TRACKS, getWhatsAppLink } from '../data/internshipData';
import { Phone, Mail, Globe, MapPin, ArrowUp, Heart, Sparkles, ExternalLink } from 'lucide-react';
import { WhatsappIcon } from './WhatsappIcon';

interface FooterProps {
  onSelectTrackId: (id: string) => void;
  onOpenApply: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTrackId,
  onOpenApply
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#00113a] text-white pt-16 pb-28 lg:pb-16 border-t border-white/10 relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0059bb]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d07c00]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-white p-0.5 flex items-center justify-center border border-white/30 shadow-md overflow-hidden shrink-0">
                <img 
                  src={LOGO_URL} 
                  alt="Infoyashonand Logo" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-[17px] text-white leading-tight">
                  {COMPANY_NAME}
                </h3>
                <p className="text-[11px] font-semibold text-amber-300 uppercase tracking-widest">
                  {TAGLINE}
                </p>
              </div>
            </div>

            <p className="text-[13px] sm:text-[14px] text-[#b3c5ff] leading-relaxed">
              Empowering the next generation of engineers, analysts, and tech innovators through intensive, project-based internship programs and guaranteed career mentoring.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-[13px] font-bold transition-colors border border-white/15"
              >
                <Phone className="w-3.5 h-3.5 text-amber-300" />
                <span>{CONTACT_PHONE}</span>
              </a>

              <a
                href={`https://${COMPANY_WEBSITE}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600/30 hover:bg-blue-600/50 text-[#dbe1ff] text-[13px] font-semibold transition-colors border border-blue-400/30"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Visit Website</span>
              </a>
            </div>
          </div>

          {/* Col 2: Internship Domains */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-[15px] text-amber-300 uppercase tracking-wider">
              Internship Domains
            </h4>
            <ul className="space-y-2 text-[13px] text-[#b3c5ff]">
              {INTERNSHIP_TRACKS.map((t) => (
                <li key={t.id}>
                  <button
                    onClick={() => {
                      onSelectTrackId(t.id);
                      document.getElementById('roles')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors flex items-center gap-1.5 text-left"
                  >
                    <span className="text-amber-400 font-bold">›</span>
                    <span>{t.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Portal Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-[15px] text-amber-300 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-[13px] text-[#b3c5ff]">
              <li>
                <button
                  onClick={onOpenApply}
                  className="hover:text-white transition-colors"
                >
                  Apply for Internship
                </button>
              </li>
              <li>
                <a
                  href="#why-us"
                  className="hover:text-white transition-colors"
                >
                  Why Intern With Us
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Center & Hours */}
          <div className="lg:col-span-3 space-y-3 text-[13px] text-[#b3c5ff]">
            <h4 className="font-heading font-bold text-[15px] text-amber-300 uppercase tracking-wider">
              Contact & Location
            </h4>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>INFOYASHONAND TECHNOLOGY PVT. LTD., 1st Floor, Pearl Enclave, M.S.E.B. Road, Vishrambag, Sangli, Maharashtra 416416</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-amber-300 shrink-0" />
              <span>Admissions: +91 {CONTACT_PHONE}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-cyan-300 shrink-0" />
              <span>{CONTACT_EMAIL}</span>
            </div>
            <div className="pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-600 text-white font-extrabold rounded-xl text-[13px] shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <WhatsappIcon className="w-4 h-4 text-white" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#b3c5ff]/80">
          <p>© {new Date().getFullYear()} INFOYASHONAND TECHNOLOGY PVT. LTD. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Innovate • Develop • Grow</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
