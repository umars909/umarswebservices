export type ProjectCategory = 'all' | 'fullstack' | 'frontend' | 'ecommerce' | 'design-systems';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  longDescription: string;
  challenge: string;
  solution: string;
  featured: boolean;
  year: string;
  liveUrl?: string;
  githubUrl?: string;
  techStack: string[];
  metrics: ProjectMetric[];
  highlights: string[];
  role: string;
  architectureDetails: string;
  mockupAccent: string; // Tailwind color accent for minimalist card illustration
}

export type TechCategory = 'frontend' | 'backend' | 'database' | 'devops' | 'testing';

export interface TechItem {
  name: string;
  category: TechCategory;
  level: 'Core Mastery' | 'Advanced' | 'Proficient';
  experienceYears: number;
  highlight: string;
  iconName: string;
  keyUseCases: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientRole: string;
  company: string;
  avatarUrl: string;
  projectDelivered: string;
  rating: number;
  verified: boolean;
  outcomeMetric: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  message: string;
}

export interface ResumeWorkExperience {
  role: string;
  company: string;
  period: string;
  location: string;
  accomplishments: string[];
}

export interface ResumeEducation {
  degree: string;
  institution: string;
  year: string;
  honors?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  contactEmail: string;
  location: string;
  summary: string;
  experiences: ResumeWorkExperience[];
  education: ResumeEducation[];
  coreCompetencies: string[];
  certifications: string[];
}
