import { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us | Vizaid Travel',
  description: 'Get in touch with Vizaid Travel. We are here to help with all your travel needs.',
};

export default function ContactPage() {
  return <ContactContent />;
}
