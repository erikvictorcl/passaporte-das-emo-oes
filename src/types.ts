export interface MindMapItem {
  id: string;
  title: string;
  category: string;
  authorOrSchool: string;
  description: string;
  previewUrl?: string; // Optional user image URL
  accentColor?: string;
  branches: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  pricePlaceholder: string;
  priceNote?: string;
  features: { text: string; included: boolean; isPlaceholder?: boolean }[];
  ctaText: string;
  popular?: boolean;
}
