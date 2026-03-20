export interface ServiceItem {
  title: string;
  slug: string;
  description: string;
}

export interface CalculatorFieldOption {
  value: string;
  label: string;
  description?: string;
}

export interface CalculatorInputField {
  id: string;
  label: string;
  type: 'date' | 'number' | 'select' | 'checkbox-group';
  placeholder?: string;
  hint?: string;
  min?: number;
  max?: number;
  step?: number;
  suffix?: string;
  options?: CalculatorFieldOption[];
}

export interface CalculatorTimelineItem {
  label: string;
  timing: string;
  details: string;
}

export interface CalculatorItem extends ServiceItem {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  canonicalUrl: string;
  primaryKeyword: string;
  heroIntro: string;
  intentLabel: string;
  calculatorType:
    | 'due-date'
    | 'prenatal-schedule'
    | 'fertile-window'
    | 'weight-gain'
    | 'preeclampsia-risk'
    | 'contraction-timer';
  inputs: CalculatorInputField[];
  faq: FaqItem[];
  relatedCalculators: string[];
  relatedServices: string[];
  medicalReviewNote: string;
  disclaimer: string;
  whatItShows: string;
  howToUse: string[];
  resultNotes: string[];
  whenToTalkToDoctor: string[];
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
  timelineHighlights?: CalculatorTimelineItem[];
}

export interface ExtendedServiceItem extends ServiceItem {
  // SEO Metadata
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  canonicalUrl: string;
  primaryKeyword?: string;

  // Content
  longDescription: string;
  whatIsIt: string;
  whoNeedsIt: string[];
  howItWorks: string[];
  benefits: string[];
  heroIntro?: string;
  intentLabel?: string;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaLabel?: string;
  planCoverageText?: string;

  // PSEO Linking
  relatedServices: string[]; // array of slugs
  category: 'especialidade' | 'exame' | 'servico';

  // FAQ
  faq: FaqItem[];

  // Schema.org
  schemaType: 'MedicalProcedure' | 'MedicalTest' | 'MedicalTherapy' | 'MedicalSpecialty';
  performedAt: string;
  estimatedDuration?: string;

  // Media
  ogImage?: string;
  heroImage?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  slug: string;
}

export interface BusinessHours {
  day: string;
  hours: string;
  isClosed?: boolean;
}

export interface SocialLink {
  platform: 'instagram' | 'facebook' | 'youtube';
  url: string;
}

export type ButtonVariant = 'primary' | 'accent' | 'outline';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface ServiceCategory {
  name: string;
  slug: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  services: string[]; // array of service slugs
  icon?: string;
}
