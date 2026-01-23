// Service type
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

// Team member type
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  qualifications?: string[];
}

// Testimonial type
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  projectType: string;
  image?: string;
}

// FAQ item type
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Portfolio image type
export interface PortfolioImage {
  src: string;
  alt?: string;
  description?: string;
}

// Portfolio project type
export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  images: PortfolioImage[];
  tags?: string[];
}

// Contact form data type
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

// Navigation item type
export interface NavItem {
  label: string;
  href: string;
}

// Stat item type
export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

// Process step type
export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

// Company info type
export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  socialMedia: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
  siret?: string;
  rcs?: string;
}

