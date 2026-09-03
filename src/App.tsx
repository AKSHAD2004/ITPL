import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturesBanner } from './components/FeaturesBanner';
import { LifeAtCompany } from './components/LifeAtCompany';
import { TracksGrid } from './components/TracksGrid';
import { TrackDetailModal } from './components/TrackDetailModal';
import { WhyInternSection } from './components/WhyInternSection';
import { FaqAndAboutSection } from './components/FaqAndAboutSection';
import { Footer } from './components/Footer';
import { ApplyModal } from './components/ApplyModal';
import { ApplicationTrackerModal } from './components/ApplicationTrackerModal';
import { MobileBottomNav } from './components/MobileBottomNav';
import { InternshipTrack, ApplicationSubmission } from './types';
import { INTERNSHIP_TRACKS, CONTACT_PHONE } from './data/internshipData';
import { Phone, CheckCircle, Sparkles, X } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isApplyModalOpen, setIsApplyModalOpen] = useState<boolean>(false);
  const [isTrackerModalOpen, setIsTrackerModalOpen] = useState<boolean>(false);
  const [selectedTrackForDetail, setSelectedTrackForDetail] = useState<InternshipTrack | null>(null);
  const [preSelectedTrackId, setPreSelectedTrackId] = useState<string | undefined>(undefined);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Handle active navigation highlighting on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'roles', 'why-us', 'testimonials', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenApply = (trackId?: string) => {
    if (trackId) {
      setPreSelectedTrackId(trackId);
    } else {
      setPreSelectedTrackId(INTERNSHIP_TRACKS[0].id);
    }
    setIsApplyModalOpen(true);
  };

  const handleSelectTrackForDetail = (track: InternshipTrack) => {
    setSelectedTrackForDetail(track);
  };

  const handleSelectTrackById = (trackId: string) => {
    const found = INTERNSHIP_TRACKS.find((t) => t.id === trackId);
    if (found) {
      setSelectedTrackForDetail(found);
    }
  };

  const handleApplicationSubmitted = (submission: ApplicationSubmission) => {
    setToastMessage(`Application ${submission.trackingNumber} submitted successfully!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 6000);
  };

  return (
    <div id="home" className="min-h-screen bg-[#f8f9fa] text-[#191c1d] flex flex-col font-body selection:bg-[#0059bb]/20 selection:text-[#00113a]">
      {/* Top Fixed Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenApplyModal={handleOpenApply}
        onSelectTrack={handleSelectTrackById}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with dynamic badges & team photo */}
        <HeroSection
          onOpenApplyModal={() => handleOpenApply()}
          onExploreRoles={() => {
            document.getElementById('roles')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. Three Pillars Feature Banner */}
        <FeaturesBanner />

        {/* 3. Choose Your Tech Path (6 Core Tracks) */}
        <TracksGrid
          onSelectTrack={handleSelectTrackForDetail}
          onApplyTrack={(trackId) => handleOpenApply(trackId)}
        />

        {/* 4. Life at Infoyashonand (Culture & Practical Growth) */}
        <LifeAtCompany />

        {/* 5. Why Intern With Us? (4 Value Pillars & Key Metrics) */}
        <WhyInternSection />

        {/* 6. About the Company */}
        <FaqAndAboutSection />
      </main>

      {/* Footer */}
      <Footer
        onSelectTrackId={handleSelectTrackById}
        onOpenApply={() => handleOpenApply()}
      />

      {/* Mobile Bottom Navigation Bar */}
      <MobileBottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenApply={() => handleOpenApply()}
      />

      {/* Track Detail & Syllabus Modal */}
      <TrackDetailModal
        track={selectedTrackForDetail}
        onClose={() => setSelectedTrackForDetail(null)}
        onApply={(trackId) => handleOpenApply(trackId)}
      />

      {/* Application Submission Wizard Modal */}
      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        preSelectedTrackId={preSelectedTrackId}
        onApplicationSubmitted={handleApplicationSubmitted}
      />

      {/* Application Status Tracker Modal */}
      <ApplicationTrackerModal
        isOpen={isTrackerModalOpen}
        onClose={() => setIsTrackerModalOpen(false)}
        onApplyNew={() => {
          setIsTrackerModalOpen(false);
          handleOpenApply();
        }}
      />

      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-20 lg:bottom-8 right-4 sm:right-8 z-50 bg-[#00113a] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-white/20 flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-300">
          <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-[13px] font-semibold">{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="p-1 rounded-lg hover:bg-white/10 text-[#b3c5ff] hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
