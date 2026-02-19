'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import SearchBar from '@/components/forms/SearchBar';
import { useState, useEffect, useRef } from 'react';

const heroSlides = [
  { text: 'Discover breathtaking international destinations' },
  { text: 'Experience the wild beauty of Uganda' },
  { text: 'Adventure awaits in every journey' },
  { text: 'Travel with friends, make memories for life' },
  { text: 'Explore new cultures and experiences' },
  { text: 'Your next adventure starts here' },
];

export default function Hero() {
  const router = useRouter();
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const [current, setCurrent] = useState(0);
  const [showSearchModal, setShowSearchModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowSearchModal(false);
    };
    if (showSearchModal) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [showSearchModal]);

  const handleSearch = (params: { q?: string; start?: string; end?: string }) => {
    setShowSearchModal(false);
    const qs = new URLSearchParams(params as Record<string, string>);
    const query = qs.toString();
    router.push(`/search${query ? `?${query}` : ''}`);
  };

  return (
    <section className="relative text-white overflow-hidden">
      <div className="relative h-[680px] md:h-[760px] w-full">
        {/* Video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/dubaicity.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/55" />
        {/* Rotating text slides */}
        <div className="absolute inset-0 flex items-center px-6 z-10">
          <div className="w-full max-w-3xl text-left pl-6 md:pl-12 lg:pl-24">
            <motion.h1
              key={current}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-lg text-left"
            >
              {heroSlides[current].text}
            </motion.h1>
            <motion.p
              key={`p-${current}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl"
            >
              Real, rare, and remarkable adventures — curated itineraries, local experts, unforgettable moments.
            </motion.p>
            <div className="mt-6 flex items-center gap-4 flex-wrap">
              <Link href="/services/tours">
                <Button variant="primary" size="lg">View our destinations</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outlineLight" size="lg">Start your journey</Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Slider controls */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${idx === current ? 'bg-white' : 'bg-white/50'} border border-white transition-all`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Search tours pill trigger */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 z-30">
          <button
            onClick={() => setShowSearchModal(true)}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/95 text-gray-800 font-medium shadow-lg hover:bg-white hover:shadow-xl hover:scale-105 active:scale-100 transition-all duration-200"
            aria-label="Open search"
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Search tours
          </button>
        </div>

        {/* subtle down arrow hint */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/70 text-sm">
          Scroll to explore ↓
        </div>
      </div>

      {/* Search modal */}
      {showSearchModal && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Search tours"
          onMouseDown={(e) => {
            if (e.target === overlayRef.current) setShowSearchModal(false);
          }}
        >
          <div
            className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-6"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Search Tours & Destinations</h2>
              <button
                onClick={() => setShowSearchModal(false)}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      )}
    </section>
  );
}

                                