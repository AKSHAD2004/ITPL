import React from 'react';
import { COMPANY_NAME } from '../data/internshipData';
import { Sparkles, Building2, MapPin, Award, Users, Target } from 'lucide-react';

export const FaqAndAboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#f8f9fa] border-t border-[#c5c6d2]/30">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-[#0059bb] font-heading font-bold text-[12px] uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About The Company</span>
            </div>

            <h2 className="font-heading font-extrabold text-[32px] sm:text-[42px] text-[#00113a] tracking-tight leading-tight">
              Shaping Tomorrow's Tech Leaders Today
            </h2>

            <p className="text-[16px] sm:text-[18px] text-[#444650] leading-relaxed">
              <strong>{COMPANY_NAME}</strong> is a software development and talent incubation firm dedicated to empowering engineering students and professionals.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <p className="text-[15px] sm:text-[16px] text-[#444650] leading-relaxed">
              We bridge the critical gap between academic syllabi and industrial production workflows. Our comprehensive internship cohorts work alongside seasoned engineers on enterprise SaaS platforms, AI systems, cloud data warehouses, and high-impact digital campaigns.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0059bb] flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-[16px] text-[#00113a]">
                    Corporate Innovation Center
                  </h4>
                  <p className="text-[13px] text-[#444650] mt-1 leading-relaxed">
                    State-of-the-art developer labs with dedicated mentor pods and high-speed infrastructure.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-[16px] text-[#00113a]">
                    Sangli Corporate Office
                  </h4>
                  <p className="text-[13px] text-[#444650] mt-1 leading-relaxed">
                    1st Floor, Pearl Enclave, M.S.E.B. Road, Vishrambag, Sangli, Maharashtra 416416
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
