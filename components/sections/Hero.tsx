'use client';


import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import SearchBar from '@/components/forms/SearchBar';
import { useState, useEffect } from 'react';

export default function Hero() {
  const router = useRouter();

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1612409578638-b890d0fa9364?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'Discover breathtaking international destinations',
    },
    {
      image: 'https://images.unsplash.com/photo-1489516408517-0c0a15662682?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'Experience the wild beauty of Uganda',
    },
    {
      image: 'https://images.unsplash.com/photo-1549944850-84e00be4203b?q=80&w=1068&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'Adventure awaits in every journey',
    },
    {
      image: 'https://images.unsplash.com/photo-1527288012656-13ea8f91bd63?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'Travel with friends, make memories for life',
    },
    {
      image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'Explore new cultures and experiences',
    },
    {
      image: 'https://images.unsplash.com/photo-1581596326248-f55ac7852760?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'Your next adventure starts here',
    },
  ];

  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (params: { q?: string; start?: string; end?: string }) => {
    const qs = new URLSearchParams(params as Record<string, string>);
    const query = qs.toString();
    router.push(`/search${query ? `?${query}` : ''}`);
  };

  return (
    <section className="relative text-white overflow-hidden">
      <div className="relative h-[680px] md:h-[760px] w-full">
        {/* Hero Slider */}
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <Image
              src={slide.image}
              alt={slide.text}
              fill
              className="object-cover"
              priority={idx === 0}
            />
            <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />
            <div className="absolute inset-0 flex items-center px-6">
              <div className="w-full max-w-3xl text-left pl-6 md:pl-12 lg:pl-24">
                <motion.h1
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-lg animate-fade-in text-left"
                >
                  {slide.text}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9 }}
                  className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl"
                >
                  Real, rare, and remarkable adventures — curated itineraries, local experts, unforgettable moments.
                </motion.p>
                <div className="mt-6 flex items-center gap-4 flex-wrap">
                  <Link href="/services/tours">
                    <Button variant="primary" size="lg">View our destinations</Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" size="lg">Start your journey</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
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

        {/* centered search card (matches screenshot placement) */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 w-full max-w-3xl px-4 md:px-0 z-30">
          <div className="bg-white/95 rounded-xl shadow-2xl p-4 md:p-5">
            <SearchBar
              compact
              onSearch={handleSearch}
            />
          </div>
        </div>

        {/* subtle down arrow hint */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/70 text-sm">
          Scroll to explore ↓
        </div>
      </div>
    </section>
  );
}

                                