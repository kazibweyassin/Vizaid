'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion as m } from 'framer-motion';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { tourPackages } from '@/lib/tours-data';

const GOLD = '#C9973A';

const heroSlides = [
  { text: 'Discover breathtaking international destinations' },
  { text: 'Experience the wild beauty of Uganda' },
  { text: 'Adventure awaits in every journey' },
  { text: 'Travel with friends, make memories for life' },
  { text: 'Explore new cultures and experiences' },
  { text: 'Your next adventure starts here' },
];

const tourCategories = [
  {
    title: 'International Tours',
    description: 'Explore destinations around the world with our carefully curated international tour packages.',
    href: '/services/tours/international',
    image: 'https://images.unsplash.com/photo-1612409578638-b890d0fa9364?q=80&w=1170&auto=format&fit=crop',
    features: ['Dubai Campus Vibe (for university students)', 'European Adventures', 'African Safaris', 'Asian Destinations'],
  },
  {
    title: 'Domestic Tours',
    description: 'Discover the beauty of Uganda with our domestic tour packages including gorilla trekking and wildlife safaris.',
    href: '/services/tours/domestic',
    image: 'https://images.unsplash.com/photo-1489516408517-0c0a15662682?q=80&w=1074&auto=format&fit=crop',
    features: ['Gorilla Trekking', 'Wildlife Safaris', 'Cultural Tours', 'Adventure Activities'],
  },
];

export default function ToursContent() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setCurrent((prev) => (prev + 1) % heroSlides.length), 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#080e15] min-h-screen">
      {/* Hero */}
      <div className="relative h-96 overflow-hidden">
        <video className="absolute inset-0 w-full h-full object-cover" src="/dubaicity.mp4" autoPlay muted loop playsInline />
        <div className="absolute inset-0 bg-black/60" />
        <AnimatePresence mode="wait">
          <m.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="relative h-full flex items-center z-10"
          >
            <div className="text-left text-white pl-6 md:pl-24 pr-4 py-8 w-full">
              <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif" }} className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">{heroSlides[current].text}</h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl">Real, rare, and remarkable adventures — curated itineraries, local experts, unforgettable moments.</p>
            </div>
          </m.div>
        </AnimatePresence>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${idx === current ? 'bg-white' : 'bg-white/50'} border border-white transition-all`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto py-16 px-4 md:px-8 relative">
        {/* Tour Categories - dark cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {tourCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={category.href}>
                <div
                  style={{
                    background: '#0f1923',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 20,
                    overflow: 'hidden',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.35)',
                    transition: 'all 0.3s ease',
                  }}
                  className="h-full flex flex-col group hover:border-[rgba(201,151,58,0.3)]"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image src={category.image} alt={category.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" unoptimized />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif" }} className="text-2xl md:text-3xl font-bold text-white">{category.title}</h2>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <p className="text-white/60 mb-6">{category.description}</p>
                    <div className="space-y-3 mb-6">
                      {category.features.map((f) => (
                        <div key={f} className="text-sm text-white/70 flex items-center gap-3">
                          <span style={{ color: GOLD }}>✓</span>
                          {f}
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto flex gap-4">
                      <span style={{ color: GOLD }} className="font-medium inline-flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                        Explore {category.title}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </span>
                      <Link href="/contact">
                        <button style={{ background: 'linear-gradient(135deg, #5D0531, #8B0045)' }} className="text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">Book Now</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Popular Tours - quick links */}
        <div className="mb-16">
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif" }} className="text-2xl md:text-3xl font-bold text-white mb-6">
            Popular&nbsp;
            <span style={{ fontStyle: 'italic', color: GOLD }}>Tours</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tourPackages
              .filter((t) => ['paris-london', 'dubai-campus-vibe', 'gorilla-trekking'].includes(t.id))
              .map((tour, i) => (
                <motion.div
                  key={tour.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/services/tours/${tour.id}`}>
                    <div
                      style={{
                        background: '#0f1923',
                        border: '1px solid rgba(255,255,255,0.07)',
                        borderRadius: 16,
                        overflow: 'hidden',
                        transition: 'all 0.3s ease',
                      }}
                      className="group hover:border-[rgba(201,151,58,0.3)]"
                    >
                      <div className="relative h-40 overflow-hidden">
                        <Image src={tour.image} alt={tour.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" unoptimized />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: GOLD }}>{tour.category}</span>
                          <h3 className="text-lg font-bold text-white mt-1">{tour.title}</h3>
                          <div className="text-sm text-white/70 mt-1">{tour.duration} · {tour.price}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Student Offers - dark style */}
        <div style={{ background: '#0f1923', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: '48px 40px' }} className="mb-16">
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif" }} className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Special Offers for&nbsp;
            <span style={{ fontStyle: 'italic', color: GOLD }}>University Students</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-white/65 text-lg mb-6">
                Enjoy exclusive discounts and experiences tailored for students. Our Dubai Campus Vibe tour is designed for vibrant campus life, city exploration, and youth-focused activities.
              </p>
              <Link href="/services/tours/international">
                <button style={{ background: 'linear-gradient(135deg, #5D0531, #8B0045)' }} className="text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">View Student Tours</button>
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="overflow-hidden rounded-xl shadow-lg w-full max-w-xl">
                <Image src="/CampusVibe.PNG" alt="Campus Vibe flyer" width={900} height={1200} className="object-cover w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Our Tours - dark style */}
        <div style={{ background: '#0f1923', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: '48px 40px' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif" }} className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Why Choose&nbsp;
            <span style={{ fontStyle: 'italic', color: GOLD }}>Our Tours?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Customized Packages', desc: 'Tailored tours to match your preferences and budget', icon: '✓' },
              { title: 'Expert Guides', desc: 'Knowledgeable local guides for authentic experiences', icon: '✓' },
              { title: 'Memorable Experiences', desc: 'Carefully curated itineraries for unforgettable memories', icon: '✓' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(93,5,49,0.2)' }}>
                  <span style={{ color: GOLD }} className="text-2xl font-bold">{item.icon}</span>
                </div>
                <h3 className="font-bold text-white mb-2 text-lg">{item.title}</h3>
                <p className="text-white/55 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
