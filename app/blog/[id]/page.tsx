import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Blog Post | Vizaid Travel',
  description: 'Travel tips and destination guides from Vizaid Travel.',
};

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

// Blog posts data (should match the blog listing page)
const blogPosts: Record<string, {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  content?: string;
}> = {
  '1': {
    id: '1',
    title: 'Top 10 Destinations to Visit in 2024',
    excerpt: 'Discover the most amazing destinations to add to your travel bucket list this year.',
    date: 'January 15, 2024',
    category: 'Destinations',
    image: '🌍',
    content: 'This is a placeholder blog post. Content coming soon...',
  },
  '2': {
    id: '2',
    title: 'Visa Requirements for Popular Destinations',
    excerpt: 'A comprehensive guide to visa requirements for travelers from Uganda.',
    date: 'January 10, 2024',
    category: 'Visa Tips',
    image: '🛂',
    content: 'This is a placeholder blog post. Content coming soon...',
  },
  '3': {
    id: '3',
    title: 'Gorilla Trekking: Everything You Need to Know',
    excerpt: 'Complete guide to gorilla trekking in Bwindi Impenetrable Forest, Uganda.',
    date: 'January 5, 2024',
    category: 'Uganda Tours',
    image: '🦍',
    content: 'This is a placeholder blog post. Content coming soon...',
  },
  '4': {
    id: '4',
    title: 'Travel Insurance: Why You Need It',
    excerpt: 'Understanding the importance of travel insurance for your peace of mind.',
    date: 'December 28, 2023',
    category: 'Travel Tips',
    image: '🛡️',
    content: 'This is a placeholder blog post. Content coming soon...',
  },
  '5': {
    id: '5',
    title: 'Best Time to Visit Uganda',
    excerpt: 'Planning your trip? Learn about the best seasons to visit Uganda for different activities.',
    date: 'December 20, 2023',
    category: 'Uganda Tours',
    image: '📅',
    content: 'This is a placeholder blog post. Content coming soon...',
  },
  '6': {
    id: '6',
    title: 'Dubai Travel Guide: Must-See Attractions',
    excerpt: 'Explore the wonders of Dubai with our comprehensive travel guide.',
    date: 'December 15, 2023',
    category: 'Destinations',
    image: '🏙️',
    content: 'This is a placeholder blog post. Content coming soon...',
  },
};

export default async function BlogPostPage({ params }: PageProps) {
  const { id } = await params;
  const post = blogPosts[id];

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-[var(--background)] min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="mb-6 inline-flex items-center transition-colors hover:opacity-70" style={{color: '#5D0531'}}>
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        <article className="border border-[var(--brand-gold)] rounded-lg p-8 md:p-12 bg-[var(--background)]">
          <div className="text-6xl mb-6 text-center bg-gray-800 rounded-lg p-8">
            {post.image}
          </div>
          <div className="text-sm font-semibold mb-4" style={{color: '#C9973A'}}>{post.category}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
          <div className="text-sm text-gray-400 mb-8">{post.date}</div>
          <div className="prose max-w-none text-gray-300 leading-relaxed">
            <p className="text-xl text-gray-400 mb-6">{post.excerpt}</p>
            <div className="text-lg">
              {post.content || 'This blog post content is coming soon. Check back later for the full article!'}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

