import { Metadata } from 'next';
import BlogContent from './BlogContent';

export const metadata: Metadata = {
  title: 'Travel Blog | Vizaid Travel',
  description: 'Travel tips, destination guides, and visa updates from Vizaid Travel.',
};

export default function BlogPage() {
  return <BlogContent />;
}
