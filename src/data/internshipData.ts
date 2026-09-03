import { InternshipTrack, Testimonial, FAQItem } from '../types';

export const LOGO_URL = "/assets/logo.jpg";

export const HERO_IMAGE_URL = "/assets/hero_banner.jpg";

export const CONTACT_PHONE = "9309253549";
export const CONTACT_EMAIL = "contact@infoyashonand.com";
export const COMPANY_WEBSITE = "www.infoyashonand.com";
export const COMPANY_NAME = "Infoyashonand Technology Pvt. Ltd.";
export const TAGLINE = "INNOVATE • DEVELOP • GROW";

export const getWhatsAppLink = (trackTitle?: string) => {
  const message = trackTitle 
    ? `Hello Infoyashonand Team, I am interested in applying for the ${trackTitle} Internship Track. Please share the details.`
    : `Hello Infoyashonand Team, I am interested in applying for your Internship Programs. Please share the details.`;
  return `https://wa.me/91${CONTACT_PHONE}?text=${encodeURIComponent(message)}`;
};

export const INTERNSHIP_TRACKS: InternshipTrack[] = [
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    shortTitle: 'Data Analyst',
    category: 'data_ai',
    tagline: 'Analyze & visualize insights',
    description: 'Master data visualization, statistical exploration, SQL transformations, and interactive dashboarding to turn raw numbers into actionable business insights.',
    icon: 'analytics',
    badgeColor: 'from-blue-600 to-indigo-700',
    popular: true,
    skills: ['SQL', 'Python', 'Tableau', 'PowerBI', 'Excel Advanced', 'Statistical Analysis', 'ETL Pipelines', 'Data Storytelling'],
    duration: '3 to 6 Months',
    stipend: '₹8,000 - ₹15,000 / mo Performance-based',
    vacancies: 8,
    mode: 'Hybrid / Sangli',
    prerequisites: ['Basic mathematics or statistics aptitude', 'Curiosity for data patterns', 'Open to all engineering, BCA, MCA, BSC, BCom grads'],
    tools: ['PostgreSQL', 'Python (Pandas/NumPy)', 'Power BI', 'Tableau', 'Jupyter Lab', 'Git/GitHub'],
    capstoneProject: {
      title: 'Enterprise Omni-Channel Sales & Churn Analytics Dashboard',
      description: 'Design and deploy an interactive multi-tab PowerBI & Tableau executive suite analyzing 500,000+ real transaction records with automated customer retention predictions.',
      deliverables: ['Automated SQL data warehouse pipelines', 'Executive KPI dashboard', 'Customer cohort & retention breakdown', 'Comprehensive project presentation for interview portfolio']
    },
    careerRoles: ['Junior Data Analyst', 'BI Developer', 'Business Operations Analyst', 'Marketing Data Specialist']
  },
  {
    id: 'data-science',
    title: 'Data Science',
    shortTitle: 'Data Science',
    category: 'data_ai',
    tagline: 'Machine learning & predictive models',
    description: 'Dive deep into machine learning algorithms, statistical modeling, neural networks, Natural Language Processing, and generative AI systems using real enterprise datasets.',
    icon: 'neurology',
    badgeColor: 'from-indigo-600 to-violet-800',
    popular: true,
    skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Predictive Modeling', 'Python', 'Scikit-Learn', 'TensorFlow/PyTorch', 'Model Deployment'],
    duration: '3 to 6 Months',
    stipend: '₹10,000 - ₹18,000 / mo Performance-based',
    vacancies: 6,
    mode: 'Hybrid / Sangli',
    prerequisites: ['Proficiency in Python programming', 'Fundamental Linear Algebra and Probability', 'Familiarity with standard libraries'],
    tools: ['Python 3.11', 'Scikit-Learn', 'PyTorch', 'HuggingFace', 'FastAPI', 'MLflow', 'Docker', 'Streamlit'],
    capstoneProject: {
      title: 'End-to-End AI Predictive Maintenance & Defect Classification Engine',
      description: 'Build a production-ready ML/Deep Learning pipeline with FastAPI endpoints and Streamlit monitoring that detects industrial machine failures 48 hours before breakdown.',
      deliverables: ['Trained XGBoost & Deep Learning models', 'FastAPI inference microservice', 'Model drift monitoring UI', 'Published GitHub open-source repository']
    },
    careerRoles: ['Associate Data Scientist', 'ML Engineer Trainee', 'AI Research Assistant', 'Predictive Modeling Specialist']
  },
  {
    id: 'website-development',
    title: 'Website Development',
    shortTitle: 'Web Dev',
    category: 'development',
    tagline: 'Frontend & backend modern architecture',
    description: 'Build responsive, scalable, modern web applications from scratch using React 19, TypeScript, Next.js, Node.js, Express, and cloud databases with industry code reviews.',
    icon: 'language',
    badgeColor: 'from-cyan-600 to-blue-700',
    popular: true,
    skills: ['React', 'TypeScript', 'Node.js', 'Next.js', 'Express', 'Tailwind CSS', 'PostgreSQL/MongoDB', 'REST & GraphQL'],
    duration: '3 to 6 Months',
    stipend: '₹8,000 - ₹16,000 / mo Performance-based',
    vacancies: 10,
    mode: 'Hybrid / Sangli',
    prerequisites: ['Basic knowledge of HTML, CSS, and modern JavaScript (ES6+)', 'Understanding of web fundamentals', 'Eager to build real web apps'],
    tools: ['VS Code', 'React 19', 'TypeScript', 'Next.js 15', 'Tailwind CSS', 'Docker', 'Vercel / Cloud Run', 'GitHub Actions'],
    capstoneProject: {
      title: 'High-Performance SaaS Workspace with Real-time Collaboration',
      description: 'Architect a full-stack SaaS platform featuring secure authentication, team workspaces, live document collaboration with WebSockets, and Stripe payment gateway.',
      deliverables: ['Responsive mobile-first web app', 'RESTful backend API server', 'Cloud database schemas and migrations', 'CI/CD pipeline with live deployed URL']
    },
    careerRoles: ['Full Stack Developer Trainee', 'Frontend React Engineer', 'Node.js Backend Developer', 'UI/UX Web Implementer']
  },
  {
    id: 'app-development',
    title: 'App Development',
    shortTitle: 'App Dev',
    category: 'development',
    tagline: 'iOS & Android native and hybrid apps',
    description: 'Create engaging, high-performance mobile experiences for both iOS and Android platforms using Flutter, Dart, React Native, Firebase backend, and offline-first state architecture.',
    icon: 'smartphone',
    badgeColor: 'from-blue-700 to-slate-900',
    skills: ['Flutter', 'React Native', 'Dart', 'iOS & Android SDKs', 'State Management (Bloc/Redux)', 'Firebase', 'REST APIs', 'Play Store Deployment'],
    duration: '3 to 6 Months',
    stipend: '₹8,000 - ₹15,000 / mo Performance-based',
    vacancies: 6,
    mode: 'Hybrid / Sangli',
    prerequisites: ['Object-Oriented Programming basics (Java, C++, or Dart)', 'Basic UI understanding', 'Desire to build mobile applications'],
    tools: ['Android Studio', 'Xcode', 'Flutter SDK', 'React Native CLI', 'Firebase Suite', 'Postman', 'Figma to Code'],
    capstoneProject: {
      title: 'On-Demand Hyperlocal Delivery & Tracking Mobile Application',
      description: 'Develop a cross-platform mobile application for real-time order tracking, live GPS location updates, push notifications, and payment processing.',
      deliverables: ['Complete Flutter/React Native source code', 'APK/AAB build for Google Play Store', 'Firebase backend integration', 'Recorded video walkthrough and documentation']
    },
    careerRoles: ['Flutter Developer', 'React Native Engineer', 'Junior Mobile Application Developer', 'Android App Specialist']
  },
  {
    id: 'software-testing',
    title: 'Software Testing',
    shortTitle: 'Software Testing',
    category: 'qa_marketing',
    tagline: 'QA & Automation excellence',
    description: 'Ensure software quality and zero-defect reliability through thorough manual testing methodologies, automated test scripts (Selenium, Cypress, Playwright), API validation, and performance tests.',
    icon: 'bug_report',
    badgeColor: 'from-amber-600 to-orange-700',
    skills: ['Selenium', 'Cypress', 'Playwright', 'Manual Testing', 'API Testing (Postman)', 'Bug Tracking (Jira)', 'Test Plan Strategy', 'CI/CD QA Integration'],
    duration: '3 to 6 Months',
    stipend: '₹7,000 - ₹14,000 / mo Performance-based',
    vacancies: 5,
    mode: 'Hybrid / Sangli',
    prerequisites: ['Attention to detail', 'Basic programming knowledge in Java, Python, or JavaScript', 'Understanding of software lifecycle (SDLC/STLC)'],
    tools: ['Selenium WebDriver', 'Cypress.io', 'Postman', 'Jira / Bugzilla', 'Jenkins', 'Git', 'Allure Reports'],
    capstoneProject: {
      title: 'Automated Regression & Security Quality Suite for Banking App',
      description: 'Create a comprehensive automated test framework executing 200+ test scenarios across web and mobile interfaces with automatic daily report generation.',
      deliverables: ['Custom Selenium/Cypress automation framework', 'API test collection in Postman with CI automation', 'Formal Bug Reports and Traceability Matrix', 'Live demo execution video']
    },
    careerRoles: ['QA Automation Engineer Trainee', 'Software Test Engineer', 'API Testing Specialist', 'Manual & Functional QA Tester']
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    shortTitle: 'Digital Marketing',
    category: 'qa_marketing',
    tagline: 'SEO, SEM, social media & growth',
    description: 'Drive exponential growth and brand authority through Search Engine Optimization (SEO), Paid Ads (Google & Meta Ads), social media strategy, content marketing, and conversion funnels.',
    icon: 'campaign',
    badgeColor: 'from-orange-500 to-rose-600',
    skills: ['SEO / SEM', 'Google Ads', 'Meta Ads Manager', 'Social Media Strategy', 'Content Marketing', 'Google Analytics 4', 'Email Automation', 'Conversion Rate Optimization'],
    duration: '3 to 6 Months',
    stipend: '₹7,000 - ₹14,000 / mo Performance-based',
    vacancies: 5,
    mode: 'Hybrid / Sangli',
    prerequisites: ['Strong written and verbal communication', 'Creativity and analytical mindset', 'Familiarity with major social media channels'],
    tools: ['Google Analytics 4', 'Google Search Console', 'SEMrush / Ahrefs', 'Canva Pro', 'Meta Business Suite', 'Mailchimp / HubSpot'],
    capstoneProject: {
      title: 'Live 360° Multi-Channel Brand Growth & Lead Generation Campaign',
      description: 'Plan, budget, and execute a real multi-channel digital marketing campaign resulting in 10,000+ organic impressions and high-converting qualified leads.',
      deliverables: ['SEO audit and keyword strategy dossier', 'Live Meta & Google Ads campaign report', 'Content calendar and creatives portfolio', 'ROI and conversion analytics presentation']
    },
    careerRoles: ['Digital Marketing Executive', 'SEO Specialist', 'Performance Marketer', 'Social Media Manager']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Aisha Sharma',
    role: 'Data Analyst Intern',
    placedAt: 'TCS (Tata Consultancy Services)',
    initials: 'AS',
    bgGrad: 'from-blue-600 to-indigo-700',
    quote: 'The hands-on projects gave me the confidence I needed. I worked directly on client dashboards and landed a full-time role right after completing the 6-month program!',
    package: '₹6.5 LPA',
    batch: 'Batch of 2024'
  },
  {
    id: '2',
    name: 'Rahul Jain',
    role: 'Web Dev Intern',
    placedAt: 'Cognizant',
    initials: 'RJ',
    bgGrad: 'from-cyan-600 to-blue-700',
    quote: 'The mentorship here is unmatched. You are not just an intern doing dummy tutorials; you are treated like a core team member building scalable, real products with code reviews.',
    package: '₹7.2 LPA',
    batch: 'Batch of 2024'
  },
  {
    id: '3',
    name: 'Neha Patel',
    role: 'Digital Marketing Intern',
    placedAt: 'GrowthSpurt Media',
    initials: 'NP',
    bgGrad: 'from-amber-600 to-orange-700',
    quote: 'I got to run actual campaigns with real ad spend and live traffic. The practical exposure in Google Ads & SEO is exactly what modern employers look for during interviews.',
    package: '₹5.8 LPA',
    batch: 'Batch of 2024'
  },
  {
    id: '4',
    name: 'Vikram Deshmukh',
    role: 'Data Science Intern',
    placedAt: 'Infosys FinTech Lab',
    initials: 'VD',
    bgGrad: 'from-indigo-600 to-purple-800',
    quote: 'Building real-time ML pipelines and deploying them with Docker gave my resume the ultimate edge. The mentors conducted weekly mock technical interviews that prepped me perfectly.',
    package: '₹8.4 LPA',
    batch: 'Batch of 2023'
  },
  {
    id: '5',
    name: 'Pooja Kulkarni',
    role: 'Software Testing Intern',
    placedAt: 'Wipro Digital QA',
    initials: 'PK',
    bgGrad: 'from-emerald-600 to-teal-800',
    quote: 'From manual test cases to full Selenium and Cypress CI/CD integration, the curriculum is completely industry-aligned. Received my offer letter before my college final semester ended!',
    package: '₹6.0 LPA',
    batch: 'Batch of 2024'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Eligibility',
    question: 'Who can apply for this internship program?',
    answer: 'The program is open to undergraduate and postgraduate students (B.E./B.Tech, BCA, MCA, B.Sc IT/CS, B.Com/BBA for marketing), fresh graduates (2022-2025 batches), as well as professionals seeking a career transition into tech.'
  },
  {
    id: 'faq-2',
    category: 'Training & Projects',
    question: 'Is this internship remote, hybrid, or on-site?',
    answer: 'We offer flexible tracks including Hybrid (Pune Office + Remote), 100% Remote, and On-site at our Pune development center. You can choose your preferred mode during the application process.'
  },
  {
    id: 'faq-3',
    category: 'Certificates & Placement',
    question: 'Will I receive a verified certificate and Letter of Recommendation (LOR)?',
    answer: 'Yes! Upon successful completion of your internship track and capstone project, you will receive an official verifiable Internship Certificate, detailed Performance Rating Card, and a tailored Letter of Recommendation (LOR) from our Lead Architects.'
  },
  {
    id: 'faq-4',
    category: 'Training & Projects',
    question: 'What kind of projects will I work on?',
    answer: 'You will work on live industry projects and enterprise capstones matching current tech standards—such as real-time predictive analytics, responsive SaaS web applications, cross-platform mobile apps, or automated QA suites.'
  },
  {
    id: 'faq-5',
    category: 'General',
    question: 'What is the selection process?',
    answer: '1. Online Application submission -> 2. Profile Review by Technical Leads -> 3. Brief 20-minute Telephonic / Video Discussion -> 4. Offer Letter & Onboarding with Mentor Allocation.'
  },
  {
    id: 'faq-6',
    category: 'Certificates & Placement',
    question: 'Is placement assistance provided after the internship?',
    answer: 'Yes, 100% placement support is included. We provide resume polishing, LinkedIn profile optimization, GitHub portfolio curation, technical mock interviews, and direct referrals to our network of 80+ hiring partner companies.'
  }
];
