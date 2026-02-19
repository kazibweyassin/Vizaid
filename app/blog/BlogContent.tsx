'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const GOLD = '#C9973A';

const blogPosts = [
  { id: '1', title: 'Top 10 Destinations to Visit in 2024', excerpt: 'Discover the most amazing destinations to add to your travel bucket list this year.', date: 'January 15, 2024', category: 'Destinations', image: '🌍' },
  { id: '2', title: 'Visa Requirements for Popular Destinations', excerpt: 'A comprehensive guide to visa requirements for travelers from Uganda.', date: 'January 10, 2024', category: 'Visa Tips', image: '🛂' },
  { id: '3', title: 'Gorilla Trekking: Everything You Need to Know', excerpt: 'Complete guide to gorilla trekking in Bwindi Impenetrable Forest, Uganda.', date: 'January 5, 2024', category: 'Uganda Tours', image: '🦍' },
  { id: '4', title: 'Travel Insurance: Why You Need It', excerpt: 'Understanding the importance of travel insurance for your peace of mind.', date: 'December 28, 2023', category: 'Travel Tips', image: '🛡️' },
  { id: '5', title: 'Best Time to Visit Uganda', excerpt: 'Planning your trip? Learn about the best seasons to visit Uganda for different activities.', date: 'December 20, 2023', category: 'Uganda Tours', image: '📅' },
  { id: '6', title: 'Dubai Travel Guide: Must-See Attractions', excerpt: 'Explore the wonders of Dubai with our comprehensive travel guide.', date: 'December 15, 2023', category: 'Destinations', image: '🏙️' },
];

export default function BlogContent() {
  return (
    <div className="bg-[#080e15] min-h-screen py-20 relative overflow-hidden">
      <div style={{ position: 'absolute', top: -100, left: -100, width: 400, height: 400, background: 'radial-gradient(circle, rgba(93,5,49,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div style={{ height: 1, width: 40, background: GOLD }} />
            <span style={{ color: GOLD, fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Travel Insights</span>
            <div style={{ height: 1, width: 40, background: GOLD }} />
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif" }} className="text-4xl md:text-5xl font-bold text-white mb-4">
            Travel&nbsp;
            <span style={{ fontStyle: 'italic', color: GOLD }}>Blog</span>
          </h1>
          <p className="text-xl text-white/50 max-w-3xl mx-auto">
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
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link href={`/blog/${post.id}`}>
                <div
                  style={{
                    background: '#0f1923',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 20,
                    overflow: 'hidden',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.35)',
                    transition: 'transform 0.3s ease, border-color 0.3s ease',
                  }}
                  className="h-full flex flex-col hover:border-[rgba(201,151,58,0.3)] hover:-translate-y-2 group"
                >
                  <div className="text-6xl mb-4 text-center p-8" style={{ background: 'rgba(255,255,255,0.03)' }}>
                    {post.image}
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <span style={{ color: GOLD }} className="text-sm font-semibold mb-2">{post.category}</span>
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#C9973A] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-white/55 mb-4 flex-grow line-clamp-2">{post.excerpt}</p>
                    <div className="text-sm text-white/40 mb-4">{post.date}</div>
                    <div style={{ color: GOLD }} className="font-medium inline-flex items-center gap-2 group-hover:translate-x-2 transition-transform">
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

        {/* Newsletter - matches Footer style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            background: '#0f1923',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 20,
            padding: '48px 40px',
            marginTop: 64,
            textAlign: 'center',
          }}
        >
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif" }} className="text-2xl md:text-3xl font-bold text-white mb-4">
            Stay&nbsp;
            <span style={{ fontStyle: 'italic', color: GOLD }}>Updated</span>
          </h2>
          <p className="text-white/60 mb-6 max-w-xl mx-auto">
            Subscribe to our newsletter for travel tips, destination guides, and exclusive deals.
          </p>
          <form className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#C9973A]/50"
            />
            <button
              type="submit"
              style={{ background: 'linear-gradient(135deg, #5D0531, #8B0045)' }}
              className="text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
