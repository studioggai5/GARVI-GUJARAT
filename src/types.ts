export type PageId = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'projects' 
  | 'jogidas-khuman' 
  | 'collaborate' 
  | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  subCategories: string[];
  imagePlaceholderId: string;
  defaultImageUrl: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  universe: string;
  subtitle?: string;
  genre: string;
  status: 'In Production' | 'In Development' | 'Teaser Released' | 'Concept Phase';
  tagline: string;
  description: string;
  longDescription?: string;
  posterPlaceholderId: string;
  defaultPosterUrl: string;
  trailerPlaceholderId: string;
  defaultTrailerVideoUrl?: string;
  historicalContext?: string;
  characters?: { name: string; role: string; desc: string }[];
  isFeatured?: boolean;
}

export interface CollaborationCategory {
  id: string;
  title: string;
  targetAudience: string;
  description: string;
  benefits: string[];
  ctaLabel: string;
  inquiryType: string;
}

export interface ContactInquiryForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  inquiryType: string;
  message: string;
}

export interface StudioConfig {
  brandName: string;
  primaryTagline: string;
  secondaryTagline: string;
  founderName: string;
  founderTitle: string;
  founderBioPlaceholder: string;
  founderBioText: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  whatsappPlaceholder: string;
  socialLinksPlaceholder: string;
  socials: {
    youtube: string;
    instagram: string;
    facebook: string;
    linkedin: string;
  };
}
