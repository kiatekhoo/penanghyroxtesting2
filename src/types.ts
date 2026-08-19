export interface HyroxPackage {
  id: string;
  name: string;
  subtitle: string;
  priceRM: number;
  period: string;
  tag?: string;
  popular?: boolean;
  idealFor: string;
  features: string[];
  whatsAppTemplateMessage: string;
}

export interface HyroxStation {
  number: number;
  name: string;
  distanceOrReps: string;
  description: string;
  iconName: string;
  weights: {
    womenOpen: string;
    menOpen: string;
    womenPro: string;
    menPro: string;
    doubles: string;
  };
  coachTip: string;
  keyMuscleGroups: string[];
}

export interface LeadFormData {
  selectedPackageId: string;
  fullName: string;
  email: string;
  phone: string;
  addressArea: string;
  fitnessLevel: string;
  targetGoal: string;
  preferredSlot: string;
  specialNotes?: string;
}

export interface PenangLocation {
  id: string;
  name: string;
  area: string;
  address: string;
  features: string[];
  sessions: string[];
}

export interface Testimonial {
  id: string;
  athleteName: string;
  raceDivision: string;
  achievement: string;
  timeImprovement: string;
  quote: string;
  location: string;
  avatarUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'training' | 'pricing' | 'race';
}
