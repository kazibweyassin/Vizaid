import { Metadata } from 'next';
import ToursContent from './ToursContent';

export const metadata: Metadata = {
  title: 'Tours & Packages | Vizaid Travel',
  description: 'Discover amazing destinations with our curated tour packages. From gorilla trekking to international adventures.',
};

export default function ToursPage() {
  return <ToursContent />;
}
