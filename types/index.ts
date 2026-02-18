export interface AirTicketingInquiry {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate?: string;
  passengers: {
    adults: number;
    children: number;
    infants: number;
  };
  travelClass: 'economy' | 'business' | 'first';
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export interface VisaInquiry {
  destination: string;
  visaType: string;
  travelDate: string;
  name: string;
  email: string;
  phone: string;
  nationality: string;
  passportNumber?: string;
  message?: string;
}

export interface TourInquiry {
  destination: string;
  tourType: 'international' | 'domestic';
  startDate: string;
  endDate: string;
  groupSize: number;
  preferences?: string;
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location?: string;
  rating: number;
  comment: string;
  service: 'air-ticketing' | 'visa' | 'tour';
  image?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
  meals?: string;
  accommodation?: string;
}

export interface CostBreakdown {
  included: string[];
  excluded: string[];
}

export interface PricingTier {
  name: string;
  pricePerPerson: number;
  description?: string;
  features?: string[];
}

export interface TourPackage {
  id: string;
  title: string;
  destination: string;
  duration: string;
  price: string;
  pricingTiers?: PricingTier[];
  image: string;
  galleryImages?: string[];
  description: string;
  highlights: string[];
  type: 'international' | 'domestic';
  category: string;
  difficulty?: 'Easy' | 'Moderate' | 'Challenging';
  bestTimeToVisit?: string;
  groupSize?: string;
  maxAltitude?: string;
  physicalRequirements?: string;
  whyChooseThis?: string[];
  itinerary?: ItineraryDay[];
  costBreakdown?: CostBreakdown;
  rating?: number;
  reviewCount?: number;
  seasonalInfo?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

