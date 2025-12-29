import { Metadata } from 'next';
import TestimonialsContent from './TestimonialsContent';

export const metadata: Metadata = {
  title: 'Customer Testimonials | Vizaid Travel',
  description: 'Read what our customers say about their experiences with Vizaid Travel.',
};

export default function TestimonialsPage() {
  return <TestimonialsContent />;
}
