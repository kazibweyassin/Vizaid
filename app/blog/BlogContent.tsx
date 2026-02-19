'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: '1',
    title: 'Top 10 Destinations to Visit in 2024',
    excerpt: 'Discover the most amazing destinations to add to your travel bucket list this year.',
    date: 'January 15, 2024',
    category: 'Destinations',
    image: '🌍',
  },
  {
    id: '2',
    title: 'Visa Requirements for Popular Destinations',
    excerpt: 'A comprehensive guide to visa requirements for travelers from Uganda.',
    date: 'January 10, 2024',
    category: 'Visa Tips',
    image: '🛂',
  },
  {
    id: '3',
    title: 'Gorilla Trekking: Everything You Need to Know',
    excerpt: 'Complete guide to gorilla trekking in Bwindi Impenetrable Forest, Uganda.',
    date: 'January 5, 2024',
    category: 'Uganda Tours',
    image: '🦍',
  },
  {
    id: '4',
    title: 'Travel Insurance: Why You Need It',
    excerpt: 'Understanding the importance of travel insurance for your peace of mind.',
    date: 'December 28, 2023',
    category: 'Travel Tips',
    image: '🛡️',
  },
  {
    id: '5',
    title: 'Best Time to Visit Uganda',
    excerpt: 'Planning your trip? Learn about the best seasons to visit Uganda for different activities.',
    date: 'December 20, 2023',
    category: 'Uganda Tours',
    image: '📅',
  },
  {
    id: '6',
    title: 'Dubai Travel Guide: Must-See Attractions',
    excerpt: 'Explore the wonders of Dubai with our comprehensive travel guide.',
    date: 'December 15, 2023',
    category: 'Destinations',
    image: '🏙️',
  },
];

export default function BlogContent() {
  return (
    <div className="bg-[var(--background)] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Travel Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Travel tips, destination guides, and updates to help you plan your perfect trip
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.id}`}>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer h-full flex flex-col" style={{borderColor: '#5D0531'}}>
                  <div className="text-6xl mb-4 text-center bg-gray-100 rounded-lg p-8 group-hover:bg-opacity-50 transition-colors">
                    {post.image}
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="text-sm font-semibold mb-2" style={{color: '#5D0531'}}>{post.category}</div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-opacity-70 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                    <div className="text-sm text-gray-500 mb-4">{post.date}</div>
                    <div className="font-medium inline-flex items-center gap-2 group-hover:translate-x-2 transition-transform" style={{color: '#5D0531'}}>
                      Read more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-white rounded-lg p-8 md:p-12 text-center"
          style={{backgroundColor: '#5D0531'}}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6 text-lg opacity-90">
            Subscribe to our newsletter for travel tips, destination guides, and exclusive deals.
          </p>
          <form className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="text-white px-6 py-3 rounded-lg transition-colors font-medium hover:opacity-90"
              style={{backgroundColor: 'white', color: '#5D0531'}}
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

