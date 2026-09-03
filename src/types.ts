export type TrackCategory = 'all' | 'development' | 'data_ai' | 'qa_marketing';

export interface CurriculumModule {
  phase: string;
  duration: string;
  title: string;
  topics: string[];
}

export interface InternshipTrack {
  id: string;
  title: string;
  shortTitle: string;
  category: TrackCategory;
  tagline: string;
  description: string;
  icon: string;
  badgeColor: string;
  skills: string[];
  duration: string;
  stipend: string;
  vacancies: number;
  mode: 'Hybrid / Pune' | 'Remote Available' | 'On-site Pune';
  prerequisites: string[];
  tools: string[];
  capstoneProject: {
    title: string;
    description: string;
    deliverables: string[];
  };
  careerRoles: string[];
  popular?: boolean;
}

export interface ApplicationSubmission {
  id: string;
  trackingNumber: string;
  fullName: string;
  email: string;
  phone: string;
  trackId: string;
  trackTitle: string;
  education: string;
  graduationYear: string;
  collegeName: string;
  city: string;
  experienceLevel: 'Student' | 'Fresher (2023-2025)' | 'Career Switcher' | 'Working Professional';
  mode: 'Hybrid' | 'Remote' | 'On-site';
  portfolioUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  resumeFileName?: string;
  whyJoin: string;
  submittedAt: string;
  status: 'Application Received' | 'Profile Under Review' | 'Technical Screening' | 'Selected - Offer Issued';
  interviewDate?: string;
  assignedMentor?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  placedAt: string;
  initials: string;
  bgGrad: string;
  quote: string;
  package: string;
  batch: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Eligibility' | 'Training & Projects' | 'Certificates & Placement';
}
