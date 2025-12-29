import { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About Us | Vizaid Travel',
  description: 'Learn about Vizaid Travel - your trusted travel partner in Uganda with over 5 years of experience.',
};

export default function AboutPage() {
  return <AboutContent />;
}
